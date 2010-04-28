Evidence.TestCase.extend('Number Tests', {

  testNumberAPI: function(t){
    t.assertEqual(5, (5).clamp(4, 6), "Did not return original value.");
    t.assertEqual(4, (2).clamp(4, 6), "Did not return min value.");
    t.assertEqual(6, (7).clamp(4, 6), "Did not return max value");


    t.assertEqual(4.25, (4.25).clamp(4, 6), "Did not return original value.");
    t.assertEqual(4.25, (2).clamp(4.25, 6), "Did not return min value.");
    t.assertEqual(6.25, (7).clamp(4, 6.25), "Did not return max value");
  }

});
