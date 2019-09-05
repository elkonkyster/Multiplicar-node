//requireds
const fs = require('fs');
const colors = require('colors');

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        let data = '';

        if (!Number(base)) {
            reject(`El Numero base: ${base} no es un Número.`);
            return;
        }

        if (!Number(limite)) {
            reject(`El Numero limite: ${limite} no es un Número.`);
            return;
        }
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`archivos/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err)
            else resolve('The file has been saved!');
        });

    });
}


let listarTabla = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        let data = '';

        if (!Number(base)) {
            reject(`El Numero base: ${base} no es un Número.`);
            return;
        }


        if (!Number(limite)) {
            reject(`El Numero limite: ${limite} no es un Número.`);
            return;
        }

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        resolve(data);

    });
}


module.exports = {
    crearArchivo,
    listarTabla
}