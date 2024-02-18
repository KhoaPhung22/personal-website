This assignment is based on code from A2.

File Structure:
A3_kh754689
-audio
   -night-in-kyoto-avbe-mainversion-21302-01-57
-images
     -VNAT Cover 3.png
     -87390.png
     -chibi raien crying.jpg
     -dalhousie 2.jpg
     -depositphotos_42748913-stock-photo-about-me.jpg
     -download (1).jpeg
     -download.jpeg
     -How_to_become_a_game_developer.webp
     -Old_quarter_Hoi_An_vietnam.jpg
     -RSDalhousie-Aerial-2021-Aug-01-DJI_0358-1200x800-c-default.jpg
     -Vietnam snapshot cover iso.jpg
     -vietnam1.jpeg
     -vietnamese_rice_fields_mu_chang_chai.jpeg
-Desktop color pallet
     -aboutme1.pdf
     -aboutme2.pdf
     -aboutme3.pdf
     -Desktop 1.pdf
     -Desktop 2.pdf
     -Desktop 3.pdf
     -mycareer1.pdf
     -mycareer2.pdf
     -mycareer3.pdf
-Tablet color pallet
     -aboutme1.pdf
     -aboutme2.pdf
     -aboutme3.pdf
     -index1.pdf
     -index2.pdf
     -index3.pdf
     -mycareer1.pdf
     -mycareer2.pdf
     -mycareer3.pdf
-Mobile color pallet
     -aboutme1.pdf
     -aboutme2.pdf
     -aboutme3.pdf
     -index1.pdf
     -index2.pdf
     -index3.pdf
     -mycareer1.pdf
     -mycareer2.pdf
     -mycareer3.pdf
-web wireframe
    -desktop aboutme.pdf
     -desktop career.pdf
     -desktop index.pdf
     -mobile aboutme.pdf
     -mobile career.pdf
     -mobile index.pdf
     -navigation structure.pdf
     -tablet aboutme.pdf
     -tablet career.pdf
     -tablet index.pdf
-video
     -scene
-aboutme
-aboutmyfuturecareer
-index
-Code Review A3
-README
-style
-javascript.js




index.html
Line 2-4: choose language and character encoding language
Line 5- 7: Title for my website.
Line 8: Add favicon for my website in relative path images/chibi raien crying.jpg. 
Line 10: implement style.css file to the html file.
Line 11:implement javascript.js to html file.
Line 12: my first header and set id "header" for my deaer
Line 14 -16 Adding my video for the front page from relative path video/scene.mp4/
Line 18-21 Insert my audio in audio/night-in-kyoto-avbe-main-version-21302-01-57.mp3 with control scheme.
Line 24: Bold the word "CATEGORIES"
Line 25-33: Creating unordered list 
Line 27 and Line 30: create a html link to another webpage.
Line 39 - 45:Create a picture link to my social media and add image below the html link.
Line 52-78: Creating a form in html
Line 80-87: Creating a set of button to change color of html file.

aboutme.html
Line 1-12: the same a index.html
Line 14-30: Sorting a paragraph and a picture of Dalhousie with the link below by using grid.
Line 34-52: Creating a phot gallery

Line 56-68: 
-organizing the contents in ordered list.
-set id for header at line 34 and ordered list at line 37.
Line 70-86:
- Create a table with specific witdth, border and cell spacing

Line 89-95:
-Create an unordered list.
- Line 61: set id header for header 4
- Line 63: set id educationlist for the list.

Line 98-102:
Creating a set of buttons to change the background color.

aboutmyfuturecareer.html
Line 1-10: the same a index.html
Line 13-18: 
- <center> tag with header and external video with adjustment with width, height and control scheme.
- set id header for game developer.
Line 20-65:
-Creating an entire flexbox to contain.
Line 20-46:
-Create a nested list
- set id flexcontainer which is a flexbox.
- Line 22 set id header1 as the elemnet for the flexbox.
- Line 25 set the id content for the entire body as an element for flexbox.
- Seperate the content by set id "content1" and "content2" for different part of the content.
-Line 29: Set id gamedeveloper for the list
Line 52-63: 
-Creating an ordered list.
-Making the entire list is flexbox
-Setting id in each element of the list.
Line 68-82:
- Creating many buttons with different feature.
Line 83-94:
- Creating an input for user and button to calculate the area.
CSS file:
The CSS code provided contains styles for a responsive web page with three different sections: an index webpage, an about me webpage, and an about my future career webpage. The styles include:
Media queries to apply styles only when the screen width is at least 1400 pixels and 1025 pixels and 400 pixels wide.
Styles for the header section, including font color and size.
Styles for a video element, including a width of 100%.
Styles for three different sections with IDs "aboutme", "aboutmyfuturecareer", and "Dalpic", including width, height, border, margin, and padding.
Styles for links with IDs "aboutmelink" and "aboutcareerlink", including font color, font weight, and hover styles.
Styles for a label element, including font size.
Styles for form input elements, including text input, select, and textarea, including width, padding, border, border radius, margin, and font size.
Styles for a submit input button, including background color, font color, padding, border, border radius, and cursor styles.
Styles for the aboutme webpage, including a grid container with two columns, a grid gap, and styles for the "introduce" section, including font color and font weight.
Styles for a pseudo-element selector for the "introduce" section's first line, including font color and font weight.
Styles for a sibling selector for an anchor element following an image element, including font color.
Styles for an unordered list with ID "interestlist", including background color, list style type, list item styles, and margin.
Styles for an unordered list with ID "educationlist", including list style type, background color, margin, and list item styles.
Styles for a table element with ID "table", including background color, border, font size, and text alignment.
Styles for a table body element, including font color, text alignment, and font family.
Styles for a hero image with ID "hero-image", including background image, background position, background repeat, and background size.
Styles for the about my future career webpage, including a container with ID "gamedeveloperlist", including background color and padding.
Styles for three content sections with IDs "content1", "content2", and "content3", including border, font weight, font style, and font color.
Styles for a container with ID "h3container", including display as flex, gap, and flex direction.
Styles for a header with ID "header1", including text alignment, margin, padding, font color, and font size.
Styles for a header with ID "h3header", including font color, font style, font size, text alignment, padding, and margin.
Styles for a section with ID "body3", including margin, font style, border, font weight, font size, padding, and text alignment.
Styles for an adjacent sibling selector targeting the second child of a list followed by an element with ID "content3", including font color.
Styles for a photo gallery with class "photo-gallery", including display as flex, flex wrap, and gap.
Styles for images within the photo gallery, including flex basis, flex grow, and hover styles.
Styles for a footer with ID "footer", including background color, padding, and font color.

javascript.js
changeImage(): 
     -This function is used to change the image source of an element with an id of "Dalpic" when it is clicked. The function first retrieves the element using document.getElementById(), and then checks if the current image source matches a specific image file path. If it does, the image source is changed to a different image file path, and vice versa.
validateForm(): 
     -This function is used to validate a form on the webpage. It retrieves the values of the input fields with id of "fname", "lname", and "Comment" using document.getElementById().value, and checks if they are empty. If any of the fields are empty, an alert is displayed with an appropriate error message, and false is returned to prevent form submission.

changeFontSize(): 
     -This function is used to change the font size of elements with id of "content" and "body3" to "xx-large" when called.

changeBack(): 
     -This function is used to reset the font size of elements with id of "content" and "body3" back to their default font size when called.

changeBackgroundColorForCareer(), changeBackgroundColorForCareer1(), returnBackgroundColorForCareer(), changeBackgroundColorForIndex(), changeBackgroundColorForIndex1(), returnBackgroundColorForIndex(), changeBackgroundColorForAboutMe(), changeBackgroundColorForAboutMe1(), returnBackgroundColorForAboutMe(): 
     -These functions are used to change and reset the background color of various elements on different pages (e.g. "mycareer.html", "index.html", "aboutme.html") when called.

displayDate(): 
     -This function is used to display the current date and time in an element with id of "demo" when called. It uses the Date() object to get the current date and time.

calculateTheArea(): 
     -This function is used to calculate the area of a rectangle based on user input of width and height. It retrieves the values of the input fields with id of "width" and "height" using document.getElementById().value, calculates the area by multiplying the width and height, and then displays the result in an element with id of "result".

Reference
Anon. How to - add a Favicon in HTML. Retrieved February 9, 2023 from https://www.w3schools.com/howto/howto_html_favicon.asp 
Anon.Retrieved February 9, 2023 from https://www.w3schools.com/html/html5_video.asp 
Anon. Aurora Borealis Northern Lights - free video on Pixabay. Retrieved February 9, 2023 from https://pixabay.com/videos/aurora-borealis-northern-lights-90875/ 
Inc. Depositphotos. Royalty-free images, photo stock, Video &amp; Music. Retrieved February 9, 2023 from https://depositphotos.com/ 
Anon. Resources: Free resources to shape your career - simplilearn. Retrieved February 9, 2023 from https://www.simplilearn.com/resources 
Anon. 2023. 9 free icons of CDN. (February 2023). Retrieved February 9, 2023 from https://www.flaticon.com/free-icons/cdn 
Anon. File:facebook F logo (2019).SVG. Retrieved February 9, 2023 from https://commons.wikimedia.org/wiki/File:Facebook_f_logo_(2019).svg 
Anon. Association of Atlantic Universities (AAU) 2021-22 preliminary survey ... Retrieved February 9, 2023 from https://www.atlanticuniversities.ca/wp-content/uploads/2022/04/21-22enrolrelease.151021.pdf 
Anon. 2021. What professional game developers actually do... (October 2021). Retrieved February 9, 2023 from https://www.youtube.com/watch?v=OLDacmE9Spk&amp;t=2s 
Anon. JavaScript HTML Dom Eventlistener. Retrieved April 7, 2023 from https://www.w3schools.com/js/js_htmldom_eventlistener.asp 
Anon. JavaScript Popup Boxes. Retrieved April 7, 2023 from https://www.w3schools.com/js/js_popup.asp 
Anon. Style fontsize property. Retrieved April 7, 2023 from https://www.w3schools.com/jsref/prop_style_fontsize.asp 
