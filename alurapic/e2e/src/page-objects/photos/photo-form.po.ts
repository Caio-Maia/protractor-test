import { browser, element, by } from 'protractor';
const path = require('path');
const image = '../../../../src/assets/img/home.jpg';

export class PhotoFormPage {

    navegarParaPhotoForm() {
        return browser.get('/#/p/add');
    }

    carregarImagem() {
        const dirImage = path.resolve(__dirname, image);
        element(by.css('input[type=file]')).sendKeys(dirImage);
    }

    comentarImagem(comentario) {
        return expect(element(by.formControlName('description')).sendKeys(comentario));
    }

    clicarBotaoUpload() {
        return expect(element(by.buttonText('Upload')).click());
    }
}