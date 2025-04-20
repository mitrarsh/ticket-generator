var formpageEl= document.getElementById("form-page");
var ticketpageEl= document.getElementById("ticket-page");
var errorEls = document.querySelectorAll(".error");
var inputEls = document.querySelectorAll("input");
var fileerrorEl = document.getElementsByClassName("file-error")[0];
var emailerrorEl = document.getElementsByClassName("email-error")[0];
var formerrorEl = document.getElementsByClassName("form-error")[0];
var buttonEl=document.getElementsByClassName("button")[0];
var fileinputEl = document.getElementById("fileinput");


var nameInput= inputEls[1];
var emailInput = inputEls[2];
var githubInput = inputEls[3];
  function isValidEmail(email) {
      // Simple regex for email format
      var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return pattern.test(email);
    }
formpageEl.addEventListener("submit", (e)=>{
  let messages = [];
  if( nameInput.value===""||nameInput.value===null){messages.push("name is required"), nameInput.closest(".inputbox").classList.add("error");};
  if( emailInput.value===""||!isValidEmail(email)){messages.push("email is required"), emailInput.closest(".inputbox").classList.add("error");};
  if(githubInput.value===""||githubInput.value===null){messages.push("username is required"), githubInput.closest(".inputbox").classList.add("error");};
  if (messages.length>0){
    errorEls
  }
})







// var generate= function(){

//   errorEls.forEach(function(el) {
//     el.style.display = "none";
    
//       });
    
//   inputEls.forEach(input => input.classList.remove("error"));

//   var name= nameInput.value.trim();
//   var email= emailInput.value.trim();
//   var github= githubInput.value.trim();
//   var file= fileinputEl.files[0];
//   var maxSize=500*1024;
//   var hasError = false;

//   if (!name || !email || !github || !file) {formerrorEl.style.display="block"; hasError = true;}

//   function isValidEmail(email) {
//       // Simple regex for email format
//       var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//       return pattern.test(email);
//     }

//     if(email && !isValidEmail(email)){hasError=true; emailerrorEl.style.display="block"};

//     if (hasError) return;

//     document.getElementById("fullname").textContent = name;
//     document.getElementById("email").textContent = email;
//     document.getElementById("username").textContent = github;


//     formpageEl.style.display = "none";
//     ticketpageEl.style.display = "block";

//   }

//     buttonEl.addEventListener("click",generate);