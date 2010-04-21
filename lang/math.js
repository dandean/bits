/**
 *  Math.random() -> Number
 *  Math.random(max) -> Number
 *  Math.random(min, max) -> Number
 *
 *  Overloads Math.random so it can return a number up to `max` or a number
 *  between `min` and `max`.
**/
Math.random = (function() {
  var random = Math.random;
  
  return function(low, high) {
    var value = random();
    
    if (arguments.length == 0) {
      return value;
    }
    
    low = (typeof low == "undefined") ? 0 : low ;
    high = (typeof high == "undefined") ? 0 : high ;
    
    var lower = Math.min(low, high);
    var higher = Math.max(low, high);
    
    return ((higher - lower) * value) + lower;
  };
})();
