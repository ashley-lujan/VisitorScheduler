//globals
const startTime = new Date(0, 0, 0, 9, 0, 0); 
const endTime = new Date(0, 0, 0, 20, 0, 0); 




function onButtonClick() 
{
    alert("Button clicked!"); 
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

/* Form Days of the Week*/
const weekDays = ["_", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]; 

var table = document.getElementById("form_table"); 
// var current_row = table.insertRow(0); //get first row
// for (let day = 0; day < weekDays.length; day++)
// {

// }

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
