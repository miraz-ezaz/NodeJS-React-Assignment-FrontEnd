let checkinDate = null;
let checkoutDate = null;
let extraDate = null;
let isHiddenBar = false;
const photos = ["img1.jpg", "img2.jpg", "img3.jpg"];
let currentIndex = 0;

function showHiddenSearchBar(){
    isHiddenBar = true;
    document.getElementById('mainSearchBar').style.display = 'none'
    document.getElementById('hiddenSearchbar').style.display = 'flex';

}

function hideHiddenSearchBar(){
    isHiddenBar = false;
    document.getElementById('mainSearchBar').style.display = 'flex'
    document.getElementById('hiddenSearchbar').style.display = 'none';
}


function selectSection(sectionId) {
    document.querySelectorAll('.search-bar1 > div').forEach(div => {
        div.classList.remove('selected');
        if (div.id === 'where-section') {
            document.getElementById('region-popup').style.display = 'none';
        }
        if (div.id === 'checkin-section' || div.id === 'checkout-section') {
            document.getElementById('calendar-popup').style.display = 'none';
        }
        if (div.id === 'who-section') {
            document.getElementById('guest-popup').style.display = 'none';
        }
    });
    document.getElementById(sectionId).classList.add('selected');
    if (sectionId === 'where-section') {
        const whereSection = document.getElementById('where-section');
        const popup = document.getElementById('region-popup');
        const rect = whereSection.getBoundingClientRect();
        popup.style.top = `${rect.bottom + window.scrollY}px`; /* Adjust for scrolling */
        popup.style.left = `${rect.left + window.scrollX}px`; /* Adjust for scrolling */
        popup.style.display = 'block';
    } else if (sectionId === 'checkin-section' || sectionId === 'checkout-section') {
        const checkinSection = document.getElementById('checkin-section');
        const popup = document.getElementById('calendar-popup');
        const rect = checkinSection.getBoundingClientRect();
        popup.style.top = `${rect.bottom + window.scrollY}px`; /* Adjust for scrolling */
        popup.style.left = `${rect.left + (checkinSection.offsetWidth / 2) - (popup.offsetWidth / 2) + window.scrollX}px`; /* Center the popup */
        popup.style.display = 'block';
    } else if (sectionId === 'who-section') {
        const whoSection = document.getElementById('who-section');
        const popup = document.getElementById('guest-popup');
        const rect = whoSection.getBoundingClientRect();
        popup.style.top = `${rect.bottom + window.scrollY}px`; /* Adjust for scrolling */
        popup.style.left = `${rect.left + window.scrollX}px`; /* Adjust for scrolling */
        popup.style.display = 'block';
    }
}

function switchTab(element, tabName) {
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });
    element.classList.add('active');

    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => {
        content.classList.remove('active');
    });
    document.getElementById(tabName).classList.add('active');
}



// Close popup when clicked outside
document.addEventListener('click', function (event) {
    const regionPopup = document.getElementById('region-popup');
    const calendarPopup = document.getElementById('calendar-popup');
    const guestPopup = document.getElementById('guest-popup');
    const searchBar = document.getElementById('headerdiv');
    const mainSearchBar = document.getElementById('mainSearchBar');
    const headers = document.getElementsByTagName('header');

    if(isHiddenBar){
        if (!searchBar.contains(event.target)) {
            regionPopup.style.display = 'none';
            calendarPopup.style.display = 'none';
            guestPopup.style.display = 'none';
            document.querySelectorAll('.search-bar1 > div').forEach(div => {
                div.classList.remove('selected');
            });
            hideHiddenSearchBar();
        }
        
        

    }

    
});
























