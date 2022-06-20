const form = document.querySelector("#new-task-form");
const input = document.querySelector("#new-task-input");
const list_el = document.querySelector("#tasks");
const completed_list_el = document.querySelector("#completed_tasks");
const dueDate = document.querySelector("#due-date")

window.addEventListener('load', getAllTasks)


	form.addEventListener('submit', (e) => {
		// e.preventDefault()
		// console.log(e)
		createTask(e);

		// const task = input.value;

		// const task_el = document.createElement('div');
		// task_el.classList.add('task');

		// const task_content_el = document.createElement('div');
		// task_content_el.classList.add('content');

		// task_el.appendChild(task_content_el);

		// const task_input_el = document.createElement('input');
		// task_input_el.classList.add('text');
		// task_input_el.type = 'text';
		// task_input_el.value = task;
		// task_input_el.setAttribute('readonly', 'readonly');

		// task_content_el.appendChild(task_input_el);

		// const task_actions_el = document.createElement('div');
		// task_actions_el.classList.add('actions');
		
		// const task_edit_el = document.createElement('button');
		// task_edit_el.classList.add('edit');
		// task_edit_el.innerText = 'Edit';

		// const task_delete_el = document.createElement('button');
		// task_delete_el.classList.add('delete');
		// task_delete_el.innerText = 'Delete';

		// task_actions_el.appendChild(task_edit_el);
		// task_actions_el.appendChild(task_delete_el);

		// task_el.appendChild(task_actions_el);

		// list_el.appendChild(task_el);

		// input.value = '';

		// task_edit_el.addEventListener('click', (e) => {
		// 	if (task_edit_el.innerText.toLowerCase() == "edit") {
		// 		task_edit_el.innerText = "Save";
		// 		task_input_el.removeAttribute("readonly");
		// 		task_input_el.focus();
		// 	} else {
		// 		task_edit_el.innerText = "Edit";
		// 		task_input_el.setAttribute("readonly", "readonly");
		// 	}
		// });

		// task_delete_el.addEventListener('click', (e) => {
		// 	list_el.removeChild(task_el);
		// });
	});


async function createTask(e) {
	// e.preventDefault()
	const task = input.value;
	const jsonDate = new Date()
    console.log(dueDate.value)
	
	let taskData = {
		task_content: task,
		due_date: dueDate.value,
		completed: "false"
	};
console.log({taskData})

	const string = JSON.stringify(taskData)
	console.log({string})
	// $.post( "https://jjmac7777-mvp1.herokuapp.com/api/create", string, function( data, status ) {
	// 	console.log(`${data} and status is ${status}`,taskData);
	//   });

	const response = await fetch("http://127.0.0.1:8001/api/create", {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: string
	})
	const data = await response.json()
    
	console.log(data)
}

async function updateTasks(inputID, id, currStat) {
	console.log(inputID, id, currStat)
	const input = document.getElementById(`${inputID}`)
	const updatedTask = input.value;
	const jsonDate = new Date()
	console.log(updatedTask)
	let updatedData = {
		task_content: updatedTask,
		due_date: dueDate,
		completed: `${currStat}`
	};

	const string = JSON.stringify(updatedData)
	console.log(string)
	const response = await fetch(`http://127.0.0.1:8001/api/update/${id}`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json'
		},
		body: string
	})
	const data = await response.json()
	console.log(data)
	if (currStat === "true"){
        task_complete_el.style.color = "green"
		completed_list_el.appendChild(task_el);
    }
}


async function deleteTask(inputID, id) {
	console.log(inputID, id)
	const input = document.getElementById(`${inputID}`)
	const task = input.value;
	const response = await fetch(`http://127.0.0.1:8001/api/delete/${id}`, {
		method: 'DELETE',
		})
	const data = await response.json()
	console.log(data)
	
}

async function getAllTasks() {
  
	await $.get("http://127.0.0.1:8001/api/tasks" , (data) => {
		
		for (let i = 0; i < data.length; i++) {
			const task = data[i].task_content;
			const id = data[i].id
            const d = data[i].due_date
            const dateStr = d.toString()
            const date = new Date(dateStr).toString()
            console.log(d, dateStr, date)

            

		const task_el = document.createElement('div');
		task_el.classList.add('task');

		const task_content_el = document.createElement('div');
		task_content_el.classList.add('content');
		task_el.appendChild(task_content_el);

		const task_input_el = document.createElement('input');
		task_input_el.classList.add('text');
		task_input_el.type = 'text';
		task_input_el.value = task;
		task_input_el.id = `task${id}`
		const inputID = task_input_el.id
		task_input_el.setAttribute('readonly', 'readonly');

		task_content_el.appendChild(task_input_el);

        const task_date_el = document.createElement('input');
		task_date_el.classList.add('list-due-date');
		task_date_el.type = 'text';
		task_date_el.value = date.slice(0,15)
		task_date_el.id = `date${id}`
		const inputDateID = task_date_el.id
		task_date_el.setAttribute('readonly', 'readonly');
        task_content_el.appendChild(task_date_el);

		const task_actions_el = document.createElement('div');
		task_actions_el.classList.add('actions');
		
		const task_edit_el = document.createElement('button');
		task_edit_el.classList.add('edit');
		task_edit_el.innerText = 'Edit';

		const task_save_el = document.createElement('button');
		task_save_el.classList.add('save');
		task_save_el.innerText = 'Save';
        const task_delete_el = document.createElement('button');
        const completed_task_delete_el = document.createElement('button');

		if(!data[i].completed){
            task_delete_el.classList.add('delete');
		    task_delete_el.innerText = 'Delete';
        }
        else {
            completed_task_delete_el.classList.add('delete');
		    completed_task_delete_el.innerText = 'Delete';
        }

		const task_complete_el = document.createElement('button');
		task_complete_el.classList.add('complete');
		task_complete_el.innerText = 'Completed';

		task_actions_el.appendChild(task_edit_el);
		task_actions_el.appendChild(task_save_el);
		task_actions_el.appendChild(task_delete_el);
        task_actions_el.appendChild(completed_task_delete_el);
		task_actions_el.appendChild(task_complete_el);

		task_el.appendChild(task_actions_el);
            console.log(data[i].completed)
		if(!data[i].completed){
			list_el.appendChild(task_el);
		}
		else {
            
            task_complete_el.style.color = "green"
            completed_list_el.appendChild(task_el)
			
        }

		task_edit_el.addEventListener('click', (e) => {
			
				task_input_el.removeAttribute("readonly");
				task_input_el.focus();
						
		});

		completed_task_delete_el.addEventListener('click', (e) => {
            deleteTask(inputID, id)
            completed_list_el.removeChild(task_el);
            
        })
        task_delete_el.addEventListener('click', (e) => {
			deleteTask(inputID, id)
			list_el.removeChild(task_el);
            
		});
		task_save_el.addEventListener('click', (e) => {
			let currentStatus = data[i].completed
            updateTasks(inputID, id, currentStatus)
            task_input_el.setAttribute("readonly", "readonly")
            
		});
		task_complete_el.addEventListener('click', (e) => {
			task_complete_el.style.color = "green"
            data[i].completed = "true"
            currentStatus = data[i].completed
            console.log(currentStatus)
            updateTasks(inputID, id, currentStatus)
			location.reload()
		});

		}
		console.log(data)
		
  })
  
  
}


// ticker
ticker()
function ticker(){
    const ticker_el = document.getElementById("hwrap");
    const moveDiv = document.createElement("div")
    moveDiv.classList.add("hmove")
    ticker_el.appendChild(moveDiv)
    $.get("http://127.0.0.1:8001/api/news" , (data) => {
console.log(data)

    for (let i = 0; i < 20; i++) {
        const url = data.articles[i].url
        const tempDiv = document.createElement("div")
        tempDiv.classList.add("hitem")
        tempDiv.innerHTML = `${data.articles[i].title} ${tempDiv.title}`
        moveDiv.appendChild(tempDiv)
        // console.log(url)
    }

    })
}
// create Container
const container = document.getElementById("container");
const currentInfo = document.createElement("current-info");
currentInfo.classList.add("current-info");
container.appendChild(currentInfo);

const currentContainer = document.createElement("current-container");
currentContainer.classList.add("current-container");
currentInfo.appendChild(currentContainer);

const dateContainer = document.createElement("date-container");
dateContainer.classList.add("date-container");
currentInfo.appendChild(dateContainer);

const date = document.createElement("div");
date.classList.add("date");
date.id = "date";
date.textContent = "Thursday, 28 April";
dateContainer.appendChild(date);

let cdate = moment().format("dddd, MMMM Do YYYY")
let now = moment().format("h:mm a");
let dateandtime = 
dateContainer.innerHTML = `${cdate}<br/>Current time: ${now}`

