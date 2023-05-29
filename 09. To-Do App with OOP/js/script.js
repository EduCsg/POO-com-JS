class Todo {
	constructor() {
		this.totalTasks = document.querySelectorAll(".task").length;
	}

	addTask(taskText) {
		// clona template
		let template = document.querySelector(".task").cloneNode(true);

		// remove classe hide
		template.classList.remove("hide");

		// add text
		let templateText = template.querySelector(".task-title");

		templateText.textContent = taskText;

		// add events
		let taskList = document.querySelector("#tasks-container");

		// add to list
		taskList.appendChild(template);

		// add events to tasks
		this.addEvents();

		this.checkTasks("add");
	}

	removeTask(task) {
		// find the parent task
		let parentEl = task.parentElement;

		// remove task
		parentEl.remove();

		this.checkTasks("remove");
	}

	completeTask(task) {
		// add done class
		task.classList.toggle("done");
	}

	addEvents() {
		let removeBtns = document.querySelectorAll(".fa-trash");
		let lastRemoveBtn = removeBtns[removeBtns.length - 1];

		let doneBtns = document.querySelectorAll(".fa-check");
		let lastDoneBtn = doneBtns[doneBtns.length - 1];

		// add remove event
		lastRemoveBtn.addEventListener("click", function () {
			todo.removeTask(this);
		});

		// add done event
		lastDoneBtn.addEventListener("click", function () {
			todo.completeTask(this);
		});
	}

	checkTasks(command) {
		let msg = document.querySelector("#empty-tasks");

		// check if there are tasks
		if (command == "add") {
			this.totalTasks += 1;
		} else if (command == "remove") {
			this.totalTasks -= 1;
		}

		if (this.totalTasks == 1) {
			msg.classList.remove("hide");
		} else {
			msg.classList.add("hide");
		}
	}
}

let todo = new Todo();

// events

let addBtn = document.querySelector("#add");

addBtn.addEventListener("click", (e) => {
	e.preventDefault();

	let taskText = document.querySelector("#task");
	const emptyInput = document.querySelector("#empty-input");

	if (taskText.value == "") {
		emptyInput.classList.remove("hide");

		return;
	}

	emptyInput.classList.add("hide");
	todo.addTask(taskText.value);
	taskText.value = "";
});
