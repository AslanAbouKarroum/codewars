// Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. All words must have their first letter capitalized without spaces.

// For instance:

// "hello case".camelCase() => HelloCase
// "camel case word".camelCase() => CamelCaseWord

// The solution 
String.prototype.camelCase=function(){
    return this.trim().split(' ').filter(el=>el.trim()).map((el)=>el[0].toUpperCase()+el.split('').splice(1).join('')).join('')
  }

  // The solution 2
  String.prototype.camelCase = function () {
    return this.trim().replace(/(?:^|\s+)(\w)/g, (_, c) => c.toUpperCase())
  }