const hamburger = document.querySelector('.hamburger')

let responsive_sidebar_on = false
const nav_x = `<i class='bx bx-x' ></i>`
const nav_bars = `<i class='bx bx-menu'></i>`

const showSidebar = () => {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'block'
    setTimeout(() => {
        sidebar.style.width = '100%'
    }, 0);
}
const hidebarSidebar = () => {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.width = '-0%'
    setTimeout(() => {
        sidebar.style.display = 'none'
    }, 600);
}

hamburger.addEventListener('click',(e)=>{
    if(responsive_sidebar_on){
        hidebarSidebar()
        hamburger.innerHTML = nav_bars
        responsive_sidebar_on = false
    }
    else if(!responsive_sidebar_on){
        showSidebar()
        hamburger.innerHTML = nav_x
        responsive_sidebar_on = true
    }
})

const auto_resize_textarea = document.querySelector('textarea')
auto_resize_textarea.addEventListener("input", (e) => {
    let scHight = e.target.scrollHeight;
    if(scHight >= auto_resize_textarea.offsetHeight){
        auto_resize_textarea.style.height = `${scHight}px`
    }
})