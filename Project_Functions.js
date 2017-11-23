
var buttonAdd = document.getElementById('button_add');
buttonAdd.addEventListener('click', myEvent);
function myEvent() {
var task = document.getElementById("txt").value;
var div = document.createElement('div');
div.innerHTML = "<h3>Task Name</h3>"+task +"<br>"+"<button id='del'>delete</button>"+"<button>edit</button>";
document.body.appendChild(div);

}

