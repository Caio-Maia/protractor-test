import { SigninPage } from '../page-objects/home/signin.po';
import { SignUpPage } from '../page-objects/home/signup.po';
import { Usuarios } from '../obj/usuarios';
import { Utils } from '../utils/utils';

describe('Testando tela home', () => {
    
    let signinPage: SigninPage;
    let signupPage: SignUpPage;
    let util: Utils;
    let usuarioTeste: Usuarios = new Usuarios('usuarioteste', '12345678', 'usuariotest@test.com', 'Usuario Teste');
    let informacoesUsuario = [
        { nome: 'email', valor: 'testebom@teste.com' },
        { nome: 'fullName', valor: 'Test testado' },
        { nome: 'userName', valor: 'testbom' },
        { nome: 'password', valor: '123456789' }
    ]
    let loginUsuario = [
        { nome: 'userName', valor: 'testbom' },
        { nome: 'password', valor: '123456789' }
    ]

    beforeEach(() => {
        signinPage = new SigninPage();
        signupPage = new SignUpPage();
        util = new Utils();
    });
/*
    it('Deve navegar para Signup', () => {
        signupPage.navegarParaSignup();
    });

    it('Deve cadastrar usuario', () => {
        informacoesUsuario.forEach(usuario => {
            signupPage.registrarUsuario(usuario.nome, usuario.valor);
        });
        expect(signupPage.clicarBotaoRegister());
    });
*/
    it('Deve navegar para Home', () => {
        signinPage.acessarHome();
    });

    it('Deve verificar a Url', () => {
        util.assertEquals('http://localhost:4200/#/home', signinPage.verificarUrl());
        //expect(signinPage.verificarUrl()).toBe('http://localhost:4200/#/home');
    });

    it('Deve mostrar User Name is required!', async () => {
        await signinPage.pegarInput(loginUsuario[1].nome, loginUsuario[1].valor);
        await util.assertEquals('User name is required!', signinPage.loginMissUserName());
    });

    it('Deve mostrar Password is required!', async () => {
        signinPage.acessarHome();
        await signinPage.pegarInput(loginUsuario[0].nome, loginUsuario[0].valor);
        await util.assertEquals('User name is required!', signinPage.loginMissPassword());
    });
/*
    it('Deve fazer login', async () => {
        signinPage.acessarHome();
        loginUsuario.forEach(usuario => {
            expect(signinPage.pegarInput(usuario.nome, usuario.valor));
        });
        signinPage.pegarBotaoLogin();
        util.assertEquals(loginUsuario[0].valor, await signinPage.logado());
    }); */
/*
    it('Verificar que Usuario está Logado', async () => {
        console.log(await signinPage.logado());
        await expect(signinPage.logado()).toEqual(loginUsuario[0].valor);
    }); */
});