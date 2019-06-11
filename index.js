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

var addList = $('.add-list');
var newList = $('.new-list')

addList.on("click", addArticle)

function addArticle() {
  newList.append(
    `<section class="list">
      <input type="text" placeholder="Store Name" class="store-name">
      <input type="submit" value="Change" class="change-btn">
      <section class="user-input">
        <input type="text" placeholder="Grocery Item" class="grocery-input">
        <input type="submit" value="Add to List" class="submit-btn">
      </section>
      <h3>Grocery List</h3>
      <section class="card-container">
      </section>
    </section>`
  )
}

var changeBtn = $('.change-btn');
var header = $('h3');

changeBtn.on("click", changeStore)

function changeStore() {
  var storeName = $('.store-name').val();
  header.text(`${storeName} List`);
  $('.store-name').val("");
}
