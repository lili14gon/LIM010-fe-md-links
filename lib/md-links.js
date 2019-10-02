"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mdLinks = void 0;

var _fs = _interopRequireDefault(require("fs"));

var _route = require("./route.js");

var _link = require("./link.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const ruta = 'E:/PROYECT_DE_LAB/proyecto_4/LIM010-fe-md-links/prueba/folder1/folder2';
const mdLinks = (path, options) => new Promise((resolve, reject) => {
  if (_fs.default.existsSync(path)) {
    if (options.validate === true) {
      resolve((0, _link.validateLinks)(path));
    } else {
      resolve((0, _route.readLinks)(path));
    }
  } else {
    reject(new Error('no existe ruta'));
  }
});

exports.mdLinks = mdLinks;