// let noCount = 0;
// let name = "";

let noCount = 0;

// 👉 CHANGE NAME HERE
let name = "My Love ❤️";


const messages = [
    "Are you sure? 🥺",
    "I am only one for you, think again 💕",
    "Oh God… think deep 😭 I made this for you 💖"
];

// function start() {
//     name = document.getElementById("nameInput").value.trim();
//     if (!name) {
//         alert("Please enter your name 💕");
//         return;
//     }
//     document.getElementById("step1").classList.add("hidden");
//     document.getElementById("step2").classList.remove("hidden");
//     document.getElementById("question").innerText =
//         `Will you be my Valentine, ${name}? 💘`;
// }
function start() {
    document.getElementById("step1").classList.add("hidden");
    document.getElementById("step2").classList.remove("hidden");
    document.getElementById("question").innerText =
        `Will you be my Valentine, ${name}? 💘`;
}


function noClick() {
    if (noCount < messages.length) {
        document.getElementById("question").innerText = messages[noCount];
        noCount++;
    } else {
        moveNoButton();
    }
}

function moveNoButton() {
    const btn = document.getElementById("noBtn");
    const x = Math.random() * 260 - 130;
    const y = Math.random() * 220 - 110;
    btn.style.transform = `translate(${x}px, ${y}px)`;
}

function yesClick() {
    document.getElementById("step2").classList.add("hidden");
    document.getElementById("final").classList.remove("hidden");
    document.getElementById("loveText").innerText =
        `I Love You ❤️ Happy Valentine Day ${name}`;
    createHearts();
}

function createHearts() {
    setInterval(() => {
        const heart = document.createElement("div");
        heart.className = "heart";
        heart.innerText = "❤️";
        heart.style.left = Math.random() * 100 + "vw";
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 5000);
    }, 250);
}
