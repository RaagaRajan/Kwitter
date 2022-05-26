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

//YOUR FIREBASE LINKS

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name, 
            message:msg,
            like:0;
      });

      document.getELementById("msg").value = "";
}

//End code
      } });  }); }
getData();
