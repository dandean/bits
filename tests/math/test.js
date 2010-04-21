Evidence.TestCase.extend('Math Tests', {

  testMathAPI: function(t){
    var value;
    
    // default usage
    for(var i=0; i<1000; i++) {
      value = Math.random();
      t.assert(value > 0 && value < 1);
    }
    
    // max value
    for(var i=0; i<1000; i++) {
      value = Math.random(10);
      t.assert(value > 0 && value < 10);
    }
    
    // within specified range
    for(var i=0; i<1000; i++) {
      value = Math.random(10, 20);
      t.assert(value > 10 && value < 20);
    }

    // withing specified range (negative)
    for(var i=0; i<1000; i++) {
      value = Math.random(-10, -1);
      t.assert(value > -10 && value < -1);
    }
  }

});
