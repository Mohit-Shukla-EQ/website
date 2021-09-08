# Create a new react component


1. Copy folder **/src/actions/create-new-component/Component-Name** to **src/components/{Component Name}**. 
2. Define Component/schema.json with following:
   1. title, description
   2. example(s)
   3. schema
3. Write Component/documentation.js to try out behavious of component as it  is developed
4. Component must be able to render with a json tryit editor if {showComponentConfiguration": true}
5. Add a node in /website/src/data/site-specific-data/content/collections/sideBars.json
6. Go to Article.js --> showPage method --> switch, add a case
7. Go to **component.js**, find **ComponentName** and replace with right ComponentName  
 