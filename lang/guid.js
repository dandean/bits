/**
 *  class Guid
**/
var Guid = Class.create({
  /**
   *  new Guid(value);
   *
   *  - value ([[String]]): Valid guid-formatted string.
  **/
  initialize: function(value) {
    if (Guid.isGuid(value)) {
      this._value = value.toString(); return;
    }
    throw new Error("Invalid GUID value: " + value);
  },

  /**
   *  Guid#isEmpty() -> Boolean
   *
   *  Checks if the instance is equal to an empty [[Guid]].
  **/
  isEmpty: function() {
    return this._value == Guid.EMPTY;
  },
  
  /**
   *  Guid#equals(guid) -> Boolean
   *  - guid (Object): object to compare against.
   *
   *  Checks if the provided guid is the "same" as this instance. Comparison
   *  will return true if specified object's `toString` method returns the same
   *  value as this instance's value.
  **/
  equals: function(guid) {
    // Comparing string `this._value` against provided `guid` will auto-call
    // toString on `guid` for comparison
    return Guid.isGuid(guid) && this._value == guid;
  },

  /**
   *  Guid#toString() -> String
   *
   *  Returns the Guid is [[String]] format.
  **/
  toString: function() { return this._value; }
});

Object.extend(Guid, (function() {
  var _validator = new RegExp("[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}", "i");

  function _gen(count) {
    // Private function for creating guid parts.
    var out = "";
    for (var i=0; i<count; i++) {
      out += (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    }
    return out;
  }

  return {
    /**
     *  Guid.EMPTY -> String
    **/
    EMPTY: "00000000-0000-0000-0000-000000000000",

    /**
     *  Guid.isGuid(value) -> Boolean
     *  - value (Object): The value to check.
     *
     *  Checks if the value represents a [[Guid]]. Value can be any object
     *  that returns a valid Guid-formatted string with its toString method.
    **/
    isGuid: function(value) {
      return value &&  (value instanceof Guid || _validator.test(value.toString()));
    },

    /**
     *  Guid.create() -> Guid
     *
     *  Creates a new [[Guid]] object with a pseudo-unique value.
    **/
    create: function() {
      return new Guid([_gen(2), _gen(1), _gen(1), _gen(1), _gen(3)].join("-"));
    }
  };
})());
