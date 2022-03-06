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
    })), e.precacheAndRoute([{
        url: "Blog/Blog.html",
        revision: "79611cb0b171f2981169edfa968cdd5f"
    }, {
        url: "Blog/Hello.html",
        revision: "e2b08e631ec4b32cea8b941d27e5806c"
    }, {
        url: "favicon.ico",
        revision: "db438ba734dcb243233cf55cd57fb416"
    }, {
        url: "Gallery/1.png",
        revision: "8f55319168db9ef3c41350dbfcba3dcf"
    }, {
        url: "Gallery/10.png",
        revision: "090c81e891c0adaf5fbb169a2e0ae459"
    }, {
        url: "Gallery/2.png",
        revision: "40f914efe230a956f08fcc8df9496055"
    }, {
        url: "Gallery/3.png",
        revision: "b84294ee0a2e0b190a91461008adc859"
    }, {
        url: "Gallery/4.png",
        revision: "7ae24abd156893e3a9bd29b2f4ff218e"
    }, {
        url: "Gallery/5.png",
        revision: "04573b61bfac69e745c7df467f5182bd"
    }, {
        url: "Gallery/6.png",
        revision: "c8f37020d37aa468b3371902d7e967ae"
    }, {
        url: "Gallery/7.png",
        revision: "6edeee3432dcbbaee96a6b8cd94c49a2"
    }, {
        url: "Gallery/8.png",
        revision: "a752554eb22855596cdda2830588372b"
    }, {
        url: "Gallery/9.png",
        revision: "8864dbc2ba673b8853f9b27701164ae4"
    }, {
        url: "Gallery/Gallery.html",
        revision: "e3ac8da84b7708e80ff3edfbea364bf0"
    }, {
        url: "images/favicon.svg",
        revision: "9356ad686c2b24db38d6e7ee3b7284a5"
    }, {
        url: "images/ficon-1080x1080.png",
        revision: "45debd4ef141617d34a158c9573cc9b9"
    }, {
        url: "images/ficon-128x128.png",
        revision: "ad3e4e94e9a718f4c3384326a184967d"
    }, {
        url: "images/ficon-16x16.png",
        revision: "8419ea42a16a8483bffeaf0cd5b349a6"
    }, {
        url: "images/ficon-180x180.png",
        revision: "332ec4e839a6d05adf27ac52e81594d3"
    }, {
        url: "images/ficon-192x192.png",
        revision: "c75794192e87812b7db0967f34794688"
    }, {
        url: "images/ficon-256x256.png",
        revision: "2d61042301e6afb01bae1e83ec3550bc"
    }, {
        url: "images/ficon-32x32.png",
        revision: "bac5bc57c6f2354595984337e028bc9f"
    }, {
        url: "images/ficon-384x384.png",
        revision: "c8419de2b19af3af8205fec3d5f07a82"
    }, {
        url: "images/ficon-512x512.png",
        revision: "efd3fec1581d8fa04244e941e67cc292"
    }, {
        url: "images/ficon-64x64.png",
        revision: "2fd971ae706e3415d408c7ce39c5680d"
    }, {
        url: "images/ficon-8x8.png",
        revision: "1aac5e4f89e139854692972360331d5d"
    }, {
        url: "images/gen.sh",
        revision: "8399d4aed6d24635ce02e81027d06782"
    }, {
        url: "images/icon-1080x1080.png",
        revision: "629f05451fc84dc4c67bb596971554b3"
    }, {
        url: "images/icon-128x128.png",
        revision: "11458bfe4d36336cdc5c1b4d47e49453"
    }, {
        url: "images/icon-16x16.png",
        revision: "4e4fd25bf54f3605c7afadc49bbe571e"
    }, {
        url: "images/icon-180x180.png",
        revision: "d99c8e30c0fe3c9f5a0cb608b46340c9"
    }, {
        url: "images/icon-192x192.png",
        revision: "7fe8c0f8f52c30fa743249f498445015"
    }, {
        url: "images/icon-256x256.png",
        revision: "d876564e5d36db32a199b58466499c76"
    }, {
        url: "images/icon-32x32.png",
        revision: "4f736365174b7b71f3e88873af993bab"
    }, {
        url: "images/icon-384x384.png",
        revision: "97600d568ff06adc5e16166ae4fb6aec"
    }, {
        url: "images/icon-512x512.png",
        revision: "70c16e2763416a084ce3f778bb06afc1"
    }, {
        url: "images/icon-64x64.png",
        revision: "dbe7f809f8d069e1c2cfa4609da998d9"
    }, {
        url: "images/icon-8x8.png",
        revision: "ed4be3aee9ef1ec0e9e9ff9824106300"
    }, {
        url: "index.html",
        revision: "eb12609e92c056f9ee8dbf9720f4cfe4"
    }, {
        url: "index.js",
        revision: "bf8cebe89e1894f4308b61fa59f61dd4"
    }, {
        url: "Inter-Regular.woff2",
        revision: "c15d893048f07fec5dfeb87bcc92fb4e"
    }, {
        url: "manifest.json",
        revision: "6bc1a03c8c16ce76fccaab19facba6f8"
    }, {
        url: "manifest.webmanifest",
        revision: "bb346192ac2f22578da2f0dc5bdd583e"
    }, {
        url: "Poems/Entangled.html",
        revision: "562e34ce945fb680c8e5d6cfa3e6f17f"
    }, {
        url: "Poems/FillingEmptyness.html",
        revision: "f44e03622fea3d7b9f17373756c91d36"
    }, {
        url: "Poems/OnceAainInEternity.html",
        revision: "f8ebb3e52b96ca2f69fe537b8863ccf9"
    }, {
        url: "Poems/OneForTruth.html",
        revision: "b78c289a9c4b7f6324ce4e9cdc703e79"
    }, {
        url: "Poems/Poems.html",
        revision: "7fa1823610192e14e3651884a84070af"
    }, {
        url: "Poems/Ragnarök'sMercy.html",
        revision: "c09cb2c9ad66453e52c708664ce53992"
    }, {
        url: "Poems/Resurrected.html",
        revision: "eb8cc2a631c7098e32d8153f1cbd4f98"
    }, {
        url: "Poems/Self Conflict.html",
        revision: "8827bf631799c3115beb82aeb9f5da32"
    }, {
        url: "README.md",
        revision: "5fb9967b77dbcf37afe1b731b2da61c8"
    }, {
        url: "robots.txt",
        revision: "06d656f00d93e16f42d1531b7fb49588"
    }, {
        url: "SECURITY.md",
        revision: "b1060e70aaff0e2baed6fc1d91ebe9b3"
    }, {
        url: "serviceworker.js",
        revision: "981fbaafec9972a84e1a8f236d33fa2c"
    }, {
        url: "sitemap.xml",
        revision: "c7ea644e655411c1fec057a85c430af5"
    }, {
        url: "style.css",
        revision: "dd73328522569845de0d596d3f64a12b"
    }, {
        url: "webpack.config.js",
        revision: "47476fd4a4268cc9199426283445615e"
    }], {
        ignoreURLParametersMatching: [/^utm_/, /^fbclid$/, /^none/]
    })
}));
//# sourceMappingURL=sw.js.map
