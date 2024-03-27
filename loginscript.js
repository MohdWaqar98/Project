document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
   
    // Get username and password from the form
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Check if username and password are correct (dummy validation)
    if (username === 'waqar' && password === '1234') {
      // Redirect to dashboard page
      window.location.href = 'dashboard.html';
    } 
    if (username === 'krish' && password === '123') {
        // Redirect to dashboard page
        window.location.href = 'dashboard.html';
      }
    else {
      // Display error message (dummy message for demonstration)
      alert('Invalid username or password. Please try again.');
    }
  });