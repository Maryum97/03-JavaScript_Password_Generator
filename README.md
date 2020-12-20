# 03-JavaScript_Password_Generator

<b>TITLE:</b> 03-JavaScript: Password Generator

<b>DESCRIPTION:</b>
This repository contains the second homework assignment for the Coding Bootcamp conducted by the University of Birmingham. This homework assignment was about creating a webpage (application) to generate a random password based on certain criteria. The criteria for the password includes the following:

1) The password must have between 8-128 characters.
2) The password may or may not have lower case, upper case, numeric or special characters, depending on the choice of the employee.

The descriptipons for the files pushed to Github for this homework include the following:

<b>1. <i>index.html:</i></b>
This file, as per usual, provides the basic skeletal structure of the webpage, including the head, the body layout, and the necessary elements inserted into the body of the page, e.g. headings and text.

The head tags contain the links to the external CSS stylesheet (styles.css), and the Bootstrap website for CSS styling of the page, including that for the gutter (textbox), the floating label for the password, and the button. All the elements on the page are styled thoroughly and are fairly responsive, depending on the size of the window.

The body tags contain the script tags at the end, containing the links to the external JavaScript file (script.js) and the Bootstrap website for the animational aspects of the page.

<b>2. <i>styles.css:</i></b>
This is the external stylesheet for the index file, to add auxiliary styling for some of the elements on the website. Most of the styling, however, has been carried out using Bootstrap.

<b>3. <i>script.js:</i></b>
This is the most important file in this assignment, the JavaScript file, used to make the webpage interactive towards the user (or the employee) generating their password. The Javascript includes the code for calling the 'Generate Password' button, so that when it is presseed, the page produces some popups to ask the user questions about the specifications for their new password. The prompts that popup on the webpage, on clicking on the button once, include the following:

i.      <div text-align = "centre">![Annotation 2020-12-20 125527](https://user-images.githubusercontent.com/73832871/102714219-1730d980-42c5-11eb-805d-37755da725dc.png)</div>
This prompt asks the user to confirm the number of characters they want in their password. When they select any number outside the given range (8-128), the next prompt states that the password length must be between the given range, and then the prompt in the iamge above appears again.
<br>
ii.     <div text-align = "centre">![Annotation 2020-12-20 125733](https://user-images.githubusercontent.com/73832871/102714230-2dd73080-42c5-11eb-9239-e9a3b2750c84.png)</div>
This prompt aska the user if they want special characters in their password. Clicking on 'OK' means 'Yes', and 'Cancel' means 'No'. The password will have special characters on selecting 'OK', and will not on pressing 'Cancel'. The next prompts will fulfil the next conditions in a similar way, REGARDLESS of the choice made in this prompt.
<br>
iii.    <div text-align = "centre">![Annotation 2020-12-20 125810](https://user-images.githubusercontent.com/73832871/102714233-2fa0f400-42c5-11eb-84c5-88c6bcfeed54.png)</div>
<br>    
iv.     <div text-align = "centre">![Annotation 2020-12-20 125844](https://user-images.githubusercontent.com/73832871/102714428-5e6b9a00-42c6-11eb-97da-72966b8dee7f.png)</div>
<br>    
v.      <div text-align = "centre">![Annotation 2020-12-20 125951](https://user-images.githubusercontent.com/73832871/102714430-60cdf400-42c6-11eb-8496-9d33d00d06a4.png)</div>
<br>     
vi.     <div text-align = "centre">![Annotation 2020-12-20 130532](https://user-images.githubusercontent.com/73832871/102714433-63304e00-42c6-11eb-9a1b-64fdb1704aa7.png)</div>