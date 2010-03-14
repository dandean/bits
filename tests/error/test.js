Evidence.TestCase.extend('Error Tests', {

  testErrorAPI: function(t){
    
    var TestErrorOne = Error.create({name: "TestErrorOne"});
    var e1 = new TestErrorOne("test1");
    t.assert(e1 instanceof TestErrorOne, "Is not instance of instantiated class.");
    t.assert(e1 instanceof Error, "Is not an instance of Error");
    t.assertEqual("test1", e1.message);
    
    var TestErrorTwo = Error.create(TestErrorOne, {name: "TestErrorTwo"});
    var e2 = new TestErrorTwo("test2");
    t.assert(e2 instanceof TestErrorTwo, "Is not instance of instantiated class.");
    t.assert(e2 instanceof TestErrorOne, "Is not instance of parent class.");
    t.assert(e2 instanceof Error, "Is not instance of Error");
    t.assertEqual("test2", e2.message);
    
    var TestErrorThree = Error.create({name: "TestErrorThree"});
    c3 = new TestErrorThree();
    t.assertEqual("TestErrorThree", c3.message);
  }
});
