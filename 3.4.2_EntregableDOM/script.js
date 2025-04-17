function addCommentFunc(){
    let date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let dateStr = `${day}/${month}/${year} ${hour}:${minutes}:${seconds}`;
    let addCommentInput = document.getElementById("addCommentInput");
    console.log(addCommentInput.value +  " " + dateStr); //value atribute helps to get the value of the input field

    if (addCommentInput.value == "") {
        //alert("Please enter a task");
        document.getElementById("errorMessage").innerText = "the field is empty"; //focus method helps to set the focus on the input field
        return;
    }

    //accesing the li element
    let commentList = document.getElementById("commentList");
    //creating a new li element
    let newDiv = document.createElement("div");
    //newDiv.innerText = addCommentInput.value;
    newDiv.classList.add("comment");
    let newh2 = document.createElement("h2");
    newh2.innerText = addCommentInput.value;
    let newP = document.createElement("p");
    newP.innerText = dateStr;

    // Creating a delete button
    let deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.classList.add("delete-btn");

    // Adding an event listener to the delete button
    deleteButton.addEventListener("click", function () {
        commentList.removeChild(newDiv);
    });
    
    newDiv.appendChild(newh2); //appending the new li element to the ul element
    newDiv.appendChild(newP); //appending the new li element to the ul element
    newDiv.appendChild(deleteButton); //appending the new li element to the ul element
    
    commentList.appendChild(newDiv); //appending the new li element to the ul element
}

addComment.addEventListener("click", addCommentFunc);
