import fs from 'fs';
import { readLinks } from './route.js';
import { validateLinks } from './link.js';

// const ruta = 'E:/PROYECT_DE_LAB/proyecto_4/LIM010-fe-md-links/prueba/folder1/folder2';

const mdLinks = (path, options) => new Promise((resolve,reject) => {
  if (fs.existsSync(path)) {
  if (options.validate === true) {
    resolve(validateLinks(path));
  } else {
    resolve(readLinks(path));
  }

  } else {
    reject(new Error('no existe ruta'));
  }
});
export {
  mdLinks,
};
