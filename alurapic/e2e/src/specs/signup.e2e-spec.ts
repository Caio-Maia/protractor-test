import { browser } from 'protractor';
import { Usuarios } from '../obj/usuarios';
import { SignUpPage } from '../page-objects/signup.po';
import { Utils } from '../shared/utils';

describe('Testando tela de Registro', () => {

    const signupPage: SignUpPage = new SignUpPage();
    const util: Utils = new Utils();
    const usuario: Usuarios = new Usuarios('', '', '', '');
    const dummieUser: Usuarios = new Usuarios('testfaakkee', '123456789', 'testefaakkee@teste.com', 'Test testado');

    beforeEach(async () => {
        await signupPage.navegarParaSignup();
    });

    it('Deve navegar para Signup', async () => {
        await util.assertEquals('http://localhost:4200/#/home/signup', signupPage.verificarUrl());
        await util.assertToContain(signupPage.tituloSignup(), 'Register');
    });

    it('Deve mostrar Email is required!', async () => {
        await signupPage.clicarBotaoRegister();
        await util.assertTrue(signupPage.retornarSpanError('Email is required!'));
    });

    it('Deve mostrar Full name is required!', async () => {
        await signupPage.registrarNovoUsuario(usuario);
        browser.sleep(10000);
        await util.assertTrue(signupPage.retornarSpanError('Full name is required!'));
    });

    it('Deve mostrar User name is required!', async () => {
        await signupPage.registrarNovoUsuario(usuario);
        await signupPage.clicarBotaoRegister();
        await util.assertTrue(signupPage.retornarSpanError('User name is required!'));
    });

    it('Deve mostrar Password is required!', async () => {
        await signupPage.registrarNovoUsuario(usuario);
        await signupPage.clicarBotaoRegister();
        await util.assertTrue(signupPage.retornarSpanError('Password is required!'));
    });

    it('Deve mostrar Invalid e-mail', async () => {
        await signupPage.registrarUsuario('email', 'test@tes.');
        await signupPage.clicarBotaoRegister();
        await util.assertTrue(signupPage.retornarSpanError('Invalid e-mail'));
    });

    it('Deve mostrar Username already taken', async () => {
        await signupPage.registrarUsuario('userName', 'test');
        await signupPage.clicarBotaoRegister();
        await util.assertTrue(signupPage.retornarSpanError('Username already taken'));
    });

    it('Deve cadastrar usuario', async () => {
        await signupPage.registrarNovoUsuario(dummieUser);
        await signupPage.clicarBotaoRegister();
        signupPage.esperarElemento(signupPage.login);
        await util.assertEquals('http://localhost:4200/#/home', signupPage.verificarUrl());
    });

    it('Deve verificar se o usuario está cadastrado', async () => {
        await signupPage.registrarNovoUsuario(dummieUser);
        await util.assertTrue(signupPage.retornarSpanError('Username already taken')); // Ele testa vendo se o usuario ja existe
    });

});