// When working with color values it can sometimes be useful to extract the individual red, green, and blue (RGB) component values for a color. Implement a function that meets these requirements:

// Accepts a case-insensitive hexadecimal color string as its parameter (ex. "#FF9933" or "#ff9933")
// Returns a Map<String, int> with the structure {r: 255, g: 153, b: 51} where r, g, and b range from 0 through 255
// Note: your implementation does not need to support the shorthand form of hexadecimal notation (ie "#FFF")

// Example
// "#FF9933" --> {r: 255, g: 153, b: 51}

// My Solution
function hexStringToRGB(hexString) {
    let rgb = hexString.slice(1).toLowerCase().match(/.{1,2}/g).map(e=>(Number(e[0])||Number(e[0]==0))?Number(e[0])*16+((Number(e[1])||Number(e[1]==0))?Number(e[1]):e[1].charCodeAt(0)-87):(e[0].charCodeAt(0)-87)*16+((Number(e[1])||Number(e[1]==0))?Number(e[1]):e[1].charCodeAt(0)-87))
    return {r: rgb[0], g: rgb[1], b: rgb[2]}
};

// Solution
function hexStringToRGB(h) {
    return {
      r: parseInt(h.slice(1,3), 16),
      g: parseInt(h.slice(3,5), 16),
      b: parseInt(h.slice(5,7), 16)
    };  
  };