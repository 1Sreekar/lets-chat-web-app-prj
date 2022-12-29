function login(){

    username=document.getElementById("user").value
    
    localStorage.setItem("user name",username);
    
    window.location="kwitter_room.html";
    
    }