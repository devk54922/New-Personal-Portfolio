const servicesData = [
    {
        name:'Frontend Web developer',
        summary:'Entry-level developer proficient in HTML, CSS, and JavaScript and React Js. Eager to learn and contribute to building user-friendly websites with clean code and responsive designs.',
        skills1: 'I develop websites according to user/company needs.',
        skills2: 'Webpage Development.',
        skills3: 'I create UX element interactions.',
        skills4: 'I position your company brand.',
    },
    {
        name:'Ui/Ux Desginer',
        summary:'Create user-friendly interfaces and engaging experiences for digital products, combining aesthetics and functionality.',
        skills1: 'I develop the user Interface.',
        skills2: 'Webpage Development.',
        skills3: 'I create UX element interactions.',
        skills4: 'I position your company brand.',
        skills5: 'Research to understand user needs'
    },
    {
        name:'Backend developer',
        summary:'Build and maintain the server-side components of websites and applications, handling data and logic.',
        skills1: 'Node.js to handle server-side operations and logic.',
        skills2: 'I use Mongo DB.',
        skills3: 'Create Application Programming Interfaces.',
        skills4: 'Ensuring data integrity and security.',
        skills5: ' improve the overall performance and scalability of the application.',
    },
]

//Projecct Data 
const projectsData = [
    {
        tag: 'Full Stack',
        name: 'Cara E-commerce',
        technologyUsed:'HTML, CSS, JavaScript, Node.js, Express.js, Mongo DB',
        proDetails:'This is a E-commerce Shopping website  in which you can create a new account in the website, sign in to the website , add items to the cart , remove them from the cart.',
        proVideoLink:'https://firebasestorage.googleapis.com/v0/b/dev-k-aed07.appspot.com/o/Cara%20-%20Google%20Chrome%202023-06-03%2011-40-32.mp4?alt=media&token=b4345e5a-b235-4974-b3e8-22702aff07d2&_gl=1*1vkmsb3*_ga*MTMwMjg5NzIyNi4xNjcyMTY0NTUy*_ga_CW55HF8NVT*MTY4NTc3ODU2OC4yMS4xLjE2ODU3NzkyMTkuMC4wLjA.',
        githubLink:'https://github.com/devk54922/cara-ecommerce'
    },
    {
        tag: 'Frontend',
        name:"Easy Shop",
        proDetails:'This is a E-commerce Shopping website  in which you can create a new account in the website, sign in to the website , add items to the cart , remove them from the cart.',
        proVideoLink:'https://firebasestorage.googleapis.com/v0/b/dev-k-aed07.appspot.com/o/EasyShop.mp4?alt=media&token=91673b7c-c71d-4d94-9c81-5f441439b9eb&_gl=1*yqywst*_ga*MTMwMjg5NzIyNi4xNjcyMTY0NTUy*_ga_CW55HF8NVT*MTY4NTc3ODU2OC4yMS4xLjE2ODU3NzkzNzAuMC4wLjA.',
        githubLink:'https://github.com/devk54922/cara-ecommerce',
        technologyUsed:'HTML, CSS, JavaScript, Firebase'
    },
    {
        tag:'Frontend',
        name: 'Rentify',
        proDetails:'Explore Rentify, a property website with example listings to help you discover your ideal rental home effortlessly',
        proVideoLink:'https://firebasestorage.googleapis.com/v0/b/dev-k-aed07.appspot.com/o/rentify.mp4?alt=media&token=290ca53a-a612-48a4-a2e0-1101bb2f8818&_gl=1*gq4fiy*_ga*MTMwMjg5NzIyNi4xNjcyMTY0NTUy*_ga_CW55HF8NVT*MTY4NTc3ODU2OC4yMS4xLjE2ODU3Nzk0MTUuMC4wLjA.',
        githubLink:'https://github.com/devk54922/Pro-Rentify',
        technologyUsed:'HTML, CSS, JavaScript, API'
    },
    {
        tag:'Frontend',
        name: 'Snake Game',
        proDetails:'Enjoy classic gaming  with our web-based snake game, navigate and grow while avoiding obstacles for high scores.',
        proVideoLink:'https://firebasestorage.googleapis.com/v0/b/dev-k-aed07.appspot.com/o/CobraGame.mp4?alt=media&token=9ed72926-5581-4179-ab18-f6a5a024174b&_gl=1*25gfyr*_ga*MTMwMjg5NzIyNi4xNjcyMTY0NTUy*_ga_CW55HF8NVT*MTY4NTc3ODU2OC4yMS4xLjE2ODU3Nzk5MDQuMC4wLjA.',
        githubLink:'https://github.com/devk54922/Cobra-snakeGame',
        technologyUsed:'HTML, CSS, JavaScript'
    },
    {
        tag:'Frontend',
        name: 'My Sangeet',
        proDetails:'Immerse yourself in the world of music with our web music player, featuring a sleek interface and customizable playlists.',
        proVideoLink:'https://firebasestorage.googleapis.com/v0/b/dev-k-aed07.appspot.com/o/may-sangeet.mp4?alt=media&token=569fdc83-90a7-4bfa-9591-b5cb4072a031&_gl=1*1s7eg7i*_ga*MTMwMjg5NzIyNi4xNjcyMTY0NTUy*_ga_CW55HF8NVT*MTY4NTc3ODU2OC4yMS4xLjE2ODU3ODAwMDguMC4wLjA.',
        githubLink:'https://github.com/devk54922/MySangeet'
    },
    {
        tag:'CSS',
        name: 'Birthday-Wish',
        proDetails:'Create personalized birthday wishes with surprise elements, interactive features, and delightful surprises on our innovative website.',
        proVideoLink:'https://firebasestorage.googleapis.com/v0/b/dev-k-aed07.appspot.com/o/Birthday-Wish%20-%20Google%20Chrome%202023-06-03%2010-54-12.mp4?alt=media&token=3a8cd112-9abe-4493-8bf9-0912b536f0d9&_gl=1*1chuvgh*_ga*MTMwMjg5NzIyNi4xNjcyMTY0NTUy*_ga_CW55HF8NVT*MTY4NTc3ODU2OC4yMS4xLjE2ODU3ODAwODAuMC4wLjA.',
        githubLink:'https://github.com/devk54922/Birthday-wish',
        technologyUsed:'HTML, CSS, JavaScript'
    },
    {
        tag:'CSS',
        name: 'Social Media Logo',
        proDetails:'Social Medida Logo with animation',
        proVideoLink:'https://firebasestorage.googleapis.com/v0/b/dev-k-aed07.appspot.com/o/socialMediaLogo.mp4?alt=media&token=9454a015-f364-40d1-8dd3-6b535064f007&_gl=1*ejcmhi*_ga*MTMwMjg5NzIyNi4xNjcyMTY0NTUy*_ga_CW55HF8NVT*MTY4NTc3ODU2OC4yMS4xLjE2ODU3ODAxNDguMC4wLjA.',
        githubLink:'https://github.com/devk54922/Social-media-logo',
        technologyUsed:'HTML, CSS, JavaScript'
    },
    {
        tag:'CSS',
        name: '3D Card Flipper',
        proDetails:'3D product card flipper with animation',
        proVideoLink:'https://firebasestorage.googleapis.com/v0/b/dev-k-aed07.appspot.com/o/3D%20Effects%20-%20Google%20Chrome%202023-06-02%2016-05-37.mp4?alt=media&token=3d86778e-d4fa-43c5-8688-20327993042d&_gl=1*172bvf0*_ga*MTMwMjg5NzIyNi4xNjcyMTY0NTUy*_ga_CW55HF8NVT*MTY4NTc3ODU2OC4yMS4xLjE2ODU3ODAzMDguMC4wLjA.',
        githubLink:'https://github.com/devk54922/3D_card_flipper',
        technologyUsed:'HTML, CSS, JavaScript'
    },
    {
        tag:'CSS',
        name: 'Image Distortion',
        proDetails:'Image distortion with animation',
        proVideoLink:'https://firebasestorage.googleapis.com/v0/b/dev-k-aed07.appspot.com/o/Image%20Destortion%20Effects%20-%20Google%20Chrome%202023-06-03%2013-53-14.mp4?alt=media&token=ea980910-b01d-414b-a85d-b9675b3cb386&_gl=1*q9yb2z*_ga*MTMwMjg5NzIyNi4xNjcyMTY0NTUy*_ga_CW55HF8NVT*MTY4NTc3ODU2OC4yMS4xLjE2ODU3ODA3NTYuMC4wLjA.',
        githubLink:'https://github.com/devk54922/Image_destoration',
        technologyUsed:'HTML, CSS, JavaScript'
    },
]
//Mapping Projects items

function projectItems(){
    // console.log('clicked')
    // document.querySelector('.overlay').classList.add('show-overlay')
    // document.querySelector('.modal-container').classList.add('show-modal-container')
    // const modalContainer = document.querySelector('.modal-container')
    const projectMainContainer = document.querySelector('.main-project-box')
    projectsData.map((projectsData,i)=>{
        projectMainContainer.innerHTML +=` 
        <div class="projects-box">
            <h2>${projectsData.name}</h2>
            <video src="${projectsData.proVideoLink}" controls></video>
            <span class="more" onclick="projectModal(${i})">View more <i class="uil uil-arrow-right"></i></span>
    </div>
    `
})
}
projectItems()

//Modal Projects
function projectModal(i){
    console.log(i)
    document.querySelector('.overlay').classList.add('show-overlay')
    document.querySelector('.modal-container').classList.add('show-modal-container')
    const modalContainer = document.querySelector('.modal-container')
    modalContainer.innerHTML=`
    <div class="closeSpan">
    <span class="closeModal" onclick="closeModal()">&times</span> </div>
            <h2>${projectsData[i].name}</h2>
            <video src="${projectsData[i].proVideoLink}" controls></video>
            <div class="project-items-bottom">
            <small>${projectsData[i].proDetails}</small>
        <strong>Technologies Used :</strong><h5 style="color:grey">${projectsData[i].technologyUsed}</h5>
        <strong>Code Link :<a href="${projectsData[i].githubLink}"><i class="uil uil-github-alt"></i></a></strong>
    </div>
  `
}

//Projects Filter

function frontendProjects(tag,i){
    const projectMainContainer = document.querySelector('.main-project-box')
    projectMainContainer.innerHTML=''
    
    
    if(tag ==="All"){
        projectsData.map((item,i)=>{
            projectMainContainer.innerHTML +=` 
            <div class="projects-box">
            <h2>${item.name}</h2>
            <video src="${item.proVideoLink}" controls></video>
            <span class="more" onclick="projectModal(${i})">View more <i class="uil uil-arrow-right"></i></span>
            </div>
            `
        })
    }
    projectsData.map((item,i)=>{
        if(tag===item.tag){
            projectMainContainer.innerHTML +=` 
            <div class="projects-box">
                <h2>${item.name}</h2>
                <video src="${item.proVideoLink}" controls></video>
                <span class="more" onclick="projectModal(${i})">View more <i class="uil uil-arrow-right"></i></span>
        </div>
        `
        }
     })
}
frontendProjects('All')

//Modal services

function showModal(i){
    console.log('clicked')
    document.querySelector('.overlay').classList.add('show-overlay')
    document.querySelector('.modal-container').classList.add('show-modal-container')
    const modalContainer = document.querySelector('.modal-container')
    modalContainer.innerHTML = ` 
    <div class="closeSpan">
    <span class="closeModal" onclick="closeModal()">&times</span> </div>
    <h2>${servicesData[i].name}</h2>
    <div class="front-para">${servicesData[i].summary}</div>
    <div class="front-option">
        <p><i class="uil uil-check-circle"></i>${servicesData[i].skills1}</p>
        <p> <i class="uil uil-check-circle"></i> ${servicesData[i].skills2}</p>
        <p> <i class="uil uil-check-circle"></i> 
            ${servicesData[i].skills3}</p>
        <p> <i class="uil uil-check-circle"></i> 
              ${servicesData[i].skills4}</p>
        <p> <i class="uil uil-check-circle"></i> ${servicesData[i].skills5}</p>
    </div>`
       }
function closeModal(){
           document.querySelector('.overlay').classList.remove('show-overlay')
           document.querySelector('.modal-container').classList.remove('show-modal-container')

       }
const cards = document.querySelectorAll('.card')

const observer = new IntersectionObserver(entries =>{
    entries.forEach(entry =>{
        entry.target.classList.toggle('show',entry.isIntersecting)
    })  
}, {
    threshold:.3,
}
)
cards.forEach(card =>{
    observer.observe(card)
})


const mobile_app = document.querySelector('.mobile-app')
const nav_bar = document.querySelector('nav')
const crossBtn = document.querySelector('.uil-times')
const appsBtn = document.querySelector('.uil-apps')

function showNav(){
    console.log('triggered items')
    nav_bar.classList.add('nav-grow')
    crossBtn.classList.add('cross-dblock')
    // crossBtnDisplaynone.classList.remove('uil-times')
    nav_bar.innerHTML =` 
    <ul class="mobile-ul">
    <div>
    <li class="mobile-navbar"><a href="#home"><i class="uil uil-estate"></i>Home</a> </li>
    <li class="mobile-navbar"><a href="#about"><i class="uil uil-user"></i>About</a> </li>
    </div>
    <div>
    <li class="mobile-navbar"><a href="#skills-container"><i class="uil uil-file-landscape-alt"></i>Skills</a> </li>
    <li class="mobile-navbar"><a href="#services-container"><i class="uil uil-bag"></i>Services</a> </li>
    </div>
    <div>
    <li class="mobile-navbar"><a href="#projects-container"><i class="uil uil-scenery"></i>Projects</a> </li>
    <li class="mobile-navbar"><a href="#contact-form"><i class="uil uil-message"></i>Contact</a> </li>
    </div>
    </ul>
    <div onclick="closeNav()" class="mobile-app" ><i class="uil uil-times crossBtn" id="cross-display-block"></i></div>
    `
}
function closeNav(){
    console.log('clicked')
    nav_bar.classList.remove('nav-grow')
    nav_bar.innerHTML =`<ul id="name">
    <li id="name2"><a href="#home">Dev</a></li>
</ul>
<div class="mobile-app" onclick="showNav()"><i class="uil uil-apps"></div>`
}


