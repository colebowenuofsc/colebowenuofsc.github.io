


/* See more and see less functions */ 
function removeHiddenAbout() {
	let moreAbout = document.getElementById("moreabout"); 
	let link = document.getElementById("moreaboutlink"); 
	
	if(moreAbout.classList.contains("hidden")) { 
		moreAbout.classList.remove("hidden"); 
		moreAbout.classList.add("normal"); 
		link.innerHTML="See Less..."; 
	} 
	
	else{ 
		moreAbout.classList.remove("normal"); 
		moreAbout.classList.add("hidden"); 
		link.innerHTML="See More..."; 
	} 
	
	}
function removeHiddenCareer() {
	let moreAboutCareer = document.getElementById("morecareer"); 
	let careerLink = document.getElementById("moreaboutcareerlink"); 
	
	if(moreAboutCareer.classList.contains("hidden")) { 
		moreAboutCareer.classList.remove("hidden"); 
		moreAboutCareer.classList.add("normal"); 
		careerLink.innerHTML="See Less..."; 
	} 
	
	else{ 
		moreAboutCareer.classList.remove("normal"); 
		moreAboutCareer.classList.add("hidden"); 
		careerLink.innerHTML="See More..."; 
	} 
	
	}
	
	
	
	
	
/*Quiz functions */ 

function submitAnswers() {
	let resultBox = document.getElementById("results"); 
	resultBox.classList.remove("hidden"); 
	
	let questionOne =document.getElementById("questionone").value; 
	let questionTwo =document.getElementById("questiontwo").value; 
	let questionThree =document.getElementById("questionthree").value; 
	let questionFour =document.getElementById("questionfour").value; 
	
	let questionOneResult =document.getElementById("questiononeresult"); 
	let questionTwoResult =document.getElementById("questiontworesult"); 
	let questionThreeResult =document.getElementById("questionthreeresult"); 
	let questionFourResult =document.getElementById("questionfourresult"); 
	let finalScore = document.getElementById("score"); 
	
	if(questionOne == "block") {
		questionOneResult.innerHTML = "Question One: Correct";
	} 
	if(questionOne != "block") {
		questionOneResult.innerHTML="Question One: Incorrect"; 
	}
	
	if(questionTwo == "At the very bottom of the body") { 
		questionTwoResult.innerHTML = "Question Two: Correct" 
	} 
	
	if(questionTwo != "At the very bottom of the body") { 
		questionTwoResult.innerHTML = "Question Two: Incorrect" 
	} 
	
	if(questionThree == "Use a #") { 
		questionThreeResult.innerHTML = "Question Three: Correct" 
	} 
	
	if(questionThree != "Use a #") { 
		questionThreeResult.innerHTML = "Question Three: Incorrect" 
	} 

	if(questionFour == "option") { 
		questionFourResult.innerHTML = "Question Four: Correct" 
	} 
	
	if(questionFour != "option") { 
		questionFourResult.innerHTML = "Question Four: Incorrect" 
	} 
	
	if(questionOne == "block" && questionTwo == "At the very bottom of the body" && questionThree == "Use a #" && questionFour == "option") { 
		finalScore.innerHTML = "Score: 4/4 Perfect Score!"; 
	} 
	
	if(questionOne != "block" && questionTwo == "At the very bottom of the body" && questionThree == "Use a #" && questionFour == "option") { 
		finalScore.innerHTML = "Score: 3/4 So Close!"; 
	} 
	if(questionOne == "block" && questionTwo != "At the very bottom of the body" && questionThree == "Use a #" && questionFour == "option") { 
		finalScore.innerHTML = "Score: 3/4 So Close!"; 
	} 
	if(questionOne == "block" && questionTwo == "At the very bottom of the body" && questionThree != "Use a #" && questionFour == "option") { 
		finalScore.innerHTML = "Score: 3/4 So Close!"; 
	} 
	if(questionOne == "block" && questionTwo == "At the very bottom of the body" && questionThree == "Use a #" && questionFour != "option") { 
		finalScore.innerHTML = "Score: 3/4 So Close!"; 
	} 
	
	
	
	
	if(questionOne != "block" && questionTwo != "At the very bottom of the body" && questionThree == "Use a #" && questionFour == "option") { 
		finalScore.innerHTML = "Score: 2/4 You are halfway there!"; 
	} 
	
	if(questionOne == "block" && questionTwo == "At the very bottom of the body" && questionThree != "Use a #" && questionFour != "option") { 
		finalScore.innerHTML = "Score: 2/4 You are halfway there!"; 
	} 
	
	if(questionOne != "block" && questionTwo == "At the very bottom of the body" && questionThree != "Use a #" && questionFour == "option") { 
		finalScore.innerHTML = "Score: 2/4 You are halfway there!"; 
	} 
	
	if(questionOne != "block" && questionTwo == "At the very bottom of the body" && questionThree == "Use a #" && questionFour != "option") { 
		finalScore.innerHTML = "Score: 2/4 You are halfway there!"; 
	} 
	
	if(questionOne == "block" && questionTwo != "At the very bottom of the body" && questionThree == "Use a #" && questionFour != "option") { 
		finalScore.innerHTML = "Score: 2/4 You are halfway there!"; 
	} 
	
	
	
	
	if(questionOne == "block" && questionTwo != "At the very bottom of the body" && questionThree != "Use a #" && questionFour != "option") { 
		finalScore.innerHTML = "Score: 1/4 Oof Maybe Try again?"; 
	} 
	if(questionOne != "block" && questionTwo == "At the very bottom of the body" && questionThree != "Use a #" && questionFour != "option") { 
		finalScore.innerHTML = "Score: 1/4 Oof Maybe Try again?"; 
	} 
	if(questionOne != "block" && questionTwo != "At the very bottom of the body" && questionThree == "Use a #" && questionFour != "option") { 
		finalScore.innerHTML = "Score: 1/4 Oof Maybe Try again?"; 
	} 
	if(questionOne == "block" && questionTwo != "At the very bottom of the body" && questionThree != "Use a #" && questionFour == "option") { 
		finalScore.innerHTML = "Score: 1/4 Oof Maybe Try again?"; 
	} 
	
	if(questionOne != "block" && questionTwo != "At the very bottom of the body" && questionThree != "Use a #" && questionFour != "option") { 
		finalScore.innerHTML = "Score: 0/4 You are not cut out for this, try being an influencer instead"; 
	} 
	
	


	

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
} 
	
	