// script for dropdown
document.addEventListener("click", e => {
    const isDropdownButton = e.target.matches("[data-dropdown-button]");
    if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return

    let currentDropdown
    if (isDropdownButton){
        currentDropdown = e.target.closest("[data-dropdown]");
        currentDropdown.classList.toggle("active");
    }

    document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
        if (dropdown === currentDropdown) return
        dropdown.classList.remove("active")
    })
});

// script for formtabs

const tabs = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('[data-tab-content');
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
       const target = document.querySelector(tab.dataset.tabTarget);
       tabContents.forEach(tabContent => {
        tabContent.classList.remove('active');
       })
       tabs.forEach(tab => {
        tab.classList.remove('active');
       })
       tab.classList.add('active');
       target.classList.add('active');
    });
});
