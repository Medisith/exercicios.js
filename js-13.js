class RiskyObject {
    constructor(nome, id, minYear, maxYear) {
      this.nome = nome;
      this.id = id;
      this.minYear = minYear;
      this.maxYear = maxYear;
    }
  };
  
  export { RiskyObject }
  
  async function getData() {
  
    const response = await fetch('https://api.nasa.gov/neo/rest/v1/neo/sentry?is_active=true&page=0&size=50&api_key=DEMO_KEY');
    const result = await response.json();
  
    return result.sentry_objects;
  };
  
  export { getData }
  
  import "core-js"
  import "regenerator-runtime/runtime"
  import { RiskyObject } from './sentry'
  import { getData } from './fetch'
  
  async function addObjectToList() {
  
    let riskyObjectsList = [];
    let data = await getData();
  
    data.forEach(object => {
      const riskyObject = new RiskyObject(object.fullname, object.sentryId, object.year_range_min, object.year_range_max)
      riskyObjectsList.push(riskyObject)
    });
  
    showList(riskyObjectsList);
  };
  
  function showList(riskyObjectsList) {
    const dangerList = document.querySelector('#sentryList');
    
    riskyObjectsList.forEach(object => {
      const li = document.createElement('li')
      li.classList.add('list-group-item')
      const text = `${object.id} | ${object.nome} risco de colisão entre ${object.minYear} e ${object.maxYear}.`
      li.innerText = text
      dangerList.appendChild(li)
    });
  };
  
  addObjectToList();
