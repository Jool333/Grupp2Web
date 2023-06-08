window.onload = function() {
    // Get the modal and the login button
    var modal = document.getElementById('login-modal');
    var btn = document.getElementById('login-button');

    // When the user clicks the login button, open the modal 
    btn.onclick = function() {
        modal.style.display = "block";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
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
                LoadMoreBTN.innerHTML = 'Show less';
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
                LoadMoreBTN.innerHTML = 'Show more';
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
                LoadMoreBTN.innerHTML = 'Show less';
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
                LoadMoreBTN.innerHTML = 'Show more';
                isShowMore = true;
            }
        }
    }
}
loadMore();

loadMoreOld();