const axios = require('axios');

const getLngLat = async (direccion) =>{

let encodeUrl = encodeURI(direccion);
let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ direccion }&key=AIzaSyB4f-GaKvSLSjiejZmxW9GyTaOWNmpdzpg
`);
if(resp.data.status === 'ZERO_RESULTS'){
    throw new Error(`No hay resultados para la ciudad ${direccion}`);
}

    let location = resp.data.results[0];
    let formatted_address = location.formatted_address;
    let lat = location.geometry.location.lat;
    let lng = location.geometry.location.lng;
    //console.log(JSON.stringify(resp.data,undefined,2));

    return {
        direccion : formatted_address,
        lat:lat,
        lng:lng
    }
}

module.exports = {
    getLngLat
}