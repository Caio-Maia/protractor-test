import { browser } from 'protractor';
import { Usuarios } from '../obj/usuarios';
import { SigninPage } from '../page-objects/signin.po';
import { Utils } from '../shared/utils';

describe('Testando tela de Login', () => {
    
    const signinPage: SigninPage = new SigninPage();
    const util: Utils = new Utils();
    const usuario: Usuarios = new Usuarios('flavio','123','','');
    const dummieUser: Usuarios = new Usuarios('','','','');
    const loginUsuario = [
        { nome: 'userName', valor: 'testbom' },
        { nome: 'password', valor: '123456789' }
    ]

    beforeEach(async () => {
        await signinPage.acessarLogin();
    });

    it('Deve navegar para o Login', async () => {
        await signinPage.acessarLogin();
        await util.assertEquals('http://localhost:4200/#/home', signinPage.verificarUrl());
        await util.assertEquals(signinPage.tituloLogin(), 'Login');
    });

    it('Deve mostrar User Name is required!', async () => {
        await signinPage.fazerLogin(dummieUser)
        await util.assertTrue(signinPage.retornarSpanError('User name'));
    });

    it('Deve mostrar Password is required!', async () => {
        await signinPage.fazerLogin(dummieUser);
        await util.assertTrue(signinPage.retornarSpanError('Password'));
    });

    it('Deve fazer login', async () => {
        await signinPage.fazerLogin(usuario);
        await signinPage.clicarBotaoLogin();
        await util.assertEquals(usuario.userName, await signinPage.logado());
    });
})