export function getList() {

  let headers = new Headers();

  headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
  headers.append('Access-Control-Request-Method', 'GET');

    return fetch('https://bdcoe.onrender.com/api/v1/member', {

      mode: 'cors',
      headers: headers
    }).then(data => data.json())
  }