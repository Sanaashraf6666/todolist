function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value.trim();

    if (taskText !== "") {
        var li = document.createElement("li");
        li.textContent = taskText;
        li.onclick = function() {
            li.classList.toggle("completed");
        }
        document.getElementById("taskList").appendChild(li);
        taskInput.value = "";
    } else {
        alert("Please enter a task!");
    }
}
