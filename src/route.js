import path from 'path';
import fs from 'fs';
import marked from 'marked';

// const ruta = 'E:/PROYECT_DE_LAB/proyecto_4/LIM010-fe-md-links/prueba/folder1/folder2';

const routAbsolute = (route) => {
  if (path.isAbsolute(route) === false) {
    const rout1 = path.resolve(route);
    return rout1;
  }
  return route;
};
const verificFile = (file) => {
  if (fs.statSync(file).isFile()) {
    return true;
  }
  return false;
};

const searchFileoFDirectory = ((rout) => {
  let array = [];
  const routeFile = routAbsolute(rout);
  if (verificFile(routeFile) === true) {
    if (path.extname(routeFile) === '.md') {
      array.push(routeFile);
    }
  } else {
    const file = fs.readdirSync(routeFile);
    for (let i = 0; i < file.length; i += 1) {
      const newDir = path.join(routeFile, file[i]);
      array = array.concat(searchFileoFDirectory(newDir));
    }
  }
  return array;
});

const readLinks = (route) => {
  const array = [];
  const rend = new marked.Renderer();
  const file = searchFileoFDirectory(route);
  file.forEach((ele) => {
    const routa1 = fs.readFileSync(ele).toString();
    rend.link = (href1, title, text1) => {
      array.push({
        href: href1,
        text: text1,
        file: ele,
      });
    };
    marked(routa1, { renderer: rend });
  });
  return array;
};
// console.log(readLinks(ruta));
// console.log(routAbsolute('./prueba'));

export {
  routAbsolute,
  verificFile,
  searchFileoFDirectory,
  readLinks,
};
