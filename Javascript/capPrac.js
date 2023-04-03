// Make a parrallel arrays that associate state names, an image of the state, and its capitol
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
);

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



window.onload = function () {
// let param = new URLSearchParams(window.location.search);
// alert(param.get("stateNum"));
let tag = document.createElement("h3")

let ran = Math.floor(Math.random() * stateName.length);
let newPicOne = document.createElement("img");
let PicOne = document.getElementById("statePic");
let imgSrc = "../StateImages/"+stateName[ran]+ ".png" 
// let name = document.getElementById("stateName")
//name.append(stateName[ran])
tag.innerHTML = stateName[ran]
document.getElementById("stateName").appendChild(tag)
newPicOne.setAttribute("src",imgSrc ); //pic with family
newPicOne.setAttribute("height", 400);
newPicOne.setAttribute("width", 500);
newPicOne.setAttribute("alt", stateCap[ran])
newPicOne.setAttribute("id", "state")
PicOne.appendChild(newPicOne)
//load image based on stateNum and make user gues state capitol
}; 

function gotRight(guess){
//alert(guess)
let pic = document.getElementById("state")
let alttext = pic.getAttribute("alt")
console.log(alttext)
 if((guess == alttext)){
  alert("Correct!")
  document.getElementById("capIn").value = ""
  newState()
 }
 else{
alert("Incorrect")
document.getElementById("capIn").value = ""
 newState()
 } 
}


function newState(){
//location.reload()
   //produce the next image
 
   let tag = document.createElement("h3")
   tag.setAttribute("id" , "stateName")
   //need to append the the value 
   let parentPic = document.getElementById("state");
   let ran = Math.floor(Math.random() * stateCap.length); //will get a random number based
   let newPicOne = document.createElement("img");
   // let PicOne = document.getElementById("statePic");
   let imgSrc = "../StateImages/" + stateName[ran] + ".png";
  // let name = document.getElementById("stateName");
   tag.innerHTML = stateName[ran]
   //document.getElementById("stateName").appendChild(tag)
   document.getElementById("stateName").replaceWith(tag)
  // name.replaceWith(stateName[ran]);
   newPicOne.setAttribute("src", imgSrc); //pic with family
   newPicOne.setAttribute("height", 400);
   newPicOne.setAttribute("width", 500);
   newPicOne.setAttribute("alt", stateCap[ran]);
   newPicOne.setAttribute("id", "state");
   parentPic.replaceWith(newPicOne); 

   
}
