const initFunction = () => {
  // hambarger object
  let hambarger = {
    init: function () {
      this.toggleMenu();
      this.closeMenuAfterClickAny();
    },
    toggleMenu: () => {
      // Referances Tag
      let hambargerMenu = document.querySelector(".hambarger-menu");
      let mobileMenu = document.querySelector("#mobile-menu");
      // Toggle Function
      function toggleMenu() {
        mobileMenu.classList.toggle("hidden");
      }
      // EventListener
      hambargerMenu.addEventListener("click", toggleMenu);
    },
    closeMenuAfterClickAny: () => {
      let hambargerMenu = document.querySelector(".hambarger-menu");
      let mobileMenu = document.querySelector("#mobile-menu");
      let lis = mobileMenu.children[0];
      let ancors = Array.from(lis.children);
      ancors.forEach((encor) => {
        encor.addEventListener("click", () => {
          mobileMenu.classList.add("hidden");
        });
      });
    },
  };

  // Functions Calls
  hambarger.init();
};
document.addEventListener("DOMContentLoaded", initFunction);
