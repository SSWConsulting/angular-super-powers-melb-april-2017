import { FirebootcampCrmPage } from './app.po';

describe('firebootcamp-crm App', () => {
  let page: FirebootcampCrmPage;

  beforeEach(() => {
    page = new FirebootcampCrmPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('fbc works!');
  });
});
