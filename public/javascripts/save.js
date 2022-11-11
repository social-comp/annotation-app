// const fs = require('fs');

function show(){
    console.clear();

    var formData = new FormData(document.querySelector("#myform"));

    var jsonString = JSON.stringify(formData);


    for(var pair of formData.entries()){
        console.log(pair[0], pair[1]);
    }
    
    event.preventDefault();    
} 
document.getElementById("next").addEventListener("click", show);

/*
function myFunction(writefile){

  console.log("saving to file");


  var namecalling = document.getElementById('namecalling').value
  var repetetion = document.getElementById('repetition').value

  jstruct = {nC: namecalling, rP: repetetion};

  
  const jsonString = JSON.stringify(jstruct);

  // Writing to our JSON file
  // var newData2 = this.namecalling
  // var annotatedfile = "shruti.json"
  fs.writeFile('shruti.json', jsonString, (err) => {
    // Error checking
    if (err) throw err;
    console.log("New data added");
  });



}
*/