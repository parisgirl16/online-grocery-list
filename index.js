var submitBtn = $('.submit-btn');
var cardContainer = $('.card-container');

submitBtn.on("click", doAppend);

function doAppend() {
  var groceryInput = $('.grocery-input').val();
  cardContainer.append(`<div class="name-card"><input type="checkbox" class="checkbox">${groceryInput}</div>`);
  $('.grocery-input').val("")

var checkbox = $('.checkbox');
checkbox.on("click", remove);

  storePlan(cardContainer);
};

function remove(){
  event.target.parentNode.remove();
}

function storePlan(e) {
  e.preventDefault();
  localStorage.setItem('name-card', name-card);
}

import { Injectable } from '@angular/core';

@Injectable()
export class SharingService {
  private storageName: string = "Settings";

  constructor() { }

  setSettings(data: any) {
    localStorage.setItem(this.storageName, JSON.stringify(data));
  }

  getUserSettings() {
    let data = localStorage.getItem(this.storageName);
    return JSON.parse(data);
  }

  clearUserSettings() {
    localStorage.removeItem(this.storageName);
  }

  cleanAll() {
    localStorage.clear()
  }

}
