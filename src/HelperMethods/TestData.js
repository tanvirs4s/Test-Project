class TestData {
  generateUniqueCurrencyCode(){
    const currencyCode = "USD";
    return currencyCode + Math.random().toString(12).substring(1,5);
  }

}
export default new TestData();