const argv = require('./config/yargs.js').argv;
const colors = require('colors');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar.js');

let command = argv._[0];


switch (command) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(data => console.log(data))
            .catch(err => {
                console.log(err);
            });
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${colors.green(archivo)}`))
            .catch(err => {
                console.log(err);
            });
        break;

    default:
        console.log('Comando no reconocido.');

}