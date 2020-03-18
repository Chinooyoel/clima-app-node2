const axios = require("axios");

let getClima = async ( longitud, latitud) => {
    try{
        let peticion = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&appid=84799ca28377ef2ff7e493f2d1b800a4`);
    
        

        let data = peticion.data.main.temp;

        //Pasamos de grados kevin a grados celsius
        let clima = data - 273.15;
    
        return clima;
        
    }catch ( err ){
        throw new Error( err )
    } 

}


module.exports = {
    getClima
}