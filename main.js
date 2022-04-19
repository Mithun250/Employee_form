var tab1 = document.getElementById('tab1');
var tab2 = document.getElementById('tab2');
var tab3 = document.getElementById('tab3');
var tab4 = document.getElementById('tab4');
var tab5 = document.getElementById('tab5');


tab2.style.display ="none";
tab3.style.display ="none";
tab4.style.display ="none";
tab5.style.display ="none";






var btn2 = document.getElementById('btn2');

btn2.addEventListener('click',()=>{
    tab1.style.display = "block";
    tab2.style.display = "none";
});



var btn4 = document.getElementById('btn4');

btn4.addEventListener('click',()=>{
    tab2.style.display = "block";
    tab3.style.display = "none";
});

var btn5 = document.getElementById('btn5');
btn5.addEventListener('click',movetab4);

function movetab4() {
    tab3.style.display = "none";
    tab4.style.display = "block";
}


var btn6 = document.getElementById('btn6');

btn6.addEventListener('click',()=>{
    tab3.style.display = "block";
    tab4.style.display = "none";
});

var btn8 = document.getElementById('btn8');

btn8.addEventListener('click',()=>{
    tab4.style.display = "block";
    tab5.style.display = "none";
});



function displayMessage(inputField, errorMessage)
{
    inputField.nextElementSibling.textContent = errorMessage;
    inputField.value='';
}

function validateInput(inputField, pattern, errorMessage)
{
    if(pattern.test(inputField.value))
        inputField.nextElementSibling.textContent='';
    else
        displayMessage(inputField,errorMessage);
}


email.onchange = (event) => {
    validateInput(event.target,/^[A-Za-z0-9.]{5,}@[a-z]{3,}\.[a-z]{2,}$/,'Invalid Email address');
}

password.onchange = (event) => {
    validateInput(event.target,/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{6,16}$/,"Invalid Password");
}

password2.onchange = (event) => {
    var password = document.getElementById('password').value;
    if(password == event.target.value)
        event.target.nextElementSibling.textContent = '';
    else
        displayMessage(event.target,'Both passwords must be same');
}

username.onchange = (event) => {
    validateInput(event.target, /^[A-Za-z]{5,}$/, 'Name should contains only alphabets');
}
btn1.onclick = () => {
    var requiredFields = document.getElementsByClassName('required1');
    var flag = true;
    for(index =0;index <requiredFields.length;index++)
    {
        if(requiredFields[index].value=='')
        {
            flag=false;
            requiredFields[index].nextElementSibling.textContent =  'Please fill the above field';
        }
    }
    if(flag)
    {
        tab1.style.display = "none";
        tab2.style.display = "block"
    }
}

dob.onchange = (event) => {
    var date = new Date(event.target.value);
    var today = new Date();
    var age = today.getFullYear() - date.getFullYear();
    if(age>=18 && age<=60)
        event.target.nextElementSibling.textContent = '';
    else
        displayMessage(event.target,'Age should be between 18 to 60');
}

mobilenumber.onchange = (event) => {
    validateInput(event.target,/^\d{10}$/,"Invalid mobilenumber");
}



btn3.onclick = () =>{
    var inputFields=document.getElementsByClassName('required2');
    var flag=true;
    var isChecked = false;
    for(i=0;i<inputFields.length;i++){
        var gender = document.getElementsByName('gender');
        var start = gender[0];
        for(j=0;j<gender.length;j++)
        {
            if(gender[j].checked)
                isChecked = true;
            start = start.nextElementSibling;
        }
        if(!isChecked)
            start.nextElementSibling.textContent = 'Please fill in this field';
        else
            start.nextElementSibling.textContent = '';
        if(inputFields[i].value=='' || inputFields[i].selectedIndex=='0')
        {
            flag=false;
            inputFields[i].nextElementSibling.textContent = 'Please fill the above field';
        }
        else
        {
            inputFields[i].nextElementSibling.textContent = '';
        }
        flag = flag && isChecked;
    }
    if(flag){
        tab2.style.display = "none";
        tab3.style.display = "block";
    }
    
}

btn7.onclick = () =>{
    var inputFields=document.getElementsByClassName('required3');
    var flag=true;
    var isChecked = false;
    for(i=0;i<inputFields.length;i++){
        var graduation = document.getElementsByName('graduation');
        var last = graduation[0];
        console.log(graduation);
        for(j=0;j<graduation.length;j++)
        {
            if(graduation[j].checked)
                isChecked=true;
            last = last.nextElementSibling;
        }
        if(!isChecked)
            last.textContent = 'Please fill in this field';
        else
            last.textContent = '';
        if(inputFields[i].value=='' || inputFields[i].selectedIndex=='0')
        {
            flag=false;
            inputFields[i].nextElementSibling.textContent = 'Please fill the above field';
        }
        else
        {
            inputFields[i].nextElementSibling.textContent = '';
        }
        flag = flag && isChecked;
    }
    if(flag){
        tab4.style.display = "none";
        tab5.style.display = "block";
    }
}
checkbox.onclick = (event) => {
    var pratice = document.getElementById('dep');
    if(pratice.selectedIndex == '0')
    {
        event.target.checked = false;
        pratice.nextElementSibling.textContent = 'Please fill in this field';
    }
    else
        pratice.nextElementSibling.textContent = '';
    if(event.target.checked)
        document.getElementById('btn9').disabled = false;
    else
        document.getElementById('btn9').disabled = true;

}
