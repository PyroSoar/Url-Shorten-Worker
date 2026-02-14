let res;
function shorturl() {
  if (document.querySelector("#text").value == "") {
    alert("URL不能为空！");
    return;
  }
  function checkURL(url) {
    const reg = /^https?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=#]*)?$/;
    return reg.test(url);
  }
  if (!checkURL(document.querySelector("#text").value)) {
    alert("无效的URL！");
    return;
  }

  document.getElementById("searchbtn").disabled = true;
  document.getElementById("searchbtn").innerHTML =
    '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>请稍后...';
  fetch("/api/shorten", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ url: document.querySelector("#text").value }),
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (myJson) {
      res = myJson;
      document.getElementById("searchbtn").disabled = false;
      document.getElementById("searchbtn").innerHTML = "缩短";
      if (res.key !== "")
        document.getElementById("result").innerHTML =
          "<code>" + window.location.origin + res.key + "</code>";
      // Show modal without jQuery. Use Bootstrap 5 API if available, otherwise fallback.
      var modalEl = document.getElementById('exampleModal');
      if (modalEl) {
        if (window.bootstrap && bootstrap.Modal) {
          var modalInstance = bootstrap.Modal.getOrCreateInstance(modalEl);
          modalInstance.show();
        } else {
          modalEl.classList.add('show');
          modalEl.style.display = 'block';
          modalEl.setAttribute('aria-modal','true');
          modalEl.removeAttribute('aria-hidden');
          // add simple backdrop
          if (!document.getElementById('tempModalBackdrop')) {
            var backdrop = document.createElement('div');
            backdrop.className = 'modal-backdrop fade show';
            backdrop.id = 'tempModalBackdrop';
            document.body.appendChild(backdrop);
          }
        }
      }
    })
    .catch(function (err) {
      alert("Unknow error. Please retry!");
      console.log(err);
      document.getElementById("searchbtn").disabled = false;
      document.getElementById("searchbtn").innerHTML = "缩短";
    });
}
function copyurl(id, attr) {
  let target = null;

  if (attr) {
    target = document.createElement("div");
    target.id = "tempTarget";
    target.style.opacity = "0";
    if (id) {
      let curNode = document.querySelector("#" + id);
      target.innerText = curNode[attr];
    } else {
      target.innerText = attr;
    }
    document.body.appendChild(target);
  } else {
    target = document.querySelector("#" + id);
  }

  try {
    let range = document.createRange();
    range.selectNode(target);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    console.log("Copy success");
  } catch (e) {
    console.log("Copy error");
  }

  if (attr) {
    // remove temp target
    target.parentElement.removeChild(target);
  }
}
document.addEventListener('DOMContentLoaded', function() {
  // Initialize popovers without jQuery.
  var popoverEls = document.querySelectorAll('[data-toggle="popover"]');
  if (popoverEls.length) {
    if (window.bootstrap && bootstrap.Popover) {
      popoverEls.forEach(function (el) {
        new bootstrap.Popover(el);
      });
    } else {
      // Fallback: simple hover tooltip-like behavior
      popoverEls.forEach(function (el) {
        el.addEventListener('mouseenter', function() {
          var title = el.getAttribute('title') || el.getAttribute('data-original-title');
          if (!title) return;
          var tip = document.createElement('div');
          tip.className = 'custom-popover';
          tip.innerText = title;
          document.body.appendChild(tip);
          var rect = el.getBoundingClientRect();
          tip.style.position = 'absolute';
          tip.style.left = (rect.left + window.pageXOffset) + 'px';
          tip.style.top = (rect.bottom + window.pageYOffset) + 'px';
          el._customPopover = tip;
        });
        el.addEventListener('mouseleave', function() {
          if (el._customPopover) {
            document.body.removeChild(el._customPopover);
            el._customPopover = null;
          }
        });
      });
    }
  }

  if (document.body.clientWidth>600 && window.self === window.top){
    window.open("https://lzc2002.top/tools/tools-pc.html?src=https%3A%2F%2Flnk.lzc2002.top%2F","_self");
  }
});
