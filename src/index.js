module.exports = function toReadable (number) {
  
    let simpleNum = ['', 'one', 'two', 'three', 'four', 
    'five', 'six', 'seven', 'eight', 'nine', 
    'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 
    'fifteen', 'sixteen', 'seventeen', 'eighteen', 
    'nineteen'];

    let bigNum = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    let result = '';

    if (!number) {
        return 'zero';
    }

    if (number >= 100 && number <= 999) {
        for (let i = 0; i <= Math.floor(number / 100); i++) {
            if (i === Math.floor(number / 100)) {
                result = `${simpleNum[i]} hundred `;
            }
        }
        number = number % 100;
    }

    if (number <= 19) {
        result = result + simpleNum[number];
    }

    if (number >= 20 && number < 100) {
                
        for (let i = 0; i <= Math.floor(number / 10); i++) {

            if (i === Math.floor(number / 10)) {
                result = result + bigNum[i];
            }
        }
        for (let i = 0; i <= number % 10; i++) {
            
            if (i === number % 10) {
                result = `${result} ${simpleNum[i]}`;
            }
        }
    }
    return result.trim();
}
