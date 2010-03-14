Evidence.TestCase.extend('Cookie Tests', {

  testCookieAPI: function(t){
    // Test basic cookie creation and retrieval.
    var c = new Cookie("x","y");
    t.assertEqual(c.value, Cookie.getValue("x"));
    t.assertEqual(c.toString(), Cookie.getValue("x"));

    // Test cookie deletion.
    Cookie.unset("x");
    t.assertNull(Cookie.getValue("x"));
    
    // Test complex value storage and retrieval.
    var object = {x: {y: "z"}},
        set = Cookie.set("x", Object.toJSON(object)),
        result = Cookie.getValue("x").evalJSON();
    
    t.assertEqual(object.x.y, result.x.y);
    
    // Test alias for unset.
    Cookie.erase("x");
    t.assertNull(Cookie.getValue("x"));
  }

});
