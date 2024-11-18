let a = ["“Be yourself; everyone else is already taken.”","“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me","“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me","“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”","“A room without books is like a body without a soul.”"]
let b = ["― Oscar Wilde","― Marilyn Monroe","― Frank Zappa","― Albert Einstein","― Marcus Tullius Cicero"]
function rendomquods() {
   let random = " " 

let randomy = Math.floor(Math.random()*a.length);

let up = a[randomy];
let x = b[randomy];

 document.getElementById("quotes").innerHTML = up;
 document.getElementById("auther").innerHTML = x;
}