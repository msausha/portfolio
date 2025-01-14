
document.addEventListener('DOMContentLoaded', function() {
  setNavbar()
  contactSection()
  aboutSection()
  // Create blocks
  const rowContainers = document.querySelectorAll('.row');
  rowContainers.forEach((rowContainer)=>{
    for (let i = 0; i < 100; i++) {
      const block = document.createElement('div');
      block.classList.add('block');
      rowContainer.appendChild(block);
    }
  })

  // Run animation
  animateBlocks();

  AOS.init({
    duration: 1500, // Animation duration
    offset: 250, // Trigger point offset
    once: false // Animation happens only once as the user scrolls
  });
});


  // Run the animation when the page loads
  window.onload = function() 
  {
      const msgTag =  document.querySelector('#msg')
        anime({
            targets: msgTag,
            opacity: [0, 1], // Fade in
            scale:[0,1],
            duration: 5000, // 1 second duration
            easing: 'easeOutExpo',
            complete: function() {
                // Hide the message quickly after display
                anime({
                    targets: msgTag,
                    opacity: [1, 0],
                    duration: 500,
                    easing: 'easeInExpo',
                    delay: 1000, // Keep the message visible for 1 second
                });
                document.querySelector('#welcomeMsg').style.display = 'none'
            }
        });
    };

function setNavbar()
{
  var navbarDiv = document.querySelector('#thisNavBar')
  var imageDiv = document.createElement('img')
  imageDiv.setAttribute('class','logoImg')
  imageDiv.src = 'webdesigner.jpg'
  document.getElementById('navbarNav').appendChild(imageDiv)
}

function animateBlocks() {
  function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  }

  anime({
    targets: '.block',
    translateX: () => anime.random(-700, 700),
    translateY: () => anime.random(-1600, 1600),
    scale: () => anime.random(1, 4),
    easing: 'easeInOutQuad',
    direction: 'linear',
    backgroundColor: getRandomColor,
    rotateX: () => anime.random(-300, 300),
    rotateY: () => anime.random(-180, 180),
    duration: 8000,
    opacity: [0,1],
    delay: anime.stagger(200),
    borderRadius: ['100%', '50%'],
    rotate: anime.random(-360, 360),
    complete: animateBlocks,
  });
}

// var infoBar = document.createElement('div')
// document.querySelectorAll('.nav-link').forEach(link => {
// link.addEventListener('mouseenter',()=>{

//   infoBar.classList.add('info')
//   document.querySelector('.container').appendChild(infoBar)
//   //info.style.display = 'block'
// })
// link.addEventListener('mouseleave',()=>{
//   //infoBar.classList.remove('info')
//   document.querySelector('.container').removeChild(infoBar)
//   //info.style.display = 'none'

// })
// })

//thisNavBar
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();

    const targetId = this.getAttribute('href').substring(1);
    console.log(this.getAttribute('href').substring(1))

    const targetElement = document.getElementById(targetId);
    //console.log(`${targetElement} offsetTop : `+targetElement.offsetTop)
    
    window.scrollTo({
      top: targetElement.offsetTop - document.getElementById('thisNavBar').offsetHeight,
      behavior: 'smooth'
    });
  });
});


// document.querySelector('.navbar-toggler').addEventListener('click',()=>{
//   document.getElementById('thisNavBar').style.height = '100%'

// })

function contactSection()
{
  var thisDiv = document.getElementById('contact')
  thisDiv.innerHTML = `
      <h2>Contact</h2>
      <p>How to reach me.</p>
  `
}


function aboutSection()
{
  var thisDiv = document.getElementById('about')
  thisDiv.innerHTML = `
  <h2>About</h2>
  <p>This is about section</p>
`
  aboutSectionInfo.forEach((info)=>{

    thisDiv.innerHTML += 
    `
          <div class="col-sm-4">
            <div class="card">
              <div class="card-heading">${info.type}</div>
              <div class="card-body">${info.info}</div>
            </div>
          </div>
    `
  })

}

var x = document.getElementsByTagName('body')[0]
console.log(x.offsetHeight)
console.log(window.innerHeight);
console.log(document.body.scrollHeight);


function linkClicked()
{
  alert("You clicked")
}
//console.log(document.getElementById('thisNavBar').offsetHeight)





//   document.querySelectorAll('.nav-link').forEach(anchor => {
//     anchor.addEventListener('click', function(e) {
//       e.preventDefault();
//       const targetId = this.getAttribute('href').substring(1);
//       console.log(this.getAttribute('href').substring(1))
//       displaySection(targetId)
//   })
// })

// function displaySection(targetDiv)
// {
//   switch(targetDiv){

//     case 'currentprojects':
//       displayCurrentprojects();
//       break;

//     case 'skills':
//       displaySkills();
//       break;

//     case 'certification':
//       displayCertification();
//       break;

//     case 'contact':
//       displayContact();
//       break;

//     case 'about':
//       displayAbout();
//       break;
    
//     default :
//       displayHome();
//   }
// }
// var section = document.querySelector('.row')

// function displayHome()
// {
//   section.innerHTML = ''
//   section.innerHTML = "You are in home section"
// }

// function displayCurrentprojects()
// {
//   section.innerHTML = ''
//   section.innerHTML = "You are in Current Project section"
// }

// function displayCertification()
// {
//   section.innerHTML = ''
//   section.innerHTML = "Here are my professional certificates"
// }

// function displayContact()
// {
//   section.innerHTML = ''
//   section.innerHTML = "You are in Contact section"
// }

// function displayAbout()
// {
//   section.innerHTML = ''
//   section.innerHTML = "You are in About section"
// }


