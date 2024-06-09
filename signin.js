function validateLogIn( login_form )
{
    if ( isValid(login_form.fname, login_form.lname) )
        window.location.replace('controls.html')
    else
        alert('Incorrect! Try again'); 
}

function isValid(fname, lname)
{
    return fname.value === 'leo'; 
}