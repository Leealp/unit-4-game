


// Environment variables



var crystal = {

	crystalOne: {

		name: "crystal1",
		value: 0
	},

	crystaltwo: {

		name: "crystal2",
		value: 0
	},

	crystalthree: {

		name: "crystal3",
		value: 0
	},

	crystalfour: {

		name: "crystal4",
		value: 0
	},

}


var wincount = 0;
var losscount = 0;
var goaltoreach = null;
var mycurrentscore = 0;

// -------------------------------------------------------




// Functions

// var randomNumber = function(min,max){

// 	return Math.floor(Math.random()*(max-min+1)) + min;
// }


var gameready = function(){

	// the function below was outside

	var randomNumber = function(min,max){

		return Math.floor(Math.random()*(max-min+1)) + min;
	}

	goaltoreach  = randomNumber(19,120);

	crystal.crystalOne.value = randomNumber(1,12);
	crystal.crystaltwo.value = randomNumber(1,12);
	crystal.crystalthree.value = randomNumber(1,12);
	crystal.crystalfour.value = randomNumber(1,12);

	mycurrentscore = 0;

	$("#currentscore").html(mycurrentscore);
	$("#goaltoreach").html(goaltoreach);
	$("#losscount").html(losscount);
	$("#wincount").html(wincount);
	console.log(goaltoreach); 
	
}


gameready();

var onevalue = crystal.crystalOne.value
var twovalue = crystal.crystaltwo.value
var threevalue = crystal.crystalthree.value
var fourvalue = crystal.crystalfour.value

// jQuery click Functions

function clickfunctions(){

 $("#one").click(function(){
 	$("#currentscore").html(mycurrentscore+onevalue);
 	mycurrentscore = mycurrentscore + onevalue;
 	winloose();
 
 });


 $("#two").click(function(){
 	$("#currentscore").html(mycurrentscore+twovalue);
 	mycurrentscore = mycurrentscore + twovalue;
 	winloose();

 });


 $("#three").click(function(){
	$("#currentscore").html(mycurrentscore+threevalue);
 	mycurrentscore = mycurrentscore + threevalue;
 	winloose();
 });

 $("#four").click(function(){
	$("#currentscore").html(mycurrentscore+fourvalue);
 	mycurrentscore = mycurrentscore + fourvalue;
 	winloose();
 });

}

clickfunctions()

 // Win/Loose determination

  	// var lossText = document.getElementById("losscount");
   //  var winText  = document.getElementById("wincount");

function winloose(){

	

	// if((mycurrentscore===goaltoreach)||(mycurrentscore>goaltoreach)){

		if(mycurrentscore === goaltoreach){
		
		wincount++;
		$("#wincount").html(wincount);
	
		console.log("you won");
		gameready();

	}

	if (mycurrentscore > goaltoreach){
		console.log(mycurrentscore, goaltoreach)
		losscount++
		$("#losscount").html(losscount);
		console.log("you lost");
		gameready();
		
	}

		// lossText.textContent = losscount;
  //       winText.textContent = wincount;
// console.log(wincount);
// console.log(losscount);

	}
		// lossText.textContent = losscount;
  //       winText.textContent = wincount;
// console.log(wincount);
// console.log(losscount);


//         // lossText.textContent = losscount;
//         // winText.textContent = wincount;


// winloose(console.log( losscount));
// winloose(console.log(mycurrentscore));






















