/**
 *  Array#random() -> Object
 *  Returns a random item from the array instance;
**/
Array.prototype.random = function() {
  if (!this.length) return;
  return this[Math.floor(Math.random() * this.length)];
};
