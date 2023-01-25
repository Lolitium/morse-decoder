const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
   expr=expr.split('**********');
   numberWords=expr.length;
   const newArray=[];
   let result='';
   let morseCode='';
   let letterCode=[];


   for (let i=0; i<numberWords; i++) {
        let word=expr[i];
        numberLettersInWord=(word.length)/10;

        /*идем по буквам в слове: каждая кодируется 10-ью битами*/
        for (let j=0; j<word.length; j+=10) {

        
            for (let k=0; k<10; k++) {
                if (word[j+k] ==='1' && word[j+k+1] ==='0') {
                    morseCode=`${morseCode}.`;
                    k+=1;
                }
                else if (word[j+k] ==='1' && word[j+k+1] ==='1') {
                    morseCode=`${morseCode}-`;
                    k+=1;
                }
            }

            letterCode.push(morseCode);
            if (letterCode in MORSE_TABLE) {
                result=`${result}${MORSE_TABLE[letterCode]}`;
            } 

            morseCode='';
            letterCode=[];
        }

        result=`${result} `;

   }
   
return result.trim();

    
}

module.exports = {
    decode
}