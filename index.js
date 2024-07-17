// helpers.js

class Formatter {
  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  static sanitize(str) {
    return str.replace(/[^\w\s'-]/g, ''); 
  }

  static titleize(str) {
    const exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    const words = str.split(' ');
    for (let i = 0; i < words.length; i++) {
      if (i === 0 || !exceptions.includes(words[i])) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
      }
    }
    return words.join(' ');
  }
}

module.exports = Formatter;
