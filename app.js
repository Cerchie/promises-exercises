// let planet;

// $.getJSON("https://swapi.co/api/planets/1/", response => {
//     planet = response;
//     console.log(planet);
//     $.getJSON("https://swapi.co/api/planets/1/", response => {
//         resident = response;
//         console.log(residents);
//     });
// });

// let url = 'http://api.icndb.com/jokes';
// axios
// 	.get(url)
// 	.then((res) => {
// 		console.log('first prom');
// 		console.log(res.data);
// 		return axios.get(res.data.random);
// 	})
// 	.then((res) => {
// 		console.log(res.data);
// 		console.log('second prom');
// 		return axios.get(res.data.jokes);
// 	})
// 	.then((res) => {
// 		console.log('third prom');
// 		console.log(res.data);
// 	})
//     .catch((err) => console.log('rejected', err));

// function wait3Seconds() {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(resolve, 3000);
// 	});
// }

// wait3Seconds().then(() => console.log('all done')).catch(() => console.log('error!'));

// const h1 = document.querySelector('h1');
// // setTimeout(function() {
// // 	h1.style.color = 'red';
// // }, 1000);

// function changeColor(el, color) {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			el.style.color = color;
// 			resolve();
// 		}, 1000);
// 	});
// }

// changeColor(h1, 'teal')
// 	.then(() => changeColor(h1, 'orange'))
// 	.then(() => changeColor(h1, 'red'))
// 	.then(() => changeColor(h1, 'green'))
// 	.then(() => changeColor(h1, 'yellow'))
// 	.then(() => changeColor(h1, 'purple'));

// let mockAjaxRequest = new Promise(function(resolve, reject) {
// 	let probSuccess = 0.5;
// 	let requestTime = 1000;

// 	setTimeout(function() {
// 		let randomNum = Math.random();
// 		if (randomNum < probSuccess) {
// 			let data = "here's your data!";
// 			resolve(data);
// 		} else {
// 			reject('Sorry, your request failed.');
// 		}
// 	}, requestTime);
// });

// function mockAjaxRequest() {
// 	return new Promise(function(resolve, reject) {
// 		let probSuccess = 0.5;
// 		let requestTime = 1000;

// 		setTimeout(function() {
// 			let randomNum = Math.random();
// 			if (randomNum < probSuccess) {
// 				let data = "here's your data!";
// 				resolve(data);
// 			} else {
// 				reject('Sorry, your request failed.');
// 			}
// 		}, requestTime);
// 	});
// }

// mockAjaxRequest()
// 	.then((data) => {
// 		console.log(data);
// 		return mockAjaxRequest();
// 	})
// 	.then((data) => {
// 		console.log(data);
// 	})
// 	.catch((err) => console.log(err));

//mimicaxios
// function get(url) {
// 	const request = new XMLHttpRequest();
// 	return new Promise((resolve, reject) => {
// 		request.onload = function() {
// 			if (request.readyState != 4) return;

// 			if (request.status >= 200 && request.status < 300) {
// 				resolve({
// 					data: JSON.parse(request.response),
// 					status: request.status,
// 					request: request,
// 					headers: request.getAllResponseHeaders
// 				});
// 			} else {
// 				reject({
// 					msg: 'server err',
// 					request: request,
// 					status: request.status
// 				});
// 			}
// 		};
// 		request.onerror = function handleError() {
// 			request = null;
// 			reject({
// 				msg: 'network err'
// 			});
// 		};
// 		request.open('GET', url);
// 		request.send();
// 	});
// }

// get('http://api.icndb.com/jokes')
// 	.then((res) => {
// 		console.log(res);
// 		return get('http://api.icndb.com/jokes');
// 	})
// 	.then((res) => console.log(res))
// 	.catch((err) => console.log(err));

// promise.all and .race

// let fourPokemonPromises = [];

// for (let i = 1; i < 5; i++) {
// 	fourPokemonPromises.push(axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`));
// }

// Promise.all(fourPokemonPromises)
// 	let p = document.getElementById('p');
// 	p.innerHTML = `${data.data[1]} ${data.data[2]} ${data.data[3]}`;
// })
// .catch((err) => console.log(err));

//getting data 4 times on one num

// let fourFavesPromises = [];

// for (let i = 1; i < 5; i++) {
// 	fourFavesPromises.push(axios.get(`http://numbersapi.com/${i}`));
// }

// Promise.all(fourFavesPromises)
// 	.then((faveArr) => {
// 		for (res of faveArr) {
// 			let p2 = document.getElementById('p2');
// 			p2.innerHTML = `${res.data} ${res.data} ${res.data} ${res.data}`;
// 		}
// 	})
// 	.catch((err) => console.log(err));

//deck of cards portion of exercise

// let cardUrl = 'https://deckofcardsapi.com/api/deck/new/draw/?count=1';
// let cardPromise = axios.get(cardUrl);

// cardPromise
// 	.then((data) => {
// 		let btn = document.getElementById('btn');
// 		btn.onclick = function() {
// 			let div = document.getElementById('display-div');
// 			div.innerHTML = `${data.data.cards[0].value} ${data.data.cards[0].suit}`;
// 		};
// 		return axios.get(cardUrl);
// 	})
// 	.then((data) => {
// 		let btn = document.getElementById('btn');
// 		btn.onclick = function() {
// 			let div = document.getElementById('display-div');
// 			div.innerHTML = `${data.data.cards[0].value} ${data.data.cards[0].suit}`;
// 		};
// 	})
// 	.catch((err) => console.log(err));
//^my attempt-- got stuck on how to repeat. The solution solves this by calling on the url that draws a card without setting a limited count
//ps-- there is some fancy css stuff in this function that does not match mine
// $(function () {
//     let baseURL = 'https://deckofcardsapi.com/api/deck';

//     // 3.
//     let deckId = null;
//     let $btn = $('button');
//     let $cardArea = $('#card-area');

//     $.getJSON(`${baseURL}/new/shuffle/`).then(data => {
//         deckId = data.deck_id;
//         $btn.show();
//     });

//     $btn.on('click', function () {
//         $.getJSON(`${baseURL}/${deckId}/draw/`).then(data => {
//             let cardSrc = data.cards[0].image;
//             let angle = Math.random() * 90 - 45;
//             let randomX = Math.random() * 40 - 20;
//             let randomY = Math.random() * 40 - 20;
//             $cardArea.append(
//                 $('<img>', {
//                     src: cardSrc,
//                     css: {
//                         transform: `translate(${randomX}px, ${randomY}px) rotate(${angle}deg)`
//                     }
//                 })
//             );
//             if (data.remaining === 0) $btn.remove();
//         });
//     });
// });

// async function getCard() {
// 	console.log('starting');
// 	const res = await axios.get('https://deckofcardsapi.com/api/deck/new/draw/?count=1');
// 	console.log('ending');
// 	console.log(res.data);
// }

// const h1 = document.querySelector('h1');
// setTimeout(function() {
// 	h1.style.color = 'red';
// }, 1000);

// function changeCol(el, color) {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			el.style.color = color;
// 			resolve();
// 		}, 1000);
// 	});
// }

// changeCol(h1, 'teal')
// 	.then(() => changeCol(h1, 'orange'))
// 	.then(() => changeCol(h1, 'red'))
// 	.then(() => changeCol(h1, 'green'))
// 	.then(() => changeCol(h1, 'yellow'))
// 	.then(() => changeCol(h1, 'purple'));

// async function rainbow(el) {
// 	await changeCol(el, 'red');
// 	await changeCol(el, 'blue');
// 	await changeCol(el, 'yellow');
// 	await changeCol(el, 'green');
// 	await changeCol(el, 'purple');
// }

// rainbow(h1);

// const deck = {
// 	async init() {
// 		let res = await axios.get('https://deckofcardsapi.com/api/deck/new/');
// 		this.deckId = res.data.deck_id;
// 	},
// 	async shuffle() {
// 		let res = await axios.get(`https://deckofcardsapi.com/api/deck/${this.deckId}/shuffle/`);
// 		console.log(res);
// 	},
// 	async drawCard() {
// 		let res = await axios.get(`https://deckofcardsapi.com/api/deck/${this.deckId}/draw/?count=1`);
// 		console.log(res);
// 	}
// };

// class Pokemon {
// 	constructor(id) {
// 		this.id = id;
// 		this.types = [];
// 	}
// 	async getInfo() {
// 		let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${this.id}`);
// 		this.name = res.data.name;

// 		for (let type of res.data.types) {
// 			this.types.push(type.type.name);
// 		}
// 	}
// }

// async function getCard() {
// 	const res = await axios.get('https://deckofcardsapi.com/api/deck/new/draw/?countsssss=1');
//     try
//     {console.frog(res);}
//     catch {
//         console.log('TypeError!')
//     }
// }

// async function getUser(user) {
// 	try {
// 		let url = `https://api.github.com/users/${user}`;
// 		let response = await axios.get(url);
// 		console.log(`${response.data.name}: ${response.data.bio}`);
// 	} catch (e) {
// 		console.log('User does not exist', e);
// 	}
// }

// getUser('fajhjgv');

// function getUser(user) {
// 	let url = `https://api.github.com/users/${user}`;
// 	axios
// 		.get(url)
// 		.then((response) => {
// 			console.log(`${response.data.name}: ${response.data.bio}`);
// 		})
// 		.catch((e) => {
// 			console.log('User does not exist', e);
// 		});
// }

// let baseURLCallback = 'https://pokemonapi.co/api/v2/pokemon';

// $.getJSON(`${baseURLCallback}/1/`, (p1) => {
// 	console.log(`The first pokemon is ${p1.name}`);
// 	$.getJSON(`${baseURLCallback}/2/`, (p2) => {
// 		console.log(`The 2nd pokemon is ${p2.name}`);
// 		$.getJSON(`${baseURLCallback}/3/`, (p3) => {
// 			console.log(`The 3rd pokemon is ${p3.name}`);
// 		});
// 	});
// });

// function getThreePokemon() {
// 	let baseURL = 'https://pokemonapi.co/api/v2/pokemon';
// 	axios
// 		.get(`${baseURL}/1`)
// 		.then(({ data }) => {
// 			console.log(`The 1st pokemon is ${data.name}`);
// 			return axios.get(`${baseURL}/1`);
// 		})
// 		.then(({ data }) => {
// 			console.log(`The 2nd pokemon is ${data.name}`);
// 			return axios.get(`${baseURL}/2`);
// 		})
// 		.then(({ data }) => {
// 			console.log(`The 3rd pokemon is ${data.name}`);
//             return axios.get(`${baseURL}/3`);

// 		});
// }

// 		.then(({ data }) => {
// 			console.log(`The 1st pokemon is ${data.name}`);
// 			return axios.get(`${baseURL}/1`);
// 		})
// 		.then(({ data }) => {
// 			console.log(`The 2nd pokemon is ${data.name}`);
// 			return axios.get(`${baseURL}/2`);
// 		})
// 		.then(({ data }) => {
// 			console.log(`The 3rd pokemon is ${data.name}`);
// 			return axios.get(`${baseURL}/3`);
// 		});
// }

//getting data 4 times on one num

let fourFavesPromises = [];
async function fourProms() {
	for (let i = 1; i < 5; i++) {
		let res = await axios.get(`http://numbersapi.com/${i}`);
		fourFavesPromises.push(res);
		console.log(fourFavesPromises);
	}
}

function stickNumsToPage() {
	let p2 = document.getElementById('p2');
	for (prom in fourFavesPromises) {
		p2.innerHTML = `${fourFavesPromises[0].data},${fourFavesPromises[1].data},${fourFavesPromises[2]
			.data},${fourFavesPromises[3].data}`;
	}
}
let fourFactsPromises = [];
async function fourPromsFacts() {
	for (let i = 1; i < 5; i++) {
		let res = await axios.get(`http://numbersapi.com/1`);
		fourFactsPromises.push(res);
		console.log(fourFactsPromises);
	}
}
function stickFactsToPage() {
	let p2 = document.getElementById('p2');
	p2.innerHTML = `${fourFactsPromises[0].data}, ${fourFactsPromises[1].data},${fourFactsPromises[2].data}`;
}
// deck of cards portion of exercise

// cardPromise
// 	.then((data) => {
// 		let btn = document.getElementById('btn');
// 		btn.onclick = function() {
// 			let div = document.getElementById('display-div');
// 			div.innerHTML = `${data.data.cards[0].value} ${data.data.cards[0].suit}`;
// 		};
// 		return axios.get(cardUrl);
// 	})
// 	.then((data) => {
// 		let btn = document.getElementById('btn');
// 		btn.onclick = function() {
// 			let div = document.getElementById('display-div');
// 			div.innerHTML = `${data.data.cards[0].value} ${data.data.cards[0].suit}`;
// 		};
// 	})
//     .catch((err) => console.log(err));

async function putCardsUp() {
	let cardUrl = 'https://deckofcardsapi.com/api/deck/new/draw/?count=1';
	let cardPromise1 = await $.getJSON(`${cardUrl}`);
	let cardPromise2 = await $.getJSON(`${cardUrl}`);
	let btn = document.getElementById('btn');
	console.log(cardPromise1.cards[0].value);
	btn.onclick = function() {
		let div = document.getElementById('display-div');
		div.innerHTML = `${cardPromise1.cards[0].value},
        ${cardPromise2.cards[0].value}`;
	};
}

$(async function() {
	let baseURL = 'https://deckofcardsapi.com/api/deck';

	// 3.
	let deckId = null;
	let $btn = $('#btn');
	let $cardArea = $('#display-div');

	let data = await $.getJSON(`${baseURL}/new/shuffle/`);
	deckId = data.deck_id;
	$btn.show();

	$btn.on('click', async function() {
		let data = await $.getJSON(`${baseURL}/${deckId}/draw/`);

		let cardSrc = data.cards[0].image;
		let angle = Math.random() * 90 - 45;
		let randomX = Math.random() * 40 - 20;
		let randomY = Math.random() * 40 - 20;
		$cardArea.append(
			$('<img>', {
				src: cardSrc,
				css: {
					transform: `translate(${randomX}px, ${randomY}px) rotate(${angle}deg)`
				}
			})
		);
		if (data.remaining === 0) $btn.remove();
	});
});
