function adding_resource(){
    var title = document.querySelector("#title").value.trim() ;
    var link = document.querySelector("#link").value.trim() ;
    var desc = document.querySelector("#description").value.trim();

    if(title.length<10 || title.length>=50){
        alert("Title must be more than 10 & less than 50 characters");
        return;
    }
    else if(desc.length >15 && desc.length<100){
        alert("Description must be larger than 15 characters and less than 100 characters.");
        return;
    }
    else{
        try{
            new URL(link);
        }
        catch(e){
            alert("Link is Invalid !");
            return;
        }
    }
}