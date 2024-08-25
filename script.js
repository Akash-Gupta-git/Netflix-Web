
const selectL = document.getElementById("lang-select")
let language = document.getElementsByClassName("change-Languange")
const head = document.querySelector("#text")
let parag = document.querySelector("p")
let head5 = document.querySelector("h5")
let login = document.querySelector("#login")
const btnSign = document.getElementById("btn-sign")
let hindi = document.getElementById("Hindi")
let bigHead = document.getElementById("text")
let error = document.getElementById("error")
let email = document.getElementById("login")
let btn = document.querySelector(".btn-submit")

let Enjoy = document.querySelector(".EnjoyH1")
let EnjoyP1 = document.querySelector(".paraa-1") 
let stranger = document.querySelector(".load-text")
let strangerLoading = document.querySelector(".loading")
let EnjoyP2 = document.querySelector(".Enjoy-2")
let PTwo = document.querySelector(".paraa-2")
let EnjoyP3 = document.querySelector(".Enjoy-3")
let P3 = document.querySelector(".paraa-3")
let EnjoyP4 = document.querySelector(".Enjoy-4")
let P4 = document.querySelector(".paraa-four")
let askCont = document.querySelector(".ask")
let firstQ = document.querySelector(".first")




const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;






   

let flag = true;
function validation() { 
    const userEmail = email.value;
 
    if (emailRegex.test(userEmail)) {
      alert(" ✅ Process done");
      email.style.border = "1px solid grey";
      email.value = "";

      } else {
      alert("Wrong ! email address");
      email.style.border = "2px solid red";
      email.value = "";
    }        
    flag = false;
    
}


    let lang = true;
    selectL.addEventListener("change", changeLanguage);
    
    function changeLanguage() {
        if(selectL.value !=  "Hindi") {
            btnSign.innerHTML = "साइन इन करे "
            head.innerHTML = "अनलिमिटेड फ़िल्में, टीवी शो के साथ भी बहुत कुछ"
            parag.innerHTML = "जहां चाहें देखें. जब चाहें कैंसल करें."
            head5.innerHTML = "देखने के लिए तैयार हैं? अपनी मेंबरशिप बनाने या रीस्टार्ट करने के लिए अपना ईमेल एड्रेस डालें"
            login.innerHTML = "ईमेल एड्रेस"
            btn.innerHTML = "शुरू करे"

            stranger.innerHTML = "अजनबी चीजें";
            strangerLoading.innerHTML = "डाउनलोड हो रहा है"
            Enjoy.innerHTML = "अपने टीवी पर आनंद लें"
            askCont.innerHTML = "अक्सर पूछे जाने वाले प्रश्नों"
            PTwo.innerHTML = "अपने पसंदीदा शो और फ़िल्में सेव करें, ताकि आप कभी भी इन्हें देख सकें."
            EnjoyP3.innerHTML = "हर जगह देखें"
            P3.innerHTML = "बिना ज़्यादा पेमेंट किए, अपने फ़ोन, टैबलेट, लैपटॉप और टीवी पर अनलिमिटेड फ़िल्में और टीवी शो स्ट्रीम करें."
            EnjoyP4.innerHTML = "बच्चों के लिए प्रोफ़ाइल बनाएं"
            P4.innerHTML = "बच्चों को अपने पसंदीदा किरदारों के साथ उस रोमांचक सफ़र पर जाने दें जो सिर्फ़ उनके लिए ही है - आपकी मेंबरशिप के साथ फ़्री."
            EnjoyP1.innerHTML = "स्मार्ट टीवी, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray प्लेयर के साथ ही दूसरे डिवाइस पर भी देखें.";
            EnjoyP2.innerHTML = "ऑफ़लाइन देखने के लिए अपने शो डाउनलोड करें"
            firstQ.innerHTML = "नेटफ्लिक्स क्या है?"
            alert("Hindi Selected")
            
            lang = false;       






        }   
    if (selectL.value == "English") {
        alert("English selected");
        changeToEnglish();
        lang = true;
    }
    function changeToEnglish() {
        btnSign.innerHTML = "Sign in";
        head.innerHTML = "Unlimited movies, TV shows and more"
        head5.innerHTML = "Ready to watch? Enter your email address to create or restart your membership.";
        login.innerHTML = "Email address";
        parag.innerHTML = "Watch anywhere. Cancel anytime.";
        btn.innerHTML = "Get Started"

        stranger.innerHTML = "Stranger Things"
        strangerLoading.innerHTML = "Downloading..."
        Enjoy.innerHTML = "Enjoy on your TV"
        askCont.innerHTML = "Frequently Asked Questions"
        EnjoyP3.innerHTML = "Watch everywhere"
        P3.innerHTML = "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
        EnjoyP4.innerHTML = "Create profiles for children."
        P4.innerHTML = "Send children on adventures with their favourite characters in a space made just for them—free with your membership."
        EnjoyP1.innerHTML = "ffffffffffWatch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.";
        EnjoyP2.innerHTML = "Download your shows to watch offline"
        PTwo.innerHTML = "Save your favourites easily and always have something to watch."
        firstQ.innerHTML = "What is Netflix?"
        
    }
} 


    let da = document.querySelectorAll(".ask-container")
    let O = document.querySelector(".paragraph")
    let plus = document.querySelector(".ask-fontPlus")
    let displaying = true;

    da.addEventListener("onclick", function() {
    O.style.backgroundColor = "red";
    })

    
    
    function Hidden() {
        if(displaying == true) {
        //  O.style.display = "block"
         plus.style.transform = "rotate(145deg)"
         displaying = false

        }
        else  {
            // O.style.display = "none"
             plus.style.transform = "rotateX(0deg)"
            displaying = true;
        }
        
    }