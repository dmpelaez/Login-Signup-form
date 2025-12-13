
import colorName from "https://cdn.skypack.dev/color-name";
import randomColor from "https://cdn.skypack.dev/randomcolor";
import rgbHex from "https://cdn.skypack.dev/rgb-hex";

const title = document.querySelector(".intro");

const letters = title.textContent.split("");

title.innerHTML = letters.map(l => `<span class="letter">${l}</span>`).join("");



console.log(title.innerHTML);

/*
function randomColor1() {
  return "#" + Math.floor(Math.random()* 16777215).toString(16).padStart(6, "0");
}
  */




  document.querySelectorAll('.letter')
    .forEach((letter) => {
      letter.addEventListener("mouseenter", () => {
        
        letter.style.color = randomColor();
        setInterval(() => {
        
          letter.style.color = randomColor();
          
        }, 2000);
      })
  })



const intro = document.querySelector('.intro');

const letter = intro.textContent.split("");

intro.innerHTML = letter.map(i => `<span class="letters">${i}</span>`).join("");



document.querySelectorAll('.letters')
.forEach((letters) => {
  letters.addEventListener("mouseenter", () => {
    letters.style.color = randomColor();
    setTimeout(()=> {
      
      letters.style.color =  "black";
    }, 3000);
  })
});

const colors = document.querySelector('.colors');
const colors2 = document.querySelector('.colors2');
const colors3 = document.querySelector('.colors3');
const colors4 = document.querySelector('.colors4');
let color;

color = `
<div class="box" style="background: "></div>
<div class="box" style="background: "></div>
<div class="box" style="background: "></div>
<div class="box" style="background: "></div>
<div class="box" style="background: "></div>

`;

colors.innerHTML = color;
colors2.innerHTML = color;
colors3.innerHTML = color;
colors4.innerHTML = color;


/* This part is ai generated code since its a lot of work to convert hsl to hex code */
function hslToHex(h, s, l) {
  s /= 100;
  l /= 100;

  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = l - c/2;

  let r = 0, g = 0, b = 0;

  if (0 <= h && h < 60) { r = c; g = x; b = 0; }
  else if (60 <= h && h < 120) { r = x; g = c; b = 0; }
  else if (120 <= h && h < 180) { r = 0; g = c; b = x; }
  else if (180 <= h && h < 240) { r = 0; g = x; b = c; }
  else if (240 <= h && h < 300) { r = x; g = 0; b = c; }
  else if (300 <= h && h < 360) { r = c; g = 0; b = x; }

  r = Math.round((r + m) * 255);
  g = Math.round((g + m) * 255);
  b = Math.round((b + m) * 255);

  return "#" + [r,g,b].map(x => x.toString(16).padStart(2,"0")).join("");
}

// Generate a harmonious palette using HSL
function hslPalette(baseHue, count) {
  const colors = [];
  for (let i = 0; i < count; i++) {
    const hue = (baseHue + i * 30) % 360; // evenly spaced hues
    const hex = hslToHex(hue, 70, 50);    // convert to hex
    colors.push(hex);
  }
  return colors;
}

const box = document.querySelectorAll('.box');

  let palette = hslPalette(Math.floor(Math.random() * 360), box.length);
  let timeoutId;
box.forEach((box) => {
  
  box.addEventListener('click', () => {
    const hex = box.innerText;
    navigator.clipboard.writeText(hex).then(()=> {
       
      
      const info = document.querySelector('.little-info');

     

      info.style.color = hex;
      
      if (timeoutId) {
        clearTimeout(timeoutId);
      }

     
      timeoutId = setTimeout(() => {
        info.style.color = "white";
      }, 2000);


      
       
    })
  });
});

document.body.addEventListener('click', () => {
  document.querySelector('.little-info').style.color = "white";
})

  setInterval(() => {
    palette = hslPalette(Math.floor(Math.random() * 360), box.length);
    box.forEach((box, i) => {
  
    box.style.backgroundColor = palette[i];
    box.innerText = palette[i];
    })
   
  
  }, 2000);

  const colorbox = document.querySelector('.colorbox');
  const textbox = document.querySelector('.textbox');

  colorbox.addEventListener('input', () => {
    const hex = colorbox.value;
    textbox.value = hex;
    
    
  });

   box.forEach((box) => {
    box.addEventListener('click', () => {
      const hex2 = box.innerHTML;
     textbox.value = hex2;
     colorbox.value = hex2;
      
     setTimeout(() => {
      textbox.value = '';
      colorbox.value = '';
     }, 5000);
    });
  
   });


   document.querySelector('.comment-input')
   .addEventListener('keydown', (event) => {
    const value = document.querySelector('.comment-input');
    const comment = document.querySelector('.comment-list');
    if (event.key === 'Enter') {
    comment.innerHTML += `<div class="comments">${value.value}</div>`;
    value.value = '';
    value.style.placeholder = "Add Comment here";
    }
   });

   const title1 = document.querySelector('.title1');
   
 
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const ratio = entry.intersectionRatio;

    if (ratio < 0.5) {
       title1.style.background =   title1.style.background = "linear-gradient(90deg, rgba(79, 85, 172, 1), rgba(35, 16, 204, 1))";
    } else if (ratio >= 0.5 && ratio < 0.7) {
       title1.style.background = "linear-gradient(90deg, rgba(111, 105, 168, 1), rgba(51, 53, 189, 1))";
    }else if (ratio >= 0.8) {
      title1.style.background = "linear-gradient(90deg, rgb(92, 88, 129), rgb(32, 34, 145))";
    }
  });
}, { threshold: [0.5, 0.7, 0.8],});


observer.observe(title1);

window.addEventListener("resize", () => {
  observer.unobserve(title1);
  observer.observe(title1); // re-attach to force recalculation
});


//I'm going to store the colors data I fetched into an array

let savedColor = [];

/*This part is about getting the class of generator button and if 
I click it using addEventListener...the window.scrollBy will triggered 
where the property of top will scroll down and the behavior tells what kind
of movement it will do */
const theWhole = document.querySelector('.theWhole'); 
const colorGenerator =  document.querySelector('.colorGenerator');
document.querySelector('.generator')
.addEventListener('click', () => {
  window.scrollTo({
    top: theWhole.offsetTop,
    behavior: "smooth"
  });


  //i'm using fetch to send datas to the API tells what kind of data or 
// what modification I'm going to change
fetch("http://colormind.io/api/", {
  method: "POST", //Action type // POST is about generating datas 
  body: JSON.stringify({ model: "default"}) //Im asking to give the the default datas
})
.then(response => response.json())
.then(data => {

savedColor.push(...data.result);
 let colorGenerate = data.result.map(color => {
  const hex = rgbToHex(color[0], color[1], color[2]);
  return `
  <div class="generateColor" title="Click to copy!" style="background-color: ${hex};" data-hex="${hex}">${hex}</div>`;
 }).join("");

 colorGenerator.innerHTML = colorGenerate;

 const generate1 = document.querySelectorAll('.generateColor');
 generate1.style.borderColor = colorGenerate;

 generate1.forEach((color) => {
  const hex1 = color.dataset.hex;
  color.addEventListener('click', () => {
    navigator.clipboard.writeText(hex1).then(() => {
    
    }
    )
  })
 })



 
})
.catch(error => console.error(error));


});

console.log("DATA:", savedColor);

//This function is responsible to convert the rgb into 
//hex code 

function rgbToHex(r, g, b) {
  return "#" + [r, g ,b]
  .map(x => {
    const hex = x.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  }).join("");
}


let selectedBox = null;


document.addEventListener("click", (e) => {
  const swatch = e.target.closest(".generateColor");
  if (!swatch) return;

  selectedBox = swatch.dataset.hex;
});

const randomBox = document.querySelector(".div1");
const divpage1 = document.querySelector(".divpage1");
const headerDiv1 = document.getElementById('randomBox2');
const asideDiv1 = document.querySelector('.asideDiv1');
const frontDiv1 = document.querySelector('.frontDiv1');
const footerDiv1 = document.querySelector('.footerDiv1');


randomBox.addEventListener('click', () => {
     
  randomBox.style.backgroundColor = selectedBox;
})


headerDiv1.addEventListener('click', (e) => {
  e.stopPropagation();
  headerDiv1.style.backgroundColor = selectedBox;
  headerDiv1.style.color = "white";
})

asideDiv1.addEventListener('click', (e) => {
  e.stopPropagation();
  asideDiv1.style.backgroundColor = selectedBox;
  asideDiv1.style.color = "white";
})

frontDiv1.addEventListener('click', (e) => {
  e.stopPropagation();
  frontDiv1.style.backgroundColor = selectedBox;
  frontDiv1.style.color = "white";
})

footerDiv1.addEventListener('click', (e) => {
  e.stopPropagation();
  footerDiv1.style.backgroundColor = selectedBox;
  footerDiv1.style.color = "white";
})

//Second design

const randomBox2 = document.querySelector(".div2");
const divpage2 = document.querySelector(".divpage2");
const headerDiv2 = document.querySelector('.headerDiv2');
const asideDiv2 = document.querySelector('.asideDiv2');
const frontDiv2 = document.querySelector('.frontDiv2');
const footerDiv2 = document.querySelector('.footerDiv2');



randomBox2.addEventListener('click', () => {
     
  randomBox2.style.backgroundColor = selectedBox;
})


headerDiv2.addEventListener('click', (e) => {
  e.stopPropagation();
  headerDiv2.style.backgroundColor = selectedBox;
  headerDiv2.style.color = "white";
})

asideDiv2.addEventListener('click', (e) => {
  e.stopPropagation();
  asideDiv2.style.backgroundColor = selectedBox;
  asideDiv2.style.color = "white";
})

frontDiv2.addEventListener('click', (e) => {
  e.stopPropagation();
  frontDiv2.style.backgroundColor = selectedBox;
  frontDiv2.style.color = "white";
})

footerDiv2.addEventListener('click', (e) => {
  e.stopPropagation();
  footerDiv2.style.backgroundColor = selectedBox;
  footerDiv2.style.color = "white";
})

//Third design


const randomBox3 = document.querySelector(".div3");
const divpage3 = document.querySelector(".divpage3");
const headerDiv3 = document.querySelector('.headerDiv3');
const asideDiv3 = document.querySelector('.asideDiv3');
const frontDiv3 = document.querySelector('.frontDiv3');
const footerDiv3 = document.querySelector('.footerDiv3');
const navBar = document.querySelector('.navBar');
const asideDiv32 = document.querySelector('.asideDiv32');

randomBox3.addEventListener('click', () => {
     
  randomBox3.style.backgroundColor = selectedBox;
})


headerDiv3.addEventListener('click', (e) => {
  e.stopPropagation();
  headerDiv3.style.backgroundColor = selectedBox;
  headerDiv3.style.color = "white";
})

asideDiv3.addEventListener('click', (e) => {
  e.stopPropagation();
  asideDiv3.style.backgroundColor = selectedBox;
  asideDiv3.style.color = "white";
})

frontDiv3.addEventListener('click', (e) => {
  e.stopPropagation();
  frontDiv3.style.backgroundColor = selectedBox;
  frontDiv3.style.color = "white";
})

footerDiv3.addEventListener('click', (e) => {
  e.stopPropagation();
  footerDiv3.style.backgroundColor = selectedBox;
  footerDiv3.style.color = "white";
})

navBar.addEventListener('click', (e) => {
  e.stopPropagation();
  navBar.style.backgroundColor = selectedBox;
  navBar.style.color = "white";
})
asideDiv32.addEventListener('click', (e) => {
  e.stopPropagation();
  asideDiv32.style.backgroundColor = selectedBox;
  asideDiv32.style.color = "white";
})



const icon = document.getElementById('leftIcon');
const icon2 = document.getElementById('rightIcon');
const divBox = document.querySelector('.divBox');



icon.addEventListener('click', () => {
console.log('working');
divBox.scrollLeft -= 580;
});



icon2.addEventListener('click', () => {
  console.log('working');
  divBox.scrollLeft += 580;
});



let isUp = false;
const btn = document.querySelector('.about-me');

btn.addEventListener('click', () => {
  const aboutmeSection = document.querySelector('.aboutmeSection');
  aboutmeSection.classList.toggle("btnDown");
 
  const icon = document.querySelector('.about-me i');
  const signinPage = document.querySelector('.signinPage');
  signinPage.classList.remove("signinOn");
 isUp = !isUp;

 icon.classList.toggle('fa-chevron-down', isUp);
 icon.classList.toggle('fa-chevron-up', !isUp);

})



const signin = document.querySelector('.sign-in');
const signupPage = document.querySelector('.sign-up');


signin.addEventListener('click', () => {
const signinPage = document.querySelector('.signinPage');
signinPage.classList.toggle("signinOn");
 
});

signin.addEventListener('click', () => {
  const signupPage = document.querySelector('.sign-up');
  
  signupPage.classList.remove('signinOn');
})

signupPage.addEventListener('click', () => {
  const signinPage = document.querySelector('.signupPage');
signinPage.classList.toggle("signinOn");

})

const signup = document.querySelector('.sign-up');

signup.addEventListener('click', () => {
  const signinPage = document.querySelector('.signinPage');
signinPage.classList.remove("signinOn");
})







  






  



