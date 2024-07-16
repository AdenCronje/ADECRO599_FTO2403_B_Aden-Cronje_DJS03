function createNewElements(type) {
  return document.createElement(type);
}

const selectorElements = {
  items: document.querySelector("[data-list-items]"), //(5)
  genres: document.querySelector("[data-search-genres]"), //(1)
  authors: document.querySelector("[data-search-authors]"), //(1)
  themes: document.querySelector("[data-search-overlay]"), //(2)
  listButtons: document.querySelector("[data-list-button]"), //(6)
  cancelButton: document.querySelector("[data-search-cancel]"), //(1)
  searchOverlay: document.querySelector("[data-search-overlay]"), //(3)
  settingsOverlay: document.querySelector("[data-settings-overlay]"), //(3)
  headerSearch: document.querySelector("[data-header-search]"), //(1)
  searchTitle: document.querySelector("[data-search-title]"), //(1)
  headerSettings: document.querySelector("[data-header-settings]"), //(1)
  listClose: document.querySelector("[data-list-close]"), //(1)
  activeList: document.querySelector("[data-list-active]"), //(2)
  settingsForm: document.querySelector("[data-settings-form]"), //(1)
  searchForm: document.querySelector("[data-search-form]"), //(1)
  listMessage: document.querySelector("[data-list-message]"), //(2)
  listBlur: document.querySelector("[data-list-blur]"), //(1)
  listImage: document.querySelector("[data-list-image]"), //(1)
  listTitle: document.querySelector("[data-list-title]"), //(1)
  listSubtitel: document.querySelector("[data-list-subtitle]"), //(1)
  listDescription: document.querySelector("[data-list-description]"), //(1)
};

export { callingElements, createNewElements };
