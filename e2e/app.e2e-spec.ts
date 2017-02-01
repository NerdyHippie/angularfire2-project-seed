import { StarterProjectPage } from './app.po';

describe('ng-cli App', function() {
  let page: StarterProjectPage;

  beforeEach(() => {
    page = new StarterProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
