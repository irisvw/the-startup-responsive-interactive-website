let buttons = document.querySelectorAll('.button-nav-primary');
let subnavs = document.querySelectorAll('.button-nav-primary ~ nav');

buttons.forEach(button => {
    button.addEventListener("click", toggleExpand);
});

subnavs.forEach(subnav => {
    subnav.addEventListener("blur", closeCurrentlyExpanded);
})

document.addEventListener("keydown", (e) => {
    if (e.key == 'Escape') {
        closeCurrentlyExpanded();
    }
});

function toggleExpand(event) {
    let button = event.currentTarget;
    let subnav = button.nextElementSibling;

    if (subnav.classList.contains('collapsed')) {
        closeCurrentlyExpanded();
        subnav.classList.remove('collapsed');
        button.ariaExpanded = true;
    } else {
        closeCurrentlyExpanded();
    }
};

function closeCurrentlyExpanded() {
    subnavs.forEach(subnav => {
        if (!subnav.classList.contains('collapsed')) {
            subnav.classList.add('collapsed');
        }
    })

    buttons.forEach(button => {
        if (button.ariaExpanded == 'true') {
            button.ariaExpanded = false;
        }
    })
};
