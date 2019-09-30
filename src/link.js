/* eslint-disable no-console */
import fetch from 'node-fetch';
import { readLinks } from './route.js';

// const ruta = 'E:/PROYECT_DE_LAB/proyecto_4/LIM010-fe-md-links/prueba/folder1/folder2';

// funcion que valida el funcionamiento del link
export const validateLinks = (rout) => {
  const arrObjetos = readLinks(rout);
  const resultPromise = arrObjetos.map((element) => new Promise((resolve) => {
    const newObjt = { ...element };
    fetch(element.href)
      .then((res) => {
        if (res.status >= 200 && res.status < 400) {
          newObjt.status = res.status;
          newObjt.statusText = res.statusText;
        } else {
          newObjt.status = res.status;
          newObjt.statusText = 'fail';
        }
        resolve(newObjt);
      })
      .catch(() => {
        newObjt.status = 'no existe';
        newObjt.statusText = 'fail';
        resolve(newObjt);
      });
  }));
  return Promise.all(resultPromise);
};
// validateLinks(ruta).then((val) => console.log(val));
// validateLinks(arrayNew).then((val) => console.log(val));
