module.exports = function toReadable (number) {    
        const ones = ['zero', 'one', 'two','three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
        const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
        const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
        const hundred = ['hundred'];
        let resStr = '';         
        let numbArr = number.toString().split('');        
        let length = numbArr.length;
        if (length == 1) {
          resStr += ones[numbArr[length-1]];
          return resStr;
        }     
        if (length == 2 && (numbArr[length-2] == '1')) {
          resStr += teens[numbArr[length-1]];
          return resStr;
        }
        if (length == 2 && (numbArr[length-2] != '1')) {
            if (numbArr[length-1] != '0') {
                resStr += (`${tens[numbArr[length-2]]} ${ones[numbArr[length-1]]}`);
                return resStr;
              } else {
                resStr += (`${tens[numbArr[length-2]]}`);
                return resStr;
              }
        }
      
        if (length == 3) {
            resStr += (`${ones[numbArr[length-3]]} ${hundred[0]}`);
            if (`${numbArr[length-2]}` == 0 && `${numbArr[length-1]}` == 0) {
                return resStr;
            }
            if (numbArr[length-2] == '1') {
                resStr += ` ${teens[numbArr[length-1]]}`;
                return resStr;
              } else if (numbArr[length-2] != '1') {
                if (numbArr[length-2] != '0') {
                  if(numbArr[length-1] != '0') {
                    resStr += (` ${tens[numbArr[length-2]]} ${ones[numbArr[length-1]]}`);
                    return resStr;
                  } else {
                    resStr += ` ${tens[numbArr[length-2]]}`;
                    return resStr;
                  }        
                } else {
                  resStr += (` ${ones[numbArr[length-1]]}`);
                  return resStr;
                }      
              }
        }
 };
