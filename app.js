let btn = document.querySelector("#custom-btn");
let fileName = document.querySelector(".file-name");
let cancelBtn = document.querySelector("#cancel-btn");
let wrapper = document.querySelector(".wrapper");
let defaultBtn = document.querySelector("#default-btn");
let img = document.querySelector("img");
let regExp = /[0-9a-zA-Z\^\&\'\@\{\}\[\]\,\$\=\!\-\#\(\)\.\%\+\~\_ ]+$/;

btn.addEventListener("click", function () {
  defaultBtn.click();
})
defaultBtn.addEventListener("change", function()  {
  let file = this.files[0];
  if(file) {
    let reader = new FileReader();
    reader.onload = function (){
      let result = reader.result;
      img.src = result;
      wrapper.classList.add("active");
    }
    cancelBtn.addEventListener("click", function() {
      wrapper.classList.remove("active");
      img.src = ""; 
      
    })
    reader.readAsDataURL(file);
  }
  if(this.value) {
    let vlauenStore = this.value.match(regExp);
    fileName.textContent = vlauenStore;
  }
})