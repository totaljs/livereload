[![MIT License][license-image]][license-url]

[![Support](https://www.totaljs.com/img/button-support.png?v=2)](https://www.totaljs.com/support/)

# LiveReload client-side script

This script tries to connect via WebSocket to `ws://127.0.0.1:35729`. Total.js `debugging` mode (in Total.js `+v3.0.0`) creates a WebSocket listener and if some file is changed then it sends to all listeners a message for reloading a browser.

---

## How do I enable `livereload` on client-side?

Just append this script to your website:

- CDN script: `https://cdn.totaljs.com/livereload.js` (only __250 bytes__ without GZIP compression)

```html
<html>
    <head>
    </head>
    <body>

        Your HTML code.

        <!-- LIVE RELOAD SCRIPT -->
        <script src="https://cdn.totaljs.com/livereload.js" async></script>

    </body>
</html>
```

## How do I enable `livereload` in Total.js app?

Live reload works only with Total.js `+v3.0.0`. So just update your `debug.js` file like this:

```javascript
const options = {};

// (Optinal) custom IP
// options.ip = '127.0.0.1';

// (Optinal) custom port
// options.port = parseInt(process.argv[2]);

// (Optional) Overwrites config
// options.config = { name: 'Total.js' };

// (Optional) Sleeps the
// options.sleep = 3000;

// (Optional) Enables Google Chrome code inspector on the port below:
// options.inspector = 9229;

// (Optional) Your own custom directories in the application's root:
// options.watch = ['adminer'];

// !!! HERE !!!
// !!! HERE !!!
// !!! HERE !!!
// (Optional) Enables live reloading
options.livereload = true;

require('total.js/debug')(options);
```

And run it `$ node debug.js`. That's all.

---

## Good to know

- livereload uses port `35729` with hostname `127.0.0.1`
- it works with Total.js apps only!!!
- you can feel a small delay
- __important__ you can work with only the one instance of Total.js app and livereload feature

## Contact

- (c) 2012-2018 by Peter Širka - <petersirka@gmail.com>
- contact form <https://www.totaljs.com/contact/>
- <info@totaljs.com>

[license-image]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat
[license-url]: license.txt