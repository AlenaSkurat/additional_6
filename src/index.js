module.exports = function zeros(expression) {
  
      var a = expression.split("*"),
      result = 0,
      two = 0,
      five = 0,
      count = 0,
      temp = 0;
  
      for (var i = 0; i < a.length; i++) {
          if(a[i].search("!!") > 0) {
              result = a[i].replace("!!","");
              while (result != 0 && result != 1) {
                  temp = result;
  
                  while (temp%2 == 0) {
                      two++;
                      temp/=2;
                  }
                  while (temp%5 == 0) {
                      five++;
                      temp/=5;
                  }
                  result -= 2;
              }
          } else {
              result = a[i].replace("!","");
              while (result != 0 && result != 1) {
                  temp = result;
  
                  while (temp%2 == 0) {
                      two++;
                      temp/=2;
                  }
                  while (temp%5 == 0) {
                      five++;
                      temp/=5;
                  }
                  result -= 1;
              }
              }
      }
      return Math.min(two,five);
}