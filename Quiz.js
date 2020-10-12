var Qid = 1;
var answered=false;
var corrects =["10","18","72","7","64"];
var controlers = document.querySelectorAll(".buttons");

controlers.forEach(item=>{
	item.addEventListener("click" , function(e){
		answered = false;
	if (e.target.id=="first"){
	var question = document.querySelectorAll('input[name="anQ'+Qid+'"]');
	    for(var j = 0 ; j < question.length ; j++){
		if(question[j].checked){
			answered = true;

		}}
        if(answered==true){
		Qid++;
		document.getElementById(Qid-1).classList.add("turn");
	    document.getElementById(Qid).classList.remove("turn");}
	    else {
	    	alert("choose an answer !");
	    }
	}
    if (e.target.id=="next"){
    var question = document.querySelectorAll('input[name="anQ'+Qid+'"]');
	    for(var j = 0 ; j < question.length ; j++){
		if(question[j].checked){
			answered = true;

		}}
        if(answered==true){
		Qid++;
		document.getElementById(Qid-1).classList.add("turn");
	    document.getElementById(Qid).classList.remove("turn");
	    if (Qid==6){
	    document.querySelector("span").textContent=calresult();
	    }
	}
	    else {
	    	alert("choose an answer !");
	    }
	}
    if (e.target.id=="prev"){
        Qid--;
		document.getElementById(Qid+1).classList.add("turn");
	    document.getElementById(Qid).classList.remove("turn");
    }
     if (e.target.id=="startOver"){
     	document.getElementById(Qid).classList.add("turn");
        startOver();
	    document.getElementById(Qid).classList.remove("turn");
    }
});
});

function calresult(){
	var answers=0;
	for (var i = 1 ; i<6 ; i++){
	var questionan = document.querySelectorAll('input[name="anQ'+i+'"]');
	for(var j =0 ; j<questionan.length ; j++){
		if(questionan[j].checked && corrects.includes(questionan[j].value)){
		answers++;
		}
		}}
    return answers;
	}

function startOver(){
	Qid=1;
	for (var i = 1 ; i<6 ; i++){
	var questionan = document.querySelectorAll('input[name="anQ'+i+'"]');
	for(var j =0 ; j<questionan.length ; j++){
		if(questionan[j].checked){
		questionan[j].checked=false;
		}
		}}
}