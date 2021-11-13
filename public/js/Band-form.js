const bandname = document.bandregistration.bandname;
const bandowner = document.bandregistration.owner;
const bandhome = document.bandregistration.bandhome;
const bandnumber = document.bandregistration.number;

const bandNameError = document.getElementById ('band-error')
const bandOwnerError = document.getElementById('owner-error')
const bandHomeError = document.getElementById('home-error')
const bandNumberError = document.getElementById("number-error")



// Regular expressions.
const nonumber = /^[A-Za-z]+$/;
const capitalize = /^[A-Z][a-z]/;
// const morethan1 = /[\w\s]+/;
const alphaNumeric = /^[a-zA-Z0-9 ]*$/;
const systemIDFormat = /^[a-z]{3}\d+[a-z]{3}/;
const nationalIDFormat = /^[A-Z]{2}\d+[A-Z]{3}/;
const phoneFormat = /^\d{12}$/;
const twitterFormat = /(^|[^@\w])@(\w{1,15})\b/;
const emailFormat = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;


const validate = ()=>{
    const Bandname = bandname.value.trim();
    if(Bandname ==""){
        bandNameError.innerHTML ="Band name field required";
        bandNameError.style="color:red";
        bandname.style.border ="1px solid red"
        bandname.focus();
    }else if(!(Bandname.length > 1 )){
        bandNameError.innerHTML ="Band name should be more than 1 character";
        bandNameError.style="color:red";
        bandname.style.border="1px solid red"
        bandname.focus();
    }else if(!Bandname.match(capitalize)){
        bandNameError.innerHTML ="first letter should be Capital";
        bandNameError.style="color:red";
        bandname.style.border="1px solid red"
        bandname.focus();
    }
    
    

    const Bandowner = bandowner.value.trim();
   if(Bandowner ==""){
        bandOwnerError.innerHTML ="Band Owner field required";
        bandOwnerError.style="color:red";
        bandowner.style.border="1px solid red"
        bandowner.focus();
    }else if(!Bandowner.match(alphaNumeric)){
        bandOwnerError.innerHTML =" Owner's name  must not contain symbols";
        bandOwnerError.style="color:red";
        bandowner.style.border="1px solid red"
        bandowner.focus();
    }
    

}









const bandForm = document.getElementById("band-form");
bandForm.addEventListener('submit',validate);
bandForm.addEventListener('submit',(e)=>{
    e.preventDefault();
})