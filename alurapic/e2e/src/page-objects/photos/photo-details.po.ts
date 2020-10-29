import { browser, element, by } from 'protractor';

export class PhotoDetailsPage {

    navegarParaDetails() {
        return browser.get('#/p/5');
    }

    escreverComentario() {
        return element(by.formControlName('comment')).sendKeys('comentario');
    }

    pegarBotaoComentar() {
        return element(by.partialButtonText('Publish'));
    }

    pegarBotaoExcluirPhoto() {
        return element(by.css('.fa-trash-o'));
    }
}