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
This is the most important file in this assignment, the JavaScript file, used to make the webpage interactive towards the user (or the employee) generating their password. The Javascript includes the code for calling the 'Generate Password' button, so that when it is presseed, the page produces some popups to ask the user questions about the specifications for their new password. The prompts that popup on the webpage, on clicking on the button once, include the following (all the actions have been performed on the deployed webpage):

i.      <div text-align = "centre">![Annotation 2020-12-20 125527](https://user-images.githubusercontent.com/73832871/102714219-1730d980-42c5-11eb-805d-37755da725dc.png)</div>
This prompt asks the user to confirm the number of characters they want in their password. When they select any number outside the given range (8-128), the next prompt states that the password length must be between the given range, and then the prompt in the iamge above appears again.
<br>
<br>
ii.     <div text-align = "centre">![Annotation 2020-12-20 125733](https://user-images.githubusercontent.com/73832871/102714230-2dd73080-42c5-11eb-9239-e9a3b2750c84.png)</div>
This prompt asks the user if they want special characters in their password. Clicking on 'OK' means 'Yes', and 'Cancel' means 'No'. The password will have special characters on selecting 'OK', and will not on pressing 'Cancel'.

The next prompts (in images iii., iv., and v.) will fulfil the next conditions in a similar way, REGARDLESS of the choice made in the preceding prompt.
<br>
<br>
iii.    <div text-align = "centre">![Annotation 2020-12-20 125810](https://user-images.githubusercontent.com/73832871/102714233-2fa0f400-42c5-11eb-84c5-88c6bcfeed54.png)</div>
<br> 
  
iv.     <div text-align = "centre">![Annotation 2020-12-20 125844](https://user-images.githubusercontent.com/73832871/102714428-5e6b9a00-42c6-11eb-97da-72966b8dee7f.png)</div>
<br>  
 
v.      <div text-align = "centre">![Annotation 2020-12-20 125951](https://user-images.githubusercontent.com/73832871/102714430-60cdf400-42c6-11eb-8496-9d33d00d06a4.png)</div>
<br>  
   
vi.     <div text-align = "centre">![Annotation 2020-12-20 130532](https://user-images.githubusercontent.com/73832871/102714433-63304e00-42c6-11eb-9a1b-64fdb1704aa7.png)</div>
Finally, when all the choices have been made by the user, the last prompt appears on the screen with the user's new password. In the image above, the password contains ALL kinds of characters chosen by clickng on 'OK', whether special, lower case, upper case, or numeric. The length of the password is 76 characters, as confirmed by myself in the very first prompt.
<br>
<br>
All these prompts are able to perform the desired and specific functions to fulfil the user's wishes, all made possible with the use of JavaScript and DOM (Document Object Model) events. Ultimately, the user is able to generate their own unique password via this app. Not only this, but the final password in the last prompt (in image vi.) ALSO shows up in the text area of the label in the webpage body, once the user clicks on 'OK'. Below is an image representing the same password in image vi., printed into the text area:

![Annotation 2020-12-20 130548](https://user-images.githubusercontent.com/73832871/102714918-dd160680-42c9-11eb-83fb-747cfc399ffa.png)
<br>

This is how the deployed webpage looks; when the green button is pressed again, the same popups reappear on the user's screen in the same order as described above, generating a completely new password, depending on the user's choices. Using this app, the hypothetical company is at a great advantage, because of how safe and user-friendly their company website would prove to be for the employees. The employees would be able to generate their customised password, which they can safely use for their online application at the company.

<b>SUMMARY:</b>
In a nutshell, JavaScript is an extremely useful language as a programmer, because it allows the webpage to be made very interactive, animated, dynamic and user-friendly for anyone utilising the page or app. This Password Generator app is a perfect example of how, as a programmer, all the knowledge about HTML, CSS and JS can be amalgamated into one concise application, to act as an online facility for a client or an employee, whether it is business, education, employment, or for personal use.

As per the marking criteria for this assignment, the link to the deployed website has been provided below:

<a href = "https://maryum97.github.io/03-JavaScript_Password_Generator/">My Password Generator</a>

The URL to this website has been validated, with respect to the HTML code, on the website below, and it has been shown to be 100% error free:

<a href = "https://validator.w3.org/nu/?showsource=yes&showoutline=yes&showimagereport=yes&doc=https%3A%2F%2Fmaryum97.github.io%2F03-JavaScript_Password_Generator%2F">validator.w3.org</a>

<b>SOURECES USED:</b>
1.
2.
3.
