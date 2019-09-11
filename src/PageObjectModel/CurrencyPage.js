import testData from '../HelperMethods/TestData';

class CurrencyPage {
  get currencyPageTitle(){return $('#content > div.panel.panel-default > div.panel-heading')}
  get generalLink(){ return $('//*[@id="social-sidebar-menu"]/li[4]/a')};
  get currencyLink(){return $('//*[@id="menu-ui"]/li[2]/a')};
  get addNewCurrency(){return $('.btn.btn-success.xcrud-action')};
  get currencyName(){return $('//*[@id="content"]/div[2]/div[3]/div/div/div[1]/div[2]/div/div[1]/div/input')};
  get currencySymbol(){return $('//*[@id="content"]/div[2]/div[3]/div/div/div[1]/div[2]/div/div[2]/div/input')};
  get currencyCode(){return $('//*[@id="content"]/div[2]/div[3]/div/div/div[1]/div[2]/div/div[3]/div/input')};
  get currencyRate(){return $('//*[@id="content"]/div[2]/div[3]/div/div/div[1]/div[2]/div/div[4]/div/input')};
  get currencyActive(){return $('//*[@id="content"]/div[2]/div[3]/div/div/div[1]/div[2]/div/div[5]/div/select')};
  get currencyActiveYes(){return $('//*[@id="content"]/div[2]/div[3]/div/div/div[1]/div[2]/div/div[5]/div/select/option[1]')}
  get currencyActiveNo(){return $('//*[@id="content"]/div[2]/div[3]/div/div/div[1]/div[2]/div/div[5]/div/select/option[2]')}
  get saveAndReturn(){return $('//*[@id="content"]/div[2]/div[3]/div/div/div[1]/div[1]/a[1]')};
  get errorMessageforBlankData(){return $('#content > div.panel.panel-default > div:nth-child(3) > div > div > div.xcrud-message.error')}
  get returnButton(){return $('//*[@id="content"]/div[2]/div[3]/div/div/div[1]/div[1]/a[4]')};

  goTocurrencyPage(){
    const allGeneralMenu =$('#menu-ui')
    this.generalLink.click();
    allGeneralMenu.waitForVisible(5000)
    this.currencyLink.click();
  }
  addNewCurrencies(){
    const currencyCode =testData.generateUniqueCurrencyCode();
    this.addNewCurrency.click();
    this.currencyName.waitForVisible(5000);
    this.currencyName.click();
    this.currencyName.setValue('American Dollar');
    this.currencySymbol.setValue('$');
    this.currencyCode.setValue(currencyCode);
    this.currencyRate.setValue('82.5');
    this.currencyActive.click();
    this.currencyActiveNo.waitForVisible(5000);
    this.currencyActiveNo.click();
    this.saveAndReturn.click();
  }
  addNewCurrencyWithNoData(){
    this.addNewCurrency.click();
    this.currencyName.waitForVisible(5000);
    this.saveAndReturn.click();
    this.errorMessageforBlankData.waitForVisible(5000);
  }
}
export default new CurrencyPage();