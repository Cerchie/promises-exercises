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
$(function () {
    let baseURL = 'https://deckofcardsapi.com/api/deck';

    // 3.
    let deckId = null;
    let $btn = $('button');
    let $cardArea = $('#card-area');

    $.getJSON(`${baseURL}/new/shuffle/`).then(data => {
        deckId = data.deck_id;
        $btn.show();
    });

    $btn.on('click', function () {
        $.getJSON(`${baseURL}/${deckId}/draw/`).then(data => {
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
});