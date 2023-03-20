// JSON DATA
let destinations = []
let crew = []
let technology = []


fetch('./data.json')
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        destinations = data.destinations
        crew = data.crew
        technology = data.technology
    })

// VARIABLES
const tabList = document.querySelector('[role="tablist"]')
const tabs = tabList.querySelectorAll('[role="tab"]')

let tabsArray = Array.from(tabs)
let tabFocus = 0

// EVENT LISTENERS
tabList.addEventListener('keydown', changeTabFocus)

tabs.forEach((tab) => {
    tab.addEventListener('click', changePanelContent)
})

// FUNCTIONS
function changeTabFocus(e) {
    const keydownLeft = 37
    const keydownRight = 39

    if (e.keyCode === keydownLeft || e.keyCode === keydownRight) {
        tabs[tabFocus].setAttribute('tabindex', -1)

        if (e.keyCode === keydownRight) {
            tabFocus++
            if (tabFocus >= tabs.length) {
                tabFocus = 0
            }
        } else if (e.keyCode === keydownLeft) {
            tabFocus--
            if (tabFocus < 0) {
                tabFocus = tabs.length - 1
            }
        }
    
        tabs[tabFocus].setAttribute('tabindex', 0)
        tabs[tabFocus].focus()
    }
}

function changeImageOrientation() {
    if (window.innerWidth >=832) {
        document.querySelector('#technology-image').firstElementChild.removeAttribute('hidden')
        document.querySelector('#technology-image').lastElementChild.setAttribute('hidden', true)
    } else {
        document.querySelector('#technology-image').firstElementChild.setAttribute('hidden', true)
        document.querySelector('#technology-image').lastElementChild.removeAttribute('hidden')
    }
}

function changePanelContent(e) {
    const targetTab = e.target
    const tabContainer = targetTab.parentNode

    let tabIndex

    if (tabsArray.includes(e.target)) {
        tabContainer.querySelector('[aria-selected="true"]').setAttribute('aria-selected', false)
        targetTab.setAttribute('aria-selected', true) 

        tabIndex = tabsArray.indexOf(targetTab)

        if (document.querySelector('.destination')) {
            document.querySelector('#destination-name').textContent = destinations[tabIndex].name
            document.querySelector('#destination-description').textContent = destinations[tabIndex].description
            document.querySelector('#destination-distance').textContent = destinations[tabIndex].distance
            document.querySelector('#destination-travel').textContent = destinations[tabIndex].travel
            document.querySelector('#destination-image').firstElementChild.setAttribute('srcset', destinations[tabIndex].images.webp)
            document.querySelector('#destination-image').lastElementChild.setAttribute('src', destinations[tabIndex].images.png)
            document.querySelector('#destination-image').lastElementChild.setAttribute('alt', destinations[tabIndex].images.alt)

        } else if (document.querySelector('.crew')) {
            document.querySelector('#crew-role').textContent = crew[tabIndex].role
            document.querySelector('#crew-name').textContent = crew[tabIndex].name
            document.querySelector('#crew-bio').textContent = crew[tabIndex].bio
            document.querySelector('#crew-image').firstElementChild.setAttribute('srcset', crew[tabIndex].images.webp)
            document.querySelector('#crew-image').lastElementChild.setAttribute('src', crew[tabIndex].images.png)
            document.querySelector('#crew-image').lastElementChild.setAttribute('alt', crew[tabIndex].name)

        } else if (document.querySelector('.technology')) {
            document.querySelector('#technology-name').textContent = technology[tabIndex].name
            document.querySelector('#technology-description').textContent = technology[tabIndex].description
            document.querySelector('#technology-image').firstElementChild.setAttribute('src', technology[tabIndex].images.portrait)
            document.querySelector('#technology-image').lastElementChild.setAttribute('src', technology[tabIndex].images.landscape)
            document.querySelector('#technology-image').firstElementChild.setAttribute('alt', technology[tabIndex].images.alt)
            changeImageOrientation()
        }
    }
}

(function() {
    if (document.querySelector('.technology')) {
        setInterval(changeImageOrientation, 10)
    } else {
        return
    }
}())