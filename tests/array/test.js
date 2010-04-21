Evidence.TestCase.extend('Math Tests', {

  testArrayAPI: function(t){
    var items = [0, 1, 2, 3, 4, 5];
    
    // Getting a random item from the array
    for(var i=0; i<1000; i++) {
      t.assert(items.random() != undefined);
    }
    
    // Array#random on empty array should return undefined
    t.assert([].random() == undefined);
  }

});
