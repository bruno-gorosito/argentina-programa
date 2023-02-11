
document.getElementById('form-contact').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('form-contact').style.display = 'none';
    document.getElementById('contact-success').style.display = 'inline';
})


document.getElementById('close-button').addEventListener('click', function() {   
    document.getElementById('contact-success').style.display = 'none'
    document.getElementById('form-contact').style.display = 'inline';
    document.getElementById('form-contact').reset();
})