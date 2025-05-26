let guestNameEl = document.getElementById("guest-name");
let guestPhoneEl = document.getElementById("guest-phone");
let guestEmailEl = document.getElementById("guest-email");
let guestRoomTypeEl = document.getElementById("guest-room-type");
let guestDataInEl = document.getElementById("guest-data-in");
let guestDataOutEl = document.getElementById("guest-data-out");

document.querySelector('#confirm-back-btn').addEventListener('click', (e) => getBackToPersonalData(e));

function getBackToPersonalData(e) {
    e.preventDefault();
    changeContent('guest-details-form-content');
}


document.querySelector('#confirm-reservation').addEventListener('click', (e) => showThanksPage(e));

function showThanksPage(e) {
    e.preventDefault();
    changeContent('thank-you-content');
}

function verifyContent(){
    guestNameEl.value = 'Name: ' + reservation.name.value;
    guestPhoneEl.value = 'Phone: ' + reservation.phone.value;
    guestEmailEl.value = 'Email: ' + reservation.email.value;
    guestRoomTypeEl.value = 'Room Type: ' + reservation.roomType.value;
    guestDataInEl = 'Date-in: ' + reservation.startDate.value;
    guestDataOutEl = 'Date-out: ' + reservation.endDate.value;
}
