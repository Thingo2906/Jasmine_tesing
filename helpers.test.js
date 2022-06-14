describe("Utilities test (with setup and tear-down)", function() {
    beforeEach(function () {
      billAmtInput.value = 300;
      tipAmtInput.value = 60;
      submitPaymentInfo();
    });
  
    it('should sum total tip amount of all payments on sumPaymentTotal()', function () {
      expect(sumPaymentTotal('tipAmt')).toEqual(60);
  
      billAmtInput.value = 200;
      tipAmtInput.value = 20;
  
      submitPaymentInfo();
  
      expect(sumPaymentTotal('tipAmt')).toEqual(80);
    });
  
    it('should sum total bill amount of all payments on sumPaymentTotal()', function () {
      expect(sumPaymentTotal('billAmt')).toEqual(300);
  
      billAmtInput.value = 200;
      tipAmtInput.value = 40;
  
      submitPaymentInfo();
  
      expect(sumPaymentTotal('billAmt')).toEqual(500);
    });
  
    it('should sum total tip percent on sumPaymentTotal()', function () {
      expect(sumPaymentTotal('tipPercent')).toEqual(20);
  
      billAmtInput.value = 100;
      tipAmtInput.value = 20;
  
      submitPaymentInfo();
  
      expect(sumPaymentTotal('tipPercent')).toEqual(40);
    });
  
    it('should sum tip percent of a single tip on calculateTipPercent()', function () {
      expect(calculateTipPercent(300, 30)).toEqual(10);
      expect(calculateTipPercent(250, 50)).toEqual(20);
    });
    it('should check that tr will append newTd on appendTd(tr, value) function', () =>{
      var tr = document.createElement('tr');
      var newTd =  document.createElement('td');
      tr.appendChild(newTd);
      appendTd(newTd, "Hello");
      expect(tr.children.length).toEqual(1);
      expect(newTd.innerText).toEqual("Hello");
    });
    it('should check the new children on appendDeleteBtn(tr, type) function', () => {
      var tr = document.createElement('tr');
      var newTd =  document.createElement('td');
      tr.appendChild(newTd);
      appendDeleteBtn(newTd, "X");
      expect(tr.children.length).toEqual(1);
      expect(newTd.innerText).toEqual("X");
    });
    afterEach(function() {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        serverTbody.innerHTML = '';
        allPayments = {};
        paymentId = 0;
    });
});