//globals
const startTime = new Date(0, 0, 0, 9, 0, 0); 
const endTime = new Date(0, 0, 0, 20, 0, 0); 


function onButtonClick() 
{
    console.log("this is not rlly working idk how i would make it work"); 
}


function registerNew(btn)
{
    btn.textContent = "oh no!"; 
    // btn.style.background = "black"; 
}

// const button = document.querySelector('.test'); 
// button.addEventListener('click', onButtonClick); 


/* Creating Form */

const row = 10; 

var table = document.getElementById("form_table"); 

/* Form Days of the Week*/
const weekDays = ["_", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; 
var first_row = table.rows[0]; 
var current_cell = first_row.insertCell(0); 
current_cell.innerHTML = "_"; 

var currentDay = new Date(); 

for (let day = 1; day <= 7; day++)
{
    current_cell = first_row.insertCell(day); 
    
    current_cell.innerHTML = `${weekDays[currentDay.getDay() + 1]}, ${currentDay.getMonth()}/${currentDay.getDate()}/${currentDay.getYear()}`; 
    currentDay.setTime(currentDay.getTime() + 24 * 60 * 60 * 1000); 
}

const width = weekDays.length; 
var dateHolder = new Date(startTime.getTime()); 
/* Hour Blocks */
let r = 1; 
while (dateHolder.getTime() <= endTime.getTime())
{
    var table = document.getElementById("form_table"); 
    var current_row = table.insertRow(r); 
    
    var timeBlock = current_row.insertCell(0); 

    var timestr = dateHolder.toLocaleTimeString(); 
    timeBlock.innerHTML = `${timestr}`; 

    for (let i = 1; i < width; i++)
    {
        var cell = current_row.insertCell(i); 
        const newButton = document.createElement('button'); 
        newButton.className = "newButton"; 
        newButton.textContent = "this is a new button"; 
        // document.body.appendChild(newButton); 

        newButton.addEventListener('click', () => {
            registerNew(newButton); 
        })

        cell.appendChild(newButton); 
    }

    dateHolder.setTime(dateHolder.getTime() + 30 * 60 * 1000); 
    r++; 
}
