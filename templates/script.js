// Get the input element
var input = document.querySelector('input[name="genders_type"]');

// Add an event listener for input change
input.addEventListener('input', function() {
    var valid = false;
    var options = document.getElementById('genders').getElementsByTagName('option');
    
    // Check if the input value matches any of the options
    for (var i = 0; i < options.length; i++) {
        if (input.value.toUpperCase() === options[i].value.toUpperCase()) {
            valid = true;
            break;
        }
    }
    
    // If the input value is not valid, clear it
    if (!valid) {
        input.value = '';
    }
});
