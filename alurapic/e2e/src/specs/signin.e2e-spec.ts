import { browser } from 'protractor';
import { SigninPage } from '../page-objects/signin.po';
import { Utils } from '../shared/utils';

describe('Testando tela de Login', () => {
    
    let signinPage: SigninPage;
    let util: Utils;
    let loginUsuario = [
        { nome: 'userName', valor: 'testbom' },
        { nome: 'password', valor: '123456789' }
    ]

    beforeEach(() => {
        signinPage = new SigninPage();
        util = new Utils();
    });

    it('Deve navegar para o Login', async () => {
        await signinPage.acessarLogin();
    });

    it('Deve verificar a Url', async () => {
        await util.assertEquals('http://localhost:4200/#/home', signinPage.verificarUrl());
    });

    it('Deve mostrar User Name is required!', async () => {
        await signinPage.pegarInput(loginUsuario[1].nome, loginUsuario[1].valor);
        await util.assertTrue(signinPage.retornarSpanError('User name'));
        //await signinPage.clearInput(loginUsuario[1].nome);
    });

    it('Deve mostrar Password is required!', async () => {
        signinPage.acessarLogin();
        await signinPage.pegarInput(loginUsuario[0].nome, loginUsuario[0].valor);
        await util.assertTrue(signinPage.retornarSpanError('Password'));
        //await signinPage.clearInput(loginUsuario[0].nome);
    });

    it('Deve fazer login', async () => {
        await signinPage.acessarLogin();
        loginUsuario.forEach(usuario => {
            signinPage.pegarInput(usuario.nome, usuario.valor);
        });
        await signinPage.clicarBotaoLogin();
        await util.assertEquals(loginUsuario[0].valor, await signinPage.logado());
    });
})