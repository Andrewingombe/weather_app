const key = "gcIstBj7InS7OKU0OKD1QXgVbxZcPPMR"; //free practice account

// get weather information
const getWeather = async (id) => {
  const baseUrl = "https://dataservice.accuweather.com/currentconditions/v1/";
  const query = `${id}?apikey=${key}`;

  const response = await fetch(baseUrl + query);

  const data = await response.json();
  return data[0];
};

// get city information
const getCity = async (city) => {
  const baseUrl =
    "https://dataservice.accuweather.com/locations/v1/cities/search";
  const query = `?apikey=${key}&q=${city}`;

  const response = await fetch(baseUrl + query);

  const data = await response.json();
  return data[0];
};
