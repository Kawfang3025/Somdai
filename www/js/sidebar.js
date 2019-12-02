function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
}

var email = localStorage.getItem("Email");
console.log(email);

var db = firebase.firestore();
db.collection("employees").where("email", "==", email)
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            document.getElementById("fname").innerHTML = doc.data().firstName + " " + doc.data().lastName;
            document.getElementById("position").innerHTML = doc.data().positions;
            if(!(doc.data().img)){
                var url ="https://firebasestorage.googleapis.com/v0/b/somdai.appspot.com/o/images%2Fprofile.png?alt=media&token=dcc8e3ce-1eb4-401f-90a5-e23d1311d719";
                document.getElementById("navpic").src = url;
            }else{
                document.getElementById("navpic").src = doc.data().img;
            }
            localStorage.setItem("position", doc.data().positions);
            localStorage.setItem("department", doc.data().department);
            localStorage.setItem("myID", doc.data().employeeID);
            localStorage.setItem("mydoc", doc.id);
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
db.collection("technician").where("email", "==", email)
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            document.getElementById("fname").innerHTML = doc.data().firstName + " " + doc.data().lastName;
            document.getElementById("position").innerHTML = doc.data().positions;
            if(!(doc.data().img)){
                var url ="https://firebasestorage.googleapis.com/v0/b/somdai.appspot.com/o/images%2Fprofile.png?alt=media&token=dcc8e3ce-1eb4-401f-90a5-e23d1311d719";
                document.getElementById("navpic").src = url;
            }else{
                document.getElementById("navpic").src = doc.data().img;
            }
            localStorage.setItem("position", doc.data().positions);
            localStorage.setItem("department", doc.data().department);
            localStorage.setItem("myID", doc.data().technicianID);
            localStorage.setItem("mydoc", doc.id);
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });

// function logout() {
   
//     // Initialize Firebase
//     firebase.initializeApp(firebaseConfig);
//     firebase.auth().signOut().then(function() {
//         // Sign-out successful.
        
//         alert('See you again soon').then(function() {
//             localStorage.clear("Email");

//         });
//         window.location.href = 'index.html';
//     }).catch(function(error) {
//         // An error happened.
//     });
// }