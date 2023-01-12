function loadConfig(callb:Function): any {
  let href: string = document.location.origin;
  // if (document.location.href.toLowerCase().includes("e7jez-super-admin")){
  //   href += '/admin';
  // }
  const http = new XMLHttpRequest();
  http.onload = function() {
    const envObj: any =JSON.parse(this.responseText);
    environment.api = 'https://backend-e7gez.onrender.com/api/v1';
    environment.production = envObj.production;
console.log(environment);

    callb();
  }
  console.log(href);

http.open("GET", `${href}/assets/env.production.json`);
http.send();
}

export const environment = {
  init(callback:Function){
    loadConfig(callback);
  },
  api: null,
  production: null,
  host: null,

};
