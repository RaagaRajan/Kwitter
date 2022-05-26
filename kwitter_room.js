const firebaseConfig = {
      apiKey: "AIzaSyCoSa7EbFXYhdXDSDRFn2C9zQN8_MyoaFw",
      authDomain: "kwitterc95.firebaseapp.com",
      databaseURL: "https://kwitterc95-default-rtdb.firebaseio.com",
      projectId: "kwitterc95",
      storageBucket: "kwitterc95.appspot.com",
      messagingSenderId: "310105825904",
      appId: "1:310105825904:web:0aa89cef366b84c9c9cab5"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + " !";

function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
          purpose:"addingRooms"
      }); 
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code 
console.log("Room_names - " + Room_names);
row = "<div class = 'room_name' id = " + Room_names + "onclick = 'redirectToRoomName(this.id)'># " + Room_names + "</div> <hr>"
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() { 
      localStorage.removeItem("user_name"); 
      localStorage.removeItem("room_name");
      window.location = index.html;
}