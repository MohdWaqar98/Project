let documentCount = 1;

// Get the username from the URL parameter
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const username = urlParams.get('username');

// Update the welcome message with the username
document.getElementById('username').innerText = username;

function addDocument() {
  const fileInput = document.getElementById('fileInput');
  const documentName = document.getElementById('documentName').value;
  const issueDate = document.getElementById('issueDate').value;
  const table = document.getElementById('documentTable').getElementsByTagName('tbody')[0];

  if (fileInput.files.length === 0) {
    alert('Please select a file.');
    return;
  }

  const file = fileInput.files[0];
  const url = URL.createObjectURL(file);

  const newRow = table.insertRow(table.rows.length);
  const cell1 = newRow.insertCell(0);
  const cell2 = newRow.insertCell(1);
  const cell3 = newRow.insertCell(2);
  const cell4 = newRow.insertCell(3);

  cell1.appendChild(document.createTextNode(documentCount++));
  cell2.appendChild(document.createTextNode(documentName));
  cell3.appendChild(document.createTextNode(issueDate));

  const viewLink = document.createElement('a');
  viewLink.href = url;
  viewLink.target = '_blank';
  viewLink.innerText = 'View Document';
  cell4.appendChild(viewLink);

  // Clear input fields after adding document
  document.getElementById('documentName').value = '';
  document.getElementById('issueDate').value = '';
  fileInput.value = '';
}

// Function to logout (dummy function for demonstration)
function logout() {
  alert('Logged out successfully!');
  // Redirect to the login page
  window.location.href = 'login.html';
}