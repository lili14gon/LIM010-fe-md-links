import path from 'path';
import fs from 'fs';
// import { arrayExpression } from '@babel/types';

const routAbsolute = (route) => {
  if (path.isAbsolute(route) === false) {
    return path.resolve(route);
  }
  return route;
};

const verificFile = (file) => {
  if (fs.statSync(file).isFile()) {
    return true;
  }
  return false;
};

const searchFileoFDirectory = (route) => {
  let array = [];
  const routeFile = routAbsolute(route);
  if (verificFile(routeFile) === true) {
    // console.log(routeFile, path.extname(routeFile) === '.md');
    if (path.extname(routeFile) === '.md') {
      array.push(routeFile);
    }
    return array;
  }
  const file = fs.readdirSync(routeFile);
  for (let i = 0; i < file.length; i += 1) {
    const newDir = path.join(routeFile, file[i]);
    array = array.concat(searchFileoFDirectory(newDir));
  }
  return array;
};

// console.log(verificFile('E:/PROYECTOS DE LABORATORIA/proyecto_4/LIM010-fe-md-links/prueba/folder1'));
// console.log(routAbsolute('E:/PROYECTOS DE LABORATORIA/proyecto_4/LIM010-fe-md-links/prueba/folder1'));
// console.log(fs.readFileSync('E:/PROYECTOS DE LABORATORIA/proyecto_4/LIM010-fe-md-links/prueba/archivo1.md'));
// console.log(searchFileoFDirectory('E:/PROYECTOS DE LABORATORIA/proyecto_4/LIM010-fe-md-links/prueba/folder1/folder2'));
export {
  routAbsolute,
  verificFile,
  searchFileoFDirectory,
  // fileMardow,
};
