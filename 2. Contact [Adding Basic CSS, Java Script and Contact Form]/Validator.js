function validateForm(){

var errors = "";


var FullName = document.getElementById('FullName').value;
if(FullName==""){
    //alert("Please enter Full Name");
    //return false;
    errors+= "<li>Please enter Full Name.</li>";
    document.getElementById('FullName').classList.add('inputError');
}

else{
    document.getElementById('FullName').classList.add('inputError');
}

var Username = document.getElementById('Username').value;
if(Username==""){
    //alert("Please enter Username");
    //return false;
    errors+= "<li>Please enter Username.</li>";
    document.getElementById('Username').classList.add('inputError');
}

else{
    document.getElementById('Username').classList.add('inputError');
}

var Nationality = document.getElementById('Nationality').value;
if(Nationality=="0"){
    //alert("Select your Nationality");
    //return false;
    errors+= "<li>Please select Nationality.</li>";
    document.getElementById('Nationality').classList.add('inputError');
}

else{
    document.getElementById('Nationality').classList.add('inputError');
}

var Password = document.getElementById('Password').value;
if(Password==""){
    //alert("Please enter Password");
    //return false;
    errors+= "<li>Please enter Password.</li>";
    document.getElementById('Password').classList.add('inputError');
}

else{
    document.getElementById('Password').classList.add('inputError');
}


if(errors!=""){
    document.getElementById("ErrorList").innerHTML = errors;
    return false;
}

else{
    document.getElementById("ErrorList").innerHTML = "";
    return true;
}

function resetForm(){
    //alert('Reset');
    document.getElementById('errorList').innerHTML = "";
    document.getElementById('FullName').classList.remove('innerError');
    document.getElementById('Username').classList.remove('innerError');
    document.getElementById('Nationality').classList.remove('innerError');
    document.getElementById('Password').classList.remove('innerError');
}








}