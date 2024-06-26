// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"86oZd":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "b3c595598cfc62b9";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"1xC6H":[function(require,module,exports) {
var Refresh = require("6d18d6bd340e7473");
var ErrorOverlay = require("74ad5ea14201648c");
Refresh.injectIntoGlobalHook(window);
window.$RefreshReg$ = function() {};
window.$RefreshSig$ = function() {
    return function(type) {
        return type;
    };
};
ErrorOverlay.setEditorHandler(function editorHandler(errorLocation) {
    let file = `${errorLocation.fileName}:${errorLocation.lineNumber || 1}:${errorLocation.colNumber || 1}`;
    fetch(`/__parcel_launch_editor?file=${encodeURIComponent(file)}`);
});
ErrorOverlay.startReportingRuntimeErrors({
    onError: function() {}
});
window.addEventListener("parcelhmraccept", ()=>{
    ErrorOverlay.dismissRuntimeErrors();
});

},{"6d18d6bd340e7473":"786KC","74ad5ea14201648c":"1dldy"}],"6rimH":[function(require,module,exports) {
var backgroundcolors = [
    "#4BABF1",
    "#06BD91",
    "#F4417A",
    "#A992E0",
    "#E6D2BB"
];
var backgroundcolors2 = [
    "#4BABF1",
    "#06BD91",
    "#F4417A",
    "#A992E0",
    "#E6D2BB"
];
var fontcolors = [
    "#A98F92",
    "#E6D2BB",
    "#E6D2BB",
    "#E6D2BB",
    "#DD3AA6",
    "#E6D2BB"
];
var titlecolors = [
    "#5363F2",
    "#A9992E",
    "#FF001F",
    "#DD3AA6",
    "#A98F92"
];
var boxcolors = [
    "#E6D2BB",
    "#E6D2BB",
    "#E6D2BB",
    "#D1A5D7",
    "#DDA8A1"
];
var bodyswirls = [
    "BlueSwirl.png",
    "GreenSwirl.png",
    "RedSwirl.png",
    "PurpleSwirl.png",
    "BeigeSwirl.png"
];
var currentIndex = 0;
var currentIndex1 = -1;
function changeBackgroundColor() {
    var body = document.body;
    var button = document.querySelector("button");
    var staffCont = document.querySelectorAll(".dp-vr");
    var link = document.querySelectorAll("a");
    var dropbtnhover = document.querySelectorAll(".dropbtn");
    var swirl = document.querySelector(".body-swirl");
    var count = document.querySelector(".counter");
    var dpbox = document.querySelectorAll(".box-main");
    currentIndex1 = currentIndex;
    body.style.backgroundColor = backgroundcolors[currentIndex];
    swirl.style.backgroundImage = "url(" + bodyswirls[currentIndex] + ")";
    button.style.backgroundColor = titlecolors[currentIndex];
    count.style.backgroundColor = titlecolors[currentIndex];
    link.forEach(function(link) {
        link.addEventListener("mouseenter", function() {
            link.style.color = fontcolors[currentIndex];
            link.style.backgroundColor = backgroundcolors[currentIndex1];
        });
        link.addEventListener("mouseleave", function() {
            link.style.color = "#000000";
            link.style.backgroundColor = "transparent";
        });
    });
    staffCont.forEach(function(staffCont) {
        staffCont.style.backgroundColor = titlecolors[currentIndex1];
    });
    dpbox.forEach((box)=>{
        box.style.backgroundColor = titlecolors[currentIndex];
    });
    dropbtnhover.forEach(function(dropbtnhover) {
        dropbtnhover.addEventListener("mouseenter", function() {
            if (currentIndex1 >= 0) dropbtnhover.style.backgroundColor = backgroundcolors[currentIndex1];
            dropbtnhover.style.color = fontcolors[currentIndex];
        });
        dropbtnhover.addEventListener("mouseleave", function() {
            dropbtnhover.style.color = "#000000";
            dropbtnhover.style.backgroundColor = "transparent";
        });
    });
    currentIndex = (currentIndex + 1) % backgroundcolors.length;
}
var currentIndex1 = -1;
function changeBackgroundColor2() {
    var body = document.body;
    var button = document.querySelector("button");
    var header = document.querySelector(".wwa-header");
    var whoweare = document.querySelector(".mission");
    var staff = document.querySelectorAll(".staff");
    var link = document.querySelectorAll("a");
    var staffCont2 = document.querySelectorAll(".dp-vr");
    var dropbtnhover = document.querySelectorAll(".dropbtn");
    var staffCont = document.querySelectorAll(".staff-content");
    var contact = document.querySelector(".contact-box");
    var dpbox = document.querySelectorAll(".box-main");
    body.style.backgroundColor = backgroundcolors[currentIndex];
    button.style.backgroundColor = titlecolors[currentIndex];
    header.style.backgroundColor = boxcolors[currentIndex];
    contact.style.backgroundColor = boxcolors[currentIndex];
    whoweare.style.backgroundColor = backgroundcolors[currentIndex];
    staff.forEach(function(staff) {
        staff.style.backgroundColor = boxcolors[currentIndex];
        staff.style.backgroundImage = "url(" + bodyswirls[currentIndex] + ")";
        staff.style.boxShadowColor = boxcolors[currentIndex - 1];
    });
    staffCont.forEach(function(staffCont) {
        staffCont.style.backgroundColor = titlecolors[currentIndex];
    });
    dpbox.forEach((box)=>{
        box.style.backgroundColor = titlecolors[currentIndex];
    });
    dropbtnhover.forEach(function(dropbtnhover) {
        dropbtnhover.addEventListener("mouseenter", function() {
            if (currentIndex1 >= 0) dropbtnhover.style.backgroundColor = backgroundcolors[currentIndex1];
            dropbtnhover.style.color = fontcolors[currentIndex];
        });
        dropbtnhover.addEventListener("mouseleave", function() {
            dropbtnhover.style.color = "#000000";
            dropbtnhover.style.backgroundColor = "transparent";
        });
    });
    link.forEach(function(link) {
        link.addEventListener("mouseenter", function() {
            link.style.color = fontcolors[currentIndex];
            link.style.backgroundColor = backgroundcolors2[currentIndex1];
        });
        link.addEventListener("mouseleave", function() {
            link.style.color = "#000000";
            link.style.backgroundColor = "transparent";
        });
    });
    staffCont2.forEach(function(staffCont) {
        staffCont.style.backgroundColor = titlecolors[currentIndex];
    });
    currentIndex = (currentIndex + 1) % backgroundcolors.length;
    currentIndex1 = (currentIndex1 + 1) % backgroundcolors2.length;
}
var currentIndex1 = -1;
function changeBackgroundColor4() {
    var body = document.body;
    var button = document.querySelector("button");
    var sub = document.querySelector(".submit");
    var header = document.querySelector(".wwa-header");
    var link = document.querySelectorAll("a");
    var dropbtnhover = document.querySelectorAll(".dropbtn");
    var contact = document.querySelector(".contact-box");
    var homeCollegeBox = document.querySelector(".home-college-box");
    var contactForm1 = document.querySelectorAll(".contact-form1");
    var events = document.querySelectorAll(".events");
    var volun = document.querySelector(".want");
    var dpbox = document.querySelectorAll(".box-main");
    volun.style.backgroundColor = titlecolors[currentIndex];
    body.style.backgroundColor = backgroundcolors[currentIndex];
    button.style.backgroundColor = titlecolors[currentIndex];
    sub.style.backgroundColor = titlecolors[currentIndex];
    sub.style.color = boxcolors[currentIndex];
    header.style.backgroundColor = boxcolors[currentIndex];
    contact.style.backgroundColor = boxcolors[currentIndex];
    homeCollegeBox.style.backgroundColor = backgroundcolors[currentIndex];
    link.forEach(function(link) {
        link.addEventListener("mouseenter", function() {
            link.style.color = fontcolors[currentIndex];
            link.style.backgroundColor = backgroundcolors2[currentIndex1];
        });
        link.addEventListener("mouseleave", function() {
            link.style.color = "#000000";
            link.style.backgroundColor = "transparent";
        });
    });
    dpbox.forEach((box)=>{
        box.style.backgroundColor = titlecolors[currentIndex];
    });
    dropbtnhover.forEach(function(dropbtnhover) {
        dropbtnhover.addEventListener("mouseenter", function() {
            if (currentIndex1 >= 0) dropbtnhover.style.backgroundColor = backgroundcolors[currentIndex1];
            dropbtnhover.style.color = fontcolors[currentIndex];
        });
        dropbtnhover.addEventListener("mouseleave", function() {
            dropbtnhover.style.color = "#000000";
            dropbtnhover.style.backgroundColor = "transparent";
        });
    });
    contactForm1.forEach(function(contactForm1) {
        contactForm1.style.backgroundColor = boxcolors[currentIndex];
    });
    events.forEach((event)=>{
        event.style.backgroundColor = boxcolors[currentIndex];
    });
    currentIndex = (currentIndex + 1) % backgroundcolors.length;
    currentIndex1 = (currentIndex1 + 1) % backgroundcolors2.length;
}
var currentIndex1 = -1;
function changeBackgroundColor3() {
    var body = document.body;
    var button = document.querySelector("button");
    var header = document.querySelector(".wwa-header");
    var whoweare = document.querySelectorAll(".mission");
    var staff = document.querySelectorAll(".staff");
    var link = document.querySelectorAll("a");
    var staffCont = document.querySelectorAll(".staff-content");
    var contact = document.querySelector(".contact-box");
    var want = document.querySelector(".want");
    var homeCollegeBox = document.querySelector(".home-college-box");
    var colleges = document.querySelectorAll(".colleges");
    var dropbtnhover = document.querySelectorAll(".dropbtn");
    var dpbox = document.querySelectorAll(".box-main");
    homeCollegeBox.style.backgroundColor = backgroundcolors[currentIndex];
    body.style.backgroundColor = backgroundcolors[currentIndex];
    button.style.backgroundColor = titlecolors[currentIndex];
    header.style.backgroundColor = boxcolors[currentIndex];
    want.style.backgroundColor = titlecolors[currentIndex];
    contact.style.backgroundColor = boxcolors[currentIndex];
    whoweare.forEach(function(who) {
        who.style.backgroundColor = backgroundcolors[currentIndex];
    });
    staff.forEach(function(staff) {
        staff.style.backgroundColor = boxcolors[currentIndex];
        staff.style.backgroundImage = "url(" + bodyswirls[currentIndex] + ")";
        staff.style.boxShadowColor = boxcolors[currentIndex - 1];
    });
    staffCont.forEach(function(staffCont) {
        staffCont.style.backgroundColor = titlecolors[currentIndex];
    });
    link.forEach(function(link) {
        link.addEventListener("mouseenter", function() {
            link.style.color = fontcolors[currentIndex];
            link.style.backgroundColor = backgroundcolors2[currentIndex1];
        });
        link.addEventListener("mouseleave", function() {
            link.style.color = "#000000";
            link.style.backgroundColor = "transparent";
        });
    });
    dropbtnhover.forEach(function(dropbtnhover) {
        dropbtnhover.addEventListener("mouseenter", function() {
            if (currentIndex1 >= 0) dropbtnhover.style.backgroundColor = backgroundcolors[currentIndex1];
            dropbtnhover.style.color = fontcolors[currentIndex];
        });
        dropbtnhover.addEventListener("mouseleave", function() {
            dropbtnhover.style.color = "#000000";
            dropbtnhover.style.backgroundColor = "transparent";
        });
    });
    colleges.forEach(function(college) {
        college.style.backgroundColor = boxcolors[currentIndex];
    });
    dpbox.forEach((box)=>{
        box.style.backgroundColor = titlecolors[currentIndex];
    });
    currentIndex = (currentIndex + 1) % backgroundcolors.length;
    currentIndex1 = (currentIndex1 + 1) % backgroundcolors2.length;
}
/*function showCollege() {
    <>
        <div class="dropdown" style="padding-right: 4vw;">
            <h3 class="name3"><button class="dropbtn"> VOTING INFORMATION </button> </h3>
            <div class="dropdown-content">
                <a href="Central-Michigan-University" style="background-color:transparent;">
                    <div class="box-cmu">
                        <p> Central Michigan University </p>
                    </div>
                </a>
                <a href="Delta-College" style="background-color:transparent;">
                    <div class="box-del">
                        <p> Delta College </p>
                    </div>
                </a>
                <a href="Jackson-College" style="background-color:transparent;">
                    <div class="box-jc">
                        <p> Jackson College </p>
                    </div>
                </a>
                <a href="Kalamazoo-College" style="background-color:transparent;">
                    <div class="box-kc">
                        <p> Kalamazoo College </p>
                    </div>
                </a>
            </div>
        </div>
    </>
}*/ function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for(i = 0; i < tabcontent.length; i++)tabcontent[i].style.display = "none";
    tablinks = document.getElementsByClassName("tablinks");
    for(i = 0; i < tablinks.length; i++)tablinks[i].className = tablinks[i].className.replace(" active", "");
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}
function countDown() {
    //change to election day when time comes
    var countDownDate = new Date("Aug 6, 2024 00:00:00").getTime();
    var x = setInterval(function() {
        var now = new Date().getTime();
        var distance = countDownDate - now;
        var days = Math.floor(distance / 86400000);
        var hours = Math.floor(distance % 86400000 / 3600000);
        var minutes = Math.floor(distance % 3600000 / 60000);
        var seconds = Math.floor(distance % 60000 / 1000);
        document.getElementById("pres").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("pres").innerHTML = "Polls have closed.";
        }
    }, 1000);
}
countDown();
function form() {
    document.addEventListener("DOMContentLoaded", function() {
        const form = document.getElementById("my-form");
        form.addEventListener("submit", function(e) {
            e.preventDefault(); // Prevent default form submission
            //const formData = new FormData(form); // Get form data
            var form = e.target;
            //console.log(formData); 
            fetch(form.action, {
                method: "POST",
                body: new FormData(form)
            }).then(function(response) {
                return response.json();
            }).then(function(data) {
                console.log(data);
                // Show success message
                document.getElementById("success-message").style.display = "block";
                // Optionally, clear the form fields
                form.reset();
            }).catch(function(error) {
                console.error("Error!", error.message);
            });
        /*.then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.text(); // Assuming the response is text
                })
                .then(data => {
                    // Handle successful response
                    alert("Form submitted successfully!");
                    console.log(data); // You can log the response data if needed
                })
                .catch(error => {
                    // Handle errors
                    console.error('There was a problem with the fetch operation:', error);
                    alert("An error occurred. Please try again.");
                });*/ });
    });
} /*document.getElementById('my-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way
    var form = event.target;

    fetch(form.action, {
        method: 'POST',
        body: new FormData(form)
    }).then(function(response) {
        return response.json();
    }).then(function(data) {
        console.log(data);
        // Show success message
        document.getElementById('success-message').style.display = 'block';
        // Optionally, clear the form fields
        form.reset();
    }).catch(function(error) {
        console.error('Error!', error.message);
    });
}); */  /*
//data
const apiUrl = 'https://api.mobilize.us/v1/organizations/:organization_id/events'; 
const apiKey = 'd635c1172c5df2675bffe1b88d3c7279f71c2d2e'; 
//retrieving event
function getEvents() {
    //fetching response to get data json
    fetch(apiUrl, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${apiKey}`
        }
    })
    //getting data json
    .then(response => {
        if (!response.ok) {
            console.log("Failed to fetch data");
            throw new Error('Network response was not ok');
        }
        return response.json(); 
    })
    //parsing data json
    .then(data => {
        data.forEach(event => {
            const { title, description, timeslots, location } = event;
            document.write(`<h2>${title}</h2>`);
            document.write(`<p>${description}</p>`);
            if (timeslots.length > 0) {
                document.write('<h3>Timeslots:</h3>');
                timeslots.forEach(slot => {
                    document.write(`<p>Start Date: ${new Date(slot.start_date * 1000)}</p>`);
                    document.write(`<p>End Date: ${new Date(slot.end_date * 1000)}</p>`);
                    document.write(`<p>Is Full: ${slot.is_full ? 'Yes' : 'No'}</p>`);
                });
            }
            if (location) {
                document.write('<h3>Location:</h3>');
                document.write(`<p>Venue: ${location.venue}</p>`);
                document.write(`<p>Address: ${location.address_lines.join(', ')}</p>`);
                document.write(`<p>City: ${location.locality}</p>`);
                document.write(`<p>State: ${location.region}</p>`);
                document.write(`<p>Country: ${location.country}</p>`);
                document.write(`<p>Postal Code: ${location.postal_code}</p>`);
            }
        }); 
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
}

// Call the function to get events
getEvents(); */ 

},{}]},["86oZd","1xC6H","6rimH"], "6rimH", "parcelRequire5d9a")

//# sourceMappingURL=index.8cfc62b9.js.map
