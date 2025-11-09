let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");
let ctrlIconBackward = document.getElementById("ctrlIconBackward");
let ctrlIconForward = document.getElementById("ctrlIconForward");

let progress2 = document.getElementById("progress2");
let song2 = document.getElementById("song2");
let ctrlIcon2 = document.getElementById("ctrlIcon2");
let ctrlIconBackward2 = document.getElementById("ctrlIconBackward2");
let ctrlIconForward2 = document.getElementById("ctrlIconForward2");

let progress3 = document.getElementById("progress3");
let song3 = document.getElementById("song3");
let ctrlIcon3 = document.getElementById("ctrlIcon3");
let ctrlIconBackward3 = document.getElementById("ctrlIconBackward3");
let ctrlIconForward3 = document.getElementById("ctrlIconForward3");

let progress4 = document.getElementById("progress4");
let song4 = document.getElementById("song4");
let ctrlIcon4 = document.getElementById("ctrlIcon4");
let ctrlIconBackward4 = document.getElementById("ctrlIconBackward4");
let ctrlIconForward4 = document.getElementById("ctrlIconForward4");

let progress5 = document.getElementById("progress5");
let song5 = document.getElementById("song5");
let ctrlIcon5 = document.getElementById("ctrlIcon5");
let ctrlIconBackward5 = document.getElementById("ctrlIconBackward5");
let ctrlIconForward5 = document.getElementById("ctrlIconForward5");

let progress6 = document.getElementById("progress6");
let song6 = document.getElementById("song6");
let ctrlIcon6 = document.getElementById("ctrlIcon6");
let ctrlIconBackward6 = document.getElementById("ctrlIconBackward6");
let ctrlIconForward6 = document.getElementById("ctrlIconForward6");

function playpause() {
    if (ctrlIcon.classList.contains("fa-pause")) {
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    } else {
        song.play();
        song2.pause();
        song3.pause();
        song4.pause();
        song5.pause();
        song6.pause();
        ctrlIcon.classList.add("fa-pause");
        ctrlIcon.classList.remove("fa-play");
        ctrlIcon2.classList.add("fa-pause");
        ctrlIcon2.classList.remove("fa-play");
        ctrlIcon3.classList.add("fa-pause");
        ctrlIcon3.classList.remove("fa-play");
        ctrlIcon4.classList.add("fa-pause");
        ctrlIcon4.classList.remove("fa-play");
        ctrlIcon5.classList.add("fa-pause");
        ctrlIcon5.classList.remove("fa-play");
        ctrlIcon6.classList.add("fa-pause");
        ctrlIcon6.classList.remove("fa-play");
    }
}

function playpause() {
    if (ctrlIcon.classList.contains("fa-pause")) {
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    } else {
        song.play();
        song2.pause();
        song3.pause();
        song4.pause();
        song5.pause();
        song6.pause();
        ctrlIcon.classList.add("fa-pause");
        ctrlIcon.classList.remove("fa-play");
        if (ctrlIcon2.classList.contains("fa-pause")) {
            ctrlIcon2.classList.add("fa-play");
            ctrlIcon2.classList.remove("fa-pause");
        }
        if (ctrlIcon3.classList.contains("fa-pause")) {
            ctrlIcon3.classList.add("fa-play");
            ctrlIcon3.classList.remove("fa-pause");
        }
        if (ctrlIcon4.classList.contains("fa-pause")) {
            ctrlIcon4.classList.add("fa-play");
            ctrlIcon4.classList.remove("fa-pause");
        }
        if (ctrlIcon5.classList.contains("fa-pause")) {
            ctrlIcon5.classList.add("fa-play");
            ctrlIcon5.classList.remove("fa-pause");
        }
        if (ctrlIcon6.classList.contains("fa-pause")) {
            ctrlIcon6.classList.add("fa-play");
            ctrlIcon6.classList.remove("fa-pause");
        }
    }
}

function playpause2() {
    if (ctrlIcon2.classList.contains("fa-pause")) {
        song2.pause();
        ctrlIcon2.classList.remove("fa-pause");
        ctrlIcon2.classList.add("fa-play");
    } else {
        song2.play();
        song.pause();
        song3.pause();
        song4.pause();
        song5.pause();
        song6.pause();
        ctrlIcon2.classList.add("fa-pause");
        ctrlIcon2.classList.remove("fa-play");
        if (ctrlIcon.classList.contains("fa-pause")) {
            ctrlIcon.classList.add("fa-play");
            ctrlIcon.classList.remove("fa-pause");
        }
        if (ctrlIcon3.classList.contains("fa-pause")) {
            ctrlIcon3.classList.add("fa-play");
            ctrlIcon3.classList.remove("fa-pause");
        }
        if (ctrlIcon4.classList.contains("fa-pause")) {
            ctrlIcon4.classList.add("fa-play");
            ctrlIcon4.classList.remove("fa-pause");
        }
        if (ctrlIcon5.classList.contains("fa-pause")) {
            ctrlIcon5.classList.add("fa-play");
            ctrlIcon5.classList.remove("fa-pause");
        }
        if (ctrlIcon6.classList.contains("fa-pause")) {
            ctrlIcon6.classList.add("fa-play");
            ctrlIcon6.classList.remove("fa-pause");
        }
    }
}

function playpause3() {
    if (ctrlIcon3.classList.contains("fa-pause")) {
        song3.pause();
        ctrlIcon3.classList.remove("fa-pause");
        ctrlIcon3.classList.add("fa-play");
    } else {
        song3.play();
        song2.pause();
        song.pause();
        song4.pause();
        song5.pause();
        song6.pause();
        ctrlIcon3.classList.add("fa-pause");
        ctrlIcon3.classList.remove("fa-play");
        if (ctrlIcon2.classList.contains("fa-pause")) {
            ctrlIcon2.classList.add("fa-play");
            ctrlIcon2.classList.remove("fa-pause");
        }
        if (ctrlIcon.classList.contains("fa-pause")) {
            ctrlIcon.classList.add("fa-play");
            ctrlIcon.classList.remove("fa-pause");
        }
        if (ctrlIcon4.classList.contains("fa-pause")) {
            ctrlIcon4.classList.add("fa-play");
            ctrlIcon4.classList.remove("fa-pause");
        }
        if (ctrlIcon5.classList.contains("fa-pause")) {
            ctrlIcon5.classList.add("fa-play");
            ctrlIcon5.classList.remove("fa-pause");
        }
        if (ctrlIcon6.classList.contains("fa-pause")) {
            ctrlIcon6.classList.add("fa-play");
            ctrlIcon6.classList.remove("fa-pause");
        }
    }
}

function playpause4() {
    if (ctrlIcon4.classList.contains("fa-pause")) {
        song4.pause();
        ctrlIcon4.classList.remove("fa-pause");
        ctrlIcon4.classList.add("fa-play");
    } else {
        song4.play();
        song2.pause();
        song3.pause();
        song.pause();
        song5.pause();
        song6.pause();
        ctrlIcon4.classList.add("fa-pause");
        ctrlIcon4.classList.remove("fa-play");
        if (ctrlIcon2.classList.contains("fa-pause")) {
            ctrlIcon2.classList.add("fa-play");
            ctrlIcon2.classList.remove("fa-pause");
        }
        if (ctrlIcon3.classList.contains("fa-pause")) {
            ctrlIcon3.classList.add("fa-play");
            ctrlIcon3.classList.remove("fa-pause");
        }
        if (ctrlIcon.classList.contains("fa-pause")) {
            ctrlIcon.classList.add("fa-play");
            ctrlIcon.classList.remove("fa-pause");
        }
        if (ctrlIcon5.classList.contains("fa-pause")) {
            ctrlIcon5.classList.add("fa-play");
            ctrlIcon5.classList.remove("fa-pause");
        }
        if (ctrlIcon6.classList.contains("fa-pause")) {
            ctrlIcon6.classList.add("fa-play");
            ctrlIcon6.classList.remove("fa-pause");
        }
    }
}

function playpause5() {
    if (ctrlIcon5.classList.contains("fa-pause")) {
        song5.pause();
        ctrlIcon5.classList.remove("fa-pause");
        ctrlIcon5.classList.add("fa-play");
    } else {
        song5.play();
        song2.pause();
        song3.pause();
        song4.pause();
        song.pause();
        song6.pause();
        ctrlIcon5.classList.add("fa-pause");
        ctrlIcon5.classList.remove("fa-play");
        if (ctrlIcon2.classList.contains("fa-pause")) {
            ctrlIcon2.classList.add("fa-play");
            ctrlIcon2.classList.remove("fa-pause");
        }
        if (ctrlIcon3.classList.contains("fa-pause")) {
            ctrlIcon3.classList.add("fa-play");
            ctrlIcon3.classList.remove("fa-pause");
        }
        if (ctrlIcon4.classList.contains("fa-pause")) {
            ctrlIcon4.classList.add("fa-play");
            ctrlIcon4.classList.remove("fa-pause");
        }
        if (ctrlIcon.classList.contains("fa-pause")) {
            ctrlIcon.classList.add("fa-play");
            ctrlIcon.classList.remove("fa-pause");
        }
        if (ctrlIcon6.classList.contains("fa-pause")) {
            ctrlIcon6.classList.add("fa-play");
            ctrlIcon6.classList.remove("fa-pause");
        }
    }
}

function playpause6() {
    if (ctrlIcon6.classList.contains("fa-pause")) {
        song6.pause();
        ctrlIcon6.classList.remove("fa-pause");
        ctrlIcon6.classList.add("fa-play");
    } else {
        song6.play();
        song2.pause();
        song3.pause();
        song4.pause();
        song5.pause();
        song.pause();
        ctrlIcon6.classList.add("fa-pause");
        ctrlIcon6.classList.remove("fa-play");
        if (ctrlIcon2.classList.contains("fa-pause")) {
            ctrlIcon2.classList.add("fa-play");
            ctrlIcon2.classList.remove("fa-pause");
        }
        if (ctrlIcon3.classList.contains("fa-pause")) {
            ctrlIcon3.classList.add("fa-play");
            ctrlIcon3.classList.remove("fa-pause");
        }
        if (ctrlIcon4.classList.contains("fa-pause")) {
            ctrlIcon4.classList.add("fa-play");
            ctrlIcon4.classList.remove("fa-pause");
        }
        if (ctrlIcon5.classList.contains("fa-pause")) {
            ctrlIcon5.classList.add("fa-play");
            ctrlIcon5.classList.remove("fa-pause");
        }
        if (ctrlIcon.classList.contains("fa-pause")) {
            ctrlIcon.classList.add("fa-play");
            ctrlIcon.classList.remove("fa-pause");
        }
    }
}

song.onloadedmetadata = function () {
    progress.max = song.duration;
    progress.value = song.currentTime;
}

if (song.play()) {
    setInterval(() => {
        progress.value = song.currentTime;
    }, 500);
}

progress.onchange = function () {
    song.play();
    song.currentTime = progress.value;
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
}

song2.onloadedmetadata = function () {
    progress2.max = song2.duration;
    progress2.value = song2.currentTime;
}

if (song2.play()) {
    setInterval(() => {
        progress2.value = song2.currentTime;
    }, 500);
}

progress2.onchange = function () {
    song2.play();
    song2.currentTime = progress2.value;
    ctrlIcon2.classList.add("fa-pause");
    ctrlIcon2.classList.remove("fa-play");
}

song3.onloadedmetadata = function () {
    progress3.max = song3.duration;
    progress3.value = song3.currentTime;
}

if (song3.play()) {
    setInterval(() => {
        progress3.value = song3.currentTime;
    }, 500);
}

progress3.onchange = function () {
    song3.play();
    song3.currentTime = progress3.value;
    ctrlIcon3.classList.add("fa-pause");
    ctrlIcon3.classList.remove("fa-play");
}

song4.onloadedmetadata = function () {
    progress4.max = song4.duration;
    progress4.value = song4.currentTime;
}

if (song4.play()) {
    setInterval(() => {
        progress4.value = song4.currentTime;
    }, 500);
}

progress4.onchange = function () {
    song4.play();
    song4.currentTime = progress4.value;
    ctrlIcon4.classList.add("fa-pause");
    ctrlIcon4.classList.remove("fa-play");
}

song5.onloadedmetadata = function () {
    progress5.max = song5.duration;
    progress5.value = song5.currentTime;
}

if (song5.play()) {
    setInterval(() => {
        progress5.value = song5.currentTime;
    }, 500);
}

progress5.onchange = function () {
    song5.play();
    song5.currentTime = progress5.value;
    ctrlIcon5.classList.add("fa-pause");
    ctrlIcon5.classList.remove("fa-play");
}

song6.onloadedmetadata = function () {
    progress6.max = song6.duration;
    progress6.value = song6.currentTime;
}

if (song6.play()) {
    setInterval(() => {
        progress6.value = song6.currentTime;
    }, 500);
}

progress6.onchange = function () {
    song6.play();
    song6.currentTime = progress6.value;
    ctrlIcon6.classList.add("fa-pause");
    ctrlIcon6.classList.remove("fa-play");
}