const labelname = document.labelregistration.name;




const labelNameError = document.getElementById ('name-error')
// Regular expressions.
const nonumber = /^[A-Za-z]+$/;
const capitalize = /^[A-Z][a-z]/;


const validate = ()=>{
    const LabelName = labelname.value.trim();
    if(LabelName==""){
        labelNameError .innerHTML ="Label name field required";
        labelNameError .style="color:red";
        LabelName.style.border="1px solid red"
        LabelName.focus();
    }else if(!(Bandname.length > 1 )){
        labelNameError .innerHTML ="Band name should be more than 1 character";
        labelNameError .style="color:red";
        LabelName.style.border="1px solid red"
        LabelName.focus();
    }else if(!Bandname.match(capitalize)){
        labelNameError.innerHTML ="first letter should be Capital";
        labelNameError.style="color:red";
        LabelName.style.border="1px solid red"
        LabelName.focus();
    }

}




const labelForm = document.getElementsById("band-form");
labelForm.addEventListener('submit',validate);
labelForm.addEventListener('submit',(e)=>{
    e.preventDefault();
})