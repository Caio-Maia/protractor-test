import { SimplePage } from '../../shared/simplePage.po';
import { browser, element, by } from 'protractor';

export class PhotoDetailsPage extends SimplePage {

    navegarParaDetails() {
        return browser.get('#/p/5');
    }

    escreverComentario() {
        const textArea = element(by.xpath("//body/app-root[1]/ng-component[1]/div[1]/div[1]/div[2]/ap-photo-comments[1]/div[1]/div[1]/form[1]/div[1]/textarea[1]"));
        this.esperarElemento(textArea);
        return textArea.sendKeys('comentario');
    }

    clicarBotaoComentar() {
        const botao = element(by.partialButtonText('Publish'));
        browser.executeScript('arguments[0].scrollIntoView(true);', this.pegarBotaoComentar());
        this.esperarElemento(botao);
        return expect(botao.click());
    }

    pegarBotaoComentar() {
        const botao = element(by.partialButtonText('Publish')).getWebElement();
        this.esperarElemento(botao);
        return botao;
    }

    clicarBotaoExcluirPhoto() {
        return expect(element(by.css('.fa-trash-o')).click());
    }
}