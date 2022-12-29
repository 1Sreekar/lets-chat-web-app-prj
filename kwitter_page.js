user_name=localStorage.getItem("user name");
room_name=localStorage.getItem("Room-name");

const firebaseConfig = {
    apiKey: "AIzaSyCsS8p9bTkPzQyKiP_OXT9k7-6Uiy_EVj0",
    authDomain: "kwitter-6bb95.firebaseapp.com",
    databaseURL: "https://kwitter-6bb95-default-rtdb.firebaseio.com",
    projectId: "kwitter-6bb95",
    storageBucket: "kwitter-6bb95.appspot.com",
    messagingSenderId: "107141110229",
    appId: "1:107141110229:web:5e7610c85731467f72855c"
  };
  
  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code

//End code
 } });  }); }
getData();

function logout2(){
    localStorage.removeItem("Room-name");
    localStorage.removeItem("user name");
    window.location="index.html";
}


function send2(){

message=document.getElementById("msg").value;

firebase.database().ref(room_name).push({
name:username,
masage:message,
Like:0

});

document.getElementById("msg").value="";

}