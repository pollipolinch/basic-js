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
  letter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  constructor(direction = true) {
    this.direct = direction;
  }
  encrypt = (sms, keyword) => this.vigenere(sms, keyword);
  decrypt = (sms, keyword) => this.vigenere(sms, keyword, false);

  vigenere(sms, keyword, encrypt = true) {
    if(!sms || !keyword) throw new Error("Incorrect arguments!");
    let word='';
    sms = sms.toUpperCase();
    keyword = keyword.toUpperCase();

    for(let i = 0, j=0; i < sms.length; i++) {
      if(sms[i].match(/[A-Z]/i)) {
        let shear1=this.getSift(sms[i], this.letter);  
        let shear2=this.getSift(this.getChar(j,keyword), this.letter); 
        let shear;
        if (encrypt) {
          shear = shear1 + shear2;
        }
        else {
          shear = shear1 - shear2;
          if (shear<0)  shear = this.letter.length + shear1 - shear2;
        }
        word += this.getChar(shear, this.letter);
        j++;
      }
      else {
        word += sms[i];
      }
    }
    return (this.direct) ? word : word.split('').reverse().join('');
  }
  getSift(char, letter) {
    return letter.indexOf(char);
  }
  getChar(shear, letter) {
    return letter[shear % letter.length];
  }
}

module.exports = {
  VigenereCipheringMachine
};
