var adBanners = [
    { id: 'adBanner1', images: ["/images/Hands_to_small.webp", "/images/Malmo_basta-kebab.webp"], index: 0 },
    { id: 'adBanner2', images: ["/images/Malmo_basta-kebab.webp", "/images/Hands_to_small.webp"], index: 0 }
];

function rotate(adBanner){
    var imgElement = document.getElementById(adBanner.id);
    imgElement.classList.remove('show');
    setTimeout(function(){
        imgElement.src = adBanner.images[adBanner.index];
        imgElement.classList.add('show');
        adBanner.index++;
        if(adBanner.index == adBanner.images.length){
            adBanner.index = 0;
        }
    }, 1000);
    setTimeout(function(){rotate(adBanner);}, 4 * 1000);
}

window.onload = function() {
    adBanners.forEach(rotate);
}
