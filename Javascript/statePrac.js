var stateName = new Array( //this will eventually go away when JSON is in use
        "Alabama",
        "Alaska",
        "Arizona",
        "Arkansas",
        "California",
        "Colorado",
        "Connecticut",
        "Delaware",
        "Florida",
        "Georgia",
        "Hawaii",
        "Idaho",
        "Illinois",
        "Indiana",
        "Iowa",
        "Kansas",
        "Kentucky",
        "Louisiana",
        "Maine",
        "Maryland",
        "Massachusetts",
        "Michigan",
        "Minnesota",
        "Mississippi",
        "Missouri",
        "Montana",
        "Nebraska",
        "Nevada",
        "New Hampshire",
        "New Jersey",
        "New Mexico",
        "New York",
        "North Carolina",
        "North Dakota",
        "Ohio",
        "Oklahoma",
        "Oregon",
        "Pennsylvania",
        "Rhode Island",
        "South Carolina",
        "South Dakota",
        "Tennessee",
        "Texas",
        "Utah",
        "Vermont",
        "Virginia",
        "Washington",
        "West Virginia",
        "Wisconsin",
        "Wyoming"
      )

      var stateCap = new Array(
        "Montgomery",
        "Juneau",
        "Pheonix",
        "Little Rock",
        "Sacramento",
        "Denver",
        "Hartford",
        "Dover",
        "Tallahassee",
        "Atlanta",
        "Honolulu",
        "Boise",
        "Springfield",
        "Indianapolis",
        "Des Moines",
        "Topeka",
        "Frankfort",
        "Baton Rouge",
        "Augusta",
        "Annapolis",
        "Boston",
        "Lansing",
        "Saint Paul",
        "Jackson",
        "Jefferson City",
        "Helena",
        "Lincoln",
        "Carson City",
        "Concord",
        "Trenton",
        "Santa Fe",
        "Albany",
        "Raleigh",
        "Bismarck",
        "Columbus",
        "Oklahoma City",
        "Salem",
        "Harrisburg",
        "Providence",
        "Columbia",
        "Pierre",
        "Nashville",
        "Austin",
        "Salt Lake City",
        "Montpelier",
        "Richmond",
        "Olympia",
        "Charleston",
        "Madison",
        "Cheyenne"
      );
      var count = 0
      function ranStates(){
      
        let ran = Math.floor(Math.random() * stateName.length);
       console.log(ran) 
       document.getElementById("btn").value = stateName[ran]
        infoPic(ran)
        infoTable(ran)
        console.log(count+=1) //need to get page to stop refreshing
      }

      function getNum(stateNum) {
         // Make a calling page that associates a JSON list of information such as image, state name , population etc
        let btnVal = document.getElementById("btn").value
        if(btnVal == stateName[stateNum]){
        alert("Correct!")  
        // let url = "../HTML/USStatePrac.html?stateNum=" + stateNum
        //   alert(url)
        //   window.open(url)
        // Location.href = url
        //alert("Ran states")
        ranStates()
        }
        else{
          alert("Wrong!")
          //console.log("Ran States")
         ranStates()
        }
      }

      function infoPic(stateNum){
          let statePic = document.getElementById("statePic")
let newPicOne = document.createElement("img");
let imgSrc = "../StateImages/"+stateName[stateNum]+ ".png" 
// let name = document.getElementById("stateName")
//name.append(stateName[ran])
newPicOne.setAttribute("src",imgSrc ); //pic with family

statePic.appendChild(newPicOne)
      }

      function infoTable(stateNum){
  let table = document.getElementById("stateInfo");
  let row = table.appendChild(document.createElement("tr"));
  let name = row.insertCell(0);
  let cap = row.insertCell(1);

    name.innerHTML = stateName[stateNum]
    cap.innerHTML = stateCap[stateNum]
      }