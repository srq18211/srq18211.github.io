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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "ea04cc86309759a79546a19400356634"
  },
  {
    "url": "api/index.html",
    "revision": "fb219d2604a51265d5d0ed69b4acce2b"
  },
  {
    "url": "assets/css/0.styles.8eb0d87d.css",
    "revision": "4128d7f240c09e8131493c3b9d34a224"
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
    "url": "assets/js/10.1f199d40.js",
    "revision": "8bdcb03c67df13142a87dcf884e82750"
  },
  {
    "url": "assets/js/11.1d05e4d8.js",
    "revision": "ac40e6b550c5a9870eb5c85ec0826cde"
  },
  {
    "url": "assets/js/12.c7b6c735.js",
    "revision": "b09f2f051f561391f11e51aec5c87d30"
  },
  {
    "url": "assets/js/13.19cd4357.js",
    "revision": "b8897f807ba7509b726d95a9e3c9c1b5"
  },
  {
    "url": "assets/js/14.96e1cfbd.js",
    "revision": "36bce259fca5b031d2d963cad7d76994"
  },
  {
    "url": "assets/js/2.30cb91ff.js",
    "revision": "a744f15fe08284eab1884958e25717a5"
  },
  {
    "url": "assets/js/3.7f66c7b4.js",
    "revision": "1741553d3c18ec87d7f7c3110d0a821d"
  },
  {
    "url": "assets/js/4.a2058db3.js",
    "revision": "15fed812b9d84a5fcdfd6b9d510168bf"
  },
  {
    "url": "assets/js/5.30c07cdf.js",
    "revision": "d216ce88d1b807f9d2b164e882290986"
  },
  {
    "url": "assets/js/6.ea8f4363.js",
    "revision": "ba96388c6de3cefda57c78479acac849"
  },
  {
    "url": "assets/js/7.c2cdbb30.js",
    "revision": "3aff198cb3551fbd04b7360d0236bb5d"
  },
  {
    "url": "assets/js/8.71bf051f.js",
    "revision": "09b5fef4bcbe473f09dd22e6ea3ab4dd"
  },
  {
    "url": "assets/js/9.c5693a64.js",
    "revision": "4629e6c6ecab33201edc1b59cc63af82"
  },
  {
    "url": "assets/js/app.3c6b6283.js",
    "revision": "b33a04cee6b10fa088609a8c5d0ed151"
  },
  {
    "url": "docs/backend.html",
    "revision": "fb3ce0353acbb09316cb68e28101bbc1"
  },
  {
    "url": "docs/computer_basic.html",
    "revision": "276ed48da0fdf3061fb8a72a0d33ad3e"
  },
  {
    "url": "docs/devenv.html",
    "revision": "e85376ac78820e59d98dd76e678e2d78"
  },
  {
    "url": "docs/productivity_tool.html",
    "revision": "31d580f1f4640304b99d593b329afe40"
  },
  {
    "url": "docs/server_dev.html",
    "revision": "064d6f2eb78816e408f6749390792efd"
  },
  {
    "url": "docs/shortcut.html",
    "revision": "cf3c5b95c1f2124cfa2ff3c825a63e63"
  },
  {
    "url": "docs/web_basic.html",
    "revision": "0bedb658298f09cbc2dfc57af045f424"
  },
  {
    "url": "docs/web_lib.html",
    "revision": "52df344df6aaf10b76286955b7221a2d"
  },
  {
    "url": "docs/web_toolkit.html",
    "revision": "dcc1df8db26787fbeccc0ea473dc0227"
  },
  {
    "url": "index.html",
    "revision": "00ed889ff00529bca53057b397e2022d"
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
