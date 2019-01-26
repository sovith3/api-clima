const axios = require('axios');

let getClima = async (lat,lng) =>{

    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=e4d79ac79dac48370d15d5229b9ecbf7`);
           
    return resp.data.main.temp;
}

module.exports = {
    getClima
}
