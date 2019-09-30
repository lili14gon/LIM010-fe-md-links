"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateLinks = void 0;

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

var _route = require("./route.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-console */
// const ruta = 'E:/PROYECT_DE_LAB/proyecto_4/LIM010-fe-md-links/prueba/folder1/folder2';
// funcion que valida el funcionamiento del link
const validateLinks = rout => {
  const arrObjetos = (0, _route.readLinks)(rout);
  const resultPromise = arrObjetos.map(element => new Promise(resolve => {
    const newObjt = { ...element
    };
    (0, _nodeFetch.default)(element.href).then(res => {
      if (res.status >= 200 && res.status < 400) {
        newObjt.status = res.status;
        newObjt.statusText = res.statusText;
      } else {
        newObjt.status = res.status;
        newObjt.statusText = 'fail';
      }

      resolve(newObjt);
    }).catch(() => {
      newObjt.status = 'no existe';
      newObjt.statusText = 'fail';
      resolve(newObjt);
    });
  }));
  return Promise.all(resultPromise);
}; // validateLinks(ruta).then((val) => console.log(val));
// validateLinks(arrayNew).then((val) => console.log(val));


exports.validateLinks = validateLinks;