import Page from './Page';

class LoginPage extends Page{
    get emailAddress(){ return $('/html/body/div[1]/form[1]/div[1]/input[1]')};
    get Password(){ return $('/html/body/div[1]/form[1]/div[1]/input[2]')};
    get LoginButton(){ return $('/html/body/div[1]/form[1]/button')};

    open() {
        super.open('/admin');
    }
    loginWithCredentials(userName,password){
        this.open();
        this.emailAddress.setValue(userName);
        this.Password.setValue(password);
        browser.pause(3000);
        this.LoginButton.click(); 
    }
}
export default new LoginPage();