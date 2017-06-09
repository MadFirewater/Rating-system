import { RaitingSystemUIPage } from './app.po';

describe('raiting-system-ui App', () => {
  let page: RaitingSystemUIPage;

  beforeEach(() => {
    page = new RaitingSystemUIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
