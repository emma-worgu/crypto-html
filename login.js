async function data () {

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const url = 'https://crypto-backend1.herokuapp.com/api/user/login/';

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

  
};