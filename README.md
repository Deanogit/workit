# Frontend Mentor - Workit landing page solution

This is a solution to the [Workit landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/workit-landing-page-2fYnyle5lu). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Links

- Solution URL: https://github.com/Deanogit/workit
- Live Site URL: https://tailwind-workit-dean.netlify.app/

## My process

I built this project using Tailwind CSS and HTML.

### Built with

- Semantic HTML5 markup
- Tailwind CSS

### What I learned

- Working out a solution for the curved background bottoms was tricky, I tried creating circular divs and rendering them behind, but I had some unexpected results when the page would render in chrome dev tools with different devices. This was a sticking point for some time, I wonder if it was much easier to execute in vanilla CSS, as the ::before and ::after pseudo-elements applied in TailwindCSS I didn't find how to apply them.

```html
<div
  class="absolute w-full -bottom-10 flex items-center justify-center overflow-x-hidden lg:-bottom-24"
>
  <div
    class="h-[50px] lg:h-[200px] w-full -z-10 bg-dark-blue rounded-b-[70%] mt-30"
  ></div>
</div>
```

This was the method I used, the curve is close to the design, but could be improved.

```css
---
```

```js
---
```

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Website - https://www.deanhowe.dev
- Frontend Mentor - @Deanogit

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**
