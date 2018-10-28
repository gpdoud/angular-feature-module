import { AngularFeatureModulePage } from './app.po';

describe('angular-feature-module App', () => {
  let page: AngularFeatureModulePage;

  beforeEach(() => {
    page = new AngularFeatureModulePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
