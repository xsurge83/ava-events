import { AvaEventsPage } from './app.po';

describe('ava-events App', () => {
  let page: AvaEventsPage;

  beforeEach(() => {
    page = new AvaEventsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
