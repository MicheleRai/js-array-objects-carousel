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
Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.





//vecchio


const arrImages = [
	'img/01.jpg',
	'img/02.jpg',
	'img/03.jpg',
	'img/04.jpg',
	'img/05.jpg',
];

const eleSlider = document.querySelector('.slider');
const eleBtnUp = document.querySelector('.btn-up');
const eleBtnDown = document.querySelector('.btn-down');


for (let i = 0; i < arrImages.length; i++) {
	const eleImg = document.createElement('img');
	eleImg.src = arrImages[i];
	eleImg.classList.add('slider-img');

	if (i === 0) {
		eleImg.classList.add('active');
	}

	eleSlider.append(eleImg);
}

const listEleImg = document.querySelectorAll('.slider-img'); 

let activeIndex = 0;

// const firstClone = listEleImg[0].cloneNode(true);
// const lastClone = listEleImg[listEleImg.length - 1].cloneNode(true);

// firstClone.id = 'first-clone';
// lastClone.id = 'last-clone';

// eleSlider.append(firstClone);
// eleSlider.prepend(lastClone);



eleBtnDown.addEventListener('click', function () {
	
	listEleImg[activeIndex].classList.remove('active');

    if (activeIndex === (arrImages.length - 1)) {
        activeIndex = 0;
    }else{
	activeIndex++;
    }

	listEleImg[activeIndex].classList.add('active');

	// eleBtnUp.classList.remove('hidden');
	// if (activeIndex === listEleImg.length - 1) {
	// 	eleBtnDown.classList.add('hidden');
	// }
});

eleBtnUp.addEventListener('click', function () {
	
	listEleImg[activeIndex].classList.remove('active');

    if (activeIndex === 0) {
        activeIndex = (arrImages.length - 1)
    }else{
	activeIndex--;
    }

	listEleImg[activeIndex].classList.add('active');

	// eleBtnDown.classList.remove('hidden');
	// if (activeIndex === 0) {
	// 	eleBtnUp.classList.add('hidden');
	// }
});