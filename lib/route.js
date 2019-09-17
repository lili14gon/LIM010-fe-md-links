"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.searchFileoFDirectory = exports.verificFile = exports.routAbsolute = void 0;

var _path = _interopRequireDefault(require("path"));

var _fs = _interopRequireDefault(require("fs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import { arrayExpression } from '@babel/types';
const routAbsolute = route => {
  if (_path.default.isAbsolute(route) === false) {
    return _path.default.resolve(route);
  }

  return route;
};

exports.routAbsolute = routAbsolute;

const verificFile = file => {
  if (_fs.default.statSync(file).isFile()) {
    return true;
  }

  return false;
};

exports.verificFile = verificFile;

const searchFileoFDirectory = route => {
  let array = [];
  const routeFile = routAbsolute(route);

  if (verificFile(routeFile) === true) {
    // console.log(routeFile, path.extname(routeFile) === '.md');
    if (_path.default.extname(routeFile) === '.md') {
      array.push(routeFile);
    }

    return array;
  }

  const file = _fs.default.readdirSync(routeFile);

  for (let i = 0; i < file.length; i += 1) {
    const newDir = _path.default.join(routeFile, file[i]);

    array = array.concat(searchFileoFDirectory(newDir));
  }

  return array;
}; // console.log(verificFile('E:/PROYECTOS DE LABORATORIA/proyecto_4/LIM010-fe-md-links/prueba/folder1'));
// console.log(routAbsolute('E:/PROYECTOS DE LABORATORIA/proyecto_4/LIM010-fe-md-links/prueba/folder1'));
// console.log(fs.readFileSync('E:/PROYECTOS DE LABORATORIA/proyecto_4/LIM010-fe-md-links/prueba/archivo1.md'));


exports.searchFileoFDirectory = searchFileoFDirectory;
console.log(searchFileoFDirectory('E:/PROYECTOS DE LABORATORIA/proyecto_4/LIM010-fe-md-links/prueba/folder1/folder2'));