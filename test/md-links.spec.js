import { mdLinks } from '../src/md-links.js';

const ruta = 'E:/PROYECT_DE_LAB/proyecto_4/LIM010-fe-md-links/prueba/folder1/folder2';
const input1 = [{
  href: 'https://www.google.com/',
  text: 'Google',
  file:
    'E:\\PROYECT_DE_LAB\\proyecto_4\\LIM010-fe-md-links\\prueba\\folder1\\folder2\\archivo6.md',
},
{
  href: 'https://noodejs.org/dist/latest-v10.x/docs/api/',
  text: 'Node.js',
  file:
    'E:\\PROYECT_DE_LAB\\proyecto_4\\LIM010-fe-md-links\\prueba\\folder1\\folder2\\archivo6.md',
},
{
  href: 'https://www.robotstxt.org/wc/robots.html',
  text: 'pagina',
  file:
    'E:\\PROYECT_DE_LAB\\proyecto_4\\LIM010-fe-md-links\\prueba\\folder1\\folder2\\archivo6.md',
}];
const input2 = [{
  href: 'https://www.google.com/',
  text: 'Google',
  file:
    'E:\\PROYECT_DE_LAB\\proyecto_4\\LIM010-fe-md-links\\prueba\\folder1\\folder2\\archivo6.md',
  status: 200,
  statusText: 'OK',
},
{
  href: 'https://noodejs.org/dist/latest-v10.x/docs/api/',
  text: 'Node.js',
  file:
    'E:\\PROYECT_DE_LAB\\proyecto_4\\LIM010-fe-md-links\\prueba\\folder1\\folder2\\archivo6.md',
  status: 'no existe',
  statusText: 'fail',
},
{
  href: 'https://www.robotstxt.org/wc/robots.html',
  text: 'pagina',
  file:
    'E:\\PROYECT_DE_LAB\\proyecto_4\\LIM010-fe-md-links\\prueba\\folder1\\folder2\\archivo6.md',
  status: 404,
  statusText: 'fail',
}];

describe('mdLinks', () => {
  it('deberia ser una funcion asincrona', (done) => {
    mdLinks(ruta, { validate: false }).then((res) => {
      expect(res).toEqual(input1);
      done();
    });
  });
  it('deberia ser una funcion asincrona con validacion', (done) => {
    mdLinks(ruta, { validate: true }).then((res) => {
      expect(res).toEqual(input2);
      done();
    });
  });
  it('deberia ser retornar error', (done) => {
    mdLinks('./archivo').catch((err) => {
      expect(err.message).toBe('no existe ruta');
      done();
    });
  });
});
