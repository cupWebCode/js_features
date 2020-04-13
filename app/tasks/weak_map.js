const wMap = new WeakMap();
let key = {
  id: '7fd970bc7528397aae8f324d8cdd067a91fe90b0',
  first_name: 'Stanley',
  last_name: 'Campe'
};

wMap.set(key, {
  email: 'scampe0@issuu.com',
  gender: 'Male',
  ip_address: '63.105.44.148'
});

console.log(wMap.get(key).email); //scampe0@issuu.com
key = null;
console.log(wMap.get(key).email); //Cannot read property 'email' of undefined

//Keys can be only as objects