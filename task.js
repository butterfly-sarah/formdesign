valid1=false;
valid2=false;
valid3=false;
function checkcount(element){
    if (element.value<1||element.value>20){
        element.value="";
    }
}
var regmail=RegExp(/.+@[a-z]{5}.(com|org|net)/);
function checkmail(element){
    if(regmail.test(element.value)==false&&element.value!=""){
        element.style.border="1px solid red";
        valid1=false;
    }
    else if(regmail.test(element.value)==true){
        element.style.border="1px solid green";
        valid1=true;
    }
    else{
        element.style.border="0px";
        valid1=false;
    }
}
var regphone=RegExp(/^01[0|1|2]\d{8}$/);
function checkphone(element){
    if(regphone.test(element.value)==false&&element.value!=""){
        element.style.border="1px solid red";
        valid2=false;
    }
    else if(regphone.test(element.value)==true){
        element.style.border="1px solid green";
        valid2=true;
    }
    else{
        element.style.border="0px";
        valid2=false;
    }
}
var regpass=RegExp(/^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,15}$/);
var regpass2=RegExp(/^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,15}$/);
function checkpass(element){
    if(regpass.test(element.value)==true){
        element.style.border="1px solid green";
        valid3=true;
    }
    else if(regpass2.test(element.value)==true){
        element.style.border="1px solid orange";
        valid3=true;
    }
    else if(element.value!=""){
        element.style.border="1px solid red";
        valid3=false;
    }
    else{
        element.style.border="0px";
        valid3=false;
    }
}
function check(element){
    if(valid1==false||valid2==false||valid3==false){
        event.preventDefault()
    }
}