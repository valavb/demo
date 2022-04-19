// User Toggle
$(document).ready(function(){
    $(".fa-angle-down").click(function(){
      $(".user-details").slideToggle("slow");
    });
  });

// Drap and Drop
const dropArea = document.querySelector(".drag-area");

if(dropArea){
  const dragText = dropArea.querySelector("header"),
  button = dropArea.querySelector("button"),
  input = dropArea.querySelector("input");
  let file; 

  dropArea.onclick = ()=>{
    input.click(); //if user click on the button then the input also clicked
  }
      
  input.addEventListener("change", function(){
  //getting user select file and [0] this means if user select multiple files then we'll select only the first one
    file = this.files[0];
    dropArea.classList.add("active");
    showFile(); //calling function
  });
      
      
  //If user Drag File Over DropArea
  dropArea.addEventListener("dragover", (event)=>{
    event.preventDefault(); //preventing from default behaviour
    dropArea.classList.add("active");
    dragText.textContent = "Release to Upload File";
  });
      
  //If user leave dragged File from DropArea
  dropArea.addEventListener("dragleave", ()=>{
    dropArea.classList.remove("active");
    dragText.textContent = "Drag & Drop to Upload File";
  });
      
  //If user drop File on DropArea
  dropArea.addEventListener("drop", (event)=>{
    event.preventDefault(); //preventing from default behaviour
    //getting user select file and [0] this means if user select multiple files then we'll select only the first one
    file = event.dataTransfer.files[0];
    showFile(); //calling function
  });
      
  function showFile(){
    let fileType = file.type; //getting selected file type
    let validExtensions = ["image/jpeg", "image/jpg", "image/png"]; //adding some valid image extensions in array
    if(validExtensions.includes(fileType)){ //if user selected file is an image file
      let fileReader = new FileReader(); //creating new FileReader object
      fileReader.onload = ()=>{
        let fileURL = fileReader.result; //passing user file source in fileURL variable
        let imgTag = `<img src="${fileURL}" alt="" id="imageUpload">`; //creating an img tag and passing user selected file source inside src attribute
        dropArea.innerHTML = imgTag; //adding that created img tag inside dropArea container
      }
      fileReader.readAsDataURL(file);
      }else{
         alert("This is not an Image File!");
        dropArea.classList.remove("active");
        dragText.textContent = "Drag & Drop to Upload File";
      }
    }
}





const dropArea2 = document.querySelector(".drag-area-2");
 
if(dropArea2){
  const dragText2 = dropArea2.querySelector("header"),
  input2 = dropArea2.querySelector("input");
  let file2;

  dropArea2.onclick = ()=>{
    input2.click(); //if user click on the button then the input also clicked
  }
  
  input2.addEventListener("change", function(){
    //getting user select file and [0] this means if user select multiple files then we'll select only the first one
    file2 = this.files[0];
    dropArea2.classList.add("active");
    showFile2(); //calling function
  });
  
  
  //If user Drag File Over DropArea
  dropArea2.addEventListener("dragover", (event)=>{
    event.preventDefault(); //preventing from default behaviour
    dropArea2.classList.add("active");
    dragText2.textContent = "Release to Upload File";
  });
  
  //If user leave dragged File from DropArea
  dropArea2.addEventListener("dragleave", ()=>{
    dropArea2.classList.remove("active");
    dragText2.textContent = "Drag & Drop to Upload File";
  });
  
  //If user drop File on DropArea
  dropArea2.addEventListener("drop", (event)=>{
    event.preventDefault(); //preventing from default behaviour
    //getting user select file and [0] this means if user select multiple files then we'll select only the first one
    file2 = event.dataTransfer.files[0];
    showFile2(); //calling function
  });
  
  function showFile2(){
    let fileType = file2.type; //getting selected file type
    let validExtensions = ["image/jpeg", "image/jpg", "image/png"]; //adding some valid image extensions in array
    if(validExtensions.includes(fileType)){ //if user selected file is an image file
      let fileReader = new FileReader(); //creating new FileReader object
      fileReader.onload = ()=>{
        let fileURL = fileReader.result; //passing user file source in fileURL variable
        let imgTag = `<img src="${fileURL}" alt="" id="imageUpload">`; //creating an img tag and passing user selected file source inside src attribute
        dropArea2.innerHTML = imgTag; //adding that created img tag inside dropArea container
      }
      fileReader.readAsDataURL(file2);
    }else{
      alert("This is not an Image File!");
      dropArea2.classList.remove("active");
      dragText2.textContent = "Drag & Drop to Upload File";
    }
  }
  
  
  
}

// Tooltip

let leftToolTip = document.getElementById('lefteye-tooltip');
let imageArea = document.querySelector('.sample-image-left');


leftToolTip.addEventListener('click',()=>{
  imageArea.classList.toggle('visible')
})

let rightToolTip = document.getElementById('righteye-tooltip');
let imageArea2 = document.querySelector('.sample-image-right');

console.log(rightToolTip)

rightToolTip.addEventListener('click',()=>{
  imageArea2.classList.toggle('visible')
})


// Select Default Eye Image
const btnLeft = document.getElementById('select-img-left');
const radioButtons = document.querySelectorAll('input[name="sample-left-eye-image"]');
let selectImg ;

btnLeft.addEventListener('click',(e)=>{
  e.preventDefault();
  for(let i = 0; i < radioButtons.length; i++){
    if(radioButtons[i].checked){
        selectImg = radioButtons[i].value;
    }
  }
  let imgTag = `<img src="${selectImg}" alt="" id="imageUpload">`; //creating an img tag and passing user selected file source inside src attribute
  dropArea.innerHTML = imgTag; //adding that created img tag inside dropArea container
  console.log(selectImg)
  imageArea.classList.toggle('visible');
})


const btnRight = document.getElementById('select-img-right');
const radioButtons2 = document.querySelectorAll('input[name="sample-right-eye-image"]');
let selectImg2 ;

btnRight.addEventListener('click',(e)=>{
  e.preventDefault();
  for(let i = 0; i < radioButtons2.length; i++){
    if(radioButtons2[i].checked){
        selectImg2 = radioButtons2[i].value;
    }
  }
  let imgTag = `<img src="${selectImg2}" alt="" id="imageUpload">`; //creating an img tag and passing user selected file source inside src attribute
  dropArea2.innerHTML = imgTag; //adding that created img tag inside dropArea container
  console.log(selectImg2)
  imageArea2.classList.toggle('visible');
})