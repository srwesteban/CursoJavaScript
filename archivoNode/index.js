const winston = require('winston');

const logger = winston.createLogger({
    level: 'debug',
    format: winston.format.json(),
    transports: [
    new winston.transports.Console(),    
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
    ],
});


const funcionalidad = valor =>{
    if(typeof valor === "string"){
        return 'esto es un string';

    }else{
        throw new Error("error personalizado")
    }
};


try{
    const resultado = funcionalidad(8);
    console.log('todo correcto '+ resultado);    

}catch(error){
    console.log(error);
    logger.error('Registro de error');
}