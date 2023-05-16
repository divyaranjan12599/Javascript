function attachEventListeners() {
    let btn = document.getElementById("submit");
    let cpass = document.getElementById("cpass");
    let pass = document.getElementById("pass");
    let uname = document.getElementById("uname");
    let ucheck = false;
    let passcheck = false;
    let unameError = document.getElementById("unameError");
    let cpassError = document.getElementById("cpassError");
    let obj={};
    uname.addEventListener("input",()=>{
        if (uname.value.trim().length<6) {
            ucheck = false;
            unameError.innerHTML="Please enter username having more than 6 characters!!!"
            unameError.style.display="block";
            unameError.style.color = "red";
        }
        else{
            ucheck = true;
            unameError.style.display="none";
            //console.log(uname.value.length);
        }
    });
    cpass.addEventListener("input",()=>{
        //console.log(cpass.value.localeCompare(pass.value),pass.value,cpass.value,passcheck);
        if (cpass.value.localeCompare(pass.value)===0) {
            passcheck = true;
            cpassError.style.display="none";
        } else {
            passcheck = false;
            cpassError.style.display="block";
            cpassError.style.color = "red";
            cpassError.innerHTML = "Enter password same as above field!!!"
        }
    });
    btn.addEventListener("click", ()=>{
        if(ucheck && passcheck){
            obj={"username":uname.value,"password":pass.value};
            uname.value="";
            pass.value="";
            cpass.value=""; 
            console.log(obj);
        }
    });
}
attachEventListeners();