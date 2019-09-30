import {
  stats,
  statsValidate,
}
  from '../src/stats.js';

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
describe('stats', () => {
  it('debería ser una función', () => {
    expect(stats(obj)).toBe('Total: 4 Unique: 3');
  });
});
describe('statsValidate', () => {
  it('debería ser una función', () => {
    expect(statsValidate(obj)).toBe('Total: 4 Unique: 3 broken: 1');
  });
});
