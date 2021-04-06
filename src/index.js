document.addEventListener("DOMContentLoaded", () => {
  // your code here
    console.log("Testing")

    //get the form by its id 
    let myTask = document.querySelector("#create-task-form");
    //get all my todo
    let allMyTasks = document.querySelector("#tasks");

  myTask.addEventListener("submit", function(e) {
  e.preventDefault();
//prevents default behaviors 

//create a new variable to hold the information of a new input 
const newTask = document.querySelector("#new-task-description").value;
//add to allMyTasks variable << All Tasks 
allMyTasks.innerHTML += `<li> ${newTask}
  </li>`;
  

});

   

});

//- As a user, I should be able to type a task into the input field.
//- As a user, I should be able to click some form of a submit button.
//- As a user, the task string that I provided should appear on the DOM after the submit button has been activated.