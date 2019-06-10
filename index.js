var changeBtn = $('.change-btn');
var header = $('h3');

changeBtn.on("click", changeStore)

function changeStore() {
  var storeName = $('.store-name').val();
  header.text(`${storeName} List`);
  $('.store-name').val("");
}

var submitBtn = $('.submit-btn');
var cardContainer = $('.card-container');

submitBtn.on("click", doAppend);

function doAppend() {
  var groceryInput = $('.grocery-input').val();
  cardContainer.append(`<div class="name-card"><input type="checkbox" class="checkbox">${groceryInput}</div>`);
  $('.grocery-input').val("");

var checkbox = $('.checkbox');
checkbox.on("click", remove);

  storePlan(cardContainer);
}

function remove(){
  event.target.parentNode.remove();
}

function storePlan(e) {
  e.preventDefault();
  localStorage.setItem('name-card', name-card);
}
