import{ mdLinksCli } from '../src/mdLinkCli.js';

const input1 = 'E:/PROYECT_DE_LAB/proyecto_4/LIM010-fe-md-links/prueba/folder1/folder2';
const ouput1 = `E:\\PROYECT_DE_LAB\\proyecto_4\\LIM010-fe-md-links\\prueba\\folder1\\folder2\\archivo6.md https://www.google.com/ Google
E:\\PROYECT_DE_LAB\\proyecto_4\\LIM010-fe-md-links\\prueba\\folder1\\folder2\\archivo6.md https://noodejs.org/dist/latest-v10.x/docs/api/ Node.js
E:\\PROYECT_DE_LAB\\proyecto_4\\LIM010-fe-md-links\\prueba\\folder1\\folder2\\archivo6.md https://www.robotstxt.org/wc/robots.html pagina`;
const ouput2 = 'Total: 3 Unique: 3';
const ouput3 = `E:\\PROYECT_DE_LAB\\proyecto_4\\LIM010-fe-md-links\\prueba\\folder1\\folder2\\archivo6.md  https://www.google.com/ Google 200 OK
E:\\PROYECT_DE_LAB\\proyecto_4\\LIM010-fe-md-links\\prueba\\folder1\\folder2\\archivo6.md  https://noodejs.org/dist/latest-v10.x/docs/api/ Node.js no existe fail
E:\\PROYECT_DE_LAB\\proyecto_4\\LIM010-fe-md-links\\prueba\\folder1\\folder2\\archivo6.md  https://www.robotstxt.org/wc/robots.html pagina 404 fail`;
const ouput4 = 'Total: 3 Unique: 3 broken: 2';

describe('mdLinkCli', () => {
    it('deberia devolver un string', (done) => {
        mdLinksCli(input1,{ val: undefined, stat: undefined }).then((res) => {
        expect(res).toEqual(ouput1);
        done();
      });
    });
    it('deberia devolver un string', (done) => {
        mdLinksCli(input1,{ val: '--stats'}).then((res) => {
        expect(res).toEqual(ouput2);
        done();
      });
    });
    it('deberia devolver un string', (done) => {
        mdLinksCli(input1,{ val: '--validate'}).then((res) => {
        expect(res).toEqual(ouput3);
        done();
      });
    });
    it('deberia devolver un string', (done) => {
        mdLinksCli(input1,{ stat: '--stats',val: '--validate'}).then((res) => {
        expect(res).toEqual(ouput3);
        done();
      });
    });
    it('deberia devolver un string', (done) => {
        mdLinksCli(undefined,{ val: undefined, stat: undefined }).then((res) => {
        expect(res).toEqual('no existe ruta');
        done();
      });
    });
});