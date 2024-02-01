document.addEventListener('DOMContentLoaded', function() {
    const addCustomerForm = document.getElementById('addCustomerForm');
    const displaySection = document.getElementById('addedCustomerDetails');

    addCustomerForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const city = document.getElementById('city').value;
        const state = document.getElementById('state').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const address = document.getElementById('address').value;

        // Create a JSON payload
        const customerData = {
            firstName: firstName,
            lastName: lastName,
            city: city,
            state: state,
            email: email,
            phone: phone,
            address: address
        };

        // Make a POST request to create a new customer
        fetch('http://localhost:8080/api/customer', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(customerData),
        })
        
        .then(response => response.json())
        .then(data => {
            // Display added customer details
            document.getElementById('addedFirstName').innerText = data.firstName;
            document.getElementById('addedLastName').innerText = data.lastName;
            document.getElementById('addedCity').innerText = data.city;
            document.getElementById('addedState').innerText = data.state;
            document.getElementById('addedEmail').innerText = data.email;
            document.getElementById('addedPhone').innerText = data.phone;
            document.getElementById('addedAddress').innerText = data.address;

            // Show the display section
            displaySection.style.display = 'block';
        })
        .catch(error => console.error('Error adding customer:', error));
    });
});
