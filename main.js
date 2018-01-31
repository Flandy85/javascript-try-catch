/***************************************
		AUTO FUNCTION
****************************************/
// This function runs automatically when page is finsihed loading
(function(){
	//Variables that selects html tag with id and tag names
	let body = document.querySelector('body'),
		header = document.querySelector('header'),
		mainTag = document.querySelector('main'),
		h1Tag = document.querySelector('#main-title'),
		h2Tag = document.querySelector('#info-title'),
		pTag = document.querySelector('#info-text'),
		quoteTag = document.querySelector('blockquote'),
		button = document.querySelector('#button'),
		testTag = document.querySelector('#test');
		// style body
		body.style.backgroundColor = '#000000';
		//style header
		header.style.backgroundColor = '#F0EAEA';
		header.style.border = '2px solid #fff';

		mainTag.style.display = 'flex';
		mainTag.style.flexDirection = 'column';
		mainTag.style.justifyContent = 'center';
		mainTag.style.alignItems = 'center';
		//style h1 tag
		h1Tag.innerHTML = "Welcome to my testing page";
		h1Tag.style.color = '#000000';
		h1Tag.style.textAlign = 'center';
		// Style h2 tag
		h2Tag.innerHTML = "Testing changing html elements with javascript";
		h2Tag.style.color = "#fff";
		h2Tag.style.fontSize = '20px';
		h2Tag.style.textAlign = 'center';
		// style p tag
		pTag.innerHTML = "This testing page is about changing html elements and test try/catch/finally code snippet";
		pTag.style.color = '#fff';
		pTag.style.textAlign = 'center';
		// Style quote block
		quoteTag.innerHTML = "This call has interupted me and i hope for your sake it better be worth it SPEAK!";
		quoteTag.style.color = '#fff';
		quoteTag.style.textAlign = 'center';

		testTag.style.color = '#fff';
		testTag.style.fontSize = '30px';
		

})();

/***************************************
		TRY/CATCH/FINALLY
****************************************/
function enterName() {
	let name = prompt("What is your name?"),
		givenName = name,
		answer = document.querySelector('#test');
	try {
		if(givenName === ""){
			throw "John Doe!";
			console.log(givenName);
		}
		else if(givenName === null) {
			answer.innerHTML = "You must write a name!";
			answer.style.color = 'red';
			// prompt("What is your name?");
		}
		else if(givenName === NaN) {
			answer.innerHTML = "Numbers are not names";

		}
		else {
			answer.innerHTML = "Welcome " + givenName + "!";
		}

	} catch(error) {
		if(error === "John Doe!") {
			answer.innerHTML = "John Does will not be welcomed!";
		}
		else {
			answer.innerHTML = error.message;
		}
	} finally {
		answer.innerHTML += "<br/>Try/catch/finally succesfully excuted!";
	}
	console.log(givenName);
}

console.log("Testing");