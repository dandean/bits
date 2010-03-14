/**
 *  Error.create(base, options) -> Error
 *  - base (Error): Optional base-error class. If not provided, [[Error]] is used.
 *  - options (Object): Optional options object.
 *
 *  Options:
 *
 *  * `name`: The error name. If not provided, "Error" is used.
 *  * `message`: The default message for the error class. If not provided a
 *      type-specific default message used.
 *
 *  ##### Examples
 *
 *  Create a `NotImplementedError` class:
 *
 *      var NotImplementedError = Error.create({
 *        name: "NotImplementedError",
 *        message: "The method is not implemented"
 *      });
 *
 *      throw new NotImplementedError();
 *      //-> NotImplementedError: The method is not implemented
 *
 *      throw new NotImplementedError("SomeClass#method");
 *      //-> NotImplementedError: SomeClass#method
**/
Error.create = function(base, options) {
  
  if (base && Object.isFunction(base)) {
    // If base if provided, use it and options as provided.
    options = options || {};
  } else {
    // Otherwise, shift options over and use Error as base.
    options = base || {};
    base = Error;
  }
  
  options.name = options.name || base.prototype.name;
  options.message = options.message
    || ((options.name == "Error") ? "Unknown" : options.name) + " error";

  // Create the constructor
  var type = function() {
    this.name = options.name;
    this.message = arguments[0] || options.message;
  };
  
  var parent = function() {};
  parent.prototype = base.prototype;
  type.prototype = new parent;

  return type;
};