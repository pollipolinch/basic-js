const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  direct = true;
  alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  constructor(direction = true) {
    this.direct = direction;
  }

  encrypt = (message, keyword) => this.vigenere(message, keyword);
  decrypt = (message, keyword) => this.vigenere(message, keyword, false);

  vigenere(message, keyword, encrypt = true) {
    if(!message || !keyword) throw new Error("Incorrect arguments!");
    
    let str='';
    message = message.toUpperCase();
    keyword = keyword.toUpperCase();

    for(let i = 0, j=0; i < message.length; i++) {
      if(message[i].match(/[A-Z]/i)) {
        let shift1=this.getSift(message[i], this.alphabet);  
        let shift2=this.getSift(this.getChar(j,keyword), this.alphabet); 
        let shift;
        if (encrypt) {
          shift = shift1 + shift2;
        }
        else {
          shift = shift1 - shift2;
          if (shift<0)  shift = this.alphabet.length + shift1 - shift2;
        }
        str += this.getChar(shift, this.alphabet);
        j++;
      }
      else {
        str += message[i];
      }
    }
    return (this.direct) ? str : str.split('').reverse().join('');
  }
  getSift(char, alphabet) {
    return alphabet.indexOf(char);
  }
  getChar(shift, alphabet) {
    return alphabet[shift % alphabet.length];
  }
}

module.exports = {
  VigenereCipheringMachine
};
