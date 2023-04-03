

function x(){
    document.getElementById("btn").disabled = true;
  }
  function checkInput() {
 
    //fix this so it checks to see if the values are blank
    let id = document.getElementById("stuID").value;
    let name = document.getElementById("stuName").value
    if (id != "" && name!= "") {
      document.getElementById("btn").disabled = false;
    }
    else{
      document.getElementById("btn").disabled = true
    }
  }
  // function writeLs() { //this function should be used on both tests
  //   let name = document.getElementById("stuName").value;
  //   let id = document.getElementById("stuID").value;
  //   let dropdown = document.getElementById("usSelect");
  //   let test = dropdown.value;
  //   let key = "Stu" + id;
  //   let valueLS = test + " ," + name + " ," + id; //try to upper case the test variable
  //   localStorage.setItem(key, valueLS);
  // }
  // function changeAction() {
  //   //instead of changing the form i can use location.href which will also allow me to pass a value
  //   let dropdown = document.getElementById("usSelect");
  //   let test = dropdown.value;
  //   alert(test);
  //   if (test !== "") {
  //     document.getElementById("form_id").action = test + "Test.html";
  //     document.getElementById("form_id").submit();
  //   }
  // }
  function nextPage() { 
  
    //get this to work
    //get the value from the dropdown
    let dropVal = document.getElementById("usSelect").value
    let Name = document.getElementById("stuName").value
    let Id = document.getElementById("stuID").value
    let counter = localStorage.getItem("Stu"); //this is the key
    if (counter === null) {
        counter = 0;
    } else {
        counter = parseInt(counter)
    }
    counter += 1;
    console.log(dropVal) 
    if (dropVal == "Capital") {
     let  x="CapitalTest.html?name=" +Name +"&id=" +Id +"&test=" + dropVal + "&num=" +counter//building a query string
     console.log(x)
    //figure out why location.href is not working
      location.href = x; 
    }
    else if(dropVal == "State"){
      let x="StateTest.html?name=" +Name +"&id=" +Id +"&test="+ dropVal + "&num=" +counter
      console.log(x)
      location.href =x;
    }
    else{
      alert("Error")
    }

    //locations assign method
    //location.assign()

  }