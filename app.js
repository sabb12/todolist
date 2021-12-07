const text = document.getElementById('txt');
const list = document.getElementById('list');
const container = document.getElementById('container');
const addButton = document.getElementById('addButton');
const editButton = document.getElementById('editButton');

addButton.addEventListener('click', () => {
	const inputText1 = document.createElement('div')
	const checkbox = document.createElement('input')
	console.log('inputText1 :', inputText1);

	inputText1.innerHTML = text.value;
	text.value = '';


	checkbox.type = 'checkbox';
	// checkbox.checked = inputText1.checked;

	// for (let i = 0; i < checkbox.length; i++) {
	// 	console.log('i :', i)
	// 	console.log('i :', checkbox[i])
	// }

	const listItem = document.createElement('div');
	listItem.appendChild(inputText1);
	listItem.appendChild(checkbox);

	// list.appendChild(checkbox);
	// console.log('list :', list)

	addItems(listItem);

	checkbox.addEventListener('click', () => {
		removeItems(listItem);
		moveItems(listItem);
	})
});


function addItems(addData) {
	list.appendChild(addData);
}

function moveItems(addData) {
	container.appendChild(addData);
}

function removeItems(removeData) {
	list.removeChild(removeData)
}
