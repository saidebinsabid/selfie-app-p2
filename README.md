# 📸 Voice Controlled Selfie App

A modern, simple, and professional web application that allows users to take a selfie using only their voice! Built with web-native AI modules (Speech Recognition) and a sleek, dark-moody glassmorphism user interface.

## 🚀 Short Description
This application uses the browser's built-in **Speech Recognition AI** to listen to user commands. When the user says specific phrases like *"My selfie please"* or *"Take a snapshot"*, the app automatically opens the webcam, gives an audio countdown using **Speech Synthesis**, takes a picture, and instantly downloads the selfie to the user's computer.

## ✨ Features
- **🎙️ Voice Recognition:** Listens and converts speech to text automatically.
- **🔊 Voice Feedback:** Talks back to you to let you know the picture is being taken.
- **📷 Auto-Capture:** Automatically toggles the webcam and captures a snapshot.
- **📥 Auto-Download:** Automatically downloads the captured selfie to your local machine.
- **🎨 Modern Design:** Fully responsive UI featuring a smooth, dark moody gradient and frosted glassmorphism effect.

## 🛠️ Technologies Required
This project is built using basic web technologies, making it extremely beginner-friendly while maintaining a premium look:
- **HTML5:** For the structure of the application.
- **CSS3:** For the dark, professional styling and glassmorphism UI.
- **JavaScript (ES6):** For the logic, speech recognition, and webcam integration.

### 🔗 CDNs Used
The project relies on external libraries included directly via CDN links in the HTML:

1. **Webcam.js:**
   ```html
   <script src="https://cdnjs.cloudflare.com/ajax/libs/webcamjs/1.0.26/webcam.js" integrity="sha512-AQMSn1qO6KN85GOfvH6BWJk46LhlvepblftLHzAv1cdIyTWPBKHX+r+NOXVVw6+XQpeW4LJk/GTmoP48FLvblQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
   ```
2. **Google Fonts (Poppins):**
   ```html
   <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet">
   ```
3. **Font Awesome Icons:**
   ```html
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
   ```

## ⚙️ How It Works

Here is a step-by-step breakdown of how the logic runs behind the scenes:

1. **Initialization:** When the user clicks the "Start Listening" button, the `start()` function clears the textbox and starts the `SpeechRecognition` engine.
2. **Listening:** As the user speaks, the engine transcribes the audio into text (`event.results[0][0].transcript`) and displays it in the textbox.
3. **Trigger:** The code checks if the transcribed text matches the exact phrases: *"my selfie please"* or *"take a snapshot"*.
4. **Action:** 
   - If a match is found, it calls the `speak()` function, which uses `SpeechSynthesis` to announce that a picture will be taken in 5 seconds.
   - It turns on the webcam view on the screen using `Webcam.attach(camera)`.
5. **Capture & Save:** After a 5-second delay (using `setTimeout`), it calls `take_selfie()` to freeze the frame, display it in the result box, and immediately calls `save()` to trigger an automatic download to the user's hard drive.

## 💻 Project Setup (How to Run)

Setting up this project is super easy! You don't need to install any complex servers or frameworks.

1. **Clone or Download** this project folder to your computer.
2. **Open the folder** and locate the `index.html` file.
3. **Double-click `index.html`** to open it directly in your web browser (Google Chrome or Microsoft Edge is recommended for full Speech Recognition support).
4. **Grant Permissions:** Your browser will ask for permission to use your **Microphone** and **Camera**. Be sure to click "Allow".
5. Click **"Start Listening"** and say the magic words!

---
*Created with ❤️ for AI enthusiasts and front-end learners.*
