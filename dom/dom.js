(function(doc) {
  var toHTML = function toHTML(element) {
    return $(element).outerHTML;
  };

  if (!('outerHTML' in doc.documentElement)) {
    var dummy = doc.createElement('html');
    toHTML = function toHTML(element) {
      dummy.appendChild($(element).cloneNode(true));
      var result = dummy.innerHTML;
      dummy.innerHTML = '';
      return result;
    };
  }
  Element.addMethods({ 'toHTML': toHTML });
})(document);