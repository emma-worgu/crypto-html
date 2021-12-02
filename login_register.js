async function login () {

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  // const url = 'https://crypto-backend1.herokuapp.com/api/user/login/';

  const url = 'http://localhost:5000/api/user/login/';

  const body = {
    email,
    password,
  }

  const req = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }
  });

  const res = await req.json();
  console.log(res);

  if (req.status !==200) {
    alert(res.message);
  } else {
    localStorage.setItem('token', res.token);
    document.location.href = '/dash.html';
  }
};


async function register () {

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const ip = localStorage.getItem('ip');
  // const url = 'https://crypto-backend1.herokuapp.com/api/user/login/';

  const url = 'http://localhost:5000/api/user/register/';

  const body = {
    name,
    email,
    password,
    ip,
  }

  const req = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }
  });

  const res = await req.json();
  console.log(res);

  if (req.status !==200) {
    alert(res.message);
  } else {
    localStorage.setItem('token', res.token);
    document.location.href = '/dash.html';
  }
};