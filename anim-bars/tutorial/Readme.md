# Tutorial - Animating bars 

This tutorial will help you developing the tiny application [demo](demo) using JavaScript, css and HTML.
  - Basic setup
  - Creating a class and instanciating

## Basic setup:
  - create a folder *'anim-bars'*
  - create html file *'animbars/index.html'*
  - create css file *'anim-bars/styles.css'*
  - create js file *'anim-bars/scripts.css'*

Now open up *'animbars/index.html'* and fill in the file with the following contents.

```
<!DOCTYPE html>
<html>
  <head>
    <title>Anim bars</title>
    <link href="styles.css" rel="stylesheet" />
  </head>
  <body>
    <h1>Welcome!</h1>
    <div id="page-container"></div>
    <script src="scripts.js"></script>
  </body>
</html>
```
Now open *'anim-bars/index.html'* in a web browser (eg: chrome, firefox, IE edge)
You should see a Welcome message on the page. Now open up the developer tools (press F12) and check the console. If everything goes fine, you should see no error messages in the console.

## Styling
open up *'anim-bars/styles.css'* and fill the file with the following contents.
```
html, body, #page-container {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  font-family: monospace;
}
#page-container {
  background-color: #ECEFF1;
  position: relative;
}
h1, h3, h4 {
  text-align: center;
  color: #9C27B0;
  margin: 0;
  padding: 5px;
}
.pole {
  text-align: center;
  color: #FFF;
  text-shadow: 1px 1px #777;
  box-shadow: 0 2px 5px rgba(0,0,0,0.26);
  position: absolute;
  width: 100px;
  height: 100px;
  opacity: 0.8;
  bottom: 0;
  border-radius: 5px 5px 0 0;
}
```
