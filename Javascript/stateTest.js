
//get the image map to stop refreshing the page


      var StateList = new Array(50);
      var stateName = new Array(50)
      var right = 0;
      var wrong = 0;
      class StateCap {
        constructor(pState, pCap, pPop, pArea) {
          //Constructor for StateCap Class:
          this.state = pState;
          this.capital = pCap;
        }
      }

      function sev() { //this keeps refreshing screen after each button click
        try {
          var url = "http://localhost:80/JBrownStatesandCaps/JSON/statesCaps.json";

          var request = new XMLHttpRequest();

          request.open("Get", url);

          request.onload = function () {
            if (request.status == 200) {
              parseJasonString(request.responseText); //calls another method to parse the data
              console.log("Returned Data"); 
               beginTest()
              
           
            } else {
              console.log("Didn't return the data");
            }
          };
          request.send(null);
        } catch (err) {
          console.log(err.message);
        }
      
      };

      function parseJasonString(responseTxt) {
        var stStuff = JSON.parse(responseTxt);

        for (var i = 0; i < stStuff.length; i++) {
          StateList[i] = new StateCap(stStuff[i].STATE, stStuff[i].CAPITAL);
        }
        for( var j = 0; j < stStuff.length; j++){
          stateName[j] = StateList[j].state
        }
        //ranStates();
      }


    
      function beginTest() {
        //let tag = document.createElement("h3")
        
        let ran = Math.floor(Math.random() * StateList.length);
        let newPicOne = document.createElement("img");
        let PicOne = document.getElementById("statePic");
        let imgSrc = "../StateImages/"+StateList[ran].state+ ".png"
         
       // let name = document.getElementById("stateName")
        //name.append(stateName[ran])
        //tag.innerHTML = StateList[ran].state 
        //document.getElementById("stateName").appendChild(tag)
        newPicOne.setAttribute("src",imgSrc ); //pic with family
        newPicOne.setAttribute("height", 400);
        newPicOne.setAttribute("width", 500);
        newPicOne.setAttribute("alt", StateList[ran].state)
        newPicOne.setAttribute("id", "state")
        PicOne.appendChild(newPicOne)
      }

      function gotRight(guess) { 
        let pic = document.getElementById("state");
        let alttext = pic.getAttribute("alt");
        if (guess == alttext) {
          right += 1;
          let index = stateName.indexOf(alttext);
          document.getElementById("capIn").value = ""
          StateList.splice(index,1);
          // alert(stateName.length)
          nextPic();
        } else if (guess != alttext) {
          wrong += 1;
          document.getElementById("capIn").value = ""
          let index = stateName.indexOf(alttext);
          StateList.splice(index,1);
          // alert(stateName.length)
          nextPic();
        }
      }

      function nextPic() {
        //produce the next image
       if(StateList.length != 0){
        // let tag = document.createElement("h3")
       // tag.setAttribute("id" , "stateName")
        //need to append the the value 
        let parentPic = document.getElementById("state");
        let ran = Math.floor(Math.random() * StateList.length); //will get a random number based
        console.log(StateList[ran].state + StateList[ran].capital)
        let newPicOne = document.createElement("img");
        // let PicOne = document.getElementById("statePic");
        let imgSrc = "../StateImages/" + StateList[ran].state + ".png";
       // let name = document.getElementById("stateName");
       // tag.innerHTML = StateList[ran].state
        //document.getElementById("stateName").appendChild(tag)
      //  document.getElementById("stateName").replaceWith(tag)
       // name.replaceWith(stateName[ran]);
        newPicOne.setAttribute("src", imgSrc); //pic with family
        newPicOne.setAttribute("height", 400);
        newPicOne.setAttribute("width", 500);
        newPicOne.setAttribute("alt", StateList[ran].state); //error occurs here
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