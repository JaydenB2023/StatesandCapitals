function getTable() {
    let LSArray = new Array(localStorage.length);
    let count = 1
    //look at stu login and figure a better key
    for (let i = 0; i < localStorage.length; i++) {
      let LSKey = "Stu"+count
      let table = document.getElementById("studentTable");
      let row = table.appendChild(document.createElement("tr"));
      let testName = row.insertCell(0);
      let stuName = row.insertCell(1);
      let stuID = row.insertCell(2);
      let stuScore = row.insertCell(3);
      //alert(LSKey)
      let tempLS = localStorage.getItem(LSKey);
      //alert(tempLS)
      LSArray = tempLS.split(",");
      testName.innerHTML = LSArray[0]
      stuName.innerHTML = LSArray[1];
      stuID.innerHTML = LSArray[2];
      stuScore.innerHTML = LSArray[3];
      count++
    }
  }

  function clearTable(){
    location.reload()
  }