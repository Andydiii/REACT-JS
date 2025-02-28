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
- / is home page. but it loads js code from a different file.
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
- src code structure:
  - page code put in `pages` folder
  - reusable code put in `components` folder


### git
- repository = a folder where git is tracking changes
- .gitignore =  tells git which files and folders to ignore (not to track changes)

### Routing
- Routing lets us create multiple pages using 1 HTML file. This lets us reuse our HTML code.
- How to set up a router?
  - npm install `react-router@version you want`
  - `import { BrowserRouter } from 'react-router';`and wrap the app component with BrowserRouter in the main.jsx
    ```js
      createRoot(document.getElementById('root')).render(
        <StrictMode>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </StrictMode>,
      )
    ```
  -  Routes: tells React all the pages that are in our website. **A Route = A page**
  -  set up `Routes, Route` component in app.jsx:
      ```js
        import { Routes, Route} from 'react-router';

        function App() {
          return (
            <Routes>
              {/* path = "URL path", URL path is the last part of the URL*/}
              {/* this tells react when we go to url path / or empty, display HomePage component */}
              <Route path="/" element={<HomePage/>}></Route>
              <Route path='checkout' element={<>Test checkout page</>}></Route>
            </Routes>
          )
        }
      ```
  - now we have multiple pages in our website, all these `share one single html`, which reduces repeatition.
    - Single Page Application(SPA)
      - = we only have 1 HTML file
      - = we use REACT to create multiple pages
  - some shortcuts for `<Route>`
    ```js
      <Route path="/" element={<HomePage/>}></Route>
      // same as 
      <Route index element={<HomePage/>} />
    ```
  - `react-router` provides a component `Link` to achieve using javascript to display a page without reloading. So instead of using a router, use `<Link>` instead of `<a>`