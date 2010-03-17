//= require "object"

/** 
 *  class Cookie
 *  Creates a cookie.
 *
 *  Based on Andrew Dupont's Cookie class:
 *  http://github.com/savetheclocktower/javascript-stuff/blob/master/cookie.js
**/
var Cookie = Class.create({
  /**
   *  new Cookie(name, value[, expires])
   *  
   *  - name (String): The name of the cookie.
   *  - value (String): The value of the cookie.
   *  - expires (Number | Date): Exact date (or number of days from now) that
   *     the cookie will expire.
  **/
  initialize: function(name, value, expires) {
    if (Object.isNumber(expires)) {
      var days = expires;
      expires = new Date();
      expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
    }
    
    if (Object.isDate(expires))
      expires = expires.toGMTString();

    if (!Object.isUndefined(expires) && expires !== "")
      expires = "; expires=" + expires;
      
    this.name    = name;
    this.value   = value;
    this.expires = expires;
    
    document.cookie = name + "=" + escape(value) + (expires || '') + "; path=/";
  },
  
  /**
   *  Cookie#toString() -> String
   *  
   *  Returns a value of the [[Cookie]] object.
  **/
  toString: function() {
    return this.value;
  },
  
  /**
   *  Cookie#inspect() -> String
   *  
   *  Returns a debug oriented version of the [[Cookie]] object.
  **/
  inspect: function() {
    return "#<Cookie #{name}:#{value}>".interpolate(this);
  }
});

Object.extend(Cookie, {
  /**
   *  Cookie.set(name, value, expires) -> Cookie
   *  
   *  Alias of [[Cookie#initialize]].
  **/
  set: function(name, value, expires) {
    return new Cookie(name, value, expires);
  },
  
  /**
   *  Cookie.getValue(name) -> String
   *  - name (String): The name of the cookie to retrieve.
   *  
   *  Returns the value of the cookie with the given name.
  **/
  getValue: function(name) {
    var c = document.cookie.split(';');
    
    for (var i = 0, cookie; i < c.length; i++) {
      cookie = c[i].split('=');
      if (cookie[0].strip() === name)
        return unescape(cookie[1].strip());
    }
    
    return null;
  },
  
  /**
   *  Cookie.unset(name) -> Cookie
   *  
   *  Deletes a cookie.
   *  - name (String): The name of the cookie to delete.
  **/
  unset: function(name) {
    return Cookie.set(name, "", -1);
  },

  /**
   *  Cookie.all() -> Array
   *
   *  Gets an [[Array]] of all available cookie information.
  **/
  all: function() {
    var c = document.cookie.split(';'),
        data = [];

    for (var i = 0, cookie; i < c.length; i++) {
      cookie = c[i].split('=');
      data.push({
        name: cookie[0].strip(),
        value: unescape(cookie[1].strip())
      });
    }

    return data;
  },

  /**
   *  Cookie.find(nameOrDelegate) -> Object
   *  - nameOrDelegate(String|Function): Cookie name or search function.
   *
   *  Returns the first cookie with the given name or which is found be the
   *  search function.
  **/
  find: function(nameOrDelegate) {
    if (Object.isString(nameOrDelegate)) {
      nameOrDelegate = function(c) { return c.name == nameOrDelegate; };
    }
    return this.all().find(nameOrDelegate);
  },

  /**
   *  Cookie.findAll(nameOrDelegate) -> Array
   *  - nameOrDelegate(String|Function): Cookie name or search function.
   *
   *  Returns an [[Array]] of cookie data for the name or search function.
  **/
  findAll: function(nameOrDelegate) {
    if (Object.isString(nameOrDelegate)) {
      nameOrDelegate = function(c) { return c.name == nameOrDelegate; };
    }
    return this.all().findAll(nameOrDelegate);
  }
});

/**
 *  Cookie.erase(name) -> Cookie
 *  
 *  Alias of [[Cookie.unset]].
**/
Cookie.erase = Cookie.unset;
