var text=`The University of Hawaii began using radio to send digital information as early a Friedhelm Hillebrand conceptualised SMS in 1984 while working for Deutsche Telekom. Sitting Hillebrand typed out random sentences and counted every letter, number, punctuation, and sp Almost every time, the messages contained fewer than 160 characters, thus giving the basis limit one could type via text messaging. With Bernard Ghillebaert of France Télécom, he dev a proposal for the GSM (Groupe Spécial Mobile) meeting in February 1985 in Oslo. The first technical solution evolved in a GSM subgroup under the leadership of Finn Trosby. It was further developed under the leadership of Kevin Holley and Ian Harris (see Short Mes SMS forms an integral part of SS7 (Signalling System No. 7). under SS7, it is a "state" wit coded in the ITU-T "T.56" text format, that has a "sequence lead in" to determine different and may have special character codes that permits, for example, sending simple graphs as te This was part of ISDN (Integrated Services Digital Network) and since GSM is based on this, made its way to the mobile phone. Messages could be sent and received on ISDN phones, and these can send SMS to any GSM phone. The possibility of doing something is one thing, implementing it another, but systems existed from 1988 that sent SMS messages to mobile phophones (compare ND-NOTIS).`

/*var total=console.log(text.length);

var newWord=text.split(" ");
console.log(newWord.length);

var newText=new Set(newWord);
console.log(newText.size);*/

let word1=text.split(" ");
console.log(word1.length);


let word2=new Set(word1);
console.log(word2.size);

let word3=word1.length/word2.size;

console.log(word3);

let theCount=text.match(/the/gi)
console.log(theCount.length)

let aCount=text.match(/a/gi)
console.log(aCount.length)

let firstten=text.trim().split(" ")
let slice=firstten.slice(0,10);

console.log(slice);

 "Innomatics Technology Hub"

let add=text.split(" ");
let b=add.splice(0,10,"Innomatics Technology Hub")
console.log(b);