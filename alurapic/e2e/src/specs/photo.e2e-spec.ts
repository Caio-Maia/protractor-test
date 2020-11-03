import { PhotoFormPage } from '../page-objects/photos/photo-form.po';
import { PhotoListPage } from '../page-objects/photos/photo-list.po';
import { PhotoDetailsPage } from '../page-objects/photos/photo-details.po';
import { SigninPage } from '../page-objects/signin.po'
import { element, browser, by } from 'protractor';

describe('Testando funcionalidade de fotos', () => {
/*
    let signinPage: SigninPage;
    let photoFormPage: PhotoFormPage;
    let photoListPage: PhotoListPage;
    let photoDetailsPage: PhotoDetailsPage;
    let comentario = 'Foto bonita';

    beforeEach(() => {
        
        signinPage = new SigninPage();
        photoFormPage = new PhotoFormPage();
        photoListPage = new PhotoListPage();
        photoDetailsPage = new PhotoDetailsPage();
    });

    it('Deve fazer login', () => {
        signinPage.acessarHome();
        expect(signinPage.pegarInput('userName', 'flavio'));
        expect(signinPage.pegarInput('password', '123'));
        expect(signinPage.pegarBotaoLogin());
    });

    it('Deve navegar para /p/add', () => {
        photoFormPage.navegarParaPhotoForm();
    });

    it('Deve cadastrar imagem', () => {
        photoFormPage.carregarImagem();
        photoFormPage.comentarImagem(comentario);
        photoFormPage.pegarBotaoUpload().click();
    });

    it('Busca de imagem', () => {
        photoListPage.navegarParaPhotoList();
        photoListPage.buscarImagem(comentario);
        photoListPage.pegarImagem();
    });

    it('Deve navegar para a foto', () => {
        photoDetailsPage.navegarParaDetails();
    });

    it('Deve fazer um comentario', async () => {
        await browser.executeScript('arguments[0].scrollIntoView(true);', photoDetailsPage.pegarBotaoComentar().getWebElement());
        photoDetailsPage.escreverComentario();
        photoDetailsPage.pegarBotaoComentar().click();
    });
*/
    /*it('Deve excluir uma foto', () => {
        photoDetailsPage.pegarBotaoExcluirPhoto().click();
    });*/
});