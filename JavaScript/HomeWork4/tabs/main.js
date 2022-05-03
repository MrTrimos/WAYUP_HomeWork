"use strict"

const tabs = document.getElementById('tabs');
const content = document.querySelectorAll('.content');

console.log(tabs);

const changeClass = el => {
	for(let i = 0; i < tabs.children.length; i++){
		tabs.children[i].classList.remove('active'); // удаление класса
	}
	el.classList.add('active');
}


tabs.addEventListener('click', e => {
	const currTab = e.target.dataset.btn; // по какому элементу кликнул
	//.dataset.btn элемент по data-btn
	changeClass(e.target);
	//content
	for(let i = 0; i < content.length; i++){
		content[i].classList.remove('active');
		if(content[i].dataset.content == currTab) {
			content[i].classList.add('active');
		}
	}
})


/////////////////////

const tabsInContent =document.getElementById('tabsInContent');
const contentIn = document.querySelectorAll('.contentIn');


const change = el => {
	for(let i = 0; i < tabsInContent.children.length; i++){
		tabsInContent.children[i].classList.remove('active');
	}
	el.classList.add('active');
}


tabsInContent.addEventListener('click', es => {
	const currTabContent = es.target.dataset.btnblosk;
	change(es.target);

	for(let i = 0; i < contentIn.length; i++){
		contentIn[i].classList.remove('active');
		if(contentIn[i].dataset.contentblosk == currTabContent) {
			contentIn[i].classList.add('active');
		}
	}

})
