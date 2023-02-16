/* eslint-disable ui-testing/missing-assertion-in-test */
import HomePage from '../pages/home/home-page';

const home = new HomePage();

describe('Wallet tests', () => {
  before(() => {
    home.visit();
    home.acceptTermsAndConditions();
  });
  context('Connect metamask wallet', () => {
    it('should login with success', () => {
      home.connectBrowserWallet();
      home.acceptMetamaskAccessRequest();
      home.waitUntilLoggedIn();
    });
  });
});
