function register_pressed(){
    var obj = document.querySelectorAll("input");
    var first_name = obj.item(0).value.trim();
    var last_name = obj.item(1).value.trim();
    var mail = obj.item(2).value.trim();
    var pass = obj.item(3).value;
    var retype_pass = obj.item(4).value;

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var warnings = "";
    if(first_name.length<3 || last_name.length<3){
        warnings = "First Name or Last Name is too short !";
    }
    if(!mail.match(validRegex)){
        warnings = warnings + "\nInvalid Email Found !";
    }
    if(pass != retype_pass){
        warnings = warnings +"\nBoth password doesn't match !";
    }
    if(pass.length<=8){
        warnings = warnings +"\nMiniumn password length is 8 .";
    }
    alert(warnings);
    
}