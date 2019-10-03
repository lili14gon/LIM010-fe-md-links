"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mdLinksCli = void 0;

var _mdLinks = require("./md-links.js");

var _stats = require("./stats.js");

// const ruta = 'E:/PROYECT_DE_LAB/proyecto_4/LIM010-fe-md-links/prueba/folder1/folder2';
const mdLinksCli = (path, options) => new Promise(resolve => {
  (0, _mdLinks.mdLinks)(path, {
    validate: true
  }).then(res => {
    if (path !== undefined && options.val === undefined && options.stat === undefined) {
      const result = res.map(element => `${element.file} ${element.href} ${element.text}`);
      resolve(result.join('\n'));
    } else if (path !== undefined && options.val === '--stats' && options.stat === '--validate') {
      resolve((0, _stats.statsValidate)(res));
    } else if (path !== undefined && options.val === '--validate') {
      const result1 = res.map(element => `${element.file}  ${element.href} ${element.text} ${element.status} ${element.statusText}`);
      resolve(result1.join('\n'));
    } else if (path !== undefined && options.val === '--stats') {
      resolve((0, _stats.stats)(res));
    } else {
      resolve('ingrese ruta');
    }
  }); // .catch((err) => {
  //   reject(err);
  // });
});

exports.mdLinksCli = mdLinksCli;