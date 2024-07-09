// Перепишите один из примеров раздела Цепочка промисов, 
// используя async/await вместо .then/catch:

async function loadJson(url) {
  let res = await fetch(url)
  
  if (res.status == 200) {
    let json = await res.json();
    return json;
  }
}

loadJson('no-such-user.json') // (3)
  .catch(alert); // Error: 404