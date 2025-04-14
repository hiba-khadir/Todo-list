let tasksArray = [];
let num;


//add a task 
function addTask(){
    //define the html for a standard new task  
    const taskHolderHTML = ` <div class="task">

                                <button     class="check-button"    onclick="checkTask(this)">
                                    <img  class= "check-box" src="icons/check-box-off.svg" >
                                </button>
                                <input placeholder="Enter The New Task" class="input-task"  type="text"> 
                              
                                <button class="delete-task" onclick="deleteTask(this)">
                                    <img class = "delete-task-img" src="icons/delete.svg">
                                </button>
                                
                            </div>`;

    let taskList = document.getElementById('js-tasks');    
    taskList.innerHTML += taskHolderHTML ;
}

//check or uncheck a tasks  
function checkTask(button){
    const checkBox = button.querySelector('.check-box');
    if(
        checkBox.src.endsWith('icons/check-box-on.svg')){ //if on turn off
        checkBox.src = 'icons/check-box-off.svg';
    }

    else if(checkBox.src.endsWith('icons/check-box-off.svg')){
        checkBox.src = 'icons/check-box-on.svg'; //if off turn on 
    }

}

function deleteAllTasks(){
    document.getElementById("js-tasks").innerHTML = "";
}

//when the delete icon on the task is clicked
function deleteTask(button){
    //delete the task that is parent of the button
    button.closest('.task').innerHTML = '';
}
