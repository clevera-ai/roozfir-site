// Cookie banner for the help center (same wording and buttons as the app). The choice is kept in localStorage; add ?reset to any help URL to clear it.
(function () {
  var KEY = 'roozfir:consent:v1'
  function get() { try { return JSON.parse(localStorage.getItem(KEY) || 'null') } catch (e) { return null } }
  function set(v) { try { localStorage.setItem(KEY, JSON.stringify(v)) } catch (e) {} }
  try { if (/[?&]reset(=|&|$)/.test(location.search)) { localStorage.removeItem(KEY); history.replaceState(null, '', location.pathname + location.hash) } } catch (e) {}
  if (get()) return
  var css = document.createElement('style')
  css.textContent = '#cc-bar{position:fixed;left:0;right:0;bottom:0;height:120px;z-index:9999;background:#fff;border-top:1px solid #ddd;box-shadow:0 -8px 24px rgba(0,0,0,.12);display:flex;align-items:center;font:14px/1.45 Arial,sans-serif;color:#222}' +
    '#cc-bar .in{max-width:1000px;margin:0 auto;padding:0 24px;width:100%;display:flex;flex-wrap:wrap;gap:16px;align-items:center;justify-content:space-between;box-sizing:border-box}#cc-bar p{margin:0;max-width:540px}' +
    '.cc-btn{font:14px Arial,sans-serif;padding:8px 14px;border:1px solid #ccc;border-radius:6px;background:#fff;cursor:pointer;margin-left:6px}.cc-btn.p{background:#2b3a4a;border-color:#2b3a4a;color:#fff}' +
    '#cc-dlg{position:fixed;inset:0;z-index:10000;background:rgba(0,0,0,.5);display:flex;align-items:center;justify-content:center;font:14px Arial,sans-serif}#cc-dlg .box{background:#fff;border-radius:12px;max-width:420px;width:calc(100% - 32px);padding:20px}' +
    '#cc-dlg h2{margin:0 0 12px;font:bold 18px Arial,sans-serif;border:0;padding:0}#cc-dlg label{display:flex;justify-content:space-between;gap:12px;padding:10px 0;border-bottom:1px solid #eee}#cc-dlg .row{text-align:right;margin-top:14px}'
  document.head.appendChild(css)
  var bar = document.createElement('div'); bar.id = 'cc-bar'; bar.setAttribute('role', 'region'); bar.setAttribute('aria-label', 'Cookie consent')
  bar.innerHTML = '<div class="in"><p><strong>We use cookies.</strong> Roozfir uses essential cookies to run the app and, with your permission, analytics and marketing cookies to improve it.</p><div><button class="cc-btn" id="cc-rej">Reject all</button><button class="cc-btn" id="cc-cus">Customise</button><button class="cc-btn p" id="cc-acc">Accept all</button></div></div>'
  function done(v) { set(v); bar.remove(); var d = document.getElementById('cc-dlg'); if (d) d.remove() }
  function dialog() {
    var d = document.createElement('div'); d.id = 'cc-dlg'
    d.innerHTML = '<div class="box" role="dialog" aria-modal="true" aria-label="Cookie preferences"><h2>Cookie preferences</h2><label>Essential <span>Always on</span></label><label>Analytics <input type="checkbox" id="cc-an"></label><label>Marketing <input type="checkbox" id="cc-mk"></label><div class="row"><button class="cc-btn" id="cc-cancel">Cancel</button><button class="cc-btn p" id="cc-save">Save preferences</button></div></div>'
    document.body.appendChild(d)
    d.querySelector('#cc-cancel').onclick = function () { d.remove() }
    d.querySelector('#cc-save').onclick = function () { done({ analytics: d.querySelector('#cc-an').checked, marketing: d.querySelector('#cc-mk').checked }) }
  }
  function mount() {
    document.body.appendChild(bar)
    bar.querySelector('#cc-acc').onclick = function () { done({ analytics: true, marketing: true }) }
    bar.querySelector('#cc-rej').onclick = function () { done({ analytics: false, marketing: false }) }
    bar.querySelector('#cc-cus').onclick = dialog
  }
  if (document.body) mount(); else document.addEventListener('DOMContentLoaded', mount)
})()
