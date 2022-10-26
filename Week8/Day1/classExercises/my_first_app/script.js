//1)npx create-react-app nameApp
//other way-when its not allowed to create:
//2)npm i create-react-app
//and then: create-react-app nameApp


//cd into the name of the app
//npm start

//npm install --save redux react-redux

//npm i redux-logger       -----middleware------
//npx kill-port 3000


//-----------------------routerrrrrr
//npm i react-router-dom
//npm start
//on the app write all the components(home,profile...)
//on the parent component (like index.js) import the:
 import {BrowserRouter} from 'react-router-dom'
 //and then wrap the app with:<BrowserRouter>
 
 //on the child component(app.js) we import the router:
import {Routes,Route} from 'react-router-dom'
//and then open <Routes> and inside all the Route
 <Routes>
 <Route path="/" element={<Home/>}/>
 <Route path="/about" element={<About/>}/>
 </Routes>
 //we can also do: element={<> <Home/><About/> </>}

 //create navbar:
 //new file: Nav.js
 //inside import {Link} from 'react-router-dom'
 //inside of the nav function 
 return(
    <div>
    <Link to='/'>Home </Link>
    <Link to='/about'>About </Link>
    </div>  )

 //and then import the nav in the app 
 //write in the head <Nav/>  


 //route is to redirect to the component file
 //nav is to navigate