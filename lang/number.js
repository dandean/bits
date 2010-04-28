/**
 *  Number#clamp(min, max) -> Number
 *  - min (Number): The minimum allowable value.
 *  - max (Number): The maximum allowable value.
 *
 *  Returns the `min` or `max` value if the number is outside the specified range.
**/
Number.prototype.clamp = function(min, max) {
  // Via http://twitter.com/kangax/status/13023629344
  return this < min ? min : (this > max ? max : this);
};
