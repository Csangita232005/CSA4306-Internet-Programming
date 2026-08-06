function registerUser(){
    let name=document.getElementById('regName').value;
    document.getElementById('output').innerHTML=
    'Registration successful for '+name;
}

function loginUser(){
    document.getElementById('output').innerHTML=
    'Login successful';
}

function searchBus(){
    let route=document.getElementById('route').value;
    let type=document.getElementById('busType').value;
    document.getElementById('output').innerHTML=
    'Bus found: '+type+' on route '+route+
    ' (Available Seats: 20)';
}

function bookTicket(){
    let name=document.getElementById('passenger').value;
    let seat=document.getElementById('seat').value;
    document.getElementById('output').innerHTML=
    'Ticket booked for '+name+
    ' | Seat '+seat+
    ' | Payment Successful | Confirmation Email Sent';
}

function cancelTicket(){
    let seat=document.getElementById('cancelSeat').value;
    document.getElementById('output').innerHTML=
    'Booking cancelled for Seat '+seat;
}

function postComment(){
    let c=document.getElementById('comment').value;
    document.getElementById('output').innerHTML=
    'Comment posted: '+c;
}