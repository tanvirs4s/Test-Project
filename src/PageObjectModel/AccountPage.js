class AccountPage {
  get accountsLink(){return $('//*[@id="social-sidebar-menu"]/li[5]/a')}
  get customersLink(){return $('//*[@id="ACCOUNTS"]/li[3]/a')}

  goToCustomersLink(){
    const allAccountsMenu = $('=CUSTOMERS')
    this.accountsLink.click();
    allAccountsMenu.waitForExist(5000)
    this.customersLink.click();
  }
}
export default new AccountPage();