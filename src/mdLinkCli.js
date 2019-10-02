import { mdLinks } from './md-links.js';
import { stats ,statsValidate } from './stats.js';

// const ruta = 'E:/PROYECT_DE_LAB/proyecto_4/LIM010-fe-md-links/prueba/folder1/folder2';


// const mdLinksCli = (path, options) => {
//   let result1 = '';
//   if (path === undefined) {
//     result1 = new Promise((resolve) => resolve('ingrese ruta del archivo'));
//   }
//   return result1;
// };

// 


// cli(rout, val, valStat);

// const mdLinksCli = (path, valid, valStatus) => {
//   if (path !== undefined && valid === undefined && valStatus === undefined) {
//     return mdLinks(path, { validate: false })
//       .then((res) => res.map((element) => `${element.file}// ${element.href}/ ${element.text}`));
//   } if (path !== undefined && valid === '--stat') {
//     return mdLinks(path, { validate: false })
//       .then((res) => {
//         stats(res);
//       });
//   } if (path !== undefined && valid === '--validate') {
//     return mdLinks(path, { validate: true })
//       .then((res) => res.map((element) => `${element.href} ${element.text} ${element.file} ${element.status} ${element.statusText}`));
//   } if (path !== undefined && valid === '--validate' && valStatus === '--stat') {
//     return mdLinks(path, { validate: true })
//       .then((res) => {
//         statsValidate(res);
//       });
//   }
//   return 'ingrese ruta';
// };

const mdLinksCli = (path, options) => new Promise((resolve) => {
  mdLinks(path, { validate: true })
    .then((res) => {
      if (path !== undefined && options.val === undefined && options.stat === undefined) {
        const result = res.map((element) => `${element.file} ${element.href} ${element.text}`);
        resolve(result.join('\n'));
      } else if (path !== undefined && options.val=== '--validate') {
        const result1 = res.map((element) => `${element.file}  ${element.href} ${element.text} ${element.status} ${element.statusText}`);
        resolve(result1.join('\n'));
      } else if (path !== undefined && options.val === '--stats') {
       resolve(stats(res));
      } else if (path !== undefined && options.val === '--stats' && options.stat === '--validate') {
       resolve(statsValidate(res));
      } else {
        resolve('ingrese ruta');
      }
    })
    // .catch((err) => {
    //   reject(err);
    // });
});

export {
  mdLinksCli,
};
