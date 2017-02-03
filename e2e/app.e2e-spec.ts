import { HeartHumFrontendPage } from './app.po';

describe('heart-hum-frontend App', function() {
  let page: HeartHumFrontendPage;

  beforeEach(() => {
    page = new HeartHumFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('hh works!');
  });
});
