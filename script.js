const sideBar = document.querySelector('.sidebar');

function closeSideBar(){
    sideBar.classList.remove('sidebar-open');
    sideBar.classList.add('sidebar-close');
    setTimeout(() => {
        sideBar.style.display = 'none';
    }, 300); // Match CSS transition duration
}

function openSideBar(){
    sideBar.style.display = 'flex';
    sideBar.classList.remove('sidebar-close');
    // Allow display to apply before animating
    setTimeout(() => {
        sideBar.classList.add('sidebar-open');
    }, 10);
}