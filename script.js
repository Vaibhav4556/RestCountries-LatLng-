// var request = new XMLHttpRequest();

// request.open("GET", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")

// request.send();

// request.onload = function() {

//     var data = JSON.parse(request.response);

//     for (i = 0; i < data.length; i++) {

//         console.log(`Country_name:${data[i].name}
//         Flag:${data[i].flag}
    
//          latitude:${data[i].latlng[0]} longitude:${data[i].latlng[1]} `)

//     }
// }

data = document.getElementById("countryInfo");
const getData = async function() {
  data.innerHTML = "";

  let result = await fetch("https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
  let obj = await result.json();
  console.log(obj);
  console.log(obj.length)
 obj.forEach(object => {
  displayData(object)
 });
}
getData()

const displayData = async function (e){
    data.innerHTML+=`
    <div class="card " style="width: 18rem;">
    <h5 class="card-title"><b> ${e.name}</b></h5>
    <hr>
    <img src='${e.flag}' class="card-img-top" alt="${e.name}">
    <div class="card-body">
      
      <p class="card-text">
      
      <span><b>Population</b></span>:${e.population}<br>
      <span><b>Region </b></span>:${e.region}<br>
      <span><b>Sub-region</b></span> : ${e.subregion}<br>
      <span><b>Capital </b></span>:${e.capital}<br>
      <span><b>latitude</b></span>:${e.latlng[0]} <br>
      <span><b>longitude</b></span>:${e.latlng[1]}<br>
      <span><b>Country_Code</b></span>:${e.alpha3Code}

      </p>
      
    </div>
  </div>
    
    
    `
    
  
  }