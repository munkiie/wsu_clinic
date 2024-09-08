document.addEventListener('DOMContentLoaded', function() {
    // Handle respond button click
    document.querySelectorAll('.respond-btn').forEach(button => {
        button.addEventListener('click', function() {
            const patientId = this.getAttribute('data-patient');
            const appointmentId = this.getAttribute('data-appointment');
            const responseDateInput = this.closest('tr').querySelector('.response-date');
            const responseDate = responseDateInput.value;

            if (responseDate) {
                // Simulate sending the response to the server
                updateAppointment(patientId, appointmentId, responseDate);

                // Clear the input field and disable the button
                responseDateInput.value = '';
                this.textContent = 'Responded';
                this.disabled = true;
            } else {
                alert('Please enter a response date.');
            }
        });
    });

    // Mock function to update appointment
    function updateAppointment(patientId, appointmentId, responseDate) {
        // Simulate a network request
        setTimeout(() => {
            alert(`Appointment with ID ${appointmentId} has been updated with the response date: ${responseDate}.`);
            // In a real application, you would also update the patient’s appointment status in the database here

            // Example of updating the UI (for demonstration purposes)
            const patientAppointments = document.querySelector('#appointments-body');
            patientAppointments.querySelectorAll('tr').forEach(row => {
                if (row.querySelector('button').getAttribute('data-appointment') === appointmentId) {
                    row.querySelector('td:nth-child(4)').textContent = responseDate;
                }
            });
        }, 1000);
    }
});
