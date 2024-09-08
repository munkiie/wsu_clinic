document.addEventListener("DOMContentLoaded", function () {
    // Reschedule Appointment Form
    const manageAppointmentForm = document.getElementById("manageAppointmentForm");
    manageAppointmentForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const appointmentSelect = document.getElementById("appointmentSelect").value;
        const newAppointmentDate = document.getElementById("newAppointmentDate").value;
        const newAppointmentTime = document.getElementById("newAppointmentTime").value;

        // Here you can send the form data to the server using fetch or AJAX
        console.log("Rescheduled Appointment:", appointmentSelect, newAppointmentDate, newAppointmentTime);
        alert("The appointment has been rescheduled!");

        // Clear form fields
        manageAppointmentForm.reset();
    });

    // Edit Medical History
    const saveButtons = document.querySelectorAll(".save-button");

    saveButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            const row = button.closest("tr");
            const date = row.querySelector("input[type='date']").value;
            const condition = row.querySelector("input[type='text']").value;
            const doctor = row.querySelector("input[type='text']").value;

            // Here you can send the updated medical history to the server using fetch or AJAX
            console.log("Updated Medical History:", date, condition, doctor);
            alert("Medical history has been updated.");
        });
    });

    // Logout functionality
    window.logout = function () {
        alert("You have logged out.");
        window.location.href = "login.html"; // Redirect to login page or homepage
    };
});
// Simulate fetching appointment data
const appointmentsList = [
    {
        fullName: 'Patient A',
        age: '30',
        contact: '1234567890',
        reason: 'Routine Checkup',
        status: 'Pending',
    },
    {
        fullName: 'Patient B',
        age: '25',
        contact: '0987654321',
        reason: 'Flu Symptoms',
        status: 'Pending',
    }
];

function renderAppointments() {
    const tbody = document.getElementById('appointments-list');
    tbody.innerHTML = ''; // Clear previous entries

    appointmentsList.forEach(appointment => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${appointment.fullName}</td>
            <td>${appointment.age}</td>
            <td>${appointment.contact}</td>
            <td>${appointment.reason}</td>
            <td>
                <select class="status">
                    <option value="Pending" ${appointment.status === 'Pending' ? 'selected' : ''}>Pending</option>
                    <option value="Available" ${appointment.status === 'Available' ? 'selected' : ''}>Available</option>
                    <option value="Not Available" ${appointment.status === 'Not Available' ? 'selected' : ''}>Not Available</option>
                </select>
            </td>
            <td>
                <textarea placeholder="Response"></textarea>
                <button class="respond-btn">Respond</button>
            </td>
        `;
        tbody.appendChild(tr);
    });
    
// Initial render
renderAppointments();

// Handle profile update
document.getElementById('profile-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Update profile (simulate sending data to server)
    const name = document.getElementById('doctor-name').value;
    const email = document.getElementById('doctor-email').value;
    const specialty = document.getElementById('doctor-specialty').value;

    console.log({
        name: name,
        email: email,
        specialty: specialty
    });

    alert('Profile successfully updated!');
});
}

