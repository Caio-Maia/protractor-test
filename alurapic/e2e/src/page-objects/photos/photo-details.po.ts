import { browser, element, by } from 'protractor';

export class PhotoDetailsPage {

    navegarParaDetails() {
        return browser.get('#/p/5');
    }

    escreverComentario() {
        return element(by.formControlName('comment')).sendKeys('comentario');
    }

    clicarBotaoComentar() {
        return expect(element(by.partialButtonText('Publish')).click());
    }

    pegarBotaoComentar() {
        return expect(element(by.partialButtonText('Publish')).getWebElement());
    }

    clicarBotaoExcluirPhoto() {
        return expect(element(by.css('.fa-trash-o')).click());
    }
}