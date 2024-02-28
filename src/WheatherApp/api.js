const apiKey=Your_API_KEY'

export  function apiGet(name) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${apiKey}`
  return url;
}
