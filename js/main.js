// =================================================
//                     DARK MODE
// =================================================

function ToggleDark() {
    var element = document.body;
    element.classList.toggle("dark_mode");

    if (element.classList.contains("dark_mode")) {
        localStorage.setItem("darkMode", "enabled");
    }else {
        localStorage.setItem("darkMode", "disabled");
    }

    var icon = document.getElementById("DarkModeIcon");
    if (element.classList.contains("dark_mode")) {
        icon.src = "images/Sun_LightMode.svg";
        icon.alt = "Toggle Light Mode"
    } else {
        icon.src = "images/Moon_DarkMode.svg";
        icon.alt = "Toggle Dark Mode"  
    }

    // --------------- HOME PAGE -----------------

    var footer = document.querySelector("footer");
    if (footer) {
        footer.classList.toggle("footer_dark_mode");
    }

    var header = document.querySelector("header");
    if (header) {
        header.classList.toggle("header_D");
    }

    var SDG = document.querySelector(".SDG");
    if (SDG) {
        SDG.classList.toggle("SDG_D");
    }
    
    var heading = document.querySelectorAll(".home_h1");
    heading.forEach(function(heading) {
        heading.classList.toggle("home_h1_D");
    });

    var paragraphs = document.querySelectorAll(".home_page_para");
    paragraphs.forEach(function(paragraph) {
        paragraph.classList.toggle("home_page_para_D");
    });

    var about = document.querySelector(".about");
    if (about) {
        about.classList.toggle("about_D");
    }

    var paragraphs = document.querySelectorAll(".about_para");
    paragraphs.forEach(function(paragraph) {
        paragraph.classList.toggle("about_para_D");
    });

    var copyright = document.querySelector(".copyright");
    if (copyright) {
        copyright.classList.toggle("copyright_D");
    }

    var nav = document.querySelector(".navigation");
    if (nav) {
        nav.classList.toggle("navigation_D");
    }


    // ------------- STATISTICS --------------

    var statGrid = document.querySelector(".stat_grid");
    if (statGrid) {
        statGrid.classList.toggle("stat_grid_D");
    }


    // --------------- ACTION ----------------

    var actionHeadings = document.querySelectorAll(
        ".action_h1, .action_h2"
    );

    actionHeadings.forEach(function(heading) {
        heading.classList.toggle("action_D");
    });

    var takeaction = document.querySelector(".take_action");
    if (takeaction) {
        takeaction.classList.toggle("take_action_D")
    }

    // ---------------------------------------


    // --------------- QUIZ ----------------

    var quizItems = document.querySelectorAll(".accordion_item");
    quizItems.forEach(function(item) {
        item.classList.toggle("accordion_item_D");
    });

    var quizHeader = document.querySelector(".quiz_header");
    if (quizHeader) {
        quizHeader.classList.toggle("quiz_header_D");
    }

    var Headings = document.querySelectorAll(".quiz_h2");
    Headings.forEach(function(heading) {
        heading.classList.toggle("quiz_h2_D");
    });

    // --------------------------------------
}

if (localStorage.getItem("darkMode") === "enabled") {
    ToggleDark();
}



// =================================================
//                 MOBILE VIEW
// =================================================

function ToggleMenu() {
    var nav = document.getElementById("navLinks");
    var button = document.querySelector(".menu_btn");

    nav.classList.toggle("show");

    button.setAttribute(
        "aria-expanded",
        nav.classList.contains("show")
    );
}



// =================================================
//                     DYNAMIC EMAIL
// =================================================

//const subject = encodeURIComponent("SDG 14: LIFE BELOW WATER");
//const body = encodeURIComponent("This email contains a link to a website dedicated to raising awareness about one of the United Nations Sustainable Development Goals (SDGs): Life Below Water.");

//document.getElementById("dynamicMailtoLink").href = `mailto:${email}?subject=${subject}&body=${body}`; 




// =================================================
//                     QUIZ
// =================================================

document.querySelectorAll(".accordion_btn").forEach(function(button) {
    button.addEventListener("click", function() {

        var answerId = button.getAttribute("aria-controls");
        var answer = document.getElementById(answerId);
        var icon = button.querySelector(".accordion_icon");

        // Check that the answer and icon exist
        if (!answer || !icon) {
            console.error("Quiz answer or icon not found:", answerId);
            return;
        }

        // Check whether the answer is currently open
        var isOpen = button.getAttribute("aria-expanded") === "true";

        // Open or close the answer
        button.setAttribute("aria-expanded", String(!isOpen));
        answer.hidden = isOpen;

        // Change the icon
        icon.textContent = isOpen ? "+" : "−";
    });
});