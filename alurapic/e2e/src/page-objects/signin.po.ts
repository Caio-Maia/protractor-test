import { browser, element, by, protractor } from 'protractor';
import { Usuarios } from '../obj/usuarios';
import { SimplePage } from '../shared/simplePage.po';

export class SigninPage extends SimplePage {

    // Contains pode ser substituido por text()=''
    login = element(by.xpath(`//h4[contains(text(),'Login')]`));
    botao = element(by.buttonText('login'));
    userName = element(by.xpath(`//a[@class='mr-1']`));
    errorUser = element(by.xpath(`//small[contains(text(),'User name is required!')]`));
    errorPassword = element(by.xpath(`//small[contains(text(),'Password is required!')]`));

    tituloLogin() {
        return this.login.getText();
    }

    acessarLogin() {
        return expect(browser.get(''));
    }

    verificarUrl() {
        return browser.getCurrentUrl();
    }

    pegarInput(formControlName, valor) {
        expect(element(by.formControlName(formControlName)).sendKeys(valor));
    }

    clearInput(xpath) {
        return element(by.xpath(xpath)).clear();
    }

    clicarBotaoLogin() {
        return expect(this.botao.click());
    }

    retornarSpanError(nome: string) {
        const spanError = element(by.xpath(`//small[contains(text(),'${nome} is required!')]`));
        return spanError.isDisplayed();
    }

    async logado() {
        this.esperarElemento(this.userName);
        let nomeLogado = await this.userName.getText();
        return nomeLogado;
    }

    fazerLogin(usuario:Usuarios) {
        this.pegarInput('userName', usuario.userName);
        this.pegarInput('password', usuario.password);
        this.clicarBotaoLogin();
    }
}