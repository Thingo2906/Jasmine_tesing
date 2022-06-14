describe("Servers test (with setup and tear-down)", function() {
    beforeEach(function () {
      // initialization logic
      serverNameInput.value = 'Alice';
    });
  
    it('should add a new server to allServers on submitServerInfo()', function () {
      submitServerInfo();
  
      expect(Object.keys(allServers).length).toEqual(1);
      expect(allServers['server' + serverId].serverName).toEqual('Alice');
    });
  
    afterEach(function() {
      serverNameInput.value ='';
    });
    it('should not add a new server Name on submitServerInfo()', function () {
      serverNameInput.value = '';
      submitServerInfo();
      expect(Object.keys(allServers).length).toEqual(0);
    });
    it('Should add a new server and new earning to the updateServerTable()', () =>{
      submitServerInfo();
      updateServerTable();
      const serverList = document.querySelectorAll('#serverTable tbody tr td');
      expect(serverList.length).toEqual(3);
      expect(serverList[0].innerText).toEqual('Alice');
      expect(serverList[1].innerText).toEqual('$0.00');
      expect(serverList[2].innerText).toEqual('X');
        
    })
    afterEach(function() {
      serverId = 0;
      serverTbody.innerHTML = '';
      allServers = {};
    });
  
  });
   