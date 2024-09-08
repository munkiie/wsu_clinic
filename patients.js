document.addEventListener("DOMContentLoaded", function () {
    // Appointment Booking Form
    const appointmentForm = document.getElementById("appointmentForm");
    appointmentForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const doctor = document.getElementById("doctor").value;
        const appointmentDate = document.getElementById("appointmentDate").value;
        const appointmentTime = document.getElementById("appointmentTime").value;

        // Here you can send the form data to the server using fetch or AJAX
        console.log("Appointment booked for:", name, doctor, appointmentDate, appointmentTime);
        alert("Your appointment has been booked!");

        // Clear form fields
        appointmentForm.reset();
    });

    // Handle appointment form submission
    const appointmentFormDetailed = document.getElementById('appointment-form');
    appointmentFormDetailed.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get form data
        const fullName = document.getElementById('fullName').value;
        const age = document.getElementById('age').value;
        const contact = document.getElementById('contact').value;
        const reason = document.getElementById('reason').value;

        // Simulate sending data to a server
        // In a real application, you would use fetch or XMLHttpRequest to send data to the backend
        console.log({
            fullName: fullName,
            age: age,
            contact: contact,
            reason: reason
        });

        // Show success message
        document.getElementById('success-message').style.display = 'block';

        // Clear the form
        appointmentFormDetailed.reset();
    });

    // This function simulates updating appointment data.
    function updateAppointmentStatus(appointmentId, responseDate) {
        const row = document.querySelector(`tr[data-appointment="${appointmentId}"]`);
        if (row) {
            const responseDateCell = row.querySelector('.response-date');
            responseDateCell.textContent = responseDate;
        }
    }
    
    // Simulate fetching data
    function fetchAppointments() {
        // Example data to simulate response from server
        const appointments = [
            { id: '1', responseDate: '2024-09-20' }
        ];
        
        appointments.forEach(appointment => {
            updateAppointmentStatus(appointment.id, appointment.responseDate);
        });
    }
    
    fetchAppointments(); // Fetch and update appointments when the page loads
});
