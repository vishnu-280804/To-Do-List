let count = 0;
let btn1 = document.querySelector(".hello");
let list = [];

// For adding the tasks
btn1.addEventListener("click", () => {
    let input = document.querySelector(".inputs").value.trim();

    if (input) {
        // Directly add task to the list
        list.push(input);
        
        let p = document.createElement("p");
        p.innerHTML = input;
        p.style.color = "white";
        p.style.backgroundColor = "black";
        p.style.width = "300px";
        p.style.fontWeight = 800;
        p.style.border = "2px solid black";
        
        // Append to the task-list container
        document.querySelector(".right").appendChild(p);
        count++;
        document.querySelector("#count").innerHTML = `No of Tasks: ${count}`;
        
        // Clear the input field
        document.querySelector(".inputs").value = '';
    } else {
        alert("Please enter a task!");
    }
});

// For searching the task which the user has added
var i = document.querySelector("#inputLeft");
i.addEventListener("keydown", (event) => {
    if (event.key === 'Enter') {
        let p = document.createElement("p");
        let searchValue = i.value.trim();
        
        // Check if the task exists in the list
        if (list.includes(searchValue)) {
            p.innerHTML = searchValue;
            p.style.backgroundColor = "black";
            p.style.color = "white";
            p.style.width = "300px";
            p.style.fontWeight = 800;
            p.style.border = "2px solid black";
            document.querySelector(".task-list").append(p);
        } else {
            alert(`${searchValue} is not found in the tasks sections`);
        }
    }
});
