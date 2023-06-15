var adBanners = [
    { id: 'adBanner1', images: ["/images/Hands_to_small.webp", "/images/Malmo_basta-kebab.webp"], index: 0 },
    { id: 'adBanner2', images: ["/images/Malmo_basta-kebab.webp", "/images/Hands_to_small.webp"], index: 0 }
];
// This function performs the image rotation for an individual ad banner.
function rotate(adBanner){

    // Retrieve the HTML element corresponding to the ad banner.
    var imgElement = document.getElementById(adBanner.id);

    // Remove the 'show' class from the element, presumably to hide it or prepare for the transition.
    imgElement.classList.remove('show');

     // After a delay of 1 second (1000 milliseconds), this function executes.
    setTimeout(function(){
        imgElement.src = adBanner.images[adBanner.index];
        imgElement.classList.add('show');
        adBanner.index++;

         // If the index has reached the end of the images array, reset it to 0 to start over.
        if(adBanner.index == adBanner.images.length){
            adBanner.index = 0;
        }
    }, 1000);

    // After a delay of 4 seconds, the rotate function is called again for the same ad banner.
    // This creates a continuous cycle of image rotation.
    setTimeout(function(){rotate(adBanner);}, 4 * 1000);
}
window.addEventListener('load', function() {
    adBanners.forEach(rotate);
});

