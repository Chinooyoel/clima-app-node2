const ubicacion = require("./ubicacion/ubicacion");
const clima = require("./clima/clima");

const argv = require("yargs").option({
    descripcion : {
        alias: "d",
        demand: true,
        desc: "Especificar nombre de la ciudad donde sea obtener el clima"
    }
}).argv;

console.log(argv.descripcion);


let getInfo = async ( direccion ) => {
    try{
        let data = await ubicacion.getCoordenadas( direccion );
        let temperatura = await clima.getClima( data.longitud, data.latitud );

        return `El clima de ${ direccion } es de ${ temperatura }`

    }catch (err ) {
        throw new Error(`No se pudo determinar el clima de ${direccion}`);        
    }

    
}


getInfo( argv.descripcion )
    .then( ( data ) => {
        console.log(data);
    }).catch( ( err ) => {
        console.log(err);
    });