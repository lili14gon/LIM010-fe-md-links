"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.readLinks = exports.searchFileoFDirectory = exports.verificFile = exports.routAbsolute = void 0;

var _path = _interopRequireDefault(require("path"));

var _fs = _interopRequireDefault(require("fs"));

var _marked = _interopRequireDefault(require("marked"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const ruta = 'E:/PROYECT_DE_LAB/proyecto_4/LIM010-fe-md-links/prueba/folder1/folder2';
const routAbsolute = route => {
  if (_path.default.isAbsolute(route) === false) {
    const rout1 = _path.default.resolve(route);

    return rout1;
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

const searchFileoFDirectory = rout => {
  let array = [];
  const routeFile = routAbsolute(rout);

  if (verificFile(routeFile) === true) {
    if (_path.default.extname(routeFile) === '.md') {
      array.push(routeFile);
    }
  } else {
    const file = _fs.default.readdirSync(routeFile);

    for (let i = 0; i < file.length; i += 1) {
      const newDir = _path.default.join(routeFile, file[i]);

      array = array.concat(searchFileoFDirectory(newDir));
    }
  }

  return array;
};

exports.searchFileoFDirectory = searchFileoFDirectory;

const readLinks = route => {
  const array = [];
  const rend = new _marked.default.Renderer();
  const file = searchFileoFDirectory(route);
  file.forEach(ele => {
    const routa1 = _fs.default.readFileSync(ele).toString();

    rend.link = (href1, title, text1) => {
      array.push({
        href: href1,
        text: text1,
        file: ele
      });
    };

    (0, _marked.default)(routa1, {
      renderer: rend
    });
  });
  return array;
}; // console.log(readLinks(ruta));
// console.log(routAbsolute('./prueba'));


exports.readLinks = readLinks;