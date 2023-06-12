window.onload = function() {
    // Get the modal and the login button
    var modal = document.getElementById('login-modal');
    var btn = document.getElementById('login-button');
    // Get the modal and the options button
    var modal2 = document.getElementById('options-modal');
    var btn2 = document.getElementById('options-button');

    // When the user clicks the login button, open the modal 
    btn.onclick = function() {
        modal.style.display = "block";
    }
    // When the user clicks the options button, open the modal 
    btn2.onclick = function () {
        modal2.style.display = "block";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
        else if (event.target == modal2) {
            modal2.style.display = "none";
        }
    }
}


/* Show more for other articles */
function loadMore() {
    var LoadMoreBTN = document.querySelector("#show-more");
    var CurrentItem = 9;
    var isShowMore = true;
    LoadMoreBTN.onclick = () => {
        var boxes = [...document.querySelectorAll('.New-card')];
        if (isShowMore) {
            for (var i = CurrentItem; i < CurrentItem + 9; i++) {
                if (i < boxes.length) {
                    boxes[i].style.display = 'inline';
                }
            }
            CurrentItem += 9;
            if (CurrentItem >= boxes.length) {
                LoadMoreBTN.innerHTML = 'Visa mindre';
                isShowMore = false;
            }
        } else {
            CurrentItem -= 9;
            for (var i = CurrentItem; i < CurrentItem + 9; i++) {
                if (i < boxes.length) {
                    boxes[i].style.display = 'none';
                }
            }
            if (CurrentItem <= 9) {
                LoadMoreBTN.innerHTML = 'Visa mer';
                isShowMore = true;
            }
        }
    }
}

function loadMoreOld() {
    var LoadMoreBTN = document.querySelector("#show-more-old");
    var CurrentItem = 8;
    var isShowMore = true;
    LoadMoreBTN.onclick = () => {
        var boxes = [...document.querySelectorAll('.Other-card')];
        if (isShowMore) {
            for (var i = CurrentItem; i < CurrentItem + 8; i++) {
                if (i < boxes.length) {
                    boxes[i].style.display = 'flex';
                }
            }
            CurrentItem += 8;
            if (CurrentItem >= boxes.length) {
                LoadMoreBTN.innerHTML = 'Visa mindre';
                isShowMore = false;
            }
        } else {
            CurrentItem -= 8;
            for (var i = CurrentItem; i < CurrentItem + 8; i++) {
                if (i < boxes.length) {
                    boxes[i].style.display = 'none';
                }
            }
            if (CurrentItem <= 8) {
                LoadMoreBTN.innerHTML = 'Visa mer';
                isShowMore = true;
            }
        }
    }
}
loadMore();

loadMoreOld();

function updateDateTime() {
    var datetimeElement = document.getElementById("datetime");
    var currentDate = new Date();

    // Format the date and time
    var day = currentDate.getDate();
    var month = currentDate.getMonth() + 1; // Months are zero-based
    var year = currentDate.getFullYear();
    
    // Add leading zeros to single-digit numbers
    month = (month < 10 ? "0" : "") + month;
    day = (day < 10 ? "0" : "") + day;

    // Construct the formatted date and time string
    var datetimeString = day + "/" + month + "/" + year;

    // Update the HTML element with the formatted date and time
    datetimeElement.textContent = datetimeString;
    
}
setInterval(updateDateTime, 1000); // Update every second Helle js uppdateras

const toggleSwitch = document.getElementById('toggle');
const logo = document.getElementById("settings-logo");
const navlink = document.getElementById("nav-link-Optional");
const login = document.getElementById("login-box");
const options = document.getElementById("options-box");
const body = document.body;


toggleSwitch.addEventListener('change', function() {
    if (this.checked) {
        body.classList.add('dark-mode');
        logo.classList.add('dark-mode-logo');
        navlink.classList.add('dark-mode-navlink');
        login.classList.add('darkmode-popup');
        options.classList.add('darkmode-popup');

    } else {
        body.classList.remove('dark-mode');
        logo.classList.remove('dark-mode-logo');
        navlink.classList.remove('dark-mode-navlink');
        login.classList.remove('darkmode-popup');
        options.classList.remove('darkmode-popup');
    }
});

function scrollToTop() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
}
var rootElement = document.documentElement


function handleScroll() {
    var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight
    if ((rootElement.scrollTop / scrollTotal) > 0.20) {
        // Show button
        scrollToTopBtn.classList.add("showBtn")
    } else {
        // Hide button
        scrollToTopBtn.classList.remove("showBtn")
    }
}


document.addEventListener("scroll", handleScroll)