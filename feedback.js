function Clear() {
    document.getElementById("fname").value="";
    document.getElementById("mname").value="";
    document.getElementById("lname").value="";
    document.querySelector('input[name="gender"]:checked').checked=false;
    document.getElementById("suggestion").value="";
}
function input() {
    var fname=document.getElementById("fname").value;
    var midname=document.getElementById("mname").value;
    var lastname=document.getElementById("lname").value;
   var Gender=document.querySelector('input[name="gender"]:checked').value;
   
    var feedback=document.getElementById("mytest").value;
    var suggestion=document.getElementById("suggestion").value;
    var d=new Date();
    if (fname=="") {
        alert("Please inpur your first name. ");
    }
    else if (lastname=="")
    {
        alert("Please inpur your last name. ");
    }
    else if (fname.length>40||midname.length>40||lastname.length>40)
    {
        alert("Please inpur your name in 40 char ");
    }
    else{
        if (midname.trim()==""){
            var name=Gender+" "+fname.trim()+" "+lastname.trim();
        }
        else {
            name=Gender+" "+fname.trim()+" "+midname.trim()+" "+lastname.trim();
            }
    } 
    feedback+="\n"+"Name: "+name+"\n"+"Suggestion: "+suggestion+"\n"+d;
    document.getElementById("mytest").value=feedback;
   

}