import { routAbsolute, verificFile, searchFileoFDirectory } from '../src/route.js';

describe('routAbsolute', () => {
  it('debería ser una función', () => {
    expect( routAbsolute('E:/PROYECTOS DE LABORATORIA/proyecto_4')).toBe('E:/PROYECTOS DE LABORATORIA/proyecto_4');
  });
});
describe('verificFile', () => {
  it('debería ser una función', () => {
    expect( verificFile('E:/PROYECTOS DE LABORATORIA/proyecto_4/LIM010-fe-md-links')).toBe(false);
  });
});
describe('searchFileoFDirectory', () => {
  it('debería ser una función', () => {
    expect( searchFileoFDirectory('E:\\PROYECTOS DE LABORATORIA\\proyecto_4\\LIM010-fe-md-links\\prueba\\folder1\\folder2'))
    .toStrictEqual(['E:\\PROYECTOS DE LABORATORIA\\proyecto_4\\LIM010-fe-md-links\\prueba\\folder1\\folder2\\archivo6.md']);
  });
});
