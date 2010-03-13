if (!("isDate" in Object)) {
  /**
   *  Object.isDate(object) -> Boolean
   *  - object (Object): An object to test.
   *
   *  Returns `true` if `object` is an instance of [[Date]].
  **/
  Object.isDate = function(object) {
    return object instanceof Date;
  };
}