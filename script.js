// Selecting elements from the DOM
const todoForm = document.getElementById('todoForm');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Function to create a new task item
function createTask(taskValue) {
  const li = document.createElement('li');
  li.innerHTML = `
    ${taskValue} 
    <button class="delete-btn">Delete</button>
  `;
  taskList.appendChild(li);

  // Adding event listener to delete button
  const deleteBtn = li.querySelector('.delete-btn');
  deleteBtn.addEventListener('click', function() {
    li.remove();
  });
}

// Event listener for form submission
todoForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission
  const taskValue = taskInput.value.trim();
  if (taskValue !== '') {
    createTask(taskValue);
    taskInput.value = ''; // Clear input field after adding task
  }
});
