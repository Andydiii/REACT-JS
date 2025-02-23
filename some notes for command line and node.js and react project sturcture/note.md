### steps to set up a react project
1. `npx create-vite@6.1.1`
2. check version of react in dependency in package.json. 
   1. `npm install react@19 react-dom@19 @types/react@19 @types/react-dom@19` to update version of react

command line:
ls = list
pwd = print working directory
cd = change directory


nodejs:
1. allows us to run js outside browser, or could say run js code locally
2. npm: node package manager
   - allows us install external libraries(or packages) into our project
3. package: external library
4. `npx create-vite` does two things:
    - `npm install create-vite`
    - run `create-vite` in the command line
5. `npx create-vite@6.1.1`
    - helps us set a new React project
    - @ = use a specific version of create-vite


react project structure:
- eslint.config.js used to highlight problems in our js code. 
  - need to install eslint extension to see the err captured by eslint.
- index.html is home page. but it loads js code from a different file.
- package.json has a list of packages that need to install to run this project
  - when first touch this project, user uses `npm install` in command line. note this command autolly install all needed packages.
- package-lock.json saves the version of all packages we have installed
- vite.config.js configures Vite - the tool we used to set up this project.
  - help us build the website, takes all js and css code and load them into html file.
  - creates a vite server(put our website at a URL)
    - vite server is a replacement for live server
- node_modules have all necessary packages/external libraries we installed for our project
- main.jsx sets up React and render the UI
- how `npm run dev` works:
  - npm run = tells the computer to look inside package.json for a section called "scripts" 
  - dev = look inside `scripts` for `dev` and run the command on the right side of "dev"(which is vite)
  - the `vite` command is added by the vite package. It starts the vite server , which lets us view the React website.


### git
- repository = a folder where git is tracking changes