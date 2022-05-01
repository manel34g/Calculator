var op = "";
var scr_value= "";
var scr_pastNum="";
var past_num="";

function Display (number){
	var screen = document.getElementById("display");
	var pastNum = document.getElementById("historic");
	if (number == "C"){
		scr_value="0";
		screen.value = scr_value;
	}
	else if (number == "CE") {
		past_num="";
		pastNum.innerHTML="";
		scr_value="0";
		screen.value = scr_value;
	}
	else if (number == "bsp") {
		scr_value=scr_value.slice(0,(scr_value.length-1));
		screen.value = scr_value;
	}
	else if (number == "%") {
		 if (scr_value=="") {}
		 else{
		 	if (op!="%") {
			 	op="%";
			 	past_num = scr_value;
			 	pastNum.innerHTML = past_num;
			 	screen.value = "0";
			 	scr_value = "0";
		 	}
		 }
	}
	else if (number == "*") {
		if (scr_value=="") {}
		 else{
		 	if (op!="*") {
		 		op="*";
			 	past_num = scr_value;
			 	pastNum.innerHTML = past_num;
			 	screen.value = "0";
			 	scr_value = "0";
		 	}
		}	
	}
	else if (number == "+") {
		if (scr_value=="") {}
		 else{
		 	if (op!="+") {
			 	op="+";
			 	past_num = scr_value;
			 	pastNum.innerHTML = past_num;
			 	screen.value = "0";
			 	scr_value = "0";
		 	}
		}
	}
	else if (number == "-") {
	if (op!="-") {
			 	op="-";
			 	past_num = scr_value;
			 	pastNum.innerHTML = past_num;
			 	screen.value = "0";
			 	scr_value = "0";
		 	}
	}
	else if (number == "=") {
		if (scr_value=="") {}
		 else{
		 	switch(op){
		 		case "%":
		 		screen.value = parseFloat(scr_value)*(parseFloat(past_num)/100);

		 		break;
		 		case "*":
		 		screen.value = parseFloat(scr_value)*(parseFloat(past_num));

		 		break;
		 		case "+":
		 		screen.value = parseFloat(scr_value)+(parseFloat(past_num));

		 		break;
		 		case "-":
		 		screen.value = parseFloat(past_num)-(parseFloat(scr_value));

		 		break;
		 	}
			pastNum.innerHTML="";
			scr_value=screen.value;
			op="_";
		 }
	}else if (number == "0") {
			scr_value+= number;
			screen.value += number;
	}else if (number == ".") {
		if (scr_value=="") {}
		else if (screen.value.indexOf(".")==-1) {
			scr_value+= number;
			screen.value += number;
		}
	}else{
			scr_value+= number;
			screen.value = scr_value;
	}
	if (screen.value.indexOf("0")==0 && (screen.value.length >=2 && screen.value.indexOf(".")==-1) ) {
		scr_value= scr_value.slice(1,(scr_value.length));
		screen.value = scr_value;
	}
}
function fullScreen(){
	var elem = document.documentElement;
	elem.requestFullscreen();
}