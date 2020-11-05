import { SignUpPage } from '../page-objects/signup.po';
import { Utils } from '../shared/utils';

describe('Testando tela de Registro', () => {

    let signupPage: SignUpPage;
    let util: Utils;
    let informacoesUsuario = [
        { nome: 'email', valor: 'testebom@teste.com' },
        { nome: 'fullName', valor: 'Test testado' },
        { nome: 'userName', valor: 'testbom' },
        { nome: 'password', valor: '123456789' }
    ]

    beforeEach(() => {
        signupPage = new SignUpPage();
        util = new Utils();
    });

    it('Deve navegar para Signup', async () => {
        await signupPage.navegarParaSignup();
    });

    it('Deve verificar a Url', async () => {
        await util.assertEquals('http://localhost:4200/#/home/signup', signupPage.verificarUrl());
    });

    it('Deve mostrar Email is required!', async () => {
        await signupPage.navegarParaSignup();
        await signupPage.clicarBotaoRegister();
        await util.assertTrue(signupPage.retornarSpanError('Email is required!'));
    });

    it('Deve mostrar Full name is required!', async () => {
        await signupPage.navegarParaSignup();
        await signupPage.registrarUsuario('fullName', '');
        await signupPage.clicarBotaoRegister();
        await util.assertTrue(signupPage.retornarSpanError('Full name is required!'));
    });

    it('Deve mostrar User name is required!', async () => {
        await signupPage.navegarParaSignup();
        await signupPage.registrarUsuario('userName', '');
        await signupPage.clicarBotaoRegister();
        await util.assertTrue(signupPage.retornarSpanError('User name is required!'));
    });

    it('Deve mostrar Password is required!', async () => {
        await signupPage.navegarParaSignup();
        await signupPage.registrarUsuario('password', '');
        await signupPage.clicarBotaoRegister();
        await util.assertTrue(signupPage.retornarSpanError('Password is required!'));
    });

    it('Deve mostrar Invalid e-mail', async () => {
        await signupPage.navegarParaSignup();
        await signupPage.registrarUsuario('email', 'test@tes.');
        await signupPage.clicarBotaoRegister();
        await util.assertTrue(signupPage.retornarSpanError('Invalid e-mail'));
    });

    it('Deve mostrar Username already taken', async () => {
        await signupPage.navegarParaSignup();
        await signupPage.registrarUsuario('userName', 'test');
        await signupPage.clicarBotaoRegister();
        await util.assertTrue(signupPage.retornarSpanError('Username already taken'));
    });

    it('Deve cadastrar usuario', async () => {
        await signupPage.navegarParaSignup();
        await informacoesUsuario.forEach(usuario => {
            signupPage.registrarUsuario(usuario.nome, usuario.valor);
        });
        await signupPage.clicarBotaoRegister();
    });

    it('Deve verificar se o usuario está cadastrado', async () => {
        await signupPage.navegarParaSignup();
        await informacoesUsuario.forEach(usuario => {
            signupPage.registrarUsuario(usuario.nome, usuario.valor);
        });
        await util.assertTrue(signupPage.retornarSpanError('Username already taken')); // Ele testa vendo se o usuario ja existe
    });

});