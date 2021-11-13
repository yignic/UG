const firstName = document.musiciansregistration.firstname ;
const lastName = document.musiciansregistration.lastname;
const stageName = document.musiciansregistration.stagename;
const nin = document.musiciansregistration.nin;
const id = document.musiciansregistration.id;



const firstnameError = document.getElementById('firstname-error')
const lastnameError = document.getElementById("lastname-error")
const stagenameError = document.getElementById("stagename-error")
const ninError = document.getElementById("nin-error")
const idError = document.getElementById("id-error")
// Regular expressions.
const nonumber = /^[A-Za-z]+$/;
const capitalize = /^[A-Z][a-z]/;
// const morethan1 = /[\w\s]+/;
const alphaNumeric = /^[a-zA-Z0-9 ]*$/;
const systemIDFormat = /^[a-z]{3}\d+[a-z]{3}/;
const nationalIDFormat = /^[A-Z]{2}\d+[A-Z]{3}/; 
const ArtistidFormat = /^[a-z]{3}\d+[a-z]{3}/
const phoneFormat = /^\d{12}$/;
const twitterFormat = /(^|[^@\w])@(\w{1,15})\b/;
const emailFormat = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;


const validate = ()=>{
    //for firstname
    const Firstname = firstName.value.trim();
    if(Firstname =="") {
        firstnameError.innerHTML ="first name field required";
        firstnameError.style="color:red";
        firstName.style.border="1px solid red"
        firstName.focus();
    }else if(!(Firstname.length > 1 )){
        firstnameError.innerHTML ="first name should be longer than one letter";
        firstnameError.style="color:red";
        firstName.style.border="1px solid red"
        firstName.focus();
    }else if(!Firstname.match(nonumber)){
        firstnameError.innerHTML ="first name should not contain a number";
        firstnameError.style="color:red";
        firstName.style.border="1px solid red"
        firstName.focus();
    }else if(!Firstname.match(capitalize)){
        firstnameError.innerHTML ="first letter should be Capital";
        firstnameError.style="color:red";
        firstName.style.border="1px solid red"
        firstName.focus();
    }



    const lastname = lastName.value.trim();
    if(lastname =="") {
        lastnameError.innerHTML ="last name field required";
        lastnameError.style="color:red";
        lastName.style.border="1px solid red"
        lastName.focus();
    }else if(!(lastname.length > 1 )){
        lastnameError.innerHTML ="last name must be more than 1 character";
        lastnameError.style="color:red";
        lastName.style.border="1px solid red"
        lastName.focus();
    }else if(!lastname.match(nonumber)){
        lastnameError.innerHTML ="last name field must not contain any number";
        lastnameError.style="color:red";
        lastName.style.border="1px solid red"
        lastName.focus();
    }else if(!lastname.match(capitalize)){
        lastnameError.innerHTML ="first letter must be a capital letter";
        lastnameError.style="color:red";
        lastName.style.border="1px solid red"
        lastName.focus();
    };
    
    const Stagename = stageName.value.trim();
    if( Stagename =="") {
        stagenameError.innerHTML ="stage name field required";
        stagenameError.style="color:red";
        stageName .style.border="1px solid red"
        stageName .focus();
    }else if(!Stagename.match(alphaNumeric)){
        stagenameError.innerHTML ="Stage name must contain no symbols";
        stagenameError.style="color:red";
        stageName .style.border="1px solid red"
        stageName .focus();
    }

    const Nin = nin.value.trim();
    if(Nin =="") {
        ninError.innerHTML ="NIN field required";
        ninError.style="color:red";
        Nin.style.border="1px solid red"
        Nin.focus()
    }else if(!Nin.match(nationalIDFormat )){
        ninError.innerHTML ="Enter Correct format of NIN";
        ninError.style="color:red";
        Nin.style.border="1px solid red"
        Nin.focus();
    }else

    const Id = id.value.trim();
    if(Id =="") {
        idError.innerHTML ="Artist- Id field required";
        idError.style="color:red";
        Id.style.border="1px solid red"
        Id.focus();
    }








const musiciansform = document.getElementById("musicians-form");


musiciansform.addEventListener('submit',validate);
musiciansform.addEventListener('submit',(e)=>{
    e.preventDefault();
})