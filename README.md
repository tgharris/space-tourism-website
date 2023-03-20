# Frontend Mentor - Space tourism website solution

This is a solution to the [Space tourism website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each of the website's pages depending on their device's screen size
- See hover states for all interactive elements on the page
- View each page and be able to toggle between the tabs to see new information

### Screenshot

![Homepage](https://raw.githubusercontent.com/tgharris/space-tourism-website/aa2facfa2befda7df0acba4a976f64f1bb301d86/screenshots/home_desktop.jpeg)

### Links

- Solution URL: [My solution](https://www.frontendmentor.io/solutions/space-tourism-website-using-semantic-html5-and-css-grid-YuWJs6I1Pr)
- Live Site URL: [Space Tourism Website](https://tgharris.github.io/space-tourism-website/index.html)

## My process
Since this is the largest project I have built so far, I decided to follow Kevin Powell's [Build a Space Travel Website](https://scrimba.com/learn/spacetravel) course on [scrimba.com](https://www.scrimba.com/). Upon completing the course, I finished the technology page using the principles and methods I learned along the way. I then decided that I wanted to alter the code to utilize the JSON data, so I rewrote a portion of the codebase to implement the change. Finally, I adjusted the styling for each page to more accurately capture the design in the provided Figma file.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid
- Mobile-first workflow

### What I Learned

My three main takeaways from this project were:

##### Creating a Design System

Given the size of this project, creating reusable utility classes and components in CSS was incredibly useful and important. It allowed me to design the layouts of the pages much quicker, and it makes any future updates to the site much easier to implement.

```css
.ff-serif { font-family: var(--ff-serif); } 
.ff-sans-cond { font-family: var(--ff-sans-cond); } 
.ff-sans-normal { font-family: var(--ff-sans-normal); } 

.letter-spacing-1 { letter-spacing: 4.75px; } 
.letter-spacing-2 { letter-spacing: 2.7px; } 
.letter-spacing-3 { letter-spacing: 2.35px; } 

.uppercase { text-transform: uppercase; }

.fs-900 { font-size: var(--fs-900); }
.fs-800 { font-size: var(--fs-800); }
.fs-700 { font-size: var(--fs-700); }
```

##### Designing for Accessibility

This was my first time using ARIA roles and attributes to design for people with disabilities. Using those and semantic HTML, I was able to write code that takes full advantage of assistive technologies.

```html
<div class="number-indicators flex" role="tablist" aria-label="technology list">
    <button aria-selected="true" role="tab" aria-controls="vehicle-tab" tabindex="0" data-image="vehicle-image" class="bg-dark text-white fs-600 ff-serif">1</button>
    <button aria-selected="false" role="tab" aria-controls="spaceport-tab" tabindex="0" data-image="spaceport-image" class="bg-dark text-white fs-600 ff-serif">2</span></button>
    <button aria-selected="false" role="tab" aria-controls="capsule-tab" tabindex="0" data-image="capsule-image" class="bg-dark text-white fs-600 ff-serif">3</span></button>
</div>
```

##### Using Fetch API to Access JSON Data

Rather than sticking to the instruction Kevin provided in his course, I wanted to venture off on my own and use the JSON file provided by Frontend Mentor. I did not have much experience with promises or the Fetch API in Javascript, so I struggled at first to get a working solution. However, once I stopped overcomplicating the problem, I landed on the final code below.

```js
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

```

### Continued development

Although development on this project is complete, I plan to continue develop the skills I learned along the way. My understanding of CSS grid has improved quite a bit, but I need more experience before I feel truly comfortable. Also, I've barely dipped my toes into asynchronous JavaScript, so I need much more practice there as well. Ultimately, this project has shown me how far I've come, and how much I still have to learn.

### Useful resources

- [All Things JavaScript](https://www.youtube.com/@AllThingsJavaScript) - This YouTube channel helped me immensely, when I was trying to figure out how to populate the data from the JSON file and use it in my JavaScript.

## Author

- Github - [Tyler Harris](https://github.com/tgharris)
- Frontend Mentor - [@tgharris](https://www.frontendmentor.io/profile/tgharris)


## Acknowledgments

Of course, I would not have been able to complete this project with out the instruction of Kevin Powell. I will certainly be using the knowledge and practices I picked up from his course in all of my projects going forward. I am also grateful that Frontend Mentor provided the challenge and design files so that I could focus all of my attention on coding.
