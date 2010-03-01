Evidence.TestCase.extend('GUID Tests', {

  testGuidAPI: function(t){
    // Check validity of Guid.EMPTY
    t.assert(Guid.isGuid(Guid.EMPTY));

    // Check validity of generated Guid
    t.assert(Guid.isGuid(Guid.create()));

    // Check uniqueness of generated GUIDs.
    // Testing pool of 50,000 generations
    var guids = {}, i = 0;

    while (i < 50000) {
      guids[Guid.create().toString()] = true;
      i++;
    }
    t.assertEqual(Object.keys(guids).length, 50000);
    
    // Check that invalid guid string can't be used for instantiation.
    
    // I'd rather have:
    // t.assertError(function() { new Guid("invalid-string"); });
    // than this:
    t.assert((function() {
      try {
        new Guid("invalid-string");
        return false; // Should not get here if constructor fails.
      } catch(e) {
        return true;
      }
    })());
    
    // Test basic equality with Guid.EMPTY
    t.assert(new Guid(Guid.EMPTY).equals(Guid.EMPTY));
    
    // Test equality with generated Guid
    var guid = Guid.create();
    t.assert(guid.equals(guid));
    t.assert(guid.equals(guid.toString()));
  }
});