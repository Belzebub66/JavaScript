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
    //newLi.innerText = addTaskInput.value;

    //creating a paragraph element
    let newP = document.createElement("p"); 
    newP.innerText = addTaskInput.value;
    newLi.appendChild(newP);

    let buttonDelete = document.createElement("button");
    buttonDelete.innerText = "Delete";
    
    buttonDelete.addEventListener("click", () => {
        //taskList.removeChild(newLi);
        newLi.remove(); //removes the li element from the ul element
    });

    newP.appendChild(buttonDelete);


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

// a function is a code block of reusable code that performs a specific task
function suma(a, b) {
    return a + b;
}
let result = suma(2, 3);

//anonymous function its known as an arrow function
/*
(param1, param2, paramn) =>{
    //code block
    return something;
}

doesnt have funcion and namenctions is to use them 

the idea of these fu
*/ 
//example
let sumfunction = (a, b) => {
    return a + b;
}

sumfunction(5,1);



/*
IN WEB DEVELOPMENT WE USE THE CONCEPT OF COMPONENTS
Is a building block for graphical user interface (GUI) applications.
*/
let i=0;
let subtitle = "This is a subtitle" + i;
let paragraph = "This is a paragraph" + i;


function subtitleandP(){
    let newDiv = document.createElement("div");
    newDiv.innerHTML = 
    "<h2>" + subtitle + "</h2>"
    "<p>" + paragraph + "</p>"
    ;
    return newDiv;
}
for (i = 0; i < 3; i++) {
    document.body.appendChild(subtitleandP());
}

`text ${i}`
//the pages are not created manually
//they are created by a function that creates the page and returns it

console.log(document.getElementsByTagName("h2"));

let elementsh2blue = document.getElementsByTagName("h2blue");
for(let j = 0; j < elementsh2blue.lenght; j++){
    elementsh2blue[j].style.backgroundcolor = "green";
}

/* 
how to name things in programming
1. camelCase -> for variables and functions
2. PascalCase -> for classes
3. snake_case -> for files and folders
4. kebab-case

for our final project we must use camelCase

*/