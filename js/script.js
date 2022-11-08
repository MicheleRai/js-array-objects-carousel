/*Riprendiamo l'esercizio carosello e modifichiamone il codice per renderlo funzionante con un array di oggetti al posto dell'array semplice.
Ecco l'array con i dati:
const images = [
	{
		image: '01.webp',
		title: "Marvel's Spiderman Miles Morale",
		text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
	},
	{
		image: '02.webp',
		title: 'Ratchet & Clank: Rift Apart',
		text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
	},
	{
		image: '03.webp',
		title: 'Fortnite',
		text: 'Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.',
	},
	{
		image: '04.webp',
		title: 'Stray',
		text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
	},
	{
		image: '05.webp',
		title: "Marvel's Avengers",
		text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
	},
];
BONUS 1:
Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.
BONUS 2:
Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.*/



const arrImages = [
	{
		image: '01.webp',
		title: "Marvel's Spiderman Miles Morale",
		text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
	},
	{
		image: '02.webp',
		title: 'Ratchet & Clank: Rift Apart',
		text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
	},
	{
		image: '03.webp',
		title: 'Fortnite',
		text: 'Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.',
	},
	{
		image: '04.webp',
		title: 'Stray',
		text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
	},
	{
		image: '05.webp',
		title: "Marvel's Avengers",
		text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
	},
];


const eleSliderViewer = document.querySelector('.slider-viewer');
const eleSliderThumbs = document.querySelector('.thumbs');
const eleBtnLeft = document.querySelector('.btn-left');
const eleBtnRight = document.querySelector('.btn-right');

// creare i tag immagine nell'html
for (let i = 0; i < arrImages.length; i++) {
	// creare i tag immagine che va nella sezione grande .slider-viewer
	const eleImg = document.createElement('div');
	eleImg.innerHTML =`<img src="img/${arrImages[i].image}" alt="">`;
	eleImg.classList.add('slider-img');
	const eleImgTitle = document.createElement('div');
	eleImgTitle.classList.add('slider-text')
	eleImgTitle.innerHTML = `<h2>${arrImages[i].title}</h2>
		<h4>${arrImages[i].text}</h4>`;
	if (i === 0) {
		eleImg.classList.add('active');
	};
	eleSliderViewer.append(eleImg);
	eleImg.append(eleImgTitle);

	// creare i tag immagine che vanno nella sezione .thumbs
	const eleThumb = document.createElement('div');
	eleThumb.innerHTML =`<img src="img/${arrImages[i].image}" alt="">`;
	eleThumb.classList.add('thumb-img');
	if (i === 0) {
		eleThumb.classList.add('active');
	}
	eleSliderThumbs.append(eleThumb);
}

const listEleImg = document.querySelectorAll('.slider-img'); // non e' un array ma qualcosa di simile
const listThumbs = document.querySelectorAll('.thumb-img');

let activeIndex = 0;
document.body.style.backgroundImage = `url('${arrImages[activeIndex]}')`;
document.body.style.backgroundSize = 'cover';

// aggiungere gli event listeners ai due bottoni
eleBtnRight.addEventListener('click', rightFunction );

eleBtnLeft.addEventListener('click', leftFunction);


const eleBtnStart = document.querySelector('.btn-start');
const eleBtnStop = document.querySelector('.btn-stop');
const eleBtninvert = document.querySelector('.btn-invert');
let idInterval;
let i = 0;

eleBtnStart.addEventListener('click', function() {
	idInterval = setInterval(rightFunction, 3000);
});

eleBtnStop.addEventListener('click', function() {
	clearInterval(idInterval);
})

eleBtninvert.addEventListener('click', function() {
	clearInterval(idInterval);
	idInterval = setInterval(leftFunction, 3000)	
})

function rightFunction () {
	// togliere la classe active dall'elemento attivo corrente
	listEleImg[activeIndex].classList.remove('active');
	listThumbs[activeIndex].classList.remove('active');

	// incrementare l'active index con reset per slider infinito
	activeIndex++;
	if (activeIndex === listEleImg.length) {
		activeIndex = 0;
	}

	// aggiungere la classe active all'elemento successivo
	listEleImg[activeIndex].classList.add('active');
	listThumbs[activeIndex].classList.add('active');
	document.body.style.backgroundImage = `url('${arrImages[activeIndex]}')`;
	document.body.style.backgroundSize = 'cover';
}
function leftFunction() {
	// togliere la classe active dall'elemento attivo corrente
	listEleImg[activeIndex].classList.remove('active');
	listThumbs[activeIndex].classList.remove('active');

	// decrementare l'active index con reset per slider infinito
	if (activeIndex === 0) {
		activeIndex = listEleImg.length;
	}
	activeIndex--;

	// aggiungere la classe active all'elemento successivo
	listEleImg[activeIndex].classList.add('active');
	listThumbs[activeIndex].classList.add('active');
	document.body.style.backgroundImage = `url('${arrImages[activeIndex]}')`;
	document.body.style.backgroundSize = 'cover';
}