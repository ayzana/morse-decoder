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
  let str= '';
  const correction = {
    10: ".",
    11: "-",
    '**********':"   "
  };
  let arr = expr.match(/.{1,10}/g);
  for (i =0; i< arr.length; i++) {
    if (arr[i] == '**********') {
        arr [i] = '  ';} else {
            arr[i]=+arr[i];}
}
  str = arr.join(' ');
  str = str.replace(/10|11/g, matched => correction[matched]);
  return str.split('   ').map(s => s.split(' ').map(w => MORSE_TABLE[w]).join('')).join(' ');
}



module.exports = {
    decode
}