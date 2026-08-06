function bookFlight(){
    let from=document.getElementById("from").value;
    let to=document.getElementById("to").value;
    let date=document.getElementById("date").value;
    let travelClass=document.getElementById("class").value;
    if(from=="" || to=="" || date=="")
        {
            document.getElementById("result").innerHTML="Please fill all details.";
        }
        else
            {
                let bookingID=Math.floor(Math.random()*900000)+100000;
                document.getElementById("result").innerHTML=
                "Flight Booked Successfully!<br>"+
                "From: "+from+
                "<br>Destination: "+to+
                "<br>Date: "+date+
                "<br>Class: "+travelClass+
                "<br>Booking ID: "+bookingID;
            }
                }