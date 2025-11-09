// ======= CONFIGURATION =======
const unlockDates = {
  1: "2025-11-07",
  2: "2025-11-07",
  3: "2025-11-07",
  4: "2025-11-07",
  5: "2025-11-07",
  6: "2025-11-07",
  7: "2025-11-07",
  8: "2025-11-07",
  9: "2025-11-07",
  10: "2025-11-07"
};

// ======= MAIN SCRIPT =======
const tabs = document.querySelectorAll(".tab");
const popup = document.getElementById("popup");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

let selectedTab = null;

tabs.forEach(tab => {
  const tabNumber = tab.dataset.tab;
  const unlockDate = new Date(unlockDates[tabNumber]);
  const now = new Date();

  if (now < unlockDate) {
    tab.classList.add("locked");
    tab.title = `Locked until ${unlockDate.toDateString()}`;
  }

  tab.addEventListener("click", () => {
    if (tab.classList.contains("locked")) {
      alert("Sabar karo, sabar ka fal meetha hota hai ;) ");
      return;
    }

    selectedTab = tabNumber;
    const popuptext = document.getElementById("popuptext");
    const daystogo = document.getElementById("daystogo");
    if(selectedTab == "1") {
      daystogo.textContent = "9 days to go for our anniversary baby!!😘";
      popuptext.textContent = "Give Rushabh a kiss!😘";
    } else if(selectedTab == "2") {
      daystogo.textContent = "8 days to go for our anniversary baby!!😘";
      popuptext.textContent = "Tell Rushabh that he is the best boyfriend in the world😉";
    } else if(selectedTab == "3") {
      daystogo.textContent = "7 days to go for our anniversary baby!!😘";
      popuptext.textContent = "Give Rushabh a tight hugggg!❤️";
    } else if(selectedTab == "4") {
      daystogo.textContent = "6 days to go for our anniversary baby!!😘";
      popuptext.textContent = "Give Rushabh a chocolate🍫";
    } else if(selectedTab == "5") {
      daystogo.textContent = "5 days to go for our anniversary baby!!😘";
      popuptext.textContent = "Send Rushabh a cute picture of you😉";
    } else if(selectedTab == "6") {
      daystogo.textContent = "4 days to go for our anniversary baby!!😘";
      popuptext.textContent = "Give Rushabh a Jain peri peri twister treat😋 (I won't share😉)";
    } else if(selectedTab == "7") {
      daystogo.textContent = "3 days to go for our anniversary baby!!😘";
      popuptext.textContent = "Take Rushabh on a scooter ride!🛵";
    } else if(selectedTab == "8") {
      daystogo.textContent = "2 days to go for our anniversary baby!!😘";
      popuptext.textContent = "Send a voice note praising Rushabh (Ache se karna😉)";
    } else if(selectedTab == "9") {
      daystogo.textContent = "1 days to go for our anniversary baby!!😘";
      popuptext.textContent = "Click a mirror selfie and send it to Rushabh!😘";
    } else if(selectedTab == "10") {
      daystogo.textContent = "Its our anniversary baby!!😘";
      popuptext.textContent = "Tell Rushabh 'I Love You'❤️";
    } else {
      daystogo.textContent = "Its our anniversary baby!!😘";
      popuptext.textContent = "Tell Rushabh 'I Love You'❤️";
    }
    popup.classList.remove("hidden");
  });
});

yesBtn.addEventListener("click", () => {
  if (selectedTab) {
    window.location.href = `Day${selectedTab}/index.html`;
  }
});

noBtn.addEventListener("click", () => {
  popup.classList.add("hidden");
});

