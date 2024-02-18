//Creating a function change image when click
function changeImage() {
    let image = document.getElementById("Dalpic");
    if(image.src.match("images/RSDalhousie-Aerial-2021-Aug-01-DJI_0358-1200x800-c-default.jpg"))
    {
        image.src = "images/dalhousie 2.jpg";
    }
    else
    {
        image.src = "images/RSDalhousie-Aerial-2021-Aug-01-DJI_0358-1200x800-c-default.jpg";
    }
  }
//Check whethet user input in the form
  function validateForm() {
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let comment = document.getElementById("Comment").value;
    if (fname == "") {
      alert("First name must be filled out");
      return false;
    }
    
    if (lname == "") {
        alert("Last name must be filled out");
        return false;
      }
    
    if (comment == "") {
      alert("Please write something");
      return false;
    }
    return true;
  }
//Change the font size of the webpage to xx-large
  function changeFontSize(){
    document.getElementById("content").style.fontSize = "xx-large";
    document.getElementById("body3").style.fontSize = "xx-large";
  }
  //Return the font size of the webpage back to normal
  function changeBack()
  {
    document.getElementById("content").style.fontSize = "";
    document.getElementById("body3").style.fontSize = "";
  }
//Change background color for mycareer.html
  function changeBackgroundColorForCareer(){
    document.getElementById("gamedeveloperlist").style.backgroundColor = "aqua";
    document.getElementById("body3").style.backgroundColor = "aqua";
    document.body.style.backgroundColor = "white";
    document.getElementById("header1").style.color = "red";
    document.getElementById("h3header").style.color = "red";
  }
  //Change background color for mycareer.html
  function changeBackgroundColorForCareer1(){
    document.getElementById("gamedeveloperlist").style.backgroundColor = "aqua";
    document.getElementById("body3").style.backgroundColor = "aqua";
    document.body.style.backgroundColor = "grey";
    document.getElementById("header1").style.color = "red";
    document.getElementById("h3header").style.color = "red";
  }
  //Change the color back
  function returnBackgroundColorForCareer(){
    document.getElementById("gamedeveloperlist").style.backgroundColor = "beige";
    document.getElementById("body3").style.backgroundColor = "beige";
    document.body.style.backgroundColor = "gainsboro";
    document.getElementById("header1").style.color = "green";
    document.getElementById("h3header").style.color = "green";
  }
  //Change background color for index.html
  function changeBackgroundColorForIndex(){
    document.body.style.backgroundColor = "white";
  }
   //Change background color for index.html
  function changeBackgroundColorForIndex1(){
    document.body.style.backgroundColor = "grey";
  }
   //Change the color back
  function returnBackgroundColorForIndex(){
    document.body.style.backgroundColor = "gainsboro";
  }
  //Change background color for aboutme.html
  function changeBackgroundColorForAboutMe(){
    document.body.style.backgroundColor = "white";
  }
   //Change background color for aboutme.html
  function changeBackgroundColorForAboutMe1(){
    document.body.style.backgroundColor = "grey";
  }
   //Change the color back
  function returnBackgroundColorForAboutMe(){
    document.body.style.backgroundColor = "gainsboro";
  }
  // Show the date when click on it  
  function displayDate()
  {
     document.getElementById("demo").innerHTML = Date();

  }
  //Take input from user and calculate the area
  function calculateTheArea()
  {
   
      let width = document.getElementById('width').value;
      let height = document.getElementById('height').value;
      let area = width * height;
      let result = document.getElementById("result");
      result.textContent = "The area is "+area;
    
  }
  