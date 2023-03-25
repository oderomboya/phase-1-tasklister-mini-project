

document.addEventListener("DOMContentLoaded", () => {
  addEventListener("submit", (event) => {
    event.preventDefault();

    const chore = document.querySelector("#new-task-description").value;

   
    const newTask = document.createElement("li");
    newTask.textContent = chore;
    document.querySelector("#tasks").appendChild(newTask);
    
    chore.value = "";  
  });
});
