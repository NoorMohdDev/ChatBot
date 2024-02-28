const apiKey='ebe4030f3c5b68b9359b8125cf53c84e'

export  function apiGet(name) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${apiKey}`
  return url;
}
