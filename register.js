const firebaseConfig = {

    apiKey: "AIzaSyArN6zJceyQ0SqHUmgO7-DHobhoo0kL7EM",
    authDomain: "edu-care-d77fb.firebaseapp.com",
    databaseURL: "https://edu-care-d77fb-default-rtdb.firebaseio.com",
    projectId: "edu-care-d77fb",
    storageBucket: "edu-care-d77fb.appspot.com",
    messagingSenderId: "816058814690",
    appId: "1:816058814690:web:2c9ebe0f8885bb574e4ebb",
    measurementId: "G-Q86TRYH83V"

  };


firebase.initializeApp(firebaseConfig);
const myFormDB = firebase.database().ref("myForm");
document.getElementById('myform').addEventListener('submit', submitForm);

function submitForm(e) {
	e.preventDefault();

	var fname = getElementVal('fname');
	var lname = getElementVal('lname');
	var male = getElementVal('male');
	var female = getElementVal('female');
	var others = getElementVal('others');
	var email = getElementVal('email');
	var password = getElementVal('password');
	var phone = getElementVal('phone');
	console.log(fname, lname, male, female, others, email, password,phone);
}


const getElementVal = (id)=>{

	return document.getElementById(id).value;
}

