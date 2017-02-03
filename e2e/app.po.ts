import { browser, element, by } from 'protractor';

export class HeartHumFrontendPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('hh-root h1')).getText();
  }
}
