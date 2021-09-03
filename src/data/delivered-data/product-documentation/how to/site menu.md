# add a link to site menu

Let's say you want to add a top level menu item called **About** whose link is **http-siteurl/about**. When the user clicks, it should open a page whose component is **About**. 

## Steps

Add following structure to file site-configuration.js
```json
{ 
"label": "About",
"className" : "nav-item",
"linkTo" : "/about"
}
```

In App.js, add the rou

```html
<Route path="/about">
<About />
</Route>
```
