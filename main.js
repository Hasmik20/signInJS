

// for submit and validation
const form = document.getElementById('form');
const firstName = document.getElementById('fName');
const email = document.getElementById('userEmail');
const password = document.getElementById('password1');
const password2 = document.getElementById('password2');


form.addEventListener('submit', e => {
	e.preventDefault();
	//for update validation message
	checkInputs();
});
function checkInputs() {
	// trim to remove the whitespaces
	const usernameValue = firstName.value.trim();

	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();
	
	if(usernameValue === '') {
		setErrorFor(firstName, 'Name cannot be blank');
	} else {
		setSuccessFor(firstName);
	}

	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}
	
	if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');
	} else {
		setSuccessFor(password);
	}
	
	if(password2Value === '') {
		setErrorFor(password2, 'Password cannot be blank');
	} else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'Passwords does not match');
	} else{
		setSuccessFor(password2);
	}
}

function setErrorFor(input, message) {
	const forMessage= input.parentElement;
	const small = forMessage.querySelector('small');
	forMessage.className = 'forMessage error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const forMessage = input.parentElement;
	forMessage.className = 'forMessage success';
	
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}



    // change signIn/signUp
    const signUpBlock = document.querySelectorAll(".signUpBlock");
  const h6 = document.querySelector("h6");
    const textChange = document.querySelector(".changeText");

    const logIn = document.querySelector("#logIn");
    const signUp = document.querySelector("#signUp")

logIn.addEventListener("click", update);

function update(){
  
  signUpBlock.forEach(item =>{
    item.style.display = "none";
  })
 
	
textChange.innerHTML =  `Don't have an account? <a href="#" class="deco-none" id="logUp">Sign Up</a>`
textChange.classList.add("mt-3")
h6.style.display = "none"
const logUp = document.querySelector("#logUp");
logUp.addEventListener("click",update1);

function update1(){

location.reload();
}
 
}

