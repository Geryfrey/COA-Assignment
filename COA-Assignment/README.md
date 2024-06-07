# COA-Assignment
This repo contains the answers to the assignment I received from Code of Africa/TASKFORCE as a part of Application requirements.

The project is about an Interactive Photo Gallery Web Application that displays a collection of animal images plus two coding challenges on manipulation of arrays and string transformation. 

I implemented the Interactive UI of the Photo Gallery following the figma design presented on this link: [Figma Design for Gallery web Application](https://www.figma.com/design/XF6xlvvHBv12WFveDjVoso/COA-Take-home-Challenge?node-id=0-1). 

# Interactive Photo Gallery Web Application

## I implemented the following features:

*Hover Interaction*: When you hover over the image, it interactively displays the name of the animal in the image and its origin country. Also on hover over the image, the image scales up from the center, it gets both blurred and grayscale appearnce. Also by hovering over the image, there appears a button know-more which was not visible before hovering.

*Full-Size Image Viewing*: By applying some javascripts code, I've been able to also implement a modal that helps the  user to view the full-size image when he clicks on either the image or the button "know more".

*Responsive Design*: You can view this Photo Gallery on as many screens as you would like.
It can be viewed on both the desktop, tablet and mobile screens.

## Set up Instructions to run this web application:

1. *Clone the repository*:
        sh
        git clone https://github.com/Geryfrey/COA-Assignment.git
        cd Gershom
        
2. *Open the project in your preferred code editor*.

3. *Run the project*:
        - Open index.html in your web browser to view the gallery.

## The following is the File Structure of my Project:
    Gershom
      COA-Assignment
        css
          style.css
        Images
        js
          script.js
        index.html
        README.md
            
# Coding Challenges Implementation

## 1. Array Manipulation

    This challenge is about determining if there exists a contiguous
    subarray within the array given that adds up to the targetSum.

    It returns true if such subarray exists, otherwise it return false.

## 2. String Transformation

    This challenge is about transforming a given string based on the following rules:

        ● If the length of the string is divisible by 3, it will reverse the entire string.
        ● If the length of the string is divisible by 5, it will replace each character with its
            ASCII code.
        ● If the length of the string is divisible by both 3 and 5, it will perform both operations in the
            order specified above


## Set up Instructions to run these challenges:

1. *Clone the repository*:

        sh
        git clone https://github.com/Geryfrey/COA-Assignment.git
        cd Challenges
        
2. *Open the applications in your preferred code editor*.

3. *Run the applications*:

        - Run arrayMap.js in your console to test the Array Manipulation Challenge.
        - Run stringTransform.js in your console to test the String Transformation Challenge.

## File Structure:
    Gershom
      COA-Assignment
         Challenges
            arrayMap.js
            stringTransform.js

Thank you!
