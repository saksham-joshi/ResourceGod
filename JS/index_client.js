function sidebar_close(){
    document.querySelector("#sidebar").style.display="none";
    document.querySelector("#top_logo").style.display="flex";
}

function sidebar_open(){
    document.querySelector("#sidebar").style.display="flex";
    document.querySelector("#top_logo").style.display="none";
}

function search_box_text_changed(){
    
    if(document.querySelector("#search_box").value.length > 3){
        document.querySelector("#search_button").style.color="cyan";
    }
    else{
        document.querySelector("#search_button").style.color="rgb(219, 219, 219)";
    }
}

window.onload = function(){
    
}
