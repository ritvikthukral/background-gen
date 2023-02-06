var css=document.querySelector("h3");
var c1=document.getElementById('color1');
var c2=document.getElementById('color2');
var bg=document.getElementById('mybody');
var hml=document.getElementById('bodyy');

function colourChanger(){

	bg.style.background="linear-gradient(to right,"+c1.value+","+c2.value+")";
	css.textContent=bg.style.background + ";";

}

window.onload=colourChanger();

c1.addEventListener("input",function(){
	colourChanger();
})

c2.addEventListener("input",function(){
	
	colourChanger();
})





var database=[

	{
		name:"ritvik",
		password:"ass"
	},

	{	
		name:"mudit",
		password:"hole"
	}


]

var newFeed=[

	{
		name:"prateek",
		post:"feeling happy!"

	},

	{
		name:"rahul"
		post:"feeling crazy!"
	}		

]




const function isValidUser(uname,pwd){
	for(var i=0;i<database.length;i++){
		if(uname===database[i].name && pwd===database[i].password){
			return true;

		}
	}
	return false;
}



const function login(u,pw){
	if(isValidUser(u,pw)){
		console.log(newsFeed);
	}
	else{
		console.log("sorry! wrong password or username.")
	}
}