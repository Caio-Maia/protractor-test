import { browser, element, by } from 'protractor';

export class PhotoListPage {

    navegarParaPhotoList() {
        return browser.get('/#/user/flavio');
    }

    buscarImagem(comentario) {
        return element(by.className('rounded')).sendKeys(comentario);
    }

    pegarImagem() {
        return element.all(by.css('.no-gutters .col-4')).get(0);
    }
}