/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "1681f86bfe7af12ab0f739aff181c65c"
  },
  {
    "url": "api/index.html",
    "revision": "046183a5078cefec8c20b7255f3e54f7"
  },
  {
    "url": "assets/css/0.styles.05224627.css",
    "revision": "6d079eb24adec22d599ddb69f525f6dd"
  },
  {
    "url": "assets/img/chromeVersion.2c235f8f.png",
    "revision": "2c235f8fe59872c665888f0685d3d616"
  },
  {
    "url": "assets/img/chromeVersionExtensions.670b24ae.png",
    "revision": "670b24ae3040bc4a2863d1927a7918f9"
  },
  {
    "url": "assets/img/chromeVersionExtensionsId.22a78c3f.png",
    "revision": "22a78c3f148a7e523c3e27b06d9d0eca"
  },
  {
    "url": "assets/img/download.bf6166ff.png",
    "revision": "bf6166ff1ba6a67342b6a6721b51eef4"
  },
  {
    "url": "assets/img/downloadpage.a5d22fab.png",
    "revision": "a5d22fabd58a8e071c49be36f948eeda"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/search.a93aec27.png",
    "revision": "a93aec27d49e25247e39b5b7558c42b8"
  },
  {
    "url": "assets/img/vscode.213647cc.png",
    "revision": "213647ccc940d5b6f56e35dfc30b0c8a"
  },
  {
    "url": "assets/img/vsplugininstall.5565ee3d.png",
    "revision": "5565ee3d2b2f11f75e9e1ba17ea6938c"
  },
  {
    "url": "assets/js/1.91d178da.js",
    "revision": "e7f47d2a490094bfe30de22dac0a1791"
  },
  {
    "url": "assets/js/10.1f2476b5.js",
    "revision": "9c25913f65d644e157b5d73cbba2fc4c"
  },
  {
    "url": "assets/js/11.fdd9e01e.js",
    "revision": "b6050fbf71ba1a2b63374ea0c2d9451c"
  },
  {
    "url": "assets/js/12.d75c28ef.js",
    "revision": "7bd6d48f35083f813c51113912c401e0"
  },
  {
    "url": "assets/js/13.7e3b4d4d.js",
    "revision": "d51cd5f6f2bbb21b88af8d62c08f00d6"
  },
  {
    "url": "assets/js/14.0ab72b78.js",
    "revision": "220b4696d159c6324a0bc00a2ebda3fd"
  },
  {
    "url": "assets/js/15.b31dc239.js",
    "revision": "c274dcce69494548464fd73520330c14"
  },
  {
    "url": "assets/js/16.34f5a083.js",
    "revision": "c1c30fb97dee616a480e7bf2b86aad34"
  },
  {
    "url": "assets/js/2.624b4b0b.js",
    "revision": "59c92aa0c19b6f2db89ec53bb528c4c4"
  },
  {
    "url": "assets/js/3.a03a035f.js",
    "revision": "8ef54fdfec701091f86ba9bc6df15cd5"
  },
  {
    "url": "assets/js/4.3c47b298.js",
    "revision": "8a378679b91f6c113304b582ebac654a"
  },
  {
    "url": "assets/js/5.7e6d401b.js",
    "revision": "4e4eae75854fcc05685f1484454e0998"
  },
  {
    "url": "assets/js/6.0eda4d1f.js",
    "revision": "b1d678f94c00d7a70beb69639692631f"
  },
  {
    "url": "assets/js/7.97dfd014.js",
    "revision": "396c753776e38cc08a359bb744c03108"
  },
  {
    "url": "assets/js/8.0a01cecb.js",
    "revision": "e7897a9ad401b51c1ebd04446a2202ed"
  },
  {
    "url": "assets/js/9.cda31825.js",
    "revision": "7bb5d7a6d745116d005f1ceefc388a9c"
  },
  {
    "url": "assets/js/app.f71b7fe6.js",
    "revision": "12dc810dc1d8aa724042149bba537133"
  },
  {
    "url": "docs/backend.html",
    "revision": "56860878809835e5c6aa177ca7d2d9a5"
  },
  {
    "url": "docs/computer_basic.html",
    "revision": "5be932916b57bbdeebf1403daae496a0"
  },
  {
    "url": "docs/design_capacity.html",
    "revision": "08c8e7c205dd8e88a2a4767a931c8067"
  },
  {
    "url": "docs/devenv.html",
    "revision": "166306bb5e74122c7ddc2ba00a67eb24"
  },
  {
    "url": "docs/productivity_tool.html",
    "revision": "8c10d2020df7a604bf3e60d545f70fab"
  },
  {
    "url": "docs/server_dev.html",
    "revision": "33ef9b38f3d5cf5c61558f10aae4f2f1"
  },
  {
    "url": "docs/shortcut.html",
    "revision": "d3f7420c22b2bfe4fa7e465911e481e5"
  },
  {
    "url": "docs/std.html",
    "revision": "c9dae33eb8d93b6f1262af845d892e50"
  },
  {
    "url": "docs/tests.html",
    "revision": "b103e7fa5f5d14098f5935d1d2c93847"
  },
  {
    "url": "docs/web_basic.html",
    "revision": "d9914618bd2873d13200e3bda0e88a27"
  },
  {
    "url": "docs/web_lib.html",
    "revision": "8afaa543a20e4bf45a65001e4ba28ff2"
  },
  {
    "url": "docs/web_toolkit.html",
    "revision": "c650ba4edbff2393a79f5a5b39d9ed47"
  },
  {
    "url": "index.html",
    "revision": "edb4ae59e96bb5e77559f2e97061a42e"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
