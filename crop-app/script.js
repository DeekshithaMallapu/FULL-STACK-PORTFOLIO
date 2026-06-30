const data = {
    rice: {
        "yellow leaves": {
            problem: "Nitrogen Deficiency",
            fertilizer: "Urea",
            pesticide: "Not required",
            usage: "Apply 50kg per acre"
        },
        "brown spots": {
            problem: "Fungal Disease",
            fertilizer: "DAP",
            pesticide: "Carbendazim",
            usage: "Spray weekly"
        }
    },
    cotton: {
        "leaf curl": {
            problem: "Virus Infection",
            fertilizer: "NPK",
            pesticide: "Imidacloprid",
            usage: "Spray 2ml/L water"
        }
    }
};

// Solution
function getSolution() {
    const crop = document.getElementById("crop").value;
    const problem = document.getElementById("problem").value;
    const result = document.getElementById("result");

    if (data[crop] && data[crop][problem]) {
        const info = data[crop][problem];

        result.innerHTML = `
        <b>Problem:</b> ${info.problem}<br>
        <b>Fertilizer:</b> ${info.fertilizer}<br>
        <b>Pesticide:</b> ${info.pesticide}<br>
        <b>Usage:</b> ${info.usage}
        `;
    } else {
        result.innerHTML = "No data found";
    }
}

// Language
function changeLanguage() {
    const lang = document.getElementById("language").value;

    if (lang === "te") {
        document.getElementById("title").innerText = "పంట సమస్య పరిష్కారం";
    } else if (lang === "ta") {
        document.getElementById("title").innerText = "பயிர் பிரச்சனை தீர்வு";
    } else {
        document.getElementById("title").innerText = "🌱 Crop Problem Solver";
    }
}

// Voice
function startVoice() {
    const recognition = new webkitSpeechRecognition();

    const lang = document.getElementById("language").value;

    recognition.lang =
        lang === "te" ? "te-IN" :
        lang === "ta" ? "ta-IN" :
        "en-US";

    recognition.onresult = function(event) {
        const text = event.results[0][0].transcript;
        document.getElementById("voiceInput").value = text;

        if (text.includes("yellow")) {
            document.getElementById("problem").value = "yellow leaves";
        } else if (text.includes("brown")) {
            document.getElementById("problem").value = "brown spots";
        } else if (text.includes("curl")) {
            document.getElementById("problem").value = "leaf curl";
        }

        getSolution();
    };

    recognition.start();
}

// Crop Image
function showCropImage() {
    const crop = document.getElementById("crop").value;
    const img = document.getElementById("cropImage");

    img.src =
        crop === "rice"
        ? "https://upload.wikimedia.org/wikipedia/commons/6/6f/Rice_plants.jpg"
        : "https://upload.wikimedia.org/wikipedia/commons/4/4b/CottonPlant.JPG";
}

// Image Upload Preview
function previewImage(event) {
    const img = document.getElementById("preview");
    img.src = URL.createObjectURL(event.target.files[0]);
}