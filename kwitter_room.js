// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDdz19nmc09NiC6qHKDoSSe8jUmkhXtBAg",
    authDomain: "project-kwitter-1ebc3.firebaseapp.com",
    projectId: "project-kwitter-1ebc3",
    storageBucket: "project-kwitter-1ebc3.appspot.com",
    messagingSenderId: "963437909099",
    appId: "1:963437909099:web:1209a23c854a5449c48d2e"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  name=localStorage.getItem("user name");
  document.getElementById("username").innerHTML="Welcome" + name;

  function addroom(){

    room_name=document.getElementById("roomName").value;

firebase.database().ref("/").child(room_name).update({
purpose:"adding room name"
});

localStorage.setItem("Room-Name",room_name);

window.location="kwitter_page.html";

function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
div="<div id='room_Names'></div>"
//End code
});});}
getData();

}

function logout(){
  localStorage.removeItem("Room-name");
  localStorage.removeItem("user name");
  window.location="index.html";
}


    
  