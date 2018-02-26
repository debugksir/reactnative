const request = (url, method='POST') => {
  let URL = `http://192.168.56.1:3000${url}`;
  let body = {
    'name': 'ksir',
    'age': 22
  }
  return fetch(URL, {
    method,
    header: {'Content-Type': 'application/x-www-form-urlencoded'}, 
    body: JSON.stringify(body)
  })
}
export default request;