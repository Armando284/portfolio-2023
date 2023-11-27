---
layout: '../../layouts/BlogLayout.astro'
---

# How To Make a System/Light/Dark Theme Selector

## A tutorial on how to create a theme selector for your website or app using only HTML, CSS, and JavaScript

![Photo by Mohammad Rahmani on Unsplash.](https://miro.medium.com/v2/resize:fit:4800/format:webp/0*hENya-JPKMK7VqPo)

This tutorial will show you how to create a very common functionality in modern applications, which is a Theme Selector, that allows the user to pick a Light, Dark, or System managed Theme, for your website or app using only HTML, CSS, and JavaScript.

Almost every app these days allows users to pick their favorite Theme, this can be a really good improvement in the user experience (UX) but as developers, we need to be really careful about it so we don’t mess up with the intended design.

For example, in mobiles running Android 12 if the app doesn’t present a proper dark theme, the system will do its best to apply one when the mobile is running on dark mode itself but this is usually just changing blacks and whites and can destroy the readability of the app and the contrast of many components damaging a lot the user experience and interface (UX/UI).

Another usual problem is while setting the CSS configuration to support the System Theme the user then loses the possibility to choose a Theme different than the one the System has.

So I will show you a simple way to avoid these issues using only HTML, CSS, and Vanilla JavaScript, and since no plugins or packages are needed this technique can be used on any JS framework!

For this example we will create a simple HTML page, like this one:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="color-scheme" content="light dark" />
  <title>Theme Example</title>
  <link rel="stylesheet" href="style.css">
  <script src="main.js" defer></script>
</head>
<body>
  <div class="navbar">
    <button class="btn" id="system-btn">System</button>
    <button class="btn" id="light-btn">Light</button>
    <button class="btn" id="dark-btn">Dark</button>
  </div>
  <h1 class="title">Title</h1>
  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
</body>
</html>
```

Nothing new this far, the only things to be noticed are the meta tag `<meta name=”color-scheme” content="light dark" />` that tells the System that our app has support for Light and Dark Themes, so it uses our CSS styles and not an automatic change of blacks and whites. And the three buttons we are going to use to choose each theme.

Then on our CSS:

```css
:root{
  --bg-main: #eee;
  --bg-secondary: #ddd;
  --color-main: #333;
  --color-secondary: #555;
}
```

On the root element, we will set our variables with our default Theme, the Light one in this case. Then we will use these variables to set the colors of every element we have, no hardcoded colors are allowed!

For example, on the buttons, we would do this!

```css
.btn{
  color: var(--color-main);
  background: var(--bg-main);
  border: 1px solid var(--color-secondary);
}
```

Then we will add a class for our Dark Theme:

```css
.dark{
  --bg-main: #333;
  --bg-secondary: #555;
  --color-main: #eee;
  --color-secondary: #ddd;
}
```

As you can see, here we are changing the values of our variables to a dark background and light texts, so if we add this class to our page body element these are the values that will be applied to our elements.

Until here everything is quite standard, now let’s go to the System managed Theme:

```css
@media (prefers-color-scheme: dark){
  /* Don't use the :root element here! */
  .system{
    --bg-main: #333;
    --bg-secondary: #555;
    --color-main: #eee;
    --color-secondary: #ddd;
  }
}
```

Here we are using a `@media (prefers-color-scheme: dark)` to use a set of rules when our device’s System is running on Dark Theme. It is in this part where usually you get the problem of the user losing their selected Theme for the one the System is using since in almost all of the tutorials the recommendation is to use the `:root` element to set the System’s Dark Theme, but that will only provoke that every time our System’s Theme changes to Dark our `:root` element will change the values of our variables and with that, we completely lose our control over the Theme. The idea is to set the style using a class, so no matter if the System is on Dark mode, that Theme will only be applied if the user has chosen to use the System’s Theme and therefore that class is attached to our body element.

Now we will use JavaScript to change the classes attached to our body element and then control what theme we apply:

```javascript
const $body = document.body
const $system = document.querySelector('#system-btn')
const $light = document.querySelector('#light-btn')
const $dark = document.querySelector('#dark-btn')

const CACHE_KEY = 'theme'

const themes = ['system', 'light', 'dark']
let currentTheme = 'system' // By default

function setTheme(theme){
  if(!themes.includes(theme)) throw `Wrong theme ${theme}`
  localStorage.setItem(CACHE_KEY, theme)
  if(theme !== currentTheme){
    body.classList.replace(currentTheme, theme)
    currentTheme = theme
  }
}

$system.onclick = () => setTheme('system')
$light.onclick = () => setTheme('light')
$dark.onclick = () => setTheme('dark')

// load cached theme
(function(){
  setTheme(localStorage.getItem(CACHE_KEY))
})()
```

For easier development we first capture our body element and our three buttons, then add a click Event Listener to each button, passing to our setTheme function each button’s theme. We can make an array with all our Themes just to have some kind of validation. Then we save our selected Theme into our Local Storage, so when the user opens our app again it will get automatically its prefered Theme, using the loadTheme function. Then, to keep things clean, we remove every theme-related class from our body element, and we add the one we want to it.

This is all we need to have a functional Theme selection on our app, that will work with our System Theme but will not compromise our user preferences.

After you can add as many Themes as you like to this, or even create a custom color Theme creation functionality with a little bit more work. A tutorial on that in my next post.

This is a working Codepen example. You can use this same code if you want:

[Theme selector example.](https://codepen.io/armando284/embed/zYjBxEy?)