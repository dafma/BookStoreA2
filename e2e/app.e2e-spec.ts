import { BookStoreA2Page } from './app.po';

describe('book-store-a2 App', function() {
  let page: BookStoreA2Page;

  beforeEach(() => {
    page = new BookStoreA2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
