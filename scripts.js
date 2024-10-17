const aboutPage = document.querySelector("#about-page")
const exit = document.querySelector("#exit-button")
const shadow = document.querySelector("#shadow")
const aboutBtn = document.querySelector(".about-btn")
const resumeBtn = document.querySelector(".resume-btn")
const nav = document.querySelector("#nav")
const logo = document.querySelector("#logo")
const homeBtn = document.querySelector("#home-btn")
const projectsBtn = document.querySelector("#projects-btn")
const abt = document.querySelector("#abt")
const topbar = document.querySelector("#topbar")
const midbar = document.querySelector("#midbar")
const botbar = document.querySelector("#botbar")
const hamburger = document.querySelector("#hamburger")
const optbar = document.querySelector("#optbar")
const tech = document.querySelector("#technologies")
const techUsed = document.querySelector("#tech-used")
const imgContainer = document.querySelectorAll(".img-container")
const lis = document.querySelectorAll("#opts li")
const text = document.querySelector("#text")
const imageside = document.querySelector("#image-side")
let count = 0

const createItemsForId1 = (container) => {
    const techsUsed = ['javascript', 'css', 'html']
    for (item of techsUsed) {
        techUsed.innerHTML += `<p>${item}</p>`
    }
    drag(container)
}

const slide = () => {

}

const drag = (container) => {
    const rect = container.getBoundingClientRect()
    onmousemove = (e) => {
        const x = e.clientX
        const y = e.clientY

        tech.style.top = `${y - rect.top - 150}px`;
        tech.style.left = `${x - rect.left - 20}px`;
    }
}

const createItemsForId2 = (container) => {
    const techsUsed = ['javascript', 'html', 'css']
    for (item of techsUsed) {
        techUsed.innerHTML += `<p>${item}</p>`
    }
    drag(container)
}
const createItemsForId3 = (container) => {
    const techsUsed = ['react', 'tailwind', 'css', 'swiperjs']
    for (item of techsUsed) {
        techUsed.innerHTML += `<p>${item}</p>`
    }
    drag(container)
}
const createItemsForId4 = (container) => {
    const techsUsed = [""]
    for (item of techsUsed) {
        techUsed.innerHTML += `<p>${item}</p>`
    }
    drag(container)
}


imgContainer.forEach((container) => {
    container.onmouseover = (e) => {
        e.target.id == "img1" && createItemsForId1(container)
        e.target.id == "img2" && createItemsForId2(container)
        e.target.id == "img3" && createItemsForId3(container)
        e.target.id == "img4" && createItemsForId4(container)

        container.append(tech)
        tech.style.display = "flex"
    }
    container.onmouseout = () => {
        tech.style.display = "none"
        techUsed.innerHTML = " ";
    }
})

const changeNavColor = () => {
    nav.style.backgroundColor = "var(--foot-color)"
    resumeBtn.style.color = "var(--foot-color)"
}



const navBorderChange = () => {
    projectsBtn.style.borderBottom = "3px solid var(--action)"
    homeBtn.style.borderBottom = "none"
}
const normalNav = () => {
    homeBtn.style.borderBottom = "3px solid var(--action)"
    projectsBtn.style.borderBottom = "none"
}




const navTransparent = () => {
    nav.style.backgroundColor = "transparent"
    resumeBtn.style.color = "var(--purple)"
}
onscroll = () => {
    let y = scrollY
    let x = scrollX
    y >= 80 ? changeNavColor() : navTransparent()
    y >= 500 ? navBorderChange() : normalNav()
}
onload = () => {
    homeBtn.classList.add("clicked-nav")
}

//copied library

function translate(obj, coordinate, distance) {
    obj.style.transform = `translate${coordinate}(${distance}px)`;
}

function rotate(obj, coordinate, angle) {
    obj.style.transform = `rotate${coordinate}(${angle}deg)`;
}

function appear(obj, orientation) {
    obj.style.display = orientation;
};

function click(obj, x) {
    obj.addEventListener("click", x)
}

click(hamburger, () => {
    if (count === 0) {
        appear(midbar, "none");
        topbar.style.transform = `translateY(7.7px) rotateZ(-135deg)`;
        botbar.style.transform = `translateY(-7.7px) rotateZ(135deg)`;
        appear(optbar, "block")
        optbar.style.transform = `translateY(0px)`;
        count = 1;
    } else {
        optbar.style.transform = `translateY(-85vh)`;
        hideBar()
    }
})

function hideOptBar() {
    lis.forEach(li=> {
        li.onclick = () => {
            hideBar()
        }
    })
}
hideOptBar()
const hideBar = () => {
    appear(midbar, "block");
    topbar.style.transform = `translateY(0px) rotateZ(0deg)`;
    botbar.style.transform = `translateY(0px) rotateZ(0deg)`;
    count = 0;
}