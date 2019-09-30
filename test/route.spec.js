import path from 'path';
import {
  routAbsolute, verificFile, searchFileoFDirectory, readLinks,
}
  from '../src/route.js';


const rout = 'E:/PROYECT_DE_LAB/proyecto_4/LIM010-fe-md-links/prueba';
const rout1 = './prueba';
const rout3 = 'E:/PROYECT_DE_LAB/proyecto_4/LIM010-fe-md-links/prueba/folder1/folder2';
const input = ['E:\\PROYECT_DE_LAB\\proyecto_4\\LIM010-fe-md-links\\prueba\\archivo1.md',
  'E:\\PROYECT_DE_LAB\\proyecto_4\\LIM010-fe-md-links\\prueba\\archivo2.md',
  'E:\\PROYECT_DE_LAB\\proyecto_4\\LIM010-fe-md-links\\prueba\\folder1\\archivo4.md',
  'E:\\PROYECT_DE_LAB\\proyecto_4\\LIM010-fe-md-links\\prueba\\folder1\\folder2\\archivo6.md'];
const input3 = [{
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

describe('Permite convertir una ruta relativa a absoluta', () => {
  it('debería ser retornar una ruta absoluta', () => {
    expect(routAbsolute(rout1)).toBe('E:\\PROYECT_DE_LAB\\proyecto_4\\LIM010-fe-md-links\\prueba');
  });
});
describe('Verifica si es un archivo o una carpeta', () => {
  it('debería retorna false', () => {
    expect(verificFile(rout)).toBe(false);
  });
  it('debería retorna true', () => {
    expect(verificFile(path.join(process.cwd(), 'prueba\\archivo1.md'))).toBe(true);
  });
});
describe('searchFileoFDirectory', () => {
  it('debería ser una función', () => {
    expect(searchFileoFDirectory(rout))
      .toEqual(input);
  });
});
describe('readLinks', () => {
  it('debería ser una función', () => {
    expect(readLinks(rout3))
      .toEqual(input3);
  });
});
