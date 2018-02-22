const apiKey = process.env.API_KEY;
const url = 'https://api.apixu.com/v1/current.json?key=';

const forecast = {
  getCurrent() {

  const searchTerm = document.getElementsByName("search-a-location")[0].value;

  fetch(url + apiKey + '&q=' + searchTerm).then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Request failed!');
  }, networkError => console.log(networkError.message)
  ).then(jsonResponse => {
      // Code to execute with jsonResponse
      if(jsonResponse.current) {
          let temp = document.getElementById('temp');
          let rain = document.getElementById('rain');
          let wind = document.getElementById('wind');

          temp.value = jsonResponse.current.temp_c;
          rain.value = jsonResponse.current.precip_mm;
          wind.value = jsonResponse.current.wind_mph;
      }
    });
  }
}

export default forecast;
