    
    
    var StateList = new Array(50);
      var stateCap = new Array(50);
      var right = 0;
     
      class StateCap {
        constructor(pState, pCap, pPop, pArea) {
          //Constructor for StateCap Class:
          this.state = pState;
          this.capital = pCap;
        }
      }

      function sev() {
        try {
          var url = "http://localhost:80/JBrownStatesandCaps/JSON/statesCaps.json";

          var request = new XMLHttpRequest();

          request.open("Get", url);

          request.onload = function () {
            if (request.status == 200) {
              parseJasonString(request.responseText); //calls another method to parse the data
              console.log("returned data");
              beginTest();
            } else { 
              console.log("Didn't return the data");
            }
          }; 
          request.send(null);
        } catch (err) {
          console.log(err.message);
        }
      }

      function parseJasonString(responseTxt) {
        var stStuff = JSON.parse(responseTxt);

        for (var i = 0; i < stStuff.length; i++) {
          StateList[i] = new StateCap(stStuff[i].STATE, stStuff[i].CAPITAL);
        }
        for(let j=0; j<stStuff.length; j++){
          stateCap[j] = StateList[j].capital
        }
        //beginTest()
      }

      function beginTest() {
        let tag = document.createElement("h3")
        //alert(StateList.length)
        let ran = Math.floor(Math.random() * StateList.length);
        let newPicOne = document.createElement("img");
        let PicOne = document.getElementById("statePic");
        let imgSrc = "../StateImages/"+StateList[ran].state+ ".png" 
       // let name = document.getElementById("stateName")
        //name.append(stateName[ran])
        tag.innerHTML = StateList[ran].state
        document.getElementById("stateName").appendChild(tag)
        newPicOne.setAttribute("src",imgSrc ); //pic with family
        newPicOne.setAttribute("height", 400);
        newPicOne.setAttribute("width", 500);
        newPicOne.setAttribute("alt", StateList[ran].capital)
        newPicOne.setAttribute("id", "state")
        PicOne.appendChild(newPicOne)
      }

      function gotRight(guess) { //instead of splicing, use a counter and replace the array value
        //at the random index with "" and use if to check to see if it is "" and if it is
        // a blank string and if it just make another random number

       //alert(StateList.length)
        
      //  document.getElementById("stateNUM").append("State length:" + StateList.length)

        let pic = document.getElementById("state");
     
        let alttext = pic.getAttribute("alt");
        if (guess == alttext) {
          right += 1;
          let index = stateCap.indexOf(alttext);
        console.log("Splice index: "+ index)
          StateList.splice(index,1);
          stateCap.splice(index,1)
          document.getElementById("capIn").value = ""
          document.getElementById("capIn").focus
          // alert(stateName.length)
          nextPic();
        } else if (guess != alttext) {
    
         let index = stateCap.indexOf(alttext);
         console.log("Splice index: " + index)
          StateList.splice(index,1);
           stateCap.splice(index,1)
          document.getElementById("capIn").value = ""
          document.getElementById("capIn").focus
          // alert(stateName.length)
          nextPic();
        }
      }

      function nextPic() {
        //produce the next image
       if(StateList.length != 0){
        let tag = document.createElement("h3")
     
        tag.setAttribute("id" , "stateName")
        //need to append the the value 
        let parentPic = document.getElementById("state");
        let ran = Math.floor(Math.random() * StateList.length); //will get a random number based
      //  document.getElementById("stateRan").append("State Name:"+ StateList[ran].state + "ran num:" + ran)
        let newPicOne = document.createElement("img"); 
         // alert(StateList[ran].state + StateList[ran].capital)
        // let PicOne = document.getElementById("statePic");
        let imgSrc = "../StateImages/" + StateList[ran].state + ".png";
       // let name = document.getElementById("stateName");
        tag.innerHTML = StateList[ran].state
        //document.getElementById("stateName").appendChild(tag)
        document.getElementById("stateName").replaceWith(tag)
       // name.replaceWith(stateName[ran]);
        newPicOne.setAttribute("src", imgSrc); //pic with family
        newPicOne.setAttribute("height", 400);
        newPicOne.setAttribute("width", 500);
        newPicOne.setAttribute("alt", StateList[ran].capital);
        newPicOne.setAttribute("id", "state");
        parentPic.replaceWith(newPicOne); 
       }
        else{
           alert("Test is over!");
           alert("Your Score is: " + right)
          writeLs();
        }
       
        
      }

      function writeLs() {
        //this function should be used on both tests and will be called when the test is done
        let param = new URLSearchParams(window.location.search);
        console.log(param.get("test"));
        let name = param.get("name");
        let id = param.get("id");
        let dropdown = param.get("test");
        let count = param.get("num")
        let test = dropdown
        let percent = right / 50;
        let wrong = 50 - right
        let key = "Stu" + count;
        let valueLS =
          test +
          " ," +
          name +
          " ," +
          id +
          " ," +
          right +
          " ," +
          wrong +
          " ," +
          percent; //try to upper case the test variable
        localStorage.setItem(key, valueLS);
      }