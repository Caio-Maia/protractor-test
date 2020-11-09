import { SimplePage } from '../../shared/simplePage.po';
import { browser, element, by } from 'protractor';

export class PhotoListPage extends SimplePage {

    navegarParaPhotoList(usuario) {
        return browser.get(`/#/user/${usuario}`);
    }

    buscarImagem(comentario) {
        const imagem = element(by.tagName('input')).sendKeys(comentario);
        this.esperarElemento(imagem);
        return imagem;
    }

    pegarImagem() {
        return element.all(by.css('.no-gutters .col-4')).get(0);
    }
}