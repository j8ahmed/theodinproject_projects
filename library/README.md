# Library Project


## To Do:

- [ ] 

# Bonus To Do Items

- [ ] 
- [ ] 





---

## Meta Data

Started On: 2022-05-16

### References:


- [Odin Project Page](https://www.theodinproject.com/lessons/node-path-javascript-library)

- [Cool reference - 1](https://michalosman.github.io/library/)
  - [code reference - 1](https://github.com/michalosman/library)

- [Cool reference - 2](https://ginnerzapata.github.io/library-app/)
  - [code reference - 2](https://github.com/ginnerzapata/library-app)

- [Cool reference - 3](https://sultanbadri.github.io/virtual-library/)
  - [code reference - 3](https://github.com/SultanBadri/virtual-library)


## Bug Fixes

- [`FormData Object and Constructor - MDN Docs`](https://developer.mozilla.org/en-US/docs/Web/API/FormData/FormData)
- [`FormData.entries()` - MDN Docs](https://developer.mozilla.org/en-US/docs/Web/API/FormData/entries)
- [Radio Inputs - MDN Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio)
- [Checkbox Inputs - MDN Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox)
- [Chanding visibility/display on focus does not work?](https://stackoverflow.com/questions/21351476/why-changing-visibility-display-on-focus-does-not-work)
- [What does `top: 0; left: 0; bottom: 0; right: 0;` mean?](https://stackoverflow.com/questions/28080910/what-does-top-0-left-0-bottom-0-right-0-mean)
- [CSS property `pointer-events` - MDN Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/pointer-events)
- []()
- []()
- []()
- []()
- []()

### How to Construct a Modal

How to approach making a modal (Pop-up form). I have looked into how I can construct one. My two approaches are:

1. To use `HTML` that is hidden and use a button with JavaScript to toggle a class that changes the modal's visibility.
2. Use JavaScript to construct and append the modal to the document when a button is clicked. Remove the modal when it is closed

#### Approach #1

I believe that the first approach is standard. It commonly involves working with the `CSS` properties `display`, `visibility`, and `opacity`. I am just curious about finding a more "mature" or "professional" way to get this done. Often, I have found that the simplest method may not always be the favoured one (even though that seems counterintuitive at first). 

The immediate concern I have with the common approach is that it is difficult and clunky to style. The `display: none` to `display: block` change cannot be animated or transitioned. So unless you stagger the setting of `display`, `visibility`, and `opacity` you will be forced to have snapping opening and closing modals. That's not the best for UX. 

The one caveat to the first approach is related to a video I watched where they used a less common `CSS` property to hide and show the modal. The `pointer-events` property was used to make an `HTML` element with an `opacity` of `0` unclickable. So it was invisible and unclickable instead of setting the element's `display` to `none` or it's `visibilitiy` to `hidden`. This is something I am interested in trying if I go with `approach #1`. It makes it much easier to animate the button using `opacity` or even `transform` properties since those can all be transitioned smoothly.

So the concern here is NOT using `visibility: hidden` or `display: none` to hide the modal will allow it to still be focused on with sequential keyboard navigation using the `tab` key. This may also lead to some problems with screen readers. Although it is a nice idea, I think I will stick to the common approach for my own safety concerns. [Video using the trick](https://youtu.be/XH5OW46yO8I)

#### Approach #2

The second approach is not something I have seen from others much but is something I have used since I am familiar with React and the concept of constructing `HTML` using JavaScript. This approach seems a bit excessive but it is on my mind.

---

### Using `data-` Attributes to Select Elements is Better?

I watched a [video](https://youtu.be/MBaw_6cPmAw) on how to make a modal and the developer choose to use `data-` attributes on `HTML` elements to select particular elements inside their JavaScript. The justification he gave was to not "mix styling classes with our JavaScript". I thought that was interesting. He arguably could have used an `id` attribute to select with but it brought up an interesting perspective. Is using `data-` attribute selectors a better practice than using `id` attributes for functional purposes??

---

### Centering a div with `top: 0; bottom: 0; left: 0; right: 0;`

I saw this used in [another video](https://youtu.be/uUCpopjPZdI) for constructing modals and thought it was again an interesting approach. I found an answer to how this works from a [Stack Overflow answer](https://stackoverflow.com/questions/28080910/what-does-top-0-left-0-bottom-0-right-0-mean). I don't think I will use this approach but it was interesting to see.

I would like to know when this would actually be better than just setting the `width: 100vw; height: 100vh;`. The video using the other approach was published in 2021 which made me wonder why it was used. The `vw` and `vh` units were available and supported by most modern browsers in 2021. It's interesting.

---

### Why use a separate Overlay element instead of including it with the Modal


I watched a [video](https://youtu.be/MBaw_6cPmAw) on how to make a modal and the developer choose to use a separate overlay element that needed it's `CSS` attributes to be changed as well. The question I had was why he chose to do that. Why not just include it all in one element with a modal container `div` acting as the overlay. My initial thought is that maybe it's for re-use or efficiency purposes but then again it seems like a stretch to worry about one extra `div` eating up memory LOL. It cannot be that expensive can it!?

Yeah so I believe the video is setup to consider other potential modals being used on the page. So rather than having multiple containers and overlays there will just be one element that serves that purpose on the page. It is interesting to see how a different consideration can affect the way your code is designed.

---

### How to get input values from the form (Specifically radio button value from a set):

I originally sought to use a checkbox input for the "Have you read the book" input value. The problem was that the value I wanted was in the `checked` attribute and not in the `value` attribute. The `value` attribute in fact does not change if the checkbox is checked or not. So here is the problem.

1. If the checkbox is not `checked` it's information will not automatically be included in the form submission. 
2. The boolean attribute `checked` does not correlate to the `value` attribute.
3. You cannot set the checkbox input to `required` otherwise the checkbox must always be `checked` before the form can be submitted.

Ultimately, I have learned that although the `checked` property is a boolean, using a checkbox input for a boolean with the absence of the check equaling `false` is not the best. Unless you want to manually find target checkbox inputs and pull the `value` and `checked` attributes alongside names to get the correct information needed.

It is better to just use two linked radio inputs imo. The `value` property from the `checked` radio button is automatically used in the FormData constructor. It makes things a lot cleaner without having to manually target form elements. I need to look into this more but for now this will be my approach.
