1. Create a form like registration form or feedback form, after submit hide create form and enable the display section using java script.
 
Registration.html
<html>
<head>
       <title> Registration Form</title>
       <script>
           function passvalues()
​{
               ​var name = document.getElementById("name").value;
​                var email = document.getElementById("email").value;
​                var address = document.getElementById("address").value;
​                localStorage.setItem("name",name);
​                localStorage.setItem("email",email);
​                localStorage.setItem("address",address);
​                return;
           }
       </script>
   </head>
   <body>
<h1>Registrtion Form</h1>
       <form action="Details.html">
<fieldset>
   <legend>Registration</legend>
<label> Name </label>
       <input type="text" id="name"/><br><br>  
<label> Email ID </label>
       <input type="email" id="email"/><br><br>
     
<label> Address </label>
       <input type="address" id="address"/><br><br>
       <input type="submit" value="submit" onclick="passvalues()"/>
</fieldset>
       </form>
   </body>
</html>  
 
 
Details.html
<html>
   <head>
       <title> Details</title>
   </head>
   <body>
<form>
   Your Name is:<p id="name"></p><br>
       Your email is:<p id="email"></p><br>
       Your address is:<p id="address"></p>
<script>
     document.getElementById("name").innerHTML = localStorage.getItem("name");
     document.getElementById("email").innerHTML = localStorage.getItem("email");
     document.getElementById("address").innerHTML = localStorage.getItem("address");
       </script>
</form>
   </body>
</html>
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
2. Create form validation using JavaScript
Index.html
<html>
<body>
<script>  
function validateform(){  
var name=document.myform.name.value;  
var password=document.myform.password.value;  
if (name==null || name=="")
{  
 alert("Name can't be blank");  
 return false;  
}
else if(password.length<6)
{  
 alert("Password must be at least 6 characters long.");  
 return false;  
 }  
}  
</script>  
<body>  
<form name="myform" method="post" action="valid.html" onsubmit="return validateform()" >  
Name: <input type="text" name="name"><br/>  
Password: <input type="password" name="password"><br/>  
<input type="submit" value="register">  
</form>  
</body>
</html>
 
 
valid.html
<html>
<body>
<h1>Validation Successfull</h1>
</body>
</html>
 
 
3. Create and run simple program in TypeScript
 
Install TypeScript using Node.js Package Manager (npm)
Step-1 Install Node.js. It is used to setup TypeScript on our local computer.
To install Node.js on Windows, go to the following link: https://www.javatpoint.com/install-nodejs
 
Step-2 Install TypeScript. To install TypeScript, enter the following command in the Terminal Window.
• npm install typescript --save-dev         //As dev dependency  
• npm install typescript -g                      //Install as a global module  
or
• npm install -g typescript
• npm install typescript@latest -g          //Install latest if you have an older version  
 
Step-3 To verify the installation was successful, enter the command $ tsc -v in the Terminal Window.
Install Live server
npm install -g live-server
 
Create and run first program in TypeScript
• open command prompt
• go to d: drive(any drive)
• d:\>mkdir typescript
• d:\>cd  typescript
• d:\typescript> npm install typescript --save-dev 
• open visual studio code
• file-open folder-choose typescript folder from d:
• create new file- save it as types.ts(any name.ts)
• Write the below code and save it
• console.log("Hello World");
• go to command prompt and compile the program
• tsc types.ts
• run the program
• node types.js
• Observe the output
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
4. Forms - Use of HTML tags in forms like select, input, file, textarea, etc.
<html>
<head>
<title>Form Elements</title>
</head>
<body>
<form>
<lable>Text Box</lable>
<input type="text" id="t1" name="name" value=""/><br><br>
 
Radio Button: ​<br>
<input type="radio" id="r1" name="" value=""/>Male<br>​<br>​
<input type="radio" id="r1" name="" value=""/>FeMale<br><br>
Check Box:<input type="checkbox" id="c1" name="" value=""/><br><br>
File:<input type="file" id="e1" name="file" value=""/><br><br>
 
Select:<br>
<label>Sem</label>
<select name="sem" id="sem">
 <option value="1">1 Sem</option>
 <option value="2">2 Sem</option>
</select><br><br>
 
Text Area:<br>
<textarea id="ta1" name="textarea" rows="4" cols="50">
At w3schools.com you will learn how to make a website.
</textarea><br><br>
 
 
<fieldset>
   <legend>Personal Details:</legend>
   <label>First name:</label>
   <input type="text" id="fname" name="fname"><br><br>
   <label>Last name:</label>
   <input type="text" id="lname" name="lname"><br><br>
 </fieldset><br><br>
Button:<input type="button" id="t1" name="" value="Submit"/><br>
</form>
</body>
</html>
5. Build a basic application on cloud
 
Create a web application
Use the 10th program code (Forms – Use of HTML tags in forms select, input, file, etc.)
 
Deployment on cloud
1. Open web browser and search for free cloud service (000webhost.com).
2. Proceed sign in process through the Google account.
3. Host free website and click on Manage Website.
4. Towards left column, tools>>file manager and select upload files.
5. Select public_html and upload the existing html file.
6. After uploading, right click on the file and open.
7. Make sure the file has been uploaded.
8. Finally, we can perform the following operations
• View the output of the webpageapplication
• Download the webpage application
• Share the webpage application through the given below
o Webhost_link + file_name.extension
• We can move from one directory to another
• Either we can copy the content of the file or by copying the whole file
 
 
 
 
 
 
 
 
 
 
 
6. Testing single page application (Registration form) using React.
 
Note: Add Home.js file in index.js file
 
Index.js
    <Home />
 
Home.js
import { useState } from 'react';
import './App.css';
export default function Form()
{
// States for registration
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [submitted, setSubmitted] = useState(false);
 
const handleName = (e) => {
    setName(e.target.value);    
};
 
const handleEmail = (e) => {
    setEmail(e.target.value);  
};
 
const handlePassword = (e) => {
    setPassword(e.target.value);    
};
 
const handleSubmit = (e) => {
    e.preventDefault();
    if (name === '' || email === '' || password === '') {
    alert("Please enter all the fields");
    } else {
    setSubmitted(true);
    }
};
 
 
// Showing success message
const successMessage = () => {
    if(submitted)
    return (
    <div className="success" >
        <h1>User {name} successfully registered!!</h1>
    </div>
    );
};
return (
    <div className="form">
    <div>
        <h1>User Registration</h1>
    </div>
    {/* Calling to the methods */}
    <div className="messages">  
        {successMessage()}
    </div>
   
    <form>
    <fieldset>
        {/* Labels and inputs for form data */}
        <label className="label">Name</label>
        <input onChange={handleName} className="input" value={name} type="text" /><br></br>
        <label className="label">Email</label>
        <input onChange={handleEmail} className="input" value={email} type="email" /><br></br>
        <label className="label">Password</label>
        <input onChange={handlePassword} className="input" value={password} type="password" /><br></br>
        <button onClick={handleSubmit} className="btn" type="submit">
        Submit
        </button>
        </fieldset>
    </form>
    </div>
);
}
 
 
 
App.css
.input {
  width: 30%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
7. Implement navigation using react router
 
Add React Router
• To add React Router in your application, run this in the terminal from the root directory of the application:
npm i -D react-router-dom
 
Index.js
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
Create a folder name called pages. Within a pages create following files.
Blogs.js
const Blogs = () => {
    return <h1>Blog Articles</h1>;
  };
    export default Blogs;
Contact.js
const Contact = () => {
    return <h1>Contact Me</h1>;
  };
  export default Contact;
 
Home.js
const Home = () => {
    return <h1>Home</h1>;
  };
  export default Home;
 
Layout.js
import { Outlet, Link } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  )
};export default Layout;
NoPage.js
 
const NoPage = () => {
    return <h1>404</h1>;
  };
    export default NoPage;
 
App.css
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #04AA6D;
}
 
li {
  float: left;
  border-right:1px solid #bbb;
}
 
li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}
 
li a:hover:not(.active) {
  background-color: #111;
}
8. Build single page application (Add Product to Product List)
App.js
import { useState } from "react";
import "./App.css";
function App() {
  const [list, setList] = useState([]);
  const [value, setValue] = useState("");
  const addToList = () => {
    let tempArr = list;
    tempArr.push(value);
    setList(tempArr);
    setValue("");
  };
 const deleteItem = (index) => {
 let temp = list.filter((item, i) => i !== index);
    setList(temp);
  };
  return (
    <div className="App">
        <fieldset>
        <h>Add Product to List</h><br></br>
    <input type="text" value={value} onChange={(e) => setValue(e.target.value)}/>
    <button onClick={addToList}> Click to Add </button><br></br><br></br>
    <h>Product Catalog</h><br></br>
    <ol>
        {list.map((item, i) => <li onClick={() => deleteItem(i)}>{item} </li>)}
    </ol>
    <h>Click on Product to Delete</h><br></br>
    </fieldset></div>
  );
}export default App;
index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);
 
