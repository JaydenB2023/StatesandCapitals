function x(){
    document.getElementById("btn").disabled = true;
  }
  function checkInput() {
    //fix this so it checks to see if the values are blank
    let pass = document.getElementById("pass").value;
    let name = document.getElementById("user").value
    if (pass == "Password" && name== "Teacher") {
      document.getElementById("btn").disabled = false;
      document.getElementById("btn").focus
    }
    else{
      document.getElementById("btn").disabled = true
    }
  }

  function nextPage() { 
    let Name = document.getElementById("user").value
     let  x ="teacherIndex.html?name=" +Name
     console.log(x)
    location.href = x
  }