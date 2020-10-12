var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "System" && password == "System"){
alert ("Login successfully");
window.location = "https://python6701.s3.ap-south-1.amazonaws.com/Linux+Web/GotoTerminal.html"; // Redirecting to other page.
return false;
}
if ( username == "Ankita Singh" && password == "ankita127singh"){
alert ("Login successfully");
window.location = "https://python6701.s3.ap-south-1.amazonaws.com/Linux+Web/GotoTerminal.html"; // Redirecting to other page.
return false;
}
if ( username == "Tushar" && password == "Tu@081098"){
alert ("Login successfully");
window.location = "https://python6701.s3.ap-south-1.amazonaws.com/Linux+Web/GotoTerminal.html"; // Redirecting to other page.
return false;
}
else{
attempt --;// Decrementing by one.
alert("You have left "+attempt+" attempt;");
// Disabling fields after 3 attempts.
if( attempt == 0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}
}