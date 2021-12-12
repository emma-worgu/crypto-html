if (document.location.origin === 'http://localhost:5502') {
  console.log('LocalHost');

  var script = document.createElement('script');

  script.onload = function () {
    console.log('Loading Script...');
  }
  script.src = "https://code.tidio.co/q80hpvc9ytpns2itn9kyxwwbv7hvcztn.js";

  document.head.appendChild(script);

      // <script src="//code.tidio.co/q80hpvc9ytpns2itn9kyxwwbv7hvcztn.js" async></script>
} else {
  var script = document.createElement('script');

  script.onload = function () {
    console.log('Loading Script...');
  }
  script.src = "//code.tidio.co/xatmxra0gfgcrfgg96regueu0glaw8qx.js";

  document.head.appendChild(script);
}