function generateAd() {
    let userText = document.getElementById("userText").value.trim().toLowerCase();
    let language = document.getElementById("language").value;
    let outputType = document.getElementById("outputType").value;
    
    if (userText === "") {
        alert("Please enter some text.");
        return;
    }

    document.getElementById("output").innerHTML = "<p>Generating your ad...</p>";
    document.getElementById("output-section").style.display = "block";

    let adData = {
        "general store": {
            "image": "/static/demo/stationery_pic.png",
            "video": "/static/demo/store_video.mp4"
        },
        "car service": {
            "image": "/static/demo/car_pic.png",
            "video": "/static/demo/car_video.mp4"
        },
        "restaurant": {
            "image": "/static/demo/restro_pic.png",
            "video": "/static/demo/restro_video.mp4"
        },
        "clothing brand": {
            "image": "/static/demo/cloth_ad_pic.png",
            "video": "/static/demo/fashion_video.mp4"
        }
    };

    // Match user input with available ads
    let matchedAd = adData["general store"]; // Default ad
    if (userText.includes("store")) matchedAd = adData["general store"];
    else if (userText.includes("car")) matchedAd = adData["car service"];
    else if (userText.includes("restaurant") || userText.includes("food")) matchedAd = adData["restaurant"];
    else if (userText.includes("clothing") || userText.includes("fashion")) matchedAd = adData["clothing brand"];

    console.log("User Input:", userText);
    console.log("Matched Ad:", matchedAd);
    console.log("Selected Output Type:", outputType);
    console.log("Image Path:", matchedAd.image);
    console.log("Video Path:", matchedAd.video);

    // Show Image or Video based on selection
    if (outputType === "image") {
        document.getElementById("output").innerHTML = `<img src="${matchedAd.image}" alt="Generated Ad" style="width:100%; max-width:600px;">`;
    } else {
        document.getElementById("output").innerHTML = `<video controls style="width:100%; max-width:600px;"><source src="${matchedAd.video}" type="video/mp4">Your browser does not support video.</video>`;
    }
}
