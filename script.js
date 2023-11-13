const doc = document;
const main = doc.getElementById('app');
const swapBtn = doc.getElementById('swap');

swapBtn.addEventListener('click', () =>{
	if(swapBtn.className === 'button_day'){
		main.className = 'night';
		swapBtn.className = 'button_night';
	}
	else{
		main.className= 'day';
		swapBtn.className = 'button_day';
	}
})