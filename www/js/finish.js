var nov = 0;
            db.collection("repairing").get().then(function (querySnapshot) {
                querySnapshot.forEach(function (doc) {
                    var DateTime = doc.data().date.toDate();
                    DateTime = DateTime.toUTCString();
                    DateTime = DateTime.split(' ').slice(2, 3).join(' ');
                    console.log(DateTime);
                    if(DateTime === "Nov" && doc.data().status === "ดำเนินการเสร็จสิ้น"){
                        nov++
                    }
                    
                    
                });
                console.log(nov);
            });