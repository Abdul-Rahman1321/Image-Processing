# IMAGE PROCESSING API PROJECT

## OVERVIEW

This project uses ***node js*** runtime and ***express*** framework to make an api end-point and adjusting or **resizing** images using # ***sharp*** package for manipulating images then displaying it back.

### ***TOOLS***

I used in the app many useful tools like :
- ***prettier***
- ***eslint***
- ***jasmine***
- ***sharp***

### ***IMPLEMENTATION***

Using ***TYPESCRIPT*** as dev language we ran our server app using express creating our api and functionality , making sure the code is well formatted by using **pretteir** and **eslint** , running tests by using **jasmine** framework and **supertest** for end point testing
and then compiling into ***JAVASCRIPT***.

### ***SCRIPTS***
`    "test": "npm run build && npm run jasmine"
`

`    "start": "nodemon src/server.ts"
`

`"build": "npx tsc"`




### ***END POINTS***

[title] http://localhost:3030/api/images?imgName=trophy&width=500&height=500



> imgName maybe : horse,duck,trophy,sea,midnight,stadium      
width and height also vary