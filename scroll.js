/* Toggle mobile menu */
const toggleMenu = () => {
    const menu = document.getElementById("menu");
    menu.classList.toggle("active");
}

  /* Scroll to section */
    const scrollToSection = (id) => {
    const section = document.getElementById(id);
    window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth"
    });
}

  /* Add click event listeners to menu items */
    const menuItems = document.querySelectorAll("#menu li a");
    menuItems.forEach(item => {
    item.addEventListener("click", event => {
        event.preventDefault();
        const sectionId = event.target.getAttribute("href").slice(1);
        scrollToSection(sectionId);
        toggleMenu();
    });
});

  /* Change button text on hover */
    const joinButton = document.querySelector(".button");
    joinButton.addEventListener("mouseover", () => {
    joinButton.textContent = "Join Us!";
});

joinButton.addEventListener("mouseout", () => {
    joinButton.textContent = "Join Now";
});
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
});
