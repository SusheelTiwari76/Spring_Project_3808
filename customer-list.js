// customer-list.js
document.addEventListener('DOMContentLoaded', function() {
    // Fetch customer data and populate the table
    fetchCustomers();

    // Function to fetch customers from the backend
    function fetchCustomers() {
        fetch('http://localhost:8080/api/customers')
            .then(response => response.json())
            .then(data => displayCustomers(data))
            .catch(error => console.error('Error fetching customers:', error));
    }

    // Function to display customers in the table
    function displayCustomers(customers) {
        const tableBody = document.getElementById('customerTableBody');
        tableBody.innerHTML = '';

        customers.forEach(customer => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${customer.id}</td>
                <td>${customer.firstName}</td>
                <td>${customer.lastName}</td>
                <td>${customer.city}</td>
                <td>${customer.state}</td>
                <td>${customer.email}</td>
                <td>${customer.phone}</td>
                <td>${customer.address}</td>
                <td>
                    <button onclick="viewCustomer(${customer.id})">View</button>
                    <button onclick="editCustomer(${customer.id})">Edit</button>
                    <button onclick="deleteCustomer(${customer.id})">Delete</button>
                </td>
            `;
            tableBody.appendChild(row);
        });
    }

    // Function to redirect to the Add Customer page
    function redirectToNewCustomer() {
        window.location.href = 'add-customer.html';
    }
});
