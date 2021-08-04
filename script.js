const entities = [
	{
		//text: 'Rostov-on-Don, Admiral',
		img: './images/image_Admiral.jpg'
	},
	{
		//text: 'Sochi Thieves',
		img: './images/image_Sochi.jpg'
	},
	{
		//text: 'Rostov-on-Don Patriotic',
		img: './images/image_Patriotic.jpg'
	}
]

const firstText = document.querySelector('.section2-navigation1-item__1')
const secondText = document.querySelector('.section2-navigation1-item__2')
const threeText = document.querySelector('.section2-navigation1-item__3')

const img = document.querySelector('.section2-conten__image')

const prev = document.querySelector('.section2-navigation2__arrow1')
const next = document.querySelector('.section2-navigation2__arrow2')

const firstItem = document.querySelector('.section2-navigation2-item__1')
const secondItem = document.querySelector('.section2-navigation2-item__2')
const threeItem = document.querySelector('.section2-navigation2-item__3')

firstItem.style.background = 'rgba(255, 255, 255, 0.3)'
secondItem.style.background = 'rgba(255, 255, 255, 0.3)'
threeItem.style.background = 'rgba(255, 255, 255, 0.3)'

firstText.style.color = 'rgba(255, 255, 255, 0.3'
secondText.style.color = 'rgba(255, 255, 255, 0.3'
threeText.style.color = 'rgba(255, 255, 255, 0.3'

let currentIndex = 0;

const setEntity = (index) => {
	//console.log("4", index);
	//text.innerText = entities[index].text
	img.style.backgroundImage = `url(${entities[index].img})`
}

let setColor = (index) => {
	switch (index) {
		case 0:
			firstItem.style.background = '#ffffff';
			secondItem.style.background = 'rgba(255, 255, 255, 0.3)';
			threeItem.style.background = 'rgba(255, 255, 255, 0.3)';
			break;
		case 1:
			firstItem.style.background = 'rgba(255, 255, 255, 0.3)';
			secondItem.style.background = '#ffffff';
			threeItem.style.background = 'rgba(255, 255, 255, 0.3)';
			break;
		default:
			firstItem.style.background = 'rgba(255, 255, 255, 0.3)';
			secondItem.style.background = 'rgba(255, 255, 255, 0.3)';
			threeItem.style.background = '#ffffff';
	}
}

//Стрелки переключают слайды по кольцу.
prev.addEventListener('click', () => {
	if (currentIndex == 0) {
		currentIndex = 3;
	}
	setEntity(currentIndex - 1);
	currentIndex -= 1;
	setColor(currentIndex);
})
next.addEventListener('click', () => {
	if (currentIndex == 2) {
		currentIndex = -1;
	}
	setEntity(currentIndex + 1);
	currentIndex += 1;
	setColor(currentIndex);
})

//Кружочки между стрелками (включают нужный слайд).
firstItem.addEventListener('click', () => {
	setColor(0);
	setEntity(0);
	currentIndex = 0;
})
secondItem.addEventListener('click', () => {
	setColor(1);
	setEntity(1);
	currentIndex = 1;
})
threeItem.addEventListener('click', () => {
	setColor(2);
	setEntity(2);
	currentIndex = 2;
})

//Ссылки сверху слайдера (включают нужный слайд).
firstText.addEventListener('click', () => {
	setEntity(0);
	setColor(0);
	currentIndex = 0;
})
secondText.addEventListener('click', () => {
	setEntity(1);
	setColor(1);
	currentIndex = 1;
})
threeText.addEventListener('click', () => {
	setEntity(2);
	setColor(2);
	currentIndex = 2;
})

//В мобильной версии стрелки переключают слайды по кольцу.
const prevMobil = document.querySelector('.section2-conten-info-button-left')
const nextMobil = document.querySelector('.section2-conten-info-button-right')
const imgMobil = document.querySelector('.section2-conten-info-image')

const setEntityMobil = (index) => {
	//console.log("4", index);
	//text.innerText = entities[index].text
	console.log('!!!', index);
	imgMobil.style.backgroundImage = `url(${entities[index].img})`
}

prevMobil.addEventListener('click', () => {
	if (currentIndex == 0) {
		currentIndex = 3;
	}
	setEntityMobil(currentIndex - 1);
	currentIndex -= 1;
})
nextMobil.addEventListener('click', () => {
	if (currentIndex == 2) {
		currentIndex = -1;
	}
	setEntityMobil(currentIndex + 1);
	currentIndex += 1;
})