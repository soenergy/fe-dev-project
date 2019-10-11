import "../styles/index.scss";

let menuButtonClick = function(e) {
  console.log("menu button clicked", e.target, e.target.nextsibling);
};

let menuItemClick = function(e) {
  console.log("clicked", e.target);
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
