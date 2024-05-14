function textcheng(){
	let text=document.getElementById("text").value;
	document.getElementById("min").innerHTML=text;
}


function colorcheng(){
	let color=document.getElementById("color").value;
	document.getElementById("min").style.color=color;
}	


function sizecheng(){	
	let size=document.getElementById("size").value;
	document.getElementById("min").style.fontSize=size+"px";
}


function aligncheng(){	
	let align="center";
	if(document.getElementById("wr").checked==true){
		align="right";
		document.getElementById("min").style.textAlign=align;
	}
	else if(document.getElementById("le").checked==true){
		align="left";
		document.getElementById("min").style.textAlign=align;
	}
	else
		document.getElementById("min").style.textAlign=align;
}
	
function showcheng(){
	let display="block";
	if(!document.getElementById("che").checked)
		display="none";
	document.getElementById("min").style.display=display;
}



	
		
