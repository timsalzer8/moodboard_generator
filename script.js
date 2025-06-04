const button = document.getElementById("generateBtn");
const moodText = document.getElementById("moodText");

const moods = [
    "Zen Garden",
    "Cyberpunk Dreams",
    "Digital Minimalism",
    "Retro Future",
    "Analog Escape",
    "Neon Noir",
    "Pastel Tech",
    "Brutalist Code",
    "Whimsical Void",
    "Nature Reboot"
];

const quotes = [
    "Grow in silence. Let your roots talk.",
    "Code like no one's watching.",
    "Every glitch tells a story.",
    "Dream in pixels. Act in logic.",
    "Design is the silent ambassador of your brand.",
    "Let the void whisper something new.",
    "Balance is not something you find. It's something you create.",
    "Mood is the new method.",
    "Beauty begins at the breakpoint.",
    "Color is the keyboard of emotion."
];

const colorPalettes = [
    ["#2B2E4A", "#E84545", "#903749", "#53354A", "#FFD700"],
    ["#FCE38A", "#F38181", "#EAFFD0", "#95E1D3", "#FFB6B9"],
    ["#3A506B", "#5BC0BE", "#6FFFE9", "#1C2541", "#FFD6FF"],
    ["#D8E2DC", "#FFE5D9", "#FFCAD4", "#F4ACB7", "#A9DEF9"],
    ["#FFADAD", "#FFD6A5", "#FDFFB6", "#CAFFBF", "#9BF6FF"],
    ["#A0E7E5", "#B4F8C8", "#FBE7C6", "#FFAEBC", "#CDB4DB"]
  ];

button.addEventListener("click", function () {
    const randomIndex = Math.floor(Math.random() * moods.length);
    const selectedMood = moods[randomIndex];

    const randomQuoteIndex = Math.floor(Math.random() * quotes.length);
    const selectedQuote = quotes[randomQuoteIndex];

    moodText.classList.remove("show");

setTimeout(() => {
    moodText.innerHTML = `
        <h2 style="margin: 0; font-size: 1.8rem;">${selectedMood}</h2>
        <p style="font-style: italic; margin: 5px 0 15px;">"${selectedQuote}"</p>
    `;
requestAnimationFrame(() => {
    moodText.classList.add("show");
});
}, 1000);

const shuffledPalette = [...colorPalettes[Math.floor(Math.random() * colorPalettes.length)]]
.sort(() => Math.random() - 0.5);

const bgColor = shuffledPalette[0];
const paletteColors = shuffledPalette.slice(1, 5);
const paletteContainer = document.getElementById("colorPalette");

    paletteContainer.innerHTML = "";

    paletteColors.forEach(color => {
        const colorBox = document.createElement("div");
        colorBox.style.backgroundColor = color;
        colorBox.style.width = "50px";
        colorBox.style.height = "50px";
        colorBox.style.display = "inline-block";
        colorBox.style.margin = "5px";
        colorBox.style.borderRadius = "6px";
        colorBox.title = color;
        colorBox.style.boxShadow = "0 0 0 1px rgba(0,0,0,0.4)";

        const colorLabel = document.createElement("p");
        colorLabel.textContent = color;
        colorLabel.style.fontSize = "0.75rem";
        colorLabel.style.margin = "2px 0 10px";
        colorLabel.style.textAlign = "center";

        const colorWrapper = document.createElement("div");
        colorWrapper.style.display = "inline-block";
        colorWrapper.style.margin = "5px";
        colorWrapper.style.textAlign = "center";

        colorWrapper.appendChild(colorBox);
        colorWrapper.appendChild(colorLabel);
        paletteContainer.appendChild(colorWrapper);
    });

    document.body.style.backgroundColor = bgColor;
});