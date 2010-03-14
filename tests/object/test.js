Evidence.TestCase.extend('Object Tests', {

  testObjectIsDate: function(t){
    t.refute(Object.isDate());
    
    var date = new Date();
    t.assert(Object.isDate(date));
    t.refute(Object.isDate(date.toString()));
  }

});
