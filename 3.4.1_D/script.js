function addTaskFunc() {
    let addTaskInput = document.getElementById("addTaskInput");
    console.log(addTaskInput.value); //value atribute helps to get the value of the input field

    if (addTaskInput.value == "") {
        //alert("Please enter a task");
        document.getElementById("errorMessage").innerText = "the field is empty"; //focus method helps to set the focus on the input field
        return;
    }

    //accesing the li element
    let taskList = document.getElementById("taskList");
    //creating a new li element
    let newLi = document.createElement("li");
    newLi.innerText = addTaskInput.value;

    taskList.appendChild(newLi); //appending the new li element to the ul element
    
    //to delete and element 
    let errorDialog = document.getElementById("errorDialog");
    document.body.removeChild(errorDialog);

    //
}


/*
let addTask = document.getElementById("addTask");
console.table(addTask);
addTask.onclick = addTaskFunc;
*/
/*
addEventListener is a better way to add event listeners
this method receives 2 arguments
1st argument is the event we want to listen to
2nd argument is the function we want to execute when the event occurs
*/

addTask.addEventListener("click", addTaskFunc);
