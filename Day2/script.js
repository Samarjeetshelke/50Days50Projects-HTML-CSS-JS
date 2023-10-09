//js
const progress=document.getElementById('progress');
const prev=document.getElementById('prev');
const next=document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let curactive=1;
next.addEventListener('click',()=>{
	curactive++;
	
	update();
})

function update() {
	circles.forEach((circle,ind)=>{
		if(ind<curactive){
			circle.classList.add('active');
		}
		else{
			circle.classList.remove('active');
		}
	})

	const actives = document.querySelectorAll('.active');
	progress.style.width=((actives.length-1)/(circles.length-1))*100+"%";

	if(curactive == 1){
		prev.disabled=true;

	}
	else if(curactive === circles.length){
		next.disabled=true;
	}
	else{
		prev.disabled=false;
		next.disabled=false;
	}
}

prev.addEventListener('click',()=>{
	curactive--;
	if(curactive<1){
		curactive=1;
	}
	update();
})