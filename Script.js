function showAd(num) {
    console.log("Clicked on: " + num); // Debugging

    // Hide all ads
    document.querySelectorAll('.ad').forEach(ad => ad.style.display = 'none');

    // Show the selected ad
    let adElement = document.querySelector('.ad' + num);
    if (adElement) {
        adElement.style.display = "block";
        document.querySelector('.overlay').style.display = "block";
    } else {
        console.error("Ad not found: .ad" + num);
    }
}
function closeAd() {
    document.querySelectorAll('.ad').forEach(ad => ad.style.display = 'none');
    document.querySelector('.overlay').style.display = "none";
}

