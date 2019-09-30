import {
  validateLinks,
}
  from '../src/link.js';

const ouput = 'E:/PROYECT_DE_LAB/proyecto_4/LIM010-fe-md-links/prueba/folder1/folder2';

const input1 = [{
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
describe('validateLinks', () => {
  it('debería ser una función asincrona', (done) => {
    validateLinks(ouput).then((res) => {
      expect(res).toEqual(input1);
      done();
    });
  });
});
