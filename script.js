const sideBar = document.querySelector('.sidebar');

function closeSideBar(){
    sideBar.classList.remove('sidebar-open');
    sideBar.classList.add('sidebar-close');
    setTimeout(() => {
        sideBar.style.display = 'none';
    }, 300);
}

function openSideBar(){
    sideBar.style.display = 'flex';
    sideBar.classList.remove('sidebar-close');
    setTimeout(() => {
        sideBar.classList.add('sidebar-open');
    }, 10);
}