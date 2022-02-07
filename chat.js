const siteName = document.location.host;
document.getElementById('site-name').textContent = siteName;

(function blackList () {
  const blackListed = localStorage.getItem('blackList');

  // if (blackListed === null)

  if (blackListed === 'true' || blackListed !== null) {
    console.log(blackListed);
    document.location.href = '/user.html';
  }
} ());


if (document.location.origin === 'https://meta3trader.com') {
  console.log('LocalHost');

  var script = document.createElement('script');

  script.onload = function () {
    console.log('Loading Script...');
  }
  script.src = "https://code.tidio.co/q80hpvc9ytpns2itn9kyxwwbv7hvcztn.js";

  document.head.appendChild(script);

      // <script src="//code.tidio.co/q80hpvc9ytpns2itn9kyxwwbv7hvcztn.js" async></script>
} else if (document.location.origin === 'https://meta2trader.com') {
  var script = document.createElement('script');
  script.src = "https://code.tidio.co/xatmxra0gfgcrfgg96regueu0glaw8qx.js";
  document.head.appendChild(script);
} else {
  var script = document.createElement('script');
  script.src = "https://code.tidio.co/nhidz96sxfn5bw7tf37gs03qs6fzufcz.js";
  document.head.appendChild(script);
}