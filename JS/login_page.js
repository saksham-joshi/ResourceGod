function login_pressed(){
    var mail = document.querySelector("#mail").value.trim();
    var pass = document.querySelector("#pass").value.trim();
    if(pass.length<8){
        alert("Password is too short !");
        return;
    }
    alert(mail+" "+pass);
    localStorage.setItem(mail,pass);
    sessionStorage.setItem(mail,pass);
}