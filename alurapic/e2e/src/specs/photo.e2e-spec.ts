import { PhotoFormPage } from '../page-objects/photos/photo-form.po';
import { PhotoListPage } from '../page-objects/photos/photo-list.po';
import { PhotoDetailsPage } from '../page-objects/photos/photo-details.po';
import { SigninPage } from '../page-objects/signin.po'
import { element, browser, by } from 'protractor';
import { Utils } from '../shared/utils';

describe('Testando funcionalidade de fotos', () => {

    let signinPage: SigninPage;
    let photoFormPage: PhotoFormPage;
    let photoListPage: PhotoListPage;
    let photoDetailsPage: PhotoDetailsPage;
    let comentario = 'Foto bonita';
    let util: Utils;
    let loginUsuario = [
        { nome: 'userName', valor: 'flavio' },
        { nome: 'password', valor: '123' }
    ]

    beforeEach(() => {
        
        signinPage = new SigninPage();
        photoFormPage = new PhotoFormPage();
        photoListPage = new PhotoListPage();
        photoDetailsPage = new PhotoDetailsPage();
        util = new Utils();
    });

    it('Deve fazer login', async () => {
        await signinPage.acessarLogin();
        loginUsuario.forEach(usuario => {
            signinPage.pegarInput(usuario.nome, usuario.valor);
        });
        await signinPage.clicarBotaoLogin();
        await util.assertEquals(loginUsuario[0].valor, await signinPage.logado());
    });
/*
    it('Deve navegar para /p/add', async () => {
        await photoFormPage.navegarParaPhotoForm();
    });

    it('Deve cadastrar imagem', async () => {
        photoFormPage.carregarImagem();
        await photoFormPage.comentarImagem(comentario);
        await photoFormPage.clicarBotaoUpload();
    }); */

    it('Busca de imagem', async () => {
        await photoListPage.navegarParaPhotoList(loginUsuario[0].valor);
        await photoListPage.buscarImagem(comentario);
        photoListPage.pegarImagem();
    });

    it('Deve navegar para a foto', async () => {
        await photoDetailsPage.navegarParaDetails();
    });

    it('Deve fazer um comentario', async () => {
        await photoDetailsPage.escreverComentario();
        await photoDetailsPage.clicarBotaoComentar();
    });

    /*it('Deve excluir uma foto', () => {
        photoDetailsPage.pegarBotaoExcluirPhoto().click();
    });*/
});