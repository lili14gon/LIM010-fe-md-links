/* eslint-disable no-console */
// import { validateLinks } from './link.js';
// import { readLinks } from './route.js';

// const ruta = 'E:/PROYECTOS DE LABORATORIA/proyecto_4/LIM010-fe-md-links/prueba/folder1';
// const arrayNew = readLinks(ruta);
const obj = [
  {
    href:
       'https://translate.google.com/?hl=es#view=home&op=translate&sl=en&tl=es&text=serializes%20to%20the%20same%20string',
    text: 'link1',
    file:
       'E:\\PROYECTOS DE LABORATORIA\\proyecto_4\\LIM010-fe-md-links\\prueba\\folder1\\archivo4.md',
    status: 200,
    statusText: 'OK',
  },
  {
    href:
    'https://translate.google.com/?hl=es#view=home&op=translate&sl=en&tl=es&text=serializes%20to%20the%20same%20string',
    text: 'link1',
    file:
    'E:\\PROYECTOS DE LABORATORIA\\proyecto_4\\LIM010-fe-md-links\\prueba\\folder1\\archivo4.md',
    status: 200,
    statusText: 'OK',
  },
  {
    href: 'https://console.firebase.google.com/?hl=es-419',
    text: 'Firebase',
    file:
    'E:\\PROYECTOS DE LABORATORIA\\proyecto_4\\LIM010-fe-md-links\\prueba\\folder1\\folder2\\archivo6.md',
    status: 200,
    statusText: 'OK',
  },
  {
    href: 'https://www.robotstxt.org/wc/robots.html',
    text: 'pagina',
    file:
    'E:\\PROYECTOS DE LABORATORIA\\proyecto_4\\LIM010-fe-md-links\\prueba\\folder1\\folder2\\archivo6.md',
    status: 404,
    statusText: 'fail',
  },
];
export const stats = (arrayObject) => {
  const arrayUnique = arrayObject.map((element) => {
    return element.href;
  });
  return `Total: ${arrayObject.length} Unique: ${(new Set(arrayUnique)).size}`;
};
export const statsValidate = (arrayObject) => {
  const arrayOk = [];
  const arrayUnique = arrayObject.map((element) => {
    if (element.statusText !== 'OK') {
      arrayOk.push(element.statusText);
    }
    return element.href;
  });
  return `Total: ${arrayObject.length} Unique: ${(new Set(arrayUnique)).size} broken: ${arrayOk.length}`;
};
