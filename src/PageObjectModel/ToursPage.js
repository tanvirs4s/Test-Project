class ToursPage {
  get toursLink(){return $('//*[@id="social-sidebar-menu"]/li[11]/a')}
  get tourInsideLink(){return $('//*[@id="Tours"]/li[1]/a')}
  get toursPageTitle(){return $('#content > div.panel.panel-default > div.panel-heading')}

  goToToursLink(){
    const toursLinkText = $('=TOURS')
    this.toursLink.click();
    toursLinkText.waitForExist(5000);
    this.tourInsideLink.click();
    browser.pause(5000)
  }
}
export default new ToursPage();