// Step 1: Getting Elements from the HTML structure
// We use 'const' because these elements will not change.
const camera = document.getElementById('camera');
const result = document.getElementById('result');

// Step 2: Setting up Speech Recognition (AI module)
// This allows the app to listen to your voice.
const SpeechRecognition = window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

// Function to reset textbox and start listening to user's voice
function start() {
	const textbox = document.getElementById('textbox');
	textbox.value = ""; // Clear the text box before starting
	recognition.start(); // Start listening
} 

// This function runs automatically when voice is recognized
recognition.onresult = function(event) {
	console.log(event);
	
	// 'let' is used because content will be modified
	let content = event.results[0][0].transcript;
	content = content.toLowerCase();       // Convert to lowercase
	content = content.replaceAll(".", ""); // Remove dots
	
	// Show exactly what the app heard in the text box
	const textbox = document.getElementById('textbox');
	textbox.value = content; 
	
	// Check if user said the magic phrase
	if (content == "my selfie please" || content == "take a snapshot") {
		console.log("Taking your selfie in 5 seconds");
		speak(); // Call the speak function defined below
	}
}

// Function to notify user that the picture is being taken
function speak() {
	const synth = window.speechSynthesis;
	const say = "Taking your selfie in 5 seconds";
	
	// Create speech command with the text
	const utterThis = new SpeechSynthesisUtterance(say);
	synth.speak(utterThis); // Say the words out loud
	
	// Show webcam on screen
	Webcam.attach(camera);
	
	// Wait 5 seconds (5000 milliseconds) before taking picture and saving
	setTimeout(function() {
		take_selfie(); // Take the picture
		save();        // Save it to computer
	}, 5000);
}

// Setting up Webcam.js rules (height and width)
Webcam.set({
	width: 450,
	height: 350,
	image_format: 'png',
	png_quality: 90
});

// Function to take the picture
function take_selfie() {
	Webcam.snap(function(data_uri) {
		// Put the picture into the 'result' section using an HTML image tag
		result.innerHTML = '<img id="image" src="' + data_uri + '" />';
	});
}

// Function to automatically download the picture to your computer
function save() {
	// Find the hidden download link from HTML
	const link = document.getElementById('link');
	
	// Find the image element we just generated and get its picture source
	const imageElement = document.getElementById('image');
	const imgURL = imageElement.src;
	
	// Add the picture source to the link and simulate a click to download
	link.href = imgURL;
	link.click();
}
