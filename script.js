/* =====================================================
   FOR SWETA ❤️
   MAIN JAVASCRIPT
===================================================== */


/* =====================================================
   1. STAR SYSTEM
===================================================== */

const starsContainer =
    document.getElementById("stars");


const STAR_COUNT = 70;


for (let i = 0; i < STAR_COUNT; i++) {

    const star =
        document.createElement("div");

    star.className = "star";


    star.style.left =
        Math.random() * 100 + "%";


    star.style.top =
        Math.random() * 100 + "%";


    const size =
        Math.random() * 2 + 1;


    star.style.width =
        size + "px";


    star.style.height =
        size + "px";


    star.style.animationDelay =
        Math.random() * 3 + "s";


    starsContainer.appendChild(star);
}


/* =====================================================
   2. ELEMENTS
===================================================== */

const introScreen =
    document.getElementById("introScreen");


const apologyScreen =
    document.getElementById("apologyScreen");


const openButton =
    document.getElementById("openButton");


const apologySmall =
    document.getElementById("apologySmall");


const apologyTitle =
    document.getElementById("apologyTitle");


const apologyText =
    document.getElementById("apologyText");


const apologyNext =
    document.getElementById("apologyNext");
/* =====================================================
   FRIEND + QUESTION ELEMENTS
===================================================== */

const friendScreen =
    document.getElementById("friendScreen");


const friendNext =
    document.getElementById("friendNext");


const questionScreen =
    document.getElementById("questionScreen");


const angryButton =
    document.getElementById("angryButton");


const littleAngryButton =
    document.getElementById("littleAngryButton");


const responseScreen =
    document.getElementById("responseScreen");


const responseSmall =
    document.getElementById("responseSmall");


const responseTitle =
    document.getElementById("responseTitle");


const responseText =
    document.getElementById("responseText");


const responseNext =
    document.getElementById("responseNext");
    /* =====================================================
   FINAL SCREEN ELEMENTS
===================================================== */

const finalScreen =
    document.getElementById("finalScreen");


const letterButton =
    document.getElementById("letterButton");


const letterScreen =
    document.getElementById("letterScreen");


const finishButton =
    document.getElementById("finishButton");


const endScreen =
    document.getElementById("endScreen");


const heartContainer =
    document.getElementById("heartContainer");

/* =====================================================
   3. TAP SOUND
===================================================== */

let audioContext = null;


function playTapSound() {

    if (!audioContext) {

        const AudioContext =
            window.AudioContext ||
            window.webkitAudioContext;

        if (!AudioContext) {
            return;
        }

        audioContext =
            new AudioContext();
    }


    if (audioContext.state === "suspended") {
        audioContext.resume();
    }


    const now =
        audioContext.currentTime;


    /* Sweet little magical chime */

    const oscillator =
        audioContext.createOscillator();

    const gain =
        audioContext.createGain();


    oscillator.type = "sine";


    /* Soft high note */

    oscillator.frequency.setValueAtTime(
        880,
        now
    );

    oscillator.frequency.exponentialRampToValueAtTime(
        1174,
        now + 0.12
    );


    /* Gentle volume */

    gain.gain.setValueAtTime(
        0.0001,
        now
    );

    gain.gain.exponentialRampToValueAtTime(
        0.20,
        now + 0.015
    );

    gain.gain.exponentialRampToValueAtTime(
        0.018,
        now + 0.10
    );

    gain.gain.exponentialRampToValueAtTime(
        0.0001,
        now + 0.38
    );


    oscillator.connect(gain);

    gain.connect(
        audioContext.destination
    );


    oscillator.start(now);

    oscillator.stop(
        now + 0.4
    );
}


/* =====================================================
   4. APOLOGY SCENES
===================================================== */

const apologyScenes = [

    {
        small: "Sweta...",

        title:
            "I know meri bestie mujhse<br><span>Gussa hai.</span>",

        text:
            "And honestly... Hona bhi chahiye."
    },


    {
        small: "I know...",

        title:
            "Hm itni chhoti cheejo pe<br><span>gussa ho gye.</span>",

        text:
            "Hmko aisa nhi krna chahiye tha."
    },


    {
        small: "No excuses.",

        title:
            "The mistake<br><span>was mine.</span>",

        text:
            "Hmko us waqt thoda ruk kar sochna chahiye tha."
    },


    {
        small: "And the truth is...",

        title:
            "I never wanted<br><span>to hurt you.</span>",

        text:
            "I'm genuinely sorry, MY BESTIE. ❤️"
    }

];


let currentScene = 0;


/* =====================================================
   5. SHOW APOLOGY SCENE
===================================================== */

function showApologyScene(index) {

    const scene =
        apologyScenes[index];


    /* Hide old text */

    apologySmall.classList.remove(
        "text-visible"
    );


    apologyTitle.classList.remove(
        "text-visible"
    );


    apologyText.classList.remove(
        "text-visible"
    );


    apologyNext.classList.remove(
        "text-visible"
    );


    /* Reset content */

    apologySmall.innerHTML = "";

    apologyTitle.innerHTML = "";

    apologyText.innerHTML = "";


    /* Add new content */

    setTimeout(function () {

        apologySmall.innerHTML =
            scene.small;

        apologySmall.classList.add(
            "text-visible"
        );

    }, 250);


    setTimeout(function () {

        apologyTitle.innerHTML =
            scene.title;

        apologyTitle.classList.add(
            "text-visible"
        );

    }, 500);


    setTimeout(function () {

        apologyText.innerHTML =
            scene.text;

        apologyText.classList.add(
            "text-visible"
        );

    }, 900);


    setTimeout(function () {

        apologyNext.classList.add(
            "text-visible"
        );

        apologyNext.style.pointerEvents =
            "auto";

    }, 1300);
}


/* =====================================================
   6. OPEN WEBSITE
===================================================== */

openButton.addEventListener(
    "click",
    function () {

        playTapSound();

        loveBGM.currentTime = 0;
        loveBGM.volume = 1;
        loveBGM.play();


        /* Button press animation */

        openButton.style.transform =
            "scale(0.92)";


        setTimeout(function () {

            openButton.style.transform =
                "scale(1)";

        }, 120);


        /* Hide opening screen */

        introScreen.classList.add(
            "hidden"
        );


        /* Show apology screen */

        setTimeout(function () {

            apologyScreen.classList.remove(
                "hidden"
            );


            showApologyScene(
                currentScene
            );

        }, 700);

    }
);


/* =====================================================
   7. NEXT BUTTON
===================================================== */

/* =====================================================
   APOLOGY NEXT BUTTON
===================================================== */

apologyNext.addEventListener(
    "click",
    function () {

        playTapSound();

        currentScene++;


        /* More apology scenes */

        if (
            currentScene <
            apologyScenes.length
        ) {

            showApologyScene(
                currentScene
            );

            return;
        }


        /* All apology scenes finished */

        apologyScreen.classList.add(
            "hidden"
        );


        setTimeout(function () {

            friendScreen.classList.remove(
                "hidden"
            );

        }, 700);

    }
);


/* =====================================================
   FRIEND SCREEN
===================================================== */

friendNext.addEventListener(
    "click",
    function () {

        playTapSound();


        friendScreen.classList.add(
            "hidden"
        );


        setTimeout(function () {

            questionScreen.classList.remove(
                "hidden"
            );

        }, 700);

    }
);


/* =====================================================
   ANGRY RESPONSE
===================================================== */

angryButton.addEventListener(
    "click",
    function () {

        playTapSound();


        questionScreen.classList.add(
            "hidden"
        );


        setTimeout(function () {

            responseSmall.innerHTML =
                "Okay...";


            responseTitle.innerHTML =
                "You can be<br><span>angry with me.</span>";


            responseText.innerHTML =
                "Apki narajgi jayaaz hai. " +
                "Bas itna chahte hain ki ab bhul jaate hain..." +
                "<br><br>" +
                "I'm really, really sorry. ❤️";


            responseScreen.classList.remove(
                "hidden"
            );

        }, 700);

    }
);


/* =====================================================
   A LITTLE ANGRY RESPONSE
===================================================== */

littleAngryButton.addEventListener(
    "click",
    function () {

        playTapSound();


        questionScreen.classList.add(
            "hidden"
        );


        setTimeout(function () {

            responseSmall.innerHTML =
                "Bas thoda sa? 🥺";


            responseTitle.innerHTML =
                "Then maybe<br><span>I still have a chance.</span>";


            responseText.innerHTML =
                "Ok, chalo bestie ne thoda sa to maaf kiya " +
            
                "<br><br>" +
                "Take your time. ❤️";


            responseScreen.classList.remove(
                "hidden"
            );

        }, 700);

    }
);


/* =====================================================
   RESPONSE NEXT
===================================================== */

/* =====================================================
   RESPONSE → FINAL NIGHT
===================================================== */

responseNext.addEventListener(
    "click",
    function () {

        playTapSound();


        responseScreen.classList.add(
            "hidden"
        );


        setTimeout(function () {

            finalScreen.classList.remove(
                "hidden"
            );


            createFloatingHearts();

        }, 700);

    }
);
/* =====================================================
   FLOATING HEARTS
===================================================== */

function createFloatingHearts() {

    heartContainer.innerHTML = "";


    const hearts = [
        "♡",
        "♡",
        "♥",
        "♡",
        "♥",
        "♡"
    ];


    for (let i = 0; i < 12; i++) {

        const heart =
            document.createElement("div");


        heart.className =
            "floating-heart";


        heart.innerHTML =
            hearts[
                Math.floor(
                    Math.random() *
                    hearts.length
                )
            ];


        heart.style.left =
            Math.random() * 100 + "%";


        heart.style.setProperty(
            "--heart-size",
            (14 + Math.random() * 14) + "px"
        );


        heart.style.setProperty(
            "--heart-opacity",
            (0.2 + Math.random() * 0.35)
        );


        heart.style.setProperty(
            "--heart-duration",
            (7 + Math.random() * 5) + "s"
        );


        heart.style.animationDelay =
            Math.random() * 4 + "s";


        heartContainer.appendChild(
            heart
        );

    }

}
/* =====================================================
   OPEN FINAL LETTER
===================================================== */

letterButton.addEventListener(
    "click",
    function () {

        playTapSound();


        finalScreen.classList.add(
            "hidden"
        );


        setTimeout(function () {

            letterScreen.classList.remove(
                "hidden"
            );

        }, 700);

    }
);
/* =====================================================
   FINISH BUTTON
===================================================== */

finishButton.addEventListener(
    "click",
    function () {

        /* Sweet tap sound */
        playTapSound();


        /* Letter screen hide */
        letterScreen.classList.add(
            "hidden"
        );


        /* Wait for smooth transition */
        setTimeout(function () {

            /* Final screen show */
            endScreen.classList.remove(
                "hidden"
            );

        }, 700);

    }
);
/* =====================================================
   LOVE BGM ❤️
===================================================== */

const loveBGM = new Audio(
    "love-bgm.mp3"
);

loveBGM.loop = true;

loveBGM.volume = 0.25;
