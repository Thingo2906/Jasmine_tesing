describe("Payments test (with setup and tear-down)", function() {
    beforeEach(function () {
      billAmtInput.value = 200;
      tipAmtInput.value = 20;
    });
  
    it('should add a new payment to allPayments on submitPaymentInfo()', function () {
      
        submitPaymentInfo();
  
      expect(Object.keys(allPayments).length).toEqual(1);
      expect(allPayments['payment' + paymentId].billAmt).toEqual('200');
      expect(allPayments['payment' + paymentId].tipAmt).toEqual('20');
      expect(allPayments['payment' + paymentId].tipPercent).toEqual(10);
      
    });
    it('should create a new payment on createCurPayment()', function () {
        let Payment = {
          billAmt: '200',
          tipAmt: '20',
          tipPercent: 10,
        }
    
        expect(createCurPayment()).toEqual(Payment);
    });
    
    it('should payment update #paymentTable on appendPaymentTable()', function () {
        let curPayment = createCurPayment();
        allPayments['payment' +paymentId] = curPayment;
    
        appendPaymentTable(curPayment);
    
        let paymentList = document.querySelectorAll('#paymentTable tbody tr td');
    
        expect(paymentList.length).toEqual(3);
        expect(paymentList[0].innerText).toEqual('$200');
        expect(paymentList[1].innerText).toEqual('$20');
        expect(paymentList[2].innerText).toEqual('10%');
      
      });
    it('should payment update #summaryTable on updateSummary()', function () {
        submitPaymentInfo();
        let summaryTr= document.querySelectorAll('#summaryTable tBody tr td');
        expect(summaryTr[0].innerText).toEqual('$200');
        expect(summaryTr[1].innerText).toEqual('$20');
        expect(summaryTr[2].innerText).toEqual('10%');
    });
    
    afterEach(function() {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        serverTbody.innerHTML = '';
        paymentId = 0;
        allPayments = {};
      });   
});