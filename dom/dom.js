/**
 *  Element.toHTML(@element) -> String
 *  - element (Element): The element to transform into an HTML string.
 *
 *  Returns the HTML string for the [[Element]]. Used as a means of providing
 *  a cross-browser `Element#outerHTML` alternative.
**/
Element.toHTML = (function(doc) {
  // Use native outerHTML if present.
  // Thanks to @jdalton for the collaboration on this.
  var toHTML = function toHTML(element) {
    return $(element).outerHTML;
  };

  // Roll our own version of outerHTML.
  if (!('outerHTML' in doc.documentElement)) {
    var dummy = doc.createElement('html');
    toHTML = function toHTML(element) {
      dummy.appendChild($(element).cloneNode(true));
      var result = dummy.innerHTML;
      dummy.innerHTML = '';
      return result;
    };
  }
})(document);

Element.addMethods({ 'toHTML': Element.toHTML });