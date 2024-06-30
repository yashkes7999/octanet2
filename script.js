let inputBox = document.getElementById('input-box')
let listContainer = document.getElementById('taskList')
function AddTask(){
    if(inputBox.value == "")
    alert("you must enter something");
    else{
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = "&#10006";
        li.appendChild(span);
        inputBox.value = "";
        saveItem();
    }
}
listContainer.addEventListener('click',(e)=>{
if(e.target.tagName == 'LI'){
e.target.classList.toggle('checked');
saveItem();
}
else if(e.target.tagName == 'SPAN'){
e.target.parentElement.remove();
saveItem();
}
});

function saveItem(){
    localStorage.setItem('data',listContainer.innerHTML);
}
function showItem(){
    listContainer.innerHTML = localStorage.getItem('data');
}
showItem();