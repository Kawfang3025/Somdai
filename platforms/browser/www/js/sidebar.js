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
            localStorage.setItem("position", doc.data().positions);
            localStorage.setItem("department", doc.data().department);
            localStorage.setItem("myID", doc.data().employeeID);
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
db.collection("technicain").where("email", "==", email)
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            document.getElementById("fname").innerHTML = doc.data().firstName + " " + doc.data().lastName;
            document.getElementById("position").innerHTML = doc.data().positions;
            localStorage.setItem("position", doc.data().positions);
            localStorage.setItem("department", doc.data().department);
            localStorage.setItem("myID", doc.data().technicainID);
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });

function logout() {
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
        window.location.href = 'index.html';
        alert('See you again soon').then(function() {
            localStorage.clear("Email");

        });
    }).catch(function(error) {
        // An error happened.
    });
}