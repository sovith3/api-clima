const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion:{
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima'
    }
}).argv;

/*lugar.getLngLat(argv.direccion)
.then( resp =>{
    console.log(resp);
})
.catch(e => console.log(e));*/


let getInfo = async()=>{

    try{
        let coords = await lugar.getLngLat(argv.direccion);
        let temp = await clima.getClima(coords.lat,coords.lng);
        return `EL clima en ${coords.direccion} es de ${temp}`;
    }catch(e){
        console.log('Error: ',e);
    }

};

getInfo(argv.direccion).then(mensaje =>console.log(mensaje))
.catch(e =>{console.log(e);})
/*clima.getClima(-34.396305, -70.942626)
.then(clima => {
    console.log(`Temperatura actual: ${clima} grados Celcius. LAS PATAGUAS`);
    clima.getClima(-34.396305, -70.942626)
})
.catch(e => console.log(e));*/