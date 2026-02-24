(function(){"use strict";try{if(typeof document<"u"){var i=document.createElement("style");i.appendChild(document.createTextNode('@charset "UTF-8";html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button}button::-moz-focus-inner,[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html{height:100%}body{font-family:Helvetica Neue,Helvetica,Arial,sans-serif;background:#f6f6f3;color:#444;font-size:87.5%;line-height:1.5}a{color:#467b96;text-decoration:none}a:hover{color:#499bc3;text-decoration:underline}code,pre,.mono{font-family:Menlo,Monaco,Consolas,Courier New,monospace}.p{margin:1em 0}.body-100{height:100%}a.balloon-button{display:inline-block;padding:0 6px;min-width:12px;height:18px;line-height:18px;background:#d8e7ee;font-size:.85714em;text-align:center;text-decoration:none;zoom:1;-moz-border-radius:30px;-webkit-border-radius:30px;border-radius:30px;white-space:nowrap}a.button:hover,a.balloon-button:hover{background-color:#a5cadc;color:#fff;text-decoration:none}input[type=text],input[type=password],input[type=email],textarea{background:#fff;border:1px solid #d9d9d6;padding:7px;border-radius:2px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}textarea{resize:vertical;line-height:1.5}input[type=radio],input[type=checkbox]{margin-right:3px}input.text-s,textarea.text-s{padding:5px}input.text-l,textarea.text-l{padding:10px;font-size:1.14286em}.w-10{width:10%}.w-20{width:20%}.w-30{width:30%}.w-40{width:40%}.w-50{width:50%}.w-60{width:60%}.w-70{width:70%}.w-80{width:80%}.w-90{width:90%}.w-100{width:100%}select{border:1px solid #ccc;height:28px}.btn,#ui-datepicker-div .ui-datepicker-current,#ui-datepicker-div .ui-datepicker-close{border:none;background-color:#e9e9e6;cursor:pointer;border-radius:2px;display:inline-block;padding:0 12px;height:32px;color:#666;vertical-align:middle;zoom:1}.btn:hover,#ui-datepicker-div .ui-datepicker-current:hover,#ui-datepicker-div .ui-datepicker-close:hover{transition-duration:.4s;background-color:#dbdbd6}.btn:active,#ui-datepicker-div .ui-datepicker-current:active,#ui-datepicker-div .ui-datepicker-close:active,.btn.active,#ui-datepicker-div .active.ui-datepicker-current,#ui-datepicker-div .active.ui-datepicker-close{background-color:#d6d6d0}.btn:disabled,#ui-datepicker-div .ui-datepicker-current:disabled,#ui-datepicker-div .ui-datepicker-close:disabled{background-color:#f7f7f6;cursor:default}.btn:disabled,#ui-datepicker-div .ui-datepicker-current:disabled,#ui-datepicker-div .ui-datepicker-close:disabled{color:#999}.btn-xs,#ui-datepicker-div .ui-datepicker-current,#ui-datepicker-div .ui-datepicker-close{padding:0 10px;height:25px;font-size:13px}.btn-s{height:28px}.btn-l{height:40px;font-size:1.14286em;font-weight:700}.primary{border:none;background-color:#467b96;cursor:pointer;border-radius:2px;color:#fff}.primary:hover{transition-duration:.4s;background-color:#3c6a81}.primary:active,.primary.active{background-color:#39647a}.primary:disabled{background-color:#508cab;cursor:default}.btn-group{display:inline-block}.btn-warn{border:none;background-color:#b94a48;cursor:pointer;border-radius:2px;color:#fff}.btn-warn:hover{transition-duration:.4s;background-color:#a4403f}.btn-warn:active,.btn-warn.active{background-color:#9c3e3c}.btn-warn:disabled{background-color:#c1605e;cursor:default}.btn-link,.btn-link:hover,.btn-link:focus,.btn-link:active,.btn-link.active{background-color:transparent}.btn-drop{position:relative}.dropdown-toggle{padding-right:8px}.dropdown-menu{list-style:none;position:absolute;z-index:2;left:0;margin:0;padding:0;border:1px solid #d9d9d6;background:#fff;text-align:left;min-width:108px;display:none}.dropdown-menu li{white-space:nowrap}.dropdown-menu li.multiline{padding:5px 12px 12px}.dropdown-menu a{display:block;padding:5px 12px;color:#666}.dropdown-menu a:hover{background:#f6f6f3;text-decoration:none!important}.message{padding:8px 10px;border-radius:2px}.message a{font-weight:700;text-decoration:underline}.error{background:#fbe3e4;color:#8a1f11}.error a{color:#8a1f11}.notice{background:#fff6bf;color:#8a6d3b}.notice a{color:#8a6d3b}.success{background:#e6efc2;color:#264409}.success a{color:#264409}.balloon{display:inline-block;padding:0 4px;min-width:10px;height:14px;line-height:14px;background:#b9b9b6;vertical-align:text-top;text-align:center;font-size:12px;color:#fff;border-radius:20px}.typecho-pager{list-style:none;float:right;margin:0;padding:0;line-height:1;text-align:center;zoom:1}.typecho-pager li{display:inline-block;margin:0 3px;height:28px;line-height:28px}.typecho-pager a{display:block;padding:0 10px;border-radius:2px}.typecho-pager a:hover{text-decoration:none;background:#e9e9e6}.typecho-pager li.current a{background:#e9e9e6;color:#444}.typecho-head-nav{padding:0 10px;background:#292d33}.typecho-head-nav a{color:#bbb}.typecho-head-nav a:hover,.typecho-head-nav a:focus{color:#fff;text-decoration:none}#typecho-nav-list{float:left}#typecho-nav-list ul{list-style:none;margin:0;padding:0}#typecho-nav-list ul:first-child{border-left:1px solid #383d45}#typecho-nav-list .root{position:relative;float:left}#typecho-nav-list .parent a{display:block;float:left;padding:0 20px;border-right:1px solid #383d45;height:36px;line-height:36px;color:#bbb}#typecho-nav-list .parent a:hover,#typecho-nav-list .focus .parent a,#typecho-nav-list .root:hover .parent a{background:#202328;color:#fff;text-decoration:none}#typecho-nav-list .focus .parent a{font-weight:700}#typecho-nav-list .child{position:absolute;top:36px;display:none;margin:0;min-width:160px;max-width:240px;background:#202328;z-index:250}#typecho-nav-list .root:hover .child{display:block}#typecho-nav-list .child li a{color:#bbb;display:block;padding:0 20px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;height:36px;line-height:36px}#typecho-nav-list .child li a:hover,#typecho-nav-list .child li a:focus{background:#292d33;color:#fff}#typecho-nav-list .child li.focus a{color:#6da1bb;font-weight:700}.typecho-head-nav .operate{float:right}.typecho-head-nav .operate a{display:inline-block;margin-left:-1px;padding:0 20px;border:1px solid #383d45;border-width:0 1px;line-height:36px;color:#bbb}.typecho-head-nav .operate a:hover{background-color:#202328;color:#fff}.typecho-head-nav .operate .language-select{display:inline-block;margin-left:-1px;padding:0 20px;border:1px solid #383d45;border-width:0 1px;line-height:36px}.typecho-foot{padding:4em 0 3em;color:#999;line-height:1.8;text-align:center}.typecho-foot .copyright p{margin:10px 0 0}.typecho-foot .resource{color:#ccc}.typecho-foot .resource a{margin:0 3px;color:#999}.browsehappy{border:none;text-align:center}.popup{display:none;position:absolute;top:0;left:0;margin:0;padding:8px 0;border:none;width:100%;z-index:10;text-align:center;-moz-border-radius:0;-webkit-border-radius:0;border-radius:0}.popup ul{list-style:none;margin:0;padding:0;text-align:center}.popup ul li{display:inline-block;margin-right:10px}.loading{padding-left:20px!important;background:transparent url(data:image/gif;base64,R0lGODlhEAAQAPQAAPn595mZmfb29K2trcrKyZqamqenpunp6NfX1qCgoMTEw76+vu7u7NLS0OPj4bOzs7m5uAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAAFUCAgjmRpnqUwFGwhKoRgqq2YFMaRGjWA8AbZiIBbjQQ8AmmFUJEQhQGJhaKOrCksgEla+KIkYvC6SJKQOISoNSYdeIk1ayA8ExTyeR3F749CACH5BAkKAAAALAAAAAAQABAAAAVoICCKR9KMaCoaxeCoqEAkRX3AwMHWxQIIjJSAZWgUEgzBwCBAEQpMwIDwY1FHgwJCtOW2UDWYIDyqNVVkUbYr6CK+o2eUMKgWrqKhj0FrEM8jQQALPFA3MAc8CQSAMA5ZBjgqDQmHIyEAIfkECQoAAAAsAAAAABAAEAAABWAgII4j85Ao2hRIKgrEUBQJLaSHMe8zgQo6Q8sxS7RIhILhBkgumCTZsXkACBC+0cwF2GoLLoFXREDcDlkAojBICRaFLDCOQtQKjmsQSubtDFU/NXcDBHwkaw1cKQ8MiyEAIfkECQoAAAAsAAAAABAAEAAABVIgII5kaZ6AIJQCMRTFQKiDQx4GrBfGa4uCnAEhQuRgPwCBtwK+kCNFgjh6QlFYgGO7baJ2CxIioSDpwqNggWCGDVVGphly3BkOpXDrKfNm/4AhACH5BAkKAAAALAAAAAAQABAAAAVgICCOZGmeqEAMRTEQwskYbV0Yx7kYSIzQhtgoBxCKBDQCIOcoLBimRiFhSABYU5gIgW01pLUBYkRItAYAqrlhYiwKjiWAcDMWY8QjsCf4DewiBzQ2N1AmKlgvgCiMjSQhACH5BAkKAAAALAAAAAAQABAAAAVfICCOZGmeqEgUxUAIpkA0AMKyxkEiSZEIsJqhYAg+boUFSTAkiBiNHks3sg1ILAfBiS10gyqCg0UaFBCkwy3RYKiIYMAC+RAxiQgYsJdAjw5DN2gILzEEZgVcKYuMJiEAOwAAAAAAAAAAAA==) no-repeat left center}.typecho-option{list-style:none;margin:1em 0;padding:0}.typecho-option-submit li{border-bottom:none}.typecho-option label.typecho-label{display:block;margin-bottom:.5em;font-weight:700}.typecho-option label.required:after{content:" *";color:#b94a48}.typecho-option span{margin-right:15px}.typecho-option .description{margin:.5em 0 0;color:#999;font-size:.92857em}.typecho-option input.file{width:100%;margin:.7em 0}.front-archive{padding-left:1.5em}.profile-avatar{border:1px dashed #d9d9d6;max-width:100%}.typecho-install{padding-bottom:2em}.typecho-install-patch{margin-bottom:2em;padding:2em 0;background-color:#292d33;color:#fff;text-align:center}.typecho-install-patch ol{list-style:none;margin:3em 0 1em;padding:0;color:#999}.typecho-install-patch li{display:inline-block;margin:0 .8em}.typecho-install-patch span{display:inline-block;margin-right:5px;width:20px;height:20px;line-height:20px;border:2px solid #999;text-align:center;border-radius:2em}.typecho-install-patch li.current{color:#fff;font-weight:700}.typecho-install-patch li.current span{border-color:#fff}.typecho-install .typecho-install-body input{width:100%}.typecho-install-body .typecho-option li{margin:1em 0}#typecho-welcome{margin:1em 0;padding:1em 2em;background-color:#e9e9e6}.welcome-board{color:#999;font-size:1.15em}.welcome-board em{color:#444;font-size:2em;font-style:normal;font-family:Georgia,serif}#start-link{margin-bottom:25px;padding:0 0 35px;border-bottom:1px solid #ececec}#start-link li{float:left;margin-right:1.5em}#start-link .balloon{margin-top:2px}.latest-link li{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.latest-link span{display:inline-block;margin-right:4px;padding-right:8px;border-right:1px solid #ececec;width:37px;text-align:right;color:#999}.update-check{font-size:14px}.typecho-login-wrap{display:table;margin:0 auto;height:100%}.typecho-login{display:table-cell;padding:30px 0 100px;text-align:center;vertical-align:middle}.typecho-login h1{margin:0 0 1em}.typecho-login .more-link{margin-top:2em;color:#ccc}.typecho-login .more-link a{margin:0 3px}.typecho-page-title h2{margin:25px 0 10px;font-size:1.28571em}.typecho-page-title h2 a{margin-left:10px;padding:3px 8px;background:#e9e9e6;font-size:.8em;border-radius:2px}.typecho-page-title h2 a:hover{text-decoration:none}.typecho-dashboard ul{list-style:none;padding:0}.typecho-dashboard li{margin-bottom:5px}.typecho-option-tabs{list-style:none;margin:1em 0 0;padding:0;font-size:13px;text-align:center}.typecho-option-tabs.fix-tabs{margin-bottom:1em}.typecho-option-tabs a{display:block;margin-right:-1px;border:1px solid #d9d9d6;padding:0 15px;height:26px;line-height:26px;color:#666;box-sizing:border-box}.typecho-option-tabs a:hover{background-color:#e9e9e6;color:#666;text-decoration:none}.typecho-option-tabs li{float:left}.typecho-option-tabs li:first-child a{border-radius:2px 0 0 2px}.typecho-option-tabs li:last-child a{border-radius:0 2px 2px 0}.typecho-option-tabs.right{float:right}.typecho-option-tabs li.current a,.typecho-option-tabs li.active a{background-color:#e9e9e6}.typecho-list-operate{margin:1em 0}.typecho-list-operate input,.typecho-list-operate button,.typecho-list-operate select{vertical-align:bottom}.typecho-list-operate input[type=checkbox]{vertical-align:text-top}.typecho-list-operate .operate{float:left}.typecho-list-operate .search{float:right}.typecho-list-operate span.operate-delete,a.operate-delete,.typecho-list-operate span.operate-button-delete,a.operate-button-delete{color:#b94a48}a.operate-edit{color:#070}a.operate-reply{color:#545c30}.typecho-list-operate a:hover{text-decoration:none}.typecho-list-table-title{margin:1em 0;color:#999;text-align:center}.typecho-table-wrap{padding:30px;background:#fff}.typecho-list-table{width:100%;border-collapse:collapse;table-layout:fixed}.typecho-list-table.deactivate{color:#999}.typecho-list-table .right{text-align:right}.typecho-list-table th{padding:0 10px 10px;border-bottom:2px solid #f0f0ec;text-align:left}.typecho-list-table td{padding:10px;border-top:1px solid #f0f0ec;word-break:break-all}.typecho-list-table td pre{overflow:auto}.typecho-list-table .status{margin-left:5px;color:#999;font-size:.92857em;font-style:normal}.typecho-list-table tbody tr:hover td{background-color:#f6f6f3}.typecho-list-table tbody tr.checked td{background-color:#fff9e8}.typecho-list-table tr td .hidden-by-mouse{opacity:0}.typecho-list-table tr:hover td .hidden-by-mouse{opacity:1}.warning{color:#b94a48}.comment-reply-content{position:relative;margin:1em 0;padding:0 1em;border:1px solid transparent;background-color:#f0f0ec}.comment-reply-content:after{position:absolute;right:1em;border:8px solid #f0f0ec;border-color:#f0f0ec #f0f0ec transparent transparent;content:" "}.comment-meta span,.comment-date{font-size:.92857em;color:#999}.comment-action a,.comment-action span{margin-right:4px}.comment-edit label{display:block}.comment-content img{max-width:100%}#typecho-respond{padding:10px;display:none}.typecho-theme-list img{margin:1em 0;max-width:100%;max-height:240px}.typecho-theme-list cite{font-style:normal;color:#999}.typecho-theme-list tbody tr.current td{background-color:#fff9e8}.typecho-page-main .typecho-option input.text{width:100%}.typecho-page-main .typecho-option input.num{width:40px}.typecho-page-main .typecho-option textarea{width:100%;height:100px}.typecho-page-main .typecho-option .multiline{display:block;margin:.3em 0}.typecho-page-main .typecho-option .multiline.hidden{display:none}.typecho-select-theme{height:25px;line-height:25px;margin:15px 0}.typecho-select-theme h5{color:#e47e00;font-weight:700;float:left;font-size:14px;width:120px;margin-right:10px}.typecho-select-theme select{width:150px}.typecho-edit-theme ul{list-style:none;margin:0;padding:0}.typecho-edit-theme li{padding:3px 10px}.typecho-edit-theme .current{background-color:#e6e6e3}.typecho-edit-theme .current a{color:#444}.typecho-edit-theme textarea{font-size:.92857em;line-height:1.2;height:500px}.typecho-post-area .edit-draft-notice{color:#999;font-size:.92857em}.typecho-post-area .edit-draft-notice a{color:#b94a48}.typecho-post-area .typecho-label{display:block;margin:1em 0 -.5em;font-weight:700}.typecho-post-area #auto-save-message{display:block;margin-top:.5em;color:#999;font-size:.92857em}.typecho-post-area .submit .right button{margin-left:5px}.typecho-post-area .right{float:right;padding-left:24px}.typecho-post-area .left{float:left}.typecho-post-area .out-date{border:1px solid #d3dbb3;padding:3px;background:#fff}.typecho-post-area input.title{font-size:1.17em;font-weight:700}.typecho-post-area .url-slug{margin-top:-.5em;color:#aaa;font-size:.92857em;word-break:break-word}.typecho-post-area #slug{padding:2px;border:none;background:#fffbcc;color:#666}.typecho-post-area #text{resize:none}#advance-panel{display:none}#custom-field{margin:1em 0;padding:10px 15px;background:#fff}#custom-field.fold table,#custom-field.fold .description{display:none}#custom-field .description{margin-top:10px;text-align:right}#custom-field .description button{float:left}#custom-field p.description{text-align:left}#custom-field .typecho-label{margin:0}#custom-field .typecho-label a{display:block;color:#444}#custom-field .typecho-label a:hover{color:#467b96;text-decoration:none}#custom-field table{margin-top:10px}#custom-field td{padding:10px 5px;font-size:.92857em;border-bottom:1px solid #f0f0ec;vertical-align:top}#custom-field td label{font-size:1em;font-weight:400}#custom-field select{height:27px}.typecho-post-area .is-draft{background:#fff1a8}.typecho-post-option .description{margin-top:-.5em;color:#999;font-size:.92857em}.category-option ul{list-style:none;border:1px solid #d9d9d6;padding:6px 12px;max-height:240px;overflow:auto;background-color:#fff;border-radius:2px}.category-option li{margin:3px 0}.visibility-option ul,.allow-option ul{list-style:none;padding:0}.typecho-page-main ul.tag-list{list-style:none;margin:0;padding:20px;background-color:#fff}.typecho-page-main ul.tag-list li{display:inline-block;margin:0 0 5px;padding:5px 5px 5px 10px;cursor:pointer}.typecho-page-main ul.tag-list li:hover{background-color:#e9e9e6}.typecho-page-main ul.tag-list li input{display:none}.typecho-page-main ul.tag-list li.checked{background-color:#fffbcc}.typecho-page-main ul.tag-list li.size-5{font-size:1em}.typecho-page-main ul.tag-list li.size-10{font-size:1.2em}.typecho-page-main ul.tag-list li.size-20{font-size:1.4em}.typecho-page-main ul.tag-list li.size-30{font-size:1.6em}.typecho-page-main ul.tag-list li.size-0{font-size:1.8em}.typecho-page-main .tag-edit-link{visibility:hidden}.typecho-page-main li:hover .tag-edit-link{visibility:visible}.typecho-attachment-photo{border:1px solid #e6e6e3;max-width:100%}#upload-panel{border:1px dashed #d9d9d6;background-color:#fff;color:#999;font-size:.92857em}#upload-panel.drag{background-color:#fffbcc}.upload-area{padding:15px;text-align:center}#file-list{list-style:none;margin:0 10px;padding:0;max-height:450px;overflow:auto;word-break:break-all}#file-list li,#file-list .insert{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}#file-list li{padding:8px 0;border-top:1px dashed #d9d9d6}#file-list .insert{display:block;max-width:100%}#file-list .file{margin-left:5px}#file-list .info{text-transform:uppercase}#btn-fullscreen-upload{visibility:hidden}.edit-media button{margin-right:6px}.resize{display:block;margin:2px auto 0;padding:2px 0;border:1px solid #d9d9d6;border-width:1px 0;width:60px;cursor:row-resize}.resize i{display:block;height:1px;background-color:#d9d9d6}.tDnD_whileDrag{background-color:#fffbcc}.icons-sprite,.icons-icon-delete,.icons-icon-edit,.icons-icon-exlink,.icons-icon-upload-active,.icons-icon-upload,.icons-mime-application,.icons-mime-archive,.icons-mime-audio,.icons-mime-html,.icons-mime-image,.icons-mime-office,.icons-mime-script,.icons-mime-text,.icons-mime-unknow,.icons-mime-video,.i-edit,.i-delete,.i-upload,.i-upload-active,.i-exlink,.mime-office,.mime-text,.mime-image,.mime-html,.mime-archive,.mime-application,.mime-audio,.mime-script,.mime-video,.mime-unknow{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAEACAYAAACphba6AAAAAklEQVR4AewaftIAAAzmSURBVLXBbYxddZ3A8e/vd/4wnQEaGtsNrsZVI7Y+BZFVKAaEdaZ/y84aDQiboC+6L5g5AxQUV2k5oW08MIIQWWvnzDRq0YjIElGyDfXfGbfQxKSti1UQrE/7wqxrYjeBJez0ae757TWehsPJvcO9d+75fMTMWAoRYTFKzRwFn2RGF0IaCx1wlIQ0Fjrgk8zokFIzRxs+yYyKkMZClxyLCGksFHySGT1QaqbUzFHhk8wo8UlmLIFSM0dFSGOhJKSxsARKzRwlPsmMPnMUQhoLNVBqptRMqZlSM6VmSgt7vb9oz1WXr6Kw56rLV+31/iJ6oFTs9f4iIvmRMrRvz1WXr9pz1eWrlKF9RPKjvd5fRJccFY3o2O+Vof8SkXdFDO03QJA1ZvZcHh37PV1SKtY/sf9ozvyVYEdA1giyxrAjOfNXrn9i/1G6pLRhvELonVKx56rLVylD+wRZY9gRsCMga5ShfXuuunwVXXJURI3BNxHxRjN7Lmf+yuONQRmK+HeBN0aNwTcBR+mCUrEuhKdp2Idz5q9c/8T+ox8P4U8581fSsA+vC+FpuuRoYV0IT1Oy/on9R4Gj9ECpmVIzpWZKzZSaKTVzdGDv3r1bVXULheHhYaFDjpIQwvuiKNoFvAeQ4eFhoWndunVb5+bm3gRsoEtKSRRFu/I8/5eRkZFoeHhYKMzOzn7IzEaBXXRJebX3eO93WROF2dnZDwGPAp8YHh7+pzzPt9EF5dXEmijMzs5+CHgU+MTIyMhTNK1bt24rXVDa2L179xuAfwU+MTIy8hQ9UtoYHR39w4kTJ943MjLyFIW5uTmjS8qrmTRRGB0d/QMFaQKMLimv9mwIYYM0USJNIYQNwLN0yVHSaDQ2RFG0a3Z29mtzc3NCYXZ21oBnG43GBrrkKPHe/xS4gD5SaqbUTKmZUjNHwSeZ0YWQxkIHHCUhjYUO+CQzOqTUTGnDJ5lR8Elm9EhpwSeZ0eSTzHySGU0+yYweKC2ENBaaQhpLSGOhKaSx0AOlZkoLPsmMJp9k5pPMaPJJZvRAaSGksdAU0lhCGgtNIY2FHihthDQWCiGNhR4pNXOU+CQz+sxRCGks1ECpmVIzpWaOgk8yowshjYUOOEpCGgsd8ElmdMhR4ZPMaCGksdADR0VIY6GPHBU+yYxFhDQWuuCoCGks9JGjwieZ0UZIY6FLjoqQxkIfOSp8khkthDQWeuCoCGks9JFSM0eJTzKjzxyFkMZCDZSaKTVTauYo+CQzuhDSWOiAoySksdABn2RGh5SaKV3wSWZ0yVHhk8xCGotPMqMkpLGENBa6pFSENBba8ElmdEmp8ElmtBHSWOiSUhHSWGjDJ5nRJUeFTzILaSwhjYWKkMZCl5SKkMZCHyk1c5T4JDP6zFEIaSzUQKmZUjOlZo6CTzKjCyGNhQ44SkIaCyU+ySyksVDhk8zokLKIkMbik8xYAmURPskspLGwBMoiQhqLTzJjCZRF+CSzkMbCEiiLCGksLJGyCJ9k5pPMWAKlZo5FhDQWlkipmaPEJ5nRZ45CSGOhBkrNlJopNVNqpnTAb/rq352/cfsAPVBew/CmqevQaO9bznHfP3/j9gG6pCxieNPUdZHKQwiRCOvfco77/vkbtw/QBaUNf8eOf4xUHkKIKAis+5tzokvpgtLC8Kap60C/jRBxmtFo5Hb93F0T++iCUjG8aeq6SOUhhIjTjEYjt+vnJiceoUtKhSgXI0ScZjQauV0/NznxCD1QSvwdU1tn75r4jOX2Ff7MaDRyu35ucuIReqSUiWzxd0xt3Xv3xC252ZcbuV0/NznxCEvgqBLZ4u+YYvauic/QB46SkMZCnyk1U2qm1EypmaPgk8zoQkhjoQOOkpDGQgd8khkdUip8khlNPsmMgk8y80lmPsmMLikt+CQzSkIaC00hjYUuKS2ENBb6RKkIaSw0hTQWSkIaCz1QaqZU+CQzn2Tmk8wo+CQzeqS0ENJY6BOlQz7JzCeZ0SVHRUhjoSmksVAIaSz0yFHik8zoM0chpLFQA6VmSs2UmjkKPsmMLoQ0FjrgKAlpLHTAJ5nRIUeFTzJjESGNhS4oLVie/31ujNIHSgsmKvSJowUVdtMnymLMfmonT70ds5/SI2UReZ7ftvfejb/J8/w2eqS0YWZPzU7e9CRNs5M3PWlmT9EDpQ3L862UWJ5vpQeOipDGQguzkzc9CQhdcpT4JDP6zFEIaSzUQKmZUjOlZo6CTzKjCyGNhQ44SkIaCx3wSWZ0yFHhk8xYREhjoQtKC7kxSp8oLaiwm1fMG1wLzNMD5TWY2Y170/hRM7uRHjgqQhoLLey9a+JB4EG65KjwSWYsIqSx0AVHRUhjoY8cFT7JjBZCGgs9cFSENBb6yFHik8zoM0chpLFQA6VmSs2UmjkKPsmMLoQ0FjrgKAlpLHTAJ5nRIaUFn2Tmk8x8khkFn2RGD5Q2QhoLfaC04ZPM6ANHCyGNhYqQxkIPlJopLfgkMwo+ycwnmfkkM3qgdCCksdAjpQM+yYweOVoIaSwUQhoLS+Ao8Ulm9JmjENJYqIFSM6VmSs0cBZ9kRhdCGgsdcJSENBY64JPM6JBSM6UNn2T/NrIpeytLpLQ3KhHPjdwxteXKDduW0SNlEQLLVGTrGX/9V88Nb94xSg+UmjkWYXBczO459d9Hv7hv15bj9MDR3m5rcMveyYn/ZAkcbYQ0/gf6QKmZo8QnmdFnjkJIY6EGSs3EzKiTUjOlZkrNlJo5OrRt27YzzzvvvJuAT4rIajP7k4g8vbCwcM/ExMRPaEPpwPbt21e9/vWvPygi94vIhcCQiLwZuDqKogMzMzPbaMPRxs6dOy82sy8AF5x55plnACuA35rZnSJyKM/z5SJyHXCbiNw5MzPzu7GxsW9R4Whhenr6QhHZJyKDvOK5hYWFSyYmJl7mFYenp6efFZFvi8j9O3fufPiGG244RYlSMTU1dbaq3isig2a228zeb2YfXVhYuGFiYuJlKsbHxx8ysx8DK/M891Q4SmZmZkacc98BVprZsZMnT15z8803n+C17Qc+qKq7ZmZmPjU2NvZDCkphamrqHcDjwEozexy48+abbz5ByQMPPHDuzMzMZ6kws0fN7DFgpYh8b8eOHe+ioBScc4mIDAL3jo2NfWxsbOw+Su67776zBgcHnxCRL01PT99Fyfj4+OGxsbGrzWwLMOSc20RBKZjZZTTleX4/Fdu3bx9Yvnz5D0RkLU2qunl6evpzVIjIFH9xBQWlICLLgYaqvkDJtddeGw0MDHwXGKZEVe+Znp4eo+SPf/zjS2aWA0MUlIKZPQNEZvYRKubn5zfMz8+voGR+fn7FqVOnHqbkvPPOWy8iCvycgqNgZg+KyGUi8vXp6emNeZ4/efLkyeOXXnopt95664s07dy5k9NuvfXWF2l64IEHzhWRgWXLll0hIl+lSUQepOAojI+Pf2NmZmZURD6uqg+rKs45mgxQ2hgaGnqBEjN7bGxs7JsUlJLx8fGrzWwjcNDMTtC5k2Z2CLhlfHz8GkrEzKiTUjOlZkrNlJopNVNqptRMqZlSM0eH3n3t82ee8zZ3E8YnTWw1xp+Ap3PknkOTb/8JbSgdeN/Gw6vOfps7CNyPcKEgQyLyZhG5WoUDl2w+so02HG2s3fz8xYb7ghgXDJw1dAawAuO3OfmdjcbCIYl0uRJdp8JtoHdefPsvf3fwi+/4FhWOFt6/6fkLHW6fCIMITYIZz7380sIlv9jxzpd5xeEPbPrVs5HwbRG9/2/Hnn74P2YuOkWJUvHuG58/2+HuRRjE2J037P2NPP9obvkNv9jxzpepODS5+iGwH4vIyuh1Z3kqHCWXfP6XI2cvj76DsBLj2P/83++u+c1X1p/gNZjJfhE+KCa7PrDpV586NLn6hxSUwtrP/+IdotHjIrLSzB43ye/8zVfWn6Dkwk//7NxLNh/5LBUNFh41eExEVqrwvQ/c/vy7KCinRWckCINg9x6YXP2xA3evuY+SC/75mbMGlg0+IeiX1m7+9V2U/GTynYcP3P32qy1niyBDkUSbKCgFQy6jaf7UifupOH/jnoEht+wHIrKWv9h88e2/+hwVCwtM8WciV1BQTjOWYzTOeOnUC5TItY9Grzv7rd9FGKZEVe65+PYjY5Qc//3CSwY5ZkMUlNOEZxAiXXHWR6g4cezYhuPH5ldQcvzY/AqZ/9+HKTn7rdF6ATX4OQXHaWYPInJZpPr1S27/5cY8tydPnTp5/L1vOJ/DX37vizSt3fxrTjv85fe+SNOFn/7ZuQPmBmTwzCsQvkqTiT1IwVE4MLn6G2s3/XoU4eOi0cORQuQcZhigtLFscOgFCoJg8NjBu9d8k4JScuCLq6/O83yjGQcxTtAhw04Ch8BuOTi5+hpKxMyok1IzpWZKzZSa/T/9x7y6ojN1QAAAAABJRU5ErkJggg==);background-repeat:no-repeat}.icons-icon-delete{background-position:0 -16px;width:16px;height:16px}.icons-icon-edit{background-position:0 -112px;width:16px;height:16px}.icons-icon-exlink{background-position:0 -32px;width:16px;height:16px}.icons-icon-upload-active{background-position:0 -232px;width:24px;height:24px}.icons-icon-upload{background-position:0 -208px;width:24px;height:24px}.icons-icon-upload:active,.icons-icon-upload.icon-upload-active{background-position:0 -232px}.icons-mime-application{background-position:0 -80px;width:16px;height:16px}.icons-mime-archive{background-position:0 -96px;width:16px;height:16px}.icons-mime-audio{background-position:0 0;width:16px;height:16px}.icons-mime-html{background-position:0 -128px;width:16px;height:16px}.icons-mime-image{background-position:0 -144px;width:16px;height:16px}.icons-mime-office{background-position:0 -160px;width:16px;height:16px}.icons-mime-script{background-position:0 -176px;width:16px;height:16px}.icons-mime-text{background-position:0 -64px;width:16px;height:16px}.icons-mime-unknow{background-position:0 -48px;width:16px;height:16px}.icons-mime-video{background-position:0 -192px;width:16px;height:16px}@media(-webkit-min-device-pixel-ratio:2),(min-resolution:192dpi){.icons-sprite,.icons-icon-delete,.icons-icon-edit,.icons-icon-exlink,.icons-icon-upload-active,.icons-icon-upload,.icons-mime-application,.icons-mime-archive,.icons-mime-audio,.icons-mime-html,.icons-mime-image,.icons-mime-office,.icons-mime-script,.icons-mime-text,.icons-mime-unknow,.icons-mime-video,.i-edit,.i-delete,.i-upload,.i-upload-active,.i-exlink,.mime-office,.mime-text,.mime-image,.mime-html,.mime-archive,.mime-application,.mime-audio,.mime-script,.mime-video,.mime-unknow{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAIACAYAAADE5+8DAAAAAklEQVR4AewaftIAABkXSURBVNXBC5ScdX3w8e/vN/9ckDTBC3kJIjfFRKhilbC5WI6BZB4TsadiIB7S81qONbtPLnpaFcgyPbN7zuOG21vOScg+u9tWKhhtisW+xSY+k5QEWwMbBVsKEbwEWqmHi741mEIuu8/vnR4GMww7OzObndn9fz5iZkwkEeFkKJ5TPKd4zlEhyMVGEyVRKIwjxXOOKpIoFMZRkIuNJlA8p3hO8ZyjQUEuNuqQRKHQAornHGOURKEwgiAXGy2keE7xnOI5xXOK5xw1BLnYGEWQi40JpHhO8ZziOUcNSRQKo0iiUJhAiucUzymec1QR5GLDA4rnHBWSKBQ8onhO8ZziOcVziucUzymeUzyneE7xnOI5pQFSRA1SRAspdbp3yZIZ314ePFBYEayiisKKYNW3lwcP3LtkyQxaRKnDvUuWzJh5yvSdIvJhE91WWBGsokJhRbDKRLeJyIdnnjJ9571LlsygBZQapGjmKdPuF+FDFAlkTHRbYUWwipLCimCViW4TyFAkwodmnjLtfimiyTJdXV2Mpquri4Pb7jliIh8XUIoE1EQ+fnDbPU/9dNtXf9tEtwlkKDEYFqzznh//5HFq6O7u5mQodcjuSLaLpasNhikRyJjo10z0awIZSgyGxdLV2R3JdlpAqVN2R7JdLF1tMEyJgAooJQbDYunq7I5kOy2iNCC7I9kulq42SKlgkIqlq7M7ku20kOI5pQGFFcEqE90moFQQUBPdVlgRrKKFlDoVVgSrTHSbQIYSg9QgpUQgY6LbCiuCVbSIUofCimCViW4TyFBiMCyWXiuWXmswTIlAxkS3FVYEq2gBpQYpMqRDIEOJwbBYujq7I9me3ZFsF0tXGwxTIpAxpEOKaDKlBit66ZWjHzPjnykyGBZLV2d3JNspye5Itoulqw2GKTLjn1965ejHrIgmU+pw9Z49h1965chyM9srlq7O7ki2UyG7I9kulq42s70vvXJk+dV79hymBZQ6Xb1nz+GP7Ewuz+5ItlNFdkey/SM7k8uv3rPnMC0iZsZEEhFOhuI5xXOK5xTPKZ5TPKd4TvGc4jnFc4rnFM8pnnOMk0Kh0KWqeapYunSp0ATKOMlms11pmnbTYo5RdHd3u8WLF3/BzFYC7xWRqZQsXbpUqJDNZrsKhQKqmqdFHFV0d3e7RYsW/SNwmYjQgF4gBGbTAo4qFi9e/AXgMjN7HLhu3759j+bz+ZRRFAqF2SLyADAbeAGYTZM5qjCzlSJC0XXLli37/rJlyxhNoVCYLSIPiMhFZvaEmV0OrFXVPE2kVPdeivbt2/coNRQKhdki8oCIXGRmT5jZ5dls9oVsNtuVpmk3TaRUISJTKcrn8ymj2Llz5+ki8oCIXGRmT5jZ5dls9gVKstlsV5qm3TSJchJ27tx5unNuj4hcZGZPmNnl2Wz2BSpks9kumkQZo507d57unNsjIheZ2RNDQ0NLstnsC7SYMgY7d+483Tm3R0QuMrMnhoaGlixfvvxFJoAyBplM5goRudDMnhgaGlqyfPnyF5kgjjHIZrN/XSgUGB4e/sfly5e/yAh2795tFC1dulRoIscYZbPZv2YSUDynVGFmxyjq7u5WGtTd3a0Umdkxmkyp7t8oWrRo0QdoUFtb2wd51b/RZEoVIvINXnXXrl27Lunu7lZq6O7u1m9/+9vzM5nMlykSkW/QZI4qvvvd796+aNGi5SJyGfC9xYsXs3v3bkazePFiXmNm39m3b9/tS5cupZmUKvL5/NC+ffuuADaa2SNmdowazOyYmT0CbNy3b98V+Xx+iCZzjCKfzw8BNwM306ClS5fSCornFM8pnlM8p3hO8ZziOcVziuccFYJcbDRREoXCOFI856giiUJhHAW52GgCxXOK5xTPKQ0KcrEFudioEORiC3Kx0WKK5xx1CnKxUSbIxcYIglxsFCVRKLSA4jlHnZIoFIqCXGwUJVEolAlysVGURKHQQornFM8pnnPUKcjFRpkgFxsjCHKxUZREodACiuccdUqiUCgKcrFRlEShUCbIxUZREoVCCymeczQoiUJhBEkUChNA8ZziOcVzjiqCXGx4QPGco0IShYJHFM8pnlM8p3hO8ZziOcVzjgpBLjaaKIlCYRwpnnNUkUShMI6CXGw0geI5Rw1BLjYakESh0EKK5xw1JFEoTGKK5xw1BLnYOAlJFApNpHjOUUMShcIkpnjOUUOQi40xSKJQaAHFc44akigUJjHFc44aglxsNCCJQqGFFM85akiiUJjEFM8pnlM856giyMWGBxTPOSokUSh4RPGc4jnFc4rnFM8pnlM856gQ5GKjiZIoFMaR4jlHFUkUCuMoyMVGEyieUzyneE5pkiAXW5CLjSZTPOeoIcjFRlEShUJRkIuNUSRRKBQlUSi0gOI5Rw1JFApjEORioyiJQqGJFM85aghysVGURKHQgCQKhRZQPOeoIYlCYQyCXGwUJVEoNJHiOUcNQS42ipIoFIqSKBTqkESh0AKK5xw1JFEoTGKK5xTPKZ5zVBHkYsMDiuccFZIoFDyieE7xnOI5xXOK5xTPKZ5zVAhysdFESRQK40jxnKOKJAqFUQS52ChKolCoQ5CLjSZQPOcYoyQKhaIgFxtFSRQKE0DxnGOMglxsFCVRKEwgxXOOMUqiUCgKcrFRlEShMAEUzznGKMjFRlEShcIEUjznGKMkCoVJQPGcY4yCXGyUSaJQmACK5xTPKZ5zjFEShcIkoHhO8ZziOUcVQS42PKB4zlEhiULBI4rnFM8pnlM8p3hO8ZziOcVziueUcSRFtJgyToLOrW3LOrc+uuzGzWfTQso4CDq3tploIiLvF+f2Lrtx89m0iHKSgs6tbSaaiDCLIkHOE+f2Lrtx89m0gHISgs6tbSaaiDCLMoKcJ87tXXbj5rNpMmWMgs6tbSaaiDCLEQhynji3d9mNm8+miZQxCDq3tploIsIsRiHIeZJx/1eKaBKlQUHn1jYTTUSYRQ1mHBKzDiuiSZQGBJ1b20w0EWEWNZhxSCwNkp51gzSRUqegc2ubiSYizKIGMw6JpUHSs26QJlPqEHRubTPRRIRZ1GDGIbE0SHrWDdICSg1B59Y2E01EmEUNZhwSS4OkZ90gLaLUkIr8bxFmUYMZh8TSIOlZN0gLKTXs7nlxA2Z3MwozDomlQdKzbpAWU6oIburtosgsnxZ6XrwOs7sZgRmHxNIg6Vk3yARQqhHJBzf1dlFklk8LPS9eh9ndlDHjkFgaJD3rBpkgymhE8sFNvV0UmeXTQs+L12F2N0VmHBJLg6Rn3SATSKlFJB/c1NtFkVk+LfS8eF1q1iuWBknPukEmmKMeIvngpl6SL63tMsunwDomCaVeIvngpt4uJhlHFUkUCh5QPKd4TvGc4jnFc4rnFM8pnlM856gQ5GKjiZIoFMaR4jlHFUkUCuMoyMVGEyiec9QQ5GKjKIlCoSjIxUZREoVCmSAXGyNIolBoIsVzjjoFudgYRRKFQlGQi42iJAqFFlA8p9QpiUJJolCYZBTPOWpIolAok0ShMIokCoUWUjyneE7xnKOGIBcbI0iiUCgT5GKjKIlCoYUUzyl1SqJQkigUJhnFc45xFuRio0wShUITKZ5z1JBEoVAmiUJhBEkUChNA8ZyjiiAXGx5QPOeokESh4BHFc4rnFM8pnlM8p3hO8ZyjQpCLjSZKolAYR4rnHFUkUSiMoyAXG02geM5RQ5CLjZOQRKHQRIrnHHUyY+fxoaE1FE1xbkCE5UwCSp2ODw2t2XPLhmf33LLh2eNDQ2uYJBTPOeo0xbmBJTdsWUPRFOcGmCQcdRJh+dQp7mdMMornHCfD7MUUuY4ixe5C5HRaTDkJZvaHu74U/sOuL4X/YGZ/yARQxsjMHiz0rNtBSaFn3Q4ze5AWU8bI0rSLCpamXbSYMgZm9uCuTev3UmHXpvV7zexBWkgZA0vTLqqwNO2ihZQGmdmDuzat30sVuzat32tmD9IiSoMsTbuowdK0ixZx1JBEodCgXZvW7wWEFlA856giyMWGBxTPOSokUSh4RPGc4jnFc4rnFM8pnlM856gQ5GKjiZIoFMaR4jlHFUkUCuMoyMVGEyiec9QQ5GLjJCRRKDSR4jmlTpamH02NK5lklDqZqDAJOeqkwrcYhcFXKBL4FC3kGAdmHPh/v3hhLUVvedvs+SJcSIsoJ+/l1Iau/n5//uXv9+dfTm3oauBlWkQ5SWa2bnfPhgOU7O7ZcMDM1tEijhqSKBQaVPjS2r8C/ooWUDznqCHIxcZJSKJQaCLFc44akigUJjHFc44aglxsNCCJQqGFFM85akiiUJjEFM85qghyseEBxXOOCkkUCh5RPKd4TvGc4jnFc4rnFM85KgS52GiiJAqFcaR4zlFFEoXCOApysdEEiuccdQpysTGCJAqFMkEuNoqSKBRaQPGc0qAkCiWJQmGSUDznaFCQi41JRPGco05JFAp1SKJQaCHFc4rnFM856hTkYqMoiUKhTJCLjREkUSi0gOI5ZZwkUShJFAotpnjOMU6CXGxMAMVzjjolUSiMIIlCYQIpnnNUEeRiwwOK5xwVkigUPKJ4TvGc4jnFc4rnFM8pnnNUCHKx0URJFArjSPGco4okCoVxFORiowkUzymeUzynNCjIxfcv2xifzyShNO5KyfDEspt680uu657OBFPGQGC6inRNOXP2E0s7t17JBFJOggjnZ1TvD3Lx/cs2xuczAZTxcaVkeGLZTb35Jdd1T6eFlHEiMF1FuqacOfuJpZ1br6RFFM85xonBETG75fjPX7x5z135I7SIY3x8y4b5XGHT2oO0mOMkmHEwtfRzu3vWfYsJ4hgDgyNidsvxn79485678keYQI7GfcuG+Vxh09qDTAKOBiVR+DEmEcVziucUzzmqCHKx4QHFc44KSRQKHlE8p3hO8ZyYGT5TPKd4TvGc4jnFc4rnFM8pnlM852iivr6+c1X1WjNbJiLnmNmZIvJrM/tP4Dtpmv59GIa7OQmOJhgYGJhjZptV9ROAFPE/RISiaSLyNuDiTCazob+//wdpml4fhuFuxkAZZ/39/VcBB0RkJSDUICK/k8lkCv39/bdec801GRqkjKP+/v6VwHbgNBojRV9cunTpX0oRDXCMwcDAwBTgWmCVmb0PmAIcBC4REcfrPWpm29I0fSSTyTyfpulM4GJVXQlkeb1P9fX1/Qz4U+rkaNDWrVvf6py7X0QWUiQilMymjJkdBXLPPffcn+Xz+ZTX2w/8eRzHv6uqXxeRt1MiIhv7+vru7+jo2E8dlAYMDAyc7Zz7rogsZHQvp2m6uL29/fZ8Pp9SRRiG/3T8+PFLgWc5ISMit1EnpQFmdpeIzKWGNE07wjB8hDqsX7/+58BKwCgRkct6e3vnUwelTv39/ZeJyOWUMbPH0zT9NLDAzD4J/IuZ7ero6LiHBqxZs2bQzP6WMplM5mrq4KhDb2/v+51zt/J6hWPHjv3ehg0bjvKqwS1btux0zp3LGJjZX4jISk7IAtdTg2MUvb2973DO3eGcuwoQTrChoaE/2rBhw1HKbNiw4SXgMcbg+eeff3DOnDlHgOkUicjFAwMD3wQ+s2bNml9QhVLFli1bzspkMnuBTwDC6/107dq1P2Mc5fP5I8AzvN7vA4/FcTyXKpQRbNmy5fSpU6c+ICLnU8bMUjN7xsx+RZ36+vouveaaazLU5z94ozmZTObvbr311t9iBMoIpk2blhORCygxs9TMbjl27NgZ7e3t57W3t8+nDn19fZeLyHeuuOKKL0sRNbS3t39keHh4HnAHYJwwb9asWZsZgZgZ5QYGBuYAB4HplJjZuvb29l4aMDAw0GZmu0VkBq+6c82aNRuoU19f38dV9T5OOD40NHT22rVrn6OMUiFN0/XAdE4otLe399KAgYGB95rZThGZwQnrBwYGIurU0dHxTTP7G06Y4pz7DBWUCqp6BWXMrIsG9Pb2vsvMCiLyZt7opv7+/i9QpzRN76SMmS2iglLBzN7FCcefe+65Qeq0ZcuWs5xzu0XkDKoQkdsGBgbWUIc0TQ9QRkTOp4JSQURmUmJmh/P5fEodtmzZcvrUqVN3A+dQg5nFfX19n6SGdevW/RJ4mRIzO5MKSgUz+yUlIvLmvr6+2dQwMDAwa+rUqYmIzKUOIqJFd/f19V3JKPr6+t4OvIkT/osKjgoichA4gxIR+RBwH6MYGhoaVtWrzIzXqOrTjCBN0/MoUdWjjG4xZUTkIBUcFcwsEZFFnHBzd3f3jnw+f4Qq1q5dexg4TJmBgQFG0tHR8Qx1uOOOO0459dRTeyhjZgkVlArDw8NfM7MhSkTkgjPOOOOeLVu2zKRFtmzZMvPUU0+9B3gnJxw3s69TwVFh7dq1P+nv7/8K8GlKRGTltGnT5vf399+Zpun3ROTfqdDR0fEMY9DX13cuJap6FtA2bdq0dcB5vN6XOzo6nqGCYwQi8nkzu0xELuCEc0TktkwmQyUzS4EMY6CqT1ODmT116NChLzICZQRr1qw5BHwUeJoJZmYHh4eHr7z++ut/zQiUKtrb23+cpukCM/sGE8TM7jOzhWvXrv0JVThG0dHR8QJwdV9f36Ui8gfAFcBZIjKTJjCzwyLyrJk9AHy1vb39IWpw1KGjo2M/sJ8SKaJCe3s75drb25URrFmzhnLt7e1KiRXRIDEzfKZ4TvGc4jnFc4rnFM8pnlM8p3hO8ZziOcVziucUzymeUzyneE7xnKOJFm588tzUuFZEliGcIyZnGvZrkP8U4TvDNvz3+ze9ZzcnwdEEl/zxD+e4U3Qz6CdUEV4jIMg04G3AxRnJbFi48Uc/GGb4+v2b3rObMVDG2cIbnrzKnZI5IMhKEYRahN9RMoUFG5+6Va65N0ODlHG04IanVpKR7QKn0QARpOiLC9558V9KEQ1wjMEl7Y9Mybz11GvFZJWIvA9jisFByXAJiON17FGQbcND6SNpqs9LZmimE73YRFaKSJZywqfaNj75M+BPqZOjQW2dT77VvWXG/YIsRHiVgMBsEH7DOGqS5gY3bf8zs3zK6+0H/rzt+gO/q859HXg7JWKycf4NB+7/3i0X7qcOSgMuufHA2WLyXRFZyCgMe9lIFz/cM+92s3xKFYO3XvhPR4ftUjOe5TVCJqPuNuqkNMBJ5i4RmUtN0vHwpnmPUIdHb5n7c5GhlWYYJSJcdunGH82nDkqdLr3xh5eJyOW8jj1uZp+GoQUYnzT4F4NdD/e8+x4a8FDPhYOI/S1lFLuaOjjqcOn1B96vGXcrZcys8Mv/Pvh7P968/CivGlzw2cGdTDvtXMbAUvsLUVnJb0gWuJ4aHKO49POPv0OnTrlDM+4qEYQSMyw9dvyPfrx5+VHKPLy57SXgMcbgheefe/CMOWceAaZTJMLFCzqf+ubQMfnM929/9y+oQqliwQ2PnaVTp+4VkU+IIJQR+On+//PbP2McPX3Xh4+APUMZQX7fTbXH5t/w1FyqUEbwgc/+4HR02gMinE8Zg9TMnjGxX1Gn+TccuFSuuTdDHcz4DyoIMsdl+Lt5Nzz1W4xAGcHUU9+UE5ELKDFIU7Nbjh3+7zMe3jT3vId75s6nDm0bn7rcqftO2zsv/rIUUcPgzfM+MjRs87D0DjOM35B5p6lsZgRiZpS75I9/OGfKKZmDwHRKzFj38KZ399KAhZ0H2iCzG2QG/8O486FN795Ando2/vDjKpn7KDGz4+nw8Nn7b73wOcooFaacklkPTKfEzAoPb3p3Lw245MYn34tldoLM4DXC+raNT0XUaXDTe74J9jeUiMgUzWQ+QwWlghlXUMbEumjABzceeJcTKSDyZiqoyE0LOp/8AnVKh4bvpIzAIioob2DvosTMju/ftH2QOi244bGzpkpmt4icQRWC3rZg45NrqIfTA5QxOJ8KyhvNpETgsFk+pQ4f+OwPTken7QY5h1pE4wU3/vCT1DDYM++Xhr1MiQhnUkF5o1/yGpE3X/zFx2ZTwyU3PjJr2qmnJiIylzoIKKJ3t3U+eSWjeP+f/OvbBXkTJYb8FxUcFQQOAmdQ8iad+iHgPkZx5NenDE+ZmV6FcYLo04zE0vMoEmDoFTvKKKZOnb6YMoIdpIKjgpkkIiyixFRuPu+6vTuevuvDR6ji8a0XHgYOU2Zh548YyUOb5j1DHd7xJw+dctb0t/ZQxswSKigVjsvQ18CGKBGRC/7XnDn3LPjs4ExaZMFnB2e+fdpb7gHeSYmZHRf4OhUcFR7ZdOFPFnY+9RXg05QIspIZp81f0PnknekQ38tk+HcqPLRp3jOMwcKNT55LiZmehaRtzDhtnSDnUU748kM9856hgmMEx9PDn3cy4zIRuYDfkHMEuS3jeAODFMgwFqJPUyJCkVLJzJ76VcoXGYEygu/f/MFDDKcfNexpJpgZB48zfOWTt8z9NSNQqnj41vf8+JXjRxcY9g0miMF9rwwdWfjIpgt/QhWOUfzrbe97Abh6/g0HLnUZ9wcGVwBnCcykKeww8KwZD5jYVwd75j1EDY46fO+WC/cD+ymRIir1GOUe3jRXGUmPUe7hTXOVEiuiQWJm+EzxnOI5xXOK5xTPKZ5TPKd47v8DSLDjbNI9np0AAAAASUVORK5CYII=);background-repeat:no-repeat;background-size:24px 256px}.icons-icon-delete{background-position:0 -16px}.icons-icon-edit{background-position:0 -112px}.icons-icon-exlink{background-position:0 -32px}.icons-icon-upload-active{background-position:0 -232px}.icons-icon-upload{background-position:0 -208px}.icons-icon-upload:active,.icons-icon-upload.icon-upload-active{background-position:0 -232px}.icons-mime-application{background-position:0 -80px}.icons-mime-archive{background-position:0 -96px}.icons-mime-audio{background-position:0 0}.icons-mime-html{background-position:0 -128px}.icons-mime-image{background-position:0 -144px}.icons-mime-office{background-position:0 -160px}.icons-mime-script{background-position:0 -176px}.icons-mime-text{background-position:0 -64px}.icons-mime-unknow{background-position:0 -48px}.icons-mime-video{background-position:0 -192px}.i-edit{background-position:0 -112px}.i-delete{background-position:0 -16px}.i-upload{background-position:0 -208px}.i-upload:active,.i-upload.icon-upload-active,.i-upload-active{background-position:0 -232px}.i-exlink{background-position:0 -32px}.mime-office{background-position:0 -160px}.mime-text{background-position:0 -64px}.mime-image{background-position:0 -144px}.mime-html{background-position:0 -128px}.mime-archive{background-position:0 -96px}.mime-application{background-position:0 -80px}.mime-audio{background-position:0 0}.mime-script{background-position:0 -176px}.mime-video{background-position:0 -192px}.mime-unknow{background-position:0 -48px}}.i-edit,.i-delete,.i-exlink,.mime-office,.mime-text,.mime-image,.mime-html,.mime-archive,.mime-application,.mime-audio,.mime-script,.mime-video,.mime-unknow,.i-upload,.i-upload-active{display:inline-block;vertical-align:text-bottom;text-indent:-9999em}.i-edit:hover,.i-delete:hover,.i-exlink:hover,.mime-office:hover,.mime-text:hover,.mime-image:hover,.mime-html:hover,.mime-archive:hover,.mime-application:hover,.mime-audio:hover,.mime-script:hover,.mime-video:hover,.mime-unknow:hover,.i-upload:hover,.i-upload-active:hover{opacity:.75}.i-edit,.i-delete,.i-exlink,.mime-office,.mime-text,.mime-image,.mime-html,.mime-archive,.mime-application,.mime-audio,.mime-script,.mime-video,.mime-unknow{width:16px;height:16px}.i-upload,.i-upload-active{width:24px;height:24px}.i-edit{background-position:0 -112px}.i-delete{background-position:0 -16px}.i-upload{background-position:0 -208px}.i-upload:active,.i-upload.icon-upload-active,.i-upload-active{background-position:0 -232px}.i-caret-up,.i-caret-down,.i-caret-left,.i-caret-right{display:inline-block;border-style:solid;border-color:transparent transparent #bbb transparent;border-width:3px 4px 5px}.i-caret-down{border-color:#bbb transparent transparent transparent;border-width:5px 4px 3px}.i-caret-left{border-color:transparent #bbb transparent transparent;border-width:4px 5px 4px 3px}.i-caret-right{border-color:transparent transparent transparent #bbb;border-width:4px 3px 4px 5px}.i-exlink{background-position:0 -32px}.mime-office{background-position:0 -160px}.mime-text{background-position:0 -64px}.mime-image{background-position:0 -144px}.mime-html{background-position:0 -128px}.mime-archive{background-position:0 -96px}.mime-application{background-position:0 -80px}.mime-audio{background-position:0 0}.mime-script{background-position:0 -176px}.mime-video{background-position:0 -192px}.mime-unknow{background-position:0 -48px}.i-logo:hover,.i-logo-s:hover{opacity:.2}.i-logo-s{width:26px;height:26px;background-size:auto 26px}.editor{margin-bottom:-.5em}.editor-editor-bold{background-position:0 -20px;width:20px;height:20px}.editor-editor-code{background-position:0 -140px;width:20px;height:20px}.editor-editor-exit-fullscreen{background-position:0 -40px;width:20px;height:20px}.editor-editor-fullscreen{background-position:0 -60px;width:20px;height:20px}.editor-editor-heading{background-position:0 -80px;width:20px;height:20px}.editor-editor-hr{background-position:0 -100px;width:20px;height:20px}.editor-editor-image{background-position:0 -120px;width:20px;height:20px}.editor-editor-italic{background-position:0 0;width:20px;height:20px}.editor-editor-link{background-position:0 -160px;width:20px;height:20px}.editor-editor-more{background-position:0 -180px;width:20px;height:20px}.editor-editor-olist{background-position:0 -200px;width:20px;height:20px}.editor-editor-quote{background-position:0 -220px;width:20px;height:20px}.editor-editor-redo{background-position:0 -240px;width:20px;height:20px}.editor-editor-ulist{background-position:0 -260px;width:20px;height:20px}.editor-editor-undo{background-position:0 -280px;width:20px;height:20px}.wmd-button-row{list-style:none;margin:0;padding:0;height:26px;line-height:1}.wmd-button-row li{display:inline-block;margin-right:4px;padding:3px;cursor:pointer;vertical-align:middle;border-radius:2px}.wmd-button-row li:hover{background-color:#e9e9e6}.wmd-button-row li.wmd-spacer{height:20px;margin:0 10px 0 6px;padding:0;width:1px;background:#e9e9e6;cursor:default}.wmd-button-row li span{display:block;width:20px;height:20px}.wmd-button-row li#wmd-bold-button span{background-position:0 -20px}.wmd-button-row li#wmd-italic-button span{background-position:0 0}.wmd-button-row li#wmd-link-button span{background-position:0 -160px}.wmd-button-row li#wmd-quote-button span{background-position:0 -220px}.wmd-button-row li#wmd-code-button span{background-position:0 -140px}.wmd-button-row li#wmd-image-button span{background-position:0 -120px}.wmd-button-row li#wmd-olist-button span{background-position:0 -200px}.wmd-button-row li#wmd-ulist-button span{background-position:0 -260px}.wmd-button-row li#wmd-heading-button span{background-position:0 -80px}.wmd-button-row li#wmd-hr-button span{background-position:0 -100px}.wmd-button-row li#wmd-more-button span{background-position:0 -180px}.wmd-button-row li#wmd-undo-button span{background-position:0 -280px}.wmd-button-row li#wmd-redo-button span{background-position:0 -240px}.wmd-button-row li#wmd-fullscreen-button span{background-position:0 -60px}.wmd-button-row li#wmd-exit-fullscreen-button span{background-position:0 -40px}#btn-cancel-preview{display:none}.wmd-edittab{float:right;margin-top:3px;font-size:.92857em}.wmd-edittab a{display:inline-block;padding:0 8px;margin-left:5px;height:20px;line-height:20px}.wmd-edittab a:hover{text-decoration:none}.wmd-edittab a.active{background:#e9e9e6;color:#999}.wmd-hidetab{display:none}.wmd-visualhide{visibility:hidden}.wmd-prompt-background{background-color:#000}.wmd-prompt-dialog{position:fixed;z-index:1001;top:50%;left:50%;margin-top:-95px;margin-left:-200px;padding:20px;width:360px;background:#f6f6f3}.wmd-prompt-dialog p{margin:0 0 5px}.wmd-prompt-dialog form{margin-top:10px}.wmd-prompt-dialog input[type=text]{margin-bottom:10px;width:100%}.wmd-prompt-dialog button{margin-right:10px}#wmd-preview{background:#fff;margin:1em 0;padding:0 15px;word-wrap:break-word;overflow:auto;border-radius:2px}#wmd-preview img{max-width:100%}#wmd-preview code,#wmd-preview pre{padding:2px 4px;background:#ddd;font-size:14px}#wmd-preview code{color:#c13}#wmd-preview pre{padding:1em}#wmd-preview pre code{padding:0;color:#444}#wmd-preview blockquote{margin:1em 1.5em;padding-left:1.5em;border-left:4px solid #e9e9e6;color:#777}#wmd-preview hr{margin:2em auto;width:100px;border:1px solid #e9e9e6;border-width:2px 0 0 0}#wmd-preview .summary:after{display:block;margin:2em 0;background:#fff9e8;color:#cf9900;font-size:.85714em;text-align:center;content:"- more -"}#wmd-preview table{width:100%}#wmd-preview table th,#wmd-preview table td{border:1px solid #ddd;padding:5px 8px;word-break:break-all}#wmd-preview table th{background:#eee}#wmd-preview span.line{display:inline;height:1px;line-height:1px;position:absolute}#wmd-preview .focus,#wmd-preview .focus *{background-color:#ffe60080!important}@keyframes fullscreen-upload{0%{opacity:0}to{opacity:1}}.fullscreen #wmd-button-bar,.fullscreen #text,.fullscreen #wmd-preview,.fullscreen .submit{position:absolute;top:0;width:50%;background:#fff;z-index:999;box-sizing:border-box;border-radius:0}.fullscreen #wmd-button-bar{left:0;padding:13px 20px;border-bottom:1px solid #f3f3f0;z-index:1000}.fullscreen #text{top:53px;left:0;padding:20px;border:none;outline:none}.fullscreen #wmd-preview{top:53px;right:0;margin:0;padding:5px 20px;border:none;border-left:1px solid #f3f3f0;background:#f6f6f3;overflow:auto}.fullscreen .submit{right:0;margin:0;padding:10px 20px;border-bottom:1px solid #f3f3f0}.fullscreen #upload-panel{-webkit-box-shadow:0 4px 16px rgba(0,0,0,.225);box-shadow:0 4px 16px #00000039;border-style:solid}.fullscreen #tab-files{position:absolute;top:52px;right:0;width:280px;z-index:1001;animation:fullscreen-upload .5s}.fullscreen .wmd-edittab,.fullscreen .typecho-post-option,.fullscreen .title,.fullscreen .url-slug,.fullscreen .typecho-page-title,.fullscreen .typecho-head-nav,.fullscreen .message{display:none}.fullscreen .wmd-hidetab{display:block}.fullscreen .wmd-visualhide,.fullscreen #btn-fullscreen-upload{visibility:visible}.preview .submit{width:100%;background:#ffd}.preview #wmd-button-bar,.preview #wmd-preview,.preview #text,.preview #upload-panel,.preview #tab-files,.preview #btn-preview,.preview #btn-fullscreen-upload,.preview #auto-save-message{display:none}.preview .preview-frame{width:100%;border:0;padding:0;margin:0;background:#fff;z-index:999;position:absolute;top:53px;left:0}.preview .preview-loading{background-image:url(data:image/gif;base64,R0lGODlhEAAQAPQAAPn595mZmfb29K2trcrKyZqamqenpunp6NfX1qCgoMTEw76+vu7u7NLS0OPj4bOzs7m5uAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAAFUCAgjmRpnqUwFGwhKoRgqq2YFMaRGjWA8AbZiIBbjQQ8AmmFUJEQhQGJhaKOrCksgEla+KIkYvC6SJKQOISoNSYdeIk1ayA8ExTyeR3F749CACH5BAkKAAAALAAAAAAQABAAAAVoICCKR9KMaCoaxeCoqEAkRX3AwMHWxQIIjJSAZWgUEgzBwCBAEQpMwIDwY1FHgwJCtOW2UDWYIDyqNVVkUbYr6CK+o2eUMKgWrqKhj0FrEM8jQQALPFA3MAc8CQSAMA5ZBjgqDQmHIyEAIfkECQoAAAAsAAAAABAAEAAABWAgII4j85Ao2hRIKgrEUBQJLaSHMe8zgQo6Q8sxS7RIhILhBkgumCTZsXkACBC+0cwF2GoLLoFXREDcDlkAojBICRaFLDCOQtQKjmsQSubtDFU/NXcDBHwkaw1cKQ8MiyEAIfkECQoAAAAsAAAAABAAEAAABVIgII5kaZ6AIJQCMRTFQKiDQx4GrBfGa4uCnAEhQuRgPwCBtwK+kCNFgjh6QlFYgGO7baJ2CxIioSDpwqNggWCGDVVGphly3BkOpXDrKfNm/4AhACH5BAkKAAAALAAAAAAQABAAAAVgICCOZGmeqEAMRTEQwskYbV0Yx7kYSIzQhtgoBxCKBDQCIOcoLBimRiFhSABYU5gIgW01pLUBYkRItAYAqrlhYiwKjiWAcDMWY8QjsCf4DewiBzQ2N1AmKlgvgCiMjSQhACH5BAkKAAAALAAAAAAQABAAAAVfICCOZGmeqEgUxUAIpkA0AMKyxkEiSZEIsJqhYAg+boUFSTAkiBiNHks3sg1ILAfBiS10gyqCg0UaFBCkwy3RYKiIYMAC+RAxiQgYsJdAjw5DN2gILzEEZgVcKYuMJiEAOwAAAAAAAAAAAA==);background-position:center;background-repeat:no-repeat}.preview #btn-cancel-preview{display:inline-block}#ui-datepicker-div{display:none;margin-top:-1px;padding:10px;border:1px solid #d9d9d6;background:#fff}.ui-timepicker-div .ui-widget-header{margin-bottom:8px}.ui-timepicker-div dl{text-align:left}.ui-timepicker-div dl dt{float:left;clear:left}.ui-timepicker-div dl dd{margin:0 0 10px 40%}.ui-tpicker-grid-label{background:none;border:none;margin:0;padding:0}#ui-datepicker-div .ui-datepicker-header{margin-bottom:10px;padding-bottom:10px;border-bottom:1px solid #eee}#ui-datepicker-div .ui-datepicker-prev{float:left;cursor:pointer}#ui-datepicker-div .ui-datepicker-next{float:right;cursor:pointer}#ui-datepicker-div .ui-datepicker-title{font-weight:700;text-align:center}#ui-datepicker-div .ui-datepicker-calendar th{line-height:24px}#ui-datepicker-div .ui-datepicker-calendar a{display:block;width:30px;background-color:#f3f3f0;line-height:24px;text-align:center}#ui-datepicker-div .ui-datepicker-calendar a:hover{background-color:#e9e9e6;text-decoration:none}#ui-datepicker-div .ui-datepicker-today a{background-color:#e9e9e6;color:#444}#ui-datepicker-div .ui-datepicker-current-day a{background-color:#467b96!important;color:#fff}#ui-datepicker-div .ui-timepicker-div{margin-top:20px;border-top:1px solid #eee}#ui-datepicker-div .ui-slider{position:relative;margin-top:18px;border:1px solid #e9e9e6;background-color:#f6f6f3;height:4px}#ui-datepicker-div .ui-slider .ui-slider-handle{position:absolute;top:-7px;margin-left:-5px;z-index:2;width:10px;height:16px;background-color:#467b96}#ui-datepicker-div .ui-datepicker-buttonpane{padding-top:10px;border-top:1px solid #eee}#ui-datepicker-div .ui-datepicker-current,#ui-datepicker-div .ui-datepicker-close{float:left}#ui-datepicker-div .ui-datepicker-close{float:right}.ui-effects-transfer{border:2px dotted #ccc}ul.token-input-list{list-style:none;margin:0;padding:0 4px;min-height:32px;border:1px solid #d9d9d6;cursor:text;z-index:999;background-color:#fff;clear:left;border-radius:2px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}ul.token-input-list li{margin:4px 0}ul.token-input-list li input{padding:0;border:0;width:100%;-webkit-appearance:caret}li.token-input-token{padding:0 6px;height:27px;line-height:27px;background-color:#f3f3f0;cursor:default;font-size:.92857em;text-align:right;white-space:nowrap}li.token-input-token p{float:left;display:inline;margin:0}li.token-input-token span{color:#bbb;font-weight:700;cursor:pointer}li.token-input-selected-token{background-color:#e9e9e6}li.token-input-input-token{padding:0 4px}div.token-input-dropdown{position:absolute;background-color:#fff;overflow:hidden;border:1px solid #d9d9d6;border-top-width:0;cursor:default;z-index:1;font-size:.92857em}div.token-input-dropdown p{margin:0;padding:5px 10px;color:#777;font-weight:700}div.token-input-dropdown ul{list-style:none;margin:0;padding:0}div.token-input-dropdown ul li{padding:4px 10px;background-color:#fff}div.token-input-dropdown ul li.token-input-dropdown-item{background-color:#fff}div.token-input-dropdown ul li em{font-style:normal}div.token-input-dropdown ul li.token-input-selected-dropdown-item{background-color:#467b96;color:#fff}.hidden{display:none}.sr-only{border:0;height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.sr-only.focusable:active,.sr-only.focusable:focus{clip:auto;height:auto;margin:0;overflow:visible;position:static;width:auto}.invisible{visibility:hidden}.container,.row [class*=col-]{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.container{margin-left:auto;margin-right:auto;padding-left:10px;padding-right:10px}.row{margin-right:-10px;margin-left:-10px}.row [class*=col-]{float:left;min-height:1px;padding-right:10px;padding-left:10px}.row [class*=-push-],.row [class*=-pull-]{position:relative}.col-mb-1{width:8.33333%}.col-mb-2{width:16.66667%}.col-mb-3{width:25%}.col-mb-4{width:33.33333%}.col-mb-5{width:41.66667%}.col-mb-6{width:50%}.col-mb-7{width:58.33333%}.col-mb-8{width:66.66667%}.col-mb-9{width:75%}.col-mb-10{width:83.33333%}.col-mb-11{width:91.66667%}.col-mb-12{width:100%}@media(min-width:768px){.container{max-width:728px}.col-tb-1{width:8.33333%}.col-tb-2{width:16.66667%}.col-tb-3{width:25%}.col-tb-4{width:33.33333%}.col-tb-5{width:41.66667%}.col-tb-6{width:50%}.col-tb-7{width:58.33333%}.col-tb-8{width:66.66667%}.col-tb-9{width:75%}.col-tb-10{width:83.33333%}.col-tb-11{width:91.66667%}.col-tb-12{width:100%}.col-tb-offset-0{margin-left:0%}.col-tb-offset-1{margin-left:8.33333%}.col-tb-offset-2{margin-left:16.66667%}.col-tb-offset-3{margin-left:25%}.col-tb-offset-4{margin-left:33.33333%}.col-tb-offset-5{margin-left:41.66667%}.col-tb-offset-6{margin-left:50%}.col-tb-offset-7{margin-left:58.33333%}.col-tb-offset-8{margin-left:66.66667%}.col-tb-offset-9{margin-left:75%}.col-tb-offset-10{margin-left:83.33333%}.col-tb-offset-11{margin-left:91.66667%}.col-tb-offset-12{margin-left:100%}.col-tb-pull-0{right:0%}.col-tb-pull-1{right:8.33333%}.col-tb-pull-2{right:16.66667%}.col-tb-pull-3{right:25%}.col-tb-pull-4{right:33.33333%}.col-tb-pull-5{right:41.66667%}.col-tb-pull-6{right:50%}.col-tb-pull-7{right:58.33333%}.col-tb-pull-8{right:66.66667%}.col-tb-pull-9{right:75%}.col-tb-pull-10{right:83.33333%}.col-tb-pull-11{right:91.66667%}.col-tb-pull-12{right:100%}.col-tb-push-0{left:0%}.col-tb-push-1{left:8.33333%}.col-tb-push-2{left:16.66667%}.col-tb-push-3{left:25%}.col-tb-push-4{left:33.33333%}.col-tb-push-5{left:41.66667%}.col-tb-push-6{left:50%}.col-tb-push-7{left:58.33333%}.col-tb-push-8{left:66.66667%}.col-tb-push-9{left:75%}.col-tb-push-10{left:83.33333%}.col-tb-push-11{left:91.66667%}.col-tb-push-12{left:100%}}@media(min-width:992px){.container{max-width:952px}.col-1{width:8.33333%}.col-2{width:16.66667%}.col-3{width:25%}.col-4{width:33.33333%}.col-5{width:41.66667%}.col-6{width:50%}.col-7{width:58.33333%}.col-8{width:66.66667%}.col-9{width:75%}.col-10{width:83.33333%}.col-11{width:91.66667%}.col-12{width:100%}.col-offset-0{margin-left:0%}.col-offset-1{margin-left:8.33333%}.col-offset-2{margin-left:16.66667%}.col-offset-3{margin-left:25%}.col-offset-4{margin-left:33.33333%}.col-offset-5{margin-left:41.66667%}.col-offset-6{margin-left:50%}.col-offset-7{margin-left:58.33333%}.col-offset-8{margin-left:66.66667%}.col-offset-9{margin-left:75%}.col-offset-10{margin-left:83.33333%}.col-offset-11{margin-left:91.66667%}.col-offset-12{margin-left:100%}.col-pull-0{right:0%}.col-pull-1{right:8.33333%}.col-pull-2{right:16.66667%}.col-pull-3{right:25%}.col-pull-4{right:33.33333%}.col-pull-5{right:41.66667%}.col-pull-6{right:50%}.col-pull-7{right:58.33333%}.col-pull-8{right:66.66667%}.col-pull-9{right:75%}.col-pull-10{right:83.33333%}.col-pull-11{right:91.66667%}.col-pull-12{right:100%}.col-push-0{left:0%}.col-push-1{left:8.33333%}.col-push-2{left:16.66667%}.col-push-3{left:25%}.col-push-4{left:33.33333%}.col-push-5{left:41.66667%}.col-push-6{left:50%}.col-push-7{left:58.33333%}.col-push-8{left:66.66667%}.col-push-9{left:75%}.col-push-10{left:83.33333%}.col-push-11{left:91.66667%}.col-push-12{left:100%}}@media(min-width:1200px){.container{max-width:1160px}.col-wd-1{width:8.33333%}.col-wd-2{width:16.66667%}.col-wd-3{width:25%}.col-wd-4{width:33.33333%}.col-wd-5{width:41.66667%}.col-wd-6{width:50%}.col-wd-7{width:58.33333%}.col-wd-8{width:66.66667%}.col-wd-9{width:75%}.col-wd-10{width:83.33333%}.col-wd-11{width:91.66667%}.col-wd-12{width:100%}.col-wd-offset-0{margin-left:0%}.col-wd-offset-1{margin-left:8.33333%}.col-wd-offset-2{margin-left:16.66667%}.col-wd-offset-3{margin-left:25%}.col-wd-offset-4{margin-left:33.33333%}.col-wd-offset-5{margin-left:41.66667%}.col-wd-offset-6{margin-left:50%}.col-wd-offset-7{margin-left:58.33333%}.col-wd-offset-8{margin-left:66.66667%}.col-wd-offset-9{margin-left:75%}.col-wd-offset-10{margin-left:83.33333%}.col-wd-offset-11{margin-left:91.66667%}.col-wd-offset-12{margin-left:100%}.col-wd-pull-0{right:0%}.col-wd-pull-1{right:8.33333%}.col-wd-pull-2{right:16.66667%}.col-wd-pull-3{right:25%}.col-wd-pull-4{right:33.33333%}.col-wd-pull-5{right:41.66667%}.col-wd-pull-6{right:50%}.col-wd-pull-7{right:58.33333%}.col-wd-pull-8{right:66.66667%}.col-wd-pull-9{right:75%}.col-wd-pull-10{right:83.33333%}.col-wd-pull-11{right:91.66667%}.col-wd-pull-12{right:100%}.col-wd-push-0{left:0%}.col-wd-push-1{left:8.33333%}.col-wd-push-2{left:16.66667%}.col-wd-push-3{left:25%}.col-wd-push-4{left:33.33333%}.col-wd-push-5{left:41.66667%}.col-wd-push-6{left:50%}.col-wd-push-7{left:58.33333%}.col-wd-push-8{left:66.66667%}.col-wd-push-9{left:75%}.col-wd-push-10{left:83.33333%}.col-wd-push-11{left:91.66667%}.col-wd-push-12{left:100%}}@media(max-width:767px){.kit-hidden-mb{display:none}}@media(max-width:991px){.kit-hidden-tb{display:none}}@media(max-width:1199px){.kit-hidden{display:none}}.clear-fix,.row{zoom:1}.clear-fix:before,.row:before,.clear-fix:after,.row:after{content:" ";display:table}.clear-fix:after,.row:after{clear:both}html,body,div[tabindex="-1"]{height:100%}.account-item{position:relative;display:inline-block;margin-right:16px;transition:transform .2s ease-in-out}.account-item .account-unbind svg{position:absolute;top:-3px;right:-3px;display:none;border:1px solid #999;border-radius:50%;background:#fff;cursor:pointer}.account-item:hover .account-unbind svg{display:block}.account-item.github path,.account-item.twitter circle,.account-item.facebook path,.account-item.weibo circle,.account-item.qq path,.account-item.oidc path,.account-item.huawei path{fill:gray}.account-item.github:hover path,.account-item.github.bind path{fill:#1b1f23}.account-item.twitter:hover circle,.account-item.twitter.bind circle{fill:#2daae1}.account-item.facebook:hover path,.account-item.facebook.bind path{fill:#1877f2}.account-item.weibo:hover circle,.account-item.weibo.bind circle{fill:#d34237}.account-item.qq:hover path,.account-item.qq.bind path{fill:#259be0}.account-item.oidc:hover path,.account-item.oidc.bind path{fill:#ff9626}.account-item.huawei:hover path,.account-item.huawei.bind path{fill:red}.account-item.google:not(.bind):not(:hover) path:not([fill=none]){fill:gray}.account-item:not(.bind) .account-unbind{display:none}.account-item.bind{pointer-events:none}.account-item:not(.bind){opacity:.75}.account-list circle,.account-list path{transition:fill .2s ease}.account-item:hover{transform:translateY(-2px)}.user-page-account-item{margin-right:6px;opacity:.5}.user-page-account-item.bind{opacity:1}.user-page-account-item svg{width:16px;height:16px}.vemoji,.wl-emoji{display:inline-block;vertical-align:middle;width:1.3rem;margin:.25rem}.social-accounts a+a{margin-left:16px}.upgrade-tips{padding:0 10px;border-bottom:1px solid rgba(212,167,44,.4);background:#fff8c5;color:#24292f;line-height:36px}')),document.head.appendChild(i)}}catch(o){console.error("vite-plugin-css-injected-by-js",o)}})();
function Ps(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
var Eu = { exports: {} }, ei = {};
var mm;
function ey() {
  if (mm) return ei;
  mm = 1;
  var i = /* @__PURE__ */ Symbol.for("react.transitional.element"), l = /* @__PURE__ */ Symbol.for("react.fragment");
  function s(r, c, f) {
    var p = null;
    if (f !== void 0 && (p = "" + f), c.key !== void 0 && (p = "" + c.key), "key" in c) {
      f = {};
      for (var m in c)
        m !== "key" && (f[m] = c[m]);
    } else f = c;
    return c = f.ref, {
      $$typeof: i,
      type: r,
      key: p,
      ref: c !== void 0 ? c : null,
      props: f
    };
  }
  return ei.Fragment = l, ei.jsx = s, ei.jsxs = s, ei;
}
var pm;
function ty() {
  return pm || (pm = 1, Eu.exports = ey()), Eu.exports;
}
var b = ty(), Au = { exports: {} }, fe = {};
var gm;
function ay() {
  if (gm) return fe;
  gm = 1;
  var i = /* @__PURE__ */ Symbol.for("react.transitional.element"), l = /* @__PURE__ */ Symbol.for("react.portal"), s = /* @__PURE__ */ Symbol.for("react.fragment"), r = /* @__PURE__ */ Symbol.for("react.strict_mode"), c = /* @__PURE__ */ Symbol.for("react.profiler"), f = /* @__PURE__ */ Symbol.for("react.consumer"), p = /* @__PURE__ */ Symbol.for("react.context"), m = /* @__PURE__ */ Symbol.for("react.forward_ref"), h = /* @__PURE__ */ Symbol.for("react.suspense"), d = /* @__PURE__ */ Symbol.for("react.memo"), g = /* @__PURE__ */ Symbol.for("react.lazy"), y = /* @__PURE__ */ Symbol.for("react.activity"), x = Symbol.iterator;
  function w(R) {
    return R === null || typeof R != "object" ? null : (R = x && R[x] || R["@@iterator"], typeof R == "function" ? R : null);
  }
  var E = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, j = Object.assign, N = {};
  function z(R, V, Z) {
    this.props = R, this.context = V, this.refs = N, this.updater = Z || E;
  }
  z.prototype.isReactComponent = {}, z.prototype.setState = function(R, V) {
    if (typeof R != "object" && typeof R != "function" && R != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, R, V, "setState");
  }, z.prototype.forceUpdate = function(R) {
    this.updater.enqueueForceUpdate(this, R, "forceUpdate");
  };
  function M() {
  }
  M.prototype = z.prototype;
  function $(R, V, Z) {
    this.props = R, this.context = V, this.refs = N, this.updater = Z || E;
  }
  var O = $.prototype = new M();
  O.constructor = $, j(O, z.prototype), O.isPureReactComponent = !0;
  var H = Array.isArray;
  function X() {
  }
  var Q = { H: null, A: null, T: null, S: null }, F = Object.prototype.hasOwnProperty;
  function I(R, V, Z) {
    var W = Z.ref;
    return {
      $$typeof: i,
      type: R,
      key: V,
      ref: W !== void 0 ? W : null,
      props: Z
    };
  }
  function P(R, V) {
    return I(R.type, V, R.props);
  }
  function te(R) {
    return typeof R == "object" && R !== null && R.$$typeof === i;
  }
  function se(R) {
    var V = { "=": "=0", ":": "=2" };
    return "$" + R.replace(/[=:]/g, function(Z) {
      return V[Z];
    });
  }
  var re = /\/+/g;
  function ue(R, V) {
    return typeof R == "object" && R !== null && R.key != null ? se("" + R.key) : V.toString(36);
  }
  function we(R) {
    switch (R.status) {
      case "fulfilled":
        return R.value;
      case "rejected":
        throw R.reason;
      default:
        switch (typeof R.status == "string" ? R.then(X, X) : (R.status = "pending", R.then(
          function(V) {
            R.status === "pending" && (R.status = "fulfilled", R.value = V);
          },
          function(V) {
            R.status === "pending" && (R.status = "rejected", R.reason = V);
          }
        )), R.status) {
          case "fulfilled":
            return R.value;
          case "rejected":
            throw R.reason;
        }
    }
    throw R;
  }
  function k(R, V, Z, W, de) {
    var pe = typeof R;
    (pe === "undefined" || pe === "boolean") && (R = null);
    var Re = !1;
    if (R === null) Re = !0;
    else
      switch (pe) {
        case "bigint":
        case "string":
        case "number":
          Re = !0;
          break;
        case "object":
          switch (R.$$typeof) {
            case i:
            case l:
              Re = !0;
              break;
            case g:
              return Re = R._init, k(
                Re(R._payload),
                V,
                Z,
                W,
                de
              );
          }
      }
    if (Re)
      return de = de(R), Re = W === "" ? "." + ue(R, 0) : W, H(de) ? (Z = "", Re != null && (Z = Re.replace(re, "$&/") + "/"), k(de, V, Z, "", function(rl) {
        return rl;
      })) : de != null && (te(de) && (de = P(
        de,
        Z + (de.key == null || R && R.key === de.key ? "" : ("" + de.key).replace(
          re,
          "$&/"
        ) + "/") + Re
      )), V.push(de)), 1;
    Re = 0;
    var st = W === "" ? "." : W + ":";
    if (H(R))
      for (var qe = 0; qe < R.length; qe++)
        W = R[qe], pe = st + ue(W, qe), Re += k(
          W,
          V,
          Z,
          pe,
          de
        );
    else if (qe = w(R), typeof qe == "function")
      for (R = qe.call(R), qe = 0; !(W = R.next()).done; )
        W = W.value, pe = st + ue(W, qe++), Re += k(
          W,
          V,
          Z,
          pe,
          de
        );
    else if (pe === "object") {
      if (typeof R.then == "function")
        return k(
          we(R),
          V,
          Z,
          W,
          de
        );
      throw V = String(R), Error(
        "Objects are not valid as a React child (found: " + (V === "[object Object]" ? "object with keys {" + Object.keys(R).join(", ") + "}" : V) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return Re;
  }
  function K(R, V, Z) {
    if (R == null) return R;
    var W = [], de = 0;
    return k(R, W, "", "", function(pe) {
      return V.call(Z, pe, de++);
    }), W;
  }
  function J(R) {
    if (R._status === -1) {
      var V = R._result;
      V = V(), V.then(
        function(Z) {
          (R._status === 0 || R._status === -1) && (R._status = 1, R._result = Z);
        },
        function(Z) {
          (R._status === 0 || R._status === -1) && (R._status = 2, R._result = Z);
        }
      ), R._status === -1 && (R._status = 0, R._result = V);
    }
    if (R._status === 1) return R._result.default;
    throw R._result;
  }
  var ce = typeof reportError == "function" ? reportError : function(R) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var V = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof R == "object" && R !== null && typeof R.message == "string" ? String(R.message) : String(R),
        error: R
      });
      if (!window.dispatchEvent(V)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", R);
      return;
    }
    console.error(R);
  }, le = {
    map: K,
    forEach: function(R, V, Z) {
      K(
        R,
        function() {
          V.apply(this, arguments);
        },
        Z
      );
    },
    count: function(R) {
      var V = 0;
      return K(R, function() {
        V++;
      }), V;
    },
    toArray: function(R) {
      return K(R, function(V) {
        return V;
      }) || [];
    },
    only: function(R) {
      if (!te(R))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return R;
    }
  };
  return fe.Activity = y, fe.Children = le, fe.Component = z, fe.Fragment = s, fe.Profiler = c, fe.PureComponent = $, fe.StrictMode = r, fe.Suspense = h, fe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Q, fe.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(R) {
      return Q.H.useMemoCache(R);
    }
  }, fe.cache = function(R) {
    return function() {
      return R.apply(null, arguments);
    };
  }, fe.cacheSignal = function() {
    return null;
  }, fe.cloneElement = function(R, V, Z) {
    if (R == null)
      throw Error(
        "The argument must be a React element, but you passed " + R + "."
      );
    var W = j({}, R.props), de = R.key;
    if (V != null)
      for (pe in V.key !== void 0 && (de = "" + V.key), V)
        !F.call(V, pe) || pe === "key" || pe === "__self" || pe === "__source" || pe === "ref" && V.ref === void 0 || (W[pe] = V[pe]);
    var pe = arguments.length - 2;
    if (pe === 1) W.children = Z;
    else if (1 < pe) {
      for (var Re = Array(pe), st = 0; st < pe; st++)
        Re[st] = arguments[st + 2];
      W.children = Re;
    }
    return I(R.type, de, W);
  }, fe.createContext = function(R) {
    return R = {
      $$typeof: p,
      _currentValue: R,
      _currentValue2: R,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, R.Provider = R, R.Consumer = {
      $$typeof: f,
      _context: R
    }, R;
  }, fe.createElement = function(R, V, Z) {
    var W, de = {}, pe = null;
    if (V != null)
      for (W in V.key !== void 0 && (pe = "" + V.key), V)
        F.call(V, W) && W !== "key" && W !== "__self" && W !== "__source" && (de[W] = V[W]);
    var Re = arguments.length - 2;
    if (Re === 1) de.children = Z;
    else if (1 < Re) {
      for (var st = Array(Re), qe = 0; qe < Re; qe++)
        st[qe] = arguments[qe + 2];
      de.children = st;
    }
    if (R && R.defaultProps)
      for (W in Re = R.defaultProps, Re)
        de[W] === void 0 && (de[W] = Re[W]);
    return I(R, pe, de);
  }, fe.createRef = function() {
    return { current: null };
  }, fe.forwardRef = function(R) {
    return { $$typeof: m, render: R };
  }, fe.isValidElement = te, fe.lazy = function(R) {
    return {
      $$typeof: g,
      _payload: { _status: -1, _result: R },
      _init: J
    };
  }, fe.memo = function(R, V) {
    return {
      $$typeof: d,
      type: R,
      compare: V === void 0 ? null : V
    };
  }, fe.startTransition = function(R) {
    var V = Q.T, Z = {};
    Q.T = Z;
    try {
      var W = R(), de = Q.S;
      de !== null && de(Z, W), typeof W == "object" && W !== null && typeof W.then == "function" && W.then(X, ce);
    } catch (pe) {
      ce(pe);
    } finally {
      V !== null && Z.types !== null && (V.types = Z.types), Q.T = V;
    }
  }, fe.unstable_useCacheRefresh = function() {
    return Q.H.useCacheRefresh();
  }, fe.use = function(R) {
    return Q.H.use(R);
  }, fe.useActionState = function(R, V, Z) {
    return Q.H.useActionState(R, V, Z);
  }, fe.useCallback = function(R, V) {
    return Q.H.useCallback(R, V);
  }, fe.useContext = function(R) {
    return Q.H.useContext(R);
  }, fe.useDebugValue = function() {
  }, fe.useDeferredValue = function(R, V) {
    return Q.H.useDeferredValue(R, V);
  }, fe.useEffect = function(R, V) {
    return Q.H.useEffect(R, V);
  }, fe.useEffectEvent = function(R) {
    return Q.H.useEffectEvent(R);
  }, fe.useId = function() {
    return Q.H.useId();
  }, fe.useImperativeHandle = function(R, V, Z) {
    return Q.H.useImperativeHandle(R, V, Z);
  }, fe.useInsertionEffect = function(R, V) {
    return Q.H.useInsertionEffect(R, V);
  }, fe.useLayoutEffect = function(R, V) {
    return Q.H.useLayoutEffect(R, V);
  }, fe.useMemo = function(R, V) {
    return Q.H.useMemo(R, V);
  }, fe.useOptimistic = function(R, V) {
    return Q.H.useOptimistic(R, V);
  }, fe.useReducer = function(R, V, Z) {
    return Q.H.useReducer(R, V, Z);
  }, fe.useRef = function(R) {
    return Q.H.useRef(R);
  }, fe.useState = function(R) {
    return Q.H.useState(R);
  }, fe.useSyncExternalStore = function(R, V, Z) {
    return Q.H.useSyncExternalStore(
      R,
      V,
      Z
    );
  }, fe.useTransition = function() {
    return Q.H.useTransition();
  }, fe.version = "19.2.4", fe;
}
var ym;
function di() {
  return ym || (ym = 1, Au.exports = ay()), Au.exports;
}
var A = di();
const Ue = /* @__PURE__ */ Ps(A);
var Cu = { exports: {} }, ti = {}, Ru = { exports: {} }, Nu = {};
var vm;
function ny() {
  return vm || (vm = 1, (function(i) {
    function l(k, K) {
      var J = k.length;
      k.push(K);
      e: for (; 0 < J; ) {
        var ce = J - 1 >>> 1, le = k[ce];
        if (0 < c(le, K))
          k[ce] = K, k[J] = le, J = ce;
        else break e;
      }
    }
    function s(k) {
      return k.length === 0 ? null : k[0];
    }
    function r(k) {
      if (k.length === 0) return null;
      var K = k[0], J = k.pop();
      if (J !== K) {
        k[0] = J;
        e: for (var ce = 0, le = k.length, R = le >>> 1; ce < R; ) {
          var V = 2 * (ce + 1) - 1, Z = k[V], W = V + 1, de = k[W];
          if (0 > c(Z, J))
            W < le && 0 > c(de, Z) ? (k[ce] = de, k[W] = J, ce = W) : (k[ce] = Z, k[V] = J, ce = V);
          else if (W < le && 0 > c(de, J))
            k[ce] = de, k[W] = J, ce = W;
          else break e;
        }
      }
      return K;
    }
    function c(k, K) {
      var J = k.sortIndex - K.sortIndex;
      return J !== 0 ? J : k.id - K.id;
    }
    if (i.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var f = performance;
      i.unstable_now = function() {
        return f.now();
      };
    } else {
      var p = Date, m = p.now();
      i.unstable_now = function() {
        return p.now() - m;
      };
    }
    var h = [], d = [], g = 1, y = null, x = 3, w = !1, E = !1, j = !1, N = !1, z = typeof setTimeout == "function" ? setTimeout : null, M = typeof clearTimeout == "function" ? clearTimeout : null, $ = typeof setImmediate < "u" ? setImmediate : null;
    function O(k) {
      for (var K = s(d); K !== null; ) {
        if (K.callback === null) r(d);
        else if (K.startTime <= k)
          r(d), K.sortIndex = K.expirationTime, l(h, K);
        else break;
        K = s(d);
      }
    }
    function H(k) {
      if (j = !1, O(k), !E)
        if (s(h) !== null)
          E = !0, X || (X = !0, se());
        else {
          var K = s(d);
          K !== null && we(H, K.startTime - k);
        }
    }
    var X = !1, Q = -1, F = 5, I = -1;
    function P() {
      return N ? !0 : !(i.unstable_now() - I < F);
    }
    function te() {
      if (N = !1, X) {
        var k = i.unstable_now();
        I = k;
        var K = !0;
        try {
          e: {
            E = !1, j && (j = !1, M(Q), Q = -1), w = !0;
            var J = x;
            try {
              t: {
                for (O(k), y = s(h); y !== null && !(y.expirationTime > k && P()); ) {
                  var ce = y.callback;
                  if (typeof ce == "function") {
                    y.callback = null, x = y.priorityLevel;
                    var le = ce(
                      y.expirationTime <= k
                    );
                    if (k = i.unstable_now(), typeof le == "function") {
                      y.callback = le, O(k), K = !0;
                      break t;
                    }
                    y === s(h) && r(h), O(k);
                  } else r(h);
                  y = s(h);
                }
                if (y !== null) K = !0;
                else {
                  var R = s(d);
                  R !== null && we(
                    H,
                    R.startTime - k
                  ), K = !1;
                }
              }
              break e;
            } finally {
              y = null, x = J, w = !1;
            }
            K = void 0;
          }
        } finally {
          K ? se() : X = !1;
        }
      }
    }
    var se;
    if (typeof $ == "function")
      se = function() {
        $(te);
      };
    else if (typeof MessageChannel < "u") {
      var re = new MessageChannel(), ue = re.port2;
      re.port1.onmessage = te, se = function() {
        ue.postMessage(null);
      };
    } else
      se = function() {
        z(te, 0);
      };
    function we(k, K) {
      Q = z(function() {
        k(i.unstable_now());
      }, K);
    }
    i.unstable_IdlePriority = 5, i.unstable_ImmediatePriority = 1, i.unstable_LowPriority = 4, i.unstable_NormalPriority = 3, i.unstable_Profiling = null, i.unstable_UserBlockingPriority = 2, i.unstable_cancelCallback = function(k) {
      k.callback = null;
    }, i.unstable_forceFrameRate = function(k) {
      0 > k || 125 < k ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : F = 0 < k ? Math.floor(1e3 / k) : 5;
    }, i.unstable_getCurrentPriorityLevel = function() {
      return x;
    }, i.unstable_next = function(k) {
      switch (x) {
        case 1:
        case 2:
        case 3:
          var K = 3;
          break;
        default:
          K = x;
      }
      var J = x;
      x = K;
      try {
        return k();
      } finally {
        x = J;
      }
    }, i.unstable_requestPaint = function() {
      N = !0;
    }, i.unstable_runWithPriority = function(k, K) {
      switch (k) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          k = 3;
      }
      var J = x;
      x = k;
      try {
        return K();
      } finally {
        x = J;
      }
    }, i.unstable_scheduleCallback = function(k, K, J) {
      var ce = i.unstable_now();
      switch (typeof J == "object" && J !== null ? (J = J.delay, J = typeof J == "number" && 0 < J ? ce + J : ce) : J = ce, k) {
        case 1:
          var le = -1;
          break;
        case 2:
          le = 250;
          break;
        case 5:
          le = 1073741823;
          break;
        case 4:
          le = 1e4;
          break;
        default:
          le = 5e3;
      }
      return le = J + le, k = {
        id: g++,
        callback: K,
        priorityLevel: k,
        startTime: J,
        expirationTime: le,
        sortIndex: -1
      }, J > ce ? (k.sortIndex = J, l(d, k), s(h) === null && k === s(d) && (j ? (M(Q), Q = -1) : j = !0, we(H, J - ce))) : (k.sortIndex = le, l(h, k), E || w || (E = !0, X || (X = !0, se()))), k;
    }, i.unstable_shouldYield = P, i.unstable_wrapCallback = function(k) {
      var K = x;
      return function() {
        var J = x;
        x = K;
        try {
          return k.apply(this, arguments);
        } finally {
          x = J;
        }
      };
    };
  })(Nu)), Nu;
}
var bm;
function ly() {
  return bm || (bm = 1, Ru.exports = ny()), Ru.exports;
}
var ju = { exports: {} }, lt = {};
var xm;
function iy() {
  if (xm) return lt;
  xm = 1;
  var i = di();
  function l(h) {
    var d = "https://react.dev/errors/" + h;
    if (1 < arguments.length) {
      d += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var g = 2; g < arguments.length; g++)
        d += "&args[]=" + encodeURIComponent(arguments[g]);
    }
    return "Minified React error #" + h + "; visit " + d + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function s() {
  }
  var r = {
    d: {
      f: s,
      r: function() {
        throw Error(l(522));
      },
      D: s,
      C: s,
      L: s,
      m: s,
      X: s,
      S: s,
      M: s
    },
    p: 0,
    findDOMNode: null
  }, c = /* @__PURE__ */ Symbol.for("react.portal");
  function f(h, d, g) {
    var y = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: c,
      key: y == null ? null : "" + y,
      children: h,
      containerInfo: d,
      implementation: g
    };
  }
  var p = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function m(h, d) {
    if (h === "font") return "";
    if (typeof d == "string")
      return d === "use-credentials" ? d : "";
  }
  return lt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r, lt.createPortal = function(h, d) {
    var g = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!d || d.nodeType !== 1 && d.nodeType !== 9 && d.nodeType !== 11)
      throw Error(l(299));
    return f(h, d, null, g);
  }, lt.flushSync = function(h) {
    var d = p.T, g = r.p;
    try {
      if (p.T = null, r.p = 2, h) return h();
    } finally {
      p.T = d, r.p = g, r.d.f();
    }
  }, lt.preconnect = function(h, d) {
    typeof h == "string" && (d ? (d = d.crossOrigin, d = typeof d == "string" ? d === "use-credentials" ? d : "" : void 0) : d = null, r.d.C(h, d));
  }, lt.prefetchDNS = function(h) {
    typeof h == "string" && r.d.D(h);
  }, lt.preinit = function(h, d) {
    if (typeof h == "string" && d && typeof d.as == "string") {
      var g = d.as, y = m(g, d.crossOrigin), x = typeof d.integrity == "string" ? d.integrity : void 0, w = typeof d.fetchPriority == "string" ? d.fetchPriority : void 0;
      g === "style" ? r.d.S(
        h,
        typeof d.precedence == "string" ? d.precedence : void 0,
        {
          crossOrigin: y,
          integrity: x,
          fetchPriority: w
        }
      ) : g === "script" && r.d.X(h, {
        crossOrigin: y,
        integrity: x,
        fetchPriority: w,
        nonce: typeof d.nonce == "string" ? d.nonce : void 0
      });
    }
  }, lt.preinitModule = function(h, d) {
    if (typeof h == "string")
      if (typeof d == "object" && d !== null) {
        if (d.as == null || d.as === "script") {
          var g = m(
            d.as,
            d.crossOrigin
          );
          r.d.M(h, {
            crossOrigin: g,
            integrity: typeof d.integrity == "string" ? d.integrity : void 0,
            nonce: typeof d.nonce == "string" ? d.nonce : void 0
          });
        }
      } else d == null && r.d.M(h);
  }, lt.preload = function(h, d) {
    if (typeof h == "string" && typeof d == "object" && d !== null && typeof d.as == "string") {
      var g = d.as, y = m(g, d.crossOrigin);
      r.d.L(h, g, {
        crossOrigin: y,
        integrity: typeof d.integrity == "string" ? d.integrity : void 0,
        nonce: typeof d.nonce == "string" ? d.nonce : void 0,
        type: typeof d.type == "string" ? d.type : void 0,
        fetchPriority: typeof d.fetchPriority == "string" ? d.fetchPriority : void 0,
        referrerPolicy: typeof d.referrerPolicy == "string" ? d.referrerPolicy : void 0,
        imageSrcSet: typeof d.imageSrcSet == "string" ? d.imageSrcSet : void 0,
        imageSizes: typeof d.imageSizes == "string" ? d.imageSizes : void 0,
        media: typeof d.media == "string" ? d.media : void 0
      });
    }
  }, lt.preloadModule = function(h, d) {
    if (typeof h == "string")
      if (d) {
        var g = m(d.as, d.crossOrigin);
        r.d.m(h, {
          as: typeof d.as == "string" && d.as !== "script" ? d.as : void 0,
          crossOrigin: g,
          integrity: typeof d.integrity == "string" ? d.integrity : void 0
        });
      } else r.d.m(h);
  }, lt.requestFormReset = function(h) {
    r.d.r(h);
  }, lt.unstable_batchedUpdates = function(h, d) {
    return h(d);
  }, lt.useFormState = function(h, d, g) {
    return p.H.useFormState(h, d, g);
  }, lt.useFormStatus = function() {
    return p.H.useHostTransitionStatus();
  }, lt.version = "19.2.4", lt;
}
var Sm;
function sy() {
  if (Sm) return ju.exports;
  Sm = 1;
  function i() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (l) {
        console.error(l);
      }
  }
  return i(), ju.exports = iy(), ju.exports;
}
var wm;
function ry() {
  if (wm) return ti;
  wm = 1;
  var i = ly(), l = di(), s = sy();
  function r(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++)
        t += "&args[]=" + encodeURIComponent(arguments[a]);
    }
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function c(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function f(e) {
    var t = e, a = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do
        t = e, (t.flags & 4098) !== 0 && (a = t.return), e = t.return;
      while (e);
    }
    return t.tag === 3 ? a : null;
  }
  function p(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function m(e) {
    if (e.tag === 31) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function h(e) {
    if (f(e) !== e)
      throw Error(r(188));
  }
  function d(e) {
    var t = e.alternate;
    if (!t) {
      if (t = f(e), t === null) throw Error(r(188));
      return t !== e ? null : e;
    }
    for (var a = e, n = t; ; ) {
      var o = a.return;
      if (o === null) break;
      var u = o.alternate;
      if (u === null) {
        if (n = o.return, n !== null) {
          a = n;
          continue;
        }
        break;
      }
      if (o.child === u.child) {
        for (u = o.child; u; ) {
          if (u === a) return h(o), e;
          if (u === n) return h(o), t;
          u = u.sibling;
        }
        throw Error(r(188));
      }
      if (a.return !== n.return) a = o, n = u;
      else {
        for (var v = !1, S = o.child; S; ) {
          if (S === a) {
            v = !0, a = o, n = u;
            break;
          }
          if (S === n) {
            v = !0, n = o, a = u;
            break;
          }
          S = S.sibling;
        }
        if (!v) {
          for (S = u.child; S; ) {
            if (S === a) {
              v = !0, a = u, n = o;
              break;
            }
            if (S === n) {
              v = !0, n = u, a = o;
              break;
            }
            S = S.sibling;
          }
          if (!v) throw Error(r(189));
        }
      }
      if (a.alternate !== n) throw Error(r(190));
    }
    if (a.tag !== 3) throw Error(r(188));
    return a.stateNode.current === a ? e : t;
  }
  function g(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (t = g(e), t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var y = Object.assign, x = /* @__PURE__ */ Symbol.for("react.element"), w = /* @__PURE__ */ Symbol.for("react.transitional.element"), E = /* @__PURE__ */ Symbol.for("react.portal"), j = /* @__PURE__ */ Symbol.for("react.fragment"), N = /* @__PURE__ */ Symbol.for("react.strict_mode"), z = /* @__PURE__ */ Symbol.for("react.profiler"), M = /* @__PURE__ */ Symbol.for("react.consumer"), $ = /* @__PURE__ */ Symbol.for("react.context"), O = /* @__PURE__ */ Symbol.for("react.forward_ref"), H = /* @__PURE__ */ Symbol.for("react.suspense"), X = /* @__PURE__ */ Symbol.for("react.suspense_list"), Q = /* @__PURE__ */ Symbol.for("react.memo"), F = /* @__PURE__ */ Symbol.for("react.lazy"), I = /* @__PURE__ */ Symbol.for("react.activity"), P = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), te = Symbol.iterator;
  function se(e) {
    return e === null || typeof e != "object" ? null : (e = te && e[te] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var re = /* @__PURE__ */ Symbol.for("react.client.reference");
  function ue(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === re ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case j:
        return "Fragment";
      case z:
        return "Profiler";
      case N:
        return "StrictMode";
      case H:
        return "Suspense";
      case X:
        return "SuspenseList";
      case I:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case E:
          return "Portal";
        case $:
          return e.displayName || "Context";
        case M:
          return (e._context.displayName || "Context") + ".Consumer";
        case O:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case Q:
          return t = e.displayName || null, t !== null ? t : ue(e.type) || "Memo";
        case F:
          t = e._payload, e = e._init;
          try {
            return ue(e(t));
          } catch {
          }
      }
    return null;
  }
  var we = Array.isArray, k = l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, K = s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, J = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, ce = [], le = -1;
  function R(e) {
    return { current: e };
  }
  function V(e) {
    0 > le || (e.current = ce[le], ce[le] = null, le--);
  }
  function Z(e, t) {
    le++, ce[le] = e.current, e.current = t;
  }
  var W = R(null), de = R(null), pe = R(null), Re = R(null);
  function st(e, t) {
    switch (Z(pe, t), Z(de, e), Z(W, null), t.nodeType) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? $h(e) : 0;
        break;
      default:
        if (e = t.tagName, t = t.namespaceURI)
          t = $h(t), e = kh(t, e);
        else
          switch (e) {
            case "svg":
              e = 1;
              break;
            case "math":
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    V(W), Z(W, e);
  }
  function qe() {
    V(W), V(de), V(pe);
  }
  function rl(e) {
    e.memoizedState !== null && Z(Re, e);
    var t = W.current, a = kh(t, e.type);
    t !== a && (Z(de, e), Z(W, a));
  }
  function vi(e) {
    de.current === e && (V(W), V(de)), Re.current === e && (V(Re), Jl._currentValue = J);
  }
  var lr, dc;
  function Ka(e) {
    if (lr === void 0)
      try {
        throw Error();
      } catch (a) {
        var t = a.stack.trim().match(/\n( *(at )?)/);
        lr = t && t[1] || "", dc = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + lr + e + dc;
  }
  var ir = !1;
  function sr(e, t) {
    if (!e || ir) return "";
    ir = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var n = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
              var G = function() {
                throw Error();
              };
              if (Object.defineProperty(G.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(G, []);
                } catch (B) {
                  var U = B;
                }
                Reflect.construct(e, [], G);
              } else {
                try {
                  G.call();
                } catch (B) {
                  U = B;
                }
                e.call(G.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (B) {
                U = B;
              }
              (G = e()) && typeof G.catch == "function" && G.catch(function() {
              });
            }
          } catch (B) {
            if (B && U && typeof B.stack == "string")
              return [B.stack, U.stack];
          }
          return [null, null];
        }
      };
      n.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var o = Object.getOwnPropertyDescriptor(
        n.DetermineComponentFrameRoot,
        "name"
      );
      o && o.configurable && Object.defineProperty(
        n.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var u = n.DetermineComponentFrameRoot(), v = u[0], S = u[1];
      if (v && S) {
        var C = v.split(`
`), D = S.split(`
`);
        for (o = n = 0; n < C.length && !C[n].includes("DetermineComponentFrameRoot"); )
          n++;
        for (; o < D.length && !D[o].includes(
          "DetermineComponentFrameRoot"
        ); )
          o++;
        if (n === C.length || o === D.length)
          for (n = C.length - 1, o = D.length - 1; 1 <= n && 0 <= o && C[n] !== D[o]; )
            o--;
        for (; 1 <= n && 0 <= o; n--, o--)
          if (C[n] !== D[o]) {
            if (n !== 1 || o !== 1)
              do
                if (n--, o--, 0 > o || C[n] !== D[o]) {
                  var q = `
` + C[n].replace(" at new ", " at ");
                  return e.displayName && q.includes("<anonymous>") && (q = q.replace("<anonymous>", e.displayName)), q;
                }
              while (1 <= n && 0 <= o);
            break;
          }
      }
    } finally {
      ir = !1, Error.prepareStackTrace = a;
    }
    return (a = e ? e.displayName || e.name : "") ? Ka(a) : "";
  }
  function zg(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Ka(e.type);
      case 16:
        return Ka("Lazy");
      case 13:
        return e.child !== t && t !== null ? Ka("Suspense Fallback") : Ka("Suspense");
      case 19:
        return Ka("SuspenseList");
      case 0:
      case 15:
        return sr(e.type, !1);
      case 11:
        return sr(e.type.render, !1);
      case 1:
        return sr(e.type, !0);
      case 31:
        return Ka("Activity");
      default:
        return "";
    }
  }
  function hc(e) {
    try {
      var t = "", a = null;
      do
        t += zg(e, a), a = e, e = e.return;
      while (e);
      return t;
    } catch (n) {
      return `
Error generating stack: ` + n.message + `
` + n.stack;
    }
  }
  var rr = Object.prototype.hasOwnProperty, or = i.unstable_scheduleCallback, ur = i.unstable_cancelCallback, Lg = i.unstable_shouldYield, Mg = i.unstable_requestPaint, yt = i.unstable_now, _g = i.unstable_getCurrentPriorityLevel, mc = i.unstable_ImmediatePriority, pc = i.unstable_UserBlockingPriority, bi = i.unstable_NormalPriority, Dg = i.unstable_LowPriority, gc = i.unstable_IdlePriority, Ug = i.log, $g = i.unstable_setDisableYieldValue, ol = null, vt = null;
  function va(e) {
    if (typeof Ug == "function" && $g(e), vt && typeof vt.setStrictMode == "function")
      try {
        vt.setStrictMode(ol, e);
      } catch {
      }
  }
  var bt = Math.clz32 ? Math.clz32 : Hg, kg = Math.log, Bg = Math.LN2;
  function Hg(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (kg(e) / Bg | 0) | 0;
  }
  var xi = 256, Si = 262144, wi = 4194304;
  function Xa(e) {
    var t = e & 42;
    if (t !== 0) return t;
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return e & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function Ei(e, t, a) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var o = 0, u = e.suspendedLanes, v = e.pingedLanes;
    e = e.warmLanes;
    var S = n & 134217727;
    return S !== 0 ? (n = S & ~u, n !== 0 ? o = Xa(n) : (v &= S, v !== 0 ? o = Xa(v) : a || (a = S & ~e, a !== 0 && (o = Xa(a))))) : (S = n & ~u, S !== 0 ? o = Xa(S) : v !== 0 ? o = Xa(v) : a || (a = n & ~e, a !== 0 && (o = Xa(a)))), o === 0 ? 0 : t !== 0 && t !== o && (t & u) === 0 && (u = o & -o, a = t & -t, u >= a || u === 32 && (a & 4194048) !== 0) ? t : o;
  }
  function ul(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function qg(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function yc() {
    var e = wi;
    return wi <<= 1, (wi & 62914560) === 0 && (wi = 4194304), e;
  }
  function cr(e) {
    for (var t = [], a = 0; 31 > a; a++) t.push(e);
    return t;
  }
  function cl(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function Vg(e, t, a, n, o, u) {
    var v = e.pendingLanes;
    e.pendingLanes = a, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= a, e.entangledLanes &= a, e.errorRecoveryDisabledLanes &= a, e.shellSuspendCounter = 0;
    var S = e.entanglements, C = e.expirationTimes, D = e.hiddenUpdates;
    for (a = v & ~a; 0 < a; ) {
      var q = 31 - bt(a), G = 1 << q;
      S[q] = 0, C[q] = -1;
      var U = D[q];
      if (U !== null)
        for (D[q] = null, q = 0; q < U.length; q++) {
          var B = U[q];
          B !== null && (B.lane &= -536870913);
        }
      a &= ~G;
    }
    n !== 0 && vc(e, n, 0), u !== 0 && o === 0 && e.tag !== 0 && (e.suspendedLanes |= u & ~(v & ~t));
  }
  function vc(e, t, a) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var n = 31 - bt(t);
    e.entangledLanes |= t, e.entanglements[n] = e.entanglements[n] | 1073741824 | a & 261930;
  }
  function bc(e, t) {
    var a = e.entangledLanes |= t;
    for (e = e.entanglements; a; ) {
      var n = 31 - bt(a), o = 1 << n;
      o & t | e[n] & t && (e[n] |= t), a &= ~o;
    }
  }
  function xc(e, t) {
    var a = t & -t;
    return a = (a & 42) !== 0 ? 1 : fr(a), (a & (e.suspendedLanes | t)) !== 0 ? 0 : a;
  }
  function fr(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function dr(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Sc() {
    var e = K.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : rm(e.type));
  }
  function wc(e, t) {
    var a = K.p;
    try {
      return K.p = e, t();
    } finally {
      K.p = a;
    }
  }
  var ba = Math.random().toString(36).slice(2), We = "__reactFiber$" + ba, ot = "__reactProps$" + ba, yn = "__reactContainer$" + ba, hr = "__reactEvents$" + ba, Yg = "__reactListeners$" + ba, Gg = "__reactHandles$" + ba, Ec = "__reactResources$" + ba, fl = "__reactMarker$" + ba;
  function mr(e) {
    delete e[We], delete e[ot], delete e[hr], delete e[Yg], delete e[Gg];
  }
  function vn(e) {
    var t = e[We];
    if (t) return t;
    for (var a = e.parentNode; a; ) {
      if (t = a[yn] || a[We]) {
        if (a = t.alternate, t.child !== null || a !== null && a.child !== null)
          for (e = Qh(e); e !== null; ) {
            if (a = e[We]) return a;
            e = Qh(e);
          }
        return t;
      }
      e = a, a = e.parentNode;
    }
    return null;
  }
  function bn(e) {
    if (e = e[We] || e[yn]) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function dl(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(r(33));
  }
  function xn(e) {
    var t = e[Ec];
    return t || (t = e[Ec] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function Je(e) {
    e[fl] = !0;
  }
  var Ac = /* @__PURE__ */ new Set(), Cc = {};
  function Fa(e, t) {
    Sn(e, t), Sn(e + "Capture", t);
  }
  function Sn(e, t) {
    for (Cc[e] = t, e = 0; e < t.length; e++)
      Ac.add(t[e]);
  }
  var Qg = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Rc = {}, Nc = {};
  function Kg(e) {
    return rr.call(Nc, e) ? !0 : rr.call(Rc, e) ? !1 : Qg.test(e) ? Nc[e] = !0 : (Rc[e] = !0, !1);
  }
  function Ai(e, t, a) {
    if (Kg(t))
      if (a === null) e.removeAttribute(t);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(t);
            return;
          case "boolean":
            var n = t.toLowerCase().slice(0, 5);
            if (n !== "data-" && n !== "aria-") {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, "" + a);
      }
  }
  function Ci(e, t, a) {
    if (a === null) e.removeAttribute(t);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, "" + a);
    }
  }
  function Ft(e, t, a, n) {
    if (n === null) e.removeAttribute(a);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(a);
          return;
      }
      e.setAttributeNS(t, a, "" + n);
    }
  }
  function Nt(e) {
    switch (typeof e) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function jc(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Xg(e, t, a) {
    var n = Object.getOwnPropertyDescriptor(
      e.constructor.prototype,
      t
    );
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
      var o = n.get, u = n.set;
      return Object.defineProperty(e, t, {
        configurable: !0,
        get: function() {
          return o.call(this);
        },
        set: function(v) {
          a = "" + v, u.call(this, v);
        }
      }), Object.defineProperty(e, t, {
        enumerable: n.enumerable
      }), {
        getValue: function() {
          return a;
        },
        setValue: function(v) {
          a = "" + v;
        },
        stopTracking: function() {
          e._valueTracker = null, delete e[t];
        }
      };
    }
  }
  function pr(e) {
    if (!e._valueTracker) {
      var t = jc(e) ? "checked" : "value";
      e._valueTracker = Xg(
        e,
        t,
        "" + e[t]
      );
    }
  }
  function Tc(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var a = t.getValue(), n = "";
    return e && (n = jc(e) ? e.checked ? "true" : "false" : e.value), e = n, e !== a ? (t.setValue(e), !0) : !1;
  }
  function Ri(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var Fg = /[\n"\\]/g;
  function jt(e) {
    return e.replace(
      Fg,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function gr(e, t, a, n, o, u, v, S) {
    e.name = "", v != null && typeof v != "function" && typeof v != "symbol" && typeof v != "boolean" ? e.type = v : e.removeAttribute("type"), t != null ? v === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Nt(t)) : e.value !== "" + Nt(t) && (e.value = "" + Nt(t)) : v !== "submit" && v !== "reset" || e.removeAttribute("value"), t != null ? yr(e, v, Nt(t)) : a != null ? yr(e, v, Nt(a)) : n != null && e.removeAttribute("value"), o == null && u != null && (e.defaultChecked = !!u), o != null && (e.checked = o && typeof o != "function" && typeof o != "symbol"), S != null && typeof S != "function" && typeof S != "symbol" && typeof S != "boolean" ? e.name = "" + Nt(S) : e.removeAttribute("name");
  }
  function Oc(e, t, a, n, o, u, v, S) {
    if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (e.type = u), t != null || a != null) {
      if (!(u !== "submit" && u !== "reset" || t != null)) {
        pr(e);
        return;
      }
      a = a != null ? "" + Nt(a) : "", t = t != null ? "" + Nt(t) : a, S || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = n ?? o, n = typeof n != "function" && typeof n != "symbol" && !!n, e.checked = S ? e.checked : !!n, e.defaultChecked = !!n, v != null && typeof v != "function" && typeof v != "symbol" && typeof v != "boolean" && (e.name = v), pr(e);
  }
  function yr(e, t, a) {
    t === "number" && Ri(e.ownerDocument) === e || e.defaultValue === "" + a || (e.defaultValue = "" + a);
  }
  function wn(e, t, a, n) {
    if (e = e.options, t) {
      t = {};
      for (var o = 0; o < a.length; o++)
        t["$" + a[o]] = !0;
      for (a = 0; a < e.length; a++)
        o = t.hasOwnProperty("$" + e[a].value), e[a].selected !== o && (e[a].selected = o), o && n && (e[a].defaultSelected = !0);
    } else {
      for (a = "" + Nt(a), t = null, o = 0; o < e.length; o++) {
        if (e[o].value === a) {
          e[o].selected = !0, n && (e[o].defaultSelected = !0);
          return;
        }
        t !== null || e[o].disabled || (t = e[o]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function zc(e, t, a) {
    if (t != null && (t = "" + Nt(t), t !== e.value && (e.value = t), a == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = a != null ? "" + Nt(a) : "";
  }
  function Lc(e, t, a, n) {
    if (t == null) {
      if (n != null) {
        if (a != null) throw Error(r(92));
        if (we(n)) {
          if (1 < n.length) throw Error(r(93));
          n = n[0];
        }
        a = n;
      }
      a == null && (a = ""), t = a;
    }
    a = Nt(t), e.defaultValue = a, n = e.textContent, n === a && n !== "" && n !== null && (e.value = n), pr(e);
  }
  function En(e, t) {
    if (t) {
      var a = e.firstChild;
      if (a && a === e.lastChild && a.nodeType === 3) {
        a.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Zg = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Mc(e, t, a) {
    var n = t.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === "" ? n ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : n ? e.setProperty(t, a) : typeof a != "number" || a === 0 || Zg.has(t) ? t === "float" ? e.cssFloat = a : e[t] = ("" + a).trim() : e[t] = a + "px";
  }
  function _c(e, t, a) {
    if (t != null && typeof t != "object")
      throw Error(r(62));
    if (e = e.style, a != null) {
      for (var n in a)
        !a.hasOwnProperty(n) || t != null && t.hasOwnProperty(n) || (n.indexOf("--") === 0 ? e.setProperty(n, "") : n === "float" ? e.cssFloat = "" : e[n] = "");
      for (var o in t)
        n = t[o], t.hasOwnProperty(o) && a[o] !== n && Mc(e, o, n);
    } else
      for (var u in t)
        t.hasOwnProperty(u) && Mc(e, u, t[u]);
  }
  function vr(e) {
    if (e.indexOf("-") === -1) return !1;
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Jg = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), Ig = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Ni(e) {
    return Ig.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  function Zt() {
  }
  var br = null;
  function xr(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var An = null, Cn = null;
  function Dc(e) {
    var t = bn(e);
    if (t && (e = t.stateNode)) {
      var a = e[ot] || null;
      e: switch (e = t.stateNode, t.type) {
        case "input":
          if (gr(
            e,
            a.value,
            a.defaultValue,
            a.defaultValue,
            a.checked,
            a.defaultChecked,
            a.type,
            a.name
          ), t = a.name, a.type === "radio" && t != null) {
            for (a = e; a.parentNode; ) a = a.parentNode;
            for (a = a.querySelectorAll(
              'input[name="' + jt(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < a.length; t++) {
              var n = a[t];
              if (n !== e && n.form === e.form) {
                var o = n[ot] || null;
                if (!o) throw Error(r(90));
                gr(
                  n,
                  o.value,
                  o.defaultValue,
                  o.defaultValue,
                  o.checked,
                  o.defaultChecked,
                  o.type,
                  o.name
                );
              }
            }
            for (t = 0; t < a.length; t++)
              n = a[t], n.form === e.form && Tc(n);
          }
          break e;
        case "textarea":
          zc(e, a.value, a.defaultValue);
          break e;
        case "select":
          t = a.value, t != null && wn(e, !!a.multiple, t, !1);
      }
    }
  }
  var Sr = !1;
  function Uc(e, t, a) {
    if (Sr) return e(t, a);
    Sr = !0;
    try {
      var n = e(t);
      return n;
    } finally {
      if (Sr = !1, (An !== null || Cn !== null) && (ms(), An && (t = An, e = Cn, Cn = An = null, Dc(t), e)))
        for (t = 0; t < e.length; t++) Dc(e[t]);
    }
  }
  function hl(e, t) {
    var a = e.stateNode;
    if (a === null) return null;
    var n = a[ot] || null;
    if (n === null) return null;
    a = n[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (n = !n.disabled) || (e = e.type, n = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !n;
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (a && typeof a != "function")
      throw Error(
        r(231, t, typeof a)
      );
    return a;
  }
  var Jt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), wr = !1;
  if (Jt)
    try {
      var ml = {};
      Object.defineProperty(ml, "passive", {
        get: function() {
          wr = !0;
        }
      }), window.addEventListener("test", ml, ml), window.removeEventListener("test", ml, ml);
    } catch {
      wr = !1;
    }
  var xa = null, Er = null, ji = null;
  function $c() {
    if (ji) return ji;
    var e, t = Er, a = t.length, n, o = "value" in xa ? xa.value : xa.textContent, u = o.length;
    for (e = 0; e < a && t[e] === o[e]; e++) ;
    var v = a - e;
    for (n = 1; n <= v && t[a - n] === o[u - n]; n++) ;
    return ji = o.slice(e, 1 < n ? 1 - n : void 0);
  }
  function Ti(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Oi() {
    return !0;
  }
  function kc() {
    return !1;
  }
  function ut(e) {
    function t(a, n, o, u, v) {
      this._reactName = a, this._targetInst = o, this.type = n, this.nativeEvent = u, this.target = v, this.currentTarget = null;
      for (var S in e)
        e.hasOwnProperty(S) && (a = e[S], this[S] = a ? a(u) : u[S]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? Oi : kc, this.isPropagationStopped = kc, this;
    }
    return y(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var a = this.nativeEvent;
        a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = Oi);
      },
      stopPropagation: function() {
        var a = this.nativeEvent;
        a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = Oi);
      },
      persist: function() {
      },
      isPersistent: Oi
    }), t;
  }
  var Za = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, zi = ut(Za), pl = y({}, Za, { view: 0, detail: 0 }), Pg = ut(pl), Ar, Cr, gl, Li = y({}, pl, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Nr,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== gl && (gl && e.type === "mousemove" ? (Ar = e.screenX - gl.screenX, Cr = e.screenY - gl.screenY) : Cr = Ar = 0, gl = e), Ar);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : Cr;
    }
  }), Bc = ut(Li), Wg = y({}, Li, { dataTransfer: 0 }), e0 = ut(Wg), t0 = y({}, pl, { relatedTarget: 0 }), Rr = ut(t0), a0 = y({}, Za, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), n0 = ut(a0), l0 = y({}, Za, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), i0 = ut(l0), s0 = y({}, Za, { data: 0 }), Hc = ut(s0), r0 = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, o0 = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, u0 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function c0(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = u0[e]) ? !!t[e] : !1;
  }
  function Nr() {
    return c0;
  }
  var f0 = y({}, pl, {
    key: function(e) {
      if (e.key) {
        var t = r0[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = Ti(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? o0[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Nr,
    charCode: function(e) {
      return e.type === "keypress" ? Ti(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? Ti(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), d0 = ut(f0), h0 = y({}, Li, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), qc = ut(h0), m0 = y({}, pl, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Nr
  }), p0 = ut(m0), g0 = y({}, Za, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), y0 = ut(g0), v0 = y({}, Li, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), b0 = ut(v0), x0 = y({}, Za, {
    newState: 0,
    oldState: 0
  }), S0 = ut(x0), w0 = [9, 13, 27, 32], jr = Jt && "CompositionEvent" in window, yl = null;
  Jt && "documentMode" in document && (yl = document.documentMode);
  var E0 = Jt && "TextEvent" in window && !yl, Vc = Jt && (!jr || yl && 8 < yl && 11 >= yl), Yc = " ", Gc = !1;
  function Qc(e, t) {
    switch (e) {
      case "keyup":
        return w0.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Kc(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Rn = !1;
  function A0(e, t) {
    switch (e) {
      case "compositionend":
        return Kc(t);
      case "keypress":
        return t.which !== 32 ? null : (Gc = !0, Yc);
      case "textInput":
        return e = t.data, e === Yc && Gc ? null : e;
      default:
        return null;
    }
  }
  function C0(e, t) {
    if (Rn)
      return e === "compositionend" || !jr && Qc(e, t) ? (e = $c(), ji = Er = xa = null, Rn = !1, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length)
            return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Vc && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var R0 = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function Xc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!R0[e.type] : t === "textarea";
  }
  function Fc(e, t, a, n) {
    An ? Cn ? Cn.push(n) : Cn = [n] : An = n, t = Ss(t, "onChange"), 0 < t.length && (a = new zi(
      "onChange",
      "change",
      null,
      a,
      n
    ), e.push({ event: a, listeners: t }));
  }
  var vl = null, bl = null;
  function N0(e) {
    zh(e, 0);
  }
  function Mi(e) {
    var t = dl(e);
    if (Tc(t)) return e;
  }
  function Zc(e, t) {
    if (e === "change") return t;
  }
  var Jc = !1;
  if (Jt) {
    var Tr;
    if (Jt) {
      var Or = "oninput" in document;
      if (!Or) {
        var Ic = document.createElement("div");
        Ic.setAttribute("oninput", "return;"), Or = typeof Ic.oninput == "function";
      }
      Tr = Or;
    } else Tr = !1;
    Jc = Tr && (!document.documentMode || 9 < document.documentMode);
  }
  function Pc() {
    vl && (vl.detachEvent("onpropertychange", Wc), bl = vl = null);
  }
  function Wc(e) {
    if (e.propertyName === "value" && Mi(bl)) {
      var t = [];
      Fc(
        t,
        bl,
        e,
        xr(e)
      ), Uc(N0, t);
    }
  }
  function j0(e, t, a) {
    e === "focusin" ? (Pc(), vl = t, bl = a, vl.attachEvent("onpropertychange", Wc)) : e === "focusout" && Pc();
  }
  function T0(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Mi(bl);
  }
  function O0(e, t) {
    if (e === "click") return Mi(t);
  }
  function z0(e, t) {
    if (e === "input" || e === "change")
      return Mi(t);
  }
  function L0(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var xt = typeof Object.is == "function" ? Object.is : L0;
  function xl(e, t) {
    if (xt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var a = Object.keys(e), n = Object.keys(t);
    if (a.length !== n.length) return !1;
    for (n = 0; n < a.length; n++) {
      var o = a[n];
      if (!rr.call(t, o) || !xt(e[o], t[o]))
        return !1;
    }
    return !0;
  }
  function ef(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function tf(e, t) {
    var a = ef(e);
    e = 0;
    for (var n; a; ) {
      if (a.nodeType === 3) {
        if (n = e + a.textContent.length, e <= t && n >= t)
          return { node: a, offset: t - e };
        e = n;
      }
      e: {
        for (; a; ) {
          if (a.nextSibling) {
            a = a.nextSibling;
            break e;
          }
          a = a.parentNode;
        }
        a = void 0;
      }
      a = ef(a);
    }
  }
  function af(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? af(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function nf(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var t = Ri(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var a = typeof t.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) e = t.contentWindow;
      else break;
      t = Ri(e.document);
    }
    return t;
  }
  function zr(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var M0 = Jt && "documentMode" in document && 11 >= document.documentMode, Nn = null, Lr = null, Sl = null, Mr = !1;
  function lf(e, t, a) {
    var n = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    Mr || Nn == null || Nn !== Ri(n) || (n = Nn, "selectionStart" in n && zr(n) ? n = { start: n.selectionStart, end: n.selectionEnd } : (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection(), n = {
      anchorNode: n.anchorNode,
      anchorOffset: n.anchorOffset,
      focusNode: n.focusNode,
      focusOffset: n.focusOffset
    }), Sl && xl(Sl, n) || (Sl = n, n = Ss(Lr, "onSelect"), 0 < n.length && (t = new zi(
      "onSelect",
      "select",
      null,
      t,
      a
    ), e.push({ event: t, listeners: n }), t.target = Nn)));
  }
  function Ja(e, t) {
    var a = {};
    return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
  }
  var jn = {
    animationend: Ja("Animation", "AnimationEnd"),
    animationiteration: Ja("Animation", "AnimationIteration"),
    animationstart: Ja("Animation", "AnimationStart"),
    transitionrun: Ja("Transition", "TransitionRun"),
    transitionstart: Ja("Transition", "TransitionStart"),
    transitioncancel: Ja("Transition", "TransitionCancel"),
    transitionend: Ja("Transition", "TransitionEnd")
  }, _r = {}, sf = {};
  Jt && (sf = document.createElement("div").style, "AnimationEvent" in window || (delete jn.animationend.animation, delete jn.animationiteration.animation, delete jn.animationstart.animation), "TransitionEvent" in window || delete jn.transitionend.transition);
  function Ia(e) {
    if (_r[e]) return _r[e];
    if (!jn[e]) return e;
    var t = jn[e], a;
    for (a in t)
      if (t.hasOwnProperty(a) && a in sf)
        return _r[e] = t[a];
    return e;
  }
  var rf = Ia("animationend"), of = Ia("animationiteration"), uf = Ia("animationstart"), _0 = Ia("transitionrun"), D0 = Ia("transitionstart"), U0 = Ia("transitioncancel"), cf = Ia("transitionend"), ff = /* @__PURE__ */ new Map(), Dr = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  Dr.push("scrollEnd");
  function kt(e, t) {
    ff.set(e, t), Fa(t, [e]);
  }
  var _i = typeof reportError == "function" ? reportError : function(e) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var t = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
        error: e
      });
      if (!window.dispatchEvent(t)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", e);
      return;
    }
    console.error(e);
  }, Tt = [], Tn = 0, Ur = 0;
  function Di() {
    for (var e = Tn, t = Ur = Tn = 0; t < e; ) {
      var a = Tt[t];
      Tt[t++] = null;
      var n = Tt[t];
      Tt[t++] = null;
      var o = Tt[t];
      Tt[t++] = null;
      var u = Tt[t];
      if (Tt[t++] = null, n !== null && o !== null) {
        var v = n.pending;
        v === null ? o.next = o : (o.next = v.next, v.next = o), n.pending = o;
      }
      u !== 0 && df(a, o, u);
    }
  }
  function Ui(e, t, a, n) {
    Tt[Tn++] = e, Tt[Tn++] = t, Tt[Tn++] = a, Tt[Tn++] = n, Ur |= n, e.lanes |= n, e = e.alternate, e !== null && (e.lanes |= n);
  }
  function $r(e, t, a, n) {
    return Ui(e, t, a, n), $i(e);
  }
  function Pa(e, t) {
    return Ui(e, null, null, t), $i(e);
  }
  function df(e, t, a) {
    e.lanes |= a;
    var n = e.alternate;
    n !== null && (n.lanes |= a);
    for (var o = !1, u = e.return; u !== null; )
      u.childLanes |= a, n = u.alternate, n !== null && (n.childLanes |= a), u.tag === 22 && (e = u.stateNode, e === null || e._visibility & 1 || (o = !0)), e = u, u = u.return;
    return e.tag === 3 ? (u = e.stateNode, o && t !== null && (o = 31 - bt(a), e = u.hiddenUpdates, n = e[o], n === null ? e[o] = [t] : n.push(t), t.lane = a | 536870912), u) : null;
  }
  function $i(e) {
    if (50 < Yl)
      throw Yl = 0, Xo = null, Error(r(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var On = {};
  function $0(e, t, a, n) {
    this.tag = e, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = n, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function St(e, t, a, n) {
    return new $0(e, t, a, n);
  }
  function kr(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function It(e, t) {
    var a = e.alternate;
    return a === null ? (a = St(
      e.tag,
      t,
      e.key,
      e.mode
    ), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null), a.flags = e.flags & 65011712, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue, t = e.dependencies, a.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.refCleanup = e.refCleanup, a;
  }
  function hf(e, t) {
    e.flags &= 65011714;
    var a = e.alternate;
    return a === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type, t = a.dependencies, e.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), e;
  }
  function ki(e, t, a, n, o, u) {
    var v = 0;
    if (n = e, typeof e == "function") kr(e) && (v = 1);
    else if (typeof e == "string")
      v = V1(
        e,
        a,
        W.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case I:
          return e = St(31, a, t, o), e.elementType = I, e.lanes = u, e;
        case j:
          return Wa(a.children, o, u, t);
        case N:
          v = 8, o |= 24;
          break;
        case z:
          return e = St(12, a, t, o | 2), e.elementType = z, e.lanes = u, e;
        case H:
          return e = St(13, a, t, o), e.elementType = H, e.lanes = u, e;
        case X:
          return e = St(19, a, t, o), e.elementType = X, e.lanes = u, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case $:
                v = 10;
                break e;
              case M:
                v = 9;
                break e;
              case O:
                v = 11;
                break e;
              case Q:
                v = 14;
                break e;
              case F:
                v = 16, n = null;
                break e;
            }
          v = 29, a = Error(
            r(130, e === null ? "null" : typeof e, "")
          ), n = null;
      }
    return t = St(v, a, t, o), t.elementType = e, t.type = n, t.lanes = u, t;
  }
  function Wa(e, t, a, n) {
    return e = St(7, e, n, t), e.lanes = a, e;
  }
  function Br(e, t, a) {
    return e = St(6, e, null, t), e.lanes = a, e;
  }
  function mf(e) {
    var t = St(18, null, null, 0);
    return t.stateNode = e, t;
  }
  function Hr(e, t, a) {
    return t = St(
      4,
      e.children !== null ? e.children : [],
      e.key,
      t
    ), t.lanes = a, t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation
    }, t;
  }
  var pf = /* @__PURE__ */ new WeakMap();
  function Ot(e, t) {
    if (typeof e == "object" && e !== null) {
      var a = pf.get(e);
      return a !== void 0 ? a : (t = {
        value: e,
        source: t,
        stack: hc(t)
      }, pf.set(e, t), t);
    }
    return {
      value: e,
      source: t,
      stack: hc(t)
    };
  }
  var zn = [], Ln = 0, Bi = null, wl = 0, zt = [], Lt = 0, Sa = null, qt = 1, Vt = "";
  function Pt(e, t) {
    zn[Ln++] = wl, zn[Ln++] = Bi, Bi = e, wl = t;
  }
  function gf(e, t, a) {
    zt[Lt++] = qt, zt[Lt++] = Vt, zt[Lt++] = Sa, Sa = e;
    var n = qt;
    e = Vt;
    var o = 32 - bt(n) - 1;
    n &= ~(1 << o), a += 1;
    var u = 32 - bt(t) + o;
    if (30 < u) {
      var v = o - o % 5;
      u = (n & (1 << v) - 1).toString(32), n >>= v, o -= v, qt = 1 << 32 - bt(t) + o | a << o | n, Vt = u + e;
    } else
      qt = 1 << u | a << o | n, Vt = e;
  }
  function qr(e) {
    e.return !== null && (Pt(e, 1), gf(e, 1, 0));
  }
  function Vr(e) {
    for (; e === Bi; )
      Bi = zn[--Ln], zn[Ln] = null, wl = zn[--Ln], zn[Ln] = null;
    for (; e === Sa; )
      Sa = zt[--Lt], zt[Lt] = null, Vt = zt[--Lt], zt[Lt] = null, qt = zt[--Lt], zt[Lt] = null;
  }
  function yf(e, t) {
    zt[Lt++] = qt, zt[Lt++] = Vt, zt[Lt++] = Sa, qt = t.id, Vt = t.overflow, Sa = e;
  }
  var et = null, Me = null, Se = !1, wa = null, Mt = !1, Yr = Error(r(519));
  function Ea(e) {
    var t = Error(
      r(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw El(Ot(t, e)), Yr;
  }
  function vf(e) {
    var t = e.stateNode, a = e.type, n = e.memoizedProps;
    switch (t[We] = e, t[ot] = n, a) {
      case "dialog":
        ye("cancel", t), ye("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        ye("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < Ql.length; a++)
          ye(Ql[a], t);
        break;
      case "source":
        ye("error", t);
        break;
      case "img":
      case "image":
      case "link":
        ye("error", t), ye("load", t);
        break;
      case "details":
        ye("toggle", t);
        break;
      case "input":
        ye("invalid", t), Oc(
          t,
          n.value,
          n.defaultValue,
          n.checked,
          n.defaultChecked,
          n.type,
          n.name,
          !0
        );
        break;
      case "select":
        ye("invalid", t);
        break;
      case "textarea":
        ye("invalid", t), Lc(t, n.value, n.defaultValue, n.children);
    }
    a = n.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || t.textContent === "" + a || n.suppressHydrationWarning === !0 || Dh(t.textContent, a) ? (n.popover != null && (ye("beforetoggle", t), ye("toggle", t)), n.onScroll != null && ye("scroll", t), n.onScrollEnd != null && ye("scrollend", t), n.onClick != null && (t.onclick = Zt), t = !0) : t = !1, t || Ea(e, !0);
  }
  function bf(e) {
    for (et = e.return; et; )
      switch (et.tag) {
        case 5:
        case 31:
        case 13:
          Mt = !1;
          return;
        case 27:
        case 3:
          Mt = !0;
          return;
        default:
          et = et.return;
      }
  }
  function Mn(e) {
    if (e !== et) return !1;
    if (!Se) return bf(e), Se = !0, !1;
    var t = e.tag, a;
    if ((a = t !== 3 && t !== 27) && ((a = t === 5) && (a = e.type, a = !(a !== "form" && a !== "button") || ou(e.type, e.memoizedProps)), a = !a), a && Me && Ea(e), bf(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(r(317));
      Me = Gh(e);
    } else if (t === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(r(317));
      Me = Gh(e);
    } else
      t === 27 ? (t = Me, $a(e.type) ? (e = hu, hu = null, Me = e) : Me = t) : Me = et ? Dt(e.stateNode.nextSibling) : null;
    return !0;
  }
  function en() {
    Me = et = null, Se = !1;
  }
  function Gr() {
    var e = wa;
    return e !== null && (ht === null ? ht = e : ht.push.apply(
      ht,
      e
    ), wa = null), e;
  }
  function El(e) {
    wa === null ? wa = [e] : wa.push(e);
  }
  var Qr = R(null), tn = null, Wt = null;
  function Aa(e, t, a) {
    Z(Qr, t._currentValue), t._currentValue = a;
  }
  function ea(e) {
    e._currentValue = Qr.current, V(Qr);
  }
  function Kr(e, t, a) {
    for (; e !== null; ) {
      var n = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, n !== null && (n.childLanes |= t)) : n !== null && (n.childLanes & t) !== t && (n.childLanes |= t), e === a) break;
      e = e.return;
    }
  }
  function Xr(e, t, a, n) {
    var o = e.child;
    for (o !== null && (o.return = e); o !== null; ) {
      var u = o.dependencies;
      if (u !== null) {
        var v = o.child;
        u = u.firstContext;
        e: for (; u !== null; ) {
          var S = u;
          u = o;
          for (var C = 0; C < t.length; C++)
            if (S.context === t[C]) {
              u.lanes |= a, S = u.alternate, S !== null && (S.lanes |= a), Kr(
                u.return,
                a,
                e
              ), n || (v = null);
              break e;
            }
          u = S.next;
        }
      } else if (o.tag === 18) {
        if (v = o.return, v === null) throw Error(r(341));
        v.lanes |= a, u = v.alternate, u !== null && (u.lanes |= a), Kr(v, a, e), v = null;
      } else v = o.child;
      if (v !== null) v.return = o;
      else
        for (v = o; v !== null; ) {
          if (v === e) {
            v = null;
            break;
          }
          if (o = v.sibling, o !== null) {
            o.return = v.return, v = o;
            break;
          }
          v = v.return;
        }
      o = v;
    }
  }
  function _n(e, t, a, n) {
    e = null;
    for (var o = t, u = !1; o !== null; ) {
      if (!u) {
        if ((o.flags & 524288) !== 0) u = !0;
        else if ((o.flags & 262144) !== 0) break;
      }
      if (o.tag === 10) {
        var v = o.alternate;
        if (v === null) throw Error(r(387));
        if (v = v.memoizedProps, v !== null) {
          var S = o.type;
          xt(o.pendingProps.value, v.value) || (e !== null ? e.push(S) : e = [S]);
        }
      } else if (o === Re.current) {
        if (v = o.alternate, v === null) throw Error(r(387));
        v.memoizedState.memoizedState !== o.memoizedState.memoizedState && (e !== null ? e.push(Jl) : e = [Jl]);
      }
      o = o.return;
    }
    e !== null && Xr(
      t,
      e,
      a,
      n
    ), t.flags |= 262144;
  }
  function Hi(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!xt(
        e.context._currentValue,
        e.memoizedValue
      ))
        return !0;
      e = e.next;
    }
    return !1;
  }
  function an(e) {
    tn = e, Wt = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function tt(e) {
    return xf(tn, e);
  }
  function qi(e, t) {
    return tn === null && an(e), xf(e, t);
  }
  function xf(e, t) {
    var a = t._currentValue;
    if (t = { context: t, memoizedValue: a, next: null }, Wt === null) {
      if (e === null) throw Error(r(308));
      Wt = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else Wt = Wt.next = t;
    return a;
  }
  var k0 = typeof AbortController < "u" ? AbortController : function() {
    var e = [], t = this.signal = {
      aborted: !1,
      addEventListener: function(a, n) {
        e.push(n);
      }
    };
    this.abort = function() {
      t.aborted = !0, e.forEach(function(a) {
        return a();
      });
    };
  }, B0 = i.unstable_scheduleCallback, H0 = i.unstable_NormalPriority, Ge = {
    $$typeof: $,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Fr() {
    return {
      controller: new k0(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Al(e) {
    e.refCount--, e.refCount === 0 && B0(H0, function() {
      e.controller.abort();
    });
  }
  var Cl = null, Zr = 0, Dn = 0, Un = null;
  function q0(e, t) {
    if (Cl === null) {
      var a = Cl = [];
      Zr = 0, Dn = Wo(), Un = {
        status: "pending",
        value: void 0,
        then: function(n) {
          a.push(n);
        }
      };
    }
    return Zr++, t.then(Sf, Sf), t;
  }
  function Sf() {
    if (--Zr === 0 && Cl !== null) {
      Un !== null && (Un.status = "fulfilled");
      var e = Cl;
      Cl = null, Dn = 0, Un = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function V0(e, t) {
    var a = [], n = {
      status: "pending",
      value: null,
      reason: null,
      then: function(o) {
        a.push(o);
      }
    };
    return e.then(
      function() {
        n.status = "fulfilled", n.value = t;
        for (var o = 0; o < a.length; o++) (0, a[o])(t);
      },
      function(o) {
        for (n.status = "rejected", n.reason = o, o = 0; o < a.length; o++)
          (0, a[o])(void 0);
      }
    ), n;
  }
  var wf = k.S;
  k.S = function(e, t) {
    ih = yt(), typeof t == "object" && t !== null && typeof t.then == "function" && q0(e, t), wf !== null && wf(e, t);
  };
  var nn = R(null);
  function Jr() {
    var e = nn.current;
    return e !== null ? e : Le.pooledCache;
  }
  function Vi(e, t) {
    t === null ? Z(nn, nn.current) : Z(nn, t.pool);
  }
  function Ef() {
    var e = Jr();
    return e === null ? null : { parent: Ge._currentValue, pool: e };
  }
  var $n = Error(r(460)), Ir = Error(r(474)), Yi = Error(r(542)), Gi = { then: function() {
  } };
  function Af(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function Cf(e, t, a) {
    switch (a = e[a], a === void 0 ? e.push(t) : a !== t && (t.then(Zt, Zt), t = a), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, Nf(e), e;
      default:
        if (typeof t.status == "string") t.then(Zt, Zt);
        else {
          if (e = Le, e !== null && 100 < e.shellSuspendCounter)
            throw Error(r(482));
          e = t, e.status = "pending", e.then(
            function(n) {
              if (t.status === "pending") {
                var o = t;
                o.status = "fulfilled", o.value = n;
              }
            },
            function(n) {
              if (t.status === "pending") {
                var o = t;
                o.status = "rejected", o.reason = n;
              }
            }
          );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw e = t.reason, Nf(e), e;
        }
        throw sn = t, $n;
    }
  }
  function ln(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (a) {
      throw a !== null && typeof a == "object" && typeof a.then == "function" ? (sn = a, $n) : a;
    }
  }
  var sn = null;
  function Rf() {
    if (sn === null) throw Error(r(459));
    var e = sn;
    return sn = null, e;
  }
  function Nf(e) {
    if (e === $n || e === Yi)
      throw Error(r(483));
  }
  var kn = null, Rl = 0;
  function Qi(e) {
    var t = Rl;
    return Rl += 1, kn === null && (kn = []), Cf(kn, e, t);
  }
  function Nl(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function Ki(e, t) {
    throw t.$$typeof === x ? Error(r(525)) : (e = Object.prototype.toString.call(t), Error(
      r(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e
      )
    ));
  }
  function jf(e) {
    function t(L, T) {
      if (e) {
        var _ = L.deletions;
        _ === null ? (L.deletions = [T], L.flags |= 16) : _.push(T);
      }
    }
    function a(L, T) {
      if (!e) return null;
      for (; T !== null; )
        t(L, T), T = T.sibling;
      return null;
    }
    function n(L) {
      for (var T = /* @__PURE__ */ new Map(); L !== null; )
        L.key !== null ? T.set(L.key, L) : T.set(L.index, L), L = L.sibling;
      return T;
    }
    function o(L, T) {
      return L = It(L, T), L.index = 0, L.sibling = null, L;
    }
    function u(L, T, _) {
      return L.index = _, e ? (_ = L.alternate, _ !== null ? (_ = _.index, _ < T ? (L.flags |= 67108866, T) : _) : (L.flags |= 67108866, T)) : (L.flags |= 1048576, T);
    }
    function v(L) {
      return e && L.alternate === null && (L.flags |= 67108866), L;
    }
    function S(L, T, _, Y) {
      return T === null || T.tag !== 6 ? (T = Br(_, L.mode, Y), T.return = L, T) : (T = o(T, _), T.return = L, T);
    }
    function C(L, T, _, Y) {
      var ne = _.type;
      return ne === j ? q(
        L,
        T,
        _.props.children,
        Y,
        _.key
      ) : T !== null && (T.elementType === ne || typeof ne == "object" && ne !== null && ne.$$typeof === F && ln(ne) === T.type) ? (T = o(T, _.props), Nl(T, _), T.return = L, T) : (T = ki(
        _.type,
        _.key,
        _.props,
        null,
        L.mode,
        Y
      ), Nl(T, _), T.return = L, T);
    }
    function D(L, T, _, Y) {
      return T === null || T.tag !== 4 || T.stateNode.containerInfo !== _.containerInfo || T.stateNode.implementation !== _.implementation ? (T = Hr(_, L.mode, Y), T.return = L, T) : (T = o(T, _.children || []), T.return = L, T);
    }
    function q(L, T, _, Y, ne) {
      return T === null || T.tag !== 7 ? (T = Wa(
        _,
        L.mode,
        Y,
        ne
      ), T.return = L, T) : (T = o(T, _), T.return = L, T);
    }
    function G(L, T, _) {
      if (typeof T == "string" && T !== "" || typeof T == "number" || typeof T == "bigint")
        return T = Br(
          "" + T,
          L.mode,
          _
        ), T.return = L, T;
      if (typeof T == "object" && T !== null) {
        switch (T.$$typeof) {
          case w:
            return _ = ki(
              T.type,
              T.key,
              T.props,
              null,
              L.mode,
              _
            ), Nl(_, T), _.return = L, _;
          case E:
            return T = Hr(
              T,
              L.mode,
              _
            ), T.return = L, T;
          case F:
            return T = ln(T), G(L, T, _);
        }
        if (we(T) || se(T))
          return T = Wa(
            T,
            L.mode,
            _,
            null
          ), T.return = L, T;
        if (typeof T.then == "function")
          return G(L, Qi(T), _);
        if (T.$$typeof === $)
          return G(
            L,
            qi(L, T),
            _
          );
        Ki(L, T);
      }
      return null;
    }
    function U(L, T, _, Y) {
      var ne = T !== null ? T.key : null;
      if (typeof _ == "string" && _ !== "" || typeof _ == "number" || typeof _ == "bigint")
        return ne !== null ? null : S(L, T, "" + _, Y);
      if (typeof _ == "object" && _ !== null) {
        switch (_.$$typeof) {
          case w:
            return _.key === ne ? C(L, T, _, Y) : null;
          case E:
            return _.key === ne ? D(L, T, _, Y) : null;
          case F:
            return _ = ln(_), U(L, T, _, Y);
        }
        if (we(_) || se(_))
          return ne !== null ? null : q(L, T, _, Y, null);
        if (typeof _.then == "function")
          return U(
            L,
            T,
            Qi(_),
            Y
          );
        if (_.$$typeof === $)
          return U(
            L,
            T,
            qi(L, _),
            Y
          );
        Ki(L, _);
      }
      return null;
    }
    function B(L, T, _, Y, ne) {
      if (typeof Y == "string" && Y !== "" || typeof Y == "number" || typeof Y == "bigint")
        return L = L.get(_) || null, S(T, L, "" + Y, ne);
      if (typeof Y == "object" && Y !== null) {
        switch (Y.$$typeof) {
          case w:
            return L = L.get(
              Y.key === null ? _ : Y.key
            ) || null, C(T, L, Y, ne);
          case E:
            return L = L.get(
              Y.key === null ? _ : Y.key
            ) || null, D(T, L, Y, ne);
          case F:
            return Y = ln(Y), B(
              L,
              T,
              _,
              Y,
              ne
            );
        }
        if (we(Y) || se(Y))
          return L = L.get(_) || null, q(T, L, Y, ne, null);
        if (typeof Y.then == "function")
          return B(
            L,
            T,
            _,
            Qi(Y),
            ne
          );
        if (Y.$$typeof === $)
          return B(
            L,
            T,
            _,
            qi(T, Y),
            ne
          );
        Ki(T, Y);
      }
      return null;
    }
    function ee(L, T, _, Y) {
      for (var ne = null, Ee = null, ae = T, me = T = 0, xe = null; ae !== null && me < _.length; me++) {
        ae.index > me ? (xe = ae, ae = null) : xe = ae.sibling;
        var Ae = U(
          L,
          ae,
          _[me],
          Y
        );
        if (Ae === null) {
          ae === null && (ae = xe);
          break;
        }
        e && ae && Ae.alternate === null && t(L, ae), T = u(Ae, T, me), Ee === null ? ne = Ae : Ee.sibling = Ae, Ee = Ae, ae = xe;
      }
      if (me === _.length)
        return a(L, ae), Se && Pt(L, me), ne;
      if (ae === null) {
        for (; me < _.length; me++)
          ae = G(L, _[me], Y), ae !== null && (T = u(
            ae,
            T,
            me
          ), Ee === null ? ne = ae : Ee.sibling = ae, Ee = ae);
        return Se && Pt(L, me), ne;
      }
      for (ae = n(ae); me < _.length; me++)
        xe = B(
          ae,
          L,
          me,
          _[me],
          Y
        ), xe !== null && (e && xe.alternate !== null && ae.delete(
          xe.key === null ? me : xe.key
        ), T = u(
          xe,
          T,
          me
        ), Ee === null ? ne = xe : Ee.sibling = xe, Ee = xe);
      return e && ae.forEach(function(Va) {
        return t(L, Va);
      }), Se && Pt(L, me), ne;
    }
    function ie(L, T, _, Y) {
      if (_ == null) throw Error(r(151));
      for (var ne = null, Ee = null, ae = T, me = T = 0, xe = null, Ae = _.next(); ae !== null && !Ae.done; me++, Ae = _.next()) {
        ae.index > me ? (xe = ae, ae = null) : xe = ae.sibling;
        var Va = U(L, ae, Ae.value, Y);
        if (Va === null) {
          ae === null && (ae = xe);
          break;
        }
        e && ae && Va.alternate === null && t(L, ae), T = u(Va, T, me), Ee === null ? ne = Va : Ee.sibling = Va, Ee = Va, ae = xe;
      }
      if (Ae.done)
        return a(L, ae), Se && Pt(L, me), ne;
      if (ae === null) {
        for (; !Ae.done; me++, Ae = _.next())
          Ae = G(L, Ae.value, Y), Ae !== null && (T = u(Ae, T, me), Ee === null ? ne = Ae : Ee.sibling = Ae, Ee = Ae);
        return Se && Pt(L, me), ne;
      }
      for (ae = n(ae); !Ae.done; me++, Ae = _.next())
        Ae = B(ae, L, me, Ae.value, Y), Ae !== null && (e && Ae.alternate !== null && ae.delete(Ae.key === null ? me : Ae.key), T = u(Ae, T, me), Ee === null ? ne = Ae : Ee.sibling = Ae, Ee = Ae);
      return e && ae.forEach(function(W1) {
        return t(L, W1);
      }), Se && Pt(L, me), ne;
    }
    function ze(L, T, _, Y) {
      if (typeof _ == "object" && _ !== null && _.type === j && _.key === null && (_ = _.props.children), typeof _ == "object" && _ !== null) {
        switch (_.$$typeof) {
          case w:
            e: {
              for (var ne = _.key; T !== null; ) {
                if (T.key === ne) {
                  if (ne = _.type, ne === j) {
                    if (T.tag === 7) {
                      a(
                        L,
                        T.sibling
                      ), Y = o(
                        T,
                        _.props.children
                      ), Y.return = L, L = Y;
                      break e;
                    }
                  } else if (T.elementType === ne || typeof ne == "object" && ne !== null && ne.$$typeof === F && ln(ne) === T.type) {
                    a(
                      L,
                      T.sibling
                    ), Y = o(T, _.props), Nl(Y, _), Y.return = L, L = Y;
                    break e;
                  }
                  a(L, T);
                  break;
                } else t(L, T);
                T = T.sibling;
              }
              _.type === j ? (Y = Wa(
                _.props.children,
                L.mode,
                Y,
                _.key
              ), Y.return = L, L = Y) : (Y = ki(
                _.type,
                _.key,
                _.props,
                null,
                L.mode,
                Y
              ), Nl(Y, _), Y.return = L, L = Y);
            }
            return v(L);
          case E:
            e: {
              for (ne = _.key; T !== null; ) {
                if (T.key === ne)
                  if (T.tag === 4 && T.stateNode.containerInfo === _.containerInfo && T.stateNode.implementation === _.implementation) {
                    a(
                      L,
                      T.sibling
                    ), Y = o(T, _.children || []), Y.return = L, L = Y;
                    break e;
                  } else {
                    a(L, T);
                    break;
                  }
                else t(L, T);
                T = T.sibling;
              }
              Y = Hr(_, L.mode, Y), Y.return = L, L = Y;
            }
            return v(L);
          case F:
            return _ = ln(_), ze(
              L,
              T,
              _,
              Y
            );
        }
        if (we(_))
          return ee(
            L,
            T,
            _,
            Y
          );
        if (se(_)) {
          if (ne = se(_), typeof ne != "function") throw Error(r(150));
          return _ = ne.call(_), ie(
            L,
            T,
            _,
            Y
          );
        }
        if (typeof _.then == "function")
          return ze(
            L,
            T,
            Qi(_),
            Y
          );
        if (_.$$typeof === $)
          return ze(
            L,
            T,
            qi(L, _),
            Y
          );
        Ki(L, _);
      }
      return typeof _ == "string" && _ !== "" || typeof _ == "number" || typeof _ == "bigint" ? (_ = "" + _, T !== null && T.tag === 6 ? (a(L, T.sibling), Y = o(T, _), Y.return = L, L = Y) : (a(L, T), Y = Br(_, L.mode, Y), Y.return = L, L = Y), v(L)) : a(L, T);
    }
    return function(L, T, _, Y) {
      try {
        Rl = 0;
        var ne = ze(
          L,
          T,
          _,
          Y
        );
        return kn = null, ne;
      } catch (ae) {
        if (ae === $n || ae === Yi) throw ae;
        var Ee = St(29, ae, null, L.mode);
        return Ee.lanes = Y, Ee.return = L, Ee;
      }
    };
  }
  var rn = jf(!0), Tf = jf(!1), Ca = !1;
  function Pr(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Wr(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      callbacks: null
    });
  }
  function Ra(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function Na(e, t, a) {
    var n = e.updateQueue;
    if (n === null) return null;
    if (n = n.shared, (Ce & 2) !== 0) {
      var o = n.pending;
      return o === null ? t.next = t : (t.next = o.next, o.next = t), n.pending = t, t = $i(e), df(e, null, a), t;
    }
    return Ui(e, n, t, a), $i(e);
  }
  function jl(e, t, a) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (a & 4194048) !== 0)) {
      var n = t.lanes;
      n &= e.pendingLanes, a |= n, t.lanes = a, bc(e, a);
    }
  }
  function eo(e, t) {
    var a = e.updateQueue, n = e.alternate;
    if (n !== null && (n = n.updateQueue, a === n)) {
      var o = null, u = null;
      if (a = a.firstBaseUpdate, a !== null) {
        do {
          var v = {
            lane: a.lane,
            tag: a.tag,
            payload: a.payload,
            callback: null,
            next: null
          };
          u === null ? o = u = v : u = u.next = v, a = a.next;
        } while (a !== null);
        u === null ? o = u = t : u = u.next = t;
      } else o = u = t;
      a = {
        baseState: n.baseState,
        firstBaseUpdate: o,
        lastBaseUpdate: u,
        shared: n.shared,
        callbacks: n.callbacks
      }, e.updateQueue = a;
      return;
    }
    e = a.lastBaseUpdate, e === null ? a.firstBaseUpdate = t : e.next = t, a.lastBaseUpdate = t;
  }
  var to = !1;
  function Tl() {
    if (to) {
      var e = Un;
      if (e !== null) throw e;
    }
  }
  function Ol(e, t, a, n) {
    to = !1;
    var o = e.updateQueue;
    Ca = !1;
    var u = o.firstBaseUpdate, v = o.lastBaseUpdate, S = o.shared.pending;
    if (S !== null) {
      o.shared.pending = null;
      var C = S, D = C.next;
      C.next = null, v === null ? u = D : v.next = D, v = C;
      var q = e.alternate;
      q !== null && (q = q.updateQueue, S = q.lastBaseUpdate, S !== v && (S === null ? q.firstBaseUpdate = D : S.next = D, q.lastBaseUpdate = C));
    }
    if (u !== null) {
      var G = o.baseState;
      v = 0, q = D = C = null, S = u;
      do {
        var U = S.lane & -536870913, B = U !== S.lane;
        if (B ? (be & U) === U : (n & U) === U) {
          U !== 0 && U === Dn && (to = !0), q !== null && (q = q.next = {
            lane: 0,
            tag: S.tag,
            payload: S.payload,
            callback: null,
            next: null
          });
          e: {
            var ee = e, ie = S;
            U = t;
            var ze = a;
            switch (ie.tag) {
              case 1:
                if (ee = ie.payload, typeof ee == "function") {
                  G = ee.call(ze, G, U);
                  break e;
                }
                G = ee;
                break e;
              case 3:
                ee.flags = ee.flags & -65537 | 128;
              case 0:
                if (ee = ie.payload, U = typeof ee == "function" ? ee.call(ze, G, U) : ee, U == null) break e;
                G = y({}, G, U);
                break e;
              case 2:
                Ca = !0;
            }
          }
          U = S.callback, U !== null && (e.flags |= 64, B && (e.flags |= 8192), B = o.callbacks, B === null ? o.callbacks = [U] : B.push(U));
        } else
          B = {
            lane: U,
            tag: S.tag,
            payload: S.payload,
            callback: S.callback,
            next: null
          }, q === null ? (D = q = B, C = G) : q = q.next = B, v |= U;
        if (S = S.next, S === null) {
          if (S = o.shared.pending, S === null)
            break;
          B = S, S = B.next, B.next = null, o.lastBaseUpdate = B, o.shared.pending = null;
        }
      } while (!0);
      q === null && (C = G), o.baseState = C, o.firstBaseUpdate = D, o.lastBaseUpdate = q, u === null && (o.shared.lanes = 0), La |= v, e.lanes = v, e.memoizedState = G;
    }
  }
  function Of(e, t) {
    if (typeof e != "function")
      throw Error(r(191, e));
    e.call(t);
  }
  function zf(e, t) {
    var a = e.callbacks;
    if (a !== null)
      for (e.callbacks = null, e = 0; e < a.length; e++)
        Of(a[e], t);
  }
  var Bn = R(null), Xi = R(0);
  function Lf(e, t) {
    e = ua, Z(Xi, e), Z(Bn, t), ua = e | t.baseLanes;
  }
  function ao() {
    Z(Xi, ua), Z(Bn, Bn.current);
  }
  function no() {
    ua = Xi.current, V(Bn), V(Xi);
  }
  var wt = R(null), _t = null;
  function ja(e) {
    var t = e.alternate;
    Z(Ve, Ve.current & 1), Z(wt, e), _t === null && (t === null || Bn.current !== null || t.memoizedState !== null) && (_t = e);
  }
  function lo(e) {
    Z(Ve, Ve.current), Z(wt, e), _t === null && (_t = e);
  }
  function Mf(e) {
    e.tag === 22 ? (Z(Ve, Ve.current), Z(wt, e), _t === null && (_t = e)) : Ta();
  }
  function Ta() {
    Z(Ve, Ve.current), Z(wt, wt.current);
  }
  function Et(e) {
    V(wt), _t === e && (_t = null), V(Ve);
  }
  var Ve = R(0);
  function Fi(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var a = t.memoizedState;
        if (a !== null && (a = a.dehydrated, a === null || fu(a) || du(a)))
          return t;
      } else if (t.tag === 19 && (t.memoizedProps.revealOrder === "forwards" || t.memoizedProps.revealOrder === "backwards" || t.memoizedProps.revealOrder === "unstable_legacy-backwards" || t.memoizedProps.revealOrder === "together")) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  var ta = 0, he = null, Te = null, Qe = null, Zi = !1, Hn = !1, on = !1, Ji = 0, zl = 0, qn = null, Y0 = 0;
  function ke() {
    throw Error(r(321));
  }
  function io(e, t) {
    if (t === null) return !1;
    for (var a = 0; a < t.length && a < e.length; a++)
      if (!xt(e[a], t[a])) return !1;
    return !0;
  }
  function so(e, t, a, n, o, u) {
    return ta = u, he = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, k.H = e === null || e.memoizedState === null ? gd : wo, on = !1, u = a(n, o), on = !1, Hn && (u = Df(
      t,
      a,
      n,
      o
    )), _f(e), u;
  }
  function _f(e) {
    k.H = _l;
    var t = Te !== null && Te.next !== null;
    if (ta = 0, Qe = Te = he = null, Zi = !1, zl = 0, qn = null, t) throw Error(r(300));
    e === null || Ke || (e = e.dependencies, e !== null && Hi(e) && (Ke = !0));
  }
  function Df(e, t, a, n) {
    he = e;
    var o = 0;
    do {
      if (Hn && (qn = null), zl = 0, Hn = !1, 25 <= o) throw Error(r(301));
      if (o += 1, Qe = Te = null, e.updateQueue != null) {
        var u = e.updateQueue;
        u.lastEffect = null, u.events = null, u.stores = null, u.memoCache != null && (u.memoCache.index = 0);
      }
      k.H = yd, u = t(a, n);
    } while (Hn);
    return u;
  }
  function G0() {
    var e = k.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? Ll(t) : t, e = e.useState()[0], (Te !== null ? Te.memoizedState : null) !== e && (he.flags |= 1024), t;
  }
  function ro() {
    var e = Ji !== 0;
    return Ji = 0, e;
  }
  function oo(e, t, a) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a;
  }
  function uo(e) {
    if (Zi) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      Zi = !1;
    }
    ta = 0, Qe = Te = he = null, Hn = !1, zl = Ji = 0, qn = null;
  }
  function rt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Qe === null ? he.memoizedState = Qe = e : Qe = Qe.next = e, Qe;
  }
  function Ye() {
    if (Te === null) {
      var e = he.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Te.next;
    var t = Qe === null ? he.memoizedState : Qe.next;
    if (t !== null)
      Qe = t, Te = e;
    else {
      if (e === null)
        throw he.alternate === null ? Error(r(467)) : Error(r(310));
      Te = e, e = {
        memoizedState: Te.memoizedState,
        baseState: Te.baseState,
        baseQueue: Te.baseQueue,
        queue: Te.queue,
        next: null
      }, Qe === null ? he.memoizedState = Qe = e : Qe = Qe.next = e;
    }
    return Qe;
  }
  function Ii() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Ll(e) {
    var t = zl;
    return zl += 1, qn === null && (qn = []), e = Cf(qn, e, t), t = he, (Qe === null ? t.memoizedState : Qe.next) === null && (t = t.alternate, k.H = t === null || t.memoizedState === null ? gd : wo), e;
  }
  function Pi(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Ll(e);
      if (e.$$typeof === $) return tt(e);
    }
    throw Error(r(438, String(e)));
  }
  function co(e) {
    var t = null, a = he.updateQueue;
    if (a !== null && (t = a.memoCache), t == null) {
      var n = he.alternate;
      n !== null && (n = n.updateQueue, n !== null && (n = n.memoCache, n != null && (t = {
        data: n.data.map(function(o) {
          return o.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), a === null && (a = Ii(), he.updateQueue = a), a.memoCache = t, a = t.data[t.index], a === void 0)
      for (a = t.data[t.index] = Array(e), n = 0; n < e; n++)
        a[n] = P;
    return t.index++, a;
  }
  function aa(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Wi(e) {
    var t = Ye();
    return fo(t, Te, e);
  }
  function fo(e, t, a) {
    var n = e.queue;
    if (n === null) throw Error(r(311));
    n.lastRenderedReducer = a;
    var o = e.baseQueue, u = n.pending;
    if (u !== null) {
      if (o !== null) {
        var v = o.next;
        o.next = u.next, u.next = v;
      }
      t.baseQueue = o = u, n.pending = null;
    }
    if (u = e.baseState, o === null) e.memoizedState = u;
    else {
      t = o.next;
      var S = v = null, C = null, D = t, q = !1;
      do {
        var G = D.lane & -536870913;
        if (G !== D.lane ? (be & G) === G : (ta & G) === G) {
          var U = D.revertLane;
          if (U === 0)
            C !== null && (C = C.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: D.action,
              hasEagerState: D.hasEagerState,
              eagerState: D.eagerState,
              next: null
            }), G === Dn && (q = !0);
          else if ((ta & U) === U) {
            D = D.next, U === Dn && (q = !0);
            continue;
          } else
            G = {
              lane: 0,
              revertLane: D.revertLane,
              gesture: null,
              action: D.action,
              hasEagerState: D.hasEagerState,
              eagerState: D.eagerState,
              next: null
            }, C === null ? (S = C = G, v = u) : C = C.next = G, he.lanes |= U, La |= U;
          G = D.action, on && a(u, G), u = D.hasEagerState ? D.eagerState : a(u, G);
        } else
          U = {
            lane: G,
            revertLane: D.revertLane,
            gesture: D.gesture,
            action: D.action,
            hasEagerState: D.hasEagerState,
            eagerState: D.eagerState,
            next: null
          }, C === null ? (S = C = U, v = u) : C = C.next = U, he.lanes |= G, La |= G;
        D = D.next;
      } while (D !== null && D !== t);
      if (C === null ? v = u : C.next = S, !xt(u, e.memoizedState) && (Ke = !0, q && (a = Un, a !== null)))
        throw a;
      e.memoizedState = u, e.baseState = v, e.baseQueue = C, n.lastRenderedState = u;
    }
    return o === null && (n.lanes = 0), [e.memoizedState, n.dispatch];
  }
  function ho(e) {
    var t = Ye(), a = t.queue;
    if (a === null) throw Error(r(311));
    a.lastRenderedReducer = e;
    var n = a.dispatch, o = a.pending, u = t.memoizedState;
    if (o !== null) {
      a.pending = null;
      var v = o = o.next;
      do
        u = e(u, v.action), v = v.next;
      while (v !== o);
      xt(u, t.memoizedState) || (Ke = !0), t.memoizedState = u, t.baseQueue === null && (t.baseState = u), a.lastRenderedState = u;
    }
    return [u, n];
  }
  function Uf(e, t, a) {
    var n = he, o = Ye(), u = Se;
    if (u) {
      if (a === void 0) throw Error(r(407));
      a = a();
    } else a = t();
    var v = !xt(
      (Te || o).memoizedState,
      a
    );
    if (v && (o.memoizedState = a, Ke = !0), o = o.queue, go(Bf.bind(null, n, o, e), [
      e
    ]), o.getSnapshot !== t || v || Qe !== null && Qe.memoizedState.tag & 1) {
      if (n.flags |= 2048, Vn(
        9,
        { destroy: void 0 },
        kf.bind(
          null,
          n,
          o,
          a,
          t
        ),
        null
      ), Le === null) throw Error(r(349));
      u || (ta & 127) !== 0 || $f(n, t, a);
    }
    return a;
  }
  function $f(e, t, a) {
    e.flags |= 16384, e = { getSnapshot: t, value: a }, t = he.updateQueue, t === null ? (t = Ii(), he.updateQueue = t, t.stores = [e]) : (a = t.stores, a === null ? t.stores = [e] : a.push(e));
  }
  function kf(e, t, a, n) {
    t.value = a, t.getSnapshot = n, Hf(t) && qf(e);
  }
  function Bf(e, t, a) {
    return a(function() {
      Hf(t) && qf(e);
    });
  }
  function Hf(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var a = t();
      return !xt(e, a);
    } catch {
      return !0;
    }
  }
  function qf(e) {
    var t = Pa(e, 2);
    t !== null && mt(t, e, 2);
  }
  function mo(e) {
    var t = rt();
    if (typeof e == "function") {
      var a = e;
      if (e = a(), on) {
        va(!0);
        try {
          a();
        } finally {
          va(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = e, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: aa,
      lastRenderedState: e
    }, t;
  }
  function Vf(e, t, a, n) {
    return e.baseState = a, fo(
      e,
      Te,
      typeof n == "function" ? n : aa
    );
  }
  function Q0(e, t, a, n, o) {
    if (as(e)) throw Error(r(485));
    if (e = t.action, e !== null) {
      var u = {
        payload: o,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(v) {
          u.listeners.push(v);
        }
      };
      k.T !== null ? a(!0) : u.isTransition = !1, n(u), a = t.pending, a === null ? (u.next = t.pending = u, Yf(t, u)) : (u.next = a.next, t.pending = a.next = u);
    }
  }
  function Yf(e, t) {
    var a = t.action, n = t.payload, o = e.state;
    if (t.isTransition) {
      var u = k.T, v = {};
      k.T = v;
      try {
        var S = a(o, n), C = k.S;
        C !== null && C(v, S), Gf(e, t, S);
      } catch (D) {
        po(e, t, D);
      } finally {
        u !== null && v.types !== null && (u.types = v.types), k.T = u;
      }
    } else
      try {
        u = a(o, n), Gf(e, t, u);
      } catch (D) {
        po(e, t, D);
      }
  }
  function Gf(e, t, a) {
    a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(
      function(n) {
        Qf(e, t, n);
      },
      function(n) {
        return po(e, t, n);
      }
    ) : Qf(e, t, a);
  }
  function Qf(e, t, a) {
    t.status = "fulfilled", t.value = a, Kf(t), e.state = a, t = e.pending, t !== null && (a = t.next, a === t ? e.pending = null : (a = a.next, t.next = a, Yf(e, a)));
  }
  function po(e, t, a) {
    var n = e.pending;
    if (e.pending = null, n !== null) {
      n = n.next;
      do
        t.status = "rejected", t.reason = a, Kf(t), t = t.next;
      while (t !== n);
    }
    e.action = null;
  }
  function Kf(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function Xf(e, t) {
    return t;
  }
  function Ff(e, t) {
    if (Se) {
      var a = Le.formState;
      if (a !== null) {
        e: {
          var n = he;
          if (Se) {
            if (Me) {
              t: {
                for (var o = Me, u = Mt; o.nodeType !== 8; ) {
                  if (!u) {
                    o = null;
                    break t;
                  }
                  if (o = Dt(
                    o.nextSibling
                  ), o === null) {
                    o = null;
                    break t;
                  }
                }
                u = o.data, o = u === "F!" || u === "F" ? o : null;
              }
              if (o) {
                Me = Dt(
                  o.nextSibling
                ), n = o.data === "F!";
                break e;
              }
            }
            Ea(n);
          }
          n = !1;
        }
        n && (t = a[0]);
      }
    }
    return a = rt(), a.memoizedState = a.baseState = t, n = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Xf,
      lastRenderedState: t
    }, a.queue = n, a = hd.bind(
      null,
      he,
      n
    ), n.dispatch = a, n = mo(!1), u = So.bind(
      null,
      he,
      !1,
      n.queue
    ), n = rt(), o = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, n.queue = o, a = Q0.bind(
      null,
      he,
      o,
      u,
      a
    ), o.dispatch = a, n.memoizedState = e, [t, a, !1];
  }
  function Zf(e) {
    var t = Ye();
    return Jf(t, Te, e);
  }
  function Jf(e, t, a) {
    if (t = fo(
      e,
      t,
      Xf
    )[0], e = Wi(aa)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var n = Ll(t);
      } catch (v) {
        throw v === $n ? Yi : v;
      }
    else n = t;
    t = Ye();
    var o = t.queue, u = o.dispatch;
    return a !== t.memoizedState && (he.flags |= 2048, Vn(
      9,
      { destroy: void 0 },
      K0.bind(null, o, a),
      null
    )), [n, u, e];
  }
  function K0(e, t) {
    e.action = t;
  }
  function If(e) {
    var t = Ye(), a = Te;
    if (a !== null)
      return Jf(t, a, e);
    Ye(), t = t.memoizedState, a = Ye();
    var n = a.queue.dispatch;
    return a.memoizedState = e, [t, n, !1];
  }
  function Vn(e, t, a, n) {
    return e = { tag: e, create: a, deps: n, inst: t, next: null }, t = he.updateQueue, t === null && (t = Ii(), he.updateQueue = t), a = t.lastEffect, a === null ? t.lastEffect = e.next = e : (n = a.next, a.next = e, e.next = n, t.lastEffect = e), e;
  }
  function Pf() {
    return Ye().memoizedState;
  }
  function es(e, t, a, n) {
    var o = rt();
    he.flags |= e, o.memoizedState = Vn(
      1 | t,
      { destroy: void 0 },
      a,
      n === void 0 ? null : n
    );
  }
  function ts(e, t, a, n) {
    var o = Ye();
    n = n === void 0 ? null : n;
    var u = o.memoizedState.inst;
    Te !== null && n !== null && io(n, Te.memoizedState.deps) ? o.memoizedState = Vn(t, u, a, n) : (he.flags |= e, o.memoizedState = Vn(
      1 | t,
      u,
      a,
      n
    ));
  }
  function Wf(e, t) {
    es(8390656, 8, e, t);
  }
  function go(e, t) {
    ts(2048, 8, e, t);
  }
  function X0(e) {
    he.flags |= 4;
    var t = he.updateQueue;
    if (t === null)
      t = Ii(), he.updateQueue = t, t.events = [e];
    else {
      var a = t.events;
      a === null ? t.events = [e] : a.push(e);
    }
  }
  function ed(e) {
    var t = Ye().memoizedState;
    return X0({ ref: t, nextImpl: e }), function() {
      if ((Ce & 2) !== 0) throw Error(r(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function td(e, t) {
    return ts(4, 2, e, t);
  }
  function ad(e, t) {
    return ts(4, 4, e, t);
  }
  function nd(e, t) {
    if (typeof t == "function") {
      e = e();
      var a = t(e);
      return function() {
        typeof a == "function" ? a() : t(null);
      };
    }
    if (t != null)
      return e = e(), t.current = e, function() {
        t.current = null;
      };
  }
  function ld(e, t, a) {
    a = a != null ? a.concat([e]) : null, ts(4, 4, nd.bind(null, t, e), a);
  }
  function yo() {
  }
  function id(e, t) {
    var a = Ye();
    t = t === void 0 ? null : t;
    var n = a.memoizedState;
    return t !== null && io(t, n[1]) ? n[0] : (a.memoizedState = [e, t], e);
  }
  function sd(e, t) {
    var a = Ye();
    t = t === void 0 ? null : t;
    var n = a.memoizedState;
    if (t !== null && io(t, n[1]))
      return n[0];
    if (n = e(), on) {
      va(!0);
      try {
        e();
      } finally {
        va(!1);
      }
    }
    return a.memoizedState = [n, t], n;
  }
  function vo(e, t, a) {
    return a === void 0 || (ta & 1073741824) !== 0 && (be & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = a, e = rh(), he.lanes |= e, La |= e, a);
  }
  function rd(e, t, a, n) {
    return xt(a, t) ? a : Bn.current !== null ? (e = vo(e, a, n), xt(e, t) || (Ke = !0), e) : (ta & 42) === 0 || (ta & 1073741824) !== 0 && (be & 261930) === 0 ? (Ke = !0, e.memoizedState = a) : (e = rh(), he.lanes |= e, La |= e, t);
  }
  function od(e, t, a, n, o) {
    var u = K.p;
    K.p = u !== 0 && 8 > u ? u : 8;
    var v = k.T, S = {};
    k.T = S, So(e, !1, t, a);
    try {
      var C = o(), D = k.S;
      if (D !== null && D(S, C), C !== null && typeof C == "object" && typeof C.then == "function") {
        var q = V0(
          C,
          n
        );
        Ml(
          e,
          t,
          q,
          Rt(e)
        );
      } else
        Ml(
          e,
          t,
          n,
          Rt(e)
        );
    } catch (G) {
      Ml(
        e,
        t,
        { then: function() {
        }, status: "rejected", reason: G },
        Rt()
      );
    } finally {
      K.p = u, v !== null && S.types !== null && (v.types = S.types), k.T = v;
    }
  }
  function F0() {
  }
  function bo(e, t, a, n) {
    if (e.tag !== 5) throw Error(r(476));
    var o = ud(e).queue;
    od(
      e,
      o,
      t,
      J,
      a === null ? F0 : function() {
        return cd(e), a(n);
      }
    );
  }
  function ud(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: J,
      baseState: J,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: aa,
        lastRenderedState: J
      },
      next: null
    };
    var a = {};
    return t.next = {
      memoizedState: a,
      baseState: a,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: aa,
        lastRenderedState: a
      },
      next: null
    }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
  }
  function cd(e) {
    var t = ud(e);
    t.next === null && (t = e.alternate.memoizedState), Ml(
      e,
      t.next.queue,
      {},
      Rt()
    );
  }
  function xo() {
    return tt(Jl);
  }
  function fd() {
    return Ye().memoizedState;
  }
  function dd() {
    return Ye().memoizedState;
  }
  function Z0(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var a = Rt();
          e = Ra(a);
          var n = Na(t, e, a);
          n !== null && (mt(n, t, a), jl(n, t, a)), t = { cache: Fr() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function J0(e, t, a) {
    var n = Rt();
    a = {
      lane: n,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, as(e) ? md(t, a) : (a = $r(e, t, a, n), a !== null && (mt(a, e, n), pd(a, t, n)));
  }
  function hd(e, t, a) {
    var n = Rt();
    Ml(e, t, a, n);
  }
  function Ml(e, t, a, n) {
    var o = {
      lane: n,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (as(e)) md(t, o);
    else {
      var u = e.alternate;
      if (e.lanes === 0 && (u === null || u.lanes === 0) && (u = t.lastRenderedReducer, u !== null))
        try {
          var v = t.lastRenderedState, S = u(v, a);
          if (o.hasEagerState = !0, o.eagerState = S, xt(S, v))
            return Ui(e, t, o, 0), Le === null && Di(), !1;
        } catch {
        }
      if (a = $r(e, t, o, n), a !== null)
        return mt(a, e, n), pd(a, t, n), !0;
    }
    return !1;
  }
  function So(e, t, a, n) {
    if (n = {
      lane: 2,
      revertLane: Wo(),
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, as(e)) {
      if (t) throw Error(r(479));
    } else
      t = $r(
        e,
        a,
        n,
        2
      ), t !== null && mt(t, e, 2);
  }
  function as(e) {
    var t = e.alternate;
    return e === he || t !== null && t === he;
  }
  function md(e, t) {
    Hn = Zi = !0;
    var a = e.pending;
    a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
  }
  function pd(e, t, a) {
    if ((a & 4194048) !== 0) {
      var n = t.lanes;
      n &= e.pendingLanes, a |= n, t.lanes = a, bc(e, a);
    }
  }
  var _l = {
    readContext: tt,
    use: Pi,
    useCallback: ke,
    useContext: ke,
    useEffect: ke,
    useImperativeHandle: ke,
    useLayoutEffect: ke,
    useInsertionEffect: ke,
    useMemo: ke,
    useReducer: ke,
    useRef: ke,
    useState: ke,
    useDebugValue: ke,
    useDeferredValue: ke,
    useTransition: ke,
    useSyncExternalStore: ke,
    useId: ke,
    useHostTransitionStatus: ke,
    useFormState: ke,
    useActionState: ke,
    useOptimistic: ke,
    useMemoCache: ke,
    useCacheRefresh: ke
  };
  _l.useEffectEvent = ke;
  var gd = {
    readContext: tt,
    use: Pi,
    useCallback: function(e, t) {
      return rt().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: tt,
    useEffect: Wf,
    useImperativeHandle: function(e, t, a) {
      a = a != null ? a.concat([e]) : null, es(
        4194308,
        4,
        nd.bind(null, t, e),
        a
      );
    },
    useLayoutEffect: function(e, t) {
      return es(4194308, 4, e, t);
    },
    useInsertionEffect: function(e, t) {
      es(4, 2, e, t);
    },
    useMemo: function(e, t) {
      var a = rt();
      t = t === void 0 ? null : t;
      var n = e();
      if (on) {
        va(!0);
        try {
          e();
        } finally {
          va(!1);
        }
      }
      return a.memoizedState = [n, t], n;
    },
    useReducer: function(e, t, a) {
      var n = rt();
      if (a !== void 0) {
        var o = a(t);
        if (on) {
          va(!0);
          try {
            a(t);
          } finally {
            va(!1);
          }
        }
      } else o = t;
      return n.memoizedState = n.baseState = o, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: o
      }, n.queue = e, e = e.dispatch = J0.bind(
        null,
        he,
        e
      ), [n.memoizedState, e];
    },
    useRef: function(e) {
      var t = rt();
      return e = { current: e }, t.memoizedState = e;
    },
    useState: function(e) {
      e = mo(e);
      var t = e.queue, a = hd.bind(null, he, t);
      return t.dispatch = a, [e.memoizedState, a];
    },
    useDebugValue: yo,
    useDeferredValue: function(e, t) {
      var a = rt();
      return vo(a, e, t);
    },
    useTransition: function() {
      var e = mo(!1);
      return e = od.bind(
        null,
        he,
        e.queue,
        !0,
        !1
      ), rt().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, t, a) {
      var n = he, o = rt();
      if (Se) {
        if (a === void 0)
          throw Error(r(407));
        a = a();
      } else {
        if (a = t(), Le === null)
          throw Error(r(349));
        (be & 127) !== 0 || $f(n, t, a);
      }
      o.memoizedState = a;
      var u = { value: a, getSnapshot: t };
      return o.queue = u, Wf(Bf.bind(null, n, u, e), [
        e
      ]), n.flags |= 2048, Vn(
        9,
        { destroy: void 0 },
        kf.bind(
          null,
          n,
          u,
          a,
          t
        ),
        null
      ), a;
    },
    useId: function() {
      var e = rt(), t = Le.identifierPrefix;
      if (Se) {
        var a = Vt, n = qt;
        a = (n & ~(1 << 32 - bt(n) - 1)).toString(32) + a, t = "_" + t + "R_" + a, a = Ji++, 0 < a && (t += "H" + a.toString(32)), t += "_";
      } else
        a = Y0++, t = "_" + t + "r_" + a.toString(32) + "_";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: xo,
    useFormState: Ff,
    useActionState: Ff,
    useOptimistic: function(e) {
      var t = rt();
      t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = a, t = So.bind(
        null,
        he,
        !0,
        a
      ), a.dispatch = t, [e, t];
    },
    useMemoCache: co,
    useCacheRefresh: function() {
      return rt().memoizedState = Z0.bind(
        null,
        he
      );
    },
    useEffectEvent: function(e) {
      var t = rt(), a = { impl: e };
      return t.memoizedState = a, function() {
        if ((Ce & 2) !== 0)
          throw Error(r(440));
        return a.impl.apply(void 0, arguments);
      };
    }
  }, wo = {
    readContext: tt,
    use: Pi,
    useCallback: id,
    useContext: tt,
    useEffect: go,
    useImperativeHandle: ld,
    useInsertionEffect: td,
    useLayoutEffect: ad,
    useMemo: sd,
    useReducer: Wi,
    useRef: Pf,
    useState: function() {
      return Wi(aa);
    },
    useDebugValue: yo,
    useDeferredValue: function(e, t) {
      var a = Ye();
      return rd(
        a,
        Te.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Wi(aa)[0], t = Ye().memoizedState;
      return [
        typeof e == "boolean" ? e : Ll(e),
        t
      ];
    },
    useSyncExternalStore: Uf,
    useId: fd,
    useHostTransitionStatus: xo,
    useFormState: Zf,
    useActionState: Zf,
    useOptimistic: function(e, t) {
      var a = Ye();
      return Vf(a, Te, e, t);
    },
    useMemoCache: co,
    useCacheRefresh: dd
  };
  wo.useEffectEvent = ed;
  var yd = {
    readContext: tt,
    use: Pi,
    useCallback: id,
    useContext: tt,
    useEffect: go,
    useImperativeHandle: ld,
    useInsertionEffect: td,
    useLayoutEffect: ad,
    useMemo: sd,
    useReducer: ho,
    useRef: Pf,
    useState: function() {
      return ho(aa);
    },
    useDebugValue: yo,
    useDeferredValue: function(e, t) {
      var a = Ye();
      return Te === null ? vo(a, e, t) : rd(
        a,
        Te.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = ho(aa)[0], t = Ye().memoizedState;
      return [
        typeof e == "boolean" ? e : Ll(e),
        t
      ];
    },
    useSyncExternalStore: Uf,
    useId: fd,
    useHostTransitionStatus: xo,
    useFormState: If,
    useActionState: If,
    useOptimistic: function(e, t) {
      var a = Ye();
      return Te !== null ? Vf(a, Te, e, t) : (a.baseState = e, [e, a.queue.dispatch]);
    },
    useMemoCache: co,
    useCacheRefresh: dd
  };
  yd.useEffectEvent = ed;
  function Eo(e, t, a, n) {
    t = e.memoizedState, a = a(n, t), a = a == null ? t : y({}, t, a), e.memoizedState = a, e.lanes === 0 && (e.updateQueue.baseState = a);
  }
  var Ao = {
    enqueueSetState: function(e, t, a) {
      e = e._reactInternals;
      var n = Rt(), o = Ra(n);
      o.payload = t, a != null && (o.callback = a), t = Na(e, o, n), t !== null && (mt(t, e, n), jl(t, e, n));
    },
    enqueueReplaceState: function(e, t, a) {
      e = e._reactInternals;
      var n = Rt(), o = Ra(n);
      o.tag = 1, o.payload = t, a != null && (o.callback = a), t = Na(e, o, n), t !== null && (mt(t, e, n), jl(t, e, n));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var a = Rt(), n = Ra(a);
      n.tag = 2, t != null && (n.callback = t), t = Na(e, n, a), t !== null && (mt(t, e, a), jl(t, e, a));
    }
  };
  function vd(e, t, a, n, o, u, v) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(n, u, v) : t.prototype && t.prototype.isPureReactComponent ? !xl(a, n) || !xl(o, u) : !0;
  }
  function bd(e, t, a, n) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, n), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, n), t.state !== e && Ao.enqueueReplaceState(t, t.state, null);
  }
  function un(e, t) {
    var a = t;
    if ("ref" in t) {
      a = {};
      for (var n in t)
        n !== "ref" && (a[n] = t[n]);
    }
    if (e = e.defaultProps) {
      a === t && (a = y({}, a));
      for (var o in e)
        a[o] === void 0 && (a[o] = e[o]);
    }
    return a;
  }
  function xd(e) {
    _i(e);
  }
  function Sd(e) {
    console.error(e);
  }
  function wd(e) {
    _i(e);
  }
  function ns(e, t) {
    try {
      var a = e.onUncaughtError;
      a(t.value, { componentStack: t.stack });
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  function Ed(e, t, a) {
    try {
      var n = e.onCaughtError;
      n(a.value, {
        componentStack: a.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null
      });
    } catch (o) {
      setTimeout(function() {
        throw o;
      });
    }
  }
  function Co(e, t, a) {
    return a = Ra(a), a.tag = 3, a.payload = { element: null }, a.callback = function() {
      ns(e, t);
    }, a;
  }
  function Ad(e) {
    return e = Ra(e), e.tag = 3, e;
  }
  function Cd(e, t, a, n) {
    var o = a.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var u = n.value;
      e.payload = function() {
        return o(u);
      }, e.callback = function() {
        Ed(t, a, n);
      };
    }
    var v = a.stateNode;
    v !== null && typeof v.componentDidCatch == "function" && (e.callback = function() {
      Ed(t, a, n), typeof o != "function" && (Ma === null ? Ma = /* @__PURE__ */ new Set([this]) : Ma.add(this));
      var S = n.stack;
      this.componentDidCatch(n.value, {
        componentStack: S !== null ? S : ""
      });
    });
  }
  function I0(e, t, a, n, o) {
    if (a.flags |= 32768, n !== null && typeof n == "object" && typeof n.then == "function") {
      if (t = a.alternate, t !== null && _n(
        t,
        a,
        o,
        !0
      ), a = wt.current, a !== null) {
        switch (a.tag) {
          case 31:
          case 13:
            return _t === null ? ps() : a.alternate === null && Be === 0 && (Be = 3), a.flags &= -257, a.flags |= 65536, a.lanes = o, n === Gi ? a.flags |= 16384 : (t = a.updateQueue, t === null ? a.updateQueue = /* @__PURE__ */ new Set([n]) : t.add(n), Jo(e, n, o)), !1;
          case 22:
            return a.flags |= 65536, n === Gi ? a.flags |= 16384 : (t = a.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([n])
            }, a.updateQueue = t) : (a = t.retryQueue, a === null ? t.retryQueue = /* @__PURE__ */ new Set([n]) : a.add(n)), Jo(e, n, o)), !1;
        }
        throw Error(r(435, a.tag));
      }
      return Jo(e, n, o), ps(), !1;
    }
    if (Se)
      return t = wt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = o, n !== Yr && (e = Error(r(422), { cause: n }), El(Ot(e, a)))) : (n !== Yr && (t = Error(r(423), {
        cause: n
      }), El(
        Ot(t, a)
      )), e = e.current.alternate, e.flags |= 65536, o &= -o, e.lanes |= o, n = Ot(n, a), o = Co(
        e.stateNode,
        n,
        o
      ), eo(e, o), Be !== 4 && (Be = 2)), !1;
    var u = Error(r(520), { cause: n });
    if (u = Ot(u, a), Vl === null ? Vl = [u] : Vl.push(u), Be !== 4 && (Be = 2), t === null) return !0;
    n = Ot(n, a), a = t;
    do {
      switch (a.tag) {
        case 3:
          return a.flags |= 65536, e = o & -o, a.lanes |= e, e = Co(a.stateNode, n, e), eo(a, e), !1;
        case 1:
          if (t = a.type, u = a.stateNode, (a.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (Ma === null || !Ma.has(u))))
            return a.flags |= 65536, o &= -o, a.lanes |= o, o = Ad(o), Cd(
              o,
              e,
              a,
              n
            ), eo(a, o), !1;
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var Ro = Error(r(461)), Ke = !1;
  function at(e, t, a, n) {
    t.child = e === null ? Tf(t, null, a, n) : rn(
      t,
      e.child,
      a,
      n
    );
  }
  function Rd(e, t, a, n, o) {
    a = a.render;
    var u = t.ref;
    if ("ref" in n) {
      var v = {};
      for (var S in n)
        S !== "ref" && (v[S] = n[S]);
    } else v = n;
    return an(t), n = so(
      e,
      t,
      a,
      v,
      u,
      o
    ), S = ro(), e !== null && !Ke ? (oo(e, t, o), na(e, t, o)) : (Se && S && qr(t), t.flags |= 1, at(e, t, n, o), t.child);
  }
  function Nd(e, t, a, n, o) {
    if (e === null) {
      var u = a.type;
      return typeof u == "function" && !kr(u) && u.defaultProps === void 0 && a.compare === null ? (t.tag = 15, t.type = u, jd(
        e,
        t,
        u,
        n,
        o
      )) : (e = ki(
        a.type,
        null,
        n,
        t,
        t.mode,
        o
      ), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (u = e.child, !_o(e, o)) {
      var v = u.memoizedProps;
      if (a = a.compare, a = a !== null ? a : xl, a(v, n) && e.ref === t.ref)
        return na(e, t, o);
    }
    return t.flags |= 1, e = It(u, n), e.ref = t.ref, e.return = t, t.child = e;
  }
  function jd(e, t, a, n, o) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (xl(u, n) && e.ref === t.ref)
        if (Ke = !1, t.pendingProps = n = u, _o(e, o))
          (e.flags & 131072) !== 0 && (Ke = !0);
        else
          return t.lanes = e.lanes, na(e, t, o);
    }
    return No(
      e,
      t,
      a,
      n,
      o
    );
  }
  function Td(e, t, a, n) {
    var o = n.children, u = e !== null ? e.memoizedState : null;
    if (e === null && t.stateNode === null && (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), n.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (u = u !== null ? u.baseLanes | a : a, e !== null) {
          for (n = t.child = e.child, o = 0; n !== null; )
            o = o | n.lanes | n.childLanes, n = n.sibling;
          n = o & ~u;
        } else n = 0, t.child = null;
        return Od(
          e,
          t,
          u,
          a,
          n
        );
      }
      if ((a & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && Vi(
          t,
          u !== null ? u.cachePool : null
        ), u !== null ? Lf(t, u) : ao(), Mf(t);
      else
        return n = t.lanes = 536870912, Od(
          e,
          t,
          u !== null ? u.baseLanes | a : a,
          a,
          n
        );
    } else
      u !== null ? (Vi(t, u.cachePool), Lf(t, u), Ta(), t.memoizedState = null) : (e !== null && Vi(t, null), ao(), Ta());
    return at(e, t, o, a), t.child;
  }
  function Dl(e, t) {
    return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function Od(e, t, a, n, o) {
    var u = Jr();
    return u = u === null ? null : { parent: Ge._currentValue, pool: u }, t.memoizedState = {
      baseLanes: a,
      cachePool: u
    }, e !== null && Vi(t, null), ao(), Mf(t), e !== null && _n(e, t, n, !0), t.childLanes = o, null;
  }
  function ls(e, t) {
    return t = ss(
      { mode: t.mode, children: t.children },
      e.mode
    ), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function zd(e, t, a) {
    return rn(t, e.child, null, a), e = ls(t, t.pendingProps), e.flags |= 2, Et(t), t.memoizedState = null, e;
  }
  function P0(e, t, a) {
    var n = t.pendingProps, o = (t.flags & 128) !== 0;
    if (t.flags &= -129, e === null) {
      if (Se) {
        if (n.mode === "hidden")
          return e = ls(t, n), t.lanes = 536870912, Dl(null, e);
        if (lo(t), (e = Me) ? (e = Yh(
          e,
          Mt
        ), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: Sa !== null ? { id: qt, overflow: Vt } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, a = mf(e), a.return = t, t.child = a, et = t, Me = null)) : e = null, e === null) throw Ea(t);
        return t.lanes = 536870912, null;
      }
      return ls(t, n);
    }
    var u = e.memoizedState;
    if (u !== null) {
      var v = u.dehydrated;
      if (lo(t), o)
        if (t.flags & 256)
          t.flags &= -257, t = zd(
            e,
            t,
            a
          );
        else if (t.memoizedState !== null)
          t.child = e.child, t.flags |= 128, t = null;
        else throw Error(r(558));
      else if (Ke || _n(e, t, a, !1), o = (a & e.childLanes) !== 0, Ke || o) {
        if (n = Le, n !== null && (v = xc(n, a), v !== 0 && v !== u.retryLane))
          throw u.retryLane = v, Pa(e, v), mt(n, e, v), Ro;
        ps(), t = zd(
          e,
          t,
          a
        );
      } else
        e = u.treeContext, Me = Dt(v.nextSibling), et = t, Se = !0, wa = null, Mt = !1, e !== null && yf(t, e), t = ls(t, n), t.flags |= 4096;
      return t;
    }
    return e = It(e.child, {
      mode: n.mode,
      children: n.children
    }), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function is(e, t) {
    var a = t.ref;
    if (a === null)
      e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof a != "function" && typeof a != "object")
        throw Error(r(284));
      (e === null || e.ref !== a) && (t.flags |= 4194816);
    }
  }
  function No(e, t, a, n, o) {
    return an(t), a = so(
      e,
      t,
      a,
      n,
      void 0,
      o
    ), n = ro(), e !== null && !Ke ? (oo(e, t, o), na(e, t, o)) : (Se && n && qr(t), t.flags |= 1, at(e, t, a, o), t.child);
  }
  function Ld(e, t, a, n, o, u) {
    return an(t), t.updateQueue = null, a = Df(
      t,
      n,
      a,
      o
    ), _f(e), n = ro(), e !== null && !Ke ? (oo(e, t, u), na(e, t, u)) : (Se && n && qr(t), t.flags |= 1, at(e, t, a, u), t.child);
  }
  function Md(e, t, a, n, o) {
    if (an(t), t.stateNode === null) {
      var u = On, v = a.contextType;
      typeof v == "object" && v !== null && (u = tt(v)), u = new a(n, u), t.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, u.updater = Ao, t.stateNode = u, u._reactInternals = t, u = t.stateNode, u.props = n, u.state = t.memoizedState, u.refs = {}, Pr(t), v = a.contextType, u.context = typeof v == "object" && v !== null ? tt(v) : On, u.state = t.memoizedState, v = a.getDerivedStateFromProps, typeof v == "function" && (Eo(
        t,
        a,
        v,
        n
      ), u.state = t.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (v = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), v !== u.state && Ao.enqueueReplaceState(u, u.state, null), Ol(t, n, u, o), Tl(), u.state = t.memoizedState), typeof u.componentDidMount == "function" && (t.flags |= 4194308), n = !0;
    } else if (e === null) {
      u = t.stateNode;
      var S = t.memoizedProps, C = un(a, S);
      u.props = C;
      var D = u.context, q = a.contextType;
      v = On, typeof q == "object" && q !== null && (v = tt(q));
      var G = a.getDerivedStateFromProps;
      q = typeof G == "function" || typeof u.getSnapshotBeforeUpdate == "function", S = t.pendingProps !== S, q || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (S || D !== v) && bd(
        t,
        u,
        n,
        v
      ), Ca = !1;
      var U = t.memoizedState;
      u.state = U, Ol(t, n, u, o), Tl(), D = t.memoizedState, S || U !== D || Ca ? (typeof G == "function" && (Eo(
        t,
        a,
        G,
        n
      ), D = t.memoizedState), (C = Ca || vd(
        t,
        a,
        C,
        n,
        U,
        D,
        v
      )) ? (q || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = n, t.memoizedState = D), u.props = n, u.state = D, u.context = v, n = C) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), n = !1);
    } else {
      u = t.stateNode, Wr(e, t), v = t.memoizedProps, q = un(a, v), u.props = q, G = t.pendingProps, U = u.context, D = a.contextType, C = On, typeof D == "object" && D !== null && (C = tt(D)), S = a.getDerivedStateFromProps, (D = typeof S == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (v !== G || U !== C) && bd(
        t,
        u,
        n,
        C
      ), Ca = !1, U = t.memoizedState, u.state = U, Ol(t, n, u, o), Tl();
      var B = t.memoizedState;
      v !== G || U !== B || Ca || e !== null && e.dependencies !== null && Hi(e.dependencies) ? (typeof S == "function" && (Eo(
        t,
        a,
        S,
        n
      ), B = t.memoizedState), (q = Ca || vd(
        t,
        a,
        q,
        n,
        U,
        B,
        C
      ) || e !== null && e.dependencies !== null && Hi(e.dependencies)) ? (D || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(n, B, C), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(
        n,
        B,
        C
      )), typeof u.componentDidUpdate == "function" && (t.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || v === e.memoizedProps && U === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || v === e.memoizedProps && U === e.memoizedState || (t.flags |= 1024), t.memoizedProps = n, t.memoizedState = B), u.props = n, u.state = B, u.context = C, n = q) : (typeof u.componentDidUpdate != "function" || v === e.memoizedProps && U === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || v === e.memoizedProps && U === e.memoizedState || (t.flags |= 1024), n = !1);
    }
    return u = n, is(e, t), n = (t.flags & 128) !== 0, u || n ? (u = t.stateNode, a = n && typeof a.getDerivedStateFromError != "function" ? null : u.render(), t.flags |= 1, e !== null && n ? (t.child = rn(
      t,
      e.child,
      null,
      o
    ), t.child = rn(
      t,
      null,
      a,
      o
    )) : at(e, t, a, o), t.memoizedState = u.state, e = t.child) : e = na(
      e,
      t,
      o
    ), e;
  }
  function _d(e, t, a, n) {
    return en(), t.flags |= 256, at(e, t, a, n), t.child;
  }
  var jo = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function To(e) {
    return { baseLanes: e, cachePool: Ef() };
  }
  function Oo(e, t, a) {
    return e = e !== null ? e.childLanes & ~a : 0, t && (e |= Ct), e;
  }
  function Dd(e, t, a) {
    var n = t.pendingProps, o = !1, u = (t.flags & 128) !== 0, v;
    if ((v = u) || (v = e !== null && e.memoizedState === null ? !1 : (Ve.current & 2) !== 0), v && (o = !0, t.flags &= -129), v = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (Se) {
        if (o ? ja(t) : Ta(), (e = Me) ? (e = Yh(
          e,
          Mt
        ), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: Sa !== null ? { id: qt, overflow: Vt } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, a = mf(e), a.return = t, t.child = a, et = t, Me = null)) : e = null, e === null) throw Ea(t);
        return du(e) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var S = n.children;
      return n = n.fallback, o ? (Ta(), o = t.mode, S = ss(
        { mode: "hidden", children: S },
        o
      ), n = Wa(
        n,
        o,
        a,
        null
      ), S.return = t, n.return = t, S.sibling = n, t.child = S, n = t.child, n.memoizedState = To(a), n.childLanes = Oo(
        e,
        v,
        a
      ), t.memoizedState = jo, Dl(null, n)) : (ja(t), zo(t, S));
    }
    var C = e.memoizedState;
    if (C !== null && (S = C.dehydrated, S !== null)) {
      if (u)
        t.flags & 256 ? (ja(t), t.flags &= -257, t = Lo(
          e,
          t,
          a
        )) : t.memoizedState !== null ? (Ta(), t.child = e.child, t.flags |= 128, t = null) : (Ta(), S = n.fallback, o = t.mode, n = ss(
          { mode: "visible", children: n.children },
          o
        ), S = Wa(
          S,
          o,
          a,
          null
        ), S.flags |= 2, n.return = t, S.return = t, n.sibling = S, t.child = n, rn(
          t,
          e.child,
          null,
          a
        ), n = t.child, n.memoizedState = To(a), n.childLanes = Oo(
          e,
          v,
          a
        ), t.memoizedState = jo, t = Dl(null, n));
      else if (ja(t), du(S)) {
        if (v = S.nextSibling && S.nextSibling.dataset, v) var D = v.dgst;
        v = D, n = Error(r(419)), n.stack = "", n.digest = v, El({ value: n, source: null, stack: null }), t = Lo(
          e,
          t,
          a
        );
      } else if (Ke || _n(e, t, a, !1), v = (a & e.childLanes) !== 0, Ke || v) {
        if (v = Le, v !== null && (n = xc(v, a), n !== 0 && n !== C.retryLane))
          throw C.retryLane = n, Pa(e, n), mt(v, e, n), Ro;
        fu(S) || ps(), t = Lo(
          e,
          t,
          a
        );
      } else
        fu(S) ? (t.flags |= 192, t.child = e.child, t = null) : (e = C.treeContext, Me = Dt(
          S.nextSibling
        ), et = t, Se = !0, wa = null, Mt = !1, e !== null && yf(t, e), t = zo(
          t,
          n.children
        ), t.flags |= 4096);
      return t;
    }
    return o ? (Ta(), S = n.fallback, o = t.mode, C = e.child, D = C.sibling, n = It(C, {
      mode: "hidden",
      children: n.children
    }), n.subtreeFlags = C.subtreeFlags & 65011712, D !== null ? S = It(
      D,
      S
    ) : (S = Wa(
      S,
      o,
      a,
      null
    ), S.flags |= 2), S.return = t, n.return = t, n.sibling = S, t.child = n, Dl(null, n), n = t.child, S = e.child.memoizedState, S === null ? S = To(a) : (o = S.cachePool, o !== null ? (C = Ge._currentValue, o = o.parent !== C ? { parent: C, pool: C } : o) : o = Ef(), S = {
      baseLanes: S.baseLanes | a,
      cachePool: o
    }), n.memoizedState = S, n.childLanes = Oo(
      e,
      v,
      a
    ), t.memoizedState = jo, Dl(e.child, n)) : (ja(t), a = e.child, e = a.sibling, a = It(a, {
      mode: "visible",
      children: n.children
    }), a.return = t, a.sibling = null, e !== null && (v = t.deletions, v === null ? (t.deletions = [e], t.flags |= 16) : v.push(e)), t.child = a, t.memoizedState = null, a);
  }
  function zo(e, t) {
    return t = ss(
      { mode: "visible", children: t },
      e.mode
    ), t.return = e, e.child = t;
  }
  function ss(e, t) {
    return e = St(22, e, null, t), e.lanes = 0, e;
  }
  function Lo(e, t, a) {
    return rn(t, e.child, null, a), e = zo(
      t,
      t.pendingProps.children
    ), e.flags |= 2, t.memoizedState = null, e;
  }
  function Ud(e, t, a) {
    e.lanes |= t;
    var n = e.alternate;
    n !== null && (n.lanes |= t), Kr(e.return, t, a);
  }
  function Mo(e, t, a, n, o, u) {
    var v = e.memoizedState;
    v === null ? e.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: n,
      tail: a,
      tailMode: o,
      treeForkCount: u
    } : (v.isBackwards = t, v.rendering = null, v.renderingStartTime = 0, v.last = n, v.tail = a, v.tailMode = o, v.treeForkCount = u);
  }
  function $d(e, t, a) {
    var n = t.pendingProps, o = n.revealOrder, u = n.tail;
    n = n.children;
    var v = Ve.current, S = (v & 2) !== 0;
    if (S ? (v = v & 1 | 2, t.flags |= 128) : v &= 1, Z(Ve, v), at(e, t, n, a), n = Se ? wl : 0, !S && e !== null && (e.flags & 128) !== 0)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13)
          e.memoizedState !== null && Ud(e, a, t);
        else if (e.tag === 19)
          Ud(e, a, t);
        else if (e.child !== null) {
          e.child.return = e, e = e.child;
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t)
            break e;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
    switch (o) {
      case "forwards":
        for (a = t.child, o = null; a !== null; )
          e = a.alternate, e !== null && Fi(e) === null && (o = a), a = a.sibling;
        a = o, a === null ? (o = t.child, t.child = null) : (o = a.sibling, a.sibling = null), Mo(
          t,
          !1,
          o,
          a,
          u,
          n
        );
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (a = null, o = t.child, t.child = null; o !== null; ) {
          if (e = o.alternate, e !== null && Fi(e) === null) {
            t.child = o;
            break;
          }
          e = o.sibling, o.sibling = a, a = o, o = e;
        }
        Mo(
          t,
          !0,
          a,
          null,
          u,
          n
        );
        break;
      case "together":
        Mo(
          t,
          !1,
          null,
          null,
          void 0,
          n
        );
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function na(e, t, a) {
    if (e !== null && (t.dependencies = e.dependencies), La |= t.lanes, (a & t.childLanes) === 0)
      if (e !== null) {
        if (_n(
          e,
          t,
          a,
          !1
        ), (a & t.childLanes) === 0)
          return null;
      } else return null;
    if (e !== null && t.child !== e.child)
      throw Error(r(153));
    if (t.child !== null) {
      for (e = t.child, a = It(e, e.pendingProps), t.child = a, a.return = t; e.sibling !== null; )
        e = e.sibling, a = a.sibling = It(e, e.pendingProps), a.return = t;
      a.sibling = null;
    }
    return t.child;
  }
  function _o(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && Hi(e)));
  }
  function W0(e, t, a) {
    switch (t.tag) {
      case 3:
        st(t, t.stateNode.containerInfo), Aa(t, Ge, e.memoizedState.cache), en();
        break;
      case 27:
      case 5:
        rl(t);
        break;
      case 4:
        st(t, t.stateNode.containerInfo);
        break;
      case 10:
        Aa(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 31:
        if (t.memoizedState !== null)
          return t.flags |= 128, lo(t), null;
        break;
      case 13:
        var n = t.memoizedState;
        if (n !== null)
          return n.dehydrated !== null ? (ja(t), t.flags |= 128, null) : (a & t.child.childLanes) !== 0 ? Dd(e, t, a) : (ja(t), e = na(
            e,
            t,
            a
          ), e !== null ? e.sibling : null);
        ja(t);
        break;
      case 19:
        var o = (e.flags & 128) !== 0;
        if (n = (a & t.childLanes) !== 0, n || (_n(
          e,
          t,
          a,
          !1
        ), n = (a & t.childLanes) !== 0), o) {
          if (n)
            return $d(
              e,
              t,
              a
            );
          t.flags |= 128;
        }
        if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), Z(Ve, Ve.current), n) break;
        return null;
      case 22:
        return t.lanes = 0, Td(
          e,
          t,
          a,
          t.pendingProps
        );
      case 24:
        Aa(t, Ge, e.memoizedState.cache);
    }
    return na(e, t, a);
  }
  function kd(e, t, a) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        Ke = !0;
      else {
        if (!_o(e, a) && (t.flags & 128) === 0)
          return Ke = !1, W0(
            e,
            t,
            a
          );
        Ke = (e.flags & 131072) !== 0;
      }
    else
      Ke = !1, Se && (t.flags & 1048576) !== 0 && gf(t, wl, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          var n = t.pendingProps;
          if (e = ln(t.elementType), t.type = e, typeof e == "function")
            kr(e) ? (n = un(e, n), t.tag = 1, t = Md(
              null,
              t,
              e,
              n,
              a
            )) : (t.tag = 0, t = No(
              null,
              t,
              e,
              n,
              a
            ));
          else {
            if (e != null) {
              var o = e.$$typeof;
              if (o === O) {
                t.tag = 11, t = Rd(
                  null,
                  t,
                  e,
                  n,
                  a
                );
                break e;
              } else if (o === Q) {
                t.tag = 14, t = Nd(
                  null,
                  t,
                  e,
                  n,
                  a
                );
                break e;
              }
            }
            throw t = ue(e) || e, Error(r(306, t, ""));
          }
        }
        return t;
      case 0:
        return No(
          e,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 1:
        return n = t.type, o = un(
          n,
          t.pendingProps
        ), Md(
          e,
          t,
          n,
          o,
          a
        );
      case 3:
        e: {
          if (st(
            t,
            t.stateNode.containerInfo
          ), e === null) throw Error(r(387));
          n = t.pendingProps;
          var u = t.memoizedState;
          o = u.element, Wr(e, t), Ol(t, n, null, a);
          var v = t.memoizedState;
          if (n = v.cache, Aa(t, Ge, n), n !== u.cache && Xr(
            t,
            [Ge],
            a,
            !0
          ), Tl(), n = v.element, u.isDehydrated)
            if (u = {
              element: n,
              isDehydrated: !1,
              cache: v.cache
            }, t.updateQueue.baseState = u, t.memoizedState = u, t.flags & 256) {
              t = _d(
                e,
                t,
                n,
                a
              );
              break e;
            } else if (n !== o) {
              o = Ot(
                Error(r(424)),
                t
              ), El(o), t = _d(
                e,
                t,
                n,
                a
              );
              break e;
            } else
              for (e = t.stateNode.containerInfo, e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e, Me = Dt(e.firstChild), et = t, Se = !0, wa = null, Mt = !0, a = Tf(
                t,
                null,
                n,
                a
              ), t.child = a; a; )
                a.flags = a.flags & -3 | 4096, a = a.sibling;
          else {
            if (en(), n === o) {
              t = na(
                e,
                t,
                a
              );
              break e;
            }
            at(e, t, n, a);
          }
          t = t.child;
        }
        return t;
      case 26:
        return is(e, t), e === null ? (a = Zh(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = a : Se || (a = t.type, e = t.pendingProps, n = ws(
          pe.current
        ).createElement(a), n[We] = t, n[ot] = e, nt(n, a, e), Je(n), t.stateNode = n) : t.memoizedState = Zh(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return rl(t), e === null && Se && (n = t.stateNode = Kh(
          t.type,
          t.pendingProps,
          pe.current
        ), et = t, Mt = !0, o = Me, $a(t.type) ? (hu = o, Me = Dt(n.firstChild)) : Me = o), at(
          e,
          t,
          t.pendingProps.children,
          a
        ), is(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && Se && ((o = n = Me) && (n = T1(
          n,
          t.type,
          t.pendingProps,
          Mt
        ), n !== null ? (t.stateNode = n, et = t, Me = Dt(n.firstChild), Mt = !1, o = !0) : o = !1), o || Ea(t)), rl(t), o = t.type, u = t.pendingProps, v = e !== null ? e.memoizedProps : null, n = u.children, ou(o, u) ? n = null : v !== null && ou(o, v) && (t.flags |= 32), t.memoizedState !== null && (o = so(
          e,
          t,
          G0,
          null,
          null,
          a
        ), Jl._currentValue = o), is(e, t), at(e, t, n, a), t.child;
      case 6:
        return e === null && Se && ((e = a = Me) && (a = O1(
          a,
          t.pendingProps,
          Mt
        ), a !== null ? (t.stateNode = a, et = t, Me = null, e = !0) : e = !1), e || Ea(t)), null;
      case 13:
        return Dd(e, t, a);
      case 4:
        return st(
          t,
          t.stateNode.containerInfo
        ), n = t.pendingProps, e === null ? t.child = rn(
          t,
          null,
          n,
          a
        ) : at(e, t, n, a), t.child;
      case 11:
        return Rd(
          e,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 7:
        return at(
          e,
          t,
          t.pendingProps,
          a
        ), t.child;
      case 8:
        return at(
          e,
          t,
          t.pendingProps.children,
          a
        ), t.child;
      case 12:
        return at(
          e,
          t,
          t.pendingProps.children,
          a
        ), t.child;
      case 10:
        return n = t.pendingProps, Aa(t, t.type, n.value), at(e, t, n.children, a), t.child;
      case 9:
        return o = t.type._context, n = t.pendingProps.children, an(t), o = tt(o), n = n(o), t.flags |= 1, at(e, t, n, a), t.child;
      case 14:
        return Nd(
          e,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 15:
        return jd(
          e,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 19:
        return $d(e, t, a);
      case 31:
        return P0(e, t, a);
      case 22:
        return Td(
          e,
          t,
          a,
          t.pendingProps
        );
      case 24:
        return an(t), n = tt(Ge), e === null ? (o = Jr(), o === null && (o = Le, u = Fr(), o.pooledCache = u, u.refCount++, u !== null && (o.pooledCacheLanes |= a), o = u), t.memoizedState = { parent: n, cache: o }, Pr(t), Aa(t, Ge, o)) : ((e.lanes & a) !== 0 && (Wr(e, t), Ol(t, null, null, a), Tl()), o = e.memoizedState, u = t.memoizedState, o.parent !== n ? (o = { parent: n, cache: n }, t.memoizedState = o, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = o), Aa(t, Ge, n)) : (n = u.cache, Aa(t, Ge, n), n !== o.cache && Xr(
          t,
          [Ge],
          a,
          !0
        ))), at(
          e,
          t,
          t.pendingProps.children,
          a
        ), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(r(156, t.tag));
  }
  function la(e) {
    e.flags |= 4;
  }
  function Do(e, t, a, n, o) {
    if ((t = (e.mode & 32) !== 0) && (t = !1), t) {
      if (e.flags |= 16777216, (o & 335544128) === o)
        if (e.stateNode.complete) e.flags |= 8192;
        else if (fh()) e.flags |= 8192;
        else
          throw sn = Gi, Ir;
    } else e.flags &= -16777217;
  }
  function Bd(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !em(t))
      if (fh()) e.flags |= 8192;
      else
        throw sn = Gi, Ir;
  }
  function rs(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? yc() : 536870912, e.lanes |= t, Kn |= t);
  }
  function Ul(e, t) {
    if (!Se)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var a = null; t !== null; )
            t.alternate !== null && (a = t), t = t.sibling;
          a === null ? e.tail = null : a.sibling = null;
          break;
        case "collapsed":
          a = e.tail;
          for (var n = null; a !== null; )
            a.alternate !== null && (n = a), a = a.sibling;
          n === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : n.sibling = null;
      }
  }
  function _e(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, a = 0, n = 0;
    if (t)
      for (var o = e.child; o !== null; )
        a |= o.lanes | o.childLanes, n |= o.subtreeFlags & 65011712, n |= o.flags & 65011712, o.return = e, o = o.sibling;
    else
      for (o = e.child; o !== null; )
        a |= o.lanes | o.childLanes, n |= o.subtreeFlags, n |= o.flags, o.return = e, o = o.sibling;
    return e.subtreeFlags |= n, e.childLanes = a, t;
  }
  function e1(e, t, a) {
    var n = t.pendingProps;
    switch (Vr(t), t.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return _e(t), null;
      case 1:
        return _e(t), null;
      case 3:
        return a = t.stateNode, n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), ea(Ge), qe(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (e === null || e.child === null) && (Mn(t) ? la(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Gr())), _e(t), null;
      case 26:
        var o = t.type, u = t.memoizedState;
        return e === null ? (la(t), u !== null ? (_e(t), Bd(t, u)) : (_e(t), Do(
          t,
          o,
          null,
          n,
          a
        ))) : u ? u !== e.memoizedState ? (la(t), _e(t), Bd(t, u)) : (_e(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== n && la(t), _e(t), Do(
          t,
          o,
          e,
          n,
          a
        )), null;
      case 27:
        if (vi(t), a = pe.current, o = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== n && la(t);
        else {
          if (!n) {
            if (t.stateNode === null)
              throw Error(r(166));
            return _e(t), null;
          }
          e = W.current, Mn(t) ? vf(t) : (e = Kh(o, n, a), t.stateNode = e, la(t));
        }
        return _e(t), null;
      case 5:
        if (vi(t), o = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== n && la(t);
        else {
          if (!n) {
            if (t.stateNode === null)
              throw Error(r(166));
            return _e(t), null;
          }
          if (u = W.current, Mn(t))
            vf(t);
          else {
            var v = ws(
              pe.current
            );
            switch (u) {
              case 1:
                u = v.createElementNS(
                  "http://www.w3.org/2000/svg",
                  o
                );
                break;
              case 2:
                u = v.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  o
                );
                break;
              default:
                switch (o) {
                  case "svg":
                    u = v.createElementNS(
                      "http://www.w3.org/2000/svg",
                      o
                    );
                    break;
                  case "math":
                    u = v.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      o
                    );
                    break;
                  case "script":
                    u = v.createElement("div"), u.innerHTML = "<script><\/script>", u = u.removeChild(
                      u.firstChild
                    );
                    break;
                  case "select":
                    u = typeof n.is == "string" ? v.createElement("select", {
                      is: n.is
                    }) : v.createElement("select"), n.multiple ? u.multiple = !0 : n.size && (u.size = n.size);
                    break;
                  default:
                    u = typeof n.is == "string" ? v.createElement(o, { is: n.is }) : v.createElement(o);
                }
            }
            u[We] = t, u[ot] = n;
            e: for (v = t.child; v !== null; ) {
              if (v.tag === 5 || v.tag === 6)
                u.appendChild(v.stateNode);
              else if (v.tag !== 4 && v.tag !== 27 && v.child !== null) {
                v.child.return = v, v = v.child;
                continue;
              }
              if (v === t) break e;
              for (; v.sibling === null; ) {
                if (v.return === null || v.return === t)
                  break e;
                v = v.return;
              }
              v.sibling.return = v.return, v = v.sibling;
            }
            t.stateNode = u;
            e: switch (nt(u, o, n), o) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                n = !!n.autoFocus;
                break e;
              case "img":
                n = !0;
                break e;
              default:
                n = !1;
            }
            n && la(t);
          }
        }
        return _e(t), Do(
          t,
          t.type,
          e === null ? null : e.memoizedProps,
          t.pendingProps,
          a
        ), null;
      case 6:
        if (e && t.stateNode != null)
          e.memoizedProps !== n && la(t);
        else {
          if (typeof n != "string" && t.stateNode === null)
            throw Error(r(166));
          if (e = pe.current, Mn(t)) {
            if (e = t.stateNode, a = t.memoizedProps, n = null, o = et, o !== null)
              switch (o.tag) {
                case 27:
                case 5:
                  n = o.memoizedProps;
              }
            e[We] = t, e = !!(e.nodeValue === a || n !== null && n.suppressHydrationWarning === !0 || Dh(e.nodeValue, a)), e || Ea(t, !0);
          } else
            e = ws(e).createTextNode(
              n
            ), e[We] = t, t.stateNode = e;
        }
        return _e(t), null;
      case 31:
        if (a = t.memoizedState, e === null || e.memoizedState !== null) {
          if (n = Mn(t), a !== null) {
            if (e === null) {
              if (!n) throw Error(r(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(r(557));
              e[We] = t;
            } else
              en(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            _e(t), e = !1;
          } else
            a = Gr(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a), e = !0;
          if (!e)
            return t.flags & 256 ? (Et(t), t) : (Et(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(r(558));
        }
        return _e(t), null;
      case 13:
        if (n = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (o = Mn(t), n !== null && n.dehydrated !== null) {
            if (e === null) {
              if (!o) throw Error(r(318));
              if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(r(317));
              o[We] = t;
            } else
              en(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            _e(t), o = !1;
          } else
            o = Gr(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = o), o = !0;
          if (!o)
            return t.flags & 256 ? (Et(t), t) : (Et(t), null);
        }
        return Et(t), (t.flags & 128) !== 0 ? (t.lanes = a, t) : (a = n !== null, e = e !== null && e.memoizedState !== null, a && (n = t.child, o = null, n.alternate !== null && n.alternate.memoizedState !== null && n.alternate.memoizedState.cachePool !== null && (o = n.alternate.memoizedState.cachePool.pool), u = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (u = n.memoizedState.cachePool.pool), u !== o && (n.flags |= 2048)), a !== e && a && (t.child.flags |= 8192), rs(t, t.updateQueue), _e(t), null);
      case 4:
        return qe(), e === null && nu(t.stateNode.containerInfo), _e(t), null;
      case 10:
        return ea(t.type), _e(t), null;
      case 19:
        if (V(Ve), n = t.memoizedState, n === null) return _e(t), null;
        if (o = (t.flags & 128) !== 0, u = n.rendering, u === null)
          if (o) Ul(n, !1);
          else {
            if (Be !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (u = Fi(e), u !== null) {
                  for (t.flags |= 128, Ul(n, !1), e = u.updateQueue, t.updateQueue = e, rs(t, e), t.subtreeFlags = 0, e = a, a = t.child; a !== null; )
                    hf(a, e), a = a.sibling;
                  return Z(
                    Ve,
                    Ve.current & 1 | 2
                  ), Se && Pt(t, n.treeForkCount), t.child;
                }
                e = e.sibling;
              }
            n.tail !== null && yt() > ds && (t.flags |= 128, o = !0, Ul(n, !1), t.lanes = 4194304);
          }
        else {
          if (!o)
            if (e = Fi(u), e !== null) {
              if (t.flags |= 128, o = !0, e = e.updateQueue, t.updateQueue = e, rs(t, e), Ul(n, !0), n.tail === null && n.tailMode === "hidden" && !u.alternate && !Se)
                return _e(t), null;
            } else
              2 * yt() - n.renderingStartTime > ds && a !== 536870912 && (t.flags |= 128, o = !0, Ul(n, !1), t.lanes = 4194304);
          n.isBackwards ? (u.sibling = t.child, t.child = u) : (e = n.last, e !== null ? e.sibling = u : t.child = u, n.last = u);
        }
        return n.tail !== null ? (e = n.tail, n.rendering = e, n.tail = e.sibling, n.renderingStartTime = yt(), e.sibling = null, a = Ve.current, Z(
          Ve,
          o ? a & 1 | 2 : a & 1
        ), Se && Pt(t, n.treeForkCount), e) : (_e(t), null);
      case 22:
      case 23:
        return Et(t), no(), n = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== n && (t.flags |= 8192) : n && (t.flags |= 8192), n ? (a & 536870912) !== 0 && (t.flags & 128) === 0 && (_e(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : _e(t), a = t.updateQueue, a !== null && rs(t, a.retryQueue), a = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), n = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool), n !== a && (t.flags |= 2048), e !== null && V(nn), null;
      case 24:
        return a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), ea(Ge), _e(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(r(156, t.tag));
  }
  function t1(e, t) {
    switch (Vr(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return ea(Ge), qe(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return vi(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (Et(t), t.alternate === null)
            throw Error(r(340));
          en();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 13:
        if (Et(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(r(340));
          en();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return V(Ve), null;
      case 4:
        return qe(), null;
      case 10:
        return ea(t.type), null;
      case 22:
      case 23:
        return Et(t), no(), e !== null && V(nn), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return ea(Ge), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Hd(e, t) {
    switch (Vr(t), t.tag) {
      case 3:
        ea(Ge), qe();
        break;
      case 26:
      case 27:
      case 5:
        vi(t);
        break;
      case 4:
        qe();
        break;
      case 31:
        t.memoizedState !== null && Et(t);
        break;
      case 13:
        Et(t);
        break;
      case 19:
        V(Ve);
        break;
      case 10:
        ea(t.type);
        break;
      case 22:
      case 23:
        Et(t), no(), e !== null && V(nn);
        break;
      case 24:
        ea(Ge);
    }
  }
  function $l(e, t) {
    try {
      var a = t.updateQueue, n = a !== null ? a.lastEffect : null;
      if (n !== null) {
        var o = n.next;
        a = o;
        do {
          if ((a.tag & e) === e) {
            n = void 0;
            var u = a.create, v = a.inst;
            n = u(), v.destroy = n;
          }
          a = a.next;
        } while (a !== o);
      }
    } catch (S) {
      je(t, t.return, S);
    }
  }
  function Oa(e, t, a) {
    try {
      var n = t.updateQueue, o = n !== null ? n.lastEffect : null;
      if (o !== null) {
        var u = o.next;
        n = u;
        do {
          if ((n.tag & e) === e) {
            var v = n.inst, S = v.destroy;
            if (S !== void 0) {
              v.destroy = void 0, o = t;
              var C = a, D = S;
              try {
                D();
              } catch (q) {
                je(
                  o,
                  C,
                  q
                );
              }
            }
          }
          n = n.next;
        } while (n !== u);
      }
    } catch (q) {
      je(t, t.return, q);
    }
  }
  function qd(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var a = e.stateNode;
      try {
        zf(t, a);
      } catch (n) {
        je(e, e.return, n);
      }
    }
  }
  function Vd(e, t, a) {
    a.props = un(
      e.type,
      e.memoizedProps
    ), a.state = e.memoizedState;
    try {
      a.componentWillUnmount();
    } catch (n) {
      je(e, t, n);
    }
  }
  function kl(e, t) {
    try {
      var a = e.ref;
      if (a !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var n = e.stateNode;
            break;
          case 30:
            n = e.stateNode;
            break;
          default:
            n = e.stateNode;
        }
        typeof a == "function" ? e.refCleanup = a(n) : a.current = n;
      }
    } catch (o) {
      je(e, t, o);
    }
  }
  function Yt(e, t) {
    var a = e.ref, n = e.refCleanup;
    if (a !== null)
      if (typeof n == "function")
        try {
          n();
        } catch (o) {
          je(e, t, o);
        } finally {
          e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
        }
      else if (typeof a == "function")
        try {
          a(null);
        } catch (o) {
          je(e, t, o);
        }
      else a.current = null;
  }
  function Yd(e) {
    var t = e.type, a = e.memoizedProps, n = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && n.focus();
          break e;
        case "img":
          a.src ? n.src = a.src : a.srcSet && (n.srcset = a.srcSet);
      }
    } catch (o) {
      je(e, e.return, o);
    }
  }
  function Uo(e, t, a) {
    try {
      var n = e.stateNode;
      E1(n, e.type, a, t), n[ot] = t;
    } catch (o) {
      je(e, e.return, o);
    }
  }
  function Gd(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && $a(e.type) || e.tag === 4;
  }
  function $o(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Gd(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && $a(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function ko(e, t, a) {
    var n = e.tag;
    if (n === 5 || n === 6)
      e = e.stateNode, t ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(e, t) : (t = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, t.appendChild(e), a = a._reactRootContainer, a != null || t.onclick !== null || (t.onclick = Zt));
    else if (n !== 4 && (n === 27 && $a(e.type) && (a = e.stateNode, t = null), e = e.child, e !== null))
      for (ko(e, t, a), e = e.sibling; e !== null; )
        ko(e, t, a), e = e.sibling;
  }
  function os(e, t, a) {
    var n = e.tag;
    if (n === 5 || n === 6)
      e = e.stateNode, t ? a.insertBefore(e, t) : a.appendChild(e);
    else if (n !== 4 && (n === 27 && $a(e.type) && (a = e.stateNode), e = e.child, e !== null))
      for (os(e, t, a), e = e.sibling; e !== null; )
        os(e, t, a), e = e.sibling;
  }
  function Qd(e) {
    var t = e.stateNode, a = e.memoizedProps;
    try {
      for (var n = e.type, o = t.attributes; o.length; )
        t.removeAttributeNode(o[0]);
      nt(t, n, a), t[We] = e, t[ot] = a;
    } catch (u) {
      je(e, e.return, u);
    }
  }
  var ia = !1, Xe = !1, Bo = !1, Kd = typeof WeakSet == "function" ? WeakSet : Set, Ie = null;
  function a1(e, t) {
    if (e = e.containerInfo, su = Ts, e = nf(e), zr(e)) {
      if ("selectionStart" in e)
        var a = {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      else
        e: {
          a = (a = e.ownerDocument) && a.defaultView || window;
          var n = a.getSelection && a.getSelection();
          if (n && n.rangeCount !== 0) {
            a = n.anchorNode;
            var o = n.anchorOffset, u = n.focusNode;
            n = n.focusOffset;
            try {
              a.nodeType, u.nodeType;
            } catch {
              a = null;
              break e;
            }
            var v = 0, S = -1, C = -1, D = 0, q = 0, G = e, U = null;
            t: for (; ; ) {
              for (var B; G !== a || o !== 0 && G.nodeType !== 3 || (S = v + o), G !== u || n !== 0 && G.nodeType !== 3 || (C = v + n), G.nodeType === 3 && (v += G.nodeValue.length), (B = G.firstChild) !== null; )
                U = G, G = B;
              for (; ; ) {
                if (G === e) break t;
                if (U === a && ++D === o && (S = v), U === u && ++q === n && (C = v), (B = G.nextSibling) !== null) break;
                G = U, U = G.parentNode;
              }
              G = B;
            }
            a = S === -1 || C === -1 ? null : { start: S, end: C };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (ru = { focusedElem: e, selectionRange: a }, Ts = !1, Ie = t; Ie !== null; )
      if (t = Ie, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
        e.return = t, Ie = e;
      else
        for (; Ie !== null; ) {
          switch (t = Ie, u = t.alternate, e = t.flags, t.tag) {
            case 0:
              if ((e & 4) !== 0 && (e = t.updateQueue, e = e !== null ? e.events : null, e !== null))
                for (a = 0; a < e.length; a++)
                  o = e[a], o.ref.impl = o.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && u !== null) {
                e = void 0, a = t, o = u.memoizedProps, u = u.memoizedState, n = a.stateNode;
                try {
                  var ee = un(
                    a.type,
                    o
                  );
                  e = n.getSnapshotBeforeUpdate(
                    ee,
                    u
                  ), n.__reactInternalSnapshotBeforeUpdate = e;
                } catch (ie) {
                  je(
                    a,
                    a.return,
                    ie
                  );
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (e = t.stateNode.containerInfo, a = e.nodeType, a === 9)
                  cu(e);
                else if (a === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      cu(e);
                      break;
                    default:
                      e.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((e & 1024) !== 0) throw Error(r(163));
          }
          if (e = t.sibling, e !== null) {
            e.return = t.return, Ie = e;
            break;
          }
          Ie = t.return;
        }
  }
  function Xd(e, t, a) {
    var n = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        ra(e, a), n & 4 && $l(5, a);
        break;
      case 1:
        if (ra(e, a), n & 4)
          if (e = a.stateNode, t === null)
            try {
              e.componentDidMount();
            } catch (v) {
              je(a, a.return, v);
            }
          else {
            var o = un(
              a.type,
              t.memoizedProps
            );
            t = t.memoizedState;
            try {
              e.componentDidUpdate(
                o,
                t,
                e.__reactInternalSnapshotBeforeUpdate
              );
            } catch (v) {
              je(
                a,
                a.return,
                v
              );
            }
          }
        n & 64 && qd(a), n & 512 && kl(a, a.return);
        break;
      case 3:
        if (ra(e, a), n & 64 && (e = a.updateQueue, e !== null)) {
          if (t = null, a.child !== null)
            switch (a.child.tag) {
              case 27:
              case 5:
                t = a.child.stateNode;
                break;
              case 1:
                t = a.child.stateNode;
            }
          try {
            zf(e, t);
          } catch (v) {
            je(a, a.return, v);
          }
        }
        break;
      case 27:
        t === null && n & 4 && Qd(a);
      case 26:
      case 5:
        ra(e, a), t === null && n & 4 && Yd(a), n & 512 && kl(a, a.return);
        break;
      case 12:
        ra(e, a);
        break;
      case 31:
        ra(e, a), n & 4 && Jd(e, a);
        break;
      case 13:
        ra(e, a), n & 4 && Id(e, a), n & 64 && (e = a.memoizedState, e !== null && (e = e.dehydrated, e !== null && (a = f1.bind(
          null,
          a
        ), z1(e, a))));
        break;
      case 22:
        if (n = a.memoizedState !== null || ia, !n) {
          t = t !== null && t.memoizedState !== null || Xe, o = ia;
          var u = Xe;
          ia = n, (Xe = t) && !u ? oa(
            e,
            a,
            (a.subtreeFlags & 8772) !== 0
          ) : ra(e, a), ia = o, Xe = u;
        }
        break;
      case 30:
        break;
      default:
        ra(e, a);
    }
  }
  function Fd(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Fd(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && mr(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var De = null, ct = !1;
  function sa(e, t, a) {
    for (a = a.child; a !== null; )
      Zd(e, t, a), a = a.sibling;
  }
  function Zd(e, t, a) {
    if (vt && typeof vt.onCommitFiberUnmount == "function")
      try {
        vt.onCommitFiberUnmount(ol, a);
      } catch {
      }
    switch (a.tag) {
      case 26:
        Xe || Yt(a, t), sa(
          e,
          t,
          a
        ), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode, a.parentNode.removeChild(a));
        break;
      case 27:
        Xe || Yt(a, t);
        var n = De, o = ct;
        $a(a.type) && (De = a.stateNode, ct = !1), sa(
          e,
          t,
          a
        ), Xl(a.stateNode), De = n, ct = o;
        break;
      case 5:
        Xe || Yt(a, t);
      case 6:
        if (n = De, o = ct, De = null, sa(
          e,
          t,
          a
        ), De = n, ct = o, De !== null)
          if (ct)
            try {
              (De.nodeType === 9 ? De.body : De.nodeName === "HTML" ? De.ownerDocument.body : De).removeChild(a.stateNode);
            } catch (u) {
              je(
                a,
                t,
                u
              );
            }
          else
            try {
              De.removeChild(a.stateNode);
            } catch (u) {
              je(
                a,
                t,
                u
              );
            }
        break;
      case 18:
        De !== null && (ct ? (e = De, qh(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          a.stateNode
        ), el(e)) : qh(De, a.stateNode));
        break;
      case 4:
        n = De, o = ct, De = a.stateNode.containerInfo, ct = !0, sa(
          e,
          t,
          a
        ), De = n, ct = o;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Oa(2, a, t), Xe || Oa(4, a, t), sa(
          e,
          t,
          a
        );
        break;
      case 1:
        Xe || (Yt(a, t), n = a.stateNode, typeof n.componentWillUnmount == "function" && Vd(
          a,
          t,
          n
        )), sa(
          e,
          t,
          a
        );
        break;
      case 21:
        sa(
          e,
          t,
          a
        );
        break;
      case 22:
        Xe = (n = Xe) || a.memoizedState !== null, sa(
          e,
          t,
          a
        ), Xe = n;
        break;
      default:
        sa(
          e,
          t,
          a
        );
    }
  }
  function Jd(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
      e = e.dehydrated;
      try {
        el(e);
      } catch (a) {
        je(t, t.return, a);
      }
    }
  }
  function Id(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        el(e);
      } catch (a) {
        je(t, t.return, a);
      }
  }
  function n1(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new Kd()), t;
      case 22:
        return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new Kd()), t;
      default:
        throw Error(r(435, e.tag));
    }
  }
  function us(e, t) {
    var a = n1(e);
    t.forEach(function(n) {
      if (!a.has(n)) {
        a.add(n);
        var o = d1.bind(null, e, n);
        n.then(o, o);
      }
    });
  }
  function ft(e, t) {
    var a = t.deletions;
    if (a !== null)
      for (var n = 0; n < a.length; n++) {
        var o = a[n], u = e, v = t, S = v;
        e: for (; S !== null; ) {
          switch (S.tag) {
            case 27:
              if ($a(S.type)) {
                De = S.stateNode, ct = !1;
                break e;
              }
              break;
            case 5:
              De = S.stateNode, ct = !1;
              break e;
            case 3:
            case 4:
              De = S.stateNode.containerInfo, ct = !0;
              break e;
          }
          S = S.return;
        }
        if (De === null) throw Error(r(160));
        Zd(u, v, o), De = null, ct = !1, u = o.alternate, u !== null && (u.return = null), o.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        Pd(t, e), t = t.sibling;
  }
  var Bt = null;
  function Pd(e, t) {
    var a = e.alternate, n = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        ft(t, e), dt(e), n & 4 && (Oa(3, e, e.return), $l(3, e), Oa(5, e, e.return));
        break;
      case 1:
        ft(t, e), dt(e), n & 512 && (Xe || a === null || Yt(a, a.return)), n & 64 && ia && (e = e.updateQueue, e !== null && (n = e.callbacks, n !== null && (a = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = a === null ? n : a.concat(n))));
        break;
      case 26:
        var o = Bt;
        if (ft(t, e), dt(e), n & 512 && (Xe || a === null || Yt(a, a.return)), n & 4) {
          var u = a !== null ? a.memoizedState : null;
          if (n = e.memoizedState, a === null)
            if (n === null)
              if (e.stateNode === null) {
                e: {
                  n = e.type, a = e.memoizedProps, o = o.ownerDocument || o;
                  t: switch (n) {
                    case "title":
                      u = o.getElementsByTagName("title")[0], (!u || u[fl] || u[We] || u.namespaceURI === "http://www.w3.org/2000/svg" || u.hasAttribute("itemprop")) && (u = o.createElement(n), o.head.insertBefore(
                        u,
                        o.querySelector("head > title")
                      )), nt(u, n, a), u[We] = e, Je(u), n = u;
                      break e;
                    case "link":
                      var v = Ph(
                        "link",
                        "href",
                        o
                      ).get(n + (a.href || ""));
                      if (v) {
                        for (var S = 0; S < v.length; S++)
                          if (u = v[S], u.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) && u.getAttribute("rel") === (a.rel == null ? null : a.rel) && u.getAttribute("title") === (a.title == null ? null : a.title) && u.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                            v.splice(S, 1);
                            break t;
                          }
                      }
                      u = o.createElement(n), nt(u, n, a), o.head.appendChild(u);
                      break;
                    case "meta":
                      if (v = Ph(
                        "meta",
                        "content",
                        o
                      ).get(n + (a.content || ""))) {
                        for (S = 0; S < v.length; S++)
                          if (u = v[S], u.getAttribute("content") === (a.content == null ? null : "" + a.content) && u.getAttribute("name") === (a.name == null ? null : a.name) && u.getAttribute("property") === (a.property == null ? null : a.property) && u.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && u.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                            v.splice(S, 1);
                            break t;
                          }
                      }
                      u = o.createElement(n), nt(u, n, a), o.head.appendChild(u);
                      break;
                    default:
                      throw Error(r(468, n));
                  }
                  u[We] = e, Je(u), n = u;
                }
                e.stateNode = n;
              } else
                Wh(
                  o,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = Ih(
                o,
                n,
                e.memoizedProps
              );
          else
            u !== n ? (u === null ? a.stateNode !== null && (a = a.stateNode, a.parentNode.removeChild(a)) : u.count--, n === null ? Wh(
              o,
              e.type,
              e.stateNode
            ) : Ih(
              o,
              n,
              e.memoizedProps
            )) : n === null && e.stateNode !== null && Uo(
              e,
              e.memoizedProps,
              a.memoizedProps
            );
        }
        break;
      case 27:
        ft(t, e), dt(e), n & 512 && (Xe || a === null || Yt(a, a.return)), a !== null && n & 4 && Uo(
          e,
          e.memoizedProps,
          a.memoizedProps
        );
        break;
      case 5:
        if (ft(t, e), dt(e), n & 512 && (Xe || a === null || Yt(a, a.return)), e.flags & 32) {
          o = e.stateNode;
          try {
            En(o, "");
          } catch (ee) {
            je(e, e.return, ee);
          }
        }
        n & 4 && e.stateNode != null && (o = e.memoizedProps, Uo(
          e,
          o,
          a !== null ? a.memoizedProps : o
        )), n & 1024 && (Bo = !0);
        break;
      case 6:
        if (ft(t, e), dt(e), n & 4) {
          if (e.stateNode === null)
            throw Error(r(162));
          n = e.memoizedProps, a = e.stateNode;
          try {
            a.nodeValue = n;
          } catch (ee) {
            je(e, e.return, ee);
          }
        }
        break;
      case 3:
        if (Cs = null, o = Bt, Bt = Es(t.containerInfo), ft(t, e), Bt = o, dt(e), n & 4 && a !== null && a.memoizedState.isDehydrated)
          try {
            el(t.containerInfo);
          } catch (ee) {
            je(e, e.return, ee);
          }
        Bo && (Bo = !1, Wd(e));
        break;
      case 4:
        n = Bt, Bt = Es(
          e.stateNode.containerInfo
        ), ft(t, e), dt(e), Bt = n;
        break;
      case 12:
        ft(t, e), dt(e);
        break;
      case 31:
        ft(t, e), dt(e), n & 4 && (n = e.updateQueue, n !== null && (e.updateQueue = null, us(e, n)));
        break;
      case 13:
        ft(t, e), dt(e), e.child.flags & 8192 && e.memoizedState !== null != (a !== null && a.memoizedState !== null) && (fs = yt()), n & 4 && (n = e.updateQueue, n !== null && (e.updateQueue = null, us(e, n)));
        break;
      case 22:
        o = e.memoizedState !== null;
        var C = a !== null && a.memoizedState !== null, D = ia, q = Xe;
        if (ia = D || o, Xe = q || C, ft(t, e), Xe = q, ia = D, dt(e), n & 8192)
          e: for (t = e.stateNode, t._visibility = o ? t._visibility & -2 : t._visibility | 1, o && (a === null || C || ia || Xe || cn(e)), a = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (a === null) {
                C = a = t;
                try {
                  if (u = C.stateNode, o)
                    v = u.style, typeof v.setProperty == "function" ? v.setProperty("display", "none", "important") : v.display = "none";
                  else {
                    S = C.stateNode;
                    var G = C.memoizedProps.style, U = G != null && G.hasOwnProperty("display") ? G.display : null;
                    S.style.display = U == null || typeof U == "boolean" ? "" : ("" + U).trim();
                  }
                } catch (ee) {
                  je(C, C.return, ee);
                }
              }
            } else if (t.tag === 6) {
              if (a === null) {
                C = t;
                try {
                  C.stateNode.nodeValue = o ? "" : C.memoizedProps;
                } catch (ee) {
                  je(C, C.return, ee);
                }
              }
            } else if (t.tag === 18) {
              if (a === null) {
                C = t;
                try {
                  var B = C.stateNode;
                  o ? Vh(B, !0) : Vh(C.stateNode, !1);
                } catch (ee) {
                  je(C, C.return, ee);
                }
              }
            } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
              t.child.return = t, t = t.child;
              continue;
            }
            if (t === e) break e;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) break e;
              a === t && (a = null), t = t.return;
            }
            a === t && (a = null), t.sibling.return = t.return, t = t.sibling;
          }
        n & 4 && (n = e.updateQueue, n !== null && (a = n.retryQueue, a !== null && (n.retryQueue = null, us(e, a))));
        break;
      case 19:
        ft(t, e), dt(e), n & 4 && (n = e.updateQueue, n !== null && (e.updateQueue = null, us(e, n)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        ft(t, e), dt(e);
    }
  }
  function dt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var a, n = e.return; n !== null; ) {
          if (Gd(n)) {
            a = n;
            break;
          }
          n = n.return;
        }
        if (a == null) throw Error(r(160));
        switch (a.tag) {
          case 27:
            var o = a.stateNode, u = $o(e);
            os(e, u, o);
            break;
          case 5:
            var v = a.stateNode;
            a.flags & 32 && (En(v, ""), a.flags &= -33);
            var S = $o(e);
            os(e, S, v);
            break;
          case 3:
          case 4:
            var C = a.stateNode.containerInfo, D = $o(e);
            ko(
              e,
              D,
              C
            );
            break;
          default:
            throw Error(r(161));
        }
      } catch (q) {
        je(e, e.return, q);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Wd(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        Wd(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
      }
  }
  function ra(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        Xd(e, t.alternate, t), t = t.sibling;
  }
  function cn(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Oa(4, t, t.return), cn(t);
          break;
        case 1:
          Yt(t, t.return);
          var a = t.stateNode;
          typeof a.componentWillUnmount == "function" && Vd(
            t,
            t.return,
            a
          ), cn(t);
          break;
        case 27:
          Xl(t.stateNode);
        case 26:
        case 5:
          Yt(t, t.return), cn(t);
          break;
        case 22:
          t.memoizedState === null && cn(t);
          break;
        case 30:
          cn(t);
          break;
        default:
          cn(t);
      }
      e = e.sibling;
    }
  }
  function oa(e, t, a) {
    for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var n = t.alternate, o = e, u = t, v = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          oa(
            o,
            u,
            a
          ), $l(4, u);
          break;
        case 1:
          if (oa(
            o,
            u,
            a
          ), n = u, o = n.stateNode, typeof o.componentDidMount == "function")
            try {
              o.componentDidMount();
            } catch (D) {
              je(n, n.return, D);
            }
          if (n = u, o = n.updateQueue, o !== null) {
            var S = n.stateNode;
            try {
              var C = o.shared.hiddenCallbacks;
              if (C !== null)
                for (o.shared.hiddenCallbacks = null, o = 0; o < C.length; o++)
                  Of(C[o], S);
            } catch (D) {
              je(n, n.return, D);
            }
          }
          a && v & 64 && qd(u), kl(u, u.return);
          break;
        case 27:
          Qd(u);
        case 26:
        case 5:
          oa(
            o,
            u,
            a
          ), a && n === null && v & 4 && Yd(u), kl(u, u.return);
          break;
        case 12:
          oa(
            o,
            u,
            a
          );
          break;
        case 31:
          oa(
            o,
            u,
            a
          ), a && v & 4 && Jd(o, u);
          break;
        case 13:
          oa(
            o,
            u,
            a
          ), a && v & 4 && Id(o, u);
          break;
        case 22:
          u.memoizedState === null && oa(
            o,
            u,
            a
          ), kl(u, u.return);
          break;
        case 30:
          break;
        default:
          oa(
            o,
            u,
            a
          );
      }
      t = t.sibling;
    }
  }
  function Ho(e, t) {
    var a = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== a && (e != null && e.refCount++, a != null && Al(a));
  }
  function qo(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Al(e));
  }
  function Ht(e, t, a, n) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        eh(
          e,
          t,
          a,
          n
        ), t = t.sibling;
  }
  function eh(e, t, a, n) {
    var o = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Ht(
          e,
          t,
          a,
          n
        ), o & 2048 && $l(9, t);
        break;
      case 1:
        Ht(
          e,
          t,
          a,
          n
        );
        break;
      case 3:
        Ht(
          e,
          t,
          a,
          n
        ), o & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Al(e)));
        break;
      case 12:
        if (o & 2048) {
          Ht(
            e,
            t,
            a,
            n
          ), e = t.stateNode;
          try {
            var u = t.memoizedProps, v = u.id, S = u.onPostCommit;
            typeof S == "function" && S(
              v,
              t.alternate === null ? "mount" : "update",
              e.passiveEffectDuration,
              -0
            );
          } catch (C) {
            je(t, t.return, C);
          }
        } else
          Ht(
            e,
            t,
            a,
            n
          );
        break;
      case 31:
        Ht(
          e,
          t,
          a,
          n
        );
        break;
      case 13:
        Ht(
          e,
          t,
          a,
          n
        );
        break;
      case 23:
        break;
      case 22:
        u = t.stateNode, v = t.alternate, t.memoizedState !== null ? u._visibility & 2 ? Ht(
          e,
          t,
          a,
          n
        ) : Bl(e, t) : u._visibility & 2 ? Ht(
          e,
          t,
          a,
          n
        ) : (u._visibility |= 2, Yn(
          e,
          t,
          a,
          n,
          (t.subtreeFlags & 10256) !== 0 || !1
        )), o & 2048 && Ho(v, t);
        break;
      case 24:
        Ht(
          e,
          t,
          a,
          n
        ), o & 2048 && qo(t.alternate, t);
        break;
      default:
        Ht(
          e,
          t,
          a,
          n
        );
    }
  }
  function Yn(e, t, a, n, o) {
    for (o = o && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var u = e, v = t, S = a, C = n, D = v.flags;
      switch (v.tag) {
        case 0:
        case 11:
        case 15:
          Yn(
            u,
            v,
            S,
            C,
            o
          ), $l(8, v);
          break;
        case 23:
          break;
        case 22:
          var q = v.stateNode;
          v.memoizedState !== null ? q._visibility & 2 ? Yn(
            u,
            v,
            S,
            C,
            o
          ) : Bl(
            u,
            v
          ) : (q._visibility |= 2, Yn(
            u,
            v,
            S,
            C,
            o
          )), o && D & 2048 && Ho(
            v.alternate,
            v
          );
          break;
        case 24:
          Yn(
            u,
            v,
            S,
            C,
            o
          ), o && D & 2048 && qo(v.alternate, v);
          break;
        default:
          Yn(
            u,
            v,
            S,
            C,
            o
          );
      }
      t = t.sibling;
    }
  }
  function Bl(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var a = e, n = t, o = n.flags;
        switch (n.tag) {
          case 22:
            Bl(a, n), o & 2048 && Ho(
              n.alternate,
              n
            );
            break;
          case 24:
            Bl(a, n), o & 2048 && qo(n.alternate, n);
            break;
          default:
            Bl(a, n);
        }
        t = t.sibling;
      }
  }
  var Hl = 8192;
  function Gn(e, t, a) {
    if (e.subtreeFlags & Hl)
      for (e = e.child; e !== null; )
        th(
          e,
          t,
          a
        ), e = e.sibling;
  }
  function th(e, t, a) {
    switch (e.tag) {
      case 26:
        Gn(
          e,
          t,
          a
        ), e.flags & Hl && e.memoizedState !== null && Y1(
          a,
          Bt,
          e.memoizedState,
          e.memoizedProps
        );
        break;
      case 5:
        Gn(
          e,
          t,
          a
        );
        break;
      case 3:
      case 4:
        var n = Bt;
        Bt = Es(e.stateNode.containerInfo), Gn(
          e,
          t,
          a
        ), Bt = n;
        break;
      case 22:
        e.memoizedState === null && (n = e.alternate, n !== null && n.memoizedState !== null ? (n = Hl, Hl = 16777216, Gn(
          e,
          t,
          a
        ), Hl = n) : Gn(
          e,
          t,
          a
        ));
        break;
      default:
        Gn(
          e,
          t,
          a
        );
    }
  }
  function ah(e) {
    var t = e.alternate;
    if (t !== null && (e = t.child, e !== null)) {
      t.child = null;
      do
        t = e.sibling, e.sibling = null, e = t;
      while (e !== null);
    }
  }
  function ql(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var n = t[a];
          Ie = n, lh(
            n,
            e
          );
        }
      ah(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        nh(e), e = e.sibling;
  }
  function nh(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        ql(e), e.flags & 2048 && Oa(9, e, e.return);
        break;
      case 3:
        ql(e);
        break;
      case 12:
        ql(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, cs(e)) : ql(e);
        break;
      default:
        ql(e);
    }
  }
  function cs(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var n = t[a];
          Ie = n, lh(
            n,
            e
          );
        }
      ah(e);
    }
    for (e = e.child; e !== null; ) {
      switch (t = e, t.tag) {
        case 0:
        case 11:
        case 15:
          Oa(8, t, t.return), cs(t);
          break;
        case 22:
          a = t.stateNode, a._visibility & 2 && (a._visibility &= -3, cs(t));
          break;
        default:
          cs(t);
      }
      e = e.sibling;
    }
  }
  function lh(e, t) {
    for (; Ie !== null; ) {
      var a = Ie;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          Oa(8, a, t);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var n = a.memoizedState.cachePool.pool;
            n != null && n.refCount++;
          }
          break;
        case 24:
          Al(a.memoizedState.cache);
      }
      if (n = a.child, n !== null) n.return = a, Ie = n;
      else
        e: for (a = e; Ie !== null; ) {
          n = Ie;
          var o = n.sibling, u = n.return;
          if (Fd(n), n === a) {
            Ie = null;
            break e;
          }
          if (o !== null) {
            o.return = u, Ie = o;
            break e;
          }
          Ie = u;
        }
    }
  }
  var l1 = {
    getCacheForType: function(e) {
      var t = tt(Ge), a = t.data.get(e);
      return a === void 0 && (a = e(), t.data.set(e, a)), a;
    },
    cacheSignal: function() {
      return tt(Ge).controller.signal;
    }
  }, i1 = typeof WeakMap == "function" ? WeakMap : Map, Ce = 0, Le = null, ge = null, be = 0, Ne = 0, At = null, za = !1, Qn = !1, Vo = !1, ua = 0, Be = 0, La = 0, fn = 0, Yo = 0, Ct = 0, Kn = 0, Vl = null, ht = null, Go = !1, fs = 0, ih = 0, ds = 1 / 0, hs = null, Ma = null, Fe = 0, _a = null, Xn = null, ca = 0, Qo = 0, Ko = null, sh = null, Yl = 0, Xo = null;
  function Rt() {
    return (Ce & 2) !== 0 && be !== 0 ? be & -be : k.T !== null ? Wo() : Sc();
  }
  function rh() {
    if (Ct === 0)
      if ((be & 536870912) === 0 || Se) {
        var e = Si;
        Si <<= 1, (Si & 3932160) === 0 && (Si = 262144), Ct = e;
      } else Ct = 536870912;
    return e = wt.current, e !== null && (e.flags |= 32), Ct;
  }
  function mt(e, t, a) {
    (e === Le && (Ne === 2 || Ne === 9) || e.cancelPendingCommit !== null) && (Fn(e, 0), Da(
      e,
      be,
      Ct,
      !1
    )), cl(e, a), ((Ce & 2) === 0 || e !== Le) && (e === Le && ((Ce & 2) === 0 && (fn |= a), Be === 4 && Da(
      e,
      be,
      Ct,
      !1
    )), Gt(e));
  }
  function oh(e, t, a) {
    if ((Ce & 6) !== 0) throw Error(r(327));
    var n = !a && (t & 127) === 0 && (t & e.expiredLanes) === 0 || ul(e, t), o = n ? o1(e, t) : Zo(e, t, !0), u = n;
    do {
      if (o === 0) {
        Qn && !n && Da(e, t, 0, !1);
        break;
      } else {
        if (a = e.current.alternate, u && !s1(a)) {
          o = Zo(e, t, !1), u = !1;
          continue;
        }
        if (o === 2) {
          if (u = t, e.errorRecoveryDisabledLanes & u)
            var v = 0;
          else
            v = e.pendingLanes & -536870913, v = v !== 0 ? v : v & 536870912 ? 536870912 : 0;
          if (v !== 0) {
            t = v;
            e: {
              var S = e;
              o = Vl;
              var C = S.current.memoizedState.isDehydrated;
              if (C && (Fn(S, v).flags |= 256), v = Zo(
                S,
                v,
                !1
              ), v !== 2) {
                if (Vo && !C) {
                  S.errorRecoveryDisabledLanes |= u, fn |= u, o = 4;
                  break e;
                }
                u = ht, ht = o, u !== null && (ht === null ? ht = u : ht.push.apply(
                  ht,
                  u
                ));
              }
              o = v;
            }
            if (u = !1, o !== 2) continue;
          }
        }
        if (o === 1) {
          Fn(e, 0), Da(e, t, 0, !0);
          break;
        }
        e: {
          switch (n = e, u = o, u) {
            case 0:
            case 1:
              throw Error(r(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              Da(
                n,
                t,
                Ct,
                !za
              );
              break e;
            case 2:
              ht = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(r(329));
          }
          if ((t & 62914560) === t && (o = fs + 300 - yt(), 10 < o)) {
            if (Da(
              n,
              t,
              Ct,
              !za
            ), Ei(n, 0, !0) !== 0) break e;
            ca = t, n.timeoutHandle = Bh(
              uh.bind(
                null,
                n,
                a,
                ht,
                hs,
                Go,
                t,
                Ct,
                fn,
                Kn,
                za,
                u,
                "Throttled",
                -0,
                0
              ),
              o
            );
            break e;
          }
          uh(
            n,
            a,
            ht,
            hs,
            Go,
            t,
            Ct,
            fn,
            Kn,
            za,
            u,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    Gt(e);
  }
  function uh(e, t, a, n, o, u, v, S, C, D, q, G, U, B) {
    if (e.timeoutHandle = -1, G = t.subtreeFlags, G & 8192 || (G & 16785408) === 16785408) {
      G = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Zt
      }, th(
        t,
        u,
        G
      );
      var ee = (u & 62914560) === u ? fs - yt() : (u & 4194048) === u ? ih - yt() : 0;
      if (ee = G1(
        G,
        ee
      ), ee !== null) {
        ca = u, e.cancelPendingCommit = ee(
          yh.bind(
            null,
            e,
            t,
            u,
            a,
            n,
            o,
            v,
            S,
            C,
            q,
            G,
            null,
            U,
            B
          )
        ), Da(e, u, v, !D);
        return;
      }
    }
    yh(
      e,
      t,
      u,
      a,
      n,
      o,
      v,
      S,
      C
    );
  }
  function s1(e) {
    for (var t = e; ; ) {
      var a = t.tag;
      if ((a === 0 || a === 11 || a === 15) && t.flags & 16384 && (a = t.updateQueue, a !== null && (a = a.stores, a !== null)))
        for (var n = 0; n < a.length; n++) {
          var o = a[n], u = o.getSnapshot;
          o = o.value;
          try {
            if (!xt(u(), o)) return !1;
          } catch {
            return !1;
          }
        }
      if (a = t.child, t.subtreeFlags & 16384 && a !== null)
        a.return = t, t = a;
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return !0;
  }
  function Da(e, t, a, n) {
    t &= ~Yo, t &= ~fn, e.suspendedLanes |= t, e.pingedLanes &= ~t, n && (e.warmLanes |= t), n = e.expirationTimes;
    for (var o = t; 0 < o; ) {
      var u = 31 - bt(o), v = 1 << u;
      n[u] = -1, o &= ~v;
    }
    a !== 0 && vc(e, a, t);
  }
  function ms() {
    return (Ce & 6) === 0 ? (Gl(0), !1) : !0;
  }
  function Fo() {
    if (ge !== null) {
      if (Ne === 0)
        var e = ge.return;
      else
        e = ge, Wt = tn = null, uo(e), kn = null, Rl = 0, e = ge;
      for (; e !== null; )
        Hd(e.alternate, e), e = e.return;
      ge = null;
    }
  }
  function Fn(e, t) {
    var a = e.timeoutHandle;
    a !== -1 && (e.timeoutHandle = -1, R1(a)), a = e.cancelPendingCommit, a !== null && (e.cancelPendingCommit = null, a()), ca = 0, Fo(), Le = e, ge = a = It(e.current, null), be = t, Ne = 0, At = null, za = !1, Qn = ul(e, t), Vo = !1, Kn = Ct = Yo = fn = La = Be = 0, ht = Vl = null, Go = !1, (t & 8) !== 0 && (t |= t & 32);
    var n = e.entangledLanes;
    if (n !== 0)
      for (e = e.entanglements, n &= t; 0 < n; ) {
        var o = 31 - bt(n), u = 1 << o;
        t |= e[o], n &= ~u;
      }
    return ua = t, Di(), a;
  }
  function ch(e, t) {
    he = null, k.H = _l, t === $n || t === Yi ? (t = Rf(), Ne = 3) : t === Ir ? (t = Rf(), Ne = 4) : Ne = t === Ro ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, At = t, ge === null && (Be = 1, ns(
      e,
      Ot(t, e.current)
    ));
  }
  function fh() {
    var e = wt.current;
    return e === null ? !0 : (be & 4194048) === be ? _t === null : (be & 62914560) === be || (be & 536870912) !== 0 ? e === _t : !1;
  }
  function dh() {
    var e = k.H;
    return k.H = _l, e === null ? _l : e;
  }
  function hh() {
    var e = k.A;
    return k.A = l1, e;
  }
  function ps() {
    Be = 4, za || (be & 4194048) !== be && wt.current !== null || (Qn = !0), (La & 134217727) === 0 && (fn & 134217727) === 0 || Le === null || Da(
      Le,
      be,
      Ct,
      !1
    );
  }
  function Zo(e, t, a) {
    var n = Ce;
    Ce |= 2;
    var o = dh(), u = hh();
    (Le !== e || be !== t) && (hs = null, Fn(e, t)), t = !1;
    var v = Be;
    e: do
      try {
        if (Ne !== 0 && ge !== null) {
          var S = ge, C = At;
          switch (Ne) {
            case 8:
              Fo(), v = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              wt.current === null && (t = !0);
              var D = Ne;
              if (Ne = 0, At = null, Zn(e, S, C, D), a && Qn) {
                v = 0;
                break e;
              }
              break;
            default:
              D = Ne, Ne = 0, At = null, Zn(e, S, C, D);
          }
        }
        r1(), v = Be;
        break;
      } catch (q) {
        ch(e, q);
      }
    while (!0);
    return t && e.shellSuspendCounter++, Wt = tn = null, Ce = n, k.H = o, k.A = u, ge === null && (Le = null, be = 0, Di()), v;
  }
  function r1() {
    for (; ge !== null; ) mh(ge);
  }
  function o1(e, t) {
    var a = Ce;
    Ce |= 2;
    var n = dh(), o = hh();
    Le !== e || be !== t ? (hs = null, ds = yt() + 500, Fn(e, t)) : Qn = ul(
      e,
      t
    );
    e: do
      try {
        if (Ne !== 0 && ge !== null) {
          t = ge;
          var u = At;
          t: switch (Ne) {
            case 1:
              Ne = 0, At = null, Zn(e, t, u, 1);
              break;
            case 2:
            case 9:
              if (Af(u)) {
                Ne = 0, At = null, ph(t);
                break;
              }
              t = function() {
                Ne !== 2 && Ne !== 9 || Le !== e || (Ne = 7), Gt(e);
              }, u.then(t, t);
              break e;
            case 3:
              Ne = 7;
              break e;
            case 4:
              Ne = 5;
              break e;
            case 7:
              Af(u) ? (Ne = 0, At = null, ph(t)) : (Ne = 0, At = null, Zn(e, t, u, 7));
              break;
            case 5:
              var v = null;
              switch (ge.tag) {
                case 26:
                  v = ge.memoizedState;
                case 5:
                case 27:
                  var S = ge;
                  if (v ? em(v) : S.stateNode.complete) {
                    Ne = 0, At = null;
                    var C = S.sibling;
                    if (C !== null) ge = C;
                    else {
                      var D = S.return;
                      D !== null ? (ge = D, gs(D)) : ge = null;
                    }
                    break t;
                  }
              }
              Ne = 0, At = null, Zn(e, t, u, 5);
              break;
            case 6:
              Ne = 0, At = null, Zn(e, t, u, 6);
              break;
            case 8:
              Fo(), Be = 6;
              break e;
            default:
              throw Error(r(462));
          }
        }
        u1();
        break;
      } catch (q) {
        ch(e, q);
      }
    while (!0);
    return Wt = tn = null, k.H = n, k.A = o, Ce = a, ge !== null ? 0 : (Le = null, be = 0, Di(), Be);
  }
  function u1() {
    for (; ge !== null && !Lg(); )
      mh(ge);
  }
  function mh(e) {
    var t = kd(e.alternate, e, ua);
    e.memoizedProps = e.pendingProps, t === null ? gs(e) : ge = t;
  }
  function ph(e) {
    var t = e, a = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Ld(
          a,
          t,
          t.pendingProps,
          t.type,
          void 0,
          be
        );
        break;
      case 11:
        t = Ld(
          a,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          be
        );
        break;
      case 5:
        uo(t);
      default:
        Hd(a, t), t = ge = hf(t, ua), t = kd(a, t, ua);
    }
    e.memoizedProps = e.pendingProps, t === null ? gs(e) : ge = t;
  }
  function Zn(e, t, a, n) {
    Wt = tn = null, uo(t), kn = null, Rl = 0;
    var o = t.return;
    try {
      if (I0(
        e,
        o,
        t,
        a,
        be
      )) {
        Be = 1, ns(
          e,
          Ot(a, e.current)
        ), ge = null;
        return;
      }
    } catch (u) {
      if (o !== null) throw ge = o, u;
      Be = 1, ns(
        e,
        Ot(a, e.current)
      ), ge = null;
      return;
    }
    t.flags & 32768 ? (Se || n === 1 ? e = !0 : Qn || (be & 536870912) !== 0 ? e = !1 : (za = e = !0, (n === 2 || n === 9 || n === 3 || n === 6) && (n = wt.current, n !== null && n.tag === 13 && (n.flags |= 16384))), gh(t, e)) : gs(t);
  }
  function gs(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        gh(
          t,
          za
        );
        return;
      }
      e = t.return;
      var a = e1(
        t.alternate,
        t,
        ua
      );
      if (a !== null) {
        ge = a;
        return;
      }
      if (t = t.sibling, t !== null) {
        ge = t;
        return;
      }
      ge = t = e;
    } while (t !== null);
    Be === 0 && (Be = 5);
  }
  function gh(e, t) {
    do {
      var a = t1(e.alternate, e);
      if (a !== null) {
        a.flags &= 32767, ge = a;
        return;
      }
      if (a = e.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !t && (e = e.sibling, e !== null)) {
        ge = e;
        return;
      }
      ge = e = a;
    } while (e !== null);
    Be = 6, ge = null;
  }
  function yh(e, t, a, n, o, u, v, S, C) {
    e.cancelPendingCommit = null;
    do
      ys();
    while (Fe !== 0);
    if ((Ce & 6) !== 0) throw Error(r(327));
    if (t !== null) {
      if (t === e.current) throw Error(r(177));
      if (u = t.lanes | t.childLanes, u |= Ur, Vg(
        e,
        a,
        u,
        v,
        S,
        C
      ), e === Le && (ge = Le = null, be = 0), Xn = t, _a = e, ca = a, Qo = u, Ko = o, sh = n, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, h1(bi, function() {
        return wh(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), n = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || n) {
        n = k.T, k.T = null, o = K.p, K.p = 2, v = Ce, Ce |= 4;
        try {
          a1(e, t, a);
        } finally {
          Ce = v, K.p = o, k.T = n;
        }
      }
      Fe = 1, vh(), bh(), xh();
    }
  }
  function vh() {
    if (Fe === 1) {
      Fe = 0;
      var e = _a, t = Xn, a = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || a) {
        a = k.T, k.T = null;
        var n = K.p;
        K.p = 2;
        var o = Ce;
        Ce |= 4;
        try {
          Pd(t, e);
          var u = ru, v = nf(e.containerInfo), S = u.focusedElem, C = u.selectionRange;
          if (v !== S && S && S.ownerDocument && af(
            S.ownerDocument.documentElement,
            S
          )) {
            if (C !== null && zr(S)) {
              var D = C.start, q = C.end;
              if (q === void 0 && (q = D), "selectionStart" in S)
                S.selectionStart = D, S.selectionEnd = Math.min(
                  q,
                  S.value.length
                );
              else {
                var G = S.ownerDocument || document, U = G && G.defaultView || window;
                if (U.getSelection) {
                  var B = U.getSelection(), ee = S.textContent.length, ie = Math.min(C.start, ee), ze = C.end === void 0 ? ie : Math.min(C.end, ee);
                  !B.extend && ie > ze && (v = ze, ze = ie, ie = v);
                  var L = tf(
                    S,
                    ie
                  ), T = tf(
                    S,
                    ze
                  );
                  if (L && T && (B.rangeCount !== 1 || B.anchorNode !== L.node || B.anchorOffset !== L.offset || B.focusNode !== T.node || B.focusOffset !== T.offset)) {
                    var _ = G.createRange();
                    _.setStart(L.node, L.offset), B.removeAllRanges(), ie > ze ? (B.addRange(_), B.extend(T.node, T.offset)) : (_.setEnd(T.node, T.offset), B.addRange(_));
                  }
                }
              }
            }
            for (G = [], B = S; B = B.parentNode; )
              B.nodeType === 1 && G.push({
                element: B,
                left: B.scrollLeft,
                top: B.scrollTop
              });
            for (typeof S.focus == "function" && S.focus(), S = 0; S < G.length; S++) {
              var Y = G[S];
              Y.element.scrollLeft = Y.left, Y.element.scrollTop = Y.top;
            }
          }
          Ts = !!su, ru = su = null;
        } finally {
          Ce = o, K.p = n, k.T = a;
        }
      }
      e.current = t, Fe = 2;
    }
  }
  function bh() {
    if (Fe === 2) {
      Fe = 0;
      var e = _a, t = Xn, a = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || a) {
        a = k.T, k.T = null;
        var n = K.p;
        K.p = 2;
        var o = Ce;
        Ce |= 4;
        try {
          Xd(e, t.alternate, t);
        } finally {
          Ce = o, K.p = n, k.T = a;
        }
      }
      Fe = 3;
    }
  }
  function xh() {
    if (Fe === 4 || Fe === 3) {
      Fe = 0, Mg();
      var e = _a, t = Xn, a = ca, n = sh;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? Fe = 5 : (Fe = 0, Xn = _a = null, Sh(e, e.pendingLanes));
      var o = e.pendingLanes;
      if (o === 0 && (Ma = null), dr(a), t = t.stateNode, vt && typeof vt.onCommitFiberRoot == "function")
        try {
          vt.onCommitFiberRoot(
            ol,
            t,
            void 0,
            (t.current.flags & 128) === 128
          );
        } catch {
        }
      if (n !== null) {
        t = k.T, o = K.p, K.p = 2, k.T = null;
        try {
          for (var u = e.onRecoverableError, v = 0; v < n.length; v++) {
            var S = n[v];
            u(S.value, {
              componentStack: S.stack
            });
          }
        } finally {
          k.T = t, K.p = o;
        }
      }
      (ca & 3) !== 0 && ys(), Gt(e), o = e.pendingLanes, (a & 261930) !== 0 && (o & 42) !== 0 ? e === Xo ? Yl++ : (Yl = 0, Xo = e) : Yl = 0, Gl(0);
    }
  }
  function Sh(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, Al(t)));
  }
  function ys() {
    return vh(), bh(), xh(), wh();
  }
  function wh() {
    if (Fe !== 5) return !1;
    var e = _a, t = Qo;
    Qo = 0;
    var a = dr(ca), n = k.T, o = K.p;
    try {
      K.p = 32 > a ? 32 : a, k.T = null, a = Ko, Ko = null;
      var u = _a, v = ca;
      if (Fe = 0, Xn = _a = null, ca = 0, (Ce & 6) !== 0) throw Error(r(331));
      var S = Ce;
      if (Ce |= 4, nh(u.current), eh(
        u,
        u.current,
        v,
        a
      ), Ce = S, Gl(0, !1), vt && typeof vt.onPostCommitFiberRoot == "function")
        try {
          vt.onPostCommitFiberRoot(ol, u);
        } catch {
        }
      return !0;
    } finally {
      K.p = o, k.T = n, Sh(e, t);
    }
  }
  function Eh(e, t, a) {
    t = Ot(a, t), t = Co(e.stateNode, t, 2), e = Na(e, t, 2), e !== null && (cl(e, 2), Gt(e));
  }
  function je(e, t, a) {
    if (e.tag === 3)
      Eh(e, e, a);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Eh(
            t,
            e,
            a
          );
          break;
        } else if (t.tag === 1) {
          var n = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof n.componentDidCatch == "function" && (Ma === null || !Ma.has(n))) {
            e = Ot(a, e), a = Ad(2), n = Na(t, a, 2), n !== null && (Cd(
              a,
              n,
              t,
              e
            ), cl(n, 2), Gt(n));
            break;
          }
        }
        t = t.return;
      }
  }
  function Jo(e, t, a) {
    var n = e.pingCache;
    if (n === null) {
      n = e.pingCache = new i1();
      var o = /* @__PURE__ */ new Set();
      n.set(t, o);
    } else
      o = n.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), n.set(t, o));
    o.has(a) || (Vo = !0, o.add(a), e = c1.bind(null, e, t, a), t.then(e, e));
  }
  function c1(e, t, a) {
    var n = e.pingCache;
    n !== null && n.delete(t), e.pingedLanes |= e.suspendedLanes & a, e.warmLanes &= ~a, Le === e && (be & a) === a && (Be === 4 || Be === 3 && (be & 62914560) === be && 300 > yt() - fs ? (Ce & 2) === 0 && Fn(e, 0) : Yo |= a, Kn === be && (Kn = 0)), Gt(e);
  }
  function Ah(e, t) {
    t === 0 && (t = yc()), e = Pa(e, t), e !== null && (cl(e, t), Gt(e));
  }
  function f1(e) {
    var t = e.memoizedState, a = 0;
    t !== null && (a = t.retryLane), Ah(e, a);
  }
  function d1(e, t) {
    var a = 0;
    switch (e.tag) {
      case 31:
      case 13:
        var n = e.stateNode, o = e.memoizedState;
        o !== null && (a = o.retryLane);
        break;
      case 19:
        n = e.stateNode;
        break;
      case 22:
        n = e.stateNode._retryCache;
        break;
      default:
        throw Error(r(314));
    }
    n !== null && n.delete(t), Ah(e, a);
  }
  function h1(e, t) {
    return or(e, t);
  }
  var vs = null, Jn = null, Io = !1, bs = !1, Po = !1, Ua = 0;
  function Gt(e) {
    e !== Jn && e.next === null && (Jn === null ? vs = Jn = e : Jn = Jn.next = e), bs = !0, Io || (Io = !0, p1());
  }
  function Gl(e, t) {
    if (!Po && bs) {
      Po = !0;
      do
        for (var a = !1, n = vs; n !== null; ) {
          if (e !== 0) {
            var o = n.pendingLanes;
            if (o === 0) var u = 0;
            else {
              var v = n.suspendedLanes, S = n.pingedLanes;
              u = (1 << 31 - bt(42 | e) + 1) - 1, u &= o & ~(v & ~S), u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0;
            }
            u !== 0 && (a = !0, jh(n, u));
          } else
            u = be, u = Ei(
              n,
              n === Le ? u : 0,
              n.cancelPendingCommit !== null || n.timeoutHandle !== -1
            ), (u & 3) === 0 || ul(n, u) || (a = !0, jh(n, u));
          n = n.next;
        }
      while (a);
      Po = !1;
    }
  }
  function m1() {
    Ch();
  }
  function Ch() {
    bs = Io = !1;
    var e = 0;
    Ua !== 0 && C1() && (e = Ua);
    for (var t = yt(), a = null, n = vs; n !== null; ) {
      var o = n.next, u = Rh(n, t);
      u === 0 ? (n.next = null, a === null ? vs = o : a.next = o, o === null && (Jn = a)) : (a = n, (e !== 0 || (u & 3) !== 0) && (bs = !0)), n = o;
    }
    Fe !== 0 && Fe !== 5 || Gl(e), Ua !== 0 && (Ua = 0);
  }
  function Rh(e, t) {
    for (var a = e.suspendedLanes, n = e.pingedLanes, o = e.expirationTimes, u = e.pendingLanes & -62914561; 0 < u; ) {
      var v = 31 - bt(u), S = 1 << v, C = o[v];
      C === -1 ? ((S & a) === 0 || (S & n) !== 0) && (o[v] = qg(S, t)) : C <= t && (e.expiredLanes |= S), u &= ~S;
    }
    if (t = Le, a = be, a = Ei(
      e,
      e === t ? a : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), n = e.callbackNode, a === 0 || e === t && (Ne === 2 || Ne === 9) || e.cancelPendingCommit !== null)
      return n !== null && n !== null && ur(n), e.callbackNode = null, e.callbackPriority = 0;
    if ((a & 3) === 0 || ul(e, a)) {
      if (t = a & -a, t === e.callbackPriority) return t;
      switch (n !== null && ur(n), dr(a)) {
        case 2:
        case 8:
          a = pc;
          break;
        case 32:
          a = bi;
          break;
        case 268435456:
          a = gc;
          break;
        default:
          a = bi;
      }
      return n = Nh.bind(null, e), a = or(a, n), e.callbackPriority = t, e.callbackNode = a, t;
    }
    return n !== null && n !== null && ur(n), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function Nh(e, t) {
    if (Fe !== 0 && Fe !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var a = e.callbackNode;
    if (ys() && e.callbackNode !== a)
      return null;
    var n = be;
    return n = Ei(
      e,
      e === Le ? n : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), n === 0 ? null : (oh(e, n, t), Rh(e, yt()), e.callbackNode != null && e.callbackNode === a ? Nh.bind(null, e) : null);
  }
  function jh(e, t) {
    if (ys()) return null;
    oh(e, t, !0);
  }
  function p1() {
    N1(function() {
      (Ce & 6) !== 0 ? or(
        mc,
        m1
      ) : Ch();
    });
  }
  function Wo() {
    if (Ua === 0) {
      var e = Dn;
      e === 0 && (e = xi, xi <<= 1, (xi & 261888) === 0 && (xi = 256)), Ua = e;
    }
    return Ua;
  }
  function Th(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : Ni("" + e);
  }
  function Oh(e, t) {
    var a = t.ownerDocument.createElement("input");
    return a.name = t.name, a.value = t.value, e.id && a.setAttribute("form", e.id), t.parentNode.insertBefore(a, t), e = new FormData(e), a.parentNode.removeChild(a), e;
  }
  function g1(e, t, a, n, o) {
    if (t === "submit" && a && a.stateNode === o) {
      var u = Th(
        (o[ot] || null).action
      ), v = n.submitter;
      v && (t = (t = v[ot] || null) ? Th(t.formAction) : v.getAttribute("formAction"), t !== null && (u = t, v = null));
      var S = new zi(
        "action",
        "action",
        null,
        n,
        o
      );
      e.push({
        event: S,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (n.defaultPrevented) {
                if (Ua !== 0) {
                  var C = v ? Oh(o, v) : new FormData(o);
                  bo(
                    a,
                    {
                      pending: !0,
                      data: C,
                      method: o.method,
                      action: u
                    },
                    null,
                    C
                  );
                }
              } else
                typeof u == "function" && (S.preventDefault(), C = v ? Oh(o, v) : new FormData(o), bo(
                  a,
                  {
                    pending: !0,
                    data: C,
                    method: o.method,
                    action: u
                  },
                  u,
                  C
                ));
            },
            currentTarget: o
          }
        ]
      });
    }
  }
  for (var eu = 0; eu < Dr.length; eu++) {
    var tu = Dr[eu], y1 = tu.toLowerCase(), v1 = tu[0].toUpperCase() + tu.slice(1);
    kt(
      y1,
      "on" + v1
    );
  }
  kt(rf, "onAnimationEnd"), kt(of, "onAnimationIteration"), kt(uf, "onAnimationStart"), kt("dblclick", "onDoubleClick"), kt("focusin", "onFocus"), kt("focusout", "onBlur"), kt(_0, "onTransitionRun"), kt(D0, "onTransitionStart"), kt(U0, "onTransitionCancel"), kt(cf, "onTransitionEnd"), Sn("onMouseEnter", ["mouseout", "mouseover"]), Sn("onMouseLeave", ["mouseout", "mouseover"]), Sn("onPointerEnter", ["pointerout", "pointerover"]), Sn("onPointerLeave", ["pointerout", "pointerover"]), Fa(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), Fa(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), Fa("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Fa(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), Fa(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), Fa(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var Ql = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), b1 = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ql)
  );
  function zh(e, t) {
    t = (t & 4) !== 0;
    for (var a = 0; a < e.length; a++) {
      var n = e[a], o = n.event;
      n = n.listeners;
      e: {
        var u = void 0;
        if (t)
          for (var v = n.length - 1; 0 <= v; v--) {
            var S = n[v], C = S.instance, D = S.currentTarget;
            if (S = S.listener, C !== u && o.isPropagationStopped())
              break e;
            u = S, o.currentTarget = D;
            try {
              u(o);
            } catch (q) {
              _i(q);
            }
            o.currentTarget = null, u = C;
          }
        else
          for (v = 0; v < n.length; v++) {
            if (S = n[v], C = S.instance, D = S.currentTarget, S = S.listener, C !== u && o.isPropagationStopped())
              break e;
            u = S, o.currentTarget = D;
            try {
              u(o);
            } catch (q) {
              _i(q);
            }
            o.currentTarget = null, u = C;
          }
      }
    }
  }
  function ye(e, t) {
    var a = t[hr];
    a === void 0 && (a = t[hr] = /* @__PURE__ */ new Set());
    var n = e + "__bubble";
    a.has(n) || (Lh(t, e, 2, !1), a.add(n));
  }
  function au(e, t, a) {
    var n = 0;
    t && (n |= 4), Lh(
      a,
      e,
      n,
      t
    );
  }
  var xs = "_reactListening" + Math.random().toString(36).slice(2);
  function nu(e) {
    if (!e[xs]) {
      e[xs] = !0, Ac.forEach(function(a) {
        a !== "selectionchange" && (b1.has(a) || au(a, !1, e), au(a, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[xs] || (t[xs] = !0, au("selectionchange", !1, t));
    }
  }
  function Lh(e, t, a, n) {
    switch (rm(t)) {
      case 2:
        var o = X1;
        break;
      case 8:
        o = F1;
        break;
      default:
        o = vu;
    }
    a = o.bind(
      null,
      t,
      a,
      e
    ), o = void 0, !wr || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), n ? o !== void 0 ? e.addEventListener(t, a, {
      capture: !0,
      passive: o
    }) : e.addEventListener(t, a, !0) : o !== void 0 ? e.addEventListener(t, a, {
      passive: o
    }) : e.addEventListener(t, a, !1);
  }
  function lu(e, t, a, n, o) {
    var u = n;
    if ((t & 1) === 0 && (t & 2) === 0 && n !== null)
      e: for (; ; ) {
        if (n === null) return;
        var v = n.tag;
        if (v === 3 || v === 4) {
          var S = n.stateNode.containerInfo;
          if (S === o) break;
          if (v === 4)
            for (v = n.return; v !== null; ) {
              var C = v.tag;
              if ((C === 3 || C === 4) && v.stateNode.containerInfo === o)
                return;
              v = v.return;
            }
          for (; S !== null; ) {
            if (v = vn(S), v === null) return;
            if (C = v.tag, C === 5 || C === 6 || C === 26 || C === 27) {
              n = u = v;
              continue e;
            }
            S = S.parentNode;
          }
        }
        n = n.return;
      }
    Uc(function() {
      var D = u, q = xr(a), G = [];
      e: {
        var U = ff.get(e);
        if (U !== void 0) {
          var B = zi, ee = e;
          switch (e) {
            case "keypress":
              if (Ti(a) === 0) break e;
            case "keydown":
            case "keyup":
              B = d0;
              break;
            case "focusin":
              ee = "focus", B = Rr;
              break;
            case "focusout":
              ee = "blur", B = Rr;
              break;
            case "beforeblur":
            case "afterblur":
              B = Rr;
              break;
            case "click":
              if (a.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              B = Bc;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              B = e0;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              B = p0;
              break;
            case rf:
            case of:
            case uf:
              B = n0;
              break;
            case cf:
              B = y0;
              break;
            case "scroll":
            case "scrollend":
              B = Pg;
              break;
            case "wheel":
              B = b0;
              break;
            case "copy":
            case "cut":
            case "paste":
              B = i0;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              B = qc;
              break;
            case "toggle":
            case "beforetoggle":
              B = S0;
          }
          var ie = (t & 4) !== 0, ze = !ie && (e === "scroll" || e === "scrollend"), L = ie ? U !== null ? U + "Capture" : null : U;
          ie = [];
          for (var T = D, _; T !== null; ) {
            var Y = T;
            if (_ = Y.stateNode, Y = Y.tag, Y !== 5 && Y !== 26 && Y !== 27 || _ === null || L === null || (Y = hl(T, L), Y != null && ie.push(
              Kl(T, Y, _)
            )), ze) break;
            T = T.return;
          }
          0 < ie.length && (U = new B(
            U,
            ee,
            null,
            a,
            q
          ), G.push({ event: U, listeners: ie }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (U = e === "mouseover" || e === "pointerover", B = e === "mouseout" || e === "pointerout", U && a !== br && (ee = a.relatedTarget || a.fromElement) && (vn(ee) || ee[yn]))
            break e;
          if ((B || U) && (U = q.window === q ? q : (U = q.ownerDocument) ? U.defaultView || U.parentWindow : window, B ? (ee = a.relatedTarget || a.toElement, B = D, ee = ee ? vn(ee) : null, ee !== null && (ze = f(ee), ie = ee.tag, ee !== ze || ie !== 5 && ie !== 27 && ie !== 6) && (ee = null)) : (B = null, ee = D), B !== ee)) {
            if (ie = Bc, Y = "onMouseLeave", L = "onMouseEnter", T = "mouse", (e === "pointerout" || e === "pointerover") && (ie = qc, Y = "onPointerLeave", L = "onPointerEnter", T = "pointer"), ze = B == null ? U : dl(B), _ = ee == null ? U : dl(ee), U = new ie(
              Y,
              T + "leave",
              B,
              a,
              q
            ), U.target = ze, U.relatedTarget = _, Y = null, vn(q) === D && (ie = new ie(
              L,
              T + "enter",
              ee,
              a,
              q
            ), ie.target = _, ie.relatedTarget = ze, Y = ie), ze = Y, B && ee)
              t: {
                for (ie = x1, L = B, T = ee, _ = 0, Y = L; Y; Y = ie(Y))
                  _++;
                Y = 0;
                for (var ne = T; ne; ne = ie(ne))
                  Y++;
                for (; 0 < _ - Y; )
                  L = ie(L), _--;
                for (; 0 < Y - _; )
                  T = ie(T), Y--;
                for (; _--; ) {
                  if (L === T || T !== null && L === T.alternate) {
                    ie = L;
                    break t;
                  }
                  L = ie(L), T = ie(T);
                }
                ie = null;
              }
            else ie = null;
            B !== null && Mh(
              G,
              U,
              B,
              ie,
              !1
            ), ee !== null && ze !== null && Mh(
              G,
              ze,
              ee,
              ie,
              !0
            );
          }
        }
        e: {
          if (U = D ? dl(D) : window, B = U.nodeName && U.nodeName.toLowerCase(), B === "select" || B === "input" && U.type === "file")
            var Ee = Zc;
          else if (Xc(U))
            if (Jc)
              Ee = z0;
            else {
              Ee = T0;
              var ae = j0;
            }
          else
            B = U.nodeName, !B || B.toLowerCase() !== "input" || U.type !== "checkbox" && U.type !== "radio" ? D && vr(D.elementType) && (Ee = Zc) : Ee = O0;
          if (Ee && (Ee = Ee(e, D))) {
            Fc(
              G,
              Ee,
              a,
              q
            );
            break e;
          }
          ae && ae(e, U, D), e === "focusout" && D && U.type === "number" && D.memoizedProps.value != null && yr(U, "number", U.value);
        }
        switch (ae = D ? dl(D) : window, e) {
          case "focusin":
            (Xc(ae) || ae.contentEditable === "true") && (Nn = ae, Lr = D, Sl = null);
            break;
          case "focusout":
            Sl = Lr = Nn = null;
            break;
          case "mousedown":
            Mr = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Mr = !1, lf(G, a, q);
            break;
          case "selectionchange":
            if (M0) break;
          case "keydown":
          case "keyup":
            lf(G, a, q);
        }
        var me;
        if (jr)
          e: {
            switch (e) {
              case "compositionstart":
                var xe = "onCompositionStart";
                break e;
              case "compositionend":
                xe = "onCompositionEnd";
                break e;
              case "compositionupdate":
                xe = "onCompositionUpdate";
                break e;
            }
            xe = void 0;
          }
        else
          Rn ? Qc(e, a) && (xe = "onCompositionEnd") : e === "keydown" && a.keyCode === 229 && (xe = "onCompositionStart");
        xe && (Vc && a.locale !== "ko" && (Rn || xe !== "onCompositionStart" ? xe === "onCompositionEnd" && Rn && (me = $c()) : (xa = q, Er = "value" in xa ? xa.value : xa.textContent, Rn = !0)), ae = Ss(D, xe), 0 < ae.length && (xe = new Hc(
          xe,
          e,
          null,
          a,
          q
        ), G.push({ event: xe, listeners: ae }), me ? xe.data = me : (me = Kc(a), me !== null && (xe.data = me)))), (me = E0 ? A0(e, a) : C0(e, a)) && (xe = Ss(D, "onBeforeInput"), 0 < xe.length && (ae = new Hc(
          "onBeforeInput",
          "beforeinput",
          null,
          a,
          q
        ), G.push({
          event: ae,
          listeners: xe
        }), ae.data = me)), g1(
          G,
          e,
          D,
          a,
          q
        );
      }
      zh(G, t);
    });
  }
  function Kl(e, t, a) {
    return {
      instance: e,
      listener: t,
      currentTarget: a
    };
  }
  function Ss(e, t) {
    for (var a = t + "Capture", n = []; e !== null; ) {
      var o = e, u = o.stateNode;
      if (o = o.tag, o !== 5 && o !== 26 && o !== 27 || u === null || (o = hl(e, a), o != null && n.unshift(
        Kl(e, o, u)
      ), o = hl(e, t), o != null && n.push(
        Kl(e, o, u)
      )), e.tag === 3) return n;
      e = e.return;
    }
    return [];
  }
  function x1(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function Mh(e, t, a, n, o) {
    for (var u = t._reactName, v = []; a !== null && a !== n; ) {
      var S = a, C = S.alternate, D = S.stateNode;
      if (S = S.tag, C !== null && C === n) break;
      S !== 5 && S !== 26 && S !== 27 || D === null || (C = D, o ? (D = hl(a, u), D != null && v.unshift(
        Kl(a, D, C)
      )) : o || (D = hl(a, u), D != null && v.push(
        Kl(a, D, C)
      ))), a = a.return;
    }
    v.length !== 0 && e.push({ event: t, listeners: v });
  }
  var S1 = /\r\n?/g, w1 = /\u0000|\uFFFD/g;
  function _h(e) {
    return (typeof e == "string" ? e : "" + e).replace(S1, `
`).replace(w1, "");
  }
  function Dh(e, t) {
    return t = _h(t), _h(e) === t;
  }
  function Oe(e, t, a, n, o, u) {
    switch (a) {
      case "children":
        typeof n == "string" ? t === "body" || t === "textarea" && n === "" || En(e, n) : (typeof n == "number" || typeof n == "bigint") && t !== "body" && En(e, "" + n);
        break;
      case "className":
        Ci(e, "class", n);
        break;
      case "tabIndex":
        Ci(e, "tabindex", n);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Ci(e, a, n);
        break;
      case "style":
        _c(e, n, u);
        break;
      case "data":
        if (t !== "object") {
          Ci(e, "data", n);
          break;
        }
      case "src":
      case "href":
        if (n === "" && (t !== "a" || a !== "href")) {
          e.removeAttribute(a);
          break;
        }
        if (n == null || typeof n == "function" || typeof n == "symbol" || typeof n == "boolean") {
          e.removeAttribute(a);
          break;
        }
        n = Ni("" + n), e.setAttribute(a, n);
        break;
      case "action":
      case "formAction":
        if (typeof n == "function") {
          e.setAttribute(
            a,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof u == "function" && (a === "formAction" ? (t !== "input" && Oe(e, t, "name", o.name, o, null), Oe(
            e,
            t,
            "formEncType",
            o.formEncType,
            o,
            null
          ), Oe(
            e,
            t,
            "formMethod",
            o.formMethod,
            o,
            null
          ), Oe(
            e,
            t,
            "formTarget",
            o.formTarget,
            o,
            null
          )) : (Oe(e, t, "encType", o.encType, o, null), Oe(e, t, "method", o.method, o, null), Oe(e, t, "target", o.target, o, null)));
        if (n == null || typeof n == "symbol" || typeof n == "boolean") {
          e.removeAttribute(a);
          break;
        }
        n = Ni("" + n), e.setAttribute(a, n);
        break;
      case "onClick":
        n != null && (e.onclick = Zt);
        break;
      case "onScroll":
        n != null && ye("scroll", e);
        break;
      case "onScrollEnd":
        n != null && ye("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (n != null) {
          if (typeof n != "object" || !("__html" in n))
            throw Error(r(61));
          if (a = n.__html, a != null) {
            if (o.children != null) throw Error(r(60));
            e.innerHTML = a;
          }
        }
        break;
      case "multiple":
        e.multiple = n && typeof n != "function" && typeof n != "symbol";
        break;
      case "muted":
        e.muted = n && typeof n != "function" && typeof n != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (n == null || typeof n == "function" || typeof n == "boolean" || typeof n == "symbol") {
          e.removeAttribute("xlink:href");
          break;
        }
        a = Ni("" + n), e.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          a
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        n != null && typeof n != "function" && typeof n != "symbol" ? e.setAttribute(a, "" + n) : e.removeAttribute(a);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        n && typeof n != "function" && typeof n != "symbol" ? e.setAttribute(a, "") : e.removeAttribute(a);
        break;
      case "capture":
      case "download":
        n === !0 ? e.setAttribute(a, "") : n !== !1 && n != null && typeof n != "function" && typeof n != "symbol" ? e.setAttribute(a, n) : e.removeAttribute(a);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        n != null && typeof n != "function" && typeof n != "symbol" && !isNaN(n) && 1 <= n ? e.setAttribute(a, n) : e.removeAttribute(a);
        break;
      case "rowSpan":
      case "start":
        n == null || typeof n == "function" || typeof n == "symbol" || isNaN(n) ? e.removeAttribute(a) : e.setAttribute(a, n);
        break;
      case "popover":
        ye("beforetoggle", e), ye("toggle", e), Ai(e, "popover", n);
        break;
      case "xlinkActuate":
        Ft(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          n
        );
        break;
      case "xlinkArcrole":
        Ft(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          n
        );
        break;
      case "xlinkRole":
        Ft(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          n
        );
        break;
      case "xlinkShow":
        Ft(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          n
        );
        break;
      case "xlinkTitle":
        Ft(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          n
        );
        break;
      case "xlinkType":
        Ft(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          n
        );
        break;
      case "xmlBase":
        Ft(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          n
        );
        break;
      case "xmlLang":
        Ft(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          n
        );
        break;
      case "xmlSpace":
        Ft(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          n
        );
        break;
      case "is":
        Ai(e, "is", n);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (a = Jg.get(a) || a, Ai(e, a, n));
    }
  }
  function iu(e, t, a, n, o, u) {
    switch (a) {
      case "style":
        _c(e, n, u);
        break;
      case "dangerouslySetInnerHTML":
        if (n != null) {
          if (typeof n != "object" || !("__html" in n))
            throw Error(r(61));
          if (a = n.__html, a != null) {
            if (o.children != null) throw Error(r(60));
            e.innerHTML = a;
          }
        }
        break;
      case "children":
        typeof n == "string" ? En(e, n) : (typeof n == "number" || typeof n == "bigint") && En(e, "" + n);
        break;
      case "onScroll":
        n != null && ye("scroll", e);
        break;
      case "onScrollEnd":
        n != null && ye("scrollend", e);
        break;
      case "onClick":
        n != null && (e.onclick = Zt);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Cc.hasOwnProperty(a))
          e: {
            if (a[0] === "o" && a[1] === "n" && (o = a.endsWith("Capture"), t = a.slice(2, o ? a.length - 7 : void 0), u = e[ot] || null, u = u != null ? u[a] : null, typeof u == "function" && e.removeEventListener(t, u, o), typeof n == "function")) {
              typeof u != "function" && u !== null && (a in e ? e[a] = null : e.hasAttribute(a) && e.removeAttribute(a)), e.addEventListener(t, n, o);
              break e;
            }
            a in e ? e[a] = n : n === !0 ? e.setAttribute(a, "") : Ai(e, a, n);
          }
    }
  }
  function nt(e, t, a) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        ye("error", e), ye("load", e);
        var n = !1, o = !1, u;
        for (u in a)
          if (a.hasOwnProperty(u)) {
            var v = a[u];
            if (v != null)
              switch (u) {
                case "src":
                  n = !0;
                  break;
                case "srcSet":
                  o = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(r(137, t));
                default:
                  Oe(e, t, u, v, a, null);
              }
          }
        o && Oe(e, t, "srcSet", a.srcSet, a, null), n && Oe(e, t, "src", a.src, a, null);
        return;
      case "input":
        ye("invalid", e);
        var S = u = v = o = null, C = null, D = null;
        for (n in a)
          if (a.hasOwnProperty(n)) {
            var q = a[n];
            if (q != null)
              switch (n) {
                case "name":
                  o = q;
                  break;
                case "type":
                  v = q;
                  break;
                case "checked":
                  C = q;
                  break;
                case "defaultChecked":
                  D = q;
                  break;
                case "value":
                  u = q;
                  break;
                case "defaultValue":
                  S = q;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (q != null)
                    throw Error(r(137, t));
                  break;
                default:
                  Oe(e, t, n, q, a, null);
              }
          }
        Oc(
          e,
          u,
          S,
          C,
          D,
          v,
          o,
          !1
        );
        return;
      case "select":
        ye("invalid", e), n = v = u = null;
        for (o in a)
          if (a.hasOwnProperty(o) && (S = a[o], S != null))
            switch (o) {
              case "value":
                u = S;
                break;
              case "defaultValue":
                v = S;
                break;
              case "multiple":
                n = S;
              default:
                Oe(e, t, o, S, a, null);
            }
        t = u, a = v, e.multiple = !!n, t != null ? wn(e, !!n, t, !1) : a != null && wn(e, !!n, a, !0);
        return;
      case "textarea":
        ye("invalid", e), u = o = n = null;
        for (v in a)
          if (a.hasOwnProperty(v) && (S = a[v], S != null))
            switch (v) {
              case "value":
                n = S;
                break;
              case "defaultValue":
                o = S;
                break;
              case "children":
                u = S;
                break;
              case "dangerouslySetInnerHTML":
                if (S != null) throw Error(r(91));
                break;
              default:
                Oe(e, t, v, S, a, null);
            }
        Lc(e, n, o, u);
        return;
      case "option":
        for (C in a)
          a.hasOwnProperty(C) && (n = a[C], n != null) && (C === "selected" ? e.selected = n && typeof n != "function" && typeof n != "symbol" : Oe(e, t, C, n, a, null));
        return;
      case "dialog":
        ye("beforetoggle", e), ye("toggle", e), ye("cancel", e), ye("close", e);
        break;
      case "iframe":
      case "object":
        ye("load", e);
        break;
      case "video":
      case "audio":
        for (n = 0; n < Ql.length; n++)
          ye(Ql[n], e);
        break;
      case "image":
        ye("error", e), ye("load", e);
        break;
      case "details":
        ye("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        ye("error", e), ye("load", e);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (D in a)
          if (a.hasOwnProperty(D) && (n = a[D], n != null))
            switch (D) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(r(137, t));
              default:
                Oe(e, t, D, n, a, null);
            }
        return;
      default:
        if (vr(t)) {
          for (q in a)
            a.hasOwnProperty(q) && (n = a[q], n !== void 0 && iu(
              e,
              t,
              q,
              n,
              a,
              void 0
            ));
          return;
        }
    }
    for (S in a)
      a.hasOwnProperty(S) && (n = a[S], n != null && Oe(e, t, S, n, a, null));
  }
  function E1(e, t, a, n) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var o = null, u = null, v = null, S = null, C = null, D = null, q = null;
        for (B in a) {
          var G = a[B];
          if (a.hasOwnProperty(B) && G != null)
            switch (B) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                C = G;
              default:
                n.hasOwnProperty(B) || Oe(e, t, B, null, n, G);
            }
        }
        for (var U in n) {
          var B = n[U];
          if (G = a[U], n.hasOwnProperty(U) && (B != null || G != null))
            switch (U) {
              case "type":
                u = B;
                break;
              case "name":
                o = B;
                break;
              case "checked":
                D = B;
                break;
              case "defaultChecked":
                q = B;
                break;
              case "value":
                v = B;
                break;
              case "defaultValue":
                S = B;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (B != null)
                  throw Error(r(137, t));
                break;
              default:
                B !== G && Oe(
                  e,
                  t,
                  U,
                  B,
                  n,
                  G
                );
            }
        }
        gr(
          e,
          v,
          S,
          C,
          D,
          q,
          u,
          o
        );
        return;
      case "select":
        B = v = S = U = null;
        for (u in a)
          if (C = a[u], a.hasOwnProperty(u) && C != null)
            switch (u) {
              case "value":
                break;
              case "multiple":
                B = C;
              default:
                n.hasOwnProperty(u) || Oe(
                  e,
                  t,
                  u,
                  null,
                  n,
                  C
                );
            }
        for (o in n)
          if (u = n[o], C = a[o], n.hasOwnProperty(o) && (u != null || C != null))
            switch (o) {
              case "value":
                U = u;
                break;
              case "defaultValue":
                S = u;
                break;
              case "multiple":
                v = u;
              default:
                u !== C && Oe(
                  e,
                  t,
                  o,
                  u,
                  n,
                  C
                );
            }
        t = S, a = v, n = B, U != null ? wn(e, !!a, U, !1) : !!n != !!a && (t != null ? wn(e, !!a, t, !0) : wn(e, !!a, a ? [] : "", !1));
        return;
      case "textarea":
        B = U = null;
        for (S in a)
          if (o = a[S], a.hasOwnProperty(S) && o != null && !n.hasOwnProperty(S))
            switch (S) {
              case "value":
                break;
              case "children":
                break;
              default:
                Oe(e, t, S, null, n, o);
            }
        for (v in n)
          if (o = n[v], u = a[v], n.hasOwnProperty(v) && (o != null || u != null))
            switch (v) {
              case "value":
                U = o;
                break;
              case "defaultValue":
                B = o;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (o != null) throw Error(r(91));
                break;
              default:
                o !== u && Oe(e, t, v, o, n, u);
            }
        zc(e, U, B);
        return;
      case "option":
        for (var ee in a)
          U = a[ee], a.hasOwnProperty(ee) && U != null && !n.hasOwnProperty(ee) && (ee === "selected" ? e.selected = !1 : Oe(
            e,
            t,
            ee,
            null,
            n,
            U
          ));
        for (C in n)
          U = n[C], B = a[C], n.hasOwnProperty(C) && U !== B && (U != null || B != null) && (C === "selected" ? e.selected = U && typeof U != "function" && typeof U != "symbol" : Oe(
            e,
            t,
            C,
            U,
            n,
            B
          ));
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var ie in a)
          U = a[ie], a.hasOwnProperty(ie) && U != null && !n.hasOwnProperty(ie) && Oe(e, t, ie, null, n, U);
        for (D in n)
          if (U = n[D], B = a[D], n.hasOwnProperty(D) && U !== B && (U != null || B != null))
            switch (D) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (U != null)
                  throw Error(r(137, t));
                break;
              default:
                Oe(
                  e,
                  t,
                  D,
                  U,
                  n,
                  B
                );
            }
        return;
      default:
        if (vr(t)) {
          for (var ze in a)
            U = a[ze], a.hasOwnProperty(ze) && U !== void 0 && !n.hasOwnProperty(ze) && iu(
              e,
              t,
              ze,
              void 0,
              n,
              U
            );
          for (q in n)
            U = n[q], B = a[q], !n.hasOwnProperty(q) || U === B || U === void 0 && B === void 0 || iu(
              e,
              t,
              q,
              U,
              n,
              B
            );
          return;
        }
    }
    for (var L in a)
      U = a[L], a.hasOwnProperty(L) && U != null && !n.hasOwnProperty(L) && Oe(e, t, L, null, n, U);
    for (G in n)
      U = n[G], B = a[G], !n.hasOwnProperty(G) || U === B || U == null && B == null || Oe(e, t, G, U, n, B);
  }
  function Uh(e) {
    switch (e) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function A1() {
    if (typeof performance.getEntriesByType == "function") {
      for (var e = 0, t = 0, a = performance.getEntriesByType("resource"), n = 0; n < a.length; n++) {
        var o = a[n], u = o.transferSize, v = o.initiatorType, S = o.duration;
        if (u && S && Uh(v)) {
          for (v = 0, S = o.responseEnd, n += 1; n < a.length; n++) {
            var C = a[n], D = C.startTime;
            if (D > S) break;
            var q = C.transferSize, G = C.initiatorType;
            q && Uh(G) && (C = C.responseEnd, v += q * (C < S ? 1 : (S - D) / (C - D)));
          }
          if (--n, t += 8 * (u + v) / (o.duration / 1e3), e++, 10 < e) break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
  }
  var su = null, ru = null;
  function ws(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function $h(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function kh(e, t) {
    if (e === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return e === 1 && t === "foreignObject" ? 0 : e;
  }
  function ou(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var uu = null;
  function C1() {
    var e = window.event;
    return e && e.type === "popstate" ? e === uu ? !1 : (uu = e, !0) : (uu = null, !1);
  }
  var Bh = typeof setTimeout == "function" ? setTimeout : void 0, R1 = typeof clearTimeout == "function" ? clearTimeout : void 0, Hh = typeof Promise == "function" ? Promise : void 0, N1 = typeof queueMicrotask == "function" ? queueMicrotask : typeof Hh < "u" ? function(e) {
    return Hh.resolve(null).then(e).catch(j1);
  } : Bh;
  function j1(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function $a(e) {
    return e === "head";
  }
  function qh(e, t) {
    var a = t, n = 0;
    do {
      var o = a.nextSibling;
      if (e.removeChild(a), o && o.nodeType === 8)
        if (a = o.data, a === "/$" || a === "/&") {
          if (n === 0) {
            e.removeChild(o), el(t);
            return;
          }
          n--;
        } else if (a === "$" || a === "$?" || a === "$~" || a === "$!" || a === "&")
          n++;
        else if (a === "html")
          Xl(e.ownerDocument.documentElement);
        else if (a === "head") {
          a = e.ownerDocument.head, Xl(a);
          for (var u = a.firstChild; u; ) {
            var v = u.nextSibling, S = u.nodeName;
            u[fl] || S === "SCRIPT" || S === "STYLE" || S === "LINK" && u.rel.toLowerCase() === "stylesheet" || a.removeChild(u), u = v;
          }
        } else
          a === "body" && Xl(e.ownerDocument.body);
      a = o;
    } while (a);
    el(t);
  }
  function Vh(e, t) {
    var a = e;
    e = 0;
    do {
      var n = a.nextSibling;
      if (a.nodeType === 1 ? t ? (a._stashedDisplay = a.style.display, a.style.display = "none") : (a.style.display = a._stashedDisplay || "", a.getAttribute("style") === "" && a.removeAttribute("style")) : a.nodeType === 3 && (t ? (a._stashedText = a.nodeValue, a.nodeValue = "") : a.nodeValue = a._stashedText || ""), n && n.nodeType === 8)
        if (a = n.data, a === "/$") {
          if (e === 0) break;
          e--;
        } else
          a !== "$" && a !== "$?" && a !== "$~" && a !== "$!" || e++;
      a = n;
    } while (a);
  }
  function cu(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var a = t;
      switch (t = t.nextSibling, a.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          cu(a), mr(a);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (a.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(a);
    }
  }
  function T1(e, t, a, n) {
    for (; e.nodeType === 1; ) {
      var o = a;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!n && (e.nodeName !== "INPUT" || e.type !== "hidden"))
          break;
      } else if (n) {
        if (!e[fl])
          switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (u = e.getAttribute("rel"), u === "stylesheet" && e.hasAttribute("data-precedence"))
                break;
              if (u !== o.rel || e.getAttribute("href") !== (o.href == null || o.href === "" ? null : o.href) || e.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin) || e.getAttribute("title") !== (o.title == null ? null : o.title))
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (u = e.getAttribute("src"), (u !== (o.src == null ? null : o.src) || e.getAttribute("type") !== (o.type == null ? null : o.type) || e.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin)) && u && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var u = o.name == null ? null : "" + o.name;
        if (o.type === "hidden" && e.getAttribute("name") === u)
          return e;
      } else return e;
      if (e = Dt(e.nextSibling), e === null) break;
    }
    return null;
  }
  function O1(e, t, a) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !a || (e = Dt(e.nextSibling), e === null)) return null;
    return e;
  }
  function Yh(e, t) {
    for (; e.nodeType !== 8; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = Dt(e.nextSibling), e === null)) return null;
    return e;
  }
  function fu(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function du(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
  }
  function z1(e, t) {
    var a = e.ownerDocument;
    if (e.data === "$~") e._reactRetry = t;
    else if (e.data !== "$?" || a.readyState !== "loading")
      t();
    else {
      var n = function() {
        t(), a.removeEventListener("DOMContentLoaded", n);
      };
      a.addEventListener("DOMContentLoaded", n), e._reactRetry = n;
    }
  }
  function Dt(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = e.data, t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&" || t === "F!" || t === "F")
          break;
        if (t === "/$" || t === "/&") return null;
      }
    }
    return e;
  }
  var hu = null;
  function Gh(e) {
    e = e.nextSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var a = e.data;
        if (a === "/$" || a === "/&") {
          if (t === 0)
            return Dt(e.nextSibling);
          t--;
        } else
          a !== "$" && a !== "$!" && a !== "$?" && a !== "$~" && a !== "&" || t++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function Qh(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var a = e.data;
        if (a === "$" || a === "$!" || a === "$?" || a === "$~" || a === "&") {
          if (t === 0) return e;
          t--;
        } else a !== "/$" && a !== "/&" || t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function Kh(e, t, a) {
    switch (t = ws(a), e) {
      case "html":
        if (e = t.documentElement, !e) throw Error(r(452));
        return e;
      case "head":
        if (e = t.head, !e) throw Error(r(453));
        return e;
      case "body":
        if (e = t.body, !e) throw Error(r(454));
        return e;
      default:
        throw Error(r(451));
    }
  }
  function Xl(e) {
    for (var t = e.attributes; t.length; )
      e.removeAttributeNode(t[0]);
    mr(e);
  }
  var Ut = /* @__PURE__ */ new Map(), Xh = /* @__PURE__ */ new Set();
  function Es(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var fa = K.d;
  K.d = {
    f: L1,
    r: M1,
    D: _1,
    C: D1,
    L: U1,
    m: $1,
    X: B1,
    S: k1,
    M: H1
  };
  function L1() {
    var e = fa.f(), t = ms();
    return e || t;
  }
  function M1(e) {
    var t = bn(e);
    t !== null && t.tag === 5 && t.type === "form" ? cd(t) : fa.r(e);
  }
  var In = typeof document > "u" ? null : document;
  function Fh(e, t, a) {
    var n = In;
    if (n && typeof t == "string" && t) {
      var o = jt(t);
      o = 'link[rel="' + e + '"][href="' + o + '"]', typeof a == "string" && (o += '[crossorigin="' + a + '"]'), Xh.has(o) || (Xh.add(o), e = { rel: e, crossOrigin: a, href: t }, n.querySelector(o) === null && (t = n.createElement("link"), nt(t, "link", e), Je(t), n.head.appendChild(t)));
    }
  }
  function _1(e) {
    fa.D(e), Fh("dns-prefetch", e, null);
  }
  function D1(e, t) {
    fa.C(e, t), Fh("preconnect", e, t);
  }
  function U1(e, t, a) {
    fa.L(e, t, a);
    var n = In;
    if (n && e && t) {
      var o = 'link[rel="preload"][as="' + jt(t) + '"]';
      t === "image" && a && a.imageSrcSet ? (o += '[imagesrcset="' + jt(
        a.imageSrcSet
      ) + '"]', typeof a.imageSizes == "string" && (o += '[imagesizes="' + jt(
        a.imageSizes
      ) + '"]')) : o += '[href="' + jt(e) + '"]';
      var u = o;
      switch (t) {
        case "style":
          u = Pn(e);
          break;
        case "script":
          u = Wn(e);
      }
      Ut.has(u) || (e = y(
        {
          rel: "preload",
          href: t === "image" && a && a.imageSrcSet ? void 0 : e,
          as: t
        },
        a
      ), Ut.set(u, e), n.querySelector(o) !== null || t === "style" && n.querySelector(Fl(u)) || t === "script" && n.querySelector(Zl(u)) || (t = n.createElement("link"), nt(t, "link", e), Je(t), n.head.appendChild(t)));
    }
  }
  function $1(e, t) {
    fa.m(e, t);
    var a = In;
    if (a && e) {
      var n = t && typeof t.as == "string" ? t.as : "script", o = 'link[rel="modulepreload"][as="' + jt(n) + '"][href="' + jt(e) + '"]', u = o;
      switch (n) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = Wn(e);
      }
      if (!Ut.has(u) && (e = y({ rel: "modulepreload", href: e }, t), Ut.set(u, e), a.querySelector(o) === null)) {
        switch (n) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(Zl(u)))
              return;
        }
        n = a.createElement("link"), nt(n, "link", e), Je(n), a.head.appendChild(n);
      }
    }
  }
  function k1(e, t, a) {
    fa.S(e, t, a);
    var n = In;
    if (n && e) {
      var o = xn(n).hoistableStyles, u = Pn(e);
      t = t || "default";
      var v = o.get(u);
      if (!v) {
        var S = { loading: 0, preload: null };
        if (v = n.querySelector(
          Fl(u)
        ))
          S.loading = 5;
        else {
          e = y(
            { rel: "stylesheet", href: e, "data-precedence": t },
            a
          ), (a = Ut.get(u)) && mu(e, a);
          var C = v = n.createElement("link");
          Je(C), nt(C, "link", e), C._p = new Promise(function(D, q) {
            C.onload = D, C.onerror = q;
          }), C.addEventListener("load", function() {
            S.loading |= 1;
          }), C.addEventListener("error", function() {
            S.loading |= 2;
          }), S.loading |= 4, As(v, t, n);
        }
        v = {
          type: "stylesheet",
          instance: v,
          count: 1,
          state: S
        }, o.set(u, v);
      }
    }
  }
  function B1(e, t) {
    fa.X(e, t);
    var a = In;
    if (a && e) {
      var n = xn(a).hoistableScripts, o = Wn(e), u = n.get(o);
      u || (u = a.querySelector(Zl(o)), u || (e = y({ src: e, async: !0 }, t), (t = Ut.get(o)) && pu(e, t), u = a.createElement("script"), Je(u), nt(u, "link", e), a.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, n.set(o, u));
    }
  }
  function H1(e, t) {
    fa.M(e, t);
    var a = In;
    if (a && e) {
      var n = xn(a).hoistableScripts, o = Wn(e), u = n.get(o);
      u || (u = a.querySelector(Zl(o)), u || (e = y({ src: e, async: !0, type: "module" }, t), (t = Ut.get(o)) && pu(e, t), u = a.createElement("script"), Je(u), nt(u, "link", e), a.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, n.set(o, u));
    }
  }
  function Zh(e, t, a, n) {
    var o = (o = pe.current) ? Es(o) : null;
    if (!o) throw Error(r(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string" ? (t = Pn(a.href), a = xn(
          o
        ).hoistableStyles, n = a.get(t), n || (n = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, a.set(t, n)), n) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
          e = Pn(a.href);
          var u = xn(
            o
          ).hoistableStyles, v = u.get(e);
          if (v || (o = o.ownerDocument || o, v = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, u.set(e, v), (u = o.querySelector(
            Fl(e)
          )) && !u._p && (v.instance = u, v.state.loading = 5), Ut.has(e) || (a = {
            rel: "preload",
            as: "style",
            href: a.href,
            crossOrigin: a.crossOrigin,
            integrity: a.integrity,
            media: a.media,
            hrefLang: a.hrefLang,
            referrerPolicy: a.referrerPolicy
          }, Ut.set(e, a), u || q1(
            o,
            e,
            a,
            v.state
          ))), t && n === null)
            throw Error(r(528, ""));
          return v;
        }
        if (t && n !== null)
          throw Error(r(529, ""));
        return null;
      case "script":
        return t = a.async, a = a.src, typeof a == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Wn(a), a = xn(
          o
        ).hoistableScripts, n = a.get(t), n || (n = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, a.set(t, n)), n) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(r(444, e));
    }
  }
  function Pn(e) {
    return 'href="' + jt(e) + '"';
  }
  function Fl(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Jh(e) {
    return y({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function q1(e, t, a, n) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? n.loading = 1 : (t = e.createElement("link"), n.preload = t, t.addEventListener("load", function() {
      return n.loading |= 1;
    }), t.addEventListener("error", function() {
      return n.loading |= 2;
    }), nt(t, "link", a), Je(t), e.head.appendChild(t));
  }
  function Wn(e) {
    return '[src="' + jt(e) + '"]';
  }
  function Zl(e) {
    return "script[async]" + e;
  }
  function Ih(e, t, a) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var n = e.querySelector(
            'style[data-href~="' + jt(a.href) + '"]'
          );
          if (n)
            return t.instance = n, Je(n), n;
          var o = y({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null
          });
          return n = (e.ownerDocument || e).createElement(
            "style"
          ), Je(n), nt(n, "style", o), As(n, a.precedence, e), t.instance = n;
        case "stylesheet":
          o = Pn(a.href);
          var u = e.querySelector(
            Fl(o)
          );
          if (u)
            return t.state.loading |= 4, t.instance = u, Je(u), u;
          n = Jh(a), (o = Ut.get(o)) && mu(n, o), u = (e.ownerDocument || e).createElement("link"), Je(u);
          var v = u;
          return v._p = new Promise(function(S, C) {
            v.onload = S, v.onerror = C;
          }), nt(u, "link", n), t.state.loading |= 4, As(u, a.precedence, e), t.instance = u;
        case "script":
          return u = Wn(a.src), (o = e.querySelector(
            Zl(u)
          )) ? (t.instance = o, Je(o), o) : (n = a, (o = Ut.get(u)) && (n = y({}, a), pu(n, o)), e = e.ownerDocument || e, o = e.createElement("script"), Je(o), nt(o, "link", n), e.head.appendChild(o), t.instance = o);
        case "void":
          return null;
        default:
          throw Error(r(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (n = t.instance, t.state.loading |= 4, As(n, a.precedence, e));
    return t.instance;
  }
  function As(e, t, a) {
    for (var n = a.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), o = n.length ? n[n.length - 1] : null, u = o, v = 0; v < n.length; v++) {
      var S = n[v];
      if (S.dataset.precedence === t) u = S;
      else if (u !== o) break;
    }
    u ? u.parentNode.insertBefore(e, u.nextSibling) : (t = a.nodeType === 9 ? a.head : a, t.insertBefore(e, t.firstChild));
  }
  function mu(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
  }
  function pu(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
  }
  var Cs = null;
  function Ph(e, t, a) {
    if (Cs === null) {
      var n = /* @__PURE__ */ new Map(), o = Cs = /* @__PURE__ */ new Map();
      o.set(a, n);
    } else
      o = Cs, n = o.get(a), n || (n = /* @__PURE__ */ new Map(), o.set(a, n));
    if (n.has(e)) return n;
    for (n.set(e, null), a = a.getElementsByTagName(e), o = 0; o < a.length; o++) {
      var u = a[o];
      if (!(u[fl] || u[We] || e === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
        var v = u.getAttribute(t) || "";
        v = e + v;
        var S = n.get(v);
        S ? S.push(u) : n.set(v, [u]);
      }
    }
    return n;
  }
  function Wh(e, t, a) {
    e = e.ownerDocument || e, e.head.insertBefore(
      a,
      t === "title" ? e.querySelector("head > title") : null
    );
  }
  function V1(e, t, a) {
    if (a === 1 || t.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "")
          break;
        return !0;
      case "link":
        if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError)
          break;
        return t.rel === "stylesheet" ? (e = t.disabled, typeof t.precedence == "string" && e == null) : !0;
      case "script":
        if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string")
          return !0;
    }
    return !1;
  }
  function em(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function Y1(e, t, a, n) {
    if (a.type === "stylesheet" && (typeof n.media != "string" || matchMedia(n.media).matches !== !1) && (a.state.loading & 4) === 0) {
      if (a.instance === null) {
        var o = Pn(n.href), u = t.querySelector(
          Fl(o)
        );
        if (u) {
          t = u._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = Rs.bind(e), t.then(e, e)), a.state.loading |= 4, a.instance = u, Je(u);
          return;
        }
        u = t.ownerDocument || t, n = Jh(n), (o = Ut.get(o)) && mu(n, o), u = u.createElement("link"), Je(u);
        var v = u;
        v._p = new Promise(function(S, C) {
          v.onload = S, v.onerror = C;
        }), nt(u, "link", n), a.instance = u;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(a, t), (t = a.state.preload) && (a.state.loading & 3) === 0 && (e.count++, a = Rs.bind(e), t.addEventListener("load", a), t.addEventListener("error", a));
    }
  }
  var gu = 0;
  function G1(e, t) {
    return e.stylesheets && e.count === 0 && js(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(a) {
      var n = setTimeout(function() {
        if (e.stylesheets && js(e, e.stylesheets), e.unsuspend) {
          var u = e.unsuspend;
          e.unsuspend = null, u();
        }
      }, 6e4 + t);
      0 < e.imgBytes && gu === 0 && (gu = 62500 * A1());
      var o = setTimeout(
        function() {
          if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && js(e, e.stylesheets), e.unsuspend)) {
            var u = e.unsuspend;
            e.unsuspend = null, u();
          }
        },
        (e.imgBytes > gu ? 50 : 800) + t
      );
      return e.unsuspend = a, function() {
        e.unsuspend = null, clearTimeout(n), clearTimeout(o);
      };
    } : null;
  }
  function Rs() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) js(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var Ns = null;
  function js(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, Ns = /* @__PURE__ */ new Map(), t.forEach(Q1, e), Ns = null, Rs.call(e));
  }
  function Q1(e, t) {
    if (!(t.state.loading & 4)) {
      var a = Ns.get(e);
      if (a) var n = a.get(null);
      else {
        a = /* @__PURE__ */ new Map(), Ns.set(e, a);
        for (var o = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), u = 0; u < o.length; u++) {
          var v = o[u];
          (v.nodeName === "LINK" || v.getAttribute("media") !== "not all") && (a.set(v.dataset.precedence, v), n = v);
        }
        n && a.set(null, n);
      }
      o = t.instance, v = o.getAttribute("data-precedence"), u = a.get(v) || n, u === n && a.set(null, o), a.set(v, o), this.count++, n = Rs.bind(this), o.addEventListener("load", n), o.addEventListener("error", n), u ? u.parentNode.insertBefore(o, u.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(o, e.firstChild)), t.state.loading |= 4;
    }
  }
  var Jl = {
    $$typeof: $,
    Provider: null,
    Consumer: null,
    _currentValue: J,
    _currentValue2: J,
    _threadCount: 0
  };
  function K1(e, t, a, n, o, u, v, S, C) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = cr(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = cr(0), this.hiddenUpdates = cr(null), this.identifierPrefix = n, this.onUncaughtError = o, this.onCaughtError = u, this.onRecoverableError = v, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = C, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function tm(e, t, a, n, o, u, v, S, C, D, q, G) {
    return e = new K1(
      e,
      t,
      a,
      v,
      C,
      D,
      q,
      G,
      S
    ), t = 1, u === !0 && (t |= 24), u = St(3, null, null, t), e.current = u, u.stateNode = e, t = Fr(), t.refCount++, e.pooledCache = t, t.refCount++, u.memoizedState = {
      element: n,
      isDehydrated: a,
      cache: t
    }, Pr(u), e;
  }
  function am(e) {
    return e ? (e = On, e) : On;
  }
  function nm(e, t, a, n, o, u) {
    o = am(o), n.context === null ? n.context = o : n.pendingContext = o, n = Ra(t), n.payload = { element: a }, u = u === void 0 ? null : u, u !== null && (n.callback = u), a = Na(e, n, t), a !== null && (mt(a, e, t), jl(a, e, t));
  }
  function lm(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var a = e.retryLane;
      e.retryLane = a !== 0 && a < t ? a : t;
    }
  }
  function yu(e, t) {
    lm(e, t), (e = e.alternate) && lm(e, t);
  }
  function im(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Pa(e, 67108864);
      t !== null && mt(t, e, 67108864), yu(e, 67108864);
    }
  }
  function sm(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Rt();
      t = fr(t);
      var a = Pa(e, t);
      a !== null && mt(a, e, t), yu(e, t);
    }
  }
  var Ts = !0;
  function X1(e, t, a, n) {
    var o = k.T;
    k.T = null;
    var u = K.p;
    try {
      K.p = 2, vu(e, t, a, n);
    } finally {
      K.p = u, k.T = o;
    }
  }
  function F1(e, t, a, n) {
    var o = k.T;
    k.T = null;
    var u = K.p;
    try {
      K.p = 8, vu(e, t, a, n);
    } finally {
      K.p = u, k.T = o;
    }
  }
  function vu(e, t, a, n) {
    if (Ts) {
      var o = bu(n);
      if (o === null)
        lu(
          e,
          t,
          n,
          Os,
          a
        ), om(e, n);
      else if (J1(
        o,
        e,
        t,
        a,
        n
      ))
        n.stopPropagation();
      else if (om(e, n), t & 4 && -1 < Z1.indexOf(e)) {
        for (; o !== null; ) {
          var u = bn(o);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (u = u.stateNode, u.current.memoizedState.isDehydrated) {
                  var v = Xa(u.pendingLanes);
                  if (v !== 0) {
                    var S = u;
                    for (S.pendingLanes |= 2, S.entangledLanes |= 2; v; ) {
                      var C = 1 << 31 - bt(v);
                      S.entanglements[1] |= C, v &= ~C;
                    }
                    Gt(u), (Ce & 6) === 0 && (ds = yt() + 500, Gl(0));
                  }
                }
                break;
              case 31:
              case 13:
                S = Pa(u, 2), S !== null && mt(S, u, 2), ms(), yu(u, 2);
            }
          if (u = bu(n), u === null && lu(
            e,
            t,
            n,
            Os,
            a
          ), u === o) break;
          o = u;
        }
        o !== null && n.stopPropagation();
      } else
        lu(
          e,
          t,
          n,
          null,
          a
        );
    }
  }
  function bu(e) {
    return e = xr(e), xu(e);
  }
  var Os = null;
  function xu(e) {
    if (Os = null, e = vn(e), e !== null) {
      var t = f(e);
      if (t === null) e = null;
      else {
        var a = t.tag;
        if (a === 13) {
          if (e = p(t), e !== null) return e;
          e = null;
        } else if (a === 31) {
          if (e = m(t), e !== null) return e;
          e = null;
        } else if (a === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return Os = e, null;
  }
  function rm(e) {
    switch (e) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (_g()) {
          case mc:
            return 2;
          case pc:
            return 8;
          case bi:
          case Dg:
            return 32;
          case gc:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Su = !1, ka = null, Ba = null, Ha = null, Il = /* @__PURE__ */ new Map(), Pl = /* @__PURE__ */ new Map(), qa = [], Z1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function om(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        ka = null;
        break;
      case "dragenter":
      case "dragleave":
        Ba = null;
        break;
      case "mouseover":
      case "mouseout":
        Ha = null;
        break;
      case "pointerover":
      case "pointerout":
        Il.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Pl.delete(t.pointerId);
    }
  }
  function Wl(e, t, a, n, o, u) {
    return e === null || e.nativeEvent !== u ? (e = {
      blockedOn: t,
      domEventName: a,
      eventSystemFlags: n,
      nativeEvent: u,
      targetContainers: [o]
    }, t !== null && (t = bn(t), t !== null && im(t)), e) : (e.eventSystemFlags |= n, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
  }
  function J1(e, t, a, n, o) {
    switch (t) {
      case "focusin":
        return ka = Wl(
          ka,
          e,
          t,
          a,
          n,
          o
        ), !0;
      case "dragenter":
        return Ba = Wl(
          Ba,
          e,
          t,
          a,
          n,
          o
        ), !0;
      case "mouseover":
        return Ha = Wl(
          Ha,
          e,
          t,
          a,
          n,
          o
        ), !0;
      case "pointerover":
        var u = o.pointerId;
        return Il.set(
          u,
          Wl(
            Il.get(u) || null,
            e,
            t,
            a,
            n,
            o
          )
        ), !0;
      case "gotpointercapture":
        return u = o.pointerId, Pl.set(
          u,
          Wl(
            Pl.get(u) || null,
            e,
            t,
            a,
            n,
            o
          )
        ), !0;
    }
    return !1;
  }
  function um(e) {
    var t = vn(e.target);
    if (t !== null) {
      var a = f(t);
      if (a !== null) {
        if (t = a.tag, t === 13) {
          if (t = p(a), t !== null) {
            e.blockedOn = t, wc(e.priority, function() {
              sm(a);
            });
            return;
          }
        } else if (t === 31) {
          if (t = m(a), t !== null) {
            e.blockedOn = t, wc(e.priority, function() {
              sm(a);
            });
            return;
          }
        } else if (t === 3 && a.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function zs(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var a = bu(e.nativeEvent);
      if (a === null) {
        a = e.nativeEvent;
        var n = new a.constructor(
          a.type,
          a
        );
        br = n, a.target.dispatchEvent(n), br = null;
      } else
        return t = bn(a), t !== null && im(t), e.blockedOn = a, !1;
      t.shift();
    }
    return !0;
  }
  function cm(e, t, a) {
    zs(e) && a.delete(t);
  }
  function I1() {
    Su = !1, ka !== null && zs(ka) && (ka = null), Ba !== null && zs(Ba) && (Ba = null), Ha !== null && zs(Ha) && (Ha = null), Il.forEach(cm), Pl.forEach(cm);
  }
  function Ls(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Su || (Su = !0, i.unstable_scheduleCallback(
      i.unstable_NormalPriority,
      I1
    )));
  }
  var Ms = null;
  function fm(e) {
    Ms !== e && (Ms = e, i.unstable_scheduleCallback(
      i.unstable_NormalPriority,
      function() {
        Ms === e && (Ms = null);
        for (var t = 0; t < e.length; t += 3) {
          var a = e[t], n = e[t + 1], o = e[t + 2];
          if (typeof n != "function") {
            if (xu(n || a) === null)
              continue;
            break;
          }
          var u = bn(a);
          u !== null && (e.splice(t, 3), t -= 3, bo(
            u,
            {
              pending: !0,
              data: o,
              method: a.method,
              action: n
            },
            n,
            o
          ));
        }
      }
    ));
  }
  function el(e) {
    function t(C) {
      return Ls(C, e);
    }
    ka !== null && Ls(ka, e), Ba !== null && Ls(Ba, e), Ha !== null && Ls(Ha, e), Il.forEach(t), Pl.forEach(t);
    for (var a = 0; a < qa.length; a++) {
      var n = qa[a];
      n.blockedOn === e && (n.blockedOn = null);
    }
    for (; 0 < qa.length && (a = qa[0], a.blockedOn === null); )
      um(a), a.blockedOn === null && qa.shift();
    if (a = (e.ownerDocument || e).$$reactFormReplay, a != null)
      for (n = 0; n < a.length; n += 3) {
        var o = a[n], u = a[n + 1], v = o[ot] || null;
        if (typeof u == "function")
          v || fm(a);
        else if (v) {
          var S = null;
          if (u && u.hasAttribute("formAction")) {
            if (o = u, v = u[ot] || null)
              S = v.formAction;
            else if (xu(o) !== null) continue;
          } else S = v.action;
          typeof S == "function" ? a[n + 1] = S : (a.splice(n, 3), n -= 3), fm(a);
        }
      }
  }
  function dm() {
    function e(u) {
      u.canIntercept && u.info === "react-transition" && u.intercept({
        handler: function() {
          return new Promise(function(v) {
            return o = v;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function t() {
      o !== null && (o(), o = null), n || setTimeout(a, 20);
    }
    function a() {
      if (!n && !navigation.transition) {
        var u = navigation.currentEntry;
        u && u.url != null && navigation.navigate(u.url, {
          state: u.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var n = !1, o = null;
      return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(a, 100), function() {
        n = !0, navigation.removeEventListener("navigate", e), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), o !== null && (o(), o = null);
      };
    }
  }
  function wu(e) {
    this._internalRoot = e;
  }
  _s.prototype.render = wu.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(r(409));
    var a = t.current, n = Rt();
    nm(a, n, e, t, null, null);
  }, _s.prototype.unmount = wu.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      nm(e.current, 2, null, e, null, null), ms(), t[yn] = null;
    }
  };
  function _s(e) {
    this._internalRoot = e;
  }
  _s.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Sc();
      e = { blockedOn: null, target: e, priority: t };
      for (var a = 0; a < qa.length && t !== 0 && t < qa[a].priority; a++) ;
      qa.splice(a, 0, e), a === 0 && um(e);
    }
  };
  var hm = l.version;
  if (hm !== "19.2.4")
    throw Error(
      r(
        527,
        hm,
        "19.2.4"
      )
    );
  K.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(r(188)) : (e = Object.keys(e).join(","), Error(r(268, e)));
    return e = d(t), e = e !== null ? g(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var P1 = {
    bundleType: 0,
    version: "19.2.4",
    rendererPackageName: "react-dom",
    currentDispatcherRef: k,
    reconcilerVersion: "19.2.4"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ds = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ds.isDisabled && Ds.supportsFiber)
      try {
        ol = Ds.inject(
          P1
        ), vt = Ds;
      } catch {
      }
  }
  return ti.createRoot = function(e, t) {
    if (!c(e)) throw Error(r(299));
    var a = !1, n = "", o = xd, u = Sd, v = wd;
    return t != null && (t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (n = t.identifierPrefix), t.onUncaughtError !== void 0 && (o = t.onUncaughtError), t.onCaughtError !== void 0 && (u = t.onCaughtError), t.onRecoverableError !== void 0 && (v = t.onRecoverableError)), t = tm(
      e,
      1,
      !1,
      null,
      null,
      a,
      n,
      null,
      o,
      u,
      v,
      dm
    ), e[yn] = t.current, nu(e), new wu(t);
  }, ti.hydrateRoot = function(e, t, a) {
    if (!c(e)) throw Error(r(299));
    var n = !1, o = "", u = xd, v = Sd, S = wd, C = null;
    return a != null && (a.unstable_strictMode === !0 && (n = !0), a.identifierPrefix !== void 0 && (o = a.identifierPrefix), a.onUncaughtError !== void 0 && (u = a.onUncaughtError), a.onCaughtError !== void 0 && (v = a.onCaughtError), a.onRecoverableError !== void 0 && (S = a.onRecoverableError), a.formState !== void 0 && (C = a.formState)), t = tm(
      e,
      1,
      !0,
      t,
      a ?? null,
      n,
      o,
      C,
      u,
      v,
      S,
      dm
    ), t.context = am(null), a = t.current, n = Rt(), n = fr(n), o = Ra(n), o.callback = null, Na(a, o, n), a = n, t.current.lanes = a, cl(t, a), Gt(t), e[yn] = t.current, nu(e), new _s(t);
  }, ti.version = "19.2.4", ti;
}
var Em;
function oy() {
  if (Em) return Cu.exports;
  Em = 1;
  function i() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (l) {
        console.error(l);
      }
  }
  return i(), Cu.exports = ry(), Cu.exports;
}
var uy = oy(), Tu = { exports: {} }, Ou = {};
var Am;
function cy() {
  if (Am) return Ou;
  Am = 1;
  var i = di();
  function l(h, d) {
    return h === d && (h !== 0 || 1 / h === 1 / d) || h !== h && d !== d;
  }
  var s = typeof Object.is == "function" ? Object.is : l, r = i.useSyncExternalStore, c = i.useRef, f = i.useEffect, p = i.useMemo, m = i.useDebugValue;
  return Ou.useSyncExternalStoreWithSelector = function(h, d, g, y, x) {
    var w = c(null);
    if (w.current === null) {
      var E = { hasValue: !1, value: null };
      w.current = E;
    } else E = w.current;
    w = p(
      function() {
        function N(H) {
          if (!z) {
            if (z = !0, M = H, H = y(H), x !== void 0 && E.hasValue) {
              var X = E.value;
              if (x(X, H))
                return $ = X;
            }
            return $ = H;
          }
          if (X = $, s(M, H)) return X;
          var Q = y(H);
          return x !== void 0 && x(X, Q) ? (M = H, X) : (M = H, $ = Q);
        }
        var z = !1, M, $, O = g === void 0 ? null : g;
        return [
          function() {
            return N(d());
          },
          O === null ? void 0 : function() {
            return N(O());
          }
        ];
      },
      [d, g, y, x]
    );
    var j = r(h, w[0], w[1]);
    return f(
      function() {
        E.hasValue = !0, E.value = j;
      },
      [j]
    ), m(j), j;
  }, Ou;
}
var Cm;
function fy() {
  return Cm || (Cm = 1, Tu.exports = cy()), Tu.exports;
}
var dy = fy();
function hy(i) {
  i();
}
function my() {
  let i = null, l = null;
  return {
    clear() {
      i = null, l = null;
    },
    notify() {
      hy(() => {
        let s = i;
        for (; s; )
          s.callback(), s = s.next;
      });
    },
    get() {
      const s = [];
      let r = i;
      for (; r; )
        s.push(r), r = r.next;
      return s;
    },
    subscribe(s) {
      let r = !0;
      const c = l = {
        callback: s,
        next: null,
        prev: l
      };
      return c.prev ? c.prev.next = c : i = c, function() {
        !r || i === null || (r = !1, c.next ? c.next.prev = c.prev : l = c.prev, c.prev ? c.prev.next = c.next : i = c.next);
      };
    }
  };
}
var Rm = {
  notify() {
  },
  get: () => []
};
function py(i, l) {
  let s, r = Rm, c = 0, f = !1;
  function p(j) {
    g();
    const N = r.subscribe(j);
    let z = !1;
    return () => {
      z || (z = !0, N(), y());
    };
  }
  function m() {
    r.notify();
  }
  function h() {
    E.onStateChange && E.onStateChange();
  }
  function d() {
    return f;
  }
  function g() {
    c++, s || (s = i.subscribe(h), r = my());
  }
  function y() {
    c--, s && c === 0 && (s(), s = void 0, r.clear(), r = Rm);
  }
  function x() {
    f || (f = !0, g());
  }
  function w() {
    f && (f = !1, y());
  }
  const E = {
    addNestedSub: p,
    notifyNestedSubs: m,
    handleChangeWrapper: h,
    isSubscribed: d,
    trySubscribe: x,
    tryUnsubscribe: w,
    getListeners: () => r
  };
  return E;
}
var gy = () => typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", yy = /* @__PURE__ */ gy(), vy = () => typeof navigator < "u" && navigator.product === "ReactNative", by = /* @__PURE__ */ vy(), xy = () => yy || by ? A.useLayoutEffect : A.useEffect, Sy = /* @__PURE__ */ xy(), wy = /* @__PURE__ */ Symbol.for("react-redux-context"), Ey = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function Ay() {
  if (!A.createContext) return {};
  const i = Ey[wy] ??= /* @__PURE__ */ new Map();
  let l = i.get(A.createContext);
  return l || (l = A.createContext(
    null
  ), i.set(A.createContext, l)), l;
}
var Qa = /* @__PURE__ */ Ay();
function Cy(i) {
  const { children: l, context: s, serverState: r, store: c } = i, f = A.useMemo(() => {
    const h = py(c);
    return {
      store: c,
      subscription: h,
      getServerState: r ? () => r : void 0
    };
  }, [c, r]), p = A.useMemo(() => c.getState(), [c]);
  Sy(() => {
    const { subscription: h } = f;
    return h.onStateChange = h.notifyNestedSubs, h.trySubscribe(), p !== c.getState() && h.notifyNestedSubs(), () => {
      h.tryUnsubscribe(), h.onStateChange = void 0;
    };
  }, [f, p]);
  const m = s || Qa;
  return /* @__PURE__ */ A.createElement(m.Provider, { value: f }, l);
}
var Ry = Cy;
function tc(i = Qa) {
  return function() {
    return A.useContext(i);
  };
}
var jp = /* @__PURE__ */ tc();
function Tp(i = Qa) {
  const l = i === Qa ? jp : (
    // @ts-ignore
    tc(i)
  ), s = () => {
    const { store: r } = l();
    return r;
  };
  return Object.assign(s, {
    withTypes: () => s
  }), s;
}
var Ny = /* @__PURE__ */ Tp();
function jy(i = Qa) {
  const l = i === Qa ? Ny : Tp(i), s = () => l().dispatch;
  return Object.assign(s, {
    withTypes: () => s
  }), s;
}
var hi = /* @__PURE__ */ jy(), Ty = (i, l) => i === l;
function Oy(i = Qa) {
  const l = i === Qa ? jp : tc(i), s = (r, c = {}) => {
    const { equalityFn: f = Ty } = typeof c == "function" ? { equalityFn: c } : c, p = l(), { store: m, subscription: h, getServerState: d } = p;
    A.useRef(!0);
    const g = A.useCallback(
      {
        [r.name](x) {
          return r(x);
        }
      }[r.name],
      [r]
    ), y = dy.useSyncExternalStoreWithSelector(
      h.addNestedSub,
      m.getState,
      d || m.getState,
      g,
      f
    );
    return A.useDebugValue(y), y;
  };
  return Object.assign(s, {
    withTypes: () => s
  }), s;
}
var pa = /* @__PURE__ */ Oy();
var Nm = "popstate";
function zy(i = {}) {
  function l(r, c) {
    let { pathname: f, search: p, hash: m } = r.location;
    return Xu(
      "",
      { pathname: f, search: p, hash: m },
      // state defaults to `null` because `window.history.state` does
      c.state && c.state.usr || null,
      c.state && c.state.key || "default"
    );
  }
  function s(r, c) {
    return typeof c == "string" ? c : oi(c);
  }
  return My(
    l,
    s,
    null,
    i
  );
}
function $e(i, l) {
  if (i === !1 || i === null || typeof i > "u")
    throw new Error(l);
}
function Xt(i, l) {
  if (!i) {
    typeof console < "u" && console.warn(l);
    try {
      throw new Error(l);
    } catch {
    }
  }
}
function Ly() {
  return Math.random().toString(36).substring(2, 10);
}
function jm(i, l) {
  return {
    usr: i.state,
    key: i.key,
    idx: l
  };
}
function Xu(i, l, s = null, r) {
  return {
    pathname: typeof i == "string" ? i : i.pathname,
    search: "",
    hash: "",
    ...typeof l == "string" ? il(l) : l,
    state: s,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: l && l.key || r || Ly()
  };
}
function oi({
  pathname: i = "/",
  search: l = "",
  hash: s = ""
}) {
  return l && l !== "?" && (i += l.charAt(0) === "?" ? l : "?" + l), s && s !== "#" && (i += s.charAt(0) === "#" ? s : "#" + s), i;
}
function il(i) {
  let l = {};
  if (i) {
    let s = i.indexOf("#");
    s >= 0 && (l.hash = i.substring(s), i = i.substring(0, s));
    let r = i.indexOf("?");
    r >= 0 && (l.search = i.substring(r), i = i.substring(0, r)), i && (l.pathname = i);
  }
  return l;
}
function My(i, l, s, r = {}) {
  let { window: c = document.defaultView, v5Compat: f = !1 } = r, p = c.history, m = "POP", h = null, d = g();
  d == null && (d = 0, p.replaceState({ ...p.state, idx: d }, ""));
  function g() {
    return (p.state || { idx: null }).idx;
  }
  function y() {
    m = "POP";
    let N = g(), z = N == null ? null : N - d;
    d = N, h && h({ action: m, location: j.location, delta: z });
  }
  function x(N, z) {
    m = "PUSH";
    let M = Xu(j.location, N, z);
    d = g() + 1;
    let $ = jm(M, d), O = j.createHref(M);
    try {
      p.pushState($, "", O);
    } catch (H) {
      if (H instanceof DOMException && H.name === "DataCloneError")
        throw H;
      c.location.assign(O);
    }
    f && h && h({ action: m, location: j.location, delta: 1 });
  }
  function w(N, z) {
    m = "REPLACE";
    let M = Xu(j.location, N, z);
    d = g();
    let $ = jm(M, d), O = j.createHref(M);
    p.replaceState($, "", O), f && h && h({ action: m, location: j.location, delta: 0 });
  }
  function E(N) {
    return _y(N);
  }
  let j = {
    get action() {
      return m;
    },
    get location() {
      return i(c, p);
    },
    listen(N) {
      if (h)
        throw new Error("A history only accepts one active listener");
      return c.addEventListener(Nm, y), h = N, () => {
        c.removeEventListener(Nm, y), h = null;
      };
    },
    createHref(N) {
      return l(c, N);
    },
    createURL: E,
    encodeLocation(N) {
      let z = E(N);
      return {
        pathname: z.pathname,
        search: z.search,
        hash: z.hash
      };
    },
    push: x,
    replace: w,
    go(N) {
      return p.go(N);
    }
  };
  return j;
}
function _y(i, l = !1) {
  let s = "http://localhost";
  typeof window < "u" && (s = window.location.origin !== "null" ? window.location.origin : window.location.href), $e(s, "No window.location.(origin|href) available to create URL");
  let r = typeof i == "string" ? i : oi(i);
  return r = r.replace(/ $/, "%20"), !l && r.startsWith("//") && (r = s + r), new URL(r, s);
}
function Op(i, l, s = "/") {
  return Dy(i, l, s, !1);
}
function Dy(i, l, s, r) {
  let c = typeof l == "string" ? il(l) : l, f = ma(c.pathname || "/", s);
  if (f == null)
    return null;
  let p = zp(i);
  Uy(p);
  let m = null;
  for (let h = 0; m == null && h < p.length; ++h) {
    let d = Xy(f);
    m = Qy(
      p[h],
      d,
      r
    );
  }
  return m;
}
function zp(i, l = [], s = [], r = "", c = !1) {
  let f = (p, m, h = c, d) => {
    let g = {
      relativePath: d === void 0 ? p.path || "" : d,
      caseSensitive: p.caseSensitive === !0,
      childrenIndex: m,
      route: p
    };
    if (g.relativePath.startsWith("/")) {
      if (!g.relativePath.startsWith(r) && h)
        return;
      $e(
        g.relativePath.startsWith(r),
        `Absolute route path "${g.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ), g.relativePath = g.relativePath.slice(r.length);
    }
    let y = ha([r, g.relativePath]), x = s.concat(g);
    p.children && p.children.length > 0 && ($e(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      p.index !== !0,
      `Index routes must not have child routes. Please remove all child routes from route path "${y}".`
    ), zp(
      p.children,
      l,
      x,
      y,
      h
    )), !(p.path == null && !p.index) && l.push({
      path: y,
      score: Yy(y, p.index),
      routesMeta: x
    });
  };
  return i.forEach((p, m) => {
    if (p.path === "" || !p.path?.includes("?"))
      f(p, m);
    else
      for (let h of Lp(p.path))
        f(p, m, !0, h);
  }), l;
}
function Lp(i) {
  let l = i.split("/");
  if (l.length === 0) return [];
  let [s, ...r] = l, c = s.endsWith("?"), f = s.replace(/\?$/, "");
  if (r.length === 0)
    return c ? [f, ""] : [f];
  let p = Lp(r.join("/")), m = [];
  return m.push(
    ...p.map(
      (h) => h === "" ? f : [f, h].join("/")
    )
  ), c && m.push(...p), m.map(
    (h) => i.startsWith("/") && h === "" ? "/" : h
  );
}
function Uy(i) {
  i.sort(
    (l, s) => l.score !== s.score ? s.score - l.score : Gy(
      l.routesMeta.map((r) => r.childrenIndex),
      s.routesMeta.map((r) => r.childrenIndex)
    )
  );
}
var $y = /^:[\w-]+$/, ky = 3, By = 2, Hy = 1, qy = 10, Vy = -2, Tm = (i) => i === "*";
function Yy(i, l) {
  let s = i.split("/"), r = s.length;
  return s.some(Tm) && (r += Vy), l && (r += By), s.filter((c) => !Tm(c)).reduce(
    (c, f) => c + ($y.test(f) ? ky : f === "" ? Hy : qy),
    r
  );
}
function Gy(i, l) {
  return i.length === l.length && i.slice(0, -1).every((r, c) => r === l[c]) ? (
    // If two routes are siblings, we should try to match the earlier sibling
    // first. This allows people to have fine-grained control over the matching
    // behavior by simply putting routes with identical paths in the order they
    // want them tried.
    i[i.length - 1] - l[l.length - 1]
  ) : (
    // Otherwise, it doesn't really make sense to rank non-siblings by index,
    // so they sort equally.
    0
  );
}
function Qy(i, l, s = !1) {
  let { routesMeta: r } = i, c = {}, f = "/", p = [];
  for (let m = 0; m < r.length; ++m) {
    let h = r[m], d = m === r.length - 1, g = f === "/" ? l : l.slice(f.length) || "/", y = Ks(
      { path: h.relativePath, caseSensitive: h.caseSensitive, end: d },
      g
    ), x = h.route;
    if (!y && d && s && !r[r.length - 1].route.index && (y = Ks(
      {
        path: h.relativePath,
        caseSensitive: h.caseSensitive,
        end: !1
      },
      g
    )), !y)
      return null;
    Object.assign(c, y.params), p.push({
      // TODO: Can this as be avoided?
      params: c,
      pathname: ha([f, y.pathname]),
      pathnameBase: Iy(
        ha([f, y.pathnameBase])
      ),
      route: x
    }), y.pathnameBase !== "/" && (f = ha([f, y.pathnameBase]));
  }
  return p;
}
function Ks(i, l) {
  typeof i == "string" && (i = { path: i, caseSensitive: !1, end: !0 });
  let [s, r] = Ky(
    i.path,
    i.caseSensitive,
    i.end
  ), c = l.match(s);
  if (!c) return null;
  let f = c[0], p = f.replace(/(.)\/+$/, "$1"), m = c.slice(1);
  return {
    params: r.reduce(
      (d, { paramName: g, isOptional: y }, x) => {
        if (g === "*") {
          let E = m[x] || "";
          p = f.slice(0, f.length - E.length).replace(/(.)\/+$/, "$1");
        }
        const w = m[x];
        return y && !w ? d[g] = void 0 : d[g] = (w || "").replace(/%2F/g, "/"), d;
      },
      {}
    ),
    pathname: f,
    pathnameBase: p,
    pattern: i
  };
}
function Ky(i, l = !1, s = !0) {
  Xt(
    i === "*" || !i.endsWith("*") || i.endsWith("/*"),
    `Route path "${i}" will be treated as if it were "${i.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${i.replace(/\*$/, "/*")}".`
  );
  let r = [], c = "^" + i.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(
    /\/:([\w-]+)(\?)?/g,
    (p, m, h) => (r.push({ paramName: m, isOptional: h != null }), h ? "/?([^\\/]+)?" : "/([^\\/]+)")
  ).replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
  return i.endsWith("*") ? (r.push({ paramName: "*" }), c += i === "*" || i === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : s ? c += "\\/*$" : i !== "" && i !== "/" && (c += "(?:(?=\\/|$))"), [new RegExp(c, l ? void 0 : "i"), r];
}
function Xy(i) {
  try {
    return i.split("/").map((l) => decodeURIComponent(l).replace(/\//g, "%2F")).join("/");
  } catch (l) {
    return Xt(
      !1,
      `The URL path "${i}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${l}).`
    ), i;
  }
}
function ma(i, l) {
  if (l === "/") return i;
  if (!i.toLowerCase().startsWith(l.toLowerCase()))
    return null;
  let s = l.endsWith("/") ? l.length - 1 : l.length, r = i.charAt(s);
  return r && r !== "/" ? null : i.slice(s) || "/";
}
var Fy = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
function Zy(i, l = "/") {
  let {
    pathname: s,
    search: r = "",
    hash: c = ""
  } = typeof i == "string" ? il(i) : i, f;
  return s ? (s = s.replace(/\/\/+/g, "/"), s.startsWith("/") ? f = Om(s.substring(1), "/") : f = Om(s, l)) : f = l, {
    pathname: f,
    search: Py(r),
    hash: Wy(c)
  };
}
function Om(i, l) {
  let s = l.replace(/\/+$/, "").split("/");
  return i.split("/").forEach((c) => {
    c === ".." ? s.length > 1 && s.pop() : c !== "." && s.push(c);
  }), s.length > 1 ? s.join("/") : "/";
}
function zu(i, l, s, r) {
  return `Cannot include a '${i}' character in a manually specified \`to.${l}\` field [${JSON.stringify(
    r
  )}].  Please separate it out to the \`to.${s}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function Jy(i) {
  return i.filter(
    (l, s) => s === 0 || l.route.path && l.route.path.length > 0
  );
}
function Mp(i) {
  let l = Jy(i);
  return l.map(
    (s, r) => r === l.length - 1 ? s.pathname : s.pathnameBase
  );
}
function _p(i, l, s, r = !1) {
  let c;
  typeof i == "string" ? c = il(i) : (c = { ...i }, $e(
    !c.pathname || !c.pathname.includes("?"),
    zu("?", "pathname", "search", c)
  ), $e(
    !c.pathname || !c.pathname.includes("#"),
    zu("#", "pathname", "hash", c)
  ), $e(
    !c.search || !c.search.includes("#"),
    zu("#", "search", "hash", c)
  ));
  let f = i === "" || c.pathname === "", p = f ? "/" : c.pathname, m;
  if (p == null)
    m = s;
  else {
    let y = l.length - 1;
    if (!r && p.startsWith("..")) {
      let x = p.split("/");
      for (; x[0] === ".."; )
        x.shift(), y -= 1;
      c.pathname = x.join("/");
    }
    m = y >= 0 ? l[y] : "/";
  }
  let h = Zy(c, m), d = p && p !== "/" && p.endsWith("/"), g = (f || p === ".") && s.endsWith("/");
  return !h.pathname.endsWith("/") && (d || g) && (h.pathname += "/"), h;
}
var ha = (i) => i.join("/").replace(/\/\/+/g, "/"), Iy = (i) => i.replace(/\/+$/, "").replace(/^\/*/, "/"), Py = (i) => !i || i === "?" ? "" : i.startsWith("?") ? i : "?" + i, Wy = (i) => !i || i === "#" ? "" : i.startsWith("#") ? i : "#" + i, ev = class {
  constructor(i, l, s, r = !1) {
    this.status = i, this.statusText = l || "", this.internal = r, s instanceof Error ? (this.data = s.toString(), this.error = s) : this.data = s;
  }
};
function tv(i) {
  return i != null && typeof i.status == "number" && typeof i.statusText == "string" && typeof i.internal == "boolean" && "data" in i;
}
function av(i) {
  return i.map((l) => l.route.path).filter(Boolean).join("/").replace(/\/\/*/g, "/") || "/";
}
var Dp = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function Up(i, l) {
  let s = i;
  if (typeof s != "string" || !Fy.test(s))
    return {
      absoluteURL: void 0,
      isExternal: !1,
      to: s
    };
  let r = s, c = !1;
  if (Dp)
    try {
      let f = new URL(window.location.href), p = s.startsWith("//") ? new URL(f.protocol + s) : new URL(s), m = ma(p.pathname, l);
      p.origin === f.origin && m != null ? s = m + p.search + p.hash : c = !0;
    } catch {
      Xt(
        !1,
        `<Link to="${s}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
      );
    }
  return {
    absoluteURL: r,
    isExternal: c,
    to: s
  };
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
var $p = [
  "POST",
  "PUT",
  "PATCH",
  "DELETE"
];
new Set(
  $p
);
var nv = [
  "GET",
  ...$p
];
new Set(nv);
var sl = A.createContext(null);
sl.displayName = "DataRouter";
var Ws = A.createContext(null);
Ws.displayName = "DataRouterState";
var lv = A.createContext(!1), kp = A.createContext({
  isTransitioning: !1
});
kp.displayName = "ViewTransition";
var iv = A.createContext(
  /* @__PURE__ */ new Map()
);
iv.displayName = "Fetchers";
var sv = A.createContext(null);
sv.displayName = "Await";
var $t = A.createContext(
  null
);
$t.displayName = "Navigation";
var mi = A.createContext(
  null
);
mi.displayName = "Location";
var ga = A.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
ga.displayName = "Route";
var ac = A.createContext(null);
ac.displayName = "RouteError";
var Bp = "REACT_ROUTER_ERROR", rv = "REDIRECT", ov = "ROUTE_ERROR_RESPONSE";
function uv(i) {
  if (i.startsWith(`${Bp}:${rv}:{`))
    try {
      let l = JSON.parse(i.slice(28));
      if (typeof l == "object" && l && typeof l.status == "number" && typeof l.statusText == "string" && typeof l.location == "string" && typeof l.reloadDocument == "boolean" && typeof l.replace == "boolean")
        return l;
    } catch {
    }
}
function cv(i) {
  if (i.startsWith(
    `${Bp}:${ov}:{`
  ))
    try {
      let l = JSON.parse(i.slice(40));
      if (typeof l == "object" && l && typeof l.status == "number" && typeof l.statusText == "string")
        return new ev(
          l.status,
          l.statusText,
          l.data
        );
    } catch {
    }
}
function fv(i, { relative: l } = {}) {
  $e(
    pi(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: s, navigator: r } = A.useContext($t), { hash: c, pathname: f, search: p } = yi(i, { relative: l }), m = f;
  return s !== "/" && (m = f === "/" ? s : ha([s, f])), r.createHref({ pathname: m, search: p, hash: c });
}
function pi() {
  return A.useContext(mi) != null;
}
function pn() {
  return $e(
    pi(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ), A.useContext(mi).location;
}
var Hp = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function qp(i) {
  A.useContext($t).static || A.useLayoutEffect(i);
}
function gi() {
  let { isDataRoute: i } = A.useContext(ga);
  return i ? Av() : dv();
}
function dv() {
  $e(
    pi(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let i = A.useContext(sl), { basename: l, navigator: s } = A.useContext($t), { matches: r } = A.useContext(ga), { pathname: c } = pn(), f = JSON.stringify(Mp(r)), p = A.useRef(!1);
  return qp(() => {
    p.current = !0;
  }), A.useCallback(
    (h, d = {}) => {
      if (Xt(p.current, Hp), !p.current) return;
      if (typeof h == "number") {
        s.go(h);
        return;
      }
      let g = _p(
        h,
        JSON.parse(f),
        c,
        d.relative === "path"
      );
      i == null && l !== "/" && (g.pathname = g.pathname === "/" ? l : ha([l, g.pathname])), (d.replace ? s.replace : s.push)(
        g,
        d.state,
        d
      );
    },
    [
      l,
      s,
      f,
      c,
      i
    ]
  );
}
A.createContext(null);
function yi(i, { relative: l } = {}) {
  let { matches: s } = A.useContext(ga), { pathname: r } = pn(), c = JSON.stringify(Mp(s));
  return A.useMemo(
    () => _p(
      i,
      JSON.parse(c),
      r,
      l === "path"
    ),
    [i, c, r, l]
  );
}
function hv(i, l) {
  return Vp(i, l);
}
function Vp(i, l, s, r, c) {
  $e(
    pi(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: f } = A.useContext($t), { matches: p } = A.useContext(ga), m = p[p.length - 1], h = m ? m.params : {}, d = m ? m.pathname : "/", g = m ? m.pathnameBase : "/", y = m && m.route;
  {
    let M = y && y.path || "";
    Gp(
      d,
      !y || M.endsWith("*") || M.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${d}" (under <Route path="${M}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${M}"> to <Route path="${M === "/" ? "*" : `${M}/*`}">.`
    );
  }
  let x = pn(), w;
  if (l) {
    let M = typeof l == "string" ? il(l) : l;
    $e(
      g === "/" || M.pathname?.startsWith(g),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${M.pathname}" was given in the \`location\` prop.`
    ), w = M;
  } else
    w = x;
  let E = w.pathname || "/", j = E;
  if (g !== "/") {
    let M = g.replace(/^\//, "").split("/");
    j = "/" + E.replace(/^\//, "").split("/").slice(M.length).join("/");
  }
  let N = Op(i, { pathname: j });
  Xt(
    y || N != null,
    `No routes matched location "${w.pathname}${w.search}${w.hash}" `
  ), Xt(
    N == null || N[N.length - 1].route.element !== void 0 || N[N.length - 1].route.Component !== void 0 || N[N.length - 1].route.lazy !== void 0,
    `Matched leaf route at location "${w.pathname}${w.search}${w.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
  );
  let z = vv(
    N && N.map(
      (M) => Object.assign({}, M, {
        params: Object.assign({}, h, M.params),
        pathname: ha([
          g,
          // Re-encode pathnames that were decoded inside matchRoutes.
          // Pre-encode `?` and `#` ahead of `encodeLocation` because it uses
          // `new URL()` internally and we need to prevent it from treating
          // them as separators
          f.encodeLocation ? f.encodeLocation(
            M.pathname.replace(/\?/g, "%3F").replace(/#/g, "%23")
          ).pathname : M.pathname
        ]),
        pathnameBase: M.pathnameBase === "/" ? g : ha([
          g,
          // Re-encode pathnames that were decoded inside matchRoutes
          // Pre-encode `?` and `#` ahead of `encodeLocation` because it uses
          // `new URL()` internally and we need to prevent it from treating
          // them as separators
          f.encodeLocation ? f.encodeLocation(
            M.pathnameBase.replace(/\?/g, "%3F").replace(/#/g, "%23")
          ).pathname : M.pathnameBase
        ])
      })
    ),
    p,
    s,
    r,
    c
  );
  return l && z ? /* @__PURE__ */ A.createElement(
    mi.Provider,
    {
      value: {
        location: {
          pathname: "/",
          search: "",
          hash: "",
          state: null,
          key: "default",
          ...w
        },
        navigationType: "POP"
        /* Pop */
      }
    },
    z
  ) : z;
}
function mv() {
  let i = Ev(), l = tv(i) ? `${i.status} ${i.statusText}` : i instanceof Error ? i.message : JSON.stringify(i), s = i instanceof Error ? i.stack : null, r = "rgba(200,200,200, 0.5)", c = { padding: "0.5rem", backgroundColor: r }, f = { padding: "2px 4px", backgroundColor: r }, p = null;
  return console.error(
    "Error handled by React Router default ErrorBoundary:",
    i
  ), p = /* @__PURE__ */ A.createElement(A.Fragment, null, /* @__PURE__ */ A.createElement("p", null, "💿 Hey developer 👋"), /* @__PURE__ */ A.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ A.createElement("code", { style: f }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ A.createElement("code", { style: f }, "errorElement"), " prop on your route.")), /* @__PURE__ */ A.createElement(A.Fragment, null, /* @__PURE__ */ A.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ A.createElement("h3", { style: { fontStyle: "italic" } }, l), s ? /* @__PURE__ */ A.createElement("pre", { style: c }, s) : null, p);
}
var pv = /* @__PURE__ */ A.createElement(mv, null), Yp = class extends A.Component {
  constructor(i) {
    super(i), this.state = {
      location: i.location,
      revalidation: i.revalidation,
      error: i.error
    };
  }
  static getDerivedStateFromError(i) {
    return { error: i };
  }
  static getDerivedStateFromProps(i, l) {
    return l.location !== i.location || l.revalidation !== "idle" && i.revalidation === "idle" ? {
      error: i.error,
      location: i.location,
      revalidation: i.revalidation
    } : {
      error: i.error !== void 0 ? i.error : l.error,
      location: l.location,
      revalidation: i.revalidation || l.revalidation
    };
  }
  componentDidCatch(i, l) {
    this.props.onError ? this.props.onError(i, l) : console.error(
      "React Router caught the following error during render",
      i
    );
  }
  render() {
    let i = this.state.error;
    if (this.context && typeof i == "object" && i && "digest" in i && typeof i.digest == "string") {
      const s = cv(i.digest);
      s && (i = s);
    }
    let l = i !== void 0 ? /* @__PURE__ */ A.createElement(ga.Provider, { value: this.props.routeContext }, /* @__PURE__ */ A.createElement(
      ac.Provider,
      {
        value: i,
        children: this.props.component
      }
    )) : this.props.children;
    return this.context ? /* @__PURE__ */ A.createElement(gv, { error: i }, l) : l;
  }
};
Yp.contextType = lv;
var Lu = /* @__PURE__ */ new WeakMap();
function gv({
  children: i,
  error: l
}) {
  let { basename: s } = A.useContext($t);
  if (typeof l == "object" && l && "digest" in l && typeof l.digest == "string") {
    let r = uv(l.digest);
    if (r) {
      let c = Lu.get(l);
      if (c) throw c;
      let f = Up(r.location, s);
      if (Dp && !Lu.get(l))
        if (f.isExternal || r.reloadDocument)
          window.location.href = f.absoluteURL || f.to;
        else {
          const p = Promise.resolve().then(
            () => window.__reactRouterDataRouter.navigate(f.to, {
              replace: r.replace
            })
          );
          throw Lu.set(l, p), p;
        }
      return /* @__PURE__ */ A.createElement(
        "meta",
        {
          httpEquiv: "refresh",
          content: `0;url=${f.absoluteURL || f.to}`
        }
      );
    }
  }
  return i;
}
function yv({ routeContext: i, match: l, children: s }) {
  let r = A.useContext(sl);
  return r && r.static && r.staticContext && (l.route.errorElement || l.route.ErrorBoundary) && (r.staticContext._deepestRenderedBoundaryId = l.route.id), /* @__PURE__ */ A.createElement(ga.Provider, { value: i }, s);
}
function vv(i, l = [], s = null, r = null, c = null) {
  if (i == null) {
    if (!s)
      return null;
    if (s.errors)
      i = s.matches;
    else if (l.length === 0 && !s.initialized && s.matches.length > 0)
      i = s.matches;
    else
      return null;
  }
  let f = i, p = s?.errors;
  if (p != null) {
    let g = f.findIndex(
      (y) => y.route.id && p?.[y.route.id] !== void 0
    );
    $e(
      g >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(
        p
      ).join(",")}`
    ), f = f.slice(
      0,
      Math.min(f.length, g + 1)
    );
  }
  let m = !1, h = -1;
  if (s)
    for (let g = 0; g < f.length; g++) {
      let y = f[g];
      if ((y.route.HydrateFallback || y.route.hydrateFallbackElement) && (h = g), y.route.id) {
        let { loaderData: x, errors: w } = s, E = y.route.loader && !x.hasOwnProperty(y.route.id) && (!w || w[y.route.id] === void 0);
        if (y.route.lazy || E) {
          m = !0, h >= 0 ? f = f.slice(0, h + 1) : f = [f[0]];
          break;
        }
      }
    }
  let d = s && r ? (g, y) => {
    r(g, {
      location: s.location,
      params: s.matches?.[0]?.params ?? {},
      unstable_pattern: av(s.matches),
      errorInfo: y
    });
  } : void 0;
  return f.reduceRight(
    (g, y, x) => {
      let w, E = !1, j = null, N = null;
      s && (w = p && y.route.id ? p[y.route.id] : void 0, j = y.route.errorElement || pv, m && (h < 0 && x === 0 ? (Gp(
        "route-fallback",
        !1,
        "No `HydrateFallback` element provided to render during initial hydration"
      ), E = !0, N = null) : h === x && (E = !0, N = y.route.hydrateFallbackElement || null)));
      let z = l.concat(f.slice(0, x + 1)), M = () => {
        let $;
        return w ? $ = j : E ? $ = N : y.route.Component ? $ = /* @__PURE__ */ A.createElement(y.route.Component, null) : y.route.element ? $ = y.route.element : $ = g, /* @__PURE__ */ A.createElement(
          yv,
          {
            match: y,
            routeContext: {
              outlet: g,
              matches: z,
              isDataRoute: s != null
            },
            children: $
          }
        );
      };
      return s && (y.route.ErrorBoundary || y.route.errorElement || x === 0) ? /* @__PURE__ */ A.createElement(
        Yp,
        {
          location: s.location,
          revalidation: s.revalidation,
          component: j,
          error: w,
          children: M(),
          routeContext: { outlet: null, matches: z, isDataRoute: !0 },
          onError: d
        }
      ) : M();
    },
    null
  );
}
function nc(i) {
  return `${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function bv(i) {
  let l = A.useContext(sl);
  return $e(l, nc(i)), l;
}
function xv(i) {
  let l = A.useContext(Ws);
  return $e(l, nc(i)), l;
}
function Sv(i) {
  let l = A.useContext(ga);
  return $e(l, nc(i)), l;
}
function lc(i) {
  let l = Sv(i), s = l.matches[l.matches.length - 1];
  return $e(
    s.route.id,
    `${i} can only be used on routes that contain a unique "id"`
  ), s.route.id;
}
function wv() {
  return lc(
    "useRouteId"
    /* UseRouteId */
  );
}
function Ev() {
  let i = A.useContext(ac), l = xv(
    "useRouteError"
    /* UseRouteError */
  ), s = lc(
    "useRouteError"
    /* UseRouteError */
  );
  return i !== void 0 ? i : l.errors?.[s];
}
function Av() {
  let { router: i } = bv(
    "useNavigate"
    /* UseNavigateStable */
  ), l = lc(
    "useNavigate"
    /* UseNavigateStable */
  ), s = A.useRef(!1);
  return qp(() => {
    s.current = !0;
  }), A.useCallback(
    async (c, f = {}) => {
      Xt(s.current, Hp), s.current && (typeof c == "number" ? await i.navigate(c) : await i.navigate(c, { fromRouteId: l, ...f }));
    },
    [i, l]
  );
}
var zm = {};
function Gp(i, l, s) {
  !l && !zm[i] && (zm[i] = !0, Xt(!1, s));
}
A.memo(Cv);
function Cv({
  routes: i,
  future: l,
  state: s,
  onError: r
}) {
  return Vp(i, void 0, s, r, l);
}
function Ga(i) {
  $e(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>."
  );
}
function Rv({
  basename: i = "/",
  children: l = null,
  location: s,
  navigationType: r = "POP",
  navigator: c,
  static: f = !1,
  unstable_useTransitions: p
}) {
  $e(
    !pi(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
  );
  let m = i.replace(/^\/*/, "/"), h = A.useMemo(
    () => ({
      basename: m,
      navigator: c,
      static: f,
      unstable_useTransitions: p,
      future: {}
    }),
    [m, c, f, p]
  );
  typeof s == "string" && (s = il(s));
  let {
    pathname: d = "/",
    search: g = "",
    hash: y = "",
    state: x = null,
    key: w = "default"
  } = s, E = A.useMemo(() => {
    let j = ma(d, m);
    return j == null ? null : {
      location: {
        pathname: j,
        search: g,
        hash: y,
        state: x,
        key: w
      },
      navigationType: r
    };
  }, [m, d, g, y, x, w, r]);
  return Xt(
    E != null,
    `<Router basename="${m}"> is not able to match the URL "${d}${g}${y}" because it does not start with the basename, so the <Router> won't render anything.`
  ), E == null ? null : /* @__PURE__ */ A.createElement($t.Provider, { value: h }, /* @__PURE__ */ A.createElement(mi.Provider, { children: l, value: E }));
}
function Nv({
  children: i,
  location: l
}) {
  return hv(Fu(i), l);
}
function Fu(i, l = []) {
  let s = [];
  return A.Children.forEach(i, (r, c) => {
    if (!A.isValidElement(r))
      return;
    let f = [...l, c];
    if (r.type === A.Fragment) {
      s.push.apply(
        s,
        Fu(r.props.children, f)
      );
      return;
    }
    $e(
      r.type === Ga,
      `[${typeof r.type == "string" ? r.type : r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
    ), $e(
      !r.props.index || !r.props.children,
      "An index route cannot have child routes."
    );
    let p = {
      id: r.props.id || f.join("-"),
      caseSensitive: r.props.caseSensitive,
      element: r.props.element,
      Component: r.props.Component,
      index: r.props.index,
      path: r.props.path,
      middleware: r.props.middleware,
      loader: r.props.loader,
      action: r.props.action,
      hydrateFallbackElement: r.props.hydrateFallbackElement,
      HydrateFallback: r.props.HydrateFallback,
      errorElement: r.props.errorElement,
      ErrorBoundary: r.props.ErrorBoundary,
      hasErrorBoundary: r.props.hasErrorBoundary === !0 || r.props.ErrorBoundary != null || r.props.errorElement != null,
      shouldRevalidate: r.props.shouldRevalidate,
      handle: r.props.handle,
      lazy: r.props.lazy
    };
    r.props.children && (p.children = Fu(
      r.props.children,
      f
    )), s.push(p);
  }), s;
}
var Hs = "get", qs = "application/x-www-form-urlencoded";
function er(i) {
  return typeof HTMLElement < "u" && i instanceof HTMLElement;
}
function jv(i) {
  return er(i) && i.tagName.toLowerCase() === "button";
}
function Tv(i) {
  return er(i) && i.tagName.toLowerCase() === "form";
}
function Ov(i) {
  return er(i) && i.tagName.toLowerCase() === "input";
}
function zv(i) {
  return !!(i.metaKey || i.altKey || i.ctrlKey || i.shiftKey);
}
function Lv(i, l) {
  return i.button === 0 && // Ignore everything but left clicks
  (!l || l === "_self") && // Let browser handle "target=_blank" etc.
  !zv(i);
}
var Us = null;
function Mv() {
  if (Us === null)
    try {
      new FormData(
        document.createElement("form"),
        // @ts-expect-error if FormData supports the submitter parameter, this will throw
        0
      ), Us = !1;
    } catch {
      Us = !0;
    }
  return Us;
}
var _v = /* @__PURE__ */ new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain"
]);
function Mu(i) {
  return i != null && !_v.has(i) ? (Xt(
    !1,
    `"${i}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${qs}"`
  ), null) : i;
}
function Dv(i, l) {
  let s, r, c, f, p;
  if (Tv(i)) {
    let m = i.getAttribute("action");
    r = m ? ma(m, l) : null, s = i.getAttribute("method") || Hs, c = Mu(i.getAttribute("enctype")) || qs, f = new FormData(i);
  } else if (jv(i) || Ov(i) && (i.type === "submit" || i.type === "image")) {
    let m = i.form;
    if (m == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let h = i.getAttribute("formaction") || m.getAttribute("action");
    if (r = h ? ma(h, l) : null, s = i.getAttribute("formmethod") || m.getAttribute("method") || Hs, c = Mu(i.getAttribute("formenctype")) || Mu(m.getAttribute("enctype")) || qs, f = new FormData(m, i), !Mv()) {
      let { name: d, type: g, value: y } = i;
      if (g === "image") {
        let x = d ? `${d}.` : "";
        f.append(`${x}x`, "0"), f.append(`${x}y`, "0");
      } else d && f.append(d, y);
    }
  } else {
    if (er(i))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    s = Hs, r = null, c = qs, p = i;
  }
  return f && c === "text/plain" && (p = f, f = void 0), { action: r, method: s.toLowerCase(), encType: c, formData: f, body: p };
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function ic(i, l) {
  if (i === !1 || i === null || typeof i > "u")
    throw new Error(l);
}
function Uv(i, l, s, r) {
  let c = typeof i == "string" ? new URL(
    i,
    // This can be called during the SSR flow via PrefetchPageLinksImpl so
    // don't assume window is available
    typeof window > "u" ? "server://singlefetch/" : window.location.origin
  ) : i;
  return s ? c.pathname.endsWith("/") ? c.pathname = `${c.pathname}_.${r}` : c.pathname = `${c.pathname}.${r}` : c.pathname === "/" ? c.pathname = `_root.${r}` : l && ma(c.pathname, l) === "/" ? c.pathname = `${l.replace(/\/$/, "")}/_root.${r}` : c.pathname = `${c.pathname.replace(/\/$/, "")}.${r}`, c;
}
async function $v(i, l) {
  if (i.id in l)
    return l[i.id];
  try {
    let s = await import(
      /* @vite-ignore */
      /* webpackIgnore: true */
      i.module
    );
    return l[i.id] = s, s;
  } catch (s) {
    return console.error(
      `Error loading route module \`${i.module}\`, reloading page...`
    ), console.error(s), window.__reactRouterContext && window.__reactRouterContext.isSpaMode, window.location.reload(), new Promise(() => {
    });
  }
}
function kv(i) {
  return i == null ? !1 : i.href == null ? i.rel === "preload" && typeof i.imageSrcSet == "string" && typeof i.imageSizes == "string" : typeof i.rel == "string" && typeof i.href == "string";
}
async function Bv(i, l, s) {
  let r = await Promise.all(
    i.map(async (c) => {
      let f = l.routes[c.route.id];
      if (f) {
        let p = await $v(f, s);
        return p.links ? p.links() : [];
      }
      return [];
    })
  );
  return Yv(
    r.flat(1).filter(kv).filter((c) => c.rel === "stylesheet" || c.rel === "preload").map(
      (c) => c.rel === "stylesheet" ? { ...c, rel: "prefetch", as: "style" } : { ...c, rel: "prefetch" }
    )
  );
}
function Lm(i, l, s, r, c, f) {
  let p = (h, d) => s[d] ? h.route.id !== s[d].route.id : !0, m = (h, d) => (
    // param change, /users/123 -> /users/456
    s[d].pathname !== h.pathname || // splat param changed, which is not present in match.path
    // e.g. /files/images/avatar.jpg -> files/finances.xls
    s[d].route.path?.endsWith("*") && s[d].params["*"] !== h.params["*"]
  );
  return f === "assets" ? l.filter(
    (h, d) => p(h, d) || m(h, d)
  ) : f === "data" ? l.filter((h, d) => {
    let g = r.routes[h.route.id];
    if (!g || !g.hasLoader)
      return !1;
    if (p(h, d) || m(h, d))
      return !0;
    if (h.route.shouldRevalidate) {
      let y = h.route.shouldRevalidate({
        currentUrl: new URL(
          c.pathname + c.search + c.hash,
          window.origin
        ),
        currentParams: s[0]?.params || {},
        nextUrl: new URL(i, window.origin),
        nextParams: h.params,
        defaultShouldRevalidate: !0
      });
      if (typeof y == "boolean")
        return y;
    }
    return !0;
  }) : [];
}
function Hv(i, l, { includeHydrateFallback: s } = {}) {
  return qv(
    i.map((r) => {
      let c = l.routes[r.route.id];
      if (!c) return [];
      let f = [c.module];
      return c.clientActionModule && (f = f.concat(c.clientActionModule)), c.clientLoaderModule && (f = f.concat(c.clientLoaderModule)), s && c.hydrateFallbackModule && (f = f.concat(c.hydrateFallbackModule)), c.imports && (f = f.concat(c.imports)), f;
    }).flat(1)
  );
}
function qv(i) {
  return [...new Set(i)];
}
function Vv(i) {
  let l = {}, s = Object.keys(i).sort();
  for (let r of s)
    l[r] = i[r];
  return l;
}
function Yv(i, l) {
  let s = /* @__PURE__ */ new Set();
  return new Set(l), i.reduce((r, c) => {
    let f = JSON.stringify(Vv(c));
    return s.has(f) || (s.add(f), r.push({ key: f, link: c })), r;
  }, []);
}
function Qp() {
  let i = A.useContext(sl);
  return ic(
    i,
    "You must render this element inside a <DataRouterContext.Provider> element"
  ), i;
}
function Gv() {
  let i = A.useContext(Ws);
  return ic(
    i,
    "You must render this element inside a <DataRouterStateContext.Provider> element"
  ), i;
}
var sc = A.createContext(void 0);
sc.displayName = "FrameworkContext";
function Kp() {
  let i = A.useContext(sc);
  return ic(
    i,
    "You must render this element inside a <HydratedRouter> element"
  ), i;
}
function Qv(i, l) {
  let s = A.useContext(sc), [r, c] = A.useState(!1), [f, p] = A.useState(!1), { onFocus: m, onBlur: h, onMouseEnter: d, onMouseLeave: g, onTouchStart: y } = l, x = A.useRef(null);
  A.useEffect(() => {
    if (i === "render" && p(!0), i === "viewport") {
      let j = (z) => {
        z.forEach((M) => {
          p(M.isIntersecting);
        });
      }, N = new IntersectionObserver(j, { threshold: 0.5 });
      return x.current && N.observe(x.current), () => {
        N.disconnect();
      };
    }
  }, [i]), A.useEffect(() => {
    if (r) {
      let j = setTimeout(() => {
        p(!0);
      }, 100);
      return () => {
        clearTimeout(j);
      };
    }
  }, [r]);
  let w = () => {
    c(!0);
  }, E = () => {
    c(!1), p(!1);
  };
  return s ? i !== "intent" ? [f, x, {}] : [
    f,
    x,
    {
      onFocus: ai(m, w),
      onBlur: ai(h, E),
      onMouseEnter: ai(d, w),
      onMouseLeave: ai(g, E),
      onTouchStart: ai(y, w)
    }
  ] : [!1, x, {}];
}
function ai(i, l) {
  return (s) => {
    i && i(s), s.defaultPrevented || l(s);
  };
}
function Kv({ page: i, ...l }) {
  let { router: s } = Qp(), r = A.useMemo(
    () => Op(s.routes, i, s.basename),
    [s.routes, i, s.basename]
  );
  return r ? /* @__PURE__ */ A.createElement(Fv, { page: i, matches: r, ...l }) : null;
}
function Xv(i) {
  let { manifest: l, routeModules: s } = Kp(), [r, c] = A.useState([]);
  return A.useEffect(() => {
    let f = !1;
    return Bv(i, l, s).then(
      (p) => {
        f || c(p);
      }
    ), () => {
      f = !0;
    };
  }, [i, l, s]), r;
}
function Fv({
  page: i,
  matches: l,
  ...s
}) {
  let r = pn(), { future: c, manifest: f, routeModules: p } = Kp(), { basename: m } = Qp(), { loaderData: h, matches: d } = Gv(), g = A.useMemo(
    () => Lm(
      i,
      l,
      d,
      f,
      r,
      "data"
    ),
    [i, l, d, f, r]
  ), y = A.useMemo(
    () => Lm(
      i,
      l,
      d,
      f,
      r,
      "assets"
    ),
    [i, l, d, f, r]
  ), x = A.useMemo(() => {
    if (i === r.pathname + r.search + r.hash)
      return [];
    let j = /* @__PURE__ */ new Set(), N = !1;
    if (l.forEach((M) => {
      let $ = f.routes[M.route.id];
      !$ || !$.hasLoader || (!g.some((O) => O.route.id === M.route.id) && M.route.id in h && p[M.route.id]?.shouldRevalidate || $.hasClientLoader ? N = !0 : j.add(M.route.id));
    }), j.size === 0)
      return [];
    let z = Uv(
      i,
      m,
      c.unstable_trailingSlashAwareDataRequests,
      "data"
    );
    return N && j.size > 0 && z.searchParams.set(
      "_routes",
      l.filter((M) => j.has(M.route.id)).map((M) => M.route.id).join(",")
    ), [z.pathname + z.search];
  }, [
    m,
    c.unstable_trailingSlashAwareDataRequests,
    h,
    r,
    f,
    g,
    l,
    i,
    p
  ]), w = A.useMemo(
    () => Hv(y, f),
    [y, f]
  ), E = Xv(y);
  return /* @__PURE__ */ A.createElement(A.Fragment, null, x.map((j) => /* @__PURE__ */ A.createElement("link", { key: j, rel: "prefetch", as: "fetch", href: j, ...s })), w.map((j) => /* @__PURE__ */ A.createElement("link", { key: j, rel: "modulepreload", href: j, ...s })), E.map(({ key: j, link: N }) => (
    // these don't spread `linkProps` because they are full link descriptors
    // already with their own props
    /* @__PURE__ */ A.createElement(
      "link",
      {
        key: j,
        nonce: s.nonce,
        ...N,
        crossOrigin: N.crossOrigin ?? s.crossOrigin
      }
    )
  )));
}
function Zv(...i) {
  return (l) => {
    i.forEach((s) => {
      typeof s == "function" ? s(l) : s != null && (s.current = l);
    });
  };
}
var Jv = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
try {
  Jv && (window.__reactRouterVersion = // @ts-expect-error
  "7.13.0");
} catch {
}
function Iv({
  basename: i,
  children: l,
  unstable_useTransitions: s,
  window: r
}) {
  let c = A.useRef();
  c.current == null && (c.current = zy({ window: r, v5Compat: !0 }));
  let f = c.current, [p, m] = A.useState({
    action: f.action,
    location: f.location
  }), h = A.useCallback(
    (d) => {
      s === !1 ? m(d) : A.startTransition(() => m(d));
    },
    [s]
  );
  return A.useLayoutEffect(() => f.listen(h), [f, h]), /* @__PURE__ */ A.createElement(
    Rv,
    {
      basename: i,
      children: l,
      location: p.location,
      navigationType: p.action,
      navigator: f,
      unstable_useTransitions: s
    }
  );
}
var Xp = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, pt = A.forwardRef(
  function({
    onClick: l,
    discover: s = "render",
    prefetch: r = "none",
    relative: c,
    reloadDocument: f,
    replace: p,
    state: m,
    target: h,
    to: d,
    preventScrollReset: g,
    viewTransition: y,
    unstable_defaultShouldRevalidate: x,
    ...w
  }, E) {
    let { basename: j, unstable_useTransitions: N } = A.useContext($t), z = typeof d == "string" && Xp.test(d), M = Up(d, j);
    d = M.to;
    let $ = fv(d, { relative: c }), [O, H, X] = Qv(
      r,
      w
    ), Q = t2(d, {
      replace: p,
      state: m,
      target: h,
      preventScrollReset: g,
      relative: c,
      viewTransition: y,
      unstable_defaultShouldRevalidate: x,
      unstable_useTransitions: N
    });
    function F(P) {
      l && l(P), P.defaultPrevented || Q(P);
    }
    let I = (
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      /* @__PURE__ */ A.createElement(
        "a",
        {
          ...w,
          ...X,
          href: M.absoluteURL || $,
          onClick: M.isExternal || f ? l : F,
          ref: Zv(E, H),
          target: h,
          "data-discover": !z && s === "render" ? "true" : void 0
        }
      )
    );
    return O && !z ? /* @__PURE__ */ A.createElement(A.Fragment, null, I, /* @__PURE__ */ A.createElement(Kv, { page: $ })) : I;
  }
);
pt.displayName = "Link";
var Pv = A.forwardRef(
  function({
    "aria-current": l = "page",
    caseSensitive: s = !1,
    className: r = "",
    end: c = !1,
    style: f,
    to: p,
    viewTransition: m,
    children: h,
    ...d
  }, g) {
    let y = yi(p, { relative: d.relative }), x = pn(), w = A.useContext(Ws), { navigator: E, basename: j } = A.useContext($t), N = w != null && // Conditional usage is OK here because the usage of a data router is static
    // eslint-disable-next-line react-hooks/rules-of-hooks
    s2(y) && m === !0, z = E.encodeLocation ? E.encodeLocation(y).pathname : y.pathname, M = x.pathname, $ = w && w.navigation && w.navigation.location ? w.navigation.location.pathname : null;
    s || (M = M.toLowerCase(), $ = $ ? $.toLowerCase() : null, z = z.toLowerCase()), $ && j && ($ = ma($, j) || $);
    const O = z !== "/" && z.endsWith("/") ? z.length - 1 : z.length;
    let H = M === z || !c && M.startsWith(z) && M.charAt(O) === "/", X = $ != null && ($ === z || !c && $.startsWith(z) && $.charAt(z.length) === "/"), Q = {
      isActive: H,
      isPending: X,
      isTransitioning: N
    }, F = H ? l : void 0, I;
    typeof r == "function" ? I = r(Q) : I = [
      r,
      H ? "active" : null,
      X ? "pending" : null,
      N ? "transitioning" : null
    ].filter(Boolean).join(" ");
    let P = typeof f == "function" ? f(Q) : f;
    return /* @__PURE__ */ A.createElement(
      pt,
      {
        ...d,
        "aria-current": F,
        className: I,
        ref: g,
        style: P,
        to: p,
        viewTransition: m
      },
      typeof h == "function" ? h(Q) : h
    );
  }
);
Pv.displayName = "NavLink";
var Wv = A.forwardRef(
  ({
    discover: i = "render",
    fetcherKey: l,
    navigate: s,
    reloadDocument: r,
    replace: c,
    state: f,
    method: p = Hs,
    action: m,
    onSubmit: h,
    relative: d,
    preventScrollReset: g,
    viewTransition: y,
    unstable_defaultShouldRevalidate: x,
    ...w
  }, E) => {
    let { unstable_useTransitions: j } = A.useContext($t), N = l2(), z = i2(m, { relative: d }), M = p.toLowerCase() === "get" ? "get" : "post", $ = typeof m == "string" && Xp.test(m), O = (H) => {
      if (h && h(H), H.defaultPrevented) return;
      H.preventDefault();
      let X = H.nativeEvent.submitter, Q = X?.getAttribute("formmethod") || p, F = () => N(X || H.currentTarget, {
        fetcherKey: l,
        method: Q,
        navigate: s,
        replace: c,
        state: f,
        relative: d,
        preventScrollReset: g,
        viewTransition: y,
        unstable_defaultShouldRevalidate: x
      });
      j && s !== !1 ? A.startTransition(() => F()) : F();
    };
    return /* @__PURE__ */ A.createElement(
      "form",
      {
        ref: E,
        method: M,
        action: z,
        onSubmit: r ? h : O,
        ...w,
        "data-discover": !$ && i === "render" ? "true" : void 0
      }
    );
  }
);
Wv.displayName = "Form";
function e2(i) {
  return `${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Fp(i) {
  let l = A.useContext(sl);
  return $e(l, e2(i)), l;
}
function t2(i, {
  target: l,
  replace: s,
  state: r,
  preventScrollReset: c,
  relative: f,
  viewTransition: p,
  unstable_defaultShouldRevalidate: m,
  unstable_useTransitions: h
} = {}) {
  let d = gi(), g = pn(), y = yi(i, { relative: f });
  return A.useCallback(
    (x) => {
      if (Lv(x, l)) {
        x.preventDefault();
        let w = s !== void 0 ? s : oi(g) === oi(y), E = () => d(i, {
          replace: w,
          state: r,
          preventScrollReset: c,
          relative: f,
          viewTransition: p,
          unstable_defaultShouldRevalidate: m
        });
        h ? A.startTransition(() => E()) : E();
      }
    },
    [
      g,
      d,
      y,
      s,
      r,
      l,
      i,
      c,
      f,
      p,
      m,
      h
    ]
  );
}
var a2 = 0, n2 = () => `__${String(++a2)}__`;
function l2() {
  let { router: i } = Fp(
    "useSubmit"
    /* UseSubmit */
  ), { basename: l } = A.useContext($t), s = wv(), r = i.fetch, c = i.navigate;
  return A.useCallback(
    async (f, p = {}) => {
      let { action: m, method: h, encType: d, formData: g, body: y } = Dv(
        f,
        l
      );
      if (p.navigate === !1) {
        let x = p.fetcherKey || n2();
        await r(x, s, p.action || m, {
          unstable_defaultShouldRevalidate: p.unstable_defaultShouldRevalidate,
          preventScrollReset: p.preventScrollReset,
          formData: g,
          body: y,
          formMethod: p.method || h,
          formEncType: p.encType || d,
          flushSync: p.flushSync
        });
      } else
        await c(p.action || m, {
          unstable_defaultShouldRevalidate: p.unstable_defaultShouldRevalidate,
          preventScrollReset: p.preventScrollReset,
          formData: g,
          body: y,
          formMethod: p.method || h,
          formEncType: p.encType || d,
          replace: p.replace,
          state: p.state,
          fromRouteId: s,
          flushSync: p.flushSync,
          viewTransition: p.viewTransition
        });
    },
    [r, c, l, s]
  );
}
function i2(i, { relative: l } = {}) {
  let { basename: s } = A.useContext($t), r = A.useContext(ga);
  $e(r, "useFormAction must be used inside a RouteContext");
  let [c] = r.matches.slice(-1), f = { ...yi(i || ".", { relative: l }) }, p = pn();
  if (i == null) {
    f.search = p.search;
    let m = new URLSearchParams(f.search), h = m.getAll("index");
    if (h.some((g) => g === "")) {
      m.delete("index"), h.filter((y) => y).forEach((y) => m.append("index", y));
      let g = m.toString();
      f.search = g ? `?${g}` : "";
    }
  }
  return (!i || i === ".") && c.route.index && (f.search = f.search ? f.search.replace(/^\?/, "?index&") : "?index"), s !== "/" && (f.pathname = f.pathname === "/" ? s : ha([s, f.pathname])), oi(f);
}
function s2(i, { relative: l } = {}) {
  let s = A.useContext(kp);
  $e(
    s != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: r } = Fp(
    "useViewTransitionState"
    /* useViewTransitionState */
  ), c = yi(i, { relative: l });
  if (!s.isTransitioning)
    return !1;
  let f = ma(s.currentLocation.pathname, r) || s.currentLocation.pathname, p = ma(s.nextLocation.pathname, r) || s.nextLocation.pathname;
  return Ks(c.pathname, p) != null || Ks(c.pathname, f) != null;
}
const oe = (i) => typeof i == "string", ni = () => {
  let i, l;
  const s = new Promise((r, c) => {
    i = r, l = c;
  });
  return s.resolve = i, s.reject = l, s;
}, Mm = (i) => i == null ? "" : "" + i, r2 = (i, l, s) => {
  i.forEach((r) => {
    l[r] && (s[r] = l[r]);
  });
}, o2 = /###/g, _m = (i) => i && i.indexOf("###") > -1 ? i.replace(o2, ".") : i, Dm = (i) => !i || oe(i), ii = (i, l, s) => {
  const r = oe(l) ? l.split(".") : l;
  let c = 0;
  for (; c < r.length - 1; ) {
    if (Dm(i)) return {};
    const f = _m(r[c]);
    !i[f] && s && (i[f] = new s()), Object.prototype.hasOwnProperty.call(i, f) ? i = i[f] : i = {}, ++c;
  }
  return Dm(i) ? {} : {
    obj: i,
    k: _m(r[c])
  };
}, Um = (i, l, s) => {
  const {
    obj: r,
    k: c
  } = ii(i, l, Object);
  if (r !== void 0 || l.length === 1) {
    r[c] = s;
    return;
  }
  let f = l[l.length - 1], p = l.slice(0, l.length - 1), m = ii(i, p, Object);
  for (; m.obj === void 0 && p.length; )
    f = `${p[p.length - 1]}.${f}`, p = p.slice(0, p.length - 1), m = ii(i, p, Object), m?.obj && typeof m.obj[`${m.k}.${f}`] < "u" && (m.obj = void 0);
  m.obj[`${m.k}.${f}`] = s;
}, u2 = (i, l, s, r) => {
  const {
    obj: c,
    k: f
  } = ii(i, l, Object);
  c[f] = c[f] || [], c[f].push(s);
}, Xs = (i, l) => {
  const {
    obj: s,
    k: r
  } = ii(i, l);
  if (s && Object.prototype.hasOwnProperty.call(s, r))
    return s[r];
}, c2 = (i, l, s) => {
  const r = Xs(i, s);
  return r !== void 0 ? r : Xs(l, s);
}, Zp = (i, l, s) => {
  for (const r in l)
    r !== "__proto__" && r !== "constructor" && (r in i ? oe(i[r]) || i[r] instanceof String || oe(l[r]) || l[r] instanceof String ? s && (i[r] = l[r]) : Zp(i[r], l[r], s) : i[r] = l[r]);
  return i;
}, tl = (i) => i.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
var f2 = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;"
};
const d2 = (i) => oe(i) ? i.replace(/[&<>"'\/]/g, (l) => f2[l]) : i;
class h2 {
  constructor(l) {
    this.capacity = l, this.regExpMap = /* @__PURE__ */ new Map(), this.regExpQueue = [];
  }
  getRegExp(l) {
    const s = this.regExpMap.get(l);
    if (s !== void 0)
      return s;
    const r = new RegExp(l);
    return this.regExpQueue.length === this.capacity && this.regExpMap.delete(this.regExpQueue.shift()), this.regExpMap.set(l, r), this.regExpQueue.push(l), r;
  }
}
const m2 = [" ", ",", "?", "!", ";"], p2 = new h2(20), g2 = (i, l, s) => {
  l = l || "", s = s || "";
  const r = m2.filter((p) => l.indexOf(p) < 0 && s.indexOf(p) < 0);
  if (r.length === 0) return !0;
  const c = p2.getRegExp(`(${r.map((p) => p === "?" ? "\\?" : p).join("|")})`);
  let f = !c.test(i);
  if (!f) {
    const p = i.indexOf(s);
    p > 0 && !c.test(i.substring(0, p)) && (f = !0);
  }
  return f;
}, Zu = (i, l, s = ".") => {
  if (!i) return;
  if (i[l])
    return Object.prototype.hasOwnProperty.call(i, l) ? i[l] : void 0;
  const r = l.split(s);
  let c = i;
  for (let f = 0; f < r.length; ) {
    if (!c || typeof c != "object")
      return;
    let p, m = "";
    for (let h = f; h < r.length; ++h)
      if (h !== f && (m += s), m += r[h], p = c[m], p !== void 0) {
        if (["string", "number", "boolean"].indexOf(typeof p) > -1 && h < r.length - 1)
          continue;
        f += h - f + 1;
        break;
      }
    c = p;
  }
  return c;
}, ui = (i) => i?.replace("_", "-"), y2 = {
  type: "logger",
  log(i) {
    this.output("log", i);
  },
  warn(i) {
    this.output("warn", i);
  },
  error(i) {
    this.output("error", i);
  },
  output(i, l) {
    console?.[i]?.apply?.(console, l);
  }
};
class Fs {
  constructor(l, s = {}) {
    this.init(l, s);
  }
  init(l, s = {}) {
    this.prefix = s.prefix || "i18next:", this.logger = l || y2, this.options = s, this.debug = s.debug;
  }
  log(...l) {
    return this.forward(l, "log", "", !0);
  }
  warn(...l) {
    return this.forward(l, "warn", "", !0);
  }
  error(...l) {
    return this.forward(l, "error", "");
  }
  deprecate(...l) {
    return this.forward(l, "warn", "WARNING DEPRECATED: ", !0);
  }
  forward(l, s, r, c) {
    return c && !this.debug ? null : (oe(l[0]) && (l[0] = `${r}${this.prefix} ${l[0]}`), this.logger[s](l));
  }
  create(l) {
    return new Fs(this.logger, {
      prefix: `${this.prefix}:${l}:`,
      ...this.options
    });
  }
  clone(l) {
    return l = l || this.options, l.prefix = l.prefix || this.prefix, new Fs(this.logger, l);
  }
}
var Kt = new Fs();
class tr {
  constructor() {
    this.observers = {};
  }
  on(l, s) {
    return l.split(" ").forEach((r) => {
      this.observers[r] || (this.observers[r] = /* @__PURE__ */ new Map());
      const c = this.observers[r].get(s) || 0;
      this.observers[r].set(s, c + 1);
    }), this;
  }
  off(l, s) {
    if (this.observers[l]) {
      if (!s) {
        delete this.observers[l];
        return;
      }
      this.observers[l].delete(s);
    }
  }
  emit(l, ...s) {
    this.observers[l] && Array.from(this.observers[l].entries()).forEach(([c, f]) => {
      for (let p = 0; p < f; p++)
        c(...s);
    }), this.observers["*"] && Array.from(this.observers["*"].entries()).forEach(([c, f]) => {
      for (let p = 0; p < f; p++)
        c.apply(c, [l, ...s]);
    });
  }
}
class $m extends tr {
  constructor(l, s = {
    ns: ["translation"],
    defaultNS: "translation"
  }) {
    super(), this.data = l || {}, this.options = s, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.options.ignoreJSONStructure === void 0 && (this.options.ignoreJSONStructure = !0);
  }
  addNamespaces(l) {
    this.options.ns.indexOf(l) < 0 && this.options.ns.push(l);
  }
  removeNamespaces(l) {
    const s = this.options.ns.indexOf(l);
    s > -1 && this.options.ns.splice(s, 1);
  }
  getResource(l, s, r, c = {}) {
    const f = c.keySeparator !== void 0 ? c.keySeparator : this.options.keySeparator, p = c.ignoreJSONStructure !== void 0 ? c.ignoreJSONStructure : this.options.ignoreJSONStructure;
    let m;
    l.indexOf(".") > -1 ? m = l.split(".") : (m = [l, s], r && (Array.isArray(r) ? m.push(...r) : oe(r) && f ? m.push(...r.split(f)) : m.push(r)));
    const h = Xs(this.data, m);
    return !h && !s && !r && l.indexOf(".") > -1 && (l = m[0], s = m[1], r = m.slice(2).join(".")), h || !p || !oe(r) ? h : Zu(this.data?.[l]?.[s], r, f);
  }
  addResource(l, s, r, c, f = {
    silent: !1
  }) {
    const p = f.keySeparator !== void 0 ? f.keySeparator : this.options.keySeparator;
    let m = [l, s];
    r && (m = m.concat(p ? r.split(p) : r)), l.indexOf(".") > -1 && (m = l.split("."), c = s, s = m[1]), this.addNamespaces(s), Um(this.data, m, c), f.silent || this.emit("added", l, s, r, c);
  }
  addResources(l, s, r, c = {
    silent: !1
  }) {
    for (const f in r)
      (oe(r[f]) || Array.isArray(r[f])) && this.addResource(l, s, f, r[f], {
        silent: !0
      });
    c.silent || this.emit("added", l, s, r);
  }
  addResourceBundle(l, s, r, c, f, p = {
    silent: !1,
    skipCopy: !1
  }) {
    let m = [l, s];
    l.indexOf(".") > -1 && (m = l.split("."), c = r, r = s, s = m[1]), this.addNamespaces(s);
    let h = Xs(this.data, m) || {};
    p.skipCopy || (r = JSON.parse(JSON.stringify(r))), c ? Zp(h, r, f) : h = {
      ...h,
      ...r
    }, Um(this.data, m, h), p.silent || this.emit("added", l, s, r);
  }
  removeResourceBundle(l, s) {
    this.hasResourceBundle(l, s) && delete this.data[l][s], this.removeNamespaces(s), this.emit("removed", l, s);
  }
  hasResourceBundle(l, s) {
    return this.getResource(l, s) !== void 0;
  }
  getResourceBundle(l, s) {
    return s || (s = this.options.defaultNS), this.getResource(l, s);
  }
  getDataByLanguage(l) {
    return this.data[l];
  }
  hasLanguageSomeTranslations(l) {
    const s = this.getDataByLanguage(l);
    return !!(s && Object.keys(s) || []).find((c) => s[c] && Object.keys(s[c]).length > 0);
  }
  toJSON() {
    return this.data;
  }
}
var Jp = {
  processors: {},
  addPostProcessor(i) {
    this.processors[i.name] = i;
  },
  handle(i, l, s, r, c) {
    return i.forEach((f) => {
      l = this.processors[f]?.process(l, s, r, c) ?? l;
    }), l;
  }
};
const Ip = /* @__PURE__ */ Symbol("i18next/PATH_KEY");
function v2() {
  const i = [], l = /* @__PURE__ */ Object.create(null);
  let s;
  return l.get = (r, c) => (s?.revoke?.(), c === Ip ? i : (i.push(c), s = Proxy.revocable(r, l), s.proxy)), Proxy.revocable(/* @__PURE__ */ Object.create(null), l).proxy;
}
function Zs(i, l) {
  const {
    [Ip]: s
  } = i(v2());
  return s.join(l?.keySeparator ?? ".");
}
const km = {}, _u = (i) => !oe(i) && typeof i != "boolean" && typeof i != "number";
class Js extends tr {
  constructor(l, s = {}) {
    super(), r2(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], l, this), this.options = s, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.logger = Kt.create("translator");
  }
  changeLanguage(l) {
    l && (this.language = l);
  }
  exists(l, s = {
    interpolation: {}
  }) {
    const r = {
      ...s
    };
    if (l == null) return !1;
    const c = this.resolve(l, r);
    if (c?.res === void 0) return !1;
    const f = _u(c.res);
    return !(r.returnObjects === !1 && f);
  }
  extractFromKey(l, s) {
    let r = s.nsSeparator !== void 0 ? s.nsSeparator : this.options.nsSeparator;
    r === void 0 && (r = ":");
    const c = s.keySeparator !== void 0 ? s.keySeparator : this.options.keySeparator;
    let f = s.ns || this.options.defaultNS || [];
    const p = r && l.indexOf(r) > -1, m = !this.options.userDefinedKeySeparator && !s.keySeparator && !this.options.userDefinedNsSeparator && !s.nsSeparator && !g2(l, r, c);
    if (p && !m) {
      const h = l.match(this.interpolator.nestingRegexp);
      if (h && h.length > 0)
        return {
          key: l,
          namespaces: oe(f) ? [f] : f
        };
      const d = l.split(r);
      (r !== c || r === c && this.options.ns.indexOf(d[0]) > -1) && (f = d.shift()), l = d.join(c);
    }
    return {
      key: l,
      namespaces: oe(f) ? [f] : f
    };
  }
  translate(l, s, r) {
    let c = typeof s == "object" ? {
      ...s
    } : s;
    if (typeof c != "object" && this.options.overloadTranslationOptionHandler && (c = this.options.overloadTranslationOptionHandler(arguments)), typeof c == "object" && (c = {
      ...c
    }), c || (c = {}), l == null) return "";
    typeof l == "function" && (l = Zs(l, {
      ...this.options,
      ...c
    })), Array.isArray(l) || (l = [String(l)]);
    const f = c.returnDetails !== void 0 ? c.returnDetails : this.options.returnDetails, p = c.keySeparator !== void 0 ? c.keySeparator : this.options.keySeparator, {
      key: m,
      namespaces: h
    } = this.extractFromKey(l[l.length - 1], c), d = h[h.length - 1];
    let g = c.nsSeparator !== void 0 ? c.nsSeparator : this.options.nsSeparator;
    g === void 0 && (g = ":");
    const y = c.lng || this.language, x = c.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if (y?.toLowerCase() === "cimode")
      return x ? f ? {
        res: `${d}${g}${m}`,
        usedKey: m,
        exactUsedKey: m,
        usedLng: y,
        usedNS: d,
        usedParams: this.getUsedParamsDetails(c)
      } : `${d}${g}${m}` : f ? {
        res: m,
        usedKey: m,
        exactUsedKey: m,
        usedLng: y,
        usedNS: d,
        usedParams: this.getUsedParamsDetails(c)
      } : m;
    const w = this.resolve(l, c);
    let E = w?.res;
    const j = w?.usedKey || m, N = w?.exactUsedKey || m, z = ["[object Number]", "[object Function]", "[object RegExp]"], M = c.joinArrays !== void 0 ? c.joinArrays : this.options.joinArrays, $ = !this.i18nFormat || this.i18nFormat.handleAsObject, O = c.count !== void 0 && !oe(c.count), H = Js.hasDefaultValue(c), X = O ? this.pluralResolver.getSuffix(y, c.count, c) : "", Q = c.ordinal && O ? this.pluralResolver.getSuffix(y, c.count, {
      ordinal: !1
    }) : "", F = O && !c.ordinal && c.count === 0, I = F && c[`defaultValue${this.options.pluralSeparator}zero`] || c[`defaultValue${X}`] || c[`defaultValue${Q}`] || c.defaultValue;
    let P = E;
    $ && !E && H && (P = I);
    const te = _u(P), se = Object.prototype.toString.apply(P);
    if ($ && P && te && z.indexOf(se) < 0 && !(oe(M) && Array.isArray(P))) {
      if (!c.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
        const re = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(j, P, {
          ...c,
          ns: h
        }) : `key '${m} (${this.language})' returned an object instead of string.`;
        return f ? (w.res = re, w.usedParams = this.getUsedParamsDetails(c), w) : re;
      }
      if (p) {
        const re = Array.isArray(P), ue = re ? [] : {}, we = re ? N : j;
        for (const k in P)
          if (Object.prototype.hasOwnProperty.call(P, k)) {
            const K = `${we}${p}${k}`;
            H && !E ? ue[k] = this.translate(K, {
              ...c,
              defaultValue: _u(I) ? I[k] : void 0,
              joinArrays: !1,
              ns: h
            }) : ue[k] = this.translate(K, {
              ...c,
              joinArrays: !1,
              ns: h
            }), ue[k] === K && (ue[k] = P[k]);
          }
        E = ue;
      }
    } else if ($ && oe(M) && Array.isArray(E))
      E = E.join(M), E && (E = this.extendTranslation(E, l, c, r));
    else {
      let re = !1, ue = !1;
      !this.isValidLookup(E) && H && (re = !0, E = I), this.isValidLookup(E) || (ue = !0, E = m);
      const k = (c.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && ue ? void 0 : E, K = H && I !== E && this.options.updateMissing;
      if (ue || re || K) {
        if (this.logger.log(K ? "updateKey" : "missingKey", y, d, m, K ? I : E), p) {
          const R = this.resolve(m, {
            ...c,
            keySeparator: !1
          });
          R && R.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
        }
        let J = [];
        const ce = this.languageUtils.getFallbackCodes(this.options.fallbackLng, c.lng || this.language);
        if (this.options.saveMissingTo === "fallback" && ce && ce[0])
          for (let R = 0; R < ce.length; R++)
            J.push(ce[R]);
        else this.options.saveMissingTo === "all" ? J = this.languageUtils.toResolveHierarchy(c.lng || this.language) : J.push(c.lng || this.language);
        const le = (R, V, Z) => {
          const W = H && Z !== E ? Z : k;
          this.options.missingKeyHandler ? this.options.missingKeyHandler(R, d, V, W, K, c) : this.backendConnector?.saveMissing && this.backendConnector.saveMissing(R, d, V, W, K, c), this.emit("missingKey", R, d, V, E);
        };
        this.options.saveMissing && (this.options.saveMissingPlurals && O ? J.forEach((R) => {
          const V = this.pluralResolver.getSuffixes(R, c);
          F && c[`defaultValue${this.options.pluralSeparator}zero`] && V.indexOf(`${this.options.pluralSeparator}zero`) < 0 && V.push(`${this.options.pluralSeparator}zero`), V.forEach((Z) => {
            le([R], m + Z, c[`defaultValue${Z}`] || I);
          });
        }) : le(J, m, I));
      }
      E = this.extendTranslation(E, l, c, w, r), ue && E === m && this.options.appendNamespaceToMissingKey && (E = `${d}${g}${m}`), (ue || re) && this.options.parseMissingKeyHandler && (E = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${d}${g}${m}` : m, re ? E : void 0, c));
    }
    return f ? (w.res = E, w.usedParams = this.getUsedParamsDetails(c), w) : E;
  }
  extendTranslation(l, s, r, c, f) {
    if (this.i18nFormat?.parse)
      l = this.i18nFormat.parse(l, {
        ...this.options.interpolation.defaultVariables,
        ...r
      }, r.lng || this.language || c.usedLng, c.usedNS, c.usedKey, {
        resolved: c
      });
    else if (!r.skipInterpolation) {
      r.interpolation && this.interpolator.init({
        ...r,
        interpolation: {
          ...this.options.interpolation,
          ...r.interpolation
        }
      });
      const h = oe(l) && (r?.interpolation?.skipOnVariables !== void 0 ? r.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
      let d;
      if (h) {
        const y = l.match(this.interpolator.nestingRegexp);
        d = y && y.length;
      }
      let g = r.replace && !oe(r.replace) ? r.replace : r;
      if (this.options.interpolation.defaultVariables && (g = {
        ...this.options.interpolation.defaultVariables,
        ...g
      }), l = this.interpolator.interpolate(l, g, r.lng || this.language || c.usedLng, r), h) {
        const y = l.match(this.interpolator.nestingRegexp), x = y && y.length;
        d < x && (r.nest = !1);
      }
      !r.lng && c && c.res && (r.lng = this.language || c.usedLng), r.nest !== !1 && (l = this.interpolator.nest(l, (...y) => f?.[0] === y[0] && !r.context ? (this.logger.warn(`It seems you are nesting recursively key: ${y[0]} in key: ${s[0]}`), null) : this.translate(...y, s), r)), r.interpolation && this.interpolator.reset();
    }
    const p = r.postProcess || this.options.postProcess, m = oe(p) ? [p] : p;
    return l != null && m?.length && r.applyPostProcessor !== !1 && (l = Jp.handle(m, l, s, this.options && this.options.postProcessPassResolved ? {
      i18nResolved: {
        ...c,
        usedParams: this.getUsedParamsDetails(r)
      },
      ...r
    } : r, this)), l;
  }
  resolve(l, s = {}) {
    let r, c, f, p, m;
    return oe(l) && (l = [l]), l.forEach((h) => {
      if (this.isValidLookup(r)) return;
      const d = this.extractFromKey(h, s), g = d.key;
      c = g;
      let y = d.namespaces;
      this.options.fallbackNS && (y = y.concat(this.options.fallbackNS));
      const x = s.count !== void 0 && !oe(s.count), w = x && !s.ordinal && s.count === 0, E = s.context !== void 0 && (oe(s.context) || typeof s.context == "number") && s.context !== "", j = s.lngs ? s.lngs : this.languageUtils.toResolveHierarchy(s.lng || this.language, s.fallbackLng);
      y.forEach((N) => {
        this.isValidLookup(r) || (m = N, !km[`${j[0]}-${N}`] && this.utils?.hasLoadedNamespace && !this.utils?.hasLoadedNamespace(m) && (km[`${j[0]}-${N}`] = !0, this.logger.warn(`key "${c}" for languages "${j.join(", ")}" won't get resolved as namespace "${m}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), j.forEach((z) => {
          if (this.isValidLookup(r)) return;
          p = z;
          const M = [g];
          if (this.i18nFormat?.addLookupKeys)
            this.i18nFormat.addLookupKeys(M, g, z, N, s);
          else {
            let O;
            x && (O = this.pluralResolver.getSuffix(z, s.count, s));
            const H = `${this.options.pluralSeparator}zero`, X = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
            if (x && (s.ordinal && O.indexOf(X) === 0 && M.push(g + O.replace(X, this.options.pluralSeparator)), M.push(g + O), w && M.push(g + H)), E) {
              const Q = `${g}${this.options.contextSeparator || "_"}${s.context}`;
              M.push(Q), x && (s.ordinal && O.indexOf(X) === 0 && M.push(Q + O.replace(X, this.options.pluralSeparator)), M.push(Q + O), w && M.push(Q + H));
            }
          }
          let $;
          for (; $ = M.pop(); )
            this.isValidLookup(r) || (f = $, r = this.getResource(z, N, $, s));
        }));
      });
    }), {
      res: r,
      usedKey: c,
      exactUsedKey: f,
      usedLng: p,
      usedNS: m
    };
  }
  isValidLookup(l) {
    return l !== void 0 && !(!this.options.returnNull && l === null) && !(!this.options.returnEmptyString && l === "");
  }
  getResource(l, s, r, c = {}) {
    return this.i18nFormat?.getResource ? this.i18nFormat.getResource(l, s, r, c) : this.resourceStore.getResource(l, s, r, c);
  }
  getUsedParamsDetails(l = {}) {
    const s = ["defaultValue", "ordinal", "context", "replace", "lng", "lngs", "fallbackLng", "ns", "keySeparator", "nsSeparator", "returnObjects", "returnDetails", "joinArrays", "postProcess", "interpolation"], r = l.replace && !oe(l.replace);
    let c = r ? l.replace : l;
    if (r && typeof l.count < "u" && (c.count = l.count), this.options.interpolation.defaultVariables && (c = {
      ...this.options.interpolation.defaultVariables,
      ...c
    }), !r) {
      c = {
        ...c
      };
      for (const f of s)
        delete c[f];
    }
    return c;
  }
  static hasDefaultValue(l) {
    const s = "defaultValue";
    for (const r in l)
      if (Object.prototype.hasOwnProperty.call(l, r) && s === r.substring(0, s.length) && l[r] !== void 0)
        return !0;
    return !1;
  }
}
class Bm {
  constructor(l) {
    this.options = l, this.supportedLngs = this.options.supportedLngs || !1, this.logger = Kt.create("languageUtils");
  }
  getScriptPartFromCode(l) {
    if (l = ui(l), !l || l.indexOf("-") < 0) return null;
    const s = l.split("-");
    return s.length === 2 || (s.pop(), s[s.length - 1].toLowerCase() === "x") ? null : this.formatLanguageCode(s.join("-"));
  }
  getLanguagePartFromCode(l) {
    if (l = ui(l), !l || l.indexOf("-") < 0) return l;
    const s = l.split("-");
    return this.formatLanguageCode(s[0]);
  }
  formatLanguageCode(l) {
    if (oe(l) && l.indexOf("-") > -1) {
      let s;
      try {
        s = Intl.getCanonicalLocales(l)[0];
      } catch {
      }
      return s && this.options.lowerCaseLng && (s = s.toLowerCase()), s || (this.options.lowerCaseLng ? l.toLowerCase() : l);
    }
    return this.options.cleanCode || this.options.lowerCaseLng ? l.toLowerCase() : l;
  }
  isSupportedCode(l) {
    return (this.options.load === "languageOnly" || this.options.nonExplicitSupportedLngs) && (l = this.getLanguagePartFromCode(l)), !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(l) > -1;
  }
  getBestMatchFromCodes(l) {
    if (!l) return null;
    let s;
    return l.forEach((r) => {
      if (s) return;
      const c = this.formatLanguageCode(r);
      (!this.options.supportedLngs || this.isSupportedCode(c)) && (s = c);
    }), !s && this.options.supportedLngs && l.forEach((r) => {
      if (s) return;
      const c = this.getScriptPartFromCode(r);
      if (this.isSupportedCode(c)) return s = c;
      const f = this.getLanguagePartFromCode(r);
      if (this.isSupportedCode(f)) return s = f;
      s = this.options.supportedLngs.find((p) => {
        if (p === f) return p;
        if (!(p.indexOf("-") < 0 && f.indexOf("-") < 0) && (p.indexOf("-") > 0 && f.indexOf("-") < 0 && p.substring(0, p.indexOf("-")) === f || p.indexOf(f) === 0 && f.length > 1))
          return p;
      });
    }), s || (s = this.getFallbackCodes(this.options.fallbackLng)[0]), s;
  }
  getFallbackCodes(l, s) {
    if (!l) return [];
    if (typeof l == "function" && (l = l(s)), oe(l) && (l = [l]), Array.isArray(l)) return l;
    if (!s) return l.default || [];
    let r = l[s];
    return r || (r = l[this.getScriptPartFromCode(s)]), r || (r = l[this.formatLanguageCode(s)]), r || (r = l[this.getLanguagePartFromCode(s)]), r || (r = l.default), r || [];
  }
  toResolveHierarchy(l, s) {
    const r = this.getFallbackCodes((s === !1 ? [] : s) || this.options.fallbackLng || [], l), c = [], f = (p) => {
      p && (this.isSupportedCode(p) ? c.push(p) : this.logger.warn(`rejecting language code not found in supportedLngs: ${p}`));
    };
    return oe(l) && (l.indexOf("-") > -1 || l.indexOf("_") > -1) ? (this.options.load !== "languageOnly" && f(this.formatLanguageCode(l)), this.options.load !== "languageOnly" && this.options.load !== "currentOnly" && f(this.getScriptPartFromCode(l)), this.options.load !== "currentOnly" && f(this.getLanguagePartFromCode(l))) : oe(l) && f(this.formatLanguageCode(l)), r.forEach((p) => {
      c.indexOf(p) < 0 && f(this.formatLanguageCode(p));
    }), c;
  }
}
const Hm = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
}, qm = {
  select: (i) => i === 1 ? "one" : "other",
  resolvedOptions: () => ({
    pluralCategories: ["one", "other"]
  })
};
class b2 {
  constructor(l, s = {}) {
    this.languageUtils = l, this.options = s, this.logger = Kt.create("pluralResolver"), this.pluralRulesCache = {};
  }
  clearCache() {
    this.pluralRulesCache = {};
  }
  getRule(l, s = {}) {
    const r = ui(l === "dev" ? "en" : l), c = s.ordinal ? "ordinal" : "cardinal", f = JSON.stringify({
      cleanedCode: r,
      type: c
    });
    if (f in this.pluralRulesCache)
      return this.pluralRulesCache[f];
    let p;
    try {
      p = new Intl.PluralRules(r, {
        type: c
      });
    } catch {
      if (!Intl)
        return this.logger.error("No Intl support, please use an Intl polyfill!"), qm;
      if (!l.match(/-|_/)) return qm;
      const h = this.languageUtils.getLanguagePartFromCode(l);
      p = this.getRule(h, s);
    }
    return this.pluralRulesCache[f] = p, p;
  }
  needsPlural(l, s = {}) {
    let r = this.getRule(l, s);
    return r || (r = this.getRule("dev", s)), r?.resolvedOptions().pluralCategories.length > 1;
  }
  getPluralFormsOfKey(l, s, r = {}) {
    return this.getSuffixes(l, r).map((c) => `${s}${c}`);
  }
  getSuffixes(l, s = {}) {
    let r = this.getRule(l, s);
    return r || (r = this.getRule("dev", s)), r ? r.resolvedOptions().pluralCategories.sort((c, f) => Hm[c] - Hm[f]).map((c) => `${this.options.prepend}${s.ordinal ? `ordinal${this.options.prepend}` : ""}${c}`) : [];
  }
  getSuffix(l, s, r = {}) {
    const c = this.getRule(l, r);
    return c ? `${this.options.prepend}${r.ordinal ? `ordinal${this.options.prepend}` : ""}${c.select(s)}` : (this.logger.warn(`no plural rule found for: ${l}`), this.getSuffix("dev", s, r));
  }
}
const Vm = (i, l, s, r = ".", c = !0) => {
  let f = c2(i, l, s);
  return !f && c && oe(s) && (f = Zu(i, s, r), f === void 0 && (f = Zu(l, s, r))), f;
}, Du = (i) => i.replace(/\$/g, "$$$$");
class Ym {
  constructor(l = {}) {
    this.logger = Kt.create("interpolator"), this.options = l, this.format = l?.interpolation?.format || ((s) => s), this.init(l);
  }
  init(l = {}) {
    l.interpolation || (l.interpolation = {
      escapeValue: !0
    });
    const {
      escape: s,
      escapeValue: r,
      useRawValueToEscape: c,
      prefix: f,
      prefixEscaped: p,
      suffix: m,
      suffixEscaped: h,
      formatSeparator: d,
      unescapeSuffix: g,
      unescapePrefix: y,
      nestingPrefix: x,
      nestingPrefixEscaped: w,
      nestingSuffix: E,
      nestingSuffixEscaped: j,
      nestingOptionsSeparator: N,
      maxReplaces: z,
      alwaysFormat: M
    } = l.interpolation;
    this.escape = s !== void 0 ? s : d2, this.escapeValue = r !== void 0 ? r : !0, this.useRawValueToEscape = c !== void 0 ? c : !1, this.prefix = f ? tl(f) : p || "{{", this.suffix = m ? tl(m) : h || "}}", this.formatSeparator = d || ",", this.unescapePrefix = g ? "" : y || "-", this.unescapeSuffix = this.unescapePrefix ? "" : g || "", this.nestingPrefix = x ? tl(x) : w || tl("$t("), this.nestingSuffix = E ? tl(E) : j || tl(")"), this.nestingOptionsSeparator = N || ",", this.maxReplaces = z || 1e3, this.alwaysFormat = M !== void 0 ? M : !1, this.resetRegExp();
  }
  reset() {
    this.options && this.init(this.options);
  }
  resetRegExp() {
    const l = (s, r) => s?.source === r ? (s.lastIndex = 0, s) : new RegExp(r, "g");
    this.regexp = l(this.regexp, `${this.prefix}(.+?)${this.suffix}`), this.regexpUnescape = l(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`), this.nestingRegexp = l(this.nestingRegexp, `${this.nestingPrefix}((?:[^()"']+|"[^"]*"|'[^']*'|\\((?:[^()]|"[^"]*"|'[^']*')*\\))*?)${this.nestingSuffix}`);
  }
  interpolate(l, s, r, c) {
    let f, p, m;
    const h = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {}, d = (w) => {
      if (w.indexOf(this.formatSeparator) < 0) {
        const z = Vm(s, h, w, this.options.keySeparator, this.options.ignoreJSONStructure);
        return this.alwaysFormat ? this.format(z, void 0, r, {
          ...c,
          ...s,
          interpolationkey: w
        }) : z;
      }
      const E = w.split(this.formatSeparator), j = E.shift().trim(), N = E.join(this.formatSeparator).trim();
      return this.format(Vm(s, h, j, this.options.keySeparator, this.options.ignoreJSONStructure), N, r, {
        ...c,
        ...s,
        interpolationkey: j
      });
    };
    this.resetRegExp();
    const g = c?.missingInterpolationHandler || this.options.missingInterpolationHandler, y = c?.interpolation?.skipOnVariables !== void 0 ? c.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
    return [{
      regex: this.regexpUnescape,
      safeValue: (w) => Du(w)
    }, {
      regex: this.regexp,
      safeValue: (w) => this.escapeValue ? Du(this.escape(w)) : Du(w)
    }].forEach((w) => {
      for (m = 0; f = w.regex.exec(l); ) {
        const E = f[1].trim();
        if (p = d(E), p === void 0)
          if (typeof g == "function") {
            const N = g(l, f, c);
            p = oe(N) ? N : "";
          } else if (c && Object.prototype.hasOwnProperty.call(c, E))
            p = "";
          else if (y) {
            p = f[0];
            continue;
          } else
            this.logger.warn(`missed to pass in variable ${E} for interpolating ${l}`), p = "";
        else !oe(p) && !this.useRawValueToEscape && (p = Mm(p));
        const j = w.safeValue(p);
        if (l = l.replace(f[0], j), y ? (w.regex.lastIndex += p.length, w.regex.lastIndex -= f[0].length) : w.regex.lastIndex = 0, m++, m >= this.maxReplaces)
          break;
      }
    }), l;
  }
  nest(l, s, r = {}) {
    let c, f, p;
    const m = (h, d) => {
      const g = this.nestingOptionsSeparator;
      if (h.indexOf(g) < 0) return h;
      const y = h.split(new RegExp(`${g}[ ]*{`));
      let x = `{${y[1]}`;
      h = y[0], x = this.interpolate(x, p);
      const w = x.match(/'/g), E = x.match(/"/g);
      ((w?.length ?? 0) % 2 === 0 && !E || E.length % 2 !== 0) && (x = x.replace(/'/g, '"'));
      try {
        p = JSON.parse(x), d && (p = {
          ...d,
          ...p
        });
      } catch (j) {
        return this.logger.warn(`failed parsing options string in nesting for key ${h}`, j), `${h}${g}${x}`;
      }
      return p.defaultValue && p.defaultValue.indexOf(this.prefix) > -1 && delete p.defaultValue, h;
    };
    for (; c = this.nestingRegexp.exec(l); ) {
      let h = [];
      p = {
        ...r
      }, p = p.replace && !oe(p.replace) ? p.replace : p, p.applyPostProcessor = !1, delete p.defaultValue;
      const d = /{.*}/.test(c[1]) ? c[1].lastIndexOf("}") + 1 : c[1].indexOf(this.formatSeparator);
      if (d !== -1 && (h = c[1].slice(d).split(this.formatSeparator).map((g) => g.trim()).filter(Boolean), c[1] = c[1].slice(0, d)), f = s(m.call(this, c[1].trim(), p), p), f && c[0] === l && !oe(f)) return f;
      oe(f) || (f = Mm(f)), f || (this.logger.warn(`missed to resolve ${c[1]} for nesting ${l}`), f = ""), h.length && (f = h.reduce((g, y) => this.format(g, y, r.lng, {
        ...r,
        interpolationkey: c[1].trim()
      }), f.trim())), l = l.replace(c[0], f), this.regexp.lastIndex = 0;
    }
    return l;
  }
}
const x2 = (i) => {
  let l = i.toLowerCase().trim();
  const s = {};
  if (i.indexOf("(") > -1) {
    const r = i.split("(");
    l = r[0].toLowerCase().trim();
    const c = r[1].substring(0, r[1].length - 1);
    l === "currency" && c.indexOf(":") < 0 ? s.currency || (s.currency = c.trim()) : l === "relativetime" && c.indexOf(":") < 0 ? s.range || (s.range = c.trim()) : c.split(";").forEach((p) => {
      if (p) {
        const [m, ...h] = p.split(":"), d = h.join(":").trim().replace(/^'+|'+$/g, ""), g = m.trim();
        s[g] || (s[g] = d), d === "false" && (s[g] = !1), d === "true" && (s[g] = !0), isNaN(d) || (s[g] = parseInt(d, 10));
      }
    });
  }
  return {
    formatName: l,
    formatOptions: s
  };
}, Gm = (i) => {
  const l = {};
  return (s, r, c) => {
    let f = c;
    c && c.interpolationkey && c.formatParams && c.formatParams[c.interpolationkey] && c[c.interpolationkey] && (f = {
      ...f,
      [c.interpolationkey]: void 0
    });
    const p = r + JSON.stringify(f);
    let m = l[p];
    return m || (m = i(ui(r), c), l[p] = m), m(s);
  };
}, S2 = (i) => (l, s, r) => i(ui(s), r)(l);
class w2 {
  constructor(l = {}) {
    this.logger = Kt.create("formatter"), this.options = l, this.init(l);
  }
  init(l, s = {
    interpolation: {}
  }) {
    this.formatSeparator = s.interpolation.formatSeparator || ",";
    const r = s.cacheInBuiltFormats ? Gm : S2;
    this.formats = {
      number: r((c, f) => {
        const p = new Intl.NumberFormat(c, {
          ...f
        });
        return (m) => p.format(m);
      }),
      currency: r((c, f) => {
        const p = new Intl.NumberFormat(c, {
          ...f,
          style: "currency"
        });
        return (m) => p.format(m);
      }),
      datetime: r((c, f) => {
        const p = new Intl.DateTimeFormat(c, {
          ...f
        });
        return (m) => p.format(m);
      }),
      relativetime: r((c, f) => {
        const p = new Intl.RelativeTimeFormat(c, {
          ...f
        });
        return (m) => p.format(m, f.range || "day");
      }),
      list: r((c, f) => {
        const p = new Intl.ListFormat(c, {
          ...f
        });
        return (m) => p.format(m);
      })
    };
  }
  add(l, s) {
    this.formats[l.toLowerCase().trim()] = s;
  }
  addCached(l, s) {
    this.formats[l.toLowerCase().trim()] = Gm(s);
  }
  format(l, s, r, c = {}) {
    const f = s.split(this.formatSeparator);
    if (f.length > 1 && f[0].indexOf("(") > 1 && f[0].indexOf(")") < 0 && f.find((m) => m.indexOf(")") > -1)) {
      const m = f.findIndex((h) => h.indexOf(")") > -1);
      f[0] = [f[0], ...f.splice(1, m)].join(this.formatSeparator);
    }
    return f.reduce((m, h) => {
      const {
        formatName: d,
        formatOptions: g
      } = x2(h);
      if (this.formats[d]) {
        let y = m;
        try {
          const x = c?.formatParams?.[c.interpolationkey] || {}, w = x.locale || x.lng || c.locale || c.lng || r;
          y = this.formats[d](m, w, {
            ...g,
            ...c,
            ...x
          });
        } catch (x) {
          this.logger.warn(x);
        }
        return y;
      } else
        this.logger.warn(`there was no format function for ${d}`);
      return m;
    }, l);
  }
}
const E2 = (i, l) => {
  i.pending[l] !== void 0 && (delete i.pending[l], i.pendingCount--);
};
class A2 extends tr {
  constructor(l, s, r, c = {}) {
    super(), this.backend = l, this.store = s, this.services = r, this.languageUtils = r.languageUtils, this.options = c, this.logger = Kt.create("backendConnector"), this.waitingReads = [], this.maxParallelReads = c.maxParallelReads || 10, this.readingCalls = 0, this.maxRetries = c.maxRetries >= 0 ? c.maxRetries : 5, this.retryTimeout = c.retryTimeout >= 1 ? c.retryTimeout : 350, this.state = {}, this.queue = [], this.backend?.init?.(r, c.backend, c);
  }
  queueLoad(l, s, r, c) {
    const f = {}, p = {}, m = {}, h = {};
    return l.forEach((d) => {
      let g = !0;
      s.forEach((y) => {
        const x = `${d}|${y}`;
        !r.reload && this.store.hasResourceBundle(d, y) ? this.state[x] = 2 : this.state[x] < 0 || (this.state[x] === 1 ? p[x] === void 0 && (p[x] = !0) : (this.state[x] = 1, g = !1, p[x] === void 0 && (p[x] = !0), f[x] === void 0 && (f[x] = !0), h[y] === void 0 && (h[y] = !0)));
      }), g || (m[d] = !0);
    }), (Object.keys(f).length || Object.keys(p).length) && this.queue.push({
      pending: p,
      pendingCount: Object.keys(p).length,
      loaded: {},
      errors: [],
      callback: c
    }), {
      toLoad: Object.keys(f),
      pending: Object.keys(p),
      toLoadLanguages: Object.keys(m),
      toLoadNamespaces: Object.keys(h)
    };
  }
  loaded(l, s, r) {
    const c = l.split("|"), f = c[0], p = c[1];
    s && this.emit("failedLoading", f, p, s), !s && r && this.store.addResourceBundle(f, p, r, void 0, void 0, {
      skipCopy: !0
    }), this.state[l] = s ? -1 : 2, s && r && (this.state[l] = 0);
    const m = {};
    this.queue.forEach((h) => {
      u2(h.loaded, [f], p), E2(h, l), s && h.errors.push(s), h.pendingCount === 0 && !h.done && (Object.keys(h.loaded).forEach((d) => {
        m[d] || (m[d] = {});
        const g = h.loaded[d];
        g.length && g.forEach((y) => {
          m[d][y] === void 0 && (m[d][y] = !0);
        });
      }), h.done = !0, h.errors.length ? h.callback(h.errors) : h.callback());
    }), this.emit("loaded", m), this.queue = this.queue.filter((h) => !h.done);
  }
  read(l, s, r, c = 0, f = this.retryTimeout, p) {
    if (!l.length) return p(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({
        lng: l,
        ns: s,
        fcName: r,
        tried: c,
        wait: f,
        callback: p
      });
      return;
    }
    this.readingCalls++;
    const m = (d, g) => {
      if (this.readingCalls--, this.waitingReads.length > 0) {
        const y = this.waitingReads.shift();
        this.read(y.lng, y.ns, y.fcName, y.tried, y.wait, y.callback);
      }
      if (d && g && c < this.maxRetries) {
        setTimeout(() => {
          this.read.call(this, l, s, r, c + 1, f * 2, p);
        }, f);
        return;
      }
      p(d, g);
    }, h = this.backend[r].bind(this.backend);
    if (h.length === 2) {
      try {
        const d = h(l, s);
        d && typeof d.then == "function" ? d.then((g) => m(null, g)).catch(m) : m(null, d);
      } catch (d) {
        m(d);
      }
      return;
    }
    return h(l, s, m);
  }
  prepareLoading(l, s, r = {}, c) {
    if (!this.backend)
      return this.logger.warn("No backend was added via i18next.use. Will not load resources."), c && c();
    oe(l) && (l = this.languageUtils.toResolveHierarchy(l)), oe(s) && (s = [s]);
    const f = this.queueLoad(l, s, r, c);
    if (!f.toLoad.length)
      return f.pending.length || c(), null;
    f.toLoad.forEach((p) => {
      this.loadOne(p);
    });
  }
  load(l, s, r) {
    this.prepareLoading(l, s, {}, r);
  }
  reload(l, s, r) {
    this.prepareLoading(l, s, {
      reload: !0
    }, r);
  }
  loadOne(l, s = "") {
    const r = l.split("|"), c = r[0], f = r[1];
    this.read(c, f, "read", void 0, void 0, (p, m) => {
      p && this.logger.warn(`${s}loading namespace ${f} for language ${c} failed`, p), !p && m && this.logger.log(`${s}loaded namespace ${f} for language ${c}`, m), this.loaded(l, p, m);
    });
  }
  saveMissing(l, s, r, c, f, p = {}, m = () => {
  }) {
    if (this.services?.utils?.hasLoadedNamespace && !this.services?.utils?.hasLoadedNamespace(s)) {
      this.logger.warn(`did not save key "${r}" as the namespace "${s}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
      return;
    }
    if (!(r == null || r === "")) {
      if (this.backend?.create) {
        const h = {
          ...p,
          isUpdate: f
        }, d = this.backend.create.bind(this.backend);
        if (d.length < 6)
          try {
            let g;
            d.length === 5 ? g = d(l, s, r, c, h) : g = d(l, s, r, c), g && typeof g.then == "function" ? g.then((y) => m(null, y)).catch(m) : m(null, g);
          } catch (g) {
            m(g);
          }
        else
          d(l, s, r, c, m, h);
      }
      !l || !l[0] || this.store.addResource(l[0], s, r, c);
    }
  }
}
const Uu = () => ({
  debug: !1,
  initAsync: !0,
  ns: ["translation"],
  defaultNS: ["translation"],
  fallbackLng: ["dev"],
  fallbackNS: !1,
  supportedLngs: !1,
  nonExplicitSupportedLngs: !1,
  load: "all",
  preload: !1,
  simplifyPluralSuffix: !0,
  keySeparator: ".",
  nsSeparator: ":",
  pluralSeparator: "_",
  contextSeparator: "_",
  partialBundledLanguages: !1,
  saveMissing: !1,
  updateMissing: !1,
  saveMissingTo: "fallback",
  saveMissingPlurals: !0,
  missingKeyHandler: !1,
  missingInterpolationHandler: !1,
  postProcess: !1,
  postProcessPassResolved: !1,
  returnNull: !1,
  returnEmptyString: !0,
  returnObjects: !1,
  joinArrays: !1,
  returnedObjectHandler: !1,
  parseMissingKeyHandler: !1,
  appendNamespaceToMissingKey: !1,
  appendNamespaceToCIMode: !1,
  overloadTranslationOptionHandler: (i) => {
    let l = {};
    if (typeof i[1] == "object" && (l = i[1]), oe(i[1]) && (l.defaultValue = i[1]), oe(i[2]) && (l.tDescription = i[2]), typeof i[2] == "object" || typeof i[3] == "object") {
      const s = i[3] || i[2];
      Object.keys(s).forEach((r) => {
        l[r] = s[r];
      });
    }
    return l;
  },
  interpolation: {
    escapeValue: !0,
    format: (i) => i,
    prefix: "{{",
    suffix: "}}",
    formatSeparator: ",",
    unescapePrefix: "-",
    nestingPrefix: "$t(",
    nestingSuffix: ")",
    nestingOptionsSeparator: ",",
    maxReplaces: 1e3,
    skipOnVariables: !0
  },
  cacheInBuiltFormats: !0
}), Qm = (i) => (oe(i.ns) && (i.ns = [i.ns]), oe(i.fallbackLng) && (i.fallbackLng = [i.fallbackLng]), oe(i.fallbackNS) && (i.fallbackNS = [i.fallbackNS]), i.supportedLngs?.indexOf?.("cimode") < 0 && (i.supportedLngs = i.supportedLngs.concat(["cimode"])), typeof i.initImmediate == "boolean" && (i.initAsync = i.initImmediate), i), $s = () => {
}, C2 = (i) => {
  Object.getOwnPropertyNames(Object.getPrototypeOf(i)).forEach((s) => {
    typeof i[s] == "function" && (i[s] = i[s].bind(i));
  });
}, R2 = (i) => !!(i?.modules?.backend?.name?.indexOf("Locize") > 0 || i?.modules?.backend?.constructor?.name?.indexOf("Locize") > 0 || i?.options?.backend?.backends && i.options.backend.backends.some((l) => l?.name?.indexOf("Locize") > 0 || l?.constructor?.name?.indexOf("Locize") > 0));
class si extends tr {
  constructor(l = {}, s) {
    if (super(), this.options = Qm(l), this.services = {}, this.logger = Kt, this.modules = {
      external: []
    }, C2(this), s && !this.isInitialized && !l.isClone) {
      if (!this.options.initAsync)
        return this.init(l, s), this;
      setTimeout(() => {
        this.init(l, s);
      }, 0);
    }
  }
  init(l = {}, s) {
    this.isInitializing = !0, typeof l == "function" && (s = l, l = {}), l.defaultNS == null && l.ns && (oe(l.ns) ? l.defaultNS = l.ns : l.ns.indexOf("translation") < 0 && (l.defaultNS = l.ns[0]));
    const r = Uu();
    this.options = {
      ...r,
      ...this.options,
      ...Qm(l)
    }, this.options.interpolation = {
      ...r.interpolation,
      ...this.options.interpolation
    }, l.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = l.keySeparator), l.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = l.nsSeparator), typeof this.options.overloadTranslationOptionHandler != "function" && (this.options.overloadTranslationOptionHandler = r.overloadTranslationOptionHandler), this.options.showSupportNotice !== !1 && !R2(this) && typeof console < "u" && typeof console.info < "u" && console.info("🌐 i18next is maintained with support from locize.com — consider powering your project with managed localization (AI, CDN, integrations): https://locize.com 💙");
    const c = (d) => d ? typeof d == "function" ? new d() : d : null;
    if (!this.options.isClone) {
      this.modules.logger ? Kt.init(c(this.modules.logger), this.options) : Kt.init(null, this.options);
      let d;
      this.modules.formatter ? d = this.modules.formatter : d = w2;
      const g = new Bm(this.options);
      this.store = new $m(this.options.resources, this.options);
      const y = this.services;
      y.logger = Kt, y.resourceStore = this.store, y.languageUtils = g, y.pluralResolver = new b2(g, {
        prepend: this.options.pluralSeparator,
        simplifyPluralSuffix: this.options.simplifyPluralSuffix
      }), this.options.interpolation.format && this.options.interpolation.format !== r.interpolation.format && this.logger.deprecate("init: you are still using the legacy format function, please use the new approach: https://www.i18next.com/translation-function/formatting"), d && (!this.options.interpolation.format || this.options.interpolation.format === r.interpolation.format) && (y.formatter = c(d), y.formatter.init && y.formatter.init(y, this.options), this.options.interpolation.format = y.formatter.format.bind(y.formatter)), y.interpolator = new Ym(this.options), y.utils = {
        hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
      }, y.backendConnector = new A2(c(this.modules.backend), y.resourceStore, y, this.options), y.backendConnector.on("*", (w, ...E) => {
        this.emit(w, ...E);
      }), this.modules.languageDetector && (y.languageDetector = c(this.modules.languageDetector), y.languageDetector.init && y.languageDetector.init(y, this.options.detection, this.options)), this.modules.i18nFormat && (y.i18nFormat = c(this.modules.i18nFormat), y.i18nFormat.init && y.i18nFormat.init(this)), this.translator = new Js(this.services, this.options), this.translator.on("*", (w, ...E) => {
        this.emit(w, ...E);
      }), this.modules.external.forEach((w) => {
        w.init && w.init(this);
      });
    }
    if (this.format = this.options.interpolation.format, s || (s = $s), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
      const d = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
      d.length > 0 && d[0] !== "dev" && (this.options.lng = d[0]);
    }
    !this.services.languageDetector && !this.options.lng && this.logger.warn("init: no languageDetector is used and no lng is defined"), ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach((d) => {
      this[d] = (...g) => this.store[d](...g);
    }), ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"].forEach((d) => {
      this[d] = (...g) => (this.store[d](...g), this);
    });
    const m = ni(), h = () => {
      const d = (g, y) => {
        this.isInitializing = !1, this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"), this.isInitialized = !0, this.options.isClone || this.logger.log("initialized", this.options), this.emit("initialized", this.options), m.resolve(y), s(g, y);
      };
      if (this.languages && !this.isInitialized) return d(null, this.t.bind(this));
      this.changeLanguage(this.options.lng, d);
    };
    return this.options.resources || !this.options.initAsync ? h() : setTimeout(h, 0), m;
  }
  loadResources(l, s = $s) {
    let r = s;
    const c = oe(l) ? l : this.language;
    if (typeof l == "function" && (r = l), !this.options.resources || this.options.partialBundledLanguages) {
      if (c?.toLowerCase() === "cimode" && (!this.options.preload || this.options.preload.length === 0)) return r();
      const f = [], p = (m) => {
        if (!m || m === "cimode") return;
        this.services.languageUtils.toResolveHierarchy(m).forEach((d) => {
          d !== "cimode" && f.indexOf(d) < 0 && f.push(d);
        });
      };
      c ? p(c) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach((h) => p(h)), this.options.preload?.forEach?.((m) => p(m)), this.services.backendConnector.load(f, this.options.ns, (m) => {
        !m && !this.resolvedLanguage && this.language && this.setResolvedLanguage(this.language), r(m);
      });
    } else
      r(null);
  }
  reloadResources(l, s, r) {
    const c = ni();
    return typeof l == "function" && (r = l, l = void 0), typeof s == "function" && (r = s, s = void 0), l || (l = this.languages), s || (s = this.options.ns), r || (r = $s), this.services.backendConnector.reload(l, s, (f) => {
      c.resolve(), r(f);
    }), c;
  }
  use(l) {
    if (!l) throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
    if (!l.type) throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
    return l.type === "backend" && (this.modules.backend = l), (l.type === "logger" || l.log && l.warn && l.error) && (this.modules.logger = l), l.type === "languageDetector" && (this.modules.languageDetector = l), l.type === "i18nFormat" && (this.modules.i18nFormat = l), l.type === "postProcessor" && Jp.addPostProcessor(l), l.type === "formatter" && (this.modules.formatter = l), l.type === "3rdParty" && this.modules.external.push(l), this;
  }
  setResolvedLanguage(l) {
    if (!(!l || !this.languages) && !(["cimode", "dev"].indexOf(l) > -1)) {
      for (let s = 0; s < this.languages.length; s++) {
        const r = this.languages[s];
        if (!(["cimode", "dev"].indexOf(r) > -1) && this.store.hasLanguageSomeTranslations(r)) {
          this.resolvedLanguage = r;
          break;
        }
      }
      !this.resolvedLanguage && this.languages.indexOf(l) < 0 && this.store.hasLanguageSomeTranslations(l) && (this.resolvedLanguage = l, this.languages.unshift(l));
    }
  }
  changeLanguage(l, s) {
    this.isLanguageChangingTo = l;
    const r = ni();
    this.emit("languageChanging", l);
    const c = (m) => {
      this.language = m, this.languages = this.services.languageUtils.toResolveHierarchy(m), this.resolvedLanguage = void 0, this.setResolvedLanguage(m);
    }, f = (m, h) => {
      h ? this.isLanguageChangingTo === l && (c(h), this.translator.changeLanguage(h), this.isLanguageChangingTo = void 0, this.emit("languageChanged", h), this.logger.log("languageChanged", h)) : this.isLanguageChangingTo = void 0, r.resolve((...d) => this.t(...d)), s && s(m, (...d) => this.t(...d));
    }, p = (m) => {
      !l && !m && this.services.languageDetector && (m = []);
      const h = oe(m) ? m : m && m[0], d = this.store.hasLanguageSomeTranslations(h) ? h : this.services.languageUtils.getBestMatchFromCodes(oe(m) ? [m] : m);
      d && (this.language || c(d), this.translator.language || this.translator.changeLanguage(d), this.services.languageDetector?.cacheUserLanguage?.(d)), this.loadResources(d, (g) => {
        f(g, d);
      });
    };
    return !l && this.services.languageDetector && !this.services.languageDetector.async ? p(this.services.languageDetector.detect()) : !l && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect.length === 0 ? this.services.languageDetector.detect().then(p) : this.services.languageDetector.detect(p) : p(l), r;
  }
  getFixedT(l, s, r) {
    const c = (f, p, ...m) => {
      let h;
      typeof p != "object" ? h = this.options.overloadTranslationOptionHandler([f, p].concat(m)) : h = {
        ...p
      }, h.lng = h.lng || c.lng, h.lngs = h.lngs || c.lngs, h.ns = h.ns || c.ns, h.keyPrefix !== "" && (h.keyPrefix = h.keyPrefix || r || c.keyPrefix);
      const d = this.options.keySeparator || ".";
      let g;
      return h.keyPrefix && Array.isArray(f) ? g = f.map((y) => (typeof y == "function" && (y = Zs(y, {
        ...this.options,
        ...p
      })), `${h.keyPrefix}${d}${y}`)) : (typeof f == "function" && (f = Zs(f, {
        ...this.options,
        ...p
      })), g = h.keyPrefix ? `${h.keyPrefix}${d}${f}` : f), this.t(g, h);
    };
    return oe(l) ? c.lng = l : c.lngs = l, c.ns = s, c.keyPrefix = r, c;
  }
  t(...l) {
    return this.translator?.translate(...l);
  }
  exists(...l) {
    return this.translator?.exists(...l);
  }
  setDefaultNamespace(l) {
    this.options.defaultNS = l;
  }
  hasLoadedNamespace(l, s = {}) {
    if (!this.isInitialized)
      return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages), !1;
    if (!this.languages || !this.languages.length)
      return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages), !1;
    const r = s.lng || this.resolvedLanguage || this.languages[0], c = this.options ? this.options.fallbackLng : !1, f = this.languages[this.languages.length - 1];
    if (r.toLowerCase() === "cimode") return !0;
    const p = (m, h) => {
      const d = this.services.backendConnector.state[`${m}|${h}`];
      return d === -1 || d === 0 || d === 2;
    };
    if (s.precheck) {
      const m = s.precheck(this, p);
      if (m !== void 0) return m;
    }
    return !!(this.hasResourceBundle(r, l) || !this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages || p(r, l) && (!c || p(f, l)));
  }
  loadNamespaces(l, s) {
    const r = ni();
    return this.options.ns ? (oe(l) && (l = [l]), l.forEach((c) => {
      this.options.ns.indexOf(c) < 0 && this.options.ns.push(c);
    }), this.loadResources((c) => {
      r.resolve(), s && s(c);
    }), r) : (s && s(), Promise.resolve());
  }
  loadLanguages(l, s) {
    const r = ni();
    oe(l) && (l = [l]);
    const c = this.options.preload || [], f = l.filter((p) => c.indexOf(p) < 0 && this.services.languageUtils.isSupportedCode(p));
    return f.length ? (this.options.preload = c.concat(f), this.loadResources((p) => {
      r.resolve(), s && s(p);
    }), r) : (s && s(), Promise.resolve());
  }
  dir(l) {
    if (l || (l = this.resolvedLanguage || (this.languages?.length > 0 ? this.languages[0] : this.language)), !l) return "rtl";
    try {
      const c = new Intl.Locale(l);
      if (c && c.getTextInfo) {
        const f = c.getTextInfo();
        if (f && f.direction) return f.direction;
      }
    } catch {
    }
    const s = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"], r = this.services?.languageUtils || new Bm(Uu());
    return l.toLowerCase().indexOf("-latn") > 1 ? "ltr" : s.indexOf(r.getLanguagePartFromCode(l)) > -1 || l.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
  }
  static createInstance(l = {}, s) {
    const r = new si(l, s);
    return r.createInstance = si.createInstance, r;
  }
  cloneInstance(l = {}, s = $s) {
    const r = l.forkResourceStore;
    r && delete l.forkResourceStore;
    const c = {
      ...this.options,
      ...l,
      isClone: !0
    }, f = new si(c);
    if ((l.debug !== void 0 || l.prefix !== void 0) && (f.logger = f.logger.clone(l)), ["store", "services", "language"].forEach((m) => {
      f[m] = this[m];
    }), f.services = {
      ...this.services
    }, f.services.utils = {
      hasLoadedNamespace: f.hasLoadedNamespace.bind(f)
    }, r) {
      const m = Object.keys(this.store.data).reduce((h, d) => (h[d] = {
        ...this.store.data[d]
      }, h[d] = Object.keys(h[d]).reduce((g, y) => (g[y] = {
        ...h[d][y]
      }, g), h[d]), h), {});
      f.store = new $m(m, c), f.services.resourceStore = f.store;
    }
    if (l.interpolation) {
      const h = {
        ...Uu().interpolation,
        ...this.options.interpolation,
        ...l.interpolation
      }, d = {
        ...c,
        interpolation: h
      };
      f.services.interpolator = new Ym(d);
    }
    return f.translator = new Js(f.services, c), f.translator.on("*", (m, ...h) => {
      f.emit(m, ...h);
    }), f.init(c, s), f.translator.options = c, f.translator.backendConnector.services.utils = {
      hasLoadedNamespace: f.hasLoadedNamespace.bind(f)
    }, f;
  }
  toJSON() {
    return {
      options: this.options,
      store: this.store,
      language: this.language,
      languages: this.languages,
      resolvedLanguage: this.resolvedLanguage
    };
  }
}
const it = si.createInstance();
it.createInstance;
it.dir;
it.init;
it.loadResources;
it.reloadResources;
it.use;
it.changeLanguage;
it.getFixedT;
it.t;
it.exists;
it.setDefaultNamespace;
it.hasLoadedNamespace;
it.loadNamespaces;
it.loadLanguages;
var $u, Km;
function N2() {
  return Km || (Km = 1, $u = {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
  }), $u;
}
var j2 = N2();
const T2 = /* @__PURE__ */ Ps(j2);
var O2 = /\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;
function Xm(i) {
  var l = { type: "tag", name: "", voidElement: !1, attrs: {}, children: [] }, s = i.match(/<\/?([^\s]+?)[/\s>]/);
  if (s && (l.name = s[1], (T2[s[1]] || i.charAt(i.length - 2) === "/") && (l.voidElement = !0), l.name.startsWith("!--"))) {
    var r = i.indexOf("-->");
    return { type: "comment", comment: r !== -1 ? i.slice(4, r) : "" };
  }
  for (var c = new RegExp(O2), f = null; (f = c.exec(i)) !== null; ) if (f[0].trim()) if (f[1]) {
    var p = f[1].trim(), m = [p, ""];
    p.indexOf("=") > -1 && (m = p.split("=")), l.attrs[m[0]] = m[1], c.lastIndex--;
  } else f[2] && (l.attrs[f[2]] = f[3].trim().substring(1, f[3].length - 1));
  return l;
}
var z2 = /<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g, L2 = /^\s*$/, M2 = /* @__PURE__ */ Object.create(null);
function Pp(i, l) {
  switch (l.type) {
    case "text":
      return i + l.content;
    case "tag":
      return i += "<" + l.name + (l.attrs ? (function(s) {
        var r = [];
        for (var c in s) r.push(c + '="' + s[c] + '"');
        return r.length ? " " + r.join(" ") : "";
      })(l.attrs) : "") + (l.voidElement ? "/>" : ">"), l.voidElement ? i : i + l.children.reduce(Pp, "") + "</" + l.name + ">";
    case "comment":
      return i + "<!--" + l.comment + "-->";
  }
}
var _2 = { parse: function(i, l) {
  l || (l = {}), l.components || (l.components = M2);
  var s, r = [], c = [], f = -1, p = !1;
  if (i.indexOf("<") !== 0) {
    var m = i.indexOf("<");
    r.push({ type: "text", content: m === -1 ? i : i.substring(0, m) });
  }
  return i.replace(z2, function(h, d) {
    if (p) {
      if (h !== "</" + s.name + ">") return;
      p = !1;
    }
    var g, y = h.charAt(1) !== "/", x = h.startsWith("<!--"), w = d + h.length, E = i.charAt(w);
    if (x) {
      var j = Xm(h);
      return f < 0 ? (r.push(j), r) : ((g = c[f]).children.push(j), r);
    }
    if (y && (f++, (s = Xm(h)).type === "tag" && l.components[s.name] && (s.type = "component", p = !0), s.voidElement || p || !E || E === "<" || s.children.push({ type: "text", content: i.slice(w, i.indexOf("<", w)) }), f === 0 && r.push(s), (g = c[f - 1]) && g.children.push(s), c[f] = s), (!y || s.voidElement) && (f > -1 && (s.voidElement || s.name === h.slice(2, -1)) && (f--, s = f === -1 ? r : c[f]), !p && E !== "<" && E)) {
      g = f === -1 ? r : c[f].children;
      var N = i.indexOf("<", w), z = i.slice(w, N === -1 ? void 0 : N);
      L2.test(z) && (z = " "), (N > -1 && f + g.length >= 0 || z !== " ") && g.push({ type: "text", content: z });
    }
  }), r;
}, stringify: function(i) {
  return i.reduce(function(l, s) {
    return l + Pp("", s);
  }, "");
} };
const Vs = (i, l, s, r) => {
  const c = [s, {
    code: l,
    ...r || {}
  }];
  if (i?.services?.logger?.forward)
    return i.services.logger.forward(c, "warn", "react-i18next::", !0);
  gt(c[0]) && (c[0] = `react-i18next:: ${c[0]}`), i?.services?.logger?.warn ? i.services.logger.warn(...c) : console?.warn && console.warn(...c);
}, Fm = {}, ar = (i, l, s, r) => {
  gt(s) && Fm[s] || (gt(s) && (Fm[s] = /* @__PURE__ */ new Date()), Vs(i, l, s, r));
}, Wp = (i, l) => () => {
  if (i.isInitialized)
    l();
  else {
    const s = () => {
      setTimeout(() => {
        i.off("initialized", s);
      }, 0), l();
    };
    i.on("initialized", s);
  }
}, Ju = (i, l, s) => {
  i.loadNamespaces(l, Wp(i, s));
}, Zm = (i, l, s, r) => {
  if (gt(s) && (s = [s]), i.options.preload && i.options.preload.indexOf(l) > -1) return Ju(i, s, r);
  s.forEach((c) => {
    i.options.ns.indexOf(c) < 0 && i.options.ns.push(c);
  }), i.loadLanguages(l, Wp(i, r));
}, D2 = (i, l, s = {}) => !l.languages || !l.languages.length ? (ar(l, "NO_LANGUAGES", "i18n.languages were undefined or empty", {
  languages: l.languages
}), !0) : l.hasLoadedNamespace(i, {
  lng: s.lng,
  precheck: (r, c) => {
    if (s.bindI18n && s.bindI18n.indexOf("languageChanging") > -1 && r.services.backendConnector.backend && r.isLanguageChangingTo && !c(r.isLanguageChangingTo, i)) return !1;
  }
}), gt = (i) => typeof i == "string", da = (i) => typeof i == "object" && i !== null, U2 = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g, $2 = {
  "&amp;": "&",
  "&#38;": "&",
  "&lt;": "<",
  "&#60;": "<",
  "&gt;": ">",
  "&#62;": ">",
  "&apos;": "'",
  "&#39;": "'",
  "&quot;": '"',
  "&#34;": '"',
  "&nbsp;": " ",
  "&#160;": " ",
  "&copy;": "©",
  "&#169;": "©",
  "&reg;": "®",
  "&#174;": "®",
  "&hellip;": "…",
  "&#8230;": "…",
  "&#x2F;": "/",
  "&#47;": "/"
}, k2 = (i) => $2[i], eg = (i) => i.replace(U2, k2);
let Iu = {
  bindI18n: "languageChanged",
  bindI18nStore: "",
  transEmptyNodeValue: "",
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: "",
  transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
  useSuspense: !0,
  unescape: eg,
  transDefaultProps: void 0
};
const B2 = (i = {}) => {
  Iu = {
    ...Iu,
    ...i
  };
}, rc = () => Iu;
let tg;
const H2 = (i) => {
  tg = i;
}, oc = () => tg, Ys = (i, l) => {
  if (!i) return !1;
  const s = i.props?.children ?? i.children;
  return l ? s.length > 0 : !!s;
}, Gs = (i) => {
  if (!i) return [];
  const l = i.props?.children ?? i.children;
  return i.props?.i18nIsDynamicList ? dn(l) : l;
}, q2 = (i) => Array.isArray(i) && i.every(A.isValidElement), dn = (i) => Array.isArray(i) ? i : [i], V2 = (i, l) => {
  const s = {
    ...l
  };
  return s.props = {
    ...l.props,
    ...i.props
  }, s;
}, Y2 = (i) => {
  const l = {};
  if (!i) return l;
  const s = (r) => {
    dn(r).forEach((f) => {
      gt(f) || (Ys(f) ? s(Gs(f)) : da(f) && !A.isValidElement(f) && Object.assign(l, f));
    });
  };
  return s(i), l;
}, ag = (i, l, s, r) => {
  if (!i) return "";
  let c = "";
  const f = dn(i), p = l?.transSupportBasicHtmlNodes ? l.transKeepBasicHtmlNodesFor ?? [] : [];
  return f.forEach((m, h) => {
    if (gt(m)) {
      c += `${m}`;
      return;
    }
    if (A.isValidElement(m)) {
      const {
        props: d,
        type: g
      } = m, y = Object.keys(d).length, x = p.indexOf(g) > -1, w = d.children;
      if (!w && x && !y) {
        c += `<${g}/>`;
        return;
      }
      if (!w && (!x || y) || d.i18nIsDynamicList) {
        c += `<${h}></${h}>`;
        return;
      }
      if (x && y === 1 && gt(w)) {
        c += `<${g}>${w}</${g}>`;
        return;
      }
      const E = ag(w, l, s, r);
      c += `<${h}>${E}</${h}>`;
      return;
    }
    if (m === null) {
      Vs(s, "TRANS_NULL_VALUE", "Passed in a null value as child", {
        i18nKey: r
      });
      return;
    }
    if (da(m)) {
      const {
        format: d,
        ...g
      } = m, y = Object.keys(g);
      if (y.length === 1) {
        const x = d ? `${y[0]}, ${d}` : y[0];
        c += `{{${x}}}`;
        return;
      }
      Vs(s, "TRANS_INVALID_OBJ", "Invalid child - Object should only have keys {{ value, format }} (format is optional).", {
        i18nKey: r,
        child: m
      });
      return;
    }
    Vs(s, "TRANS_INVALID_VAR", "Passed in a variable like {number} - pass variables for interpolation as full objects like {{number}}.", {
      i18nKey: r,
      child: m
    });
  }), c;
}, G2 = (i, l = [], s = {}) => {
  if (!i) return i;
  const r = Object.keys(s), c = [...l, ...r];
  let f = "", p = 0;
  for (; p < i.length; )
    if (i[p] === "<") {
      let m = !1;
      const h = i.slice(p).match(/^<\/(\d+|[a-zA-Z][a-zA-Z0-9_-]*)>/);
      if (h) {
        const d = h[1];
        (/^\d+$/.test(d) || c.includes(d)) && (m = !0, f += h[0], p += h[0].length);
      }
      if (!m) {
        const d = i.slice(p).match(/^<(\d+|[a-zA-Z][a-zA-Z0-9_-]*)(\s+[\w-]+(?:=(?:"[^"]*"|'[^']*'|[^\s>]+))?)*\s*(\/)?>/);
        if (d) {
          const g = d[1];
          (/^\d+$/.test(g) || c.includes(g)) && (m = !0, f += d[0], p += d[0].length);
        }
      }
      m || (f += "&lt;", p += 1);
    } else
      f += i[p], p += 1;
  return f;
}, Q2 = (i, l, s, r, c, f, p) => {
  if (s === "") return [];
  const m = c.transKeepBasicHtmlNodesFor || [], h = s && new RegExp(m.map((M) => `<${M}`).join("|")).test(s);
  if (!i && !l && !h && !p) return [s];
  const d = l ?? {}, g = (M) => {
    dn(M).forEach((O) => {
      gt(O) || (Ys(O) ? g(Gs(O)) : da(O) && !A.isValidElement(O) && Object.assign(d, O));
    });
  };
  g(i);
  const y = G2(s, m, d), x = _2.parse(`<0>${y}</0>`), w = {
    ...d,
    ...f
  }, E = (M, $, O) => {
    const H = Gs(M), X = N(H, $.children, O);
    return q2(H) && X.length === 0 || M.props?.i18nIsDynamicList ? H : X;
  }, j = (M, $, O, H, X) => {
    M.dummy ? (M.children = $, O.push(A.cloneElement(M, {
      key: H
    }, X ? void 0 : $))) : O.push(...A.Children.map([M], (Q) => {
      const F = "data-i18n-is-dynamic-list", I = {
        key: H,
        [F]: void 0
      };
      return Q && Q.props && Object.keys(Q.props).forEach((P) => {
        P === "ref" || P === "children" || P === "i18nIsDynamicList" || P === F || (I[P] = Q.props[P]);
      }), A.cloneElement(Q, I, X ? null : $);
    }));
  }, N = (M, $, O) => {
    const H = dn(M);
    return dn($).reduce((Q, F, I) => {
      const P = F.children?.[0]?.content && r.services.interpolator.interpolate(F.children[0].content, w, r.language);
      if (F.type === "tag") {
        let te = H[parseInt(F.name, 10)];
        !te && l && (te = l[F.name]), O.length === 1 && !te && (te = O[0][F.name]), te || (te = {});
        const se = {
          ...F.attrs
        };
        p && Object.keys(se).forEach((J) => {
          const ce = se[J];
          gt(ce) && (se[J] = eg(ce));
        });
        const re = Object.keys(se).length !== 0 ? V2({
          props: se
        }, te) : te, ue = A.isValidElement(re), we = ue && Ys(F, !0) && !F.voidElement, k = h && da(re) && re.dummy && !ue, K = da(l) && Object.hasOwnProperty.call(l, F.name);
        if (gt(re)) {
          const J = r.services.interpolator.interpolate(re, w, r.language);
          Q.push(J);
        } else if (Ys(re) || we) {
          const J = E(re, F, O);
          j(re, J, Q, I);
        } else if (k) {
          const J = N(H, F.children, O);
          j(re, J, Q, I);
        } else if (Number.isNaN(parseFloat(F.name)))
          if (K) {
            const J = E(re, F, O);
            j(re, J, Q, I, F.voidElement);
          } else if (c.transSupportBasicHtmlNodes && m.indexOf(F.name) > -1)
            if (F.voidElement)
              Q.push(A.createElement(F.name, {
                key: `${F.name}-${I}`
              }));
            else {
              const J = N(H, F.children, O);
              Q.push(A.createElement(F.name, {
                key: `${F.name}-${I}`
              }, J));
            }
          else if (F.voidElement)
            Q.push(`<${F.name} />`);
          else {
            const J = N(H, F.children, O);
            Q.push(`<${F.name}>${J}</${F.name}>`);
          }
        else if (da(re) && !ue) {
          const J = F.children[0] ? P : null;
          J && Q.push(J);
        } else
          j(re, P, Q, I, F.children.length !== 1 || !P);
      } else if (F.type === "text") {
        const te = c.transWrapTextNodes, se = typeof c.unescape == "function" ? c.unescape : rc().unescape, re = p ? se(r.services.interpolator.interpolate(F.content, w, r.language)) : r.services.interpolator.interpolate(F.content, w, r.language);
        te ? Q.push(A.createElement(te, {
          key: `${F.name}-${I}`
        }, re)) : Q.push(re);
      }
      return Q;
    }, []);
  }, z = N([{
    dummy: !0,
    children: i || []
  }], x, dn(i || []));
  return Gs(z[0]);
}, ng = (i, l, s) => {
  const r = i.key || l, c = A.cloneElement(i, {
    key: r
  });
  if (!c.props || !c.props.children || s.indexOf(`${l}/>`) < 0 && s.indexOf(`${l} />`) < 0)
    return c;
  function f() {
    return A.createElement(A.Fragment, null, c);
  }
  return A.createElement(f, {
    key: r
  });
}, K2 = (i, l) => i.map((s, r) => ng(s, r, l)), X2 = (i, l) => {
  const s = {};
  return Object.keys(i).forEach((r) => {
    Object.assign(s, {
      [r]: ng(i[r], r, l)
    });
  }), s;
}, F2 = (i, l, s, r) => i ? Array.isArray(i) ? K2(i, l) : da(i) ? X2(i, l) : (ar(s, "TRANS_INVALID_COMPONENTS", '<Trans /> "components" prop expects an object or array', {
  i18nKey: r
}), null) : null, Z2 = (i) => !da(i) || Array.isArray(i) ? !1 : Object.keys(i).reduce((l, s) => l && Number.isNaN(Number.parseFloat(s)), !0);
function J2({
  children: i,
  count: l,
  parent: s,
  i18nKey: r,
  context: c,
  tOptions: f = {},
  values: p,
  defaults: m,
  components: h,
  ns: d,
  i18n: g,
  t: y,
  shouldUnescape: x,
  ...w
}) {
  const E = g || oc();
  if (!E)
    return ar(E, "NO_I18NEXT_INSTANCE", "Trans: You need to pass in an i18next instance using i18nextReactModule", {
      i18nKey: r
    }), i;
  const j = y || E.t.bind(E) || ((le) => le), N = {
    ...rc(),
    ...E.options?.react
  };
  let z = d || j.ns || E.options?.defaultNS;
  z = gt(z) ? [z] : z || ["translation"];
  const {
    transDefaultProps: M
  } = N, $ = M?.tOptions ? {
    ...M.tOptions,
    ...f
  } : f, O = x ?? M?.shouldUnescape, H = M?.values ? {
    ...M.values,
    ...p
  } : p, X = M?.components ? {
    ...M.components,
    ...h
  } : h, Q = ag(i, N, E, r), F = m || $?.defaultValue || Q || N.transEmptyNodeValue || (typeof r == "function" ? Zs(r) : r), {
    hashTransKey: I
  } = N, P = r || (I ? I(Q || F) : Q || F);
  E.options?.interpolation?.defaultVariables ? p = H && Object.keys(H).length > 0 ? {
    ...H,
    ...E.options.interpolation.defaultVariables
  } : {
    ...E.options.interpolation.defaultVariables
  } : p = H;
  const te = Y2(i);
  te && typeof te.count == "number" && l === void 0 && (l = te.count);
  const se = p || l !== void 0 && !E.options?.interpolation?.alwaysFormat || !i ? $.interpolation : {
    interpolation: {
      ...$.interpolation,
      prefix: "#$?",
      suffix: "?$#"
    }
  }, re = {
    ...$,
    context: c || $.context,
    count: l,
    ...p,
    ...se,
    defaultValue: F,
    ns: z
  };
  let ue = P ? j(P, re) : F;
  ue === P && F && (ue = F);
  const we = F2(X, ue, E, r);
  let k = we || i, K = null;
  Z2(we) && (K = we, k = i);
  const J = Q2(k, K, ue, E, N, re, O), ce = s ?? N.defaultTransParent;
  return ce ? A.createElement(ce, w, J) : J;
}
const I2 = {
  type: "3rdParty",
  init(i) {
    B2(i.options.react), H2(i);
  }
}, lg = A.createContext();
class P2 {
  constructor() {
    this.usedNamespaces = {};
  }
  addUsedNamespaces(l) {
    l.forEach((s) => {
      this.usedNamespaces[s] || (this.usedNamespaces[s] = !0);
    });
  }
  getUsedNamespaces() {
    return Object.keys(this.usedNamespaces);
  }
}
function Qt({
  children: i,
  count: l,
  parent: s,
  i18nKey: r,
  context: c,
  tOptions: f = {},
  values: p,
  defaults: m,
  components: h,
  ns: d,
  i18n: g,
  t: y,
  shouldUnescape: x,
  ...w
}) {
  const {
    i18n: E,
    defaultNS: j
  } = A.useContext(lg) || {}, N = g || E || oc(), z = y || N?.t.bind(N);
  return J2({
    children: i,
    count: l,
    parent: s,
    i18nKey: r,
    context: c,
    tOptions: f,
    values: p,
    defaults: m,
    components: h,
    ns: d || z?.ns || j || N?.options?.defaultNS,
    i18n: N,
    t: y,
    shouldUnescape: x,
    ...w
  });
}
var ku = { exports: {} }, Bu = {};
var Jm;
function W2() {
  if (Jm) return Bu;
  Jm = 1;
  var i = di();
  function l(y, x) {
    return y === x && (y !== 0 || 1 / y === 1 / x) || y !== y && x !== x;
  }
  var s = typeof Object.is == "function" ? Object.is : l, r = i.useState, c = i.useEffect, f = i.useLayoutEffect, p = i.useDebugValue;
  function m(y, x) {
    var w = x(), E = r({ inst: { value: w, getSnapshot: x } }), j = E[0].inst, N = E[1];
    return f(
      function() {
        j.value = w, j.getSnapshot = x, h(j) && N({ inst: j });
      },
      [y, w, x]
    ), c(
      function() {
        return h(j) && N({ inst: j }), y(function() {
          h(j) && N({ inst: j });
        });
      },
      [y]
    ), p(w), w;
  }
  function h(y) {
    var x = y.getSnapshot;
    y = y.value;
    try {
      var w = x();
      return !s(y, w);
    } catch {
      return !0;
    }
  }
  function d(y, x) {
    return x();
  }
  var g = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? d : m;
  return Bu.useSyncExternalStore = i.useSyncExternalStore !== void 0 ? i.useSyncExternalStore : g, Bu;
}
var Im;
function eb() {
  return Im || (Im = 1, ku.exports = W2()), ku.exports;
}
var tb = eb();
const ab = (i, l) => gt(l) ? l : da(l) && gt(l.defaultValue) ? l.defaultValue : Array.isArray(i) ? i[i.length - 1] : i, nb = {
  t: ab,
  ready: !1
}, lb = () => () => {
}, ya = (i, l = {}) => {
  const {
    i18n: s
  } = l, {
    i18n: r,
    defaultNS: c
  } = A.useContext(lg) || {}, f = s || r || oc();
  f && !f.reportNamespaces && (f.reportNamespaces = new P2()), f || ar(f, "NO_I18NEXT_INSTANCE", "useTranslation: You will need to pass in an i18next instance by using initReactI18next");
  const p = A.useMemo(() => ({
    ...rc(),
    ...f?.options?.react,
    ...l
  }), [f, l]), {
    useSuspense: m,
    keyPrefix: h
  } = p, d = c || f?.options?.defaultNS, g = gt(d) ? [d] : d || ["translation"], y = A.useMemo(() => g, g);
  f?.reportNamespaces?.addUsedNamespaces?.(y);
  const x = A.useRef(0), w = A.useCallback((I) => {
    if (!f) return lb;
    const {
      bindI18n: P,
      bindI18nStore: te
    } = p, se = () => {
      x.current += 1, I();
    };
    return P && f.on(P, se), te && f.store.on(te, se), () => {
      P && P.split(" ").forEach((re) => f.off(re, se)), te && te.split(" ").forEach((re) => f.store.off(re, se));
    };
  }, [f, p]), E = A.useRef(), j = A.useCallback(() => {
    if (!f)
      return nb;
    const I = !!(f.isInitialized || f.initializedStoreOnce) && y.every((we) => D2(we, f, p)), P = l.lng || f.language, te = x.current, se = E.current;
    if (se && se.ready === I && se.lng === P && se.keyPrefix === h && se.revision === te)
      return se;
    const ue = {
      t: f.getFixedT(P, p.nsMode === "fallback" ? y : y[0], h),
      ready: I,
      lng: P,
      keyPrefix: h,
      revision: te
    };
    return E.current = ue, ue;
  }, [f, y, h, p, l.lng]), [N, z] = A.useState(0), {
    t: M,
    ready: $
  } = tb.useSyncExternalStore(w, j, j);
  A.useEffect(() => {
    if (f && !$ && !m) {
      const I = () => z((P) => P + 1);
      l.lng ? Zm(f, l.lng, y, I) : Ju(f, y, I);
    }
  }, [f, l.lng, y, $, m, N]);
  const O = f || {}, H = A.useRef(null), X = A.useRef(), Q = (I) => {
    const P = Object.getOwnPropertyDescriptors(I);
    P.__original && delete P.__original;
    const te = Object.create(Object.getPrototypeOf(I), P);
    if (!Object.prototype.hasOwnProperty.call(te, "__original"))
      try {
        Object.defineProperty(te, "__original", {
          value: I,
          writable: !1,
          enumerable: !1,
          configurable: !1
        });
      } catch {
      }
    return te;
  }, F = A.useMemo(() => {
    const I = O, P = I?.language;
    let te = I;
    I && (H.current && H.current.__original === I ? X.current !== P ? (te = Q(I), H.current = te, X.current = P) : te = H.current : (te = Q(I), H.current = te, X.current = P));
    const se = [M, te, $];
    return se.t = M, se.i18n = te, se.ready = $, se;
  }, [M, O, $, O.resolvedLanguage, O.language, O.languages]);
  if (f && m && !$)
    throw new Promise((I) => {
      const P = () => I();
      l.lng ? Zm(f, l.lng, y, P) : Ju(f, y, P);
    });
  return F;
}, ib = "Management", sb = "Comment", rb = "Login", ob = "Logout", ub = "Register", cb = "Email", fb = "Password", db = "Nickname", hb = "Personal Website", mb = "Setting", pb = "Profile", gb = "Homepage", yb = "All", vb = "Mine", bb = "Approved", xb = "Waiting", Sb = "Spam", wb = "Sticky", Eb = "Edit", Ab = "Reply", Cb = "Action", Rb = "Filter", Nb = "Author", jb = "Content", Tb = "Username", Ob = "Submit", zb = "Cancel", Lb = "At", Mb = "Migration", _b = "Exporting…", Db = "Under verification", Ub = "Administrator", $b = "Guest", kb = "User", Bb = "Role", Pm = {
  management: ib,
  comment: sb,
  login: rb,
  logout: ob,
  register: ub,
  email: cb,
  password: fb,
  "remember me": "Remember me",
  "back to home": "Back to Home",
  "please input email": "Please input email!",
  "please input password": "Please input password!",
  "email or password error": "Email or Password error!",
  nickname: db,
  website: hb,
  "password again": "Password Again",
  "register.login": "Login",
  "nickname illegal": "Nickname Illegal!",
  "passwords don't match": "Passwords don't match",
  setting: mb,
  profile: pb,
  "go to gravatar to change avatar": "Go to Gravatar to change avatar",
  homepage: gb,
  "homepage tips": "Current users' homepage. It must be start with <1>http://</1> or <1>https://</1>.",
  "update my profile": "Update my profile",
  "connect to social account": "Connect to Social Account",
  "change password": "Change Password",
  "update password": "Update password",
  "password tips": "It's recommended to use a mixed style of special characters, letters and numbers to increase system security.",
  "password again tips": "Please confirm your password, consistent with the password entered above.",
  "nickname and homepage are required": "Both nickname and personal homepage are required fields.",
  all: yb,
  mine: vb,
  approved: bb,
  "approved button": "Approved",
  waiting: xb,
  spam: Sb,
  "mark as spam": "Mark as Spam",
  "disable sticky": "Disable sticky",
  sticky: wb,
  edit: Eb,
  reply: Ab,
  delete: "Delete",
  "delete one confirm": "Are you sure you want to delete {{nick}}'s comment?",
  "delete multiple confirm": "Are you sure you want to delete these comments?",
  "manage comments": "Manage Comments",
  "select all": "Select All",
  action: Cb,
  "selected items": "Selected Action",
  "please input keywords": "Please input keywords",
  filter: Rb,
  author: Nb,
  content: jb,
  username: Tb,
  submit: Ob,
  cancel: zb,
  at: Lb,
  "get userinfo failed": "Get userinfo failed!",
  "register success! please go to your mailbox to verify it!": "Register success! Please go to your mailbox to verify it!",
  migration: Mb,
  exporting: _b,
  export: "Export",
  import: "Import",
  "import success": "Import Success",
  "import clear data confirm": "Notice! All current data will be overwrited by importing data, do you really want to continue?",
  "importing {{importedLength}}/{{maxLength}}": "Importing {{importedLength}}/{{maxLength}}",
  "comment data index relationship reconstruction": "Comment data index relationship reconstruction",
  "index updating {{importedLength}}/{{maxLength}}": "Index updating {{importedLength}}/{{maxLength}}",
  "please input avatar url": "Please input avatar URL",
  "change avatar": "Change avatar",
  "minimum 6 characters required": "Minimum 6 characters required!",
  "close 2fa confirm": "Two-step verification can greatly improve the security of your account. Are you sure to turn it off?",
  "two factor auth": "Two-step verification",
  "enable 2fa": "Enable Two-step verification",
  "disable 2fa": "Disable Two-step verification",
  "2fa description 1": 'Two-step verification, as can be seen from the name, "two-step" is the focus of 2FA, and 2FA in a broad sense refers to providing a variety of solutions to complete user authorization authentication.',
  "2fa description 2": "After enabling two-step verification, to log in to the background of the system, in addition to the user name and password, additional tokens must be provided, which can greatly improve the security of the system.",
  "next step": "Next Step",
  "download 2fa app": "Download Two-step verification app",
  "open app and scan qrcode": "Open the Two-step verification app and scan the QR code below",
  "input 2fa code": "Input Two-step verification code",
  "2fa code": "Two-step verification code",
  "forgot password": "Forgot Password",
  "get new password": "Get a new password",
  "you will receive an email which contains a link to create new password": "You'll receive an email which contains a link to create new password.",
  "find password success! please go to your mailbox to reset it!": "The reset password email has been sent successfully, please check it in your mailbox!",
  "find password error! try again later": "Failed to send reset password email, please try again later!",
  "set administrator": "Set Admin",
  "set guest": "Set Guest",
  "set label": "Set Label",
  verify: Db,
  administrator: Ub,
  guest: $b,
  user: kb,
  "manage users": "Manage Users",
  role: Bb,
  "exclusive label": "Exclusive Label",
  "You can't set yourself to be guest!": "You can't set yourself to be guest!",
  "please enter an exclusive label": "Please enter an exclusive label",
  "new version tips": "New version @waline/vercel@{{version}} published, please upgrade it! Goto <a href='https://waline.js.org/en/advanced/faq.html#server' target='_blank'>FAQ</a> to find How to upgrade it.",
  "leancloud warning": "<a href='https://github.com/orgs/walinejs/discussions/3370' target='_blank'>Leancloud will cease external services soon</a>. If you are using it, please migration your comment data as soon as possible.",
  "delete user confirm": "Are you sure to delete this user? Verify user will be deleted directly, while other users will be forbidden to login."
}, Hb = "管理", qb = "评论", Vb = "登录", Yb = "登出", Gb = "用户注册", Qb = "邮箱", Kb = "密码", Xb = "昵称", Fb = "个人网站", Zb = "个人设置", Jb = "个人资料", Ib = "个人主页地址", Pb = "所有", Wb = "我的", ex = "已通过", tx = "待审核", ax = "垃圾", nx = "置顶评论", lx = "编辑", ix = "回复", sx = "操作", rx = "筛选", ox = "作者", ux = "内容", cx = "用户名", fx = "提交", dx = "取消", hx = "于", mx = "导入导出", px = "导出中...", gx = "待认证", yx = "管理员", vx = "普通用户", bx = "用户", xx = "角色", Wm = {
  management: Hb,
  comment: qb,
  login: Vb,
  logout: Yb,
  register: Gb,
  email: Qb,
  password: Kb,
  "remember me": "下次自动登录",
  "back to home": "返回首页",
  "please input email": "请输入邮箱",
  "please input password": "请输入密码",
  "email or password error": "账号密码错误",
  nickname: Xb,
  website: Fb,
  "password again": "再次输入密码",
  "register.login": "用户登录",
  "nickname illegal": "请输入正确的昵称",
  "passwords don't match": "两次密码不一致",
  setting: Zb,
  profile: Jb,
  "go to gravatar to change avatar": "在 Gravatar 上修改头像",
  homepage: Ib,
  "homepage tips": "此用户的个人主页地址, 请用 <1>http://</1> 或 <1>https://</1> 开头.",
  "update my profile": "更新我的档案",
  "connect to social account": "账号绑定",
  "change password": "密码修改",
  "update password": "更新密码",
  "password tips": "为此用户分配一个密码.<br />建议使用特殊字符与字母、数字的混编样式,以增加系统安全性.",
  "password again tips": "请确认你的密码, 与上面输入的密码保持一致.",
  "nickname and homepage are required": "昵称和个人主页都是必填字段",
  all: Pb,
  mine: Wb,
  approved: ex,
  "approved button": "通过",
  waiting: tx,
  spam: ax,
  "mark as spam": "标记垃圾",
  "disable sticky": "取消置顶",
  sticky: nx,
  edit: lx,
  reply: ix,
  delete: "删除",
  "delete one confirm": "你确认要删除{{nick}}的评论吗？",
  "delete multiple confirm": "你确认要删除这些评论吗？",
  "manage comments": "管理评论",
  "select all": "全选",
  action: sx,
  "selected items": "选中项",
  "please input keywords": "请输入关键字",
  filter: rx,
  author: ox,
  content: ux,
  username: cx,
  submit: fx,
  cancel: dx,
  at: hx,
  "get userinfo failed": "获取用户信息失败",
  "register success! please go to your mailbox to verify it!": "注册成功！请到你的个人邮箱中确认注册！",
  migration: mx,
  exporting: px,
  export: "导出",
  import: "导入",
  "import success": "导入成功",
  "import clear data confirm": "注意！导入数据会覆盖当前所有数据，请确认是否继续操作？",
  "importing {{importedLength}}/{{maxLength}}": "开始导入 {{importedLength}}/{{maxLength}}",
  "comment data index relationship reconstruction": "评论数据索引重建中",
  "index updating {{importedLength}}/{{maxLength}}": "索引更新 {{importedLength}}/{{maxLength}}",
  "please input avatar url": "请输入 URL",
  "change avatar": "修改头像",
  "minimum 6 characters required": "请输入 6 位验证码",
  "close 2fa confirm": "两步验证可以大大提升账户的安全性，确定关闭吗？",
  "two factor auth": "两步验证",
  "enable 2fa": "开启两步验证",
  "disable 2fa": "关闭两步验证",
  "2fa description 1": "两步验证，对应的英文是 Two-factor Authentication(2FA)，或者 Two-step Verification。从名字可以看出， 「两步」是 2FA 的重点，广义的 2FA 是指提供多种方案完成用户权限鉴定。",
  "2fa description 2": "开启两步验证后，登录系统后台，除了要提供用户名和密码外，还要提供额外的 Token，这样可以大大提高系统的安全性。",
  "next step": "下一步",
  "download 2fa app": "下载对应的应用",
  "open app and scan qrcode": "打开两步验证的应用，扫描下面的二维码",
  "input 2fa code": "填写 6 位验证码",
  "2fa code": "两步验证码",
  "forgot password": "忘记密码",
  "get new password": "获取新密码",
  "you will receive an email which contains a link to create new password": "您会收到一封包含创建新密码链接的电子邮件。",
  "find password success! please go to your mailbox to reset it!": "重置密码邮件发送成功，请去邮箱中查收！",
  "find password error! try again later": "重置密码邮件发送失败，请稍后再试！",
  "set administrator": "成为管理员",
  "set guest": "成为普通用户",
  "set label": "设置专属标签",
  verify: gx,
  administrator: yx,
  guest: vx,
  user: bx,
  "manage users": "管理用户",
  role: xx,
  "exclusive label": "专属标签",
  "You can't set yourself to be guest!": "你不能将自己设置为普通用户！",
  "please enter an exclusive label": "请输入专属标签",
  "new version tips": '新版本 @waline/vercel@{{version}} 已发布，请尽快升级！查看 <a href="https://waline.js.org/advanced/faq.html#server" target="_blank">FAQ</a> 了解如何升级。',
  "leancloud warning": "<a href='https://github.com/orgs/walinejs/discussions/3370' target='_blank'>Leancloud 即将停止对外服务</a>。如果你正在使用它作为评论存储服务，请尽快迁移你的评论数据。",
  "delete user confirm": "你确定要删除这个用户吗？处于认证状态的用户会被直接删除，其他用户会被禁止登录。"
}, Sx = "管理", wx = "留言", Ex = "登入", Ax = "登出", Cx = "使用者註冊", Rx = "信箱", Nx = "密碼", jx = "暱稱", Tx = "個人網站", Ox = "個人設定", zx = "個人資料", Lx = "個人首頁網址", Mx = "所有", _x = "我的", Dx = "已通過", Ux = "待審核", $x = "垃圾", kx = "置頂留言", Bx = "編輯", Hx = "回覆", qx = "動作", Vx = "篩選", Yx = "作者", Gx = "內容", Qx = "使用者名稱", Kx = "送出", Xx = "取消", Fx = "於", Zx = "匯入匯出", Jx = "匯出中...", Ix = "待認證", Px = "管理員", Wx = "使用者", eS = "使用者", tS = "角色", aS = {
  management: Sx,
  comment: wx,
  login: Ex,
  logout: Ax,
  register: Cx,
  email: Rx,
  password: Nx,
  "remember me": "下次自動登入",
  "back to home": "回到首頁",
  "please input email": "請輸入信箱",
  "please input password": "請輸入密碼",
  "email or password error": "帳號密碼錯誤",
  nickname: jx,
  website: Tx,
  "password again": "再次輸入密碼",
  "register.login": "使用者登入",
  "nickname illegal": "請輸入正確的暱稱",
  "passwords don't match": "兩次密碼不一致",
  setting: Ox,
  profile: zx,
  "go to gravatar to change avatar": "在 Gravatar 上修改頭像",
  homepage: Lx,
  "homepage tips": "此使用者的個人首頁網址, 請用 <1>http://</1> 或 <1>https://</1> 開頭.",
  "update my profile": "更新我的檔案",
  "connect to social account": "帳號綁定",
  "change password": "密碼修改",
  "update password": "更新密碼",
  "password tips": "為此使用者指定一個密碼.<br />建議使用特殊符號與字母、數字的混合格式,以增加系統安全性.",
  "password again tips": "請確認你的密碼, 與上面輸入的密碼保持一致.",
  "nickname and homepage are required": "暱稱和個人首頁都是必填欄位",
  all: Mx,
  mine: _x,
  approved: Dx,
  "approved button": "通過",
  waiting: Ux,
  spam: $x,
  "mark as spam": "標記垃圾",
  "disable sticky": "取消置頂",
  sticky: kx,
  edit: Bx,
  reply: Hx,
  delete: "刪除",
  "delete one confirm": "你確認要刪除{{nick}}的留言嗎？",
  "delete multiple confirm": "你確認要刪除這些留言嗎？",
  "manage comments": "留言管理",
  "select all": "全選",
  action: qx,
  "selected items": "批次管理",
  "please input keywords": "請輸入關鍵字",
  filter: Vx,
  author: Yx,
  content: Gx,
  username: Qx,
  submit: Kx,
  cancel: Xx,
  at: Fx,
  "get userinfo failed": "取得使用者資料失敗",
  "register success! please go to your mailbox to verify it!": "註冊成功！請到你的個人信箱中確認註冊資訊！",
  migration: Zx,
  exporting: Jx,
  export: "匯出",
  import: "匯入",
  "import success": "匯入成功",
  "import clear data confirm": "注意！匯入資料會覆蓋目前所有資料，請確認是否繼續？",
  "importing {{importedLength}}/{{maxLength}}": "開始導入 {{importedLength}}/{{maxLength}}",
  "comment data index relationship reconstruction": "留言資料索引重建中",
  "index updating {{importedLength}}/{{maxLength}}": "索引更新 {{importedLength}}/{{maxLength}}",
  "please input avatar url": "請輸入頭像 URL",
  "change avatar": "修改頭像",
  "minimum 6 characters required": "請輸入 6 位驗證碼",
  "close 2fa confirm": "兩步驟驗證可以大大提升帳戶的安全性，確定關閉嗎？",
  "two factor auth": "兩步驟驗證",
  "enable 2fa": "開啟兩步驟驗證",
  "disable 2fa": "關閉兩步驟驗證",
  "2fa description 1": "兩步驟驗證，對應的英文是 Two-factor Authentication(2FA)，或者 Two-step Verification。從名字可以看出， 「兩步驟」是 2FA 的重點，廣義的 2FA 是指提供多種方法完成使用者身分識別。",
  "2fa description 2": "開啟兩步驟驗證後，登入系統後台時，除了要提供使用者名稱和密碼外，還要提供額外的 Token，這樣可以大大提高系統的安全性。",
  "next step": "下一步",
  "download 2fa app": "下載對應的應用",
  "open app and scan qrcode": "打開兩步驟驗證的應用程式，掃描下面的QR Code",
  "input 2fa code": "填寫 6 位驗證碼",
  "2fa code": "兩步驟驗證碼",
  "forgot password": "忘記密碼",
  "get new password": "取得新密碼",
  "you will receive an email which contains a link to create new password": "您會收到一封包含建立新密碼連結的電子郵件。",
  "find password success! please go to your mailbox to reset it!": "重設密碼郵件發送成功，請到信箱中確認！",
  "find password error! try again later": "重設密碼郵件發送失敗，請稍後再試！",
  "set administrator": "成為管理員",
  "set guest": "成為使用者",
  "set label": "設定專屬標籤",
  verify: Ix,
  administrator: Px,
  guest: Wx,
  user: eS,
  "manage users": "使用者管理",
  role: tS,
  "exclusive label": "專屬標籤",
  "You can't set yourself to be guest!": "你不能將自己設定為使用者！",
  "please enter an exclusive label": "請輸入專屬標籤",
  "new version tips": '新版本 @waline/vercel@{{version}} 已發佈，請盡快升級！檢視 <a href="https://waline.js.org/en/advanced/faq.html#server" target="_blank">FAQ</a> 了解如何升級。',
  "leancloud warning": "<a href='https://github.com/orgs/walinejs/discussions/3370' target='_blank'>Leancloud 即將停止對外服務</a>。如果你正在使用它作為評論存儲服務，請盡快遷移你的評論數據。",
  "delete user confirm": "你確定要刪除這個使用者嗎？處於認證狀態的使用者會被直接刪除，其他使用者會被禁止登入。"
}, nS = "管理", lS = "コメント", iS = "ログイン", sS = "ログアウト", rS = "ユーザー登録", oS = "メール", uS = "パスワード", cS = "ニックネーム", fS = "ウェブサイト", dS = "設定", hS = "プロフィール", mS = "ホームページURL", pS = "すべて", gS = "自分の", yS = "承認済み", vS = "承認待ち", bS = "スパム", xS = "固定コメント", SS = "編集", wS = "返信", ES = "操作", AS = "フィルター", CS = "投稿者", RS = "内容", NS = "ユーザー名", jS = "送信", TS = "キャンセル", OS = "に", zS = "インポート/エクスポート", LS = "エクスポート中...", MS = "未認証", _S = "管理者", DS = "一般ユーザー", US = "ユーザー", $S = "役割", ep = {
  management: nS,
  comment: lS,
  login: iS,
  logout: sS,
  register: rS,
  email: oS,
  password: uS,
  "remember me": "次回自動ログイン",
  "back to home": "ホームに戻る",
  "please input email": "メールアドレスを入力してください",
  "please input password": "パスワードを入力してください",
  "email or password error": "メールアドレスまたはパスワードが正しくありません",
  nickname: cS,
  website: fS,
  "password again": "パスワード（再入力）",
  "register.login": "ユーザーログイン",
  "nickname illegal": "有効なニックネームを入力してください",
  "passwords don't match": "パスワードが一致しません",
  setting: dS,
  profile: hS,
  "go to gravatar to change avatar": "アバターはGravatarで変更してください",
  homepage: mS,
  "homepage tips": "このユーザーのホームページのURLは、<1>http://</1> または <1>https://</1> で始めてください。",
  "update my profile": "プロフィールを更新",
  "connect to social account": "ソーシャルアカウント連携",
  "change password": "パスワード変更",
  "update password": "パスワードを更新",
  "password tips": "このユーザーのためにパスワードを設定します。<br />セキュリティ向上のため、記号と英字・数字を組み合わせたパスワードを推奨します。",
  "password again tips": "上で入力したパスワードと一致することを確認してください。",
  "nickname and homepage are required": "ニックネームとホームページは必須項目です",
  all: pS,
  mine: gS,
  approved: yS,
  "approved button": "承認",
  waiting: vS,
  spam: bS,
  "mark as spam": "スパムにする",
  "disable sticky": "固定を解除",
  sticky: xS,
  edit: SS,
  reply: wS,
  delete: "削除",
  "delete one confirm": "本当に{{nick}}さんのコメントを削除しますか？",
  "delete multiple confirm": "本当にこれらのコメントを削除しますか？",
  "manage comments": "コメントを管理",
  "select all": "すべて選択",
  action: ES,
  "selected items": "選択された項目",
  "please input keywords": "キーワードを入力してください",
  filter: AS,
  author: CS,
  content: RS,
  username: NS,
  submit: jS,
  cancel: TS,
  at: OS,
  "get userinfo failed": "ユーザー情報の取得に失敗しました",
  "register success! please go to your mailbox to verify it!": "登録に成功しました！確認メールを受信ボックスで確認してください。",
  migration: zS,
  exporting: LS,
  export: "エクスポート",
  import: "インポート",
  "import success": "インポートに成功しました",
  "import clear data confirm": "注意！インポートすると現在のデータがすべて上書きされます。続行しますか？",
  "importing {{importedLength}}/{{maxLength}}": "インポート中 {{importedLength}}/{{maxLength}}",
  "comment data index relationship reconstruction": "コメントデータのインデックス再構築中",
  "index updating {{importedLength}}/{{maxLength}}": "インデックス更新 {{importedLength}}/{{maxLength}}",
  "please input avatar url": "URLを入力してください",
  "change avatar": "アバターを変更",
  "minimum 6 characters required": "6桁のコードを入力してください",
  "close 2fa confirm": "二段階認証はアカウントのセキュリティを大幅に向上させます。本当に無効にしますか？",
  "two factor auth": "二段階認証",
  "enable 2fa": "二段階認証を有効化",
  "disable 2fa": "二段階認証を無効化",
  "2fa description 1": "二段階認証（Two-factor Authentication, 2FA または Two-step Verification）は、名前が示す通り「二段階」で認証を行う仕組みで、広義には複数の方法でユーザーの認証を行うことを指します。",
  "2fa description 2": "二段階認証を有効にすると、管理画面にログインする際にユーザー名とパスワードに加え、追加のトークンが必要になり、セキュリティが大幅に向上します。",
  "next step": "次へ",
  "download 2fa app": "対応アプリをダウンロード",
  "open app and scan qrcode": "二段階認証アプリを開き、下のQRコードをスキャンしてください",
  "input 2fa code": "6桁のコードを入力してください",
  "2fa code": "二段階認証コード",
  "forgot password": "パスワードを忘れた",
  "get new password": "新しいパスワードを取得",
  "you will receive an email which contains a link to create new password": "新しいパスワード作成用のリンクを含むメールが届きます。",
  "find password success! please go to your mailbox to reset it!": "パスワードリセット用のメールを送信しました。メールを確認してください。",
  "find password error! try again later": "パスワードリセットメールの送信に失敗しました。時間をおいて再試行してください。",
  "set administrator": "管理者にする",
  "set guest": "一般ユーザーにする",
  "set label": "専用ラベルを設定",
  verify: MS,
  administrator: _S,
  guest: DS,
  user: US,
  "manage users": "ユーザーを管理",
  role: $S,
  "exclusive label": "専用ラベル",
  "You can't set yourself to be guest!": "自分自身を一般ユーザーに設定することはできません！",
  "please enter an exclusive label": "専用ラベルを入力してください",
  "new version tips": '新しいバージョン @waline/vercel@{{version}} がリリースされました。できるだけ早くアップグレードしてください。アップグレード方法は<a href="https://waline.js.org/advanced/faq.html#server" target="_blank">FAQ</a>を参照してください。',
  "leancloud warning": "<a href='https://github.com/orgs/walinejs/discussions/3370' target='_blank'>Leancloud が外部サービスを停止する予定です</a>。コメントストレージとして使用している場合は、できるだけ早くデータを移行してください。",
  "delete user confirm": "このユーザーを本当に削除しますか？認証済みのユーザーは即座に削除され、その他のユーザーはログインが禁止されます。"
}, kS = "관리", BS = "댓글", HS = "로그인", qS = "로그아웃", VS = "가입", YS = "이메일", GS = "비밀번호", QS = "닉네임", KS = "개인 웹사이트", XS = "설정", FS = "프로필", ZS = "홈페이지", JS = "전체", IS = "내 댓글", PS = "승인됨", WS = "대기 중", ew = "스팸", tw = "고정", aw = "수정", nw = "답글", lw = "작업", iw = "필터", sw = "작성자", rw = "내용", ow = "사용자 이름", uw = "제출", cw = "취소", fw = "작성일", dw = "마이그레이션", hw = "내보내는 중…", mw = "인증 중", pw = "관리자", gw = "게스트", yw = "사용자", vw = "역할", tp = {
  management: kS,
  comment: BS,
  login: HS,
  logout: qS,
  register: VS,
  email: YS,
  password: GS,
  "remember me": "로그인 유지",
  "back to home": "홈으로 돌아가기",
  "please input email": "이메일을 입력해 주세요!",
  "please input password": "비밀번호를 입력해 주세요!",
  "email or password error": "이메일 또는 비밀번호 오류!",
  nickname: QS,
  website: KS,
  "password again": "비밀번호 확인",
  "register.login": "로그인",
  "nickname illegal": "닉네임이 올바르지 않습니다!",
  "passwords don't match": "비밀번호가 일치하지 않습니다",
  setting: XS,
  profile: FS,
  "go to gravatar to change avatar": "Gravatar에서 아바타 변경하기",
  homepage: ZS,
  "homepage tips": "현재 사용자의 홈페이지입니다. <1>http://</1> 또는 <1>https://</1>로 시작해야 합니다.",
  "update my profile": "프로필 업데이트",
  "connect to social account": "소셜 계정 연결",
  "change password": "비밀번호 변경",
  "update password": "비밀번호 업데이트",
  "password tips": "시스템 보안을 높이기 위해 특수문자, 영문, 숫자를 혼합하여 사용하는 것을 권장합니다.",
  "password again tips": "비밀번호를 확인해 주세요. 위에 입력한 비밀번호와 동일해야 합니다.",
  "nickname and homepage are required": "닉네임과 개인 홈페이지는 필수 항목입니다.",
  all: JS,
  mine: IS,
  approved: PS,
  "approved button": "승인",
  waiting: WS,
  spam: ew,
  "mark as spam": "스팸으로 표시",
  "disable sticky": "고정 해제",
  sticky: tw,
  edit: aw,
  reply: nw,
  delete: "삭제",
  "delete one confirm": "{{nick}}님의 댓글을 삭제하시겠습니까?",
  "delete multiple confirm": "선택한 댓글을 삭제하시겠습니까?",
  "manage comments": "댓글 관리",
  "select all": "전체 선택",
  action: lw,
  "selected items": "선택된 항목 작업",
  "please input keywords": "키워드를 입력해 주세요",
  filter: iw,
  author: sw,
  content: rw,
  username: ow,
  submit: uw,
  cancel: cw,
  at: fw,
  "get userinfo failed": "사용자 정보를 가져오는 데 실패했습니다!",
  "register success! please go to your mailbox to verify it!": "가입 성공! 메일함에서 인증을 완료해 주세요!",
  migration: dw,
  exporting: hw,
  export: "내보내기",
  import: "가져오기",
  "import success": "가져오기 성공",
  "import clear data confirm": "주의! 모든 현재 데이터가 가져온 데이터로 덮어써집니다. 계속하시겠습니까?",
  "importing {{importedLength}}/{{maxLength}}": "가져오는 중 {{importedLength}}/{{maxLength}}",
  "comment data index relationship reconstruction": "댓글 데이터 인덱스 관계 재구성",
  "index updating {{importedLength}}/{{maxLength}}": "인덱스 업데이트 중 {{importedLength}}/{{maxLength}}",
  "please input avatar url": "아바타 URL을 입력해 주세요",
  "change avatar": "아바타 변경",
  "minimum 6 characters required": "최소 6자 이상이어야 합니다!",
  "close 2fa confirm": "2단계 인증은 계정 보안을 크게 향상시킬 수 있습니다. 정말 끄시겠습니까?",
  "two factor auth": "2단계 인증",
  "enable 2fa": "2단계 인증 활성화",
  "disable 2fa": "2단계 인증 비활성화",
  "2fa description 1": "2단계 인증은 이름에서 알 수 있듯이 '2단계'가 핵심이며, 광의의 2FA는 사용자 인증을 완료하기 위한 다양한 솔루션을 제공하는 것을 의미합니다.",
  "2fa description 2": "2단계 인증을 활성화하면 시스템 백그라운드에 로그인할 때 사용자 이름과 비밀번호 외에 추가 토큰을 제공해야 하므로 시스템 보안을 크게 향상시킬 수 있습니다.",
  "next step": "다음 단계",
  "download 2fa app": "2단계 인증 앱 다운로드",
  "open app and scan qrcode": "2단계 인증 앱을 열고 아래 QR 코드를 스캔하세요",
  "input 2fa code": "2단계 인증 코드 입력",
  "2fa code": "2단계 인증 코드",
  "forgot password": "비밀번호 찾기",
  "get new password": "새 비밀번호 발급",
  "you will receive an email which contains a link to create new password": "새 비밀번호를 생성할 수 있는 링크가 포함된 이메일을 받으실 수 있습니다.",
  "find password success! please go to your mailbox to reset it!": "비밀번호 재설정 이메일이 성공적으로 발송되었습니다. 메일함을 확인해 주세요!",
  "find password error! try again later": "비밀번호 재설정 이메일 발송에 실패했습니다. 나중에 다시 시도해 주세요!",
  "set administrator": "관리자 설정",
  "set guest": "게스트 설정",
  "set label": "라벨 설정",
  verify: mw,
  administrator: pw,
  guest: gw,
  user: yw,
  "manage users": "사용자 관리",
  role: vw,
  "exclusive label": "전용 라벨",
  "You can't set yourself to be guest!": "자신을 게스트로 설정할 수 없습니다!",
  "please enter an exclusive label": "전용 라벨을 입력해 주세요",
  "new version tips": "새 버전 @waline/vercel@{{version}}이 출시되었습니다. 업그레이드해 주세요! 업그레이드 방법은 <a href='https://waline.js.org/en/advanced/faq.html#server' target='_blank'>FAQ</a>를 참고하세요.",
  "leancloud warning": "<a href='https://github.com/orgs/walinejs/discussions/3370' target='_blank'>Leancloud가 곧 외부 서비스를 종료합니다</a>. 사용 중이시라면 가능한 빨리 댓글 데이터를 마이그레이션해 주세요.",
  "delete user confirm": "이 사용자를 삭제하시겠습니까? 인증 사용자는 직접 삭제되며, 다른 사용자는 로그인이 금지됩니다."
}, bw = "Verwaltung", xw = "Kommentar", Sw = "Anmelden", ww = "Abmelden", Ew = "Benutzerregistrierung", Aw = "E-Mail", Cw = "Passwort", Rw = "Spitzname", Nw = "Persönliche Webseite", jw = "Einstellungen", Tw = "Profil", Ow = "Homepage-URL", zw = "Alle", Lw = "Meine", Mw = "Genehmigt", _w = "Ausstehend", Dw = "Spam", Uw = "Angepinnter Kommentar", $w = "Bearbeiten", kw = "Antworten", Bw = "Aktion", Hw = "Filter", qw = "Autor", Vw = "Inhalt", Yw = "Benutzername", Gw = "Senden", Qw = "Abbrechen", Kw = "um", Xw = "Import/Export", Fw = "Exportiere...", Zw = "Zu verifizieren", Jw = "Administrator", Iw = "Gast", Pw = "Benutzer", Ww = "Rolle", e3 = {
  management: bw,
  comment: xw,
  login: Sw,
  logout: ww,
  register: Ew,
  email: Aw,
  password: Cw,
  "remember me": "Beim nächsten Mal automatisch anmelden",
  "back to home": "Zurück zur Startseite",
  "please input email": "Bitte E-Mail eingeben",
  "please input password": "Bitte Passwort eingeben",
  "email or password error": "E-Mail oder Passwort ist falsch",
  nickname: Rw,
  website: Nw,
  "password again": "Passwort erneut eingeben",
  "register.login": "Benutzeranmeldung",
  "nickname illegal": "Bitte einen gültigen Spitznamen eingeben",
  "passwords don't match": "Passwörter stimmen nicht überein",
  setting: jw,
  profile: Tw,
  "go to gravatar to change avatar": "Ändern Sie Ihr Avatar auf Gravatar",
  homepage: Ow,
  "homepage tips": "Die Homepage-URL dieses Benutzers sollte mit <1>http://</1> oder <1>https://</1> beginnen.",
  "update my profile": "Profil aktualisieren",
  "connect to social account": "Soziales Konto verbinden",
  "change password": "Passwort ändern",
  "update password": "Passwort aktualisieren",
  "password tips": "Weisen Sie diesem Benutzer ein Passwort zu.<br />Es wird empfohlen, Sonderzeichen sowie Buchstaben und Zahlen zu kombinieren, um die Sicherheit zu erhöhen.",
  "password again tips": "Bitte bestätigen Sie Ihr Passwort, es sollte mit dem oben eingegebenen übereinstimmen.",
  "nickname and homepage are required": "Spitzname und Homepage sind erforderlich",
  all: zw,
  mine: Lw,
  approved: Mw,
  "approved button": "Genehmigen",
  waiting: _w,
  spam: Dw,
  "mark as spam": "Als Spam markieren",
  "disable sticky": "Anheften aufheben",
  sticky: Uw,
  edit: $w,
  reply: kw,
  delete: "Löschen",
  "delete one confirm": "Möchten Sie den Kommentar von {{nick}} wirklich löschen?",
  "delete multiple confirm": "Möchten Sie diese Kommentare wirklich löschen?",
  "manage comments": "Kommentare verwalten",
  "select all": "Alle auswählen",
  action: Bw,
  "selected items": "Ausgewählte Elemente",
  "please input keywords": "Bitte Schlüsselwörter eingeben",
  filter: Hw,
  author: qw,
  content: Vw,
  username: Yw,
  submit: Gw,
  cancel: Qw,
  at: Kw,
  "get userinfo failed": "Benutzerinformationen konnten nicht abgerufen werden",
  "register success! please go to your mailbox to verify it!": "Registrierung erfolgreich! Bitte überprüfen Sie Ihre E-Mails.",
  migration: Xw,
  exporting: Fw,
  export: "Exportieren",
  import: "Importieren",
  "import success": "Import erfolgreich",
  "import clear data confirm": "Achtung! Importierte Daten überschreiben alle aktuellen Daten. Fortfahren?",
  "importing {{importedLength}}/{{maxLength}}": "Importiere {{importedLength}}/{{maxLength}}",
  "comment data index relationship reconstruction": "Rekonstruktion der Kommentarindizes läuft",
  "index updating {{importedLength}}/{{maxLength}}": "Index aktualisiert {{importedLength}}/{{maxLength}}",
  "please input avatar url": "Bitte URL eingeben",
  "change avatar": "Avatar ändern",
  "minimum 6 characters required": "Bitte Code mit 6 Zeichen eingeben",
  "close 2fa confirm": "Die Zwei-Faktor-Authentifizierung erhöht die Sicherheit erheblich. Wirklich deaktivieren?",
  "two factor auth": "Zwei-Faktor-Authentifizierung",
  "enable 2fa": "2FA aktivieren",
  "disable 2fa": "2FA deaktivieren",
  "2fa description 1": "Zwei-Faktor-Authentifizierung (2FA) bedeutet, dass zur Verifizierung zwei Schritte nötig sind und kann verschiedene Methoden zur Authentifizierung kombinieren.",
  "2fa description 2": "Nach Aktivierung von 2FA benötigen Sie beim Backend-Login neben Benutzername und Passwort ein zusätzliches Token, was die Sicherheit erhöht.",
  "next step": "Nächster Schritt",
  "download 2fa app": "2FA-App herunterladen",
  "open app and scan qrcode": "Öffnen Sie die 2FA-App und scannen Sie den QR-Code unten",
  "input 2fa code": "Geben Sie den 6-stelligen Code ein",
  "2fa code": "2FA-Code",
  "forgot password": "Passwort vergessen",
  "get new password": "Neues Passwort anfordern",
  "you will receive an email which contains a link to create new password": "Sie erhalten eine E-Mail mit einem Link zum Erstellen eines neuen Passworts.",
  "find password success! please go to your mailbox to reset it!": "Die E-Mail zum Zurücksetzen des Passworts wurde gesendet. Bitte prüfen Sie Ihr Postfach.",
  "find password error! try again later": "Fehler beim Senden der Zurücksetzungs-E-Mail. Bitte später erneut versuchen.",
  "set administrator": "Als Administrator festlegen",
  "set guest": "Als Gast festlegen",
  "set label": "Exklusives Label setzen",
  verify: Zw,
  administrator: Jw,
  guest: Iw,
  user: Pw,
  "manage users": "Benutzer verwalten",
  role: Ww,
  "exclusive label": "Exklusives Label",
  "You can't set yourself to be guest!": "Sie können sich nicht selbst als Gast festlegen!",
  "please enter an exclusive label": "Bitte geben Sie ein exklusives Label ein",
  "new version tips": 'Eine neue Version @waline/vercel@{{version}} ist verfügbar. Bitte aktualisieren Sie baldmöglichst. Siehe <a href="https://waline.js.org/advanced/faq.html#server" target="_blank">FAQ</a> für Upgrade-Anweisungen.',
  "leancloud warning": "<a href='https://github.com/orgs/walinejs/discussions/3370' target='_blank'>Leancloud stellt externen Dienst ein</a>. Bitte migrieren Sie Ihre Daten, wenn Sie es als Kommentar-Storage verwenden.",
  "delete user confirm": "Möchten Sie diesen Benutzer wirklich löschen? Authentifizierte Benutzer werden direkt gelöscht, andere Benutzer werden vom Login ausgeschlossen."
}, t3 = "Administración", a3 = "Comentario", n3 = "Iniciar sesión", l3 = "Cerrar sesión", i3 = "Registro de usuario", s3 = "Correo electrónico", r3 = "Contraseña", o3 = "Apodo", u3 = "Sitio web", c3 = "Configuración", f3 = "Perfil", d3 = "URL de la página personal", h3 = "Todos", m3 = "Míos", p3 = "Aprobado", g3 = "Pendiente", y3 = "Spam", v3 = "Comentario fijado", b3 = "Editar", x3 = "Responder", S3 = "Acción", w3 = "Filtrar", E3 = "Autor", A3 = "Contenido", C3 = "Nombre de usuario", R3 = "Enviar", N3 = "Cancelar", j3 = "en", T3 = "Importar/Exportar", O3 = "Exportando...", z3 = "Por verificar", L3 = "Administrador", M3 = "Invitado", _3 = "Usuario", D3 = "Rol", ap = {
  management: t3,
  comment: a3,
  login: n3,
  logout: l3,
  register: i3,
  email: s3,
  password: r3,
  "remember me": "Recordarme",
  "back to home": "Volver al inicio",
  "please input email": "Por favor, introduzca el correo",
  "please input password": "Por favor, introduzca la contraseña",
  "email or password error": "Correo o contraseña incorrectos",
  nickname: o3,
  website: u3,
  "password again": "Contraseña (repetir)",
  "register.login": "Inicio de sesión",
  "nickname illegal": "Por favor, ingrese un apodo válido",
  "passwords don't match": "Las contraseñas no coinciden",
  setting: c3,
  profile: f3,
  "go to gravatar to change avatar": "Cambie el avatar en Gravatar",
  homepage: d3,
  "homepage tips": "La URL de la página personal debe comenzar con <1>http://</1> o <1>https://</1>.",
  "update my profile": "Actualizar perfil",
  "connect to social account": "Conectar cuenta social",
  "change password": "Cambiar contraseña",
  "update password": "Actualizar contraseña",
  "password tips": "Asigne una contraseña a este usuario.<br />Se recomienda usar una combinación de caracteres especiales, letras y números para mayor seguridad.",
  "password again tips": "Por favor confirme su contraseña, debe coincidir con la anterior.",
  "nickname and homepage are required": "Apodo y página personal son obligatorios",
  all: h3,
  mine: m3,
  approved: p3,
  "approved button": "Aprobar",
  waiting: g3,
  spam: y3,
  "mark as spam": "Marcar como spam",
  "disable sticky": "Desactivar fijado",
  sticky: v3,
  edit: b3,
  reply: x3,
  delete: "Eliminar",
  "delete one confirm": "¿Confirma que desea eliminar el comentario de {{nick}}?",
  "delete multiple confirm": "¿Confirma que desea eliminar estos comentarios?",
  "manage comments": "Gestionar comentarios",
  "select all": "Seleccionar todo",
  action: S3,
  "selected items": "Elementos seleccionados",
  "please input keywords": "Por favor ingrese palabras clave",
  filter: w3,
  author: E3,
  content: A3,
  username: C3,
  submit: R3,
  cancel: N3,
  at: j3,
  "get userinfo failed": "Error al obtener información del usuario",
  "register success! please go to your mailbox to verify it!": "¡Registro exitoso! Por favor, revise su correo para verificar.",
  migration: T3,
  exporting: O3,
  export: "Exportar",
  import: "Importar",
  "import success": "Importación exitosa",
  "import clear data confirm": "¡Atención! La importación sobrescribirá todos los datos actuales. ¿Desea continuar?",
  "importing {{importedLength}}/{{maxLength}}": "Importando {{importedLength}}/{{maxLength}}",
  "comment data index relationship reconstruction": "Reconstrucción de índices de datos de comentarios en curso",
  "index updating {{importedLength}}/{{maxLength}}": "Actualizando índice {{importedLength}}/{{maxLength}}",
  "please input avatar url": "Por favor ingrese la URL",
  "change avatar": "Cambiar avatar",
  "minimum 6 characters required": "Por favor ingrese un código de 6 caracteres",
  "close 2fa confirm": "La verificación en dos pasos mejora mucho la seguridad de la cuenta. ¿Seguro que desea desactivarla?",
  "two factor auth": "Autenticación de dos factores",
  "enable 2fa": "Activar 2FA",
  "disable 2fa": "Desactivar 2FA",
  "2fa description 1": "La autenticación de dos factores (2FA) significa que se requieren dos pasos para la verificación y puede combinar varios métodos.",
  "2fa description 2": "Al activar 2FA, además de usuario y contraseña, necesitará un token adicional para iniciar sesión en el panel, lo que aumenta la seguridad.",
  "next step": "Siguiente",
  "download 2fa app": "Descargar la app 2FA",
  "open app and scan qrcode": "Abra la app 2FA y escanee el código QR abajo",
  "input 2fa code": "Ingrese el código de 6 dígitos",
  "2fa code": "Código 2FA",
  "forgot password": "Olvidé mi contraseña",
  "get new password": "Obtener nueva contraseña",
  "you will receive an email which contains a link to create new password": "Recibirá un correo con un enlace para crear una nueva contraseña.",
  "find password success! please go to your mailbox to reset it!": "Correo para restablecer contraseña enviado. Por favor revise su bandeja.",
  "find password error! try again later": "Error al enviar el correo de restablecimiento. Intente más tarde.",
  "set administrator": "Establecer como administrador",
  "set guest": "Establecer como usuario invitado",
  "set label": "Establecer etiqueta exclusiva",
  verify: z3,
  administrator: L3,
  guest: M3,
  user: _3,
  "manage users": "Gestionar usuarios",
  role: D3,
  "exclusive label": "Etiqueta exclusiva",
  "You can't set yourself to be guest!": "¡No puedes convertirte en invitado a ti mismo!",
  "please enter an exclusive label": "Por favor ingrese una etiqueta exclusiva",
  "new version tips": 'Nueva versión @waline/vercel@{{version}} lanzada. Actualice lo antes posible. Vea las <a href="https://waline.js.org/advanced/faq.html#server" target="_blank">FAQ</a> para más información.',
  "leancloud warning": "<a href='https://github.com/orgs/walinejs/discussions/3370' target='_blank'>Leancloud dejará de ofrecer servicio</a>. Si lo usa como almacenamiento de comentarios, migre sus datos pronto.",
  "delete user confirm": "¿Está seguro de que desea eliminar este usuario? Los usuarios verificados se eliminarán directamente, otros serán bloqueados para iniciar sesión."
}, U3 = "Gestion", $3 = "Commentaire", k3 = "Connexion", B3 = "Déconnexion", H3 = "Inscription", q3 = "E-mail", V3 = "Mot de passe", Y3 = "Pseudo", G3 = "Site web", Q3 = "Paramètres", K3 = "Profil", X3 = "URL du site personnel", F3 = "Tous", Z3 = "Mes", J3 = "Approuvé", I3 = "En attente", P3 = "Spam", W3 = "Commentaire épinglé", e4 = "Éditer", t4 = "Répondre", a4 = "Action", n4 = "Filtrer", l4 = "Auteur", i4 = "Contenu", s4 = "Nom d'utilisateur", r4 = "Soumettre", o4 = "Annuler", u4 = "à", c4 = "Import/Export", f4 = "Exportation...", d4 = "À vérifier", h4 = "Administrateur", m4 = "Invité", p4 = "Utilisateur", g4 = "Rôle", np = {
  management: U3,
  comment: $3,
  login: k3,
  logout: B3,
  register: H3,
  email: q3,
  password: V3,
  "remember me": "Se souvenir de moi",
  "back to home": "Retour à l'accueil",
  "please input email": "Veuillez saisir l'e-mail",
  "please input password": "Veuillez saisir le mot de passe",
  "email or password error": "E-mail ou mot de passe incorrect",
  nickname: Y3,
  website: G3,
  "password again": "Mot de passe (à nouveau)",
  "register.login": "Connexion utilisateur",
  "nickname illegal": "Veuillez saisir un pseudo valide",
  "passwords don't match": "Les mots de passe ne correspondent pas",
  setting: Q3,
  profile: K3,
  "go to gravatar to change avatar": "Modifiez l'avatar sur Gravatar",
  homepage: X3,
  "homepage tips": "L'URL du site personnel doit commencer par <1>http://</1> ou <1>https://</1>.",
  "update my profile": "Mettre à jour le profil",
  "connect to social account": "Connecter un compte social",
  "change password": "Changer le mot de passe",
  "update password": "Mettre à jour le mot de passe",
  "password tips": "Attribuez un mot de passe à cet utilisateur.<br />Il est recommandé d'utiliser des caractères spéciaux combinés à des lettres et des chiffres pour plus de sécurité.",
  "password again tips": "Veuillez confirmer votre mot de passe, il doit correspondre à celui saisi ci-dessus.",
  "nickname and homepage are required": "Le pseudo et la page d'accueil sont obligatoires",
  all: F3,
  mine: Z3,
  approved: J3,
  "approved button": "Approuver",
  waiting: I3,
  spam: P3,
  "mark as spam": "Marquer comme spam",
  "disable sticky": "Désactiver l'épinglage",
  sticky: W3,
  edit: e4,
  reply: t4,
  delete: "Supprimer",
  "delete one confirm": "Confirmez-vous la suppression du commentaire de {{nick}} ?",
  "delete multiple confirm": "Confirmez-vous la suppression de ces commentaires ?",
  "manage comments": "Gérer les commentaires",
  "select all": "Tout sélectionner",
  action: a4,
  "selected items": "Éléments sélectionnés",
  "please input keywords": "Veuillez saisir des mots-clés",
  filter: n4,
  author: l4,
  content: i4,
  username: s4,
  submit: r4,
  cancel: o4,
  at: u4,
  "get userinfo failed": "Échec de la récupération des informations utilisateur",
  "register success! please go to your mailbox to verify it!": "Inscription réussie ! Veuillez vérifier votre boîte mail.",
  migration: c4,
  exporting: f4,
  export: "Exporter",
  import: "Importer",
  "import success": "Importation réussie",
  "import clear data confirm": "Attention ! L'importation écrasera toutes les données actuelles. Continuer ?",
  "importing {{importedLength}}/{{maxLength}}": "Importation {{importedLength}}/{{maxLength}}",
  "comment data index relationship reconstruction": "Reconstruction de l'index des commentaires en cours",
  "index updating {{importedLength}}/{{maxLength}}": "Mise à jour de l'index {{importedLength}}/{{maxLength}}",
  "please input avatar url": "Veuillez saisir l'URL",
  "change avatar": "Changer l'avatar",
  "minimum 6 characters required": "Veuillez saisir un code de 6 caractères",
  "close 2fa confirm": "La vérification en deux étapes améliore beaucoup la sécurité du compte. Voulez-vous vraiment la désactiver ?",
  "two factor auth": "Authentification à deux facteurs",
  "enable 2fa": "Activer 2FA",
  "disable 2fa": "Désactiver 2FA",
  "2fa description 1": "L'authentification à deux facteurs (2FA) implique deux étapes et peut combiner plusieurs méthodes d'authentification.",
  "2fa description 2": "Après activation de la 2FA, en plus du nom d'utilisateur et du mot de passe, un token supplémentaire sera requis pour se connecter, ce qui augmente la sécurité.",
  "next step": "Étape suivante",
  "download 2fa app": "Télécharger l'application 2FA",
  "open app and scan qrcode": "Ouvrez l'application 2FA et scannez le code QR ci-dessous",
  "input 2fa code": "Saisissez le code à 6 chiffres",
  "2fa code": "Code 2FA",
  "forgot password": "Mot de passe oublié",
  "get new password": "Obtenir un nouveau mot de passe",
  "you will receive an email which contains a link to create new password": "Vous recevrez un e-mail contenant un lien pour créer un nouveau mot de passe.",
  "find password success! please go to your mailbox to reset it!": "E-mail de réinitialisation envoyé. Veuillez vérifier votre boîte mail.",
  "find password error! try again later": "Échec de l'envoi de l'e-mail de réinitialisation. Réessayez plus tard.",
  "set administrator": "Définir comme administrateur",
  "set guest": "Définir comme invité",
  "set label": "Définir un label exclusif",
  verify: d4,
  administrator: h4,
  guest: m4,
  user: p4,
  "manage users": "Gérer les utilisateurs",
  role: g4,
  "exclusive label": "Label exclusif",
  "You can't set yourself to be guest!": "Vous ne pouvez pas vous définir comme invité !",
  "please enter an exclusive label": "Veuillez saisir un label exclusif",
  "new version tips": 'Une nouvelle version @waline/vercel@{{version}} a été publiée. Veuillez mettre à jour dès que possible. Voir la <a href="https://waline.js.org/advanced/faq.html#server" target="_blank">FAQ</a> pour les instructions.',
  "leancloud warning": "<a href='https://github.com/orgs/walinejs/discussions/3370' target='_blank'>Leancloud va arrêter son service externe</a>. Si vous l'utilisez comme stockage de commentaires, migrez vos données rapidement.",
  "delete user confirm": "Voulez-vous vraiment supprimer cet utilisateur ? Les utilisateurs vérifiés seront supprimés immédiatement, les autres seront empêchés de se connecter."
}, y4 = "Управление", v4 = "Комментарий", b4 = "Войти", x4 = "Выйти", S4 = "Регистрация пользователя", w4 = "Эл. почта", E4 = "Пароль", A4 = "Псевдоним", C4 = "Веб-сайт", R4 = "Настройки", N4 = "Профиль", j4 = "URL личной страницы", T4 = "Все", O4 = "Мои", z4 = "Одобрено", L4 = "Ожидание", M4 = "Спам", _4 = "Закрепленный комментарий", D4 = "Редактировать", U4 = "Ответить", $4 = "Действие", k4 = "Фильтр", B4 = "Автор", H4 = "Содержание", q4 = "Имя пользователя", V4 = "Отправить", Y4 = "Отмена", G4 = "в", Q4 = "Импорт/Экспорт", K4 = "Экспорт...", X4 = "Требуется проверка", F4 = "Администратор", Z4 = "Гость", J4 = "Пользователь", I4 = "Роль", lp = {
  management: y4,
  comment: v4,
  login: b4,
  logout: x4,
  register: S4,
  email: w4,
  password: E4,
  "remember me": "Запомнить меня",
  "back to home": "Вернуться на главную",
  "please input email": "Пожалуйста, введите эл. почту",
  "please input password": "Пожалуйста, введите пароль",
  "email or password error": "Неверный логин или пароль",
  nickname: A4,
  website: C4,
  "password again": "Пароль (повторно)",
  "register.login": "Вход пользователя",
  "nickname illegal": "Пожалуйста, введите корректный псевдоним",
  "passwords don't match": "Пароли не совпадают",
  setting: R4,
  profile: N4,
  "go to gravatar to change avatar": "Измените аватар на Gravatar",
  homepage: j4,
  "homepage tips": "URL личной страницы должен начинаться с <1>http://</1> или <1>https://</1>.",
  "update my profile": "Обновить профиль",
  "connect to social account": "Подключить соц. аккаунт",
  "change password": "Изменить пароль",
  "update password": "Обновить пароль",
  "password tips": "Назначьте пароль этому пользователю.<br />Рекомендуется использовать специальные символы в сочетании с буквами и цифрами для повышения безопасности.",
  "password again tips": "Пожалуйста, подтвердите пароль, он должен совпадать с введённым выше.",
  "nickname and homepage are required": "Псевдоним и личная страница обязательны",
  all: T4,
  mine: O4,
  approved: z4,
  "approved button": "Одобрить",
  waiting: L4,
  spam: M4,
  "mark as spam": "Отметить как спам",
  "disable sticky": "Снять закрепление",
  sticky: _4,
  edit: D4,
  reply: U4,
  delete: "Удалить",
  "delete one confirm": "Вы уверены, что хотите удалить комментарий {{nick}}?",
  "delete multiple confirm": "Вы уверены, что хотите удалить эти комментарии?",
  "manage comments": "Управление комментариями",
  "select all": "Выбрать все",
  action: $4,
  "selected items": "Выбранные элементы",
  "please input keywords": "Пожалуйста, введите ключевые слова",
  filter: k4,
  author: B4,
  content: H4,
  username: q4,
  submit: V4,
  cancel: Y4,
  at: G4,
  "get userinfo failed": "Не удалось получить информацию о пользователе",
  "register success! please go to your mailbox to verify it!": "Регистрация прошла успешно! Пожалуйста, проверьте почту для подтверждения.",
  migration: Q4,
  exporting: K4,
  export: "Экспорт",
  import: "Импорт",
  "import success": "Импорт успешно выполнен",
  "import clear data confirm": "Внимание! Импорт перезапишет все текущие данные. Продолжить?",
  "importing {{importedLength}}/{{maxLength}}": "Импорт {{importedLength}}/{{maxLength}}",
  "comment data index relationship reconstruction": "Восстановление индексов данных комментариев",
  "index updating {{importedLength}}/{{maxLength}}": "Обновление индекса {{importedLength}}/{{maxLength}}",
  "please input avatar url": "Пожалуйста, введите URL",
  "change avatar": "Изменить аватар",
  "minimum 6 characters required": "Пожалуйста, введите 6-значный код",
  "close 2fa confirm": "Двухфакторная аутентификация значительно повышает безопасность аккаунта. Вы действительно хотите отключить?",
  "two factor auth": "Двухфакторная аутентификация",
  "enable 2fa": "Включить 2FA",
  "disable 2fa": "Отключить 2FA",
  "2fa description 1": "Двухфакторная аутентификация (2FA) означает, что для проверки требуется два шага и может использовать несколько методов.",
  "2fa description 2": "После включения 2FA при входе в админ-панель, кроме логина и пароля, потребуется дополнительный токен, что повышает безопасность.",
  "next step": "Следующий шаг",
  "download 2fa app": "Скачать приложение 2FA",
  "open app and scan qrcode": "Откройте приложение 2FA и отсканируйте QR-код ниже",
  "input 2fa code": "Введите 6-значный код",
  "2fa code": "Код 2FA",
  "forgot password": "Забыли пароль",
  "get new password": "Получить новый пароль",
  "you will receive an email which contains a link to create new password": "Вы получите письмо с ссылкой для создания нового пароля.",
  "find password success! please go to your mailbox to reset it!": "Письмо для сброса пароля отправлено. Проверьте почту.",
  "find password error! try again later": "Ошибка при отправке письма для сброса пароля. Попробуйте позже.",
  "set administrator": "Сделать администратором",
  "set guest": "Сделать гостем",
  "set label": "Установить эксклюзивный ярлык",
  verify: X4,
  administrator: F4,
  guest: Z4,
  user: J4,
  "manage users": "Управлять пользователями",
  role: I4,
  "exclusive label": "Эксклюзивный ярлык",
  "You can't set yourself to be guest!": "Вы не можете назначить себя гостем!",
  "please enter an exclusive label": "Пожалуйста, введите эксклюзивный ярлык",
  "new version tips": 'Выпущена новая версия @waline/vercel@{{version}}. Пожалуйста, обновитесь как можно скорее. Смотрите <a href="https://waline.js.org/advanced/faq.html#server" target="_blank">FAQ</a> для инструкции по обновлению.',
  "leancloud warning": "<a href='https://github.com/orgs/walinejs/discussions/3370' target='_blank'>Leancloud прекратит внешний сервис</a>. Если вы используете его как хранилище комментариев, пожалуйста, мигрируйте данные.",
  "delete user confirm": "Вы уверены, что хотите удалить этого пользователя? Аутентифицированные пользователи будут удалены сразу, остальные будут запрещены для входа."
}, P4 = "Quản lý", W4 = "Bình luận", e6 = "Đăng nhập", t6 = "Đăng xuất", a6 = "Đăng ký người dùng", n6 = "Email", l6 = "Mật khẩu", i6 = "Biệt danh", s6 = "Trang web cá nhân", r6 = "Cài đặt", o6 = "Hồ sơ", u6 = "URL trang cá nhân", c6 = "Tất cả", f6 = "Của tôi", d6 = "Đã duyệt", h6 = "Chờ duyệt", m6 = "Spam", p6 = "Bình luận ghim", g6 = "Chỉnh sửa", y6 = "Trả lời", v6 = "Hành động", b6 = "Lọc", x6 = "Tác giả", S6 = "Nội dung", w6 = "Tên người dùng", E6 = "Gửi", A6 = "Hủy", C6 = "lúc", R6 = "Nhập khẩu/Xuất khẩu", N6 = "Đang xuất...", j6 = "Chờ xác minh", T6 = "Quản trị viên", O6 = "Khách", z6 = "Người dùng", L6 = "Vai trò", ip = {
  management: P4,
  comment: W4,
  login: e6,
  logout: t6,
  register: a6,
  email: n6,
  password: l6,
  "remember me": "Tự động đăng nhập lần sau",
  "back to home": "Quay về trang chủ",
  "please input email": "Vui lòng nhập email",
  "please input password": "Vui lòng nhập mật khẩu",
  "email or password error": "Email hoặc mật khẩu không đúng",
  nickname: i6,
  website: s6,
  "password again": "Nhập lại mật khẩu",
  "register.login": "Đăng nhập người dùng",
  "nickname illegal": "Vui lòng nhập biệt danh hợp lệ",
  "passwords don't match": "Mật khẩu không khớp",
  setting: r6,
  profile: o6,
  "go to gravatar to change avatar": "Thay đổi avatar trên Gravatar",
  homepage: u6,
  "homepage tips": "URL trang cá nhân phải bắt đầu bằng <1>http://</1> hoặc <1>https://</1>.",
  "update my profile": "Cập nhật hồ sơ",
  "connect to social account": "Kết nối tài khoản mạng xã hội",
  "change password": "Đổi mật khẩu",
  "update password": "Cập nhật mật khẩu",
  "password tips": "Gán mật khẩu cho người dùng này.<br />Khuyến nghị sử dụng ký tự đặc biệt kết hợp chữ và số để tăng tính bảo mật.",
  "password again tips": "Vui lòng xác nhận mật khẩu của bạn, phải giống với mật khẩu đã nhập ở trên.",
  "nickname and homepage are required": "Biệt danh và trang cá nhân là bắt buộc",
  all: c6,
  mine: f6,
  approved: d6,
  "approved button": "Duyệt",
  waiting: h6,
  spam: m6,
  "mark as spam": "Đánh dấu là spam",
  "disable sticky": "Bỏ ghim",
  sticky: p6,
  edit: g6,
  reply: y6,
  delete: "Xóa",
  "delete one confirm": "Bạn có chắc muốn xóa bình luận của {{nick}} không?",
  "delete multiple confirm": "Bạn có chắc muốn xóa các bình luận này không?",
  "manage comments": "Quản lý bình luận",
  "select all": "Chọn tất cả",
  action: v6,
  "selected items": "Mục được chọn",
  "please input keywords": "Vui lòng nhập từ khóa",
  filter: b6,
  author: x6,
  content: S6,
  username: w6,
  submit: E6,
  cancel: A6,
  at: C6,
  "get userinfo failed": "Không lấy được thông tin người dùng",
  "register success! please go to your mailbox to verify it!": "Đăng ký thành công! Vui lòng kiểm tra email để xác minh.",
  migration: R6,
  exporting: N6,
  export: "Xuất",
  import: "Nhập",
  "import success": "Nhập thành công",
  "import clear data confirm": "Chú ý! Nhập dữ liệu sẽ ghi đè tất cả dữ liệu hiện có. Tiếp tục?",
  "importing {{importedLength}}/{{maxLength}}": "Đang nhập {{importedLength}}/{{maxLength}}",
  "comment data index relationship reconstruction": "Đang tái tạo chỉ mục dữ liệu bình luận",
  "index updating {{importedLength}}/{{maxLength}}": "Đang cập nhật chỉ mục {{importedLength}}/{{maxLength}}",
  "please input avatar url": "Vui lòng nhập URL",
  "change avatar": "Thay đổi avatar",
  "minimum 6 characters required": "Vui lòng nhập mã gồm 6 ký tự",
  "close 2fa confirm": "Xác thực hai bước giúp tăng đáng kể bảo mật tài khoản. Bạn có chắc muốn tắt không?",
  "two factor auth": "Xác thực hai yếu tố",
  "enable 2fa": "Bật 2FA",
  "disable 2fa": "Tắt 2FA",
  "2fa description 1": "Xác thực hai yếu tố (2FA) có nghĩa là yêu cầu hai bước xác minh và có thể kết hợp nhiều phương pháp.",
  "2fa description 2": "Sau khi bật 2FA, khi đăng nhập vào quản trị, ngoài tên và mật khẩu, bạn sẽ cần một mã bổ sung, giúp tăng bảo mật.",
  "next step": "Bước tiếp theo",
  "download 2fa app": "Tải ứng dụng 2FA",
  "open app and scan qrcode": "Mở ứng dụng 2FA và quét mã QR dưới đây",
  "input 2fa code": "Nhập mã 6 chữ số",
  "2fa code": "Mã 2FA",
  "forgot password": "Quên mật khẩu",
  "get new password": "Lấy mật khẩu mới",
  "you will receive an email which contains a link to create new password": "Bạn sẽ nhận được email chứa liên kết để tạo mật khẩu mới.",
  "find password success! please go to your mailbox to reset it!": "Đã gửi email đặt lại mật khẩu. Vui lòng kiểm tra hộp thư.",
  "find password error! try again later": "Gửi email đặt lại mật khẩu thất bại. Vui lòng thử lại sau.",
  "set administrator": "Đặt làm quản trị viên",
  "set guest": "Đặt làm khách",
  "set label": "Đặt nhãn độc quyền",
  verify: j6,
  administrator: T6,
  guest: O6,
  user: z6,
  "manage users": "Quản lý người dùng",
  role: L6,
  "exclusive label": "Nhãn độc quyền",
  "You can't set yourself to be guest!": "Bạn không thể tự đặt mình làm khách!",
  "please enter an exclusive label": "Vui lòng nhập nhãn độc quyền",
  "new version tips": 'Phiên bản mới @waline/vercel@{{version}} đã phát hành. Vui lòng cập nhật càng sớm càng tốt. Xem <a href="https://waline.js.org/advanced/faq.html#server" target="_blank">FAQ</a> để biết cách cập nhật.',
  "leancloud warning": "<a href='https://github.com/orgs/walinejs/discussions/3370' target='_blank'>Leancloud sẽ ngưng dịch vụ bên ngoài</a>. Nếu bạn đang dùng làm lưu trữ bình luận, vui lòng di chuyển dữ liệu sớm.",
  "delete user confirm": "Bạn có chắc muốn xóa người dùng này không? Người đã xác thực sẽ bị xóa ngay, những người khác sẽ bị cấm đăng nhập."
}, M6 = "Gerenciamento", _6 = "Comentário", D6 = "Entrar", U6 = "Sair", $6 = "Registro de usuário", k6 = "E-mail", B6 = "Senha", H6 = "Apelido", q6 = "Site pessoal", V6 = "Configurações", Y6 = "Perfil", G6 = "URL da página pessoal", Q6 = "Todos", K6 = "Meus", X6 = "Aprovado", F6 = "Pendente", Z6 = "Spam", J6 = "Comentário fixado", I6 = "Editar", P6 = "Responder", W6 = "Ação", eE = "Filtrar", tE = "Autor", aE = "Conteúdo", nE = "Nome de usuário", lE = "Enviar", iE = "Cancelar", sE = "em", rE = "Importar/Exportar", oE = "Exportando...", uE = "A verificar", cE = "Administrador", fE = "Convidado", dE = "Usuário", hE = "Função", mE = {
  management: M6,
  comment: _6,
  login: D6,
  logout: U6,
  register: $6,
  email: k6,
  password: B6,
  "remember me": "Lembrar-me",
  "back to home": "Voltar para a página inicial",
  "please input email": "Por favor, insira o e-mail",
  "please input password": "Por favor, insira a senha",
  "email or password error": "E-mail ou senha incorretos",
  nickname: H6,
  website: q6,
  "password again": "Senha (novamente)",
  "register.login": "Login do usuário",
  "nickname illegal": "Por favor, insira um apelido válido",
  "passwords don't match": "As senhas não correspondem",
  setting: V6,
  profile: Y6,
  "go to gravatar to change avatar": "Altere o avatar no Gravatar",
  homepage: G6,
  "homepage tips": "A URL da página pessoal deve começar com <1>http://</1> ou <1>https://</1>.",
  "update my profile": "Atualizar perfil",
  "connect to social account": "Conectar conta social",
  "change password": "Mudar senha",
  "update password": "Atualizar senha",
  "password tips": "Atribua uma senha a este usuário.<br />Recomenda-se usar caracteres especiais junto com letras e números para aumentar a segurança.",
  "password again tips": "Por favor, confirme sua senha; deve corresponder à acima.",
  "nickname and homepage are required": "Apelido e página pessoal são obrigatórios",
  all: Q6,
  mine: K6,
  approved: X6,
  "approved button": "Aprovar",
  waiting: F6,
  spam: Z6,
  "mark as spam": "Marcar como spam",
  "disable sticky": "Desativar fixação",
  sticky: J6,
  edit: I6,
  reply: P6,
  delete: "Excluir",
  "delete one confirm": "Tem certeza de que deseja excluir o comentário de {{nick}}?",
  "delete multiple confirm": "Tem certeza de que deseja excluir estes comentários?",
  "manage comments": "Gerenciar comentários",
  "select all": "Selecionar tudo",
  action: W6,
  "selected items": "Itens selecionados",
  "please input keywords": "Por favor, insira palavras-chave",
  filter: eE,
  author: tE,
  content: aE,
  username: nE,
  submit: lE,
  cancel: iE,
  at: sE,
  "get userinfo failed": "Falha ao obter informações do usuário",
  "register success! please go to your mailbox to verify it!": "Registro bem-sucedido! Verifique seu e-mail para confirmar.",
  migration: rE,
  exporting: oE,
  export: "Exportar",
  import: "Importar",
  "import success": "Importação bem-sucedida",
  "import clear data confirm": "Atenção! A importação substituirá todos os dados atuais. Deseja continuar?",
  "importing {{importedLength}}/{{maxLength}}": "Importando {{importedLength}}/{{maxLength}}",
  "comment data index relationship reconstruction": "Reconstrução do índice de dados de comentários em andamento",
  "index updating {{importedLength}}/{{maxLength}}": "Atualizando índice {{importedLength}}/{{maxLength}}",
  "please input avatar url": "Por favor, insira a URL",
  "change avatar": "Alterar avatar",
  "minimum 6 characters required": "Por favor, insira o código de 6 caracteres",
  "close 2fa confirm": "A autenticação em duas etapas aumenta muito a segurança da conta. Tem certeza de que deseja desativá-la?",
  "two factor auth": "Autenticação de dois fatores",
  "enable 2fa": "Ativar 2FA",
  "disable 2fa": "Desativar 2FA",
  "2fa description 1": "A autenticação de dois fatores (2FA) significa que são necessários dois passos para verificar a identidade e pode combinar vários métodos.",
  "2fa description 2": "Após ativar a 2FA, além do nome de usuário e senha, será necessário um token adicional para acessar o painel, aumentando a segurança.",
  "next step": "Próximo passo",
  "download 2fa app": "Baixar aplicativo 2FA",
  "open app and scan qrcode": "Abra o aplicativo 2FA e escaneie o QR code abaixo",
  "input 2fa code": "Insira o código de 6 dígitos",
  "2fa code": "Código 2FA",
  "forgot password": "Esqueci minha senha",
  "get new password": "Obter nova senha",
  "you will receive an email which contains a link to create new password": "Você receberá um e-mail contendo um link para criar uma nova senha.",
  "find password success! please go to your mailbox to reset it!": "E-mail para redefinir a senha enviado. Verifique sua caixa de entrada.",
  "find password error! try again later": "Erro ao enviar o e-mail de redefinição. Tente novamente mais tarde.",
  "set administrator": "Definir como administrador",
  "set guest": "Definir como convidado",
  "set label": "Definir rótulo exclusivo",
  verify: uE,
  administrator: cE,
  guest: fE,
  user: dE,
  "manage users": "Gerenciar usuários",
  role: hE,
  "exclusive label": "Rótulo exclusivo",
  "You can't set yourself to be guest!": "Você não pode se definir como convidado!",
  "please enter an exclusive label": "Por favor, insira um rótulo exclusivo",
  "new version tips": 'Nova versão @waline/vercel@{{version}} lançada. Atualize o quanto antes. Consulte a <a href="https://waline.js.org/advanced/faq.html#server" target="_blank">FAQ</a> sobre como atualizar.',
  "leancloud warning": "<a href='https://github.com/orgs/walinejs/discussions/3370' target='_blank'>Leancloud encerrará o serviço externo</a>. Se você o utiliza como armazenamento de comentários, por favor migre seus dados rapidamente.",
  "delete user confirm": "Tem certeza de que deseja excluir este usuário? Usuários autenticados serão excluídos imediatamente, outros terão o login bloqueado."
}, pE = "Gestione", gE = "Commento", yE = "Accedi", vE = "Disconnetti", bE = "Registrazione utente", xE = "Email", SE = "Password", wE = "Nickname", EE = "Sito web", AE = "Impostazioni", CE = "Profilo", RE = "URL della homepage", NE = "Tutti", jE = "Miei", TE = "Approvato", OE = "In attesa", zE = "Spam", LE = "Commento fissato", ME = "Modifica", _E = "Rispondi", DE = "Azione", UE = "Filtra", $E = "Autore", kE = "Contenuto", BE = "Nome utente", HE = "Invia", qE = "Annulla", VE = "alle", YE = "Importa/Esporta", GE = "Esportazione in corso...", QE = "Da verificare", KE = "Amministratore", XE = "Ospite", FE = "Utente", ZE = "Ruolo", sp = {
  management: pE,
  comment: gE,
  login: yE,
  logout: vE,
  register: bE,
  email: xE,
  password: SE,
  "remember me": "Accesso automatico la prossima volta",
  "back to home": "Torna alla home",
  "please input email": "Per favore inserisci l'email",
  "please input password": "Per favore inserisci la password",
  "email or password error": "Email o password non validi",
  nickname: wE,
  website: EE,
  "password again": "Password (ripeti)",
  "register.login": "Accesso utente",
  "nickname illegal": "Inserisci un nickname valido",
  "passwords don't match": "Le password non corrispondono",
  setting: AE,
  profile: CE,
  "go to gravatar to change avatar": "Cambia avatar su Gravatar",
  homepage: RE,
  "homepage tips": "L'URL della homepage deve iniziare con <1>http://</1> o <1>https://</1>.",
  "update my profile": "Aggiorna profilo",
  "connect to social account": "Collega account social",
  "change password": "Cambia password",
  "update password": "Aggiorna password",
  "password tips": "Assegna una password a questo utente.<br />Si consiglia di usare caratteri speciali e una combinazione di lettere e numeri per maggiore sicurezza.",
  "password again tips": "Conferma la password inserita sopra.",
  "nickname and homepage are required": "Nickname e homepage sono obbligatori",
  all: NE,
  mine: jE,
  approved: TE,
  "approved button": "Approva",
  waiting: OE,
  spam: zE,
  "mark as spam": "Segna come spam",
  "disable sticky": "Disabilita fissaggio",
  sticky: LE,
  edit: ME,
  reply: _E,
  delete: "Elimina",
  "delete one confirm": "Sei sicuro di voler eliminare il commento di {{nick}}?",
  "delete multiple confirm": "Sei sicuro di voler eliminare questi commenti?",
  "manage comments": "Gestisci commenti",
  "select all": "Seleziona tutto",
  action: DE,
  "selected items": "Elementi selezionati",
  "please input keywords": "Inserisci parole chiave",
  filter: UE,
  author: $E,
  content: kE,
  username: BE,
  submit: HE,
  cancel: qE,
  at: VE,
  "get userinfo failed": "Recupero informazioni utente fallito",
  "register success! please go to your mailbox to verify it!": "Registrazione riuscita! Controlla la tua email per verificare.",
  migration: YE,
  exporting: GE,
  export: "Esporta",
  import: "Importa",
  "import success": "Importazione riuscita",
  "import clear data confirm": "Attenzione! L'import sovrascriverà tutti i dati correnti. Continuare?",
  "importing {{importedLength}}/{{maxLength}}": "Importazione {{importedLength}}/{{maxLength}}",
  "comment data index relationship reconstruction": "Ricostruzione indice dati commenti in corso",
  "index updating {{importedLength}}/{{maxLength}}": "Aggiornamento indice {{importedLength}}/{{maxLength}}",
  "please input avatar url": "Inserisci l'URL",
  "change avatar": "Cambia avatar",
  "minimum 6 characters required": "Inserisci il codice di 6 caratteri",
  "close 2fa confirm": "L'autenticazione a due fattori aumenta notevolmente la sicurezza dell'account. Vuoi davvero disattivarla?",
  "two factor auth": "Autenticazione a due fattori",
  "enable 2fa": "Abilita 2FA",
  "disable 2fa": "Disabilita 2FA",
  "2fa description 1": "L'autenticazione a due fattori (2FA) implica due passaggi per la verifica e può combinare diversi metodi.",
  "2fa description 2": "Dopo l'attivazione di 2FA, per accedere al pannello oltre a username e password sarà richiesto un token aggiuntivo, aumentando la sicurezza.",
  "next step": "Passo successivo",
  "download 2fa app": "Scarica l'app 2FA",
  "open app and scan qrcode": "Apri l'app 2FA e scansiona il codice QR sotto",
  "input 2fa code": "Inserisci il codice di 6 cifre",
  "2fa code": "Codice 2FA",
  "forgot password": "Password dimenticata",
  "get new password": "Ottieni nuova password",
  "you will receive an email which contains a link to create new password": "Riceverai un'email con un link per creare una nuova password.",
  "find password success! please go to your mailbox to reset it!": "Email per reimpostare la password inviata. Controlla la posta.",
  "find password error! try again later": "Errore durante l'invio dell'email per reimpostare la password. Riprova più tardi.",
  "set administrator": "Imposta come amministratore",
  "set guest": "Imposta come ospite",
  "set label": "Imposta etichetta esclusiva",
  verify: QE,
  administrator: KE,
  guest: XE,
  user: FE,
  "manage users": "Gestisci utenti",
  role: ZE,
  "exclusive label": "Etichetta esclusiva",
  "You can't set yourself to be guest!": "Non puoi impostarti come ospite!",
  "please enter an exclusive label": "Inserisci un'etichetta esclusiva",
  "new version tips": 'Una nuova versione @waline/vercel@{{version}} è stata rilasciata. Aggiorna il prima possibile. Consulta la <a href="https://waline.js.org/advanced/faq.html#server" target="_blank">FAQ</a> per le istruzioni.',
  "leancloud warning": "<a href='https://github.com/orgs/walinejs/discussions/3370' target='_blank'>Leancloud interromperà il servizio esterno</a>. Se lo usi come storage per i commenti, migra i tuoi dati al più presto.",
  "delete user confirm": "Sei sicuro di voler eliminare questo utente? Gli utenti verificati saranno eliminati immediatamente, gli altri saranno bloccati dall'accesso."
}, rp = [
  {
    label: "中文简体",
    value: "zh-CN",
    alias: ["zh-CN", "zh-cn"]
  },
  {
    label: "中文繁體",
    value: "zh-TW",
    alias: ["zh-TW"]
  },
  {
    label: "English",
    value: "en-US",
    alias: ["en", "en-US"]
  },
  {
    label: "Deutsch",
    value: "de",
    alias: ["de"]
  },
  {
    label: "Español (México)",
    value: "es-MX",
    alias: ["es", "es-MX"]
  },
  {
    label: "Français",
    value: "fr",
    alias: ["fr", "fr-FR"]
  },
  {
    label: "Italiano",
    value: "it",
    alias: ["it", "it-IT"]
  },
  {
    label: "日本語",
    value: "jp",
    alias: ["jp", "jp-JP"]
  },
  {
    label: "한국어",
    value: "ko-KR",
    alias: ["ko", "ko-KR"]
  },
  {
    label: "Português (Brasil)",
    value: "pt-BR",
    alias: ["pt-BR"]
  },
  {
    label: "Русский",
    value: "ru",
    alias: ["ru", "ru-RU"]
  },
  {
    label: "Tiếng Việt",
    value: "vi",
    alias: ["vi", "vi-VN"]
  }
], JE = {
  "zh-cn": { translations: Wm },
  "zh-CN": { translations: Wm },
  en: { translations: Pm },
  "en-US": { translations: Pm },
  "zh-TW": { translations: aS },
  fr: { translations: np },
  "fr-FR": { translations: np },
  it: { translations: sp },
  "it-IT": { translations: sp },
  jp: { translations: ep },
  "jp-JP": { translations: ep },
  ko: { translations: tp },
  "ko-KR": { translations: tp },
  "pt-BR": { translations: mE },
  ru: { translations: lp },
  "ru-RU": { translations: lp },
  vi: { translations: ip },
  "vi-VN": { translations: ip },
  de: { translations: e3 },
  es: { translations: ap },
  "es-MX": { translations: ap }
};
function gn() {
  const i = hi(), l = gi(), s = pa((g) => g.user), { t: r, i18n: c } = ya(), [f, p] = A.useState(null), m = A.useMemo(() => rp.find((y) => y.alias.includes(c.language))?.value ?? "", [c.language]);
  A.useEffect(() => {
    !s?.objectId || !s?.__version || fetch("https://registry.npmjs.org/@waline/vercel/latest").then((g) => g.json()).then((g) => {
      s.__version !== g.version && p(g.version);
    });
  }, [s?.objectId]);
  const h = (g) => {
    c.changeLanguage(g.target.value);
  }, d = (g) => {
    g.preventDefault(), i.user.logout(), l("/ui/login");
  };
  return [
    /* @__PURE__ */ b.jsxs("div", { className: "typecho-head-nav clear-fix", role: "navigation", children: [
      s?.type === "administrator" ? /* @__PURE__ */ b.jsx("nav", { id: "typecho-nav-list", children: /* @__PURE__ */ b.jsxs("ul", { className: "root", children: [
        /* @__PURE__ */ b.jsx("li", { className: "parent", children: /* @__PURE__ */ b.jsx(pt, { to: "/ui", children: r("management") }) }),
        /* @__PURE__ */ b.jsxs("ul", { className: "child", children: [
          /* @__PURE__ */ b.jsx("li", { className: "last", children: /* @__PURE__ */ b.jsx(pt, { to: "/ui", children: r("comment") }) }),
          /* @__PURE__ */ b.jsx("li", { className: "last", children: /* @__PURE__ */ b.jsx(pt, { to: "/ui/user", children: r("user") }) }),
          /* @__PURE__ */ b.jsx("li", { className: "last", children: /* @__PURE__ */ b.jsx(pt, { to: "/ui/migration", children: r("migration") }) })
        ] })
      ] }) }) : null,
      /* @__PURE__ */ b.jsxs("div", { className: "operate", children: [
        /* @__PURE__ */ b.jsx("div", { className: "language-select", children: /* @__PURE__ */ b.jsx("select", { defaultValue: m, onChange: h, style: { width: 120 }, children: rp.map((g) => /* @__PURE__ */ b.jsx("option", { value: g.value, children: g.label }, g.value)) }) }),
        s?.type ? /* @__PURE__ */ b.jsx(pt, { to: "/ui/profile", className: "author", children: s.display_name }) : null,
        s?.type ? /* @__PURE__ */ b.jsx("a", { className: "exit", href: "#", onClick: d, children: r("logout") }) : null
      ] })
    ] }, "header"),
    f ? /* @__PURE__ */ b.jsx("div", { className: "upgrade-tips clear-fix", children: /* @__PURE__ */ b.jsx(
      Qt,
      {
        i18nKey: "new version tips",
        defaults: "New version @waline/vercel@{{version}} published, please upgrade it! Goto <a href='https://waline.js.org/en/advanced/faq.html#server' target='_blank'>FAQ</a> to find How to upgrade it.",
        components: {
          a: /* @__PURE__ */ b.jsx("a", {})
        },
        values: {
          version: f
        },
        transKeepBasicHtmlNodesFor: ["a"]
      }
    ) }, "upgrade") : null,
    s?.type ? /* @__PURE__ */ b.jsx("div", { className: "upgrade-tips clear-fix", children: /* @__PURE__ */ b.jsx(
      Qt,
      {
        i18nKey: "leancloud warning",
        defaults: "<a href='https://github.com/orgs/walinejs/discussions/3370' target='_blank'>Leancloud will cease external services soon</a>. If you are using it, please migration your comment data as soon as possible.",
        components: {
          a: /* @__PURE__ */ b.jsx("a", {})
        },
        transKeepBasicHtmlNodesFor: ["a"]
      }
    ) }, "leancloud-warning") : null
  ];
}
function IE() {
  const { t: i } = ya(), l = hi(), s = gi(), r = pa((d) => d.user), [c, f] = A.useState(!1), [p, m] = A.useState(!1);
  A.useEffect(() => {
    r && r.objectId && s("/ui", { replace: !0 });
  }, [s]);
  const h = async (d) => {
    d.preventDefault(), f(!1);
    const g = d.target.email.value;
    if (!g)
      return f(i("please input email"));
    try {
      m(!0), await l.user.forgot({
        email: g
      }), alert(i("find password success! please go to your mailbox to reset it!")), s("/ui/login");
    } catch {
      f(i("find password error! try again later"));
    } finally {
      m(!1);
    }
  };
  return /* @__PURE__ */ b.jsxs(b.Fragment, { children: [
    /* @__PURE__ */ b.jsx(gn, {}),
    /* @__PURE__ */ b.jsx(
      "div",
      {
        className: "message popup notice",
        style: {
          position: "fixed",
          top: 0,
          display: c ? "block" : "none"
        },
        children: /* @__PURE__ */ b.jsx("ul", { children: c ? /* @__PURE__ */ b.jsx("li", { children: c }) : null })
      }
    ),
    /* @__PURE__ */ b.jsx("div", { className: "typecho-login-wrap", children: /* @__PURE__ */ b.jsxs("div", { className: "typecho-login", children: [
      /* @__PURE__ */ b.jsxs("form", { method: "post", name: "login", role: "form", onSubmit: h, children: [
        /* @__PURE__ */ b.jsx("ul", { className: "typecho-option", children: /* @__PURE__ */ b.jsxs("li", { children: [
          /* @__PURE__ */ b.jsx("label", { htmlFor: "email", className: "sr-only", children: i("email") }),
          /* @__PURE__ */ b.jsx(
            "input",
            {
              type: "text",
              id: "email",
              name: "email",
              placeholder: i("email"),
              className: "text-l w-100"
            }
          ),
          /* @__PURE__ */ b.jsx("p", { className: "description", style: { textAlign: "left" }, children: i("you will receive an email which contains a link to create new password") })
        ] }) }),
        /* @__PURE__ */ b.jsx("p", { className: "submit", children: /* @__PURE__ */ b.jsx("button", { type: "submit", disabled: p, className: "btn btn-l w-100 primary", children: i("get new password") }) })
      ] }),
      /* @__PURE__ */ b.jsxs("p", { className: "more-link", children: [
        /* @__PURE__ */ b.jsx(pt, { to: "/ui", children: i("back to home") }),
        " •",
        " ",
        /* @__PURE__ */ b.jsx(pt, { to: "/ui/login", children: i("register.login") })
      ] })
    ] }) })
  ] });
}
const PE = (i) => /* @__PURE__ */ A.createElement("svg", { width: 48, height: 48, viewBox: "0 0 1024 1024", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...i }, /* @__PURE__ */ A.createElement("path", { d: "M512 0C229.12 0 0 229.12 0 512c0 226.56 146.56 417.92 350.08 485.76 25.6 4.48 35.2-10.88 35.2-24.32 0-12.16-.64-52.48-.64-95.36-128.64 23.68-161.92-31.36-172.16-60.16-5.76-14.72-30.72-60.16-52.48-72.32-17.92-9.6-43.52-33.28-.64-33.92 40.32-.64 69.12 37.12 78.72 52.48 46.08 77.44 119.68 55.68 149.12 42.24 4.48-33.28 17.92-55.68 32.64-68.48-113.92-12.8-232.96-56.96-232.96-252.8 0-55.68 19.84-101.76 52.48-137.6-5.12-12.8-23.04-65.28 5.12-135.68 0 0 42.88-13.44 140.8 52.48 40.96-11.52 84.48-17.28 128-17.28 43.52 0 87.04 5.76 128 17.28 97.92-66.56 140.8-52.48 140.8-52.48 28.16 70.4 10.24 122.88 5.12 135.68 32.64 35.84 52.48 81.28 52.48 137.6 0 196.48-119.68 240-233.6 252.8 18.56 16 34.56 46.72 34.56 94.72 0 68.48-.64 123.52-.64 140.8 0 13.44 9.6 29.44 35.2 24.32C877.44 929.92 1024 737.92 1024 512 1024 229.12 794.88 0 512 0z", fill: "#1B1F23" })), WE = (i) => /* @__PURE__ */ A.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 48, height: 48, viewBox: "126.444 2.281 589 589", ...i }, /* @__PURE__ */ A.createElement("circle", { cx: 420.944, cy: 296.781, r: 294.5, fill: "#2daae1" }), /* @__PURE__ */ A.createElement("path", { d: "M609.773 179.634c-13.891 6.164-28.811 10.331-44.498 12.204 16.01-9.587 28.275-24.779 34.066-42.86a154.78 154.78 0 0 1-49.209 18.801c-14.125-15.056-34.267-24.456-56.551-24.456-42.773 0-77.462 34.675-77.462 77.473 0 6.064.683 11.98 1.996 17.66-64.389-3.236-121.474-34.079-159.684-80.945-6.672 11.446-10.491 24.754-10.491 38.953 0 26.875 13.679 50.587 34.464 64.477a77.122 77.122 0 0 1-35.097-9.686v.979c0 37.54 26.701 68.842 62.145 75.961-6.511 1.784-13.344 2.716-20.413 2.716-4.998 0-9.847-.473-14.584-1.364 9.859 30.769 38.471 53.166 72.363 53.799-26.515 20.785-59.925 33.175-96.212 33.175-6.25 0-12.427-.373-18.491-1.104 34.291 21.988 75.006 34.824 118.759 34.824 142.496 0 220.428-118.052 220.428-220.428 0-3.361-.074-6.697-.236-10.021a157.855 157.855 0 0 0 38.707-40.158z", fill: "#f6f6f3" })), e8 = (i) => /* @__PURE__ */ A.createElement("svg", { width: 48, height: 48, viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...i }, /* @__PURE__ */ A.createElement("path", { d: "M32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 23.9861 5.85096 30.6053 13.5 31.8056V20.625H9.43751V16H13.5V12.475C13.5 8.465 15.8887 6.25001 19.5434 6.25001C21.294 6.25001 23.125 6.5625 23.125 6.5625V10.5H21.1074C19.1198 10.5 18.5 11.7334 18.5 12.9987V16H22.9375L22.2281 20.625H18.5V31.8056C26.149 30.6053 32 23.9861 32 16", fill: "#1877F2" })), t8 = (i) => /* @__PURE__ */ A.createElement("svg", { height: 48, width: 48, viewBox: "0 0 24 24", ...i }, /* @__PURE__ */ A.createElement("circle", { cx: 12, cy: 12, fill: "#D34237", r: 12 }), /* @__PURE__ */ A.createElement("path", { d: "M19.3945,9.4904c0.0639,0.8284,-0.0762,1.821,-0.6232,1.8696c-0.8928,0.0798,-0.4271,-0.9037,-0.4154,-1.4957c0.0327,-1.7159,-1.4321,-2.9081,-2.8669,-2.9081c-0.4065,0,-1.3506,0.2755,-1.2052,-0.5817c0.0654,-0.378,0.3856,-0.3727,0.7062,-0.4154C17.4031,5.6373,19.225,7.2973,19.3945,9.4904L19.3945,9.4904zM15.4475,11.4848c1.0374,0.5676,2.2838,0.8502,2.0771,2.5346c-0.0495,0.4036,-0.2938,0.9429,-0.5399,1.2873c-1.7536,2.4548,-7.0427,3.4866,-10.3456,1.6208c-1.1077,-0.6261,-2.254,-1.5417,-2.0771,-3.3659c0.1522,-1.5699,1.2078,-2.786,2.2437,-3.8219c0.9882,-0.9888,2.0303,-1.7624,3.4483,-2.1189c1.5384,-0.3868,1.9932,0.8958,1.5787,2.1604c0.8911,-0.0598,2.7795,-1.0545,3.6147,-0.083C15.8155,10.1263,15.6745,10.8929,15.4475,11.4848L15.4475,11.4848zM14.3256,15.4731c0.3324,-0.3768,0.6665,-0.9511,0.6644,-1.62c-0.0044,-2.0648,-2.6055,-2.8275,-4.6529,-2.6591c-1.1198,0.0918,-1.8731,0.3282,-2.6591,0.7895c-0.6414,0.3765,-1.3921,0.9891,-1.5787,1.9108c-0.4201,2.0727,1.8343,3.0468,3.4898,3.1575C11.502,17.1805,13.4166,16.5052,14.3256,15.4731zM17.3583,9.4904c0.0871,0.6326,-0.0939,1.1807,-0.4569,1.2049c-0.6052,0.0403,-0.3789,-0.4145,-0.4157,-0.9555c-0.023,-0.3332,-0.2991,-0.718,-0.5402,-0.831c-0.4728,-0.2214,-1.2049,0.1613,-1.2049,-0.4984c0,-0.4898,0.4248,-0.4389,0.665,-0.4572C16.4578,7.8731,17.2356,8.5982,17.3583,9.4904zM12.4976,13.6453c0.8852,2.6753,-3.7268,3.9193,-4.5702,1.6202c-0.5643,-1.5375,0.7907,-2.7604,2.2019,-2.9081C11.3342,12.2311,12.2323,12.8455,12.4976,13.6453zM10.3786,14.1024c0.1878,0.325,0.6197,0.0916,0.5817,-0.166C10.915,13.6382,10.3748,13.6824,10.3786,14.1024zM9.6306,15.5152c0.7754,-0.1846,0.8796,-1.645,-0.2908,-1.3712C8.3566,14.3736,8.5467,15.7727,9.6306,15.5152z", fill: "#FFFFFF" })), a8 = (i) => /* @__PURE__ */ A.createElement("svg", { width: 48, height: 48, viewBox: "0 0 1024 1024", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...i }, /* @__PURE__ */ A.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M512 1024C794.77 1024 1024 794.77 1024 512C1024 229.23 794.77 0 512 0C229.23 0 0 229.23 0 512C0 794.77 229.23 1024 512 1024ZM718.383 488.193C734.622 528.473 746.254 557.323 756.601 590.562C783.163 676.031 774.57 711.422 767.929 712.281C753.867 714 713.163 647.906 713.163 647.906C713.163 686.109 693.476 736.031 650.82 772.125C671.367 778.453 717.773 795.562 706.757 814.156C697.851 829.234 553.476 823.766 511.835 819.078C470.195 823.766 325.82 829.234 316.913 814.156C305.898 795.484 352.226 778.453 372.851 772.125C330.195 736.109 310.507 686.188 310.507 647.906C310.507 647.906 269.804 714 255.742 712.281C249.179 711.5 240.585 676.109 267.148 590.562C277.556 556.997 289.209 528.143 305.627 487.496C308.926 479.326 312.419 470.679 316.132 461.422C312.382 318.688 371.367 199 511.835 199C650.742 199 711.054 316.344 707.617 461.422C711.425 470.936 715.003 479.812 718.383 488.193Z", fill: "#259BE0" })), n8 = (i) => /* @__PURE__ */ A.createElement("svg", { width: 48, height: 48, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", ...i }, /* @__PURE__ */ A.createElement("path", { d: "M24,0C10.75,0,0,10.75,0,24s10.75,24,24,24,24-10.75,24-24S37.25,0,24,0ZM30.05,24.76l2.87-1.74c-1.21-.76-2.64-1.28-4.23-1.66-.3-.09-.6-.16-.91-.22v14.96l-4.53,2.27v-2.95s0,0,0,0v2.95s0,0,0,0h0s0,0,0,0c-8.69-.76-14.36-4.99-14.36-10.13s5.52-9.14,12.85-10.05c0,0,.62-.08,1.51-.14v-6.13l4.53-2.27v8.47c.56.07.91.14.91.14,2.87.45,5.44,1.36,7.48,2.64l2.19-1.44.76,6.8-9.07-1.51Z", fill: "#ff9626" }), /* @__PURE__ */ A.createElement("path", { d: "M21.73,21.2c-4.76.91-8.24,3.7-8.24,7.03,0,3.55,3.78,6.35,9.75,7.18v-14.44c-.92.1-1.51.23-1.51.23Z", fill: "#ff9626" }), /* @__PURE__ */ A.createElement("path", { d: "M25.36,17.95c-.77,0-1.5.04-2.12.08v2.94c1.17-.12,2.86-.18,4.53.16v-3.02c-.6-.08-1.45-.16-2.42-.16Z", fill: "none" })), l8 = (i) => /* @__PURE__ */ A.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", xmlnsXlink: "http://www.w3.org/1999/xlink", width: 48, height: 48, ...i }, /* @__PURE__ */ A.createElement("path", { fill: "#EA4335", d: "M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" }), /* @__PURE__ */ A.createElement("path", { fill: "#4285F4", d: "M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" }), /* @__PURE__ */ A.createElement("path", { fill: "#FBBC05", d: "M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" }), /* @__PURE__ */ A.createElement("path", { fill: "#34A853", d: "M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" }), /* @__PURE__ */ A.createElement("path", { fill: "none", d: "M0 0h48v48H0z" })), i8 = (i) => /* @__PURE__ */ A.createElement("svg", { t: 1771582688657, className: "icon", viewBox: "0 0 1024 1024", xmlns: "http://www.w3.org/2000/svg", "p-id": 1921, xmlnsXlink: "http://www.w3.org/1999/xlink", width: 48, height: 48, ...i }, /* @__PURE__ */ A.createElement("path", { d: "M844.8 608c-25.6 51.2-70.4 64-70.4 64-19.2 6.4-38.4 6.4-38.4 6.4H576c89.6-64 268.8-160 268.8-160 19.2 51.2 0 89.6 0 89.6zM691.2 768c-32-6.4-89.6-51.2-108.8-64l211.2 6.4c-51.2 76.8-102.4 57.6-102.4 57.6z m-128-108.8c-6.4-6.4-6.4-6.4 0 0 76.8-179.2 192-313.6 192-313.6s57.6 57.6 57.6 115.2c0 44.8-32 70.4-32 70.4-64 44.8-185.6 108.8-217.6 128z m-32-19.2c-32-307.2 32-384 32-384 19.2 0 32 6.4 32 6.4 57.6 12.8 70.4 64 70.4 64 12.8 25.6 0 64 0 64-19.2 83.2-108.8 217.6-134.4 249.6 6.4 0 0 0 0 0z m-38.4 0c-25.6-32-115.2-166.4-134.4-249.6 0 0-12.8-32 0-64 0 0 12.8-51.2 70.4-64 0 0 25.6-6.4 32-6.4 0 0 64 76.8 32 384z m-25.6 12.8s0 6.4 0 0c-6.4 6.4-6.4 6.4 0 0C435.2 640 307.2 576 256 524.8c0 0-32-25.6-32-70.4-12.8-51.2 51.2-108.8 51.2-108.8s108.8 134.4 192 307.2z m-19.2 25.6s0 6.4 0 0H288s-19.2 0-38.4-6.4c0 0-44.8-12.8-64-64 0 0-19.2-38.4-6.4-89.6-6.4 0 172.8 96 268.8 160z m-6.4 25.6c-19.2 12.8-83.2 57.6-108.8 64-38.4 12.8-76.8-19.2-102.4-64h211.2c0-6.4 0-6.4 0 0 0-6.4 6.4 0 0 0zM512 0C230.4 0 0 230.4 0 512s230.4 512 512 512 512-230.4 512-512-230.4-512-512-512z", "p-id": 1922, fill: "#FF0000" })), s8 = (i) => /* @__PURE__ */ A.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 65 65", width: 48, height: 48, fill: "#fff", ...i }, /* @__PURE__ */ A.createElement("use", { xlinkHref: "#B", x: 0.5, y: 0.5 }), /* @__PURE__ */ A.createElement("defs", null, /* @__PURE__ */ A.createElement("linearGradient", { id: "A", x2: "50%", x1: "50%", y2: "100%", y1: "0%" }, /* @__PURE__ */ A.createElement("stop", { stopColor: "#111d2e", offset: "0%" }), /* @__PURE__ */ A.createElement("stop", { stopColor: "#051839", offset: "21.2%" }), /* @__PURE__ */ A.createElement("stop", { stopColor: "#0a1b48", offset: "40.7%" }), /* @__PURE__ */ A.createElement("stop", { stopColor: "#132e62", offset: "58.1%" }), /* @__PURE__ */ A.createElement("stop", { stopColor: "#144b7e", offset: "73.8%" }), /* @__PURE__ */ A.createElement("stop", { stopColor: "#136497", offset: "87.3%" }), /* @__PURE__ */ A.createElement("stop", { stopColor: "#1387b8", offset: "100%" }))), /* @__PURE__ */ A.createElement("symbol", { id: "B" }, /* @__PURE__ */ A.createElement("g", null, /* @__PURE__ */ A.createElement("path", { d: "M1.305 41.202C5.259 54.386 17.488 64 31.959 64c17.673 0 32-14.327 32-32s-14.327-32-32-32C15.001 0 1.124 13.193.028 29.874c2.074 3.477 2.879 5.628 1.275 11.328z", fill: "url(#A)" }), /* @__PURE__ */ A.createElement("path", { d: "M30.31 23.985l.003.158-7.83 11.375c-1.268-.058-2.54.165-3.748.662a8.14 8.14 0 0 0-1.498.8L.042 29.893s-.398 6.546 1.26 11.424l12.156 5.016c.6 2.728 2.48 5.12 5.242 6.27a8.88 8.88 0 0 0 11.603-4.782 8.89 8.89 0 0 0 .684-3.656L42.18 36.16l.275.005c6.705 0 12.155-5.466 12.155-12.18s-5.44-12.16-12.155-12.174c-6.702 0-12.155 5.46-12.155 12.174zm-1.88 23.05c-1.454 3.5-5.466 5.147-8.953 3.694a6.84 6.84 0 0 1-3.524-3.362l3.957 1.64a5.04 5.04 0 0 0 6.591-2.719 5.05 5.05 0 0 0-2.715-6.601l-4.1-1.695c1.578-.6 3.372-.62 5.05.077 1.7.703 3 2.027 3.696 3.72s.692 3.56-.01 5.246M42.466 32.1a8.12 8.12 0 0 1-8.098-8.113 8.12 8.12 0 0 1 8.098-8.111 8.12 8.12 0 0 1 8.1 8.111 8.12 8.12 0 0 1-8.1 8.113m-6.068-8.126a6.09 6.09 0 0 1 6.08-6.095c3.355 0 6.084 2.73 6.084 6.095a6.09 6.09 0 0 1-6.084 6.093 6.09 6.09 0 0 1-6.081-6.093z" })))), uc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  facebook: e8,
  github: PE,
  google: l8,
  huawei: i8,
  oidc: n8,
  qq: a8,
  steam: s8,
  twitter: WE,
  weibo: t8
}, Symbol.toStringTag, { value: "Module" })), Qs = {}, op = (i) => {
  const l = document.querySelector(`script[src="${i}"]`);
  if (l)
    return Qs[i] = {
      loading: !1,
      error: null,
      scriptEl: l
    };
};
function ig({ src: i, checkForExisting: l = !1, ...s }) {
  let r = i ? Qs[i] : void 0;
  !r && l && i && up && (r = op(i));
  const [c, f] = A.useState(r ? r.loading : !!i), [p, m] = A.useState(r ? r.error : null), [h, d] = A.useState(!1);
  return A.useEffect(() => {
    if (!up || !i || h || p) return;
    r = Qs[i], !r && l && (r = op(i));
    let g;
    r ? { scriptEl: g } = r : (g = document.createElement("script"), g.src = i, Object.keys(s).forEach((w) => {
      g[w] === void 0 ? g.setAttribute(w, s[w]) : g[w] = s[w];
    }), r = Qs[i] = {
      loading: !0,
      error: null,
      scriptEl: g
    });
    const y = () => {
      r && (r.loading = !1), f(!1), d(!0);
    }, x = (w) => {
      r && (r.error = w), m(w);
    };
    return g.addEventListener("load", y), g.addEventListener("error", x), document.body.append(g), () => {
      g.removeEventListener("load", y), g.removeEventListener("error", x);
    };
  }, [i]), [c, p];
}
const up = typeof window < "u" && !!window.document, r8 = ({ sitekey: i, hideDefaultBadge: l = !1, checkForExisting: s = !0 }) => {
  const [r, c] = A.useState();
  return A.useEffect(() => {
    o8 && l && u8(".grecaptcha-badge { visibility: hidden; }");
  }, [l]), ig({
    src: window.recaptchaV3Key ? `https://recaptcha.net/recaptcha/api.js?render=${i}` : void 0,
    onload: () => window.grecaptcha.ready(() => {
      c(window.grecaptcha);
    }),
    checkForExisting: s
  }), A.useEffect(() => {
    window.grecaptcha && window.recaptchaV3Key && window.grecaptcha.ready(() => {
      c(window.grecaptcha);
    });
  }, []), (f) => new Promise((p, m) => {
    r ? p(r.execute(i, { action: f })) : m(new Error("Recaptcha script not available"));
  });
}, o8 = typeof window < "u" && !!window.document, u8 = (i) => {
  const l = document.createElement("style");
  document.head.append(l);
  const s = l.sheet;
  s && s.insertRule(i, s.cssRules.length);
}, c8 = ({ sitekey: i, checkForExisting: l = !0 }) => {
  const [s, r] = A.useState();
  return ig({
    src: window.turnstileKey ? "https://challenges.cloudflare.com/turnstile/v0/api.js" : void 0,
    onload: () => window.turnstile.ready(() => {
      r(window.turnstile);
    }),
    async: !1,
    checkForExisting: l
  }), A.useEffect(() => {
    window.turnstile && window.turnstile.ready(() => {
      r(window.turnstile);
    });
  }, []), (c) => new Promise((f, p) => {
    if (!s) {
      p(new Error("Turnstile script not available"));
      return;
    }
    s.render(".captcha-container", {
      sitekey: i,
      action: c,
      callback: f
    });
  });
}, sg = (i) => {
  const l = r8(i), s = c8(i);
  return window.turnstileKey ? s : window.recaptchaV3Key ? l : () => {
  };
};
async function Ze(i, l = {}) {
  typeof i == "object" ? l = i : typeof i == "string" && (l.url = i), l.headers ??= {}, l.body && !(l.body instanceof FormData) && (l.headers["Content-Type"] = "application/json", l.body = JSON.stringify(l.body));
  let s = window.TOKEN ?? sessionStorage.getItem("TOKEN");
  s ??= localStorage.getItem("TOKEN"), s && (l.headers.Authorization = `Bearer ${s}`);
  let r = window.serverURL;
  if (!r) {
    const h = location.pathname.match(/(.*?\/)ui/);
    r = h ? h[1] : "/";
  }
  const c = l.url.includes("?") ? "&" : "?", f = await fetch(`${r}${l.url}${c}lang=${it.language}`, l);
  if (!f.ok) {
    if (f.status === 401)
      throw new Error(401);
    let h;
    try {
      h = await f.json();
    } catch {
    }
    throw new Error(`${f.status}: ${h?.errmsg ?? f.statusText}`);
  }
  const p = await f.json();
  if (p.errno !== 0)
    throw new Error(p.errmsg);
  return { __version: f.headers.get("x-waline-version"), ...p.data };
}
const rg = (i) => {
  const l = i ? `?email=${encodeURIComponent(i)}` : "";
  return Ze({ url: `token/2fa${l}`, method: "GET" });
}, f8 = (i) => Ze({ url: "token/2fa", method: "POST", body: i }), ri = (i) => Ze({ url: "user", method: "PUT", body: i }), d8 = ({ page: i }) => Ze({
  url: `user?page=${i}`,
  method: "GET"
}), Hu = ({ id: i, ...l }) => Ze({ url: `user/${i}`, method: "PUT", body: l }), h8 = ({ id: i }) => Ze({ url: `user/${i}`, method: "DELETE" });
function m8() {
  const { t: i } = ya(), l = hi(), s = gi(), r = pa((z) => z.user), [c, f] = A.useState(!1), [p, m] = A.useState(!1), [h, d] = A.useState(!1), g = sg({
    sitekey: window.turnstileKey ?? window.recaptchaV3Key,
    hideDefaultBadge: !0
  }), y = location.pathname.match(/(.*?\/)ui/), x = y && y[1] ? y[1] : "/";
  A.useEffect(() => {
    if (!r || !r.objectId)
      return;
    const z = new URLSearchParams(location.search), M = r.type === "administrator", $ = M ? "/ui/profile" : "/ui", O = M && z.get("redirect") ? z.get("redirect") : $;
    s(O.replaceAll(/\/+/g, "/"));
  }, [r]);
  const w = async (z) => {
    z.preventDefault(), m(!1), f(!0);
    const M = z.target.email.value, $ = z.target.password.value, O = z.target.code ? z.target.code.value : "", H = z.target.remember.checked;
    if (!M)
      return m(i("please input email"));
    if (!$)
      return m(i("please input password"));
    if (z.target.code && !O)
      return m(i("please input 2fa code"));
    const X = await g("login");
    try {
      await l.user.login({
        email: M,
        password: $,
        code: O,
        remember: H,
        recaptchaV3: window.recaptchaV3Key ? X : void 0,
        turnstile: window.turnstileKey ? X : void 0
      });
    } catch {
      m(i("email or password error"));
    } finally {
      f(!1);
    }
  }, E = async (z) => {
    const M = z.target.value;
    if (!M)
      return;
    const $ = await rg(M);
    d($.enable);
  };
  let j = window.serverURL;
  if (!j) {
    const z = location.pathname.match(/(.*?\/)ui/);
    j = z ? z[1] : "/";
  }
  const N = Array.isArray(window.oauthServices) ? window.oauthServices.map(({ name: z }) => z) : ["oidc", "qq", "weibo", "github", "twitter", "facebook", "huawei", "steam", "google"];
  return /* @__PURE__ */ b.jsxs(b.Fragment, { children: [
    /* @__PURE__ */ b.jsx(gn, {}),
    /* @__PURE__ */ b.jsx(
      "div",
      {
        className: "message popup notice",
        style: {
          position: "fixed",
          top: 0,
          display: p ? "block" : "none"
        },
        children: /* @__PURE__ */ b.jsx("ul", { children: p ? /* @__PURE__ */ b.jsx("li", { children: p }) : null })
      }
    ),
    /* @__PURE__ */ b.jsx("div", { className: "typecho-login-wrap", children: /* @__PURE__ */ b.jsxs("div", { className: "typecho-login", children: [
      /* @__PURE__ */ b.jsxs("form", { method: "post", name: "login", role: "form", onSubmit: w, children: [
        /* @__PURE__ */ b.jsxs("p", { children: [
          /* @__PURE__ */ b.jsx("label", { htmlFor: "email", className: "sr-only", children: i("email") }),
          /* @__PURE__ */ b.jsx(
            "input",
            {
              type: "text",
              id: "email",
              name: "email",
              placeholder: i("email"),
              className: "text-l w-100",
              onBlur: E
            }
          )
        ] }),
        /* @__PURE__ */ b.jsxs("p", { children: [
          /* @__PURE__ */ b.jsx("label", { htmlFor: "password", className: "sr-only", children: i("password") }),
          /* @__PURE__ */ b.jsx(
            "input",
            {
              type: "password",
              id: "password",
              name: "password",
              className: "text-l w-100",
              placeholder: i("password")
            }
          )
        ] }),
        h && /* @__PURE__ */ b.jsxs("p", { children: [
          /* @__PURE__ */ b.jsx("label", { htmlFor: "code", className: "sr-only", children: i("2fa code") }),
          /* @__PURE__ */ b.jsx(
            "input",
            {
              type: "text",
              id: "code",
              name: "code",
              className: "text-l w-100",
              placeholder: i("2fa code")
            }
          )
        ] }),
        /* @__PURE__ */ b.jsx("p", { className: "captcha-container" }),
        /* @__PURE__ */ b.jsx("p", { className: "submit", children: /* @__PURE__ */ b.jsx("button", { type: "submit", className: "btn btn-l w-100 primary", disabled: c, children: i("login") }) }),
        /* @__PURE__ */ b.jsxs("p", { style: { display: "flex", justifyContent: "space-between" }, children: [
          /* @__PURE__ */ b.jsxs("label", { htmlFor: "remember", children: [
            /* @__PURE__ */ b.jsx("input", { type: "checkbox", name: "remember", className: "checkbox", id: "remember" }),
            " ",
            i("remember me")
          ] }),
          /* @__PURE__ */ b.jsx("span", { className: "right forgot-password", children: /* @__PURE__ */ b.jsx(pt, { to: "/ui/forgot", children: i("forgot password") }) })
        ] })
      ] }),
      /* @__PURE__ */ b.jsx("div", { className: "social-accounts", children: N.map((z) => /* @__PURE__ */ b.jsx(
        "a",
        {
          href: `${j}oauth?type=${z}&redirect=${x}ui/profile`,
          children: Ue.createElement(uc[z])
        },
        z
      )) }),
      /* @__PURE__ */ b.jsxs("p", { className: "more-link", children: [
        /* @__PURE__ */ b.jsx(pt, { to: "/ui", children: i("back to home") }),
        " •",
        " ",
        /* @__PURE__ */ b.jsx(pt, { to: "/ui/register", children: i("register") })
      ] })
    ] }) })
  ] });
}
var qu = { exports: {} };
var cp;
function p8() {
  return cp || (cp = 1, (function(i) {
    (function() {
      var l = {}.hasOwnProperty;
      function s() {
        for (var f = "", p = 0; p < arguments.length; p++) {
          var m = arguments[p];
          m && (f = c(f, r(m)));
        }
        return f;
      }
      function r(f) {
        if (typeof f == "string" || typeof f == "number")
          return f;
        if (typeof f != "object")
          return "";
        if (Array.isArray(f))
          return s.apply(null, f);
        if (f.toString !== Object.prototype.toString && !f.toString.toString().includes("[native code]"))
          return f.toString();
        var p = "";
        for (var m in f)
          l.call(f, m) && f[m] && (p = c(p, m));
        return p;
      }
      function c(f, p) {
        return p ? f ? f + " " + p : f + p : f;
      }
      i.exports ? (s.default = s, i.exports = s) : window.classNames = s;
    })();
  })(qu)), qu.exports;
}
var g8 = p8();
const ci = /* @__PURE__ */ Ps(g8);
var Vu = { exports: {} }, Yu = { exports: {} }, fp;
function y8() {
  return fp || (fp = 1, (function() {
    var i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", l = {
      // Bit-wise rotation left
      rotl: function(s, r) {
        return s << r | s >>> 32 - r;
      },
      // Bit-wise rotation right
      rotr: function(s, r) {
        return s << 32 - r | s >>> r;
      },
      // Swap big-endian to little-endian and vice versa
      endian: function(s) {
        if (s.constructor == Number)
          return l.rotl(s, 8) & 16711935 | l.rotl(s, 24) & 4278255360;
        for (var r = 0; r < s.length; r++)
          s[r] = l.endian(s[r]);
        return s;
      },
      // Generate an array of any length of random bytes
      randomBytes: function(s) {
        for (var r = []; s > 0; s--)
          r.push(Math.floor(Math.random() * 256));
        return r;
      },
      // Convert a byte array to big-endian 32-bit words
      bytesToWords: function(s) {
        for (var r = [], c = 0, f = 0; c < s.length; c++, f += 8)
          r[f >>> 5] |= s[c] << 24 - f % 32;
        return r;
      },
      // Convert big-endian 32-bit words to a byte array
      wordsToBytes: function(s) {
        for (var r = [], c = 0; c < s.length * 32; c += 8)
          r.push(s[c >>> 5] >>> 24 - c % 32 & 255);
        return r;
      },
      // Convert a byte array to a hex string
      bytesToHex: function(s) {
        for (var r = [], c = 0; c < s.length; c++)
          r.push((s[c] >>> 4).toString(16)), r.push((s[c] & 15).toString(16));
        return r.join("");
      },
      // Convert a hex string to a byte array
      hexToBytes: function(s) {
        for (var r = [], c = 0; c < s.length; c += 2)
          r.push(parseInt(s.substr(c, 2), 16));
        return r;
      },
      // Convert a byte array to a base-64 string
      bytesToBase64: function(s) {
        for (var r = [], c = 0; c < s.length; c += 3)
          for (var f = s[c] << 16 | s[c + 1] << 8 | s[c + 2], p = 0; p < 4; p++)
            c * 8 + p * 6 <= s.length * 8 ? r.push(i.charAt(f >>> 6 * (3 - p) & 63)) : r.push("=");
        return r.join("");
      },
      // Convert a base-64 string to a byte array
      base64ToBytes: function(s) {
        s = s.replace(/[^A-Z0-9+\/]/ig, "");
        for (var r = [], c = 0, f = 0; c < s.length; f = ++c % 4)
          f != 0 && r.push((i.indexOf(s.charAt(c - 1)) & Math.pow(2, -2 * f + 8) - 1) << f * 2 | i.indexOf(s.charAt(c)) >>> 6 - f * 2);
        return r;
      }
    };
    Yu.exports = l;
  })()), Yu.exports;
}
var Gu, dp;
function hp() {
  if (dp) return Gu;
  dp = 1;
  var i = {
    // UTF-8 encoding
    utf8: {
      // Convert a string to a byte array
      stringToBytes: function(l) {
        return i.bin.stringToBytes(unescape(encodeURIComponent(l)));
      },
      // Convert a byte array to a string
      bytesToString: function(l) {
        return decodeURIComponent(escape(i.bin.bytesToString(l)));
      }
    },
    // Binary encoding
    bin: {
      // Convert a string to a byte array
      stringToBytes: function(l) {
        for (var s = [], r = 0; r < l.length; r++)
          s.push(l.charCodeAt(r) & 255);
        return s;
      },
      // Convert a byte array to a string
      bytesToString: function(l) {
        for (var s = [], r = 0; r < l.length; r++)
          s.push(String.fromCharCode(l[r]));
        return s.join("");
      }
    }
  };
  return Gu = i, Gu;
}
var Qu, mp;
function v8() {
  if (mp) return Qu;
  mp = 1, Qu = function(s) {
    return s != null && (i(s) || l(s) || !!s._isBuffer);
  };
  function i(s) {
    return !!s.constructor && typeof s.constructor.isBuffer == "function" && s.constructor.isBuffer(s);
  }
  function l(s) {
    return typeof s.readFloatLE == "function" && typeof s.slice == "function" && i(s.slice(0, 0));
  }
  return Qu;
}
var pp;
function b8() {
  return pp || (pp = 1, (function() {
    var i = y8(), l = hp().utf8, s = v8(), r = hp().bin, c = function(f, p) {
      f.constructor == String ? p && p.encoding === "binary" ? f = r.stringToBytes(f) : f = l.stringToBytes(f) : s(f) ? f = Array.prototype.slice.call(f, 0) : !Array.isArray(f) && f.constructor !== Uint8Array && (f = f.toString());
      for (var m = i.bytesToWords(f), h = f.length * 8, d = 1732584193, g = -271733879, y = -1732584194, x = 271733878, w = 0; w < m.length; w++)
        m[w] = (m[w] << 8 | m[w] >>> 24) & 16711935 | (m[w] << 24 | m[w] >>> 8) & 4278255360;
      m[h >>> 5] |= 128 << h % 32, m[(h + 64 >>> 9 << 4) + 14] = h;
      for (var E = c._ff, j = c._gg, N = c._hh, z = c._ii, w = 0; w < m.length; w += 16) {
        var M = d, $ = g, O = y, H = x;
        d = E(d, g, y, x, m[w + 0], 7, -680876936), x = E(x, d, g, y, m[w + 1], 12, -389564586), y = E(y, x, d, g, m[w + 2], 17, 606105819), g = E(g, y, x, d, m[w + 3], 22, -1044525330), d = E(d, g, y, x, m[w + 4], 7, -176418897), x = E(x, d, g, y, m[w + 5], 12, 1200080426), y = E(y, x, d, g, m[w + 6], 17, -1473231341), g = E(g, y, x, d, m[w + 7], 22, -45705983), d = E(d, g, y, x, m[w + 8], 7, 1770035416), x = E(x, d, g, y, m[w + 9], 12, -1958414417), y = E(y, x, d, g, m[w + 10], 17, -42063), g = E(g, y, x, d, m[w + 11], 22, -1990404162), d = E(d, g, y, x, m[w + 12], 7, 1804603682), x = E(x, d, g, y, m[w + 13], 12, -40341101), y = E(y, x, d, g, m[w + 14], 17, -1502002290), g = E(g, y, x, d, m[w + 15], 22, 1236535329), d = j(d, g, y, x, m[w + 1], 5, -165796510), x = j(x, d, g, y, m[w + 6], 9, -1069501632), y = j(y, x, d, g, m[w + 11], 14, 643717713), g = j(g, y, x, d, m[w + 0], 20, -373897302), d = j(d, g, y, x, m[w + 5], 5, -701558691), x = j(x, d, g, y, m[w + 10], 9, 38016083), y = j(y, x, d, g, m[w + 15], 14, -660478335), g = j(g, y, x, d, m[w + 4], 20, -405537848), d = j(d, g, y, x, m[w + 9], 5, 568446438), x = j(x, d, g, y, m[w + 14], 9, -1019803690), y = j(y, x, d, g, m[w + 3], 14, -187363961), g = j(g, y, x, d, m[w + 8], 20, 1163531501), d = j(d, g, y, x, m[w + 13], 5, -1444681467), x = j(x, d, g, y, m[w + 2], 9, -51403784), y = j(y, x, d, g, m[w + 7], 14, 1735328473), g = j(g, y, x, d, m[w + 12], 20, -1926607734), d = N(d, g, y, x, m[w + 5], 4, -378558), x = N(x, d, g, y, m[w + 8], 11, -2022574463), y = N(y, x, d, g, m[w + 11], 16, 1839030562), g = N(g, y, x, d, m[w + 14], 23, -35309556), d = N(d, g, y, x, m[w + 1], 4, -1530992060), x = N(x, d, g, y, m[w + 4], 11, 1272893353), y = N(y, x, d, g, m[w + 7], 16, -155497632), g = N(g, y, x, d, m[w + 10], 23, -1094730640), d = N(d, g, y, x, m[w + 13], 4, 681279174), x = N(x, d, g, y, m[w + 0], 11, -358537222), y = N(y, x, d, g, m[w + 3], 16, -722521979), g = N(g, y, x, d, m[w + 6], 23, 76029189), d = N(d, g, y, x, m[w + 9], 4, -640364487), x = N(x, d, g, y, m[w + 12], 11, -421815835), y = N(y, x, d, g, m[w + 15], 16, 530742520), g = N(g, y, x, d, m[w + 2], 23, -995338651), d = z(d, g, y, x, m[w + 0], 6, -198630844), x = z(x, d, g, y, m[w + 7], 10, 1126891415), y = z(y, x, d, g, m[w + 14], 15, -1416354905), g = z(g, y, x, d, m[w + 5], 21, -57434055), d = z(d, g, y, x, m[w + 12], 6, 1700485571), x = z(x, d, g, y, m[w + 3], 10, -1894986606), y = z(y, x, d, g, m[w + 10], 15, -1051523), g = z(g, y, x, d, m[w + 1], 21, -2054922799), d = z(d, g, y, x, m[w + 8], 6, 1873313359), x = z(x, d, g, y, m[w + 15], 10, -30611744), y = z(y, x, d, g, m[w + 6], 15, -1560198380), g = z(g, y, x, d, m[w + 13], 21, 1309151649), d = z(d, g, y, x, m[w + 4], 6, -145523070), x = z(x, d, g, y, m[w + 11], 10, -1120210379), y = z(y, x, d, g, m[w + 2], 15, 718787259), g = z(g, y, x, d, m[w + 9], 21, -343485551), d = d + M >>> 0, g = g + $ >>> 0, y = y + O >>> 0, x = x + H >>> 0;
      }
      return i.endian([d, g, y, x]);
    };
    c._ff = function(f, p, m, h, d, g, y) {
      var x = f + (p & m | ~p & h) + (d >>> 0) + y;
      return (x << g | x >>> 32 - g) + p;
    }, c._gg = function(f, p, m, h, d, g, y) {
      var x = f + (p & h | m & ~h) + (d >>> 0) + y;
      return (x << g | x >>> 32 - g) + p;
    }, c._hh = function(f, p, m, h, d, g, y) {
      var x = f + (p ^ m ^ h) + (d >>> 0) + y;
      return (x << g | x >>> 32 - g) + p;
    }, c._ii = function(f, p, m, h, d, g, y) {
      var x = f + (m ^ (p | ~h)) + (d >>> 0) + y;
      return (x << g | x >>> 32 - g) + p;
    }, c._blocksize = 16, c._digestsize = 16, Vu.exports = function(f, p) {
      if (f == null)
        throw new Error("Illegal argument " + f);
      var m = i.wordsToBytes(c(f, p));
      return p && p.asBytes ? m : p && p.asString ? r.bytesToString(m) : i.bytesToHex(m);
    };
  })()), Vu.exports;
}
var x8 = b8();
const S8 = /* @__PURE__ */ Ps(x8), og = (i = "", l = "") => l || (typeof i != "string" && (i = ""), `https://sdn.geekzu.org/avatar/${S8(i)}?s=40&r=G&d=`), w8 = (i) => (window.SITE_URL ?? "") + i, gp = (i) => i < 10 ? `0${i}` : i, E8 = (i) => {
  let l;
  typeof i == "number" ? l = new Date(i) : l = new Date(/\d+-\d+-\d+\s\d+:\d+:\d+/.test(i) ? i.replaceAll("-", "/") : i);
  const s = [l.getFullYear(), l.getMonth() + 1, l.getDate()].map((c) => gp(c)).join("-"), r = [l.getHours(), l.getMinutes(), l.getSeconds()].map((c) => gp(c)).join(":");
  return `${s} ${r}`;
};
function ug({ current: i, total: l, onChange: s }) {
  return l < 1 ? null : /* @__PURE__ */ b.jsxs("ul", { className: "typecho-pager", children: [
    i > 1 ? /* @__PURE__ */ b.jsx("li", { className: "prev", children: /* @__PURE__ */ b.jsx("a", { href: "#", onClick: () => s(i - 1), children: "«" }) }) : null,
    i > 4 ? /* @__PURE__ */ b.jsxs(b.Fragment, { children: [
      /* @__PURE__ */ b.jsx("li", { children: /* @__PURE__ */ b.jsx("a", { href: "#", onClick: () => s(1), children: "1" }) }),
      /* @__PURE__ */ b.jsx("li", { children: /* @__PURE__ */ b.jsx("span", { children: "..." }) })
    ] }) : null,
    [i - 3, i - 2, i - 1, i, i + 1, i + 2, i + 3].filter((r) => r > 0 && r <= l).map((r) => /* @__PURE__ */ b.jsx("li", { className: ci({ current: r === i }), children: /* @__PURE__ */ b.jsx("a", { href: "#", onClick: () => s(r), children: r }) }, r)),
    i < l - 3 ? /* @__PURE__ */ b.jsxs(b.Fragment, { children: [
      /* @__PURE__ */ b.jsx("li", { children: /* @__PURE__ */ b.jsx("span", { children: "..." }) }),
      /* @__PURE__ */ b.jsx("li", { children: /* @__PURE__ */ b.jsx("a", { href: "#", onClick: () => s(l), children: l }) })
    ] }) : null,
    i < l ? /* @__PURE__ */ b.jsx("li", { className: "next", children: /* @__PURE__ */ b.jsx("a", { href: "#", onClick: () => s(i + 1), children: "»" }) }) : null
  ] });
}
const li = ({ page: i = 1, filter: l }) => Ze({
  url: `comment?type=list&owner=${l.owner}&status=${l.status}&keyword=${l.keyword}&page=${i}`,
  method: "GET"
}), Ya = (i, l) => Ze({
  url: `comment/${i}`,
  method: "PUT",
  body: l
}), A8 = (i) => Ze({
  url: "comment",
  method: "POST",
  body: i
}), yp = (i) => Ze({
  url: `comment/${i}`,
  method: "DELETE"
});
function C8() {
  const { t: i } = ya(), l = A.useRef(null), s = A.useRef(null), r = A.useRef({}), c = pa((O) => O.user), [f, p] = A.useState({
    page: 1,
    totalPages: 0,
    spamCount: 0,
    waitingCount: 0,
    data: []
  }), [m, h] = A.useReducer((O, H) => ({ ...O, ...H }), {
    owner: "all",
    status: "approved",
    keyword: ""
  }), [d, g] = A.useState({}), [y, x] = A.useState(!1), [w, E] = A.useState([]), j = [
    [
      "owner",
      [
        { type: "all", name: /* @__PURE__ */ b.jsx(Qt, { i18nKey: "all" }) },
        { type: "mine", name: /* @__PURE__ */ b.jsx(Qt, { i18nKey: "mine" }) }
      ]
    ],
    [
      "status",
      [
        { type: "approved", name: /* @__PURE__ */ b.jsx(Qt, { i18nKey: "approved" }) },
        { type: "waiting", name: /* @__PURE__ */ b.jsx(Qt, { i18nKey: "waiting" }) },
        { type: "spam", name: /* @__PURE__ */ b.jsx(Qt, { i18nKey: "spam" }) }
      ]
    ]
  ];
  A.useEffect(() => {
    li({ page: f.page, filter: m }).then((O) => {
      p({ ...f, ...O }), E([]);
    });
  }, [m, f.page]);
  const N = (O) => [
    {
      key: "approved",
      name: i("approved button"),
      show: !0,
      disable: O && O.status === "approved",
      async action() {
        if (O) {
          switch (await Ya(O.objectId, { status: "approved" }), f.data = f.data.filter(({ objectId: H }) => H !== O.objectId), O.status) {
            case "waiting": {
              f.waitingCount -= 1;
              break;
            }
            case "spam": {
              f.spamCount -= 1;
              break;
            }
          }
          p({ ...f });
        } else
          await Promise.all(
            w.map((H) => Ya(H, { status: "approved" }))
          ), li({ page: f.page, filter: m }).then((H) => {
            p({ ...f, ...H }), E([]);
          });
      }
    },
    {
      key: "waiting",
      name: i("waiting"),
      show: !0,
      disable: O && O.status === "waiting",
      async action() {
        O ? (await Ya(O.objectId, { status: "waiting" }), f.data = f.data.filter(({ objectId: H }) => H !== O.objectId), O.status === "spam" && (f.spamCount -= 1), f.waitingCount += 1, p({ ...f })) : (await Promise.all(
          w.map((H) => Ya(H, { status: "waiting" }))
        ), li({ page: f.page, filter: m }).then((H) => {
          p({ ...f, ...H }), E([]);
        }));
      }
    },
    {
      key: "spam",
      show: !0,
      name: i(O ? "spam" : "mark as spam"),
      disable: O && O.status === "spam",
      async action() {
        O ? (await Ya(O.objectId, { status: "spam" }), f.data = f.data.filter(({ objectId: H }) => H !== O.objectId), f.spamCount += 1, p({ ...f })) : (await Promise.all(
          w.map((H) => Ya(H, { status: "spam" }))
        ), li({ page: f.page, filter: m }).then((H) => {
          p({ ...f, ...H }), E([]);
        }));
      }
    },
    {
      key: "sticky",
      show: O && !O.rid && O.status === "approved",
      name: O && O.sticky ? i("disable sticky") : i("sticky"),
      async action(H) {
        H.preventDefault();
        const X = !O.sticky;
        f.data.forEach((Q) => {
          Q.objectId === O.objectId && (Q.sticky = X);
        }), await Ya(O.objectId, { sticky: X ? 1 : 0 }), p({ ...f });
      }
    },
    {
      key: "edit",
      show: O,
      name: i("edit"),
      action() {
        const H = {};
        d.id !== O.objectId && d.action !== "edit" && (H.id = O.objectId, H.action = "edit"), g(H);
      }
    },
    {
      key: "reply",
      show: O && O.status === "approved",
      name: i("reply"),
      action() {
        const H = {};
        d.id !== O.objectId && d.action !== "reply" && (H.id = O.objectId, H.action = "reply"), g(H);
      }
    },
    {
      key: "delete",
      name: i("delete"),
      show: !0,
      async action() {
        const H = O ? i("delete one confirm", { nick: O.nick }) : i("delete multiple confirm");
        confirm(H) && (O ? (await yp(O.objectId), f.data = f.data.filter(({ objectId: X }) => X !== O.objectId), p({ ...f })) : (await Promise.all(w.map((X) => yp(X))), li({ page: f.page, filter: m }).then((X) => {
          p({ ...f, ...X }), E([]);
        })));
      }
    }
  ].filter(({ show: H }) => H), z = async ({ pid: O, rid: H, url: X, at: Q }) => {
    const F = s.current.value;
    if (!F)
      return null;
    const { display_name: I, email: P, url: te } = c;
    await A8({
      nick: I,
      mail: P,
      ua: navigator.userAgent,
      link: te,
      url: X,
      comment: F,
      pid: O,
      rid: H ?? O,
      at: Q
    }), location.reload();
  }, M = async (O) => {
    const H = f.data[O];
    await Ya(H.objectId, r.current), f.data[O] = { ...H, ...r.current }, p({ ...f }), g({});
  }, $ = f.data.length > 0 && f.data.every(({ objectId: O }) => w.includes(O));
  return /* @__PURE__ */ b.jsxs(b.Fragment, { children: [
    /* @__PURE__ */ b.jsx(gn, {}),
    /* @__PURE__ */ b.jsx("div", { className: "main", children: /* @__PURE__ */ b.jsxs("div", { className: "body container", children: [
      /* @__PURE__ */ b.jsx("div", { className: "typecho-page-title", children: /* @__PURE__ */ b.jsx("h2", { children: i("manage comments") }) }),
      /* @__PURE__ */ b.jsx("div", { className: "row typecho-page-main", role: "main", children: /* @__PURE__ */ b.jsxs("div", { className: "col-mb-12 typecho-list", children: [
        /* @__PURE__ */ b.jsx("div", { className: "clear-fix", children: j.map(([O, H]) => /* @__PURE__ */ b.jsx(
          "ul",
          {
            className: ci("typecho-option-tabs", {
              right: O === "owner"
            }),
            children: H.map(({ type: X, name: Q }) => /* @__PURE__ */ b.jsx("li", { className: ci({ current: X === m[O] }), children: /* @__PURE__ */ b.jsxs(
              "a",
              {
                role: "button",
                tabIndex: 0,
                onClick: () => h({ [O]: X }),
                onKeyDown: (F) => {
                  (F.key === "Enter" || F.key === " ") && (F.preventDefault(), h({ [O]: X }));
                },
                children: [
                  Q,
                  O === "status" && X !== "approved" && f[`${X}Count`] > 0 ? /* @__PURE__ */ b.jsx("span", { className: "balloon", children: f[`${X}Count`] }) : null
                ]
              }
            ) }, X))
          },
          O
        )) }),
        /* @__PURE__ */ b.jsx("div", { className: "typecho-list-operate clear-fix", children: /* @__PURE__ */ b.jsxs("form", { method: "get", children: [
          /* @__PURE__ */ b.jsxs("div", { className: "operate", children: [
            /* @__PURE__ */ b.jsxs("label", { children: [
              /* @__PURE__ */ b.jsx("i", { className: "sr-only", children: i("select all") }),
              /* @__PURE__ */ b.jsx(
                "input",
                {
                  type: "checkbox",
                  className: "typecho-table-select-all",
                  checked: $,
                  onChange: () => E(
                    $ ? [] : f.data.map(({ objectId: O }) => O)
                  )
                }
              )
            ] }),
            /* @__PURE__ */ b.jsxs("div", { className: "btn-group btn-drop", children: [
              /* @__PURE__ */ b.jsxs(
                "button",
                {
                  className: "btn dropdown-toggle btn-s",
                  type: "button",
                  onClick: () => x(!y),
                  children: [
                    /* @__PURE__ */ b.jsx("i", { className: "sr-only", children: i("action") }),
                    i("selected items"),
                    " ",
                    /* @__PURE__ */ b.jsx("i", { className: "i-caret-down" })
                  ]
                }
              ),
              /* @__PURE__ */ b.jsx(
                "ul",
                {
                  className: "dropdown-menu",
                  style: { display: y ? "block" : "none" },
                  onClick: () => x(!1),
                  children: N().map(({ key: O, name: H, action: X }) => /* @__PURE__ */ b.jsx("li", { children: /* @__PURE__ */ b.jsx(
                    "a",
                    {
                      role: "button",
                      tabIndex: 0,
                      onClick: X,
                      onKeyDown: (Q) => {
                        (Q.key === "Enter" || Q.key === " ") && (Q.preventDefault(), X(Q));
                      },
                      children: H
                    }
                  ) }, O))
                }
              ),
              " "
            ] })
          ] }),
          /* @__PURE__ */ b.jsxs("div", { className: "search", role: "search", children: [
            /* @__PURE__ */ b.jsx(
              "input",
              {
                type: "text",
                ref: l,
                className: "text-s",
                placeholder: i("please input keywords")
              }
            ),
            " ",
            /* @__PURE__ */ b.jsx(
              "button",
              {
                type: "submit",
                className: "btn btn-s",
                onClick: (O) => {
                  O.preventDefault(), h({ keyword: l.current.value });
                },
                children: i("filter")
              }
            )
          ] })
        ] }) }),
        /* @__PURE__ */ b.jsx("form", { method: "post", name: "manage_comments", className: "operate-form", children: /* @__PURE__ */ b.jsx("div", { className: "typecho-table-wrap", children: /* @__PURE__ */ b.jsxs("table", { className: "typecho-list-table", children: [
          /* @__PURE__ */ b.jsxs("colgroup", { children: [
            /* @__PURE__ */ b.jsx("col", { width: "3%" }),
            /* @__PURE__ */ b.jsx("col", { width: "6%" }),
            /* @__PURE__ */ b.jsx("col", { width: "20%" }),
            /* @__PURE__ */ b.jsx("col", { width: "71%" })
          ] }),
          /* @__PURE__ */ b.jsx("thead", { children: /* @__PURE__ */ b.jsxs("tr", { children: [
            /* @__PURE__ */ b.jsx("th", { children: " " }),
            /* @__PURE__ */ b.jsx("th", { children: " " }),
            /* @__PURE__ */ b.jsx("th", { children: i("author") }),
            /* @__PURE__ */ b.jsx("th", { children: i("content") })
          ] }) }),
          /* @__PURE__ */ b.jsx("tbody", { children: f.data.map(
            ({
              objectId: O,
              nick: H,
              mail: X,
              avatar: Q,
              link: F,
              comment: I,
              ip: P,
              addr: te,
              url: se,
              status: re,
              rid: ue,
              pid: we,
              sticky: k,
              time: K,
              insertedAt: J
            }, ce) => d.id === O && d.action === "edit" ? /* @__PURE__ */ b.jsxs("tr", { className: "comment-edit", children: [
              /* @__PURE__ */ b.jsx("td", { children: " " }),
              /* @__PURE__ */ b.jsx("td", { colSpan: "2", style: { verticalAlign: "top" }, children: /* @__PURE__ */ b.jsxs("div", { className: "comment-edit-info", children: [
                /* @__PURE__ */ b.jsxs("p", { children: [
                  /* @__PURE__ */ b.jsx("label", { htmlFor: `comment-${O}-author`, children: i("username") }),
                  /* @__PURE__ */ b.jsx(
                    "input",
                    {
                      className: "text-s w-100",
                      id: `comment-${O}-author`,
                      name: "author",
                      type: "text",
                      defaultValue: H,
                      onChange: (le) => r.current.nick = le.target.value
                    }
                  )
                ] }),
                /* @__PURE__ */ b.jsxs("p", { children: [
                  /* @__PURE__ */ b.jsx("label", { htmlFor: `comment-${O}-mail`, children: i("email") }),
                  /* @__PURE__ */ b.jsx(
                    "input",
                    {
                      className: "text-s w-100",
                      type: "email",
                      name: "mail",
                      id: `comment-${O}-mail`,
                      defaultValue: X,
                      onChange: (le) => r.current.mail = le.target.value
                    }
                  )
                ] }),
                /* @__PURE__ */ b.jsxs("p", { children: [
                  /* @__PURE__ */ b.jsx("label", { htmlFor: `comment-${O}-url`, children: i("homepage") }),
                  /* @__PURE__ */ b.jsx(
                    "input",
                    {
                      className: "text-s w-100",
                      type: "text",
                      name: "url",
                      id: `comment-${O}-author`,
                      defaultValue: F,
                      onChange: (le) => r.current.link = le.target.value
                    }
                  )
                ] })
              ] }) }),
              /* @__PURE__ */ b.jsx("td", { style: { verticalAlign: "top" }, children: /* @__PURE__ */ b.jsxs("div", { className: "comment-edit-content", children: [
                /* @__PURE__ */ b.jsxs("p", { children: [
                  /* @__PURE__ */ b.jsx("label", { htmlFor: `comment-${O}-text`, children: i("content") }),
                  /* @__PURE__ */ b.jsx(
                    "textarea",
                    {
                      name: "text",
                      id: `comment-${O}-text`,
                      rows: "6",
                      className: "w-90 mono",
                      defaultValue: I,
                      onChange: (le) => r.current.comment = le.target.value
                    }
                  )
                ] }),
                /* @__PURE__ */ b.jsxs("p", { children: [
                  /* @__PURE__ */ b.jsx(
                    "button",
                    {
                      type: "button",
                      className: "btn btn-s primary",
                      onClick: () => M(ce),
                      children: i("submit")
                    }
                  ),
                  /* @__PURE__ */ b.jsx(
                    "button",
                    {
                      type: "button",
                      className: "btn btn-s cancel",
                      onClick: () => g({}),
                      children: i("cancel")
                    }
                  )
                ] })
              ] }) })
            ] }, O) : /* @__PURE__ */ b.jsxs("tr", { id: `comment-${O}`, children: [
              /* @__PURE__ */ b.jsx("td", { style: { verticalalign: "top" }, children: /* @__PURE__ */ b.jsx(
                "input",
                {
                  type: "checkbox",
                  value: O,
                  checked: w.includes(O),
                  onChange: () => E(
                    w.includes(O) ? w.filter((le) => le !== O) : [...w, O]
                  )
                }
              ) }),
              /* @__PURE__ */ b.jsx("td", { style: { verticalalign: "top" }, children: /* @__PURE__ */ b.jsx("div", { className: "comment-avatar", children: /* @__PURE__ */ b.jsx(
                "img",
                {
                  className: "avatar",
                  src: og(X, Q),
                  alt: H,
                  width: "40",
                  height: "40"
                }
              ) }) }),
              /* @__PURE__ */ b.jsx("td", { style: { verticalalign: "top" }, className: "comment-head", children: /* @__PURE__ */ b.jsxs("div", { className: "comment-meta", children: [
                /* @__PURE__ */ b.jsx("strong", { className: "comment-author", children: F ? /* @__PURE__ */ b.jsx(
                  "a",
                  {
                    href: F.startsWith("https://") ? F : `https://${F}`,
                    rel: "external nofollow noreferrer",
                    target: "_blank",
                    children: H
                  }
                ) : H }),
                /* @__PURE__ */ b.jsx("br", {}),
                /* @__PURE__ */ b.jsx("span", { children: /* @__PURE__ */ b.jsx("a", { href: `mailto:${X}`, target: "_blank", rel: "noreferrer", children: X }) }),
                X && /* @__PURE__ */ b.jsx("br", {}),
                /* @__PURE__ */ b.jsx("span", { children: P }),
                P && /* @__PURE__ */ b.jsx("br", {}),
                /* @__PURE__ */ b.jsx("span", { children: te })
              ] }) }),
              /* @__PURE__ */ b.jsxs("td", { style: { verticalalign: "top" }, className: "comment-body", children: [
                /* @__PURE__ */ b.jsxs("div", { className: "comment-date", children: [
                  E8(J ?? K),
                  " ",
                  i("at"),
                  " ",
                  /* @__PURE__ */ b.jsx("a", { href: w8(se), target: "_blank", rel: "noreferrer", children: se })
                ] }),
                /* @__PURE__ */ b.jsx(
                  "div",
                  {
                    className: "comment-content",
                    dangerouslySetInnerHTML: { __html: I }
                  }
                ),
                d.id === O && d.action === "reply" ? /* @__PURE__ */ b.jsxs("form", { className: "comment-reply", children: [
                  /* @__PURE__ */ b.jsxs("p", { children: [
                    /* @__PURE__ */ b.jsx("label", { htmlFor: "text", className: "sr-only", children: i("content") }),
                    /* @__PURE__ */ b.jsx(
                      "textarea",
                      {
                        id: "text",
                        name: "text",
                        className: "w-90 mono",
                        rows: "3",
                        ref: s
                      }
                    )
                  ] }),
                  /* @__PURE__ */ b.jsxs("p", { children: [
                    /* @__PURE__ */ b.jsx(
                      "button",
                      {
                        type: "button",
                        className: "btn btn-s primary",
                        onClick: (le) => {
                          le.preventDefault(), z({
                            rid: ue,
                            pid: O,
                            url: se,
                            at: H
                          });
                        },
                        children: i("reply")
                      }
                    ),
                    " ",
                    " ",
                    /* @__PURE__ */ b.jsx(
                      "button",
                      {
                        type: "button",
                        className: "btn btn-s cancel",
                        onClick: () => g({}),
                        children: i("cancel")
                      }
                    )
                  ] })
                ] }) : null,
                /* @__PURE__ */ b.jsx("div", { className: "comment-action hidden-by-mouse", children: N({
                  objectId: O,
                  nick: H,
                  status: re,
                  rid: ue,
                  pid: we,
                  sticky: k
                }).map(
                  ({ key: le, disable: R, name: V, action: Z }) => R ? /* @__PURE__ */ b.jsx("span", { className: "weak", children: V }, le) : /* @__PURE__ */ b.jsx("a", { className: `operate-${le}`, onClick: Z, children: V }, le)
                ) })
              ] })
            ] }, O)
          ) })
        ] }) }) }),
        /* @__PURE__ */ b.jsx("div", { className: "typecho-list-operate clear-fix", children: /* @__PURE__ */ b.jsx("form", { method: "get", children: /* @__PURE__ */ b.jsx(
          ug,
          {
            current: f.page,
            total: f.totalPages,
            onChange: (O) => p({ ...f, page: O })
          }
        ) }) })
      ] }) })
    ] }) })
  ] });
}
function R8(i, l, s) {
  const r = new Blob([i], { type: s }), c = document.createElement("a"), f = URL.createObjectURL(r);
  c.href = f, c.download = l, document.body.append(c), c.click(), setTimeout(() => {
    c.remove(), window.URL.revokeObjectURL(f);
  }, 0);
}
const N8 = (i) => new Promise((l, s) => {
  const r = new FileReader();
  r.addEventListener("load", (c) => {
    l(c.target.result);
  }), r.addEventListener("error", s), r.readAsText(i);
});
function j8() {
  const [i, l] = A.useState(!1), [s, r] = A.useState(!1), { t: c } = ya(), f = A.useRef(null), p = () => {
    confirm(c("import clear data confirm")) && f.current.click();
  }, m = async (d) => {
    try {
      const g = await N8(d.target.files[0]), y = JSON.parse(g);
      if (!y || y.type !== "waline") {
        alert("import data format not support!");
        return;
      }
      const x = y.tables.reduce(
        (z, M) => z + (y.data[M]?.length ?? 0),
        0
      );
      let w = 0;
      l([
        "importing {{importedLength}}/{{maxLength}}",
        { importedLength: w, maxLength: x }
      ]);
      const E = {};
      for (const z of y.tables) {
        const M = y.data[z];
        if (z !== "Users" && await Ze({
          url: `db?table=${z}`,
          method: "DELETE"
        }), E[z] ??= {}, !!Array.isArray(M))
          for (const $ of M) {
            let O = !1;
            if (z === "Users") {
              const I = await Ze(`user?email=${$.email}`);
              I.objectId && (O = I.objectId);
            }
            const X = z === "Users" && O ? "PUT" : "POST", Q = z === "Comment" ? {
              ...$,
              // add default approved status to avoid unsetted status comments import issue
              status: $.status ?? "approved",
              // reset relationship fields
              rid: void 0,
              pid: void 0,
              user_id: void 0
            } : $;
            for (const I in Q)
              (Q[I] === null || Q[I] === void 0) && delete Q[I];
            const F = await Ze({
              url: `db?table=${z}${X === "PUT" ? `&objectId=${O}` : ""}`,
              method: X,
              body: Q
            });
            E[z][$.objectId] = F.objectId ?? O, w += 1, l([
              "importing {{importedLength}}/{{maxLength}}",
              { importedLength: w, maxLength: x }
            ]);
          }
      }
      l(["comment data index relationship reconstruction"]);
      const j = y.data.Comment, N = [];
      for (const z of j) {
        const M = {};
        [
          { tableName: "Comment", field: "pid" },
          { tableName: "Comment", field: "rid" },
          { tableName: "Users", field: "user_id" }
        ].forEach(({ tableName: $, field: O }) => {
          if (!z[O])
            return;
          const H = z[O], X = E[$][z[O]];
          H && X && H !== X && (M[O] = X);
        }), Object.keys(M).length !== 0 && N.push([M, { objectId: E.Comment[z.objectId] }]);
      }
      w = 0;
      for (const [z, M] of N)
        await Ze({
          url: `db?table=Comment&objectId=${M.objectId}`,
          method: "PUT",
          body: z
        }), w += 1, l([
          "index updating {{importedLength}}/{{maxLength}}",
          { importedLength: w, maxLength: N.length }
        ]);
      alert(c("import success")), location.reload();
    } catch (g) {
      throw console.log(g), alert(g.message), g;
    } finally {
      l(!1), d.target.value = null;
    }
  }, h = async () => {
    r(!0);
    try {
      const d = await Ze("db");
      R8(JSON.stringify(d, null, "	"), "waline.json", "application/javascript");
    } finally {
      r(!1);
    }
  };
  return /* @__PURE__ */ b.jsxs(b.Fragment, { children: [
    /* @__PURE__ */ b.jsx(gn, {}),
    /* @__PURE__ */ b.jsx("div", { className: "main", children: /* @__PURE__ */ b.jsxs("div", { className: "body container", children: [
      /* @__PURE__ */ b.jsx("div", { className: "typecho-page-title", children: /* @__PURE__ */ b.jsx("h2", { children: c("migration") }) }),
      /* @__PURE__ */ b.jsxs("div", { className: "row typecho-page-main", children: [
        /* @__PURE__ */ b.jsx("div", { className: "col-mb-12 col-tb-6", style: { textAlign: "center" }, children: /* @__PURE__ */ b.jsx(
          "button",
          {
            className: "btn",
            style: { height: 80, fontSize: 30, padding: "0 40px" },
            onClick: h,
            disabled: s,
            children: c(s ? "exporting" : "export")
          }
        ) }),
        /* @__PURE__ */ b.jsxs("div", { className: "col-mb-12 col-tb-6", style: { textAlign: "center" }, children: [
          /* @__PURE__ */ b.jsx(
            "button",
            {
              className: "btn error",
              style: { height: 80, fontSize: 30, padding: "0 40px" },
              onClick: p,
              disabled: i,
              children: Array.isArray(i) ? c(...i) : c("import")
            }
          ),
          /* @__PURE__ */ b.jsx(
            "input",
            {
              ref: f,
              onChange: m,
              type: "file",
              style: { display: "none" }
            }
          )
        ] })
      ] })
    ] }) })
  ] });
}
var T8 = Object.defineProperty, Is = Object.getOwnPropertySymbols, cg = Object.prototype.hasOwnProperty, fg = Object.prototype.propertyIsEnumerable, vp = (i, l, s) => l in i ? T8(i, l, { enumerable: !0, configurable: !0, writable: !0, value: s }) : i[l] = s, Pu = (i, l) => {
  for (var s in l || (l = {}))
    cg.call(l, s) && vp(i, s, l[s]);
  if (Is)
    for (var s of Is(l))
      fg.call(l, s) && vp(i, s, l[s]);
  return i;
}, Wu = (i, l) => {
  var s = {};
  for (var r in i)
    cg.call(i, r) && l.indexOf(r) < 0 && (s[r] = i[r]);
  if (i != null && Is)
    for (var r of Is(i))
      l.indexOf(r) < 0 && fg.call(i, r) && (s[r] = i[r]);
  return s;
};
var hn;
((i) => {
  const l = class ve {
    /*-- Constructor (low level) and fields --*/
    // Creates a new QR Code with the given version number,
    // error correction level, data codeword bytes, and mask number.
    // This is a low-level API that most users should not use directly.
    // A mid-level API is the encodeSegments() function.
    constructor(h, d, g, y) {
      if (this.version = h, this.errorCorrectionLevel = d, this.modules = [], this.isFunction = [], h < ve.MIN_VERSION || h > ve.MAX_VERSION)
        throw new RangeError("Version value out of range");
      if (y < -1 || y > 7)
        throw new RangeError("Mask value out of range");
      this.size = h * 4 + 17;
      let x = [];
      for (let E = 0; E < this.size; E++)
        x.push(!1);
      for (let E = 0; E < this.size; E++)
        this.modules.push(x.slice()), this.isFunction.push(x.slice());
      this.drawFunctionPatterns();
      const w = this.addEccAndInterleave(g);
      if (this.drawCodewords(w), y == -1) {
        let E = 1e9;
        for (let j = 0; j < 8; j++) {
          this.applyMask(j), this.drawFormatBits(j);
          const N = this.getPenaltyScore();
          N < E && (y = j, E = N), this.applyMask(j);
        }
      }
      c(0 <= y && y <= 7), this.mask = y, this.applyMask(y), this.drawFormatBits(y), this.isFunction = [];
    }
    /*-- Static factory functions (high level) --*/
    // Returns a QR Code representing the given Unicode text string at the given error correction level.
    // As a conservative upper bound, this function is guaranteed to succeed for strings that have 738 or fewer
    // Unicode code points (not UTF-16 code units) if the low error correction level is used. The smallest possible
    // QR Code version is automatically chosen for the output. The ECC level of the result may be higher than the
    // ecl argument if it can be done without increasing the version.
    static encodeText(h, d) {
      const g = i.QrSegment.makeSegments(h);
      return ve.encodeSegments(g, d);
    }
    // Returns a QR Code representing the given binary data at the given error correction level.
    // This function always encodes using the binary segment mode, not any text mode. The maximum number of
    // bytes allowed is 2953. The smallest possible QR Code version is automatically chosen for the output.
    // The ECC level of the result may be higher than the ecl argument if it can be done without increasing the version.
    static encodeBinary(h, d) {
      const g = i.QrSegment.makeBytes(h);
      return ve.encodeSegments([g], d);
    }
    /*-- Static factory functions (mid level) --*/
    // Returns a QR Code representing the given segments with the given encoding parameters.
    // The smallest possible QR Code version within the given range is automatically
    // chosen for the output. Iff boostEcl is true, then the ECC level of the result
    // may be higher than the ecl argument if it can be done without increasing the
    // version. The mask number is either between 0 to 7 (inclusive) to force that
    // mask, or -1 to automatically choose an appropriate mask (which may be slow).
    // This function allows the user to create a custom sequence of segments that switches
    // between modes (such as alphanumeric and byte) to encode text in less space.
    // This is a mid-level API; the high-level API is encodeText() and encodeBinary().
    static encodeSegments(h, d, g = 1, y = 40, x = -1, w = !0) {
      if (!(ve.MIN_VERSION <= g && g <= y && y <= ve.MAX_VERSION) || x < -1 || x > 7)
        throw new RangeError("Invalid value");
      let E, j;
      for (E = g; ; E++) {
        const $ = ve.getNumDataCodewords(E, d) * 8, O = p.getTotalBits(h, E);
        if (O <= $) {
          j = O;
          break;
        }
        if (E >= y)
          throw new RangeError("Data too long");
      }
      for (const $ of [ve.Ecc.MEDIUM, ve.Ecc.QUARTILE, ve.Ecc.HIGH])
        w && j <= ve.getNumDataCodewords(E, $) * 8 && (d = $);
      let N = [];
      for (const $ of h) {
        s($.mode.modeBits, 4, N), s($.numChars, $.mode.numCharCountBits(E), N);
        for (const O of $.getData())
          N.push(O);
      }
      c(N.length == j);
      const z = ve.getNumDataCodewords(E, d) * 8;
      c(N.length <= z), s(0, Math.min(4, z - N.length), N), s(0, (8 - N.length % 8) % 8, N), c(N.length % 8 == 0);
      for (let $ = 236; N.length < z; $ ^= 253)
        s($, 8, N);
      let M = [];
      for (; M.length * 8 < N.length; )
        M.push(0);
      return N.forEach(($, O) => M[O >>> 3] |= $ << 7 - (O & 7)), new ve(E, d, M, x);
    }
    /*-- Accessor methods --*/
    // Returns the color of the module (pixel) at the given coordinates, which is false
    // for light or true for dark. The top left corner has the coordinates (x=0, y=0).
    // If the given coordinates are out of bounds, then false (light) is returned.
    getModule(h, d) {
      return 0 <= h && h < this.size && 0 <= d && d < this.size && this.modules[d][h];
    }
    // Modified to expose modules for easy access
    getModules() {
      return this.modules;
    }
    /*-- Private helper methods for constructor: Drawing function modules --*/
    // Reads this object's version field, and draws and marks all function modules.
    drawFunctionPatterns() {
      for (let g = 0; g < this.size; g++)
        this.setFunctionModule(6, g, g % 2 == 0), this.setFunctionModule(g, 6, g % 2 == 0);
      this.drawFinderPattern(3, 3), this.drawFinderPattern(this.size - 4, 3), this.drawFinderPattern(3, this.size - 4);
      const h = this.getAlignmentPatternPositions(), d = h.length;
      for (let g = 0; g < d; g++)
        for (let y = 0; y < d; y++)
          g == 0 && y == 0 || g == 0 && y == d - 1 || g == d - 1 && y == 0 || this.drawAlignmentPattern(h[g], h[y]);
      this.drawFormatBits(0), this.drawVersion();
    }
    // Draws two copies of the format bits (with its own error correction code)
    // based on the given mask and this object's error correction level field.
    drawFormatBits(h) {
      const d = this.errorCorrectionLevel.formatBits << 3 | h;
      let g = d;
      for (let x = 0; x < 10; x++)
        g = g << 1 ^ (g >>> 9) * 1335;
      const y = (d << 10 | g) ^ 21522;
      c(y >>> 15 == 0);
      for (let x = 0; x <= 5; x++)
        this.setFunctionModule(8, x, r(y, x));
      this.setFunctionModule(8, 7, r(y, 6)), this.setFunctionModule(8, 8, r(y, 7)), this.setFunctionModule(7, 8, r(y, 8));
      for (let x = 9; x < 15; x++)
        this.setFunctionModule(14 - x, 8, r(y, x));
      for (let x = 0; x < 8; x++)
        this.setFunctionModule(this.size - 1 - x, 8, r(y, x));
      for (let x = 8; x < 15; x++)
        this.setFunctionModule(8, this.size - 15 + x, r(y, x));
      this.setFunctionModule(8, this.size - 8, !0);
    }
    // Draws two copies of the version bits (with its own error correction code),
    // based on this object's version field, iff 7 <= version <= 40.
    drawVersion() {
      if (this.version < 7)
        return;
      let h = this.version;
      for (let g = 0; g < 12; g++)
        h = h << 1 ^ (h >>> 11) * 7973;
      const d = this.version << 12 | h;
      c(d >>> 18 == 0);
      for (let g = 0; g < 18; g++) {
        const y = r(d, g), x = this.size - 11 + g % 3, w = Math.floor(g / 3);
        this.setFunctionModule(x, w, y), this.setFunctionModule(w, x, y);
      }
    }
    // Draws a 9*9 finder pattern including the border separator,
    // with the center module at (x, y). Modules can be out of bounds.
    drawFinderPattern(h, d) {
      for (let g = -4; g <= 4; g++)
        for (let y = -4; y <= 4; y++) {
          const x = Math.max(Math.abs(y), Math.abs(g)), w = h + y, E = d + g;
          0 <= w && w < this.size && 0 <= E && E < this.size && this.setFunctionModule(w, E, x != 2 && x != 4);
        }
    }
    // Draws a 5*5 alignment pattern, with the center module
    // at (x, y). All modules must be in bounds.
    drawAlignmentPattern(h, d) {
      for (let g = -2; g <= 2; g++)
        for (let y = -2; y <= 2; y++)
          this.setFunctionModule(h + y, d + g, Math.max(Math.abs(y), Math.abs(g)) != 1);
    }
    // Sets the color of a module and marks it as a function module.
    // Only used by the constructor. Coordinates must be in bounds.
    setFunctionModule(h, d, g) {
      this.modules[d][h] = g, this.isFunction[d][h] = !0;
    }
    /*-- Private helper methods for constructor: Codewords and masking --*/
    // Returns a new byte string representing the given data with the appropriate error correction
    // codewords appended to it, based on this object's version and error correction level.
    addEccAndInterleave(h) {
      const d = this.version, g = this.errorCorrectionLevel;
      if (h.length != ve.getNumDataCodewords(d, g))
        throw new RangeError("Invalid argument");
      const y = ve.NUM_ERROR_CORRECTION_BLOCKS[g.ordinal][d], x = ve.ECC_CODEWORDS_PER_BLOCK[g.ordinal][d], w = Math.floor(ve.getNumRawDataModules(d) / 8), E = y - w % y, j = Math.floor(w / y);
      let N = [];
      const z = ve.reedSolomonComputeDivisor(x);
      for (let $ = 0, O = 0; $ < y; $++) {
        let H = h.slice(O, O + j - x + ($ < E ? 0 : 1));
        O += H.length;
        const X = ve.reedSolomonComputeRemainder(H, z);
        $ < E && H.push(0), N.push(H.concat(X));
      }
      let M = [];
      for (let $ = 0; $ < N[0].length; $++)
        N.forEach((O, H) => {
          ($ != j - x || H >= E) && M.push(O[$]);
        });
      return c(M.length == w), M;
    }
    // Draws the given sequence of 8-bit codewords (data and error correction) onto the entire
    // data area of this QR Code. Function modules need to be marked off before this is called.
    drawCodewords(h) {
      if (h.length != Math.floor(ve.getNumRawDataModules(this.version) / 8))
        throw new RangeError("Invalid argument");
      let d = 0;
      for (let g = this.size - 1; g >= 1; g -= 2) {
        g == 6 && (g = 5);
        for (let y = 0; y < this.size; y++)
          for (let x = 0; x < 2; x++) {
            const w = g - x, j = (g + 1 & 2) == 0 ? this.size - 1 - y : y;
            !this.isFunction[j][w] && d < h.length * 8 && (this.modules[j][w] = r(h[d >>> 3], 7 - (d & 7)), d++);
          }
      }
      c(d == h.length * 8);
    }
    // XORs the codeword modules in this QR Code with the given mask pattern.
    // The function modules must be marked and the codeword bits must be drawn
    // before masking. Due to the arithmetic of XOR, calling applyMask() with
    // the same mask value a second time will undo the mask. A final well-formed
    // QR Code needs exactly one (not zero, two, etc.) mask applied.
    applyMask(h) {
      if (h < 0 || h > 7)
        throw new RangeError("Mask value out of range");
      for (let d = 0; d < this.size; d++)
        for (let g = 0; g < this.size; g++) {
          let y;
          switch (h) {
            case 0:
              y = (g + d) % 2 == 0;
              break;
            case 1:
              y = d % 2 == 0;
              break;
            case 2:
              y = g % 3 == 0;
              break;
            case 3:
              y = (g + d) % 3 == 0;
              break;
            case 4:
              y = (Math.floor(g / 3) + Math.floor(d / 2)) % 2 == 0;
              break;
            case 5:
              y = g * d % 2 + g * d % 3 == 0;
              break;
            case 6:
              y = (g * d % 2 + g * d % 3) % 2 == 0;
              break;
            case 7:
              y = ((g + d) % 2 + g * d % 3) % 2 == 0;
              break;
            default:
              throw new Error("Unreachable");
          }
          !this.isFunction[d][g] && y && (this.modules[d][g] = !this.modules[d][g]);
        }
    }
    // Calculates and returns the penalty score based on state of this QR Code's current modules.
    // This is used by the automatic mask choice algorithm to find the mask pattern that yields the lowest score.
    getPenaltyScore() {
      let h = 0;
      for (let x = 0; x < this.size; x++) {
        let w = !1, E = 0, j = [0, 0, 0, 0, 0, 0, 0];
        for (let N = 0; N < this.size; N++)
          this.modules[x][N] == w ? (E++, E == 5 ? h += ve.PENALTY_N1 : E > 5 && h++) : (this.finderPenaltyAddHistory(E, j), w || (h += this.finderPenaltyCountPatterns(j) * ve.PENALTY_N3), w = this.modules[x][N], E = 1);
        h += this.finderPenaltyTerminateAndCount(w, E, j) * ve.PENALTY_N3;
      }
      for (let x = 0; x < this.size; x++) {
        let w = !1, E = 0, j = [0, 0, 0, 0, 0, 0, 0];
        for (let N = 0; N < this.size; N++)
          this.modules[N][x] == w ? (E++, E == 5 ? h += ve.PENALTY_N1 : E > 5 && h++) : (this.finderPenaltyAddHistory(E, j), w || (h += this.finderPenaltyCountPatterns(j) * ve.PENALTY_N3), w = this.modules[N][x], E = 1);
        h += this.finderPenaltyTerminateAndCount(w, E, j) * ve.PENALTY_N3;
      }
      for (let x = 0; x < this.size - 1; x++)
        for (let w = 0; w < this.size - 1; w++) {
          const E = this.modules[x][w];
          E == this.modules[x][w + 1] && E == this.modules[x + 1][w] && E == this.modules[x + 1][w + 1] && (h += ve.PENALTY_N2);
        }
      let d = 0;
      for (const x of this.modules)
        d = x.reduce((w, E) => w + (E ? 1 : 0), d);
      const g = this.size * this.size, y = Math.ceil(Math.abs(d * 20 - g * 10) / g) - 1;
      return c(0 <= y && y <= 9), h += y * ve.PENALTY_N4, c(0 <= h && h <= 2568888), h;
    }
    /*-- Private helper functions --*/
    // Returns an ascending list of positions of alignment patterns for this version number.
    // Each position is in the range [0,177), and are used on both the x and y axes.
    // This could be implemented as lookup table of 40 variable-length lists of integers.
    getAlignmentPatternPositions() {
      if (this.version == 1)
        return [];
      {
        const h = Math.floor(this.version / 7) + 2, d = this.version == 32 ? 26 : Math.ceil((this.version * 4 + 4) / (h * 2 - 2)) * 2;
        let g = [6];
        for (let y = this.size - 7; g.length < h; y -= d)
          g.splice(1, 0, y);
        return g;
      }
    }
    // Returns the number of data bits that can be stored in a QR Code of the given version number, after
    // all function modules are excluded. This includes remainder bits, so it might not be a multiple of 8.
    // The result is in the range [208, 29648]. This could be implemented as a 40-entry lookup table.
    static getNumRawDataModules(h) {
      if (h < ve.MIN_VERSION || h > ve.MAX_VERSION)
        throw new RangeError("Version number out of range");
      let d = (16 * h + 128) * h + 64;
      if (h >= 2) {
        const g = Math.floor(h / 7) + 2;
        d -= (25 * g - 10) * g - 55, h >= 7 && (d -= 36);
      }
      return c(208 <= d && d <= 29648), d;
    }
    // Returns the number of 8-bit data (i.e. not error correction) codewords contained in any
    // QR Code of the given version number and error correction level, with remainder bits discarded.
    // This stateless pure function could be implemented as a (40*4)-cell lookup table.
    static getNumDataCodewords(h, d) {
      return Math.floor(ve.getNumRawDataModules(h) / 8) - ve.ECC_CODEWORDS_PER_BLOCK[d.ordinal][h] * ve.NUM_ERROR_CORRECTION_BLOCKS[d.ordinal][h];
    }
    // Returns a Reed-Solomon ECC generator polynomial for the given degree. This could be
    // implemented as a lookup table over all possible parameter values, instead of as an algorithm.
    static reedSolomonComputeDivisor(h) {
      if (h < 1 || h > 255)
        throw new RangeError("Degree out of range");
      let d = [];
      for (let y = 0; y < h - 1; y++)
        d.push(0);
      d.push(1);
      let g = 1;
      for (let y = 0; y < h; y++) {
        for (let x = 0; x < d.length; x++)
          d[x] = ve.reedSolomonMultiply(d[x], g), x + 1 < d.length && (d[x] ^= d[x + 1]);
        g = ve.reedSolomonMultiply(g, 2);
      }
      return d;
    }
    // Returns the Reed-Solomon error correction codeword for the given data and divisor polynomials.
    static reedSolomonComputeRemainder(h, d) {
      let g = d.map((y) => 0);
      for (const y of h) {
        const x = y ^ g.shift();
        g.push(0), d.forEach((w, E) => g[E] ^= ve.reedSolomonMultiply(w, x));
      }
      return g;
    }
    // Returns the product of the two given field elements modulo GF(2^8/0x11D). The arguments and result
    // are unsigned 8-bit integers. This could be implemented as a lookup table of 256*256 entries of uint8.
    static reedSolomonMultiply(h, d) {
      if (h >>> 8 || d >>> 8)
        throw new RangeError("Byte out of range");
      let g = 0;
      for (let y = 7; y >= 0; y--)
        g = g << 1 ^ (g >>> 7) * 285, g ^= (d >>> y & 1) * h;
      return c(g >>> 8 == 0), g;
    }
    // Can only be called immediately after a light run is added, and
    // returns either 0, 1, or 2. A helper function for getPenaltyScore().
    finderPenaltyCountPatterns(h) {
      const d = h[1];
      c(d <= this.size * 3);
      const g = d > 0 && h[2] == d && h[3] == d * 3 && h[4] == d && h[5] == d;
      return (g && h[0] >= d * 4 && h[6] >= d ? 1 : 0) + (g && h[6] >= d * 4 && h[0] >= d ? 1 : 0);
    }
    // Must be called at the end of a line (row or column) of modules. A helper function for getPenaltyScore().
    finderPenaltyTerminateAndCount(h, d, g) {
      return h && (this.finderPenaltyAddHistory(d, g), d = 0), d += this.size, this.finderPenaltyAddHistory(d, g), this.finderPenaltyCountPatterns(g);
    }
    // Pushes the given value to the front and drops the last value. A helper function for getPenaltyScore().
    finderPenaltyAddHistory(h, d) {
      d[0] == 0 && (h += this.size), d.pop(), d.unshift(h);
    }
  };
  l.MIN_VERSION = 1, l.MAX_VERSION = 40, l.PENALTY_N1 = 3, l.PENALTY_N2 = 3, l.PENALTY_N3 = 40, l.PENALTY_N4 = 10, l.ECC_CODEWORDS_PER_BLOCK = [
    // Version: (note that index 0 is for padding, and is set to an illegal value)
    //0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40    Error correction level
    [-1, 7, 10, 15, 20, 26, 18, 20, 24, 30, 18, 20, 24, 26, 30, 22, 24, 28, 30, 28, 28, 28, 28, 30, 30, 26, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
    // Low
    [-1, 10, 16, 26, 18, 24, 16, 18, 22, 22, 26, 30, 22, 22, 24, 24, 28, 28, 26, 26, 26, 26, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28],
    // Medium
    [-1, 13, 22, 18, 26, 18, 24, 18, 22, 20, 24, 28, 26, 24, 20, 30, 24, 28, 28, 26, 30, 28, 30, 30, 30, 30, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
    // Quartile
    [-1, 17, 28, 22, 16, 22, 28, 26, 26, 24, 28, 24, 28, 22, 24, 24, 30, 28, 28, 26, 28, 30, 24, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30]
    // High
  ], l.NUM_ERROR_CORRECTION_BLOCKS = [
    // Version: (note that index 0 is for padding, and is set to an illegal value)
    //0, 1, 2, 3, 4, 5, 6, 7, 8, 9,10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40    Error correction level
    [-1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 4, 4, 4, 4, 4, 6, 6, 6, 6, 7, 8, 8, 9, 9, 10, 12, 12, 12, 13, 14, 15, 16, 17, 18, 19, 19, 20, 21, 22, 24, 25],
    // Low
    [-1, 1, 1, 1, 2, 2, 4, 4, 4, 5, 5, 5, 8, 9, 9, 10, 10, 11, 13, 14, 16, 17, 17, 18, 20, 21, 23, 25, 26, 28, 29, 31, 33, 35, 37, 38, 40, 43, 45, 47, 49],
    // Medium
    [-1, 1, 1, 2, 2, 4, 4, 6, 6, 8, 8, 8, 10, 12, 16, 12, 17, 16, 18, 21, 20, 23, 23, 25, 27, 29, 34, 34, 35, 38, 40, 43, 45, 48, 51, 53, 56, 59, 62, 65, 68],
    // Quartile
    [-1, 1, 1, 2, 4, 4, 4, 5, 6, 8, 8, 11, 11, 16, 16, 18, 16, 19, 21, 25, 25, 25, 34, 30, 32, 35, 37, 40, 42, 45, 48, 51, 54, 57, 60, 63, 66, 70, 74, 77, 81]
    // High
  ], i.QrCode = l;
  function s(m, h, d) {
    if (h < 0 || h > 31 || m >>> h)
      throw new RangeError("Value out of range");
    for (let g = h - 1; g >= 0; g--)
      d.push(m >>> g & 1);
  }
  function r(m, h) {
    return (m >>> h & 1) != 0;
  }
  function c(m) {
    if (!m)
      throw new Error("Assertion error");
  }
  const f = class He {
    /*-- Constructor (low level) and fields --*/
    // Creates a new QR Code segment with the given attributes and data.
    // The character count (numChars) must agree with the mode and the bit buffer length,
    // but the constraint isn't checked. The given bit buffer is cloned and stored.
    constructor(h, d, g) {
      if (this.mode = h, this.numChars = d, this.bitData = g, d < 0)
        throw new RangeError("Invalid argument");
      this.bitData = g.slice();
    }
    /*-- Static factory functions (mid level) --*/
    // Returns a segment representing the given binary data encoded in
    // byte mode. All input byte arrays are acceptable. Any text string
    // can be converted to UTF-8 bytes and encoded as a byte mode segment.
    static makeBytes(h) {
      let d = [];
      for (const g of h)
        s(g, 8, d);
      return new He(He.Mode.BYTE, h.length, d);
    }
    // Returns a segment representing the given string of decimal digits encoded in numeric mode.
    static makeNumeric(h) {
      if (!He.isNumeric(h))
        throw new RangeError("String contains non-numeric characters");
      let d = [];
      for (let g = 0; g < h.length; ) {
        const y = Math.min(h.length - g, 3);
        s(parseInt(h.substring(g, g + y), 10), y * 3 + 1, d), g += y;
      }
      return new He(He.Mode.NUMERIC, h.length, d);
    }
    // Returns a segment representing the given text string encoded in alphanumeric mode.
    // The characters allowed are: 0 to 9, A to Z (uppercase only), space,
    // dollar, percent, asterisk, plus, hyphen, period, slash, colon.
    static makeAlphanumeric(h) {
      if (!He.isAlphanumeric(h))
        throw new RangeError("String contains unencodable characters in alphanumeric mode");
      let d = [], g;
      for (g = 0; g + 2 <= h.length; g += 2) {
        let y = He.ALPHANUMERIC_CHARSET.indexOf(h.charAt(g)) * 45;
        y += He.ALPHANUMERIC_CHARSET.indexOf(h.charAt(g + 1)), s(y, 11, d);
      }
      return g < h.length && s(He.ALPHANUMERIC_CHARSET.indexOf(h.charAt(g)), 6, d), new He(He.Mode.ALPHANUMERIC, h.length, d);
    }
    // Returns a new mutable list of zero or more segments to represent the given Unicode text string.
    // The result may use various segment modes and switch modes to optimize the length of the bit stream.
    static makeSegments(h) {
      return h == "" ? [] : He.isNumeric(h) ? [He.makeNumeric(h)] : He.isAlphanumeric(h) ? [He.makeAlphanumeric(h)] : [He.makeBytes(He.toUtf8ByteArray(h))];
    }
    // Returns a segment representing an Extended Channel Interpretation
    // (ECI) designator with the given assignment value.
    static makeEci(h) {
      let d = [];
      if (h < 0)
        throw new RangeError("ECI assignment value out of range");
      if (h < 128)
        s(h, 8, d);
      else if (h < 16384)
        s(2, 2, d), s(h, 14, d);
      else if (h < 1e6)
        s(6, 3, d), s(h, 21, d);
      else
        throw new RangeError("ECI assignment value out of range");
      return new He(He.Mode.ECI, 0, d);
    }
    // Tests whether the given string can be encoded as a segment in numeric mode.
    // A string is encodable iff each character is in the range 0 to 9.
    static isNumeric(h) {
      return He.NUMERIC_REGEX.test(h);
    }
    // Tests whether the given string can be encoded as a segment in alphanumeric mode.
    // A string is encodable iff each character is in the following set: 0 to 9, A to Z
    // (uppercase only), space, dollar, percent, asterisk, plus, hyphen, period, slash, colon.
    static isAlphanumeric(h) {
      return He.ALPHANUMERIC_REGEX.test(h);
    }
    /*-- Methods --*/
    // Returns a new copy of the data bits of this segment.
    getData() {
      return this.bitData.slice();
    }
    // (Package-private) Calculates and returns the number of bits needed to encode the given segments at
    // the given version. The result is infinity if a segment has too many characters to fit its length field.
    static getTotalBits(h, d) {
      let g = 0;
      for (const y of h) {
        const x = y.mode.numCharCountBits(d);
        if (y.numChars >= 1 << x)
          return 1 / 0;
        g += 4 + x + y.bitData.length;
      }
      return g;
    }
    // Returns a new array of bytes representing the given string encoded in UTF-8.
    static toUtf8ByteArray(h) {
      h = encodeURI(h);
      let d = [];
      for (let g = 0; g < h.length; g++)
        h.charAt(g) != "%" ? d.push(h.charCodeAt(g)) : (d.push(parseInt(h.substring(g + 1, g + 3), 16)), g += 2);
      return d;
    }
  };
  f.NUMERIC_REGEX = /^[0-9]*$/, f.ALPHANUMERIC_REGEX = /^[A-Z0-9 $%*+.\/:-]*$/, f.ALPHANUMERIC_CHARSET = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:";
  let p = f;
  i.QrSegment = f;
})(hn || (hn = {}));
((i) => {
  ((l) => {
    const s = class {
      // The QR Code can tolerate about 30% erroneous codewords
      /*-- Constructor and fields --*/
      constructor(c, f) {
        this.ordinal = c, this.formatBits = f;
      }
    };
    s.LOW = new s(0, 1), s.MEDIUM = new s(1, 0), s.QUARTILE = new s(2, 3), s.HIGH = new s(3, 2), l.Ecc = s;
  })(i.QrCode || (i.QrCode = {}));
})(hn || (hn = {}));
((i) => {
  ((l) => {
    const s = class {
      /*-- Constructor and fields --*/
      constructor(c, f) {
        this.modeBits = c, this.numBitsCharCount = f;
      }
      /*-- Method --*/
      // (Package-private) Returns the bit width of the character count field for a segment in
      // this mode in a QR Code at the given version number. The result is in the range [0, 16].
      numCharCountBits(c) {
        return this.numBitsCharCount[Math.floor((c + 7) / 17)];
      }
    };
    s.NUMERIC = new s(1, [10, 12, 14]), s.ALPHANUMERIC = new s(2, [9, 11, 13]), s.BYTE = new s(4, [8, 16, 16]), s.KANJI = new s(8, [8, 10, 12]), s.ECI = new s(7, [0, 0, 0]), l.Mode = s;
  })(i.QrSegment || (i.QrSegment = {}));
})(hn || (hn = {}));
var ll = hn;
var O8 = {
  L: ll.QrCode.Ecc.LOW,
  M: ll.QrCode.Ecc.MEDIUM,
  Q: ll.QrCode.Ecc.QUARTILE,
  H: ll.QrCode.Ecc.HIGH
}, dg = 128, hg = "L", mg = "#FFFFFF", pg = "#000000", gg = !1, yg = 1, z8 = 4, L8 = 0, M8 = 0.1;
function vg(i, l = 0) {
  const s = [];
  return i.forEach(function(r, c) {
    let f = null;
    r.forEach(function(p, m) {
      if (!p && f !== null) {
        s.push(
          `M${f + l} ${c + l}h${m - f}v1H${f + l}z`
        ), f = null;
        return;
      }
      if (m === r.length - 1) {
        if (!p)
          return;
        f === null ? s.push(`M${m + l},${c + l} h1v1H${m + l}z`) : s.push(
          `M${f + l},${c + l} h${m + 1 - f}v1H${f + l}z`
        );
        return;
      }
      p && f === null && (f = m);
    });
  }), s.join("");
}
function bg(i, l) {
  return i.slice().map((s, r) => r < l.y || r >= l.y + l.h ? s : s.map((c, f) => f < l.x || f >= l.x + l.w ? c : !1));
}
function _8(i, l, s, r) {
  if (r == null)
    return null;
  const c = i.length + s * 2, f = Math.floor(l * M8), p = c / l, m = (r.width || f) * p, h = (r.height || f) * p, d = r.x == null ? i.length / 2 - m / 2 : r.x * p, g = r.y == null ? i.length / 2 - h / 2 : r.y * p, y = r.opacity == null ? 1 : r.opacity;
  let x = null;
  if (r.excavate) {
    let E = Math.floor(d), j = Math.floor(g), N = Math.ceil(m + d - E), z = Math.ceil(h + g - j);
    x = { x: E, y: j, w: N, h: z };
  }
  const w = r.crossOrigin;
  return { x: d, y: g, h, w: m, excavation: x, opacity: y, crossOrigin: w };
}
function D8(i, l) {
  return l != null ? Math.max(Math.floor(l), 0) : i ? z8 : L8;
}
function xg({
  value: i,
  level: l,
  minVersion: s,
  includeMargin: r,
  marginSize: c,
  imageSettings: f,
  size: p,
  boostLevel: m
}) {
  let h = Ue.useMemo(() => {
    const E = (Array.isArray(i) ? i : [i]).reduce((j, N) => (j.push(...ll.QrSegment.makeSegments(N)), j), []);
    return ll.QrCode.encodeSegments(
      E,
      O8[l],
      s,
      void 0,
      void 0,
      m
    );
  }, [i, l, s, m]);
  const { cells: d, margin: g, numCells: y, calculatedImageSettings: x } = Ue.useMemo(() => {
    let w = h.getModules();
    const E = D8(r, c), j = w.length + E * 2, N = _8(
      w,
      p,
      E,
      f
    );
    return {
      cells: w,
      margin: E,
      numCells: j,
      calculatedImageSettings: N
    };
  }, [h, p, f, r, c]);
  return {
    qrcode: h,
    margin: g,
    cells: d,
    numCells: y,
    calculatedImageSettings: x
  };
}
var U8 = (function() {
  try {
    new Path2D().addPath(new Path2D());
  } catch {
    return !1;
  }
  return !0;
})(), $8 = Ue.forwardRef(
  function(l, s) {
    const r = l, {
      value: c,
      size: f = dg,
      level: p = hg,
      bgColor: m = mg,
      fgColor: h = pg,
      includeMargin: d = gg,
      minVersion: g = yg,
      boostLevel: y,
      marginSize: x,
      imageSettings: w
    } = r, j = Wu(r, [
      "value",
      "size",
      "level",
      "bgColor",
      "fgColor",
      "includeMargin",
      "minVersion",
      "boostLevel",
      "marginSize",
      "imageSettings"
    ]), { style: N } = j, z = Wu(j, ["style"]), M = w?.src, $ = Ue.useRef(null), O = Ue.useRef(null), H = Ue.useCallback(
      (ue) => {
        $.current = ue, typeof s == "function" ? s(ue) : s && (s.current = ue);
      },
      [s]
    ), [X, Q] = Ue.useState(!1), { margin: F, cells: I, numCells: P, calculatedImageSettings: te } = xg({
      value: c,
      level: p,
      minVersion: g,
      boostLevel: y,
      includeMargin: d,
      marginSize: x,
      imageSettings: w,
      size: f
    });
    Ue.useEffect(() => {
      if ($.current != null) {
        const ue = $.current, we = ue.getContext("2d");
        if (!we)
          return;
        let k = I;
        const K = O.current, J = te != null && K !== null && K.complete && K.naturalHeight !== 0 && K.naturalWidth !== 0;
        J && te.excavation != null && (k = bg(
          I,
          te.excavation
        ));
        const ce = window.devicePixelRatio || 1;
        ue.height = ue.width = f * ce;
        const le = f / P * ce;
        we.scale(le, le), we.fillStyle = m, we.fillRect(0, 0, P, P), we.fillStyle = h, U8 ? we.fill(new Path2D(vg(k, F))) : I.forEach(function(R, V) {
          R.forEach(function(Z, W) {
            Z && we.fillRect(W + F, V + F, 1, 1);
          });
        }), te && (we.globalAlpha = te.opacity), J && we.drawImage(
          K,
          te.x + F,
          te.y + F,
          te.w,
          te.h
        );
      }
    }), Ue.useEffect(() => {
      Q(!1);
    }, [M]);
    const se = Pu({ height: f, width: f }, N);
    let re = null;
    return M != null && (re = /* @__PURE__ */ Ue.createElement(
      "img",
      {
        src: M,
        key: M,
        style: { display: "none" },
        onLoad: () => {
          Q(!0);
        },
        ref: O,
        crossOrigin: te?.crossOrigin
      }
    )), /* @__PURE__ */ Ue.createElement(Ue.Fragment, null, /* @__PURE__ */ Ue.createElement(
      "canvas",
      Pu({
        style: se,
        height: f,
        width: f,
        ref: H,
        role: "img"
      }, z)
    ), re);
  }
);
$8.displayName = "QRCodeCanvas";
var ec = Ue.forwardRef(
  function(l, s) {
    const r = l, {
      value: c,
      size: f = dg,
      level: p = hg,
      bgColor: m = mg,
      fgColor: h = pg,
      includeMargin: d = gg,
      minVersion: g = yg,
      boostLevel: y,
      title: x,
      marginSize: w,
      imageSettings: E
    } = r, j = Wu(r, [
      "value",
      "size",
      "level",
      "bgColor",
      "fgColor",
      "includeMargin",
      "minVersion",
      "boostLevel",
      "title",
      "marginSize",
      "imageSettings"
    ]), { margin: N, cells: z, numCells: M, calculatedImageSettings: $ } = xg({
      value: c,
      level: p,
      minVersion: g,
      boostLevel: y,
      includeMargin: d,
      marginSize: w,
      imageSettings: E,
      size: f
    });
    let O = z, H = null;
    E != null && $ != null && ($.excavation != null && (O = bg(
      z,
      $.excavation
    )), H = /* @__PURE__ */ Ue.createElement(
      "image",
      {
        href: E.src,
        height: $.h,
        width: $.w,
        x: $.x + N,
        y: $.y + N,
        preserveAspectRatio: "none",
        opacity: $.opacity,
        crossOrigin: $.crossOrigin
      }
    ));
    const X = vg(O, N);
    return /* @__PURE__ */ Ue.createElement(
      "svg",
      Pu({
        height: f,
        width: f,
        viewBox: `0 0 ${M} ${M}`,
        ref: s,
        role: "img"
      }, j),
      !!x && /* @__PURE__ */ Ue.createElement("title", null, x),
      /* @__PURE__ */ Ue.createElement(
        "path",
        {
          fill: m,
          d: `M0,0 h${M}v${M}H0z`,
          shapeRendering: "crispEdges"
        }
      ),
      /* @__PURE__ */ Ue.createElement("path", { fill: h, d: X, shapeRendering: "crispEdges" }),
      H
    );
  }
);
ec.displayName = "QRCodeSVG";
function k8() {
  const { t: i } = ya(), [l, s] = A.useState(1), [r, c] = A.useState(!1), [f, p] = A.useState({ otpauth_url: "", secret: "" }), m = pa((g) => g.user);
  A.useEffect(() => {
    rg().then(p);
  }, []);
  const h = async (g) => {
    g.preventDefault();
    const y = g.target.code.value;
    if (!y || y.length < 6 || y.length > 6) {
      alert(i("minimum 6 characters required"));
      return;
    }
    try {
      c(!0), await f8({ code: y, secret: f.secret });
    } catch (x) {
      alert(x);
    } finally {
      c(!1), location.reload();
    }
  }, d = async () => {
    confirm(i("close 2fa confirm")) && (c(!0), await ri({ "2fa": "" }).catch((g) => {
      alert(g), console.error(g);
    }), c(!1), location.reload());
  };
  return /* @__PURE__ */ b.jsxs("section", { id: "two-factor-auth", children: [
    /* @__PURE__ */ b.jsx("h3", { children: i("two factor auth") }),
    m["2fa"] ? /* @__PURE__ */ b.jsxs("div", { children: [
      /* @__PURE__ */ b.jsx("p", { children: i("enable 2fa") }),
      /* @__PURE__ */ b.jsx(ec, { value: f.otpauth_url, size: 256 }),
      /* @__PURE__ */ b.jsx("br", {}),
      /* @__PURE__ */ b.jsx("br", {}),
      /* @__PURE__ */ b.jsx("button", { className: "btn primary", type: "submit", onClick: d, disabled: r, children: i("disable 2fa") })
    ] }) : null,
    !m["2fa"] && l === 1 && /* @__PURE__ */ b.jsxs("div", { children: [
      /* @__PURE__ */ b.jsx("p", { children: i("2fa description 1") }),
      /* @__PURE__ */ b.jsx("p", { children: i("2fa description 2") }),
      /* @__PURE__ */ b.jsx("button", { className: "btn primary", onClick: () => s(2), children: i("next step") })
    ] }),
    !m["2fa"] && l === 2 && /* @__PURE__ */ b.jsxs("div", { children: [
      /* @__PURE__ */ b.jsx("h4", { children: i("download 2fa app") }),
      /* @__PURE__ */ b.jsxs("ul", { className: "step2-apps", children: [
        /* @__PURE__ */ b.jsxs("li", { children: [
          "For Android, iOS:",
          /* @__PURE__ */ b.jsxs("a", { href: "https://support.google.com/accounts/answer/1066447?hl=en", children: [
            " ",
            "Google Authenticator"
          ] })
        ] }),
        /* @__PURE__ */ b.jsxs("li", { children: [
          "For Android and iOS:",
          /* @__PURE__ */ b.jsx("a", { href: "http://guide.duosecurity.com/third-party-accounts", children: " Duo Mobile" })
        ] }),
        /* @__PURE__ */ b.jsxs("li", { children: [
          "For Windows Phone:",
          /* @__PURE__ */ b.jsxs("a", { href: "https://www.microsoft.com/en-US/store/apps/Authenticator/9WZDNCRFJ3RJ", children: [
            " ",
            "Authenticator"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ b.jsx("button", { className: "btn primary", type: "submit", onClick: () => s(3), children: i("next step") })
    ] }),
    !m["2fa"] && l === 3 && /* @__PURE__ */ b.jsxs("div", { children: [
      /* @__PURE__ */ b.jsx("p", { children: i("open app and scan qrcode") }),
      /* @__PURE__ */ b.jsx(ec, { value: f.otpauth_url, size: 256 }),
      /* @__PURE__ */ b.jsxs("form", { method: "post", onSubmit: h, children: [
        /* @__PURE__ */ b.jsx("ul", { className: "typecho-option", children: /* @__PURE__ */ b.jsxs("li", { children: [
          /* @__PURE__ */ b.jsx("label", { className: "typecho-label", htmlFor: "code-0-1", children: i("input 2fa code") }),
          /* @__PURE__ */ b.jsx("input", { id: "code-0-1", name: "code", type: "text", className: "text" }),
          /* @__PURE__ */ b.jsx("p", { className: "description" })
        ] }) }),
        /* @__PURE__ */ b.jsx("ul", { className: "typecho-option typecho-option-submit", children: /* @__PURE__ */ b.jsx("li", { children: /* @__PURE__ */ b.jsx("button", { type: "submit", className: "btn primary", disabled: r, children: i("enable 2fa") }) }) })
      ] })
    ] })
  ] });
}
function B8() {
  const [i, l] = A.useState(!1), [s, r] = A.useState(!1), c = hi(), f = pa((j) => j.user), { t: p } = ya();
  A.useEffect(() => {
    const N = new URLSearchParams(window.location.search).get("error");
    if (N) {
      alert("Error: " + N);
      const z = window.location.origin + window.location.pathname;
      window.history.replaceState({}, document.title, z);
    }
  }, []);
  const m = async (j) => {
    j.preventDefault();
    const N = j.target.screenName.value, z = j.target.url.value, M = j.target.label.value, $ = j.target.email.value;
    r(!0);
    try {
      await c.user.updateProfile({ display_name: N, url: z, label: M, email: $ });
    } catch (O) {
      alert(O);
    } finally {
      r(!1);
    }
  }, h = async (j) => {
    j.preventDefault();
    const N = j.target.password.value, z = j.target.confirm.value;
    if (!N || !z) {
      alert(p("please input password"));
      return;
    }
    if (N !== z) {
      alert(p("passwords don't match"));
      return;
    }
    l(!0), await ri({ password: N }), l(!1);
  }, d = async (j) => {
    await ri({ [j]: "" }), location.reload();
  }, g = async (j) => {
    j.preventDefault();
    const N = prompt(p("please input avatar url"));
    N && (await ri({ avatar: N }), location.reload());
  };
  let y = window.serverURL;
  if (!y) {
    const j = location.pathname.match(/(.*?\/)ui/);
    y = j ? j[1] : "/";
  }
  const x = new URLSearchParams(location.search);
  let w = window.TOKEN ?? sessionStorage.getItem("TOKEN") ?? x.get("token");
  w ??= localStorage.getItem("TOKEN");
  const E = Array.isArray(window.oauthServices) ? window.oauthServices.map(({ name: j }) => j) : ["oidc", "qq", "weibo", "github", "twitter", "facebook", "huawei"];
  return /* @__PURE__ */ b.jsxs(b.Fragment, { children: [
    /* @__PURE__ */ b.jsx(gn, {}),
    /* @__PURE__ */ b.jsx("div", { className: "main", children: /* @__PURE__ */ b.jsxs("div", { className: "body container", children: [
      /* @__PURE__ */ b.jsx("div", { className: "typecho-page-title", children: /* @__PURE__ */ b.jsx("h2", { children: p("setting") }) }),
      /* @__PURE__ */ b.jsxs("div", { className: "row typecho-page-main", children: [
        /* @__PURE__ */ b.jsxs("div", { className: "col-mb-12 col-tb-3", children: [
          /* @__PURE__ */ b.jsx("p", { children: /* @__PURE__ */ b.jsx(
            "a",
            {
              title: p("change avatar"),
              target: "_blank",
              rel: "noreferrer",
              onClick: g,
              children: f && f.avatar && /* @__PURE__ */ b.jsx("img", { className: "profile-avatar", src: f.avatar, alt: p("avatar") })
            }
          ) }),
          /* @__PURE__ */ b.jsx("h2", { children: f.display_name }),
          /* @__PURE__ */ b.jsx("p", { children: f.email.replace(/.*@(.*)-uuid\.com$/, "通过 $1 账号注册") })
        ] }),
        /* @__PURE__ */ b.jsxs("div", { className: "col-mb-12 col-tb-6 col-tb-offset-1 typecho-content-panel", role: "form", children: [
          /* @__PURE__ */ b.jsxs("section", { children: [
            /* @__PURE__ */ b.jsx("h3", { children: p("profile") }),
            /* @__PURE__ */ b.jsxs("form", { method: "post", onSubmit: m, children: [
              /* @__PURE__ */ b.jsx("ul", { className: "typecho-option", children: /* @__PURE__ */ b.jsxs("li", { children: [
                /* @__PURE__ */ b.jsx("label", { className: "typecho-label", htmlFor: "screenName-0-1", children: p("nickname") }),
                /* @__PURE__ */ b.jsx(
                  "input",
                  {
                    id: "screenName-0-1",
                    name: "screenName",
                    type: "text",
                    className: "text",
                    defaultValue: f.display_name
                  }
                ),
                /* @__PURE__ */ b.jsx("p", { className: "description" })
              ] }) }),
              /* @__PURE__ */ b.jsx("ul", { className: "typecho-option", children: /* @__PURE__ */ b.jsxs("li", { children: [
                /* @__PURE__ */ b.jsx("label", { className: "typecho-label", htmlFor: "email-0-2", children: p("email") }),
                /* @__PURE__ */ b.jsx(
                  "input",
                  {
                    id: "email-0-2",
                    name: "email",
                    type: "text",
                    className: "text",
                    defaultValue: f.email.replace(/.*@(.*)-uuid\.com$/, "")
                  }
                ),
                /* @__PURE__ */ b.jsx("p", { className: "description" })
              ] }) }),
              /* @__PURE__ */ b.jsx("ul", { className: "typecho-option", children: /* @__PURE__ */ b.jsxs("li", { children: [
                /* @__PURE__ */ b.jsx("label", { className: "typecho-label", htmlFor: "url-0-3", children: p("homepage") }),
                /* @__PURE__ */ b.jsx(
                  "input",
                  {
                    id: "url-0-3",
                    name: "url",
                    type: "text",
                    className: "text",
                    defaultValue: f.url
                  }
                ),
                /* @__PURE__ */ b.jsx("p", { className: "description", children: /* @__PURE__ */ b.jsx(
                  Qt,
                  {
                    i18nKey: "homepage tips",
                    defaults: "Current users' homepage. It must be start with <code>http://</code> or <code>https://</code>.",
                    components: { code: /* @__PURE__ */ b.jsx("code", {}) }
                  }
                ) })
              ] }) }),
              /* @__PURE__ */ b.jsx("ul", { className: "typecho-option", children: /* @__PURE__ */ b.jsxs("li", { children: [
                /* @__PURE__ */ b.jsx("label", { className: "typecho-label", htmlFor: "url-0-2", children: p("exclusive label") }),
                /* @__PURE__ */ b.jsx(
                  "input",
                  {
                    id: "url-0-2",
                    name: "label",
                    type: "text",
                    className: "text",
                    defaultValue: f.label
                  }
                ),
                /* @__PURE__ */ b.jsx("p", { className: "description" })
              ] }) }),
              /* @__PURE__ */ b.jsx("ul", { className: "typecho-option typecho-option-submit", children: /* @__PURE__ */ b.jsx("li", { children: /* @__PURE__ */ b.jsx("button", { type: "submit", className: "btn primary", disabled: s, children: p("update my profile") }) }) })
            ] })
          ] }),
          /* @__PURE__ */ b.jsx("br", {}),
          /* @__PURE__ */ b.jsxs("section", { id: "social-account", children: [
            /* @__PURE__ */ b.jsx("h3", { children: p("connect to social account") }),
            /* @__PURE__ */ b.jsx("div", { className: "account-list", children: E.map((j) => /* @__PURE__ */ b.jsxs(
              "div",
              {
                className: ci("account-item", j, {
                  bind: f[j]
                }),
                children: [
                  /* @__PURE__ */ b.jsx(
                    "a",
                    {
                      href: f[j] ? j === "oidc" ? "" : `https://${j}.com/${f[j]}` : `${y}oauth?type=${j}&state=${w}`,
                      target: f[j] ? "_blank" : "_self",
                      rel: "noreferrer",
                      children: Ue.createElement(uc[j])
                    }
                  ),
                  /* @__PURE__ */ b.jsx("div", { className: "account-unbind", onClick: () => d(j), children: /* @__PURE__ */ b.jsx(
                    "svg",
                    {
                      className: "close-icon",
                      viewBox: "0 0 1024 1024",
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "14",
                      height: "14",
                      children: /* @__PURE__ */ b.jsx("path", { d: "m568.569 512 170.267-170.267c15.556-15.556 15.556-41.012 0-56.569s-41.012-15.556-56.569 0L512 455.431 341.733 285.165c-15.556-15.556-41.012-15.556-56.569 0s-15.556 41.012 0 56.569L455.431 512 285.165 682.267c-15.556 15.556-15.556 41.012 0 56.569 15.556 15.556 41.012 15.556 56.569 0L512 568.569l170.267 170.267c15.556 15.556 41.012 15.556 56.569 0 15.556-15.556 15.556-41.012 0-56.569L568.569 512z" })
                    }
                  ) })
                ]
              },
              j
            )) })
          ] }),
          /* @__PURE__ */ b.jsx("br", {}),
          /* @__PURE__ */ b.jsxs("section", { id: "change-password", children: [
            /* @__PURE__ */ b.jsx("h3", { children: p("change password") }),
            /* @__PURE__ */ b.jsxs("form", { method: "post", onSubmit: h, children: [
              /* @__PURE__ */ b.jsx("ul", { className: "typecho-option", children: /* @__PURE__ */ b.jsxs("li", { children: [
                /* @__PURE__ */ b.jsx("label", { className: "typecho-label", htmlFor: "password-0-11", children: p("password") }),
                /* @__PURE__ */ b.jsx(
                  "input",
                  {
                    id: "password-0-11",
                    name: "password",
                    type: "password",
                    className: "w-60",
                    autoComplete: "new-password"
                  }
                ),
                /* @__PURE__ */ b.jsx("p", { className: "description", children: /* @__PURE__ */ b.jsx(Qt, { i18nKey: "password tips" }) })
              ] }) }),
              /* @__PURE__ */ b.jsx("ul", { className: "typecho-option", children: /* @__PURE__ */ b.jsxs("li", { children: [
                /* @__PURE__ */ b.jsx("label", { className: "typecho-label", htmlFor: "confirm-0-12", children: p("password again") }),
                /* @__PURE__ */ b.jsx(
                  "input",
                  {
                    id: "confirm-0-12",
                    name: "confirm",
                    type: "password",
                    className: "w-60",
                    autoComplete: "new-password"
                  }
                ),
                /* @__PURE__ */ b.jsx("p", { className: "description", children: /* @__PURE__ */ b.jsx(Qt, { i18nKey: "password again tips" }) })
              ] }) }),
              /* @__PURE__ */ b.jsx("ul", { className: "typecho-option typecho-option-submit", children: /* @__PURE__ */ b.jsx("li", { children: /* @__PURE__ */ b.jsx("button", { type: "submit", className: "btn primary", disabled: i, children: p("update password") }) }) })
            ] })
          ] }),
          /* @__PURE__ */ b.jsx("br", {}),
          /* @__PURE__ */ b.jsx(k8, {}),
          /* @__PURE__ */ b.jsx("br", {})
        ] })
      ] })
    ] }) })
  ] });
}
function H8() {
  const { t: i } = ya(), l = hi(), s = gi(), r = pa((g) => g.user), [c, f] = A.useState(!1), [p, m] = A.useState(!1), h = sg({
    sitekey: window.turnstileKey ?? window.recaptchaV3Key,
    hideDefaultBadge: !0
  });
  A.useEffect(() => {
    r && r.objectId && s("/ui", { replace: !0 });
  }, [s]);
  const d = async (g) => {
    g.preventDefault(), f(!1);
    const y = g.target.nick.value;
    if (!y || y.length < 2)
      return f(i("nickname illegal"));
    const x = g.target.email.value;
    if (!x)
      return f(i("please input email"));
    const w = g.target.link.value, E = g.target.password.value, j = g.target["password-again"].value;
    if (!E || !j || j !== E)
      return f(i("passwords don't match"));
    try {
      m(!0);
      const N = await h("login"), z = await l.user.register({
        display_name: y,
        email: x,
        url: w,
        password: E,
        recaptchaV3: window.recaptchaV3Key ? N : void 0,
        turnstile: window.turnstileKey ? N : void 0
      });
      z && z.verify && alert(i("register success! please go to your mailbox to verify it!")), s("/ui/login");
    } catch (N) {
      f(N.message);
    } finally {
      m(!1);
    }
  };
  return /* @__PURE__ */ b.jsxs(b.Fragment, { children: [
    /* @__PURE__ */ b.jsx(gn, {}),
    /* @__PURE__ */ b.jsx(
      "div",
      {
        className: "message popup notice",
        style: {
          position: "fixed",
          top: 0,
          display: c ? "block" : "none"
        },
        children: /* @__PURE__ */ b.jsx("ul", { children: c ? /* @__PURE__ */ b.jsx("li", { children: c }) : null })
      }
    ),
    /* @__PURE__ */ b.jsx("div", { className: "typecho-login-wrap", children: /* @__PURE__ */ b.jsxs("div", { className: "typecho-login", children: [
      /* @__PURE__ */ b.jsxs("form", { method: "post", name: "login", role: "form", onSubmit: d, children: [
        /* @__PURE__ */ b.jsxs("p", { children: [
          /* @__PURE__ */ b.jsx("label", { htmlFor: "nick", className: "sr-only", children: i("nickname") }),
          /* @__PURE__ */ b.jsx(
            "input",
            {
              type: "text",
              id: "nick",
              name: "nick",
              placeholder: i("nickname"),
              className: "text-l w-100"
            }
          )
        ] }),
        /* @__PURE__ */ b.jsxs("p", { children: [
          /* @__PURE__ */ b.jsx("label", { htmlFor: "email", className: "sr-only", children: i("email") }),
          /* @__PURE__ */ b.jsx(
            "input",
            {
              type: "text",
              id: "email",
              name: "email",
              placeholder: i("email"),
              className: "text-l w-100"
            }
          )
        ] }),
        /* @__PURE__ */ b.jsxs("p", { children: [
          /* @__PURE__ */ b.jsx("label", { htmlFor: "link", className: "sr-only", children: i("website") }),
          /* @__PURE__ */ b.jsx(
            "input",
            {
              type: "text",
              id: "link",
              name: "link",
              placeholder: i("website"),
              className: "text-l w-100"
            }
          )
        ] }),
        /* @__PURE__ */ b.jsxs("p", { children: [
          /* @__PURE__ */ b.jsx("label", { htmlFor: "password", className: "sr-only", children: i("password") }),
          /* @__PURE__ */ b.jsx(
            "input",
            {
              type: "password",
              id: "password",
              name: "password",
              className: "text-l w-100",
              placeholder: i("password")
            }
          )
        ] }),
        /* @__PURE__ */ b.jsxs("p", { children: [
          /* @__PURE__ */ b.jsx("label", { htmlFor: "password-again", className: "sr-only", children: i("password again") }),
          /* @__PURE__ */ b.jsx(
            "input",
            {
              type: "password",
              id: "password-again",
              name: "password-again",
              className: "text-l w-100",
              placeholder: i("password again")
            }
          )
        ] }),
        /* @__PURE__ */ b.jsx("p", { className: "captcha-container" }),
        /* @__PURE__ */ b.jsx("p", { className: "submit", children: /* @__PURE__ */ b.jsx("button", { type: "submit", disabled: p, className: "btn btn-l w-100 primary", children: i("register") }) })
      ] }),
      /* @__PURE__ */ b.jsxs("p", { className: "more-link", children: [
        /* @__PURE__ */ b.jsx(pt, { to: "/ui", children: i("back to home") }),
        " •",
        " ",
        /* @__PURE__ */ b.jsx(pt, { to: "/ui/login", children: i("register.login") })
      ] })
    ] }) })
  ] });
}
function q8() {
  const i = pa((m) => m.user), { t: l } = ya(), [s, r] = A.useState({
    page: 1,
    totalPages: 0,
    spamCount: 0,
    waitingCount: 0,
    data: []
  });
  A.useEffect(() => {
    d8({ page: s.page }).then((m) => {
      r({ ...s, ...m });
    });
  }, [s.page]);
  const c = (m) => [
    {
      key: "administrator",
      name: l("set administrator"),
      show: m.type === "guest",
      async action(h) {
        h.preventDefault(), await Hu({
          id: m.objectId,
          type: "administrator"
        }), m.type = "administrator", r({ ...s });
      }
    },
    {
      key: "guest",
      name: l("set guest"),
      show: m.type === "administrator",
      async action(h) {
        if (h.preventDefault(), m.objectId === i.objectId) {
          alert(l("You can't set yourself to be guest!"));
          return;
        }
        await Hu({
          id: m.objectId,
          type: "guest"
        }), m.type = "guest", r({ ...s });
      }
    },
    {
      key: "label",
      name: l("set label"),
      show: !0,
      async action(h) {
        h.preventDefault();
        const d = prompt(l("please enter an exclusive label"));
        await Hu({
          id: m.objectId,
          label: d
        }), m.label = d, r({ ...s });
      }
    },
    {
      key: "delete",
      name: l("delete"),
      show: m.objectId !== i.objectId,
      async action(h) {
        h.preventDefault(), confirm(l("delete user confirm")) && (await h8({
          id: m.objectId
        }), r({
          ...s,
          data: s.data.filter(({ objectId: d }) => d !== m.objectId)
        }));
      }
    }
  ].filter(({ show: h }) => h), f = (m) => m.startsWith("verify") ? l("verify") : l(m), p = Array.isArray(window.oauthServices) ? window.oauthServices.map(({ name: m }) => m) : ["oidc", "qq", "weibo", "github", "twitter", "facebook", "huawei", "steam", "google"];
  return /* @__PURE__ */ b.jsxs(b.Fragment, { children: [
    /* @__PURE__ */ b.jsx(gn, {}),
    /* @__PURE__ */ b.jsx("div", { className: "main", children: /* @__PURE__ */ b.jsxs("div", { className: "body container", children: [
      /* @__PURE__ */ b.jsx("div", { className: "typecho-page-title", children: /* @__PURE__ */ b.jsx("h2", { children: l("manage users") }) }),
      /* @__PURE__ */ b.jsx("div", { className: "row typecho-page-main", role: "main", children: /* @__PURE__ */ b.jsxs("div", { className: "col-mb-12 typecho-list", children: [
        /* @__PURE__ */ b.jsx("form", { method: "post", name: "manage_comments", className: "operate-form", children: /* @__PURE__ */ b.jsx("div", { className: "typecho-table-wrap", children: /* @__PURE__ */ b.jsxs("table", { className: "typecho-list-table", children: [
          /* @__PURE__ */ b.jsxs("colgroup", { children: [
            /* @__PURE__ */ b.jsx("col", { width: "6%" }),
            /* @__PURE__ */ b.jsx("col", { width: "15%" }),
            /* @__PURE__ */ b.jsx("col", { width: "20%" }),
            /* @__PURE__ */ b.jsx("col", { width: "15%" }),
            /* @__PURE__ */ b.jsx("col", { width: "20%" })
          ] }),
          /* @__PURE__ */ b.jsx("thead", { children: /* @__PURE__ */ b.jsxs("tr", { children: [
            /* @__PURE__ */ b.jsx("th", { children: " " }),
            /* @__PURE__ */ b.jsx("th", { children: l("nickname") }),
            /* @__PURE__ */ b.jsx("th", { children: l("email") }),
            /* @__PURE__ */ b.jsx("th", { children: l("role") }),
            /* @__PURE__ */ b.jsx("th", { children: l("exclusive label") }),
            /* @__PURE__ */ b.jsx("th", { children: l("action") })
          ] }) }),
          /* @__PURE__ */ b.jsx("tbody", { children: s.data.filter((m) => m).map((m) => /* @__PURE__ */ b.jsxs("tr", { id: `user-${m.objectId}`, children: [
            /* @__PURE__ */ b.jsx("td", { style: { verticalAlign: "top" }, children: /* @__PURE__ */ b.jsx("div", { className: "user-avatar", children: /* @__PURE__ */ b.jsx(
              "img",
              {
                className: "avatar",
                src: og(m.email, m.avatar),
                alt: m.display_name,
                width: "40",
                height: "40"
              }
            ) }) }),
            /* @__PURE__ */ b.jsx("td", { children: /* @__PURE__ */ b.jsx(
              "a",
              {
                href: m.url?.startsWith("https://") ? m.url : `https://${m.url}`,
                rel: "external nofollow noreferrer",
                target: "_blank",
                children: m.display_name
              }
            ) }),
            /* @__PURE__ */ b.jsxs("td", { children: [
              /* @__PURE__ */ b.jsx("a", { href: `mailto:${m.email}`, target: "_blank", rel: "noreferrer", children: m.email }),
              /* @__PURE__ */ b.jsx("br", {}),
              p.map((h) => /* @__PURE__ */ b.jsx(
                "a",
                {
                  href: m[h] && h !== "oidc" ? `https://${h}.com/${m[h]}` : "",
                  target: m[h] ? "_blank" : "_self",
                  rel: "noreferrer",
                  className: ci("account-item", "user-page-account-item", h, {
                    bind: m[h]
                  }),
                  children: Ue.createElement(uc[h])
                },
                h
              ))
            ] }),
            /* @__PURE__ */ b.jsx("td", { children: f(m.type) }),
            /* @__PURE__ */ b.jsx("td", { children: m.label }),
            /* @__PURE__ */ b.jsx("td", { className: "comment-action", children: c(m).map(
              ({ key: h, disable: d, name: g, action: y }) => d ? /* @__PURE__ */ b.jsx("span", { className: "weak", children: g }, h) : /* @__PURE__ */ b.jsx("a", { className: `operate-${h}`, onClick: y, children: g }, h)
            ) })
          ] }, m.objectId)) })
        ] }) }) }),
        /* @__PURE__ */ b.jsx("div", { className: "typecho-list-operate clear-fix", children: /* @__PURE__ */ b.jsx("form", { method: "get", children: /* @__PURE__ */ b.jsx(
          ug,
          {
            current: s.page,
            total: s.totalPages,
            onChange: (m) => r({ ...s, page: m })
          }
        ) }) })
      ] }) })
    ] }) })
  ] });
}
function Pe(i) {
  return `Minified Redux error #${i}; visit https://redux.js.org/Errors?code=${i} for the full message or use the non-minified dev environment for full errors. `;
}
var V8 = typeof Symbol == "function" && Symbol.observable || "@@observable", bp = V8, Ku = () => Math.random().toString(36).substring(7).split("").join("."), Y8 = {
  INIT: `@@redux/INIT${/* @__PURE__ */ Ku()}`,
  REPLACE: `@@redux/REPLACE${/* @__PURE__ */ Ku()}`,
  PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${Ku()}`
}, fi = Y8;
function cc(i) {
  if (typeof i != "object" || i === null)
    return !1;
  let l = i;
  for (; Object.getPrototypeOf(l) !== null; )
    l = Object.getPrototypeOf(l);
  return Object.getPrototypeOf(i) === l || Object.getPrototypeOf(i) === null;
}
function nr(i, l, s) {
  if (typeof i != "function")
    throw new Error(Pe(2));
  if (typeof l == "function" && typeof s == "function" || typeof s == "function" && typeof arguments[3] == "function")
    throw new Error(Pe(0));
  if (typeof l == "function" && typeof s > "u" && (s = l, l = void 0), typeof s < "u") {
    if (typeof s != "function")
      throw new Error(Pe(1));
    return s(nr)(i, l);
  }
  let r = i, c = l, f = /* @__PURE__ */ new Map(), p = f, m = 0, h = !1;
  function d() {
    p === f && (p = /* @__PURE__ */ new Map(), f.forEach((N, z) => {
      p.set(z, N);
    }));
  }
  function g() {
    if (h)
      throw new Error(Pe(3));
    return c;
  }
  function y(N) {
    if (typeof N != "function")
      throw new Error(Pe(4));
    if (h)
      throw new Error(Pe(5));
    let z = !0;
    d();
    const M = m++;
    return p.set(M, N), function() {
      if (z) {
        if (h)
          throw new Error(Pe(6));
        z = !1, d(), p.delete(M), f = null;
      }
    };
  }
  function x(N) {
    if (!cc(N))
      throw new Error(Pe(7));
    if (typeof N.type > "u")
      throw new Error(Pe(8));
    if (typeof N.type != "string")
      throw new Error(Pe(17));
    if (h)
      throw new Error(Pe(9));
    try {
      h = !0, c = r(c, N);
    } finally {
      h = !1;
    }
    return (f = p).forEach((M) => {
      M();
    }), N;
  }
  function w(N) {
    if (typeof N != "function")
      throw new Error(Pe(10));
    r = N, x({
      type: fi.REPLACE
    });
  }
  function E() {
    const N = y;
    return {
      /**
       * The minimal observable subscription method.
       * @param observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe(z) {
        if (typeof z != "object" || z === null)
          throw new Error(Pe(11));
        function M() {
          const O = z;
          O.next && O.next(g());
        }
        return M(), {
          unsubscribe: N(M)
        };
      },
      [bp]() {
        return this;
      }
    };
  }
  return x({
    type: fi.INIT
  }), {
    dispatch: x,
    subscribe: y,
    getState: g,
    replaceReducer: w,
    [bp]: E
  };
}
function G8(i, l, s) {
  return nr(i, l, s);
}
function Q8(i) {
  Object.keys(i).forEach((l) => {
    const s = i[l];
    if (typeof s(void 0, {
      type: fi.INIT
    }) > "u")
      throw new Error(Pe(12));
    if (typeof s(void 0, {
      type: fi.PROBE_UNKNOWN_ACTION()
    }) > "u")
      throw new Error(Pe(13));
  });
}
function Sg(i) {
  const l = Object.keys(i), s = {};
  for (let f = 0; f < l.length; f++) {
    const p = l[f];
    typeof i[p] == "function" && (s[p] = i[p]);
  }
  const r = Object.keys(s);
  let c;
  try {
    Q8(s);
  } catch (f) {
    c = f;
  }
  return function(p = {}, m) {
    if (c)
      throw c;
    let h = !1;
    const d = {};
    for (let g = 0; g < r.length; g++) {
      const y = r[g], x = s[y], w = p[y], E = x(w, m);
      if (typeof E > "u")
        throw m && m.type, new Error(Pe(14));
      d[y] = E, h = h || E !== w;
    }
    return h = h || r.length !== Object.keys(p).length, h ? d : p;
  };
}
function xp(i, l) {
  return function(...s) {
    return l(i.apply(this, s));
  };
}
function K8(i, l) {
  if (typeof i == "function")
    return xp(i, l);
  if (typeof i != "object" || i === null)
    throw new Error(Pe(16));
  const s = {};
  for (const r in i) {
    const c = i[r];
    typeof c == "function" && (s[r] = xp(c, l));
  }
  return s;
}
function fc(...i) {
  return i.length === 0 ? (l) => l : i.length === 1 ? i[0] : i.reduce((l, s) => (...r) => l(s(...r)));
}
function wg(...i) {
  return (l) => (s, r) => {
    const c = l(s, r);
    let f = () => {
      throw new Error(Pe(15));
    };
    const p = {
      getState: c.getState,
      dispatch: (h, ...d) => f(h, ...d)
    }, m = i.map((h) => h(p));
    return f = fc(...m)(c.dispatch), {
      ...c,
      dispatch: f
    };
  };
}
function X8(i) {
  return cc(i) && "type" in i && typeof i.type == "string";
}
const F8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  __DO_NOT_USE__ActionTypes: fi,
  applyMiddleware: wg,
  bindActionCreators: K8,
  combineReducers: Sg,
  compose: fc,
  createStore: nr,
  isAction: X8,
  isPlainObject: cc,
  legacy_createStore: G8
}, Symbol.toStringTag, { value: "Module" }));
function mn() {
  return mn = Object.assign || function(i) {
    for (var l = 1; l < arguments.length; l++) {
      var s = arguments[l];
      for (var r in s)
        Object.prototype.hasOwnProperty.call(s, r) && (i[r] = s[r]);
    }
    return i;
  }, mn.apply(this, arguments);
}
function Z8(i) {
  var l;
  i.models.forEach(function(h) {
    return Eg(i, h);
  });
  var s = Ag(i), r = wg.apply(F8, i.reduxConfig.middlewares), c = i.reduxConfig.devtoolComposer ? (l = i.reduxConfig).devtoolComposer.apply(l, i.reduxConfig.enhancers.concat([r])) : I8(i.reduxConfig.devtoolOptions).apply(void 0, i.reduxConfig.enhancers.concat([r])), f = i.reduxConfig.createStore || nr, p = i.reduxConfig.initialState, m = p === void 0 ? {} : p;
  return f(s, m, c);
}
function Eg(i, l) {
  var s = {}, r = Object.keys(l.reducers);
  r.forEach(function(m) {
    var h = P8(m) ? m : l.name + "/" + m;
    s[h] = l.reducers[m];
  });
  var c = function(h, d) {
    return h === void 0 && (h = l.state), d.type in s ? s[d.type](h, d.payload, d.meta) : h;
  }, f = l.baseReducer, p = f ? function(m, h) {
    return m === void 0 && (m = l.state), c(f(m, h), h);
  } : c;
  i.forEachPlugin("onReducer", function(m) {
    p = m(p, l.name, i) || p;
  }), i.reduxConfig.reducers[l.name] = p;
}
function Ag(i) {
  var l = i.reduxConfig.rootReducers, s = J8(i.reduxConfig), r = s;
  return l && Object.keys(l).length && (r = function(f, p) {
    var m = l[p.type];
    return s(m ? m(f, p) : f, p);
  }), i.forEachPlugin("onRootReducer", function(c) {
    r = c(r, i) || r;
  }), r;
}
function J8(i) {
  var l = i.combineReducers || Sg;
  return Object.keys(i.reducers).length ? l(i.reducers) : function(s) {
    return s;
  };
}
function I8(i) {
  return i === void 0 && (i = {}), !i.disabled && typeof window == "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(i) : fc;
}
function P8(i) {
  return i.indexOf("/") > -1;
}
var W8 = function(l, s, r) {
}, e5 = function(l, s, r) {
}, Cg = function(l, s, r, c) {
  return Object.assign(function(f, p) {
    var m = {
      type: s + "/" + r
    };
    return typeof f < "u" && (m.payload = f), typeof p < "u" && (m.meta = p), l.dispatch(m);
  }, {
    isEffect: c
  });
}, t5 = function(l, s) {
  var r = l.dispatch[s.name], c = Object.keys(s.reducers);
  c.forEach(function(f) {
    W8(s.name, s.reducers), r[f] = Cg(l, s.name, f, !1);
  });
}, a5 = function(l, s, r) {
  var c = l.dispatch[r.name], f = {};
  r.effects && (f = typeof r.effects == "function" ? r.effects(l.dispatch) : r.effects);
  var p = Object.keys(f);
  p.forEach(function(m) {
    e5(r.name), s.effects[r.name + "/" + m] = f[m].bind(c), c[m] = Cg(l, r.name, m, !0);
  });
};
function n5(i) {
  return {
    models: l5(i.models),
    reduxConfig: i.redux,
    forEachPlugin: function(s, r) {
      i.plugins.forEach(function(c) {
        c[s] && r(c[s]);
      });
    },
    effects: {}
  };
}
function l5(i) {
  return Object.keys(i).map(function(l) {
    var s = i5(l, i[l]);
    return s;
  });
}
function i5(i, l) {
  return mn({
    name: i,
    reducers: {}
  }, l);
}
function s5(i) {
  var l = n5(i);
  l.reduxConfig.middlewares.push(r5(l)), l.forEachPlugin("createMiddleware", function(c) {
    l.reduxConfig.middlewares.push(c(l));
  });
  var s = Z8(l), r = mn({}, s, {
    name: i.name,
    addModel: function(f) {
      Eg(l, f), Sp(r, f), wp(r, l, f), s.replaceReducer(Ag(l)), s.dispatch({
        type: "@@redux/REPLACE"
      });
    }
  });
  return o5(r, i.plugins), l.models.forEach(function(c) {
    return Sp(r, c);
  }), l.models.forEach(function(c) {
    return wp(r, l, c);
  }), l.forEachPlugin("onStoreCreated", function(c) {
    r = c(r, l) || r;
  }), r;
}
function r5(i) {
  return function(l) {
    return function(s) {
      return function(r) {
        return r.type in i.effects ? (s(r), i.effects[r.type](r.payload, l.getState(), r.meta)) : s(r);
      };
    };
  };
}
function Sp(i, l) {
  var s = {};
  i.dispatch["" + l.name] = s, t5(i, l);
}
function wp(i, l, s) {
  a5(i, l, s), l.forEachPlugin("onModel", function(r) {
    r(s, i);
  });
}
function o5(i, l) {
  l.forEach(function(s) {
    if (s.exposed) {
      var r = Object.keys(s.exposed);
      r.forEach(function(c) {
        if (s.exposed) {
          var f = s.exposed[c], p = typeof f == "function";
          i[c] = p ? function() {
            for (var m = arguments.length, h = new Array(m), d = 0; d < m; d++)
              h[d] = arguments[d];
            return f.apply(void 0, [i].concat(h));
          } : Object.create(s.exposed[c]);
        }
      });
    }
  });
}
var Ep = 0;
function u5(i) {
  var l, s, r, c = (l = i.name) != null ? l : "Rematch Store " + Ep;
  Ep += 1;
  var f = {
    name: c,
    models: i.models || {},
    plugins: i.plugins || [],
    redux: mn({
      reducers: {},
      rootReducers: {},
      enhancers: [],
      middlewares: []
    }, i.redux, {
      devtoolOptions: mn({
        name: c
      }, (s = (r = i.redux) == null ? void 0 : r.devtoolOptions) != null ? s : {})
    })
  };
  return f.plugins.forEach(function(p) {
    p.config && (f.models = ks(f.models, p.config.models), p.config.redux && (f.redux.initialState = ks(f.redux.initialState, p.config.redux.initialState), f.redux.reducers = ks(f.redux.reducers, p.config.redux.reducers), f.redux.rootReducers = ks(f.redux.rootReducers, p.config.redux.reducers), f.redux.enhancers = [].concat(f.redux.enhancers, p.config.redux.enhancers || []), f.redux.middlewares = [].concat(f.redux.middlewares, p.config.redux.middlewares || []), f.redux.combineReducers = f.redux.combineReducers || p.config.redux.combineReducers, f.redux.createStore = f.redux.createStore || p.config.redux.createStore));
  }), f;
}
function ks(i, l) {
  return l ? mn({}, l, i) : i;
}
var c5 = function(l) {
  var s = u5(l || {});
  return s5(s);
};
const f5 = () => Ze("token").catch(() => {
  Rg(), Promise.reject(new Error("get userinfo failed"));
}), d5 = ({ email: i, password: l, code: s, recaptchaV3: r, turnstile: c }) => Ze({
  url: "token",
  method: "POST",
  body: { email: i, password: l, code: s, recaptchaV3: r, turnstile: c }
}), Rg = () => {
  window.TOKEN = null, sessionStorage.removeItem("TOKEN"), localStorage.removeItem("TOKEN");
}, h5 = (i) => Ze({ url: "user", method: "POST", body: i }), m5 = ({ email: i }) => Ze({
  url: "user/password",
  method: "PUT",
  body: { email: i }
}), p5 = {
  state: null,
  reducers: {
    setUser(i, l) {
      return l;
    },
    updateUser(i, l) {
      return { ...i, ...l };
    }
  },
  effects: (i) => ({
    async loadUserInfo() {
      const l = await f5();
      if (l?.objectId) {
        if (window.opener) {
          const s = localStorage.getItem("TOKEN"), r = !!s, c = s ?? window.TOKEN ?? sessionStorage.getItem("token");
          window.opener.postMessage({ type: "userInfo", data: { token: c, remember: r, ...l } }, "*");
        }
        return i.user.setUser(l);
      }
    },
    async login({ email: l, password: s, code: r, remember: c, recaptchaV3: f, turnstile: p }) {
      const { token: m, ...h } = await d5({
        email: l,
        password: s,
        code: r,
        recaptchaV3: f,
        turnstile: p
      });
      return m && (window.TOKEN = m, sessionStorage.setItem("TOKEN", m), c && localStorage.setItem("TOKEN", m), window.opener && window.opener.postMessage({ type: "userInfo", data: { token: m, remember: c, ...h } }, "*")), i.user.setUser(h);
    },
    logout() {
      Rg(), i.user.setUser(null);
    },
    register(l) {
      return h5(l);
    },
    forgot(l) {
      return m5(l);
    },
    async updateProfile(l) {
      return await ri(l), window.opener && window.opener.postMessage({ type: "profile", data: l }, "*"), i.user.updateUser(l);
    }
  })
}, Ng = c5({ models: { user: p5 } }), Bs = (i) => {
  const l = pa((s) => s.user);
  return A.useEffect(() => {
    const s = i.meta ?? {}, r = i.basename ?? "";
    if (!l?.objectId)
      return location.href = `${r}/ui/login?redirect=${location.pathname.replace(r, "")}`;
    if (s.auth ? i.meta.auth !== l.type : !1)
      return location.href = `${r}/ui/profile`;
  }, [l, i.meta]), l ? i.children : null;
};
function g5() {
  const i = location.pathname.match(/(.*?)\/ui/), l = i ? i[1] : "/";
  return /* @__PURE__ */ b.jsx(Ry, { store: Ng, children: /* @__PURE__ */ b.jsx(Iv, { basename: l, children: /* @__PURE__ */ b.jsxs(Nv, { children: [
    /* @__PURE__ */ b.jsx(
      Ga,
      {
        path: "/ui",
        exact: !0,
        element: /* @__PURE__ */ b.jsx(Bs, { meta: { auth: "administrator" }, basename: l, children: /* @__PURE__ */ b.jsx(C8, {}) })
      }
    ),
    /* @__PURE__ */ b.jsx(
      Ga,
      {
        path: "/ui/user",
        exact: !0,
        element: /* @__PURE__ */ b.jsx(Bs, { meta: { auth: "administrator" }, basename: l, children: /* @__PURE__ */ b.jsx(q8, {}) })
      }
    ),
    /* @__PURE__ */ b.jsx(
      Ga,
      {
        path: "/ui/migration",
        exact: !0,
        element: /* @__PURE__ */ b.jsx(Bs, { meta: { auth: "administrator" }, basename: l, children: /* @__PURE__ */ b.jsx(j8, {}) })
      }
    ),
    /* @__PURE__ */ b.jsx(Ga, { path: "/ui/login", exact: !0, element: /* @__PURE__ */ b.jsx(m8, {}) }),
    /* @__PURE__ */ b.jsx(Ga, { path: "/ui/register", exact: !0, element: /* @__PURE__ */ b.jsx(H8, {}) }),
    /* @__PURE__ */ b.jsx(Ga, { path: "/ui/forgot", exact: !0, element: /* @__PURE__ */ b.jsx(IE, {}) }),
    /* @__PURE__ */ b.jsx(
      Ga,
      {
        path: "/ui/profile",
        exact: !0,
        element: /* @__PURE__ */ b.jsx(Bs, { children: /* @__PURE__ */ b.jsx(B8, {}) })
      }
    )
  ] }) }) });
}
const {
  slice: y5,
  forEach: v5
} = [];
function b5(i) {
  return v5.call(y5.call(arguments, 1), (l) => {
    if (l)
      for (const s in l)
        i[s] === void 0 && (i[s] = l[s]);
  }), i;
}
function x5(i) {
  return typeof i != "string" ? !1 : [/<\s*script.*?>/i, /<\s*\/\s*script\s*>/i, /<\s*img.*?on\w+\s*=/i, /<\s*\w+\s*on\w+\s*=.*?>/i, /javascript\s*:/i, /vbscript\s*:/i, /expression\s*\(/i, /eval\s*\(/i, /alert\s*\(/i, /document\.cookie/i, /document\.write\s*\(/i, /window\.location/i, /innerHTML/i].some((s) => s.test(i));
}
const Ap = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/, S5 = function(i, l) {
  const r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    path: "/"
  }, c = encodeURIComponent(l);
  let f = `${i}=${c}`;
  if (r.maxAge > 0) {
    const p = r.maxAge - 0;
    if (Number.isNaN(p)) throw new Error("maxAge should be a Number");
    f += `; Max-Age=${Math.floor(p)}`;
  }
  if (r.domain) {
    if (!Ap.test(r.domain))
      throw new TypeError("option domain is invalid");
    f += `; Domain=${r.domain}`;
  }
  if (r.path) {
    if (!Ap.test(r.path))
      throw new TypeError("option path is invalid");
    f += `; Path=${r.path}`;
  }
  if (r.expires) {
    if (typeof r.expires.toUTCString != "function")
      throw new TypeError("option expires is invalid");
    f += `; Expires=${r.expires.toUTCString()}`;
  }
  if (r.httpOnly && (f += "; HttpOnly"), r.secure && (f += "; Secure"), r.sameSite)
    switch (typeof r.sameSite == "string" ? r.sameSite.toLowerCase() : r.sameSite) {
      case !0:
        f += "; SameSite=Strict";
        break;
      case "lax":
        f += "; SameSite=Lax";
        break;
      case "strict":
        f += "; SameSite=Strict";
        break;
      case "none":
        f += "; SameSite=None";
        break;
      default:
        throw new TypeError("option sameSite is invalid");
    }
  return r.partitioned && (f += "; Partitioned"), f;
}, Cp = {
  create(i, l, s, r) {
    let c = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
      path: "/",
      sameSite: "strict"
    };
    s && (c.expires = /* @__PURE__ */ new Date(), c.expires.setTime(c.expires.getTime() + s * 60 * 1e3)), r && (c.domain = r), document.cookie = S5(i, l, c);
  },
  read(i) {
    const l = `${i}=`, s = document.cookie.split(";");
    for (let r = 0; r < s.length; r++) {
      let c = s[r];
      for (; c.charAt(0) === " "; ) c = c.substring(1, c.length);
      if (c.indexOf(l) === 0) return c.substring(l.length, c.length);
    }
    return null;
  },
  remove(i, l) {
    this.create(i, "", -1, l);
  }
};
var w5 = {
  name: "cookie",
  // Deconstruct the options object and extract the lookupCookie property
  lookup(i) {
    let {
      lookupCookie: l
    } = i;
    if (l && typeof document < "u")
      return Cp.read(l) || void 0;
  },
  // Deconstruct the options object and extract the lookupCookie, cookieMinutes, cookieDomain, and cookieOptions properties
  cacheUserLanguage(i, l) {
    let {
      lookupCookie: s,
      cookieMinutes: r,
      cookieDomain: c,
      cookieOptions: f
    } = l;
    s && typeof document < "u" && Cp.create(s, i, r, c, f);
  }
}, E5 = {
  name: "querystring",
  // Deconstruct the options object and extract the lookupQuerystring property
  lookup(i) {
    let {
      lookupQuerystring: l
    } = i, s;
    if (typeof window < "u") {
      let {
        search: r
      } = window.location;
      !window.location.search && window.location.hash?.indexOf("?") > -1 && (r = window.location.hash.substring(window.location.hash.indexOf("?")));
      const f = r.substring(1).split("&");
      for (let p = 0; p < f.length; p++) {
        const m = f[p].indexOf("=");
        m > 0 && f[p].substring(0, m) === l && (s = f[p].substring(m + 1));
      }
    }
    return s;
  }
}, A5 = {
  name: "hash",
  // Deconstruct the options object and extract the lookupHash property and the lookupFromHashIndex property
  lookup(i) {
    let {
      lookupHash: l,
      lookupFromHashIndex: s
    } = i, r;
    if (typeof window < "u") {
      const {
        hash: c
      } = window.location;
      if (c && c.length > 2) {
        const f = c.substring(1);
        if (l) {
          const p = f.split("&");
          for (let m = 0; m < p.length; m++) {
            const h = p[m].indexOf("=");
            h > 0 && p[m].substring(0, h) === l && (r = p[m].substring(h + 1));
          }
        }
        if (r) return r;
        if (!r && s > -1) {
          const p = c.match(/\/([a-zA-Z-]*)/g);
          return Array.isArray(p) ? p[typeof s == "number" ? s : 0]?.replace("/", "") : void 0;
        }
      }
    }
    return r;
  }
};
let al = null;
const Rp = () => {
  if (al !== null) return al;
  try {
    if (al = typeof window < "u" && window.localStorage !== null, !al)
      return !1;
    const i = "i18next.translate.boo";
    window.localStorage.setItem(i, "foo"), window.localStorage.removeItem(i);
  } catch {
    al = !1;
  }
  return al;
};
var C5 = {
  name: "localStorage",
  // Deconstruct the options object and extract the lookupLocalStorage property
  lookup(i) {
    let {
      lookupLocalStorage: l
    } = i;
    if (l && Rp())
      return window.localStorage.getItem(l) || void 0;
  },
  // Deconstruct the options object and extract the lookupLocalStorage property
  cacheUserLanguage(i, l) {
    let {
      lookupLocalStorage: s
    } = l;
    s && Rp() && window.localStorage.setItem(s, i);
  }
};
let nl = null;
const Np = () => {
  if (nl !== null) return nl;
  try {
    if (nl = typeof window < "u" && window.sessionStorage !== null, !nl)
      return !1;
    const i = "i18next.translate.boo";
    window.sessionStorage.setItem(i, "foo"), window.sessionStorage.removeItem(i);
  } catch {
    nl = !1;
  }
  return nl;
};
var R5 = {
  name: "sessionStorage",
  lookup(i) {
    let {
      lookupSessionStorage: l
    } = i;
    if (l && Np())
      return window.sessionStorage.getItem(l) || void 0;
  },
  cacheUserLanguage(i, l) {
    let {
      lookupSessionStorage: s
    } = l;
    s && Np() && window.sessionStorage.setItem(s, i);
  }
}, N5 = {
  name: "navigator",
  lookup(i) {
    const l = [];
    if (typeof navigator < "u") {
      const {
        languages: s,
        userLanguage: r,
        language: c
      } = navigator;
      if (s)
        for (let f = 0; f < s.length; f++)
          l.push(s[f]);
      r && l.push(r), c && l.push(c);
    }
    return l.length > 0 ? l : void 0;
  }
}, j5 = {
  name: "htmlTag",
  // Deconstruct the options object and extract the htmlTag property
  lookup(i) {
    let {
      htmlTag: l
    } = i, s;
    const r = l || (typeof document < "u" ? document.documentElement : null);
    return r && typeof r.getAttribute == "function" && (s = r.getAttribute("lang")), s;
  }
}, T5 = {
  name: "path",
  // Deconstruct the options object and extract the lookupFromPathIndex property
  lookup(i) {
    let {
      lookupFromPathIndex: l
    } = i;
    if (typeof window > "u") return;
    const s = window.location.pathname.match(/\/([a-zA-Z-]*)/g);
    return Array.isArray(s) ? s[typeof l == "number" ? l : 0]?.replace("/", "") : void 0;
  }
}, O5 = {
  name: "subdomain",
  lookup(i) {
    let {
      lookupFromSubdomainIndex: l
    } = i;
    const s = typeof l == "number" ? l + 1 : 1, r = typeof window < "u" && window.location?.hostname?.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i);
    if (r)
      return r[s];
  }
};
let jg = !1;
try {
  document.cookie, jg = !0;
} catch {
}
const Tg = ["querystring", "cookie", "localStorage", "sessionStorage", "navigator", "htmlTag"];
jg || Tg.splice(1, 1);
const z5 = () => ({
  order: Tg,
  lookupQuerystring: "lng",
  lookupCookie: "i18next",
  lookupLocalStorage: "i18nextLng",
  lookupSessionStorage: "i18nextLng",
  // cache user language
  caches: ["localStorage"],
  excludeCacheFor: ["cimode"],
  // cookieMinutes: 10,
  // cookieDomain: 'myDomain'
  convertDetectedLanguage: (i) => i
});
class Og {
  constructor(l) {
    let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.type = "languageDetector", this.detectors = {}, this.init(l, s);
  }
  init() {
    let l = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
      languageUtils: {}
    }, s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    this.services = l, this.options = b5(s, this.options || {}, z5()), typeof this.options.convertDetectedLanguage == "string" && this.options.convertDetectedLanguage.indexOf("15897") > -1 && (this.options.convertDetectedLanguage = (c) => c.replace("-", "_")), this.options.lookupFromUrlIndex && (this.options.lookupFromPathIndex = this.options.lookupFromUrlIndex), this.i18nOptions = r, this.addDetector(w5), this.addDetector(E5), this.addDetector(C5), this.addDetector(R5), this.addDetector(N5), this.addDetector(j5), this.addDetector(T5), this.addDetector(O5), this.addDetector(A5);
  }
  addDetector(l) {
    return this.detectors[l.name] = l, this;
  }
  detect() {
    let l = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.options.order, s = [];
    return l.forEach((r) => {
      if (this.detectors[r]) {
        let c = this.detectors[r].lookup(this.options);
        c && typeof c == "string" && (c = [c]), c && (s = s.concat(c));
      }
    }), s = s.filter((r) => r != null && !x5(r)).map((r) => this.options.convertDetectedLanguage(r)), this.services && this.services.languageUtils && this.services.languageUtils.getBestMatchFromCodes ? s : s.length > 0 ? s[0] : null;
  }
  cacheUserLanguage(l) {
    let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.options.caches;
    s && (this.options.excludeCacheFor && this.options.excludeCacheFor.indexOf(l) > -1 || s.forEach((r) => {
      this.detectors[r] && this.detectors[r].cacheUserLanguage(l, this.options);
    }));
  }
}
Og.type = "languageDetector";
it.use(Og).use(I2).init({
  // we init with resources
  resources: JE,
  fallbackLng: "zh-CN",
  debug: !0,
  // have a common namespace used around the full app
  ns: ["translations"],
  defaultNS: "translations",
  keySeparator: !1,
  // we use content as keys
  interpolation: {
    escapeValue: !1
  }
});
const L5 = async () => {
  await Promise.race([
    new Promise((s) => {
      setTimeout(s, 50);
    }),
    new Promise((s) => {
      window.addEventListener("message", (r) => {
        r && r.type === "TOKEN" && r.data && s(r);
      });
    }),
    new Promise((s) => {
      const c = new URLSearchParams(location.search).get("token");
      c && s(c);
    })
  ]).then((s) => {
    s && (window.TOKEN = s, sessionStorage.setItem("TOKEN", s));
  }), await Ng.dispatch({ type: "user/loadUserInfo" }).catch((s) => {
    console.error(s);
  });
  const i = document.createElement("div");
  i.style.height = "100%", document.body.append(i), uy.createRoot(i).render(
    /* @__PURE__ */ b.jsx(Ue.StrictMode, { children: /* @__PURE__ */ b.jsx(g5, {}) })
  );
};
console.log(
  "%c @waline/admin %c v0.40.0",
  "color: white; background: #0078E7; padding:5px 0;",
  "padding:4px;border:1px solid #0078E7;"
);
L5();
