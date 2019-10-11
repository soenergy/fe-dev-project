import "../styles/index.scss";

let menuButtonClick = function(e) {
  let menuButton = e.target;
  let menu = menuButton.nextElementSibling;
  console.log("menu button clicked", menuButton, menu);
};

let menuItemClick = function(e) {
  let menuItem = e.target;
  console.log("clicked", menuItem);
};

let setUpMenuButtons = function() {
  let menuButtons = document.querySelectorAll("nav button[aria-haspopup=true]");
  menuButtons.forEach(menuItem =>
    menuItem.addEventListener("click", menuButtonClick)
  );
};

let setUpMenuItems = function() {
  let menuItems = document.querySelectorAll("[role=link], [role=menuitem]");
  menuItems.forEach(menuItem =>
    menuItem.addEventListener("click", menuItemClick)
  );
};

setUpMenuButtons();
setUpMenuItems();
