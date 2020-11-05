import { protractor, browser } from 'protractor'

export class SimplePage {
    esperarElemento(elemento) {
        var until = protractor.ExpectedConditions;
        browser.wait(until.presenceOf(elemento), 5000, 'O elemento está demorando demais para aparecer no DOM');
    }
}