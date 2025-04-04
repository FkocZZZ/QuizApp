document.querySelector('.log').addEventListener('click', async (event) => {
    event.preventDefault(); // Prevent the form from submitting

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('http://localhost:3000/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        if (response.ok) {
            alert('Login successful!');
            console.log('Token:', data.token);
        } else {
            alert(data.message || 'Login failed');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    }
});

// Logout functionality
// document.querySelector('.log').addEventListener('click', (event) => {
//     event.preventDefault(); // Prevent default behavior

//     // Clear the token from localStorage
//     localStorage.removeItem('token');
//     alert('Logged out successfully!');
//     console.log('Token cleared from localStorage.');

//     // Optionally redirect to the login page
//     //window.location.href = '/index.html'; // Adjust the path if needed
// });

// // Register functionality
// document.querySelector('.register').addEventListener('click', async (event) => {
//     event.preventDefault(); // Prevent the form from submitting

//     const email = document.getElementById('register-email').value;
//     const username = document.getElementById('register-username').value;
//     const password = document.getElementById('register-password').value;

//     try {
//         const response = await fetch('http://localhost:3000/auth/register', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ email, username, password }),
//         });

//         const data = await response.json();

//         if (response.ok) {
//             alert('Registration successful! Welcome, ' + data.user.username);
//         } else {
//             alert(data.message || 'Registration failed');
//         }
//     } catch (error) {
//         console.error('Error:', error);
//         alert('An error occurred. Please try again.');
//     }
// });

// Register functionality
document.querySelector('.register').addEventListener('click', async (event) => {
    event.preventDefault(); // Prevent the form from submitting

    const email = document.getElementById('email').value;
    const usernameInput = document.getElementById('username'); // Check if the username field exists
    const username = usernameInput ? usernameInput.value || null : null; // Set to null if the field is empty or missing
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('http://localhost:3000/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, username, password }),
        });

        const data = await response.json();

        if (response.ok) {
            alert('Registration successful! Welcome, ' + data.user.username || 'User');

             // Clear the input fields
             document.getElementById('email').value = '';
             if (usernameInput) usernameInput.value = '';
             document.getElementById('password').value = '';
             
        } else {
            alert(data.message || 'Registration failed');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    }
});