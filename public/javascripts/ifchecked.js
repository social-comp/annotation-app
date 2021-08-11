//not used 
function dynInput(cbox) {
    if (cbox.checked) {
    
    var input = document.createElement("input");
    input.type = "text";
    var div = document.createElement("div");
    div.id = cbox.name;
    div.innerHTML = "Details " + cbox.name + ": ";
    div.appendChild(input);
    var checkbox = document.createElement('check');
    document.getElementById("insertinputs").appendChild(div);
    
    
    } else {
    document.getElementById(cbox.name).remove();
    }
}
