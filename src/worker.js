export default {
  async fetch(request, env) {
    return handleRequest(request, env)
  }
}

const config = {
  no_ref: "off",
  theme: "",
  cors: "on",
  unique_link: true,
  custom_link: false,
  safe_browsing_api_key: ""
}

const html404 = `<!DOCTYPE html>
<body>
  <h1>404 Not Found.</h1>
  <p>The url you visit is not found.</p>
</body>`

function responseHeader() {
  if (config.cors === "on") {
    return {
      "content-type": "text/html;charset=UTF-8",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST",
      "Access-Control-Allow-Headers": "Content-Type"
    }
  }
  return { "content-type": "text/html;charset=UTF-8" }
}

async function randomString(len = 6) {
  const chars = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678"
  let result = ""
  for (let i = 0; i < len; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return result
}

async function sha512(url) {
  const data = new TextEncoder().encode(url)
  const digest = await crypto.subtle.digest("SHA-512", data)
  return [...new Uint8Array(digest)]
    .map(b => b.toString(16).padStart(2, "0"))
    .join("")
}

async function checkURL(url) {
  const reg = /^https?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?$/
  return reg.test(url)
}

async function saveURL(env, url) {
  const key = await randomString()
  const exist = await env.LINKS.get(key)
  if (!exist) {
    await env.LINKS.put(key, url)
    return key
  }
  return saveURL(env, url)
}

async function isURLExist(env, hash) {
  return await env.LINKS.get(hash)
}

async function isURLSafe(url) {
  if (!config.safe_browsing_api_key) return true

  const body = JSON.stringify({
    client: { clientId: "Url-Shorten-Worker", clientVersion: "1.0.7" },
    threatInfo: {
      threatTypes: [
        "MALWARE",
        "SOCIAL_ENGINEERING",
        "POTENTIALLY_HARMFUL_APPLICATION",
        "UNWANTED_SOFTWARE"
      ],
      platformTypes: ["ANY_PLATFORM"],
      threatEntryTypes: ["URL"],
      threatEntries: [{ url }]
    }
  })

  const res = await fetch(
    `https://safebrowsing.googleapis.com/v4/threatMatches:find?key=${config.safe_browsing_api_key}`,
    { method: "POST", body }
  )

  const json = await res.json()
  return Object.keys(json).length === 0
}

async function handleRequest(request, env) {
  console.log('✅ 请求到达Worker:', request.method, request.url)
  const url = new URL(request.url)
  const path = url.pathname.slice(1)
  const params = url.search

  // POST: 创建短链
  if (request.method === "POST") {
    const req = await request.json()
    if (!await checkURL(req.url)) {
      return new Response(`{"status":500,"key":": Error: Url illegal."}`, {
        headers: responseHeader()
      })
    }

    let key
    if (config.unique_link) {
      const hash = await sha512(req.url)
      const exist = await isURLExist(env, hash)
      if (exist) {
        key = exist
      } else {
        key = await saveURL(env, req.url)
        await env.LINKS.put(hash, key)
      }
    } else {
      key = await saveURL(env, req.url)
    }

    return new Response(`{"status":200,"key":"/${key}"}`, {
      headers: responseHeader()
    })
  }

  if (request.method === "OPTIONS") {
    return new Response("", { headers: responseHeader() })
  }

  // 根路径 → 返回 index.html
  if (!path) {
    const html = await env.ASSETS.fetch("index.html")
    return new Response(html.body, {
      headers: { "content-type": "text/html;charset=UTF-8" }
    })
  }

  // 查询短链
  const value = await env.LINKS.get(path)
  if (!value) {
    return new Response(html404, {
      status: 404,
      headers: { "content-type": "text/html;charset=UTF-8" }
    })
  }

  const location = params ? value + params : value

  // 安全检查
  if (config.safe_browsing_api_key && !await isURLSafe(location)) {
    let page = await env.ASSETS.fetch("safe-browsing.html")
    let html = await page.text()
    html = html.replace(/{Replace}/gm, location)
    return new Response(html, {
      headers: { "content-type": "text/html;charset=UTF-8" }
    })
  }

  // no-ref
  if (config.no_ref === "on") {
    let page = await env.ASSETS.fetch("no-ref.html")
    let html = await page.text()
    html = html.replace(/{Replace}/gm, location)
    return new Response(html, {
      headers: { "content-type": "text/html;charset=UTF-8" }
    })
  }

  return Response.redirect(location, 302)
}
