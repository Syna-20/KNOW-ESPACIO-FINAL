var game =  document.getElementById("stand");
	var i=0 ;
	var rock = document.getElementById("rock");
	var ast = document.getElementById("ast");
	var astro = document.getElementById("astro");
	var stand = document.getElementById("stand");


function checkScroll() {
	var coor = game.getBoundingClientRect(); 
	if(coor.top < window.innerHeight){
		stand.style.animationPlayState = 'running';
		rock.style.animationPlayState = 'running';
		astro.style.animationPlayState = 'running';
		ast.style.animationPlayState = 'running';
		

	}
	if(coor.top > window.innerHeight ){
		stand.style.animationPlayState = 'paused';
		rock.style.animationPlayState = 'paused';
		astro.style.animationPlayState = 'paused';
		ast.style.animationPlayState = 'paused';
		
	}
}

window.addEventListener("scroll", checkScroll);