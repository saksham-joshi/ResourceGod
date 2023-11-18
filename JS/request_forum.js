function request_received(){
    var title = document.querySelector("input").value.trim();
    var desc = document.querySelector("textarea").value.trim();
    if(title.length <=5 && title>=50){
        alert("Title must be more than 5 & less than 50 characters");
        return;
    }
}