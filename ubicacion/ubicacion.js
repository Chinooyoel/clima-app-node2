const axios = require("axios");

let getCoordenadas = async ( ubicacion ) => {
    let coordenadas;

    try{
        let peticion = await axios.get("https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php", {
            headers : {
                "x-rapidapi-host": "devru-latitude-longitude-find-v1.p.rapidapi.com",
                "x-rapidapi-key" : "d7c6ae41a1mshd73d0b31a8131e9p13d77cjsn5ad13d8b6bfb",
            },
            params : {
                "location" : ubicacion
            }
        });
        if( peticion.data.Results.length === 0 ){
            throw new Error(`No se encontro las coordenadas de ${ubicacion}`);
        }

        let latitud = peticion.data.Results[0].lat;
        let longitud = peticion.data.Results[0].lon;

        coordenadas = {
            latitud,
            longitud
        }
        
        return coordenadas;

    }catch (err){
        throw new Error(err)
    }
    
}

module.exports = {
    getCoordenadas
}