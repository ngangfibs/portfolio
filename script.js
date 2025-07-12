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

window.addEventListener('resize', function() {
    const sidebar = document.querySelector('.sidebar');
    if (window.innerWidth > 800 && sidebar && sidebar.classList.contains('sidebar-open')) {
        sidebar.classList.remove('sidebar-open');
        sidebar.classList.add('sidebar-close');
    }
});