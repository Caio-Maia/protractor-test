import { browser, element, by } from 'protractor';

export class SignUpPage {

    botao = element(by.buttonText('Register'));
    errorUser = element(by.xpath(`//small[contains(text(),'User name is required!')]`));
    errorPassword = element(by.xpath(`//small[contains(text(),'Password is required!')]`));
    errorEmail = element(by.xpath(`//small[contains(text(),'Email is required!')]`));
    errorFullName = element(by.xpath(`//small[contains(text(),'Full name is required!')]`));

    navegarParaSignup() {
        return browser.get('/#/home/signup');
    }

    registrarUsuario(formControlName, valor) {
        return element(by.formControlName(formControlName)).sendKeys(valor);
    }

    clicarBotaoRegister() {
        return this.botao.click();
    }

    registerMissUserName() {
        return this.errorUser;
    }

    registerMissPassword() {
        return this.errorPassword;
    }

    registerMissEmail() {
        return this.errorEmail;
    }

    registerMissFullName() {
        return this.errorFullName;
    }
}