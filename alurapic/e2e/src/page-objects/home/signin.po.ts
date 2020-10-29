import { browser, element, by } from 'protractor';

export class SigninPage {

    botao = element(by.buttonText('login'));
    userName = element(by.xpath(`//a[@class='mr-1']`));
    errorUser = element(by.xpath(`//small[contains(text(),'User name is required!')]`));
    errorPassword = element(by.xpath(`//small[contains(text(),'Password is required!')]`));
    
    acessarHome() {
        return browser.get('');
    }

    verificarUrl() {
        return browser.getCurrentUrl();
    }

    pegarInput(formControlName, valor) {
        return element(by.formControlName(formControlName)).sendKeys(valor)
    }

    pegarBotaoLogin() {
        return this.botao.click();
    }

    async logado() {
        let nomeLogado = await this.userName.getText();
        return nomeLogado;
    }

    loginInvalid() {
        
    }

    loginMissUserName() {
        return this.errorUser.getText();
    }

    loginMissPassword() {
        return this.errorPassword.getText();
    }
}