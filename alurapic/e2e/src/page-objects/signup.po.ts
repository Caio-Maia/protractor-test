import { browser, element, by} from 'protractor';
import { SimplePage } from '../shared/simplePage.po';

export class SignUpPage extends SimplePage{

    botao = element(by.xpath(`//button[@class='btn btn-primary btn-block']`));
    errorUser = element(by.xpath(`//small[contains(text(),'User name is required!')]`));
    errorPassword = element(by.xpath(`//small[contains(text(),'Password is required!')]`));
    errorEmail = element(by.xpath(`//small[contains(text(),'Email is required!')]`));
    errorFullName = element(by.xpath(`//small[contains(text(),'Full name is required!')]`));

    navegarParaSignup() {
        return browser.get('/#/home/signup');
    }

    verificarUrl() {
        return browser.getCurrentUrl();
    }

    registrarUsuario(formControlName, valor) {
        return element(by.formControlName(formControlName)).sendKeys(valor);
    }

    async clicarBotaoRegister() {
        return expect(this.botao.click());
    }

    retornarSpanError(erroName: string) {
        const spanError = element(by.xpath(`//small[contains(text(),'${erroName}')]`));
        this.esperarElemento(spanError);
        return spanError.isDisplayed();
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

    esperarElementoAparecer(erroName) {
        expect(element(by.xpath(`//small[contains(text(),'${erroName}')]`)).isDisplayed()).toBe(true);
    }

}