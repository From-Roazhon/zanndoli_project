window.addEventListener("DOMContentLoaded", (event) => {
    console.log("The content has been loaded");

    let themeContainer = document.querySelector(".header__theme-container");

    let themeButtons = themeContainer.getElementsByTagName("button");

    // changement de couleur en fondu
    function changeTheme() {
        console.log(this.id);
        if (this.id === "dark-theme-button") {
            let lightThemeButton = themeContainer.querySelector("#light-theme-button");
            lightThemeButton.classList.remove("is-active");
            this.classList.add("is-active")
            document.body.classList.add("dark-theme");
        } else if (this.id === "light-theme-button") {
            let darkThemeButton = themeContainer.querySelector("#dark-theme-button");
            darkThemeButton.classList.remove("is-active");
            this.classList.add("is-active")
            document.body.classList.remove("dark-theme");
        }
    };

    Array.from(themeButtons).forEach(function(themeButton) {
        themeButton.addEventListener("click", changeTheme, false)
    });

});