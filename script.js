function  changeUrl(){
	var userInput = input.value;
	document.location.href = "second.html?number="+userInput;
	
	/*       alternativ variant       */
	// if(userInput=="123"){
	// 	hidden.innerHTML = "Xosh gelmishsiniz";
	// 	hidden.style.display = "block";
	// 	body.style.display = "none";
	// }else {
	// 	hidden.innerHTML = "Parol sehvdir";
	// 	hidden.style.display = "block";
	// 	body.style.display = "none";
	// }

}

function secondHtml(){
	var user = {
		name:"Adigozel",
		number:"123"
	} 
	var userInput = document.location.href.split("=");
	if(userInput[1] == user.number){
		userData.innerHTML = "Tebrikler "+user.name+"   "+user.number;
	}else {
		userData.innerHTML = "number is incorrect";
	}
}



// ---------------------------------------function declaration

function  myFunc(sdgdfags){
	// alert("Hello world");
	sdgdfags();
}

function callback(){
	alert("hello everyone")
}

myFunc(callback)



 
 


// ------------------------------------------function expression
// var namedFunc = function myFunc(){
// 	alert("this is function expression");
// }


// namedFunc();

 // anonymous function
// var anonymousFunc = function(){
// 	console.log("this is a anonymous function");
// }

// anonymousFunc();





