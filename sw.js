if (!self.define) {
    let e, i = {};
    const c = (c, r) => (c = new URL(c + ".js", r).href, i[c] || new Promise((i => {
        if ("document" in self) {
            const e = document.createElement("script");
            e.src = c, e.onload = i, document.head.appendChild(e)
        } else e = c, importScripts(c), i()
    })).then((() => {
        let e = i[c];
        if (!e) throw new Error(`Module ${c} didn’t register its module`);
        return e
    })));
    self.define = (r, f) => {
        const n = e || ("document" in self ? document.currentScript.src : "") || location.href;
        if (i[n]) return;
        let a = {};
        const s = e => c(e, n),
            o = {
                module: {
                    uri: n
                },
                exports: a,
                require: s
            };
        i[n] = Promise.all(r.map((e => o[e] || s(e)))).then((e => (f(...e), a)))
    }
}
define(["./workbox-380edf1d"], (function(e) {
    "use strict";
    self.addEventListener("message", (e => {
        e.data && "SKIP_WAITING" === e.data.type && self.skipWaiting()
    })), e.precacheAndRoute(["/"], {
        ignoreURLParametersMatching: [/^utm_/, /^fbclid$/]
    })
}));
//# sourceMappingURL=sw.js.map
