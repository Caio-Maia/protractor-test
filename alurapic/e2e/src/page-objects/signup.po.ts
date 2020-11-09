import { browser, element, by, protractor} from 'protractor';
import { Usuarios } from '../obj/usuarios';
import { SimplePage } from '../shared/simplePage.po';

export class SignUpPage extends SimplePage{

    // Contains pode ser substituido por text()=''
    register = element(by.xpath(`//h4[contains(text(),'Register to embrace a new world!')]`));
    login = element(by.xpath(`//h4[contains(text(),'Login')]`));
    botao = element(by.xpath(`/html[1]/body[1]/app-root[1]/ng-component[1]/div[1]/div[1]/div[2]/ng-component[1]/form[1]/button[1]`));
    errorUser = element(by.xpath(`//small[contains(text(),'User name is required!')]`));
    errorPassword = element(by.xpath(`//small[contains(text(),'Password is required!')]`));
    errorEmail = element(by.xpath(`//small[contains(text(),'Email is required!')]`));
    errorFullName = element(by.xpath(`//small[contains(text(),'Full name is required!')]`));

    tituloSignup() {
        return this.register.getText();
    }

    tituloLogin() {
        return this.login.getText();
    }

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
        var EC = protractor.ExpectedConditions;
        browser.wait(EC.elementToBeClickable(this.botao), 5000);
        this.botao.click();
        browser.sleep(500);
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

    registrarNovoUsuario(usuario:Usuarios) {
        var keyNames = Object.keys(usuario);
        keyNames.forEach((key) => {
            this.registrarUsuario(key, usuario[key]);
        });
        this.clicarBotaoRegister();
    }

}