function bookTrain(){

let from=document.getElementById("from").value;

let to=document.getElementById("to").value;

let date=document.getElementById("date").value;

let trainClass=document.getElementById("class").value;

if(from=="" || to=="" || date=="")
{
document.getElementById("result").innerHTML="Please fill all details.";
}
else
{
let pnr=Math.floor(Math.random()*9000000000)+1000000000;

document.getElementById("result").innerHTML=
"Ticket Booked Successfully!<br>"+
"From: "+from+
"<br>To: "+to+
"<br>Date: "+date+
"<br>Class: "+trainClass+
"<br>PNR No: "+pnr;
}

}