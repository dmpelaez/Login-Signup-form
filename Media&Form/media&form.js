
document.querySelector('.options-02') 
.addEventListener('click', () => {
  const signup = document.querySelector('.sign-up');
   const login = document.querySelector('.log-form');
   
 
    login.classList.add("signupForm");
    signup.classList.add("loginForm");
  
});


document.querySelector('.options-03') 
.addEventListener('click', () => {
  const signup = document.querySelector('.sign-up');
   const login = document.querySelector('.log-form');
   
 
    login.classList.remove("signupForm");
    signup.classList.remove("loginForm");
  
});

