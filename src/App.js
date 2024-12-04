import {React,useState,useCallback} from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import NavigationBar from './components/question4/NavigationBar.js';


import './index.css';

import HobbiesList from './components/quetion1/HobbiesList.js';
import WelcomeMessage from "./components/quetion1/wellcome-message.js";
import Button from './components/quetion1/Button.js';
import ProfileCard from './components/quetion1/ProfileCard.js';
import ItemsList from './components/quetion1/ListItemComponent.js';
import DateDisplay from './components/quetion1/DateDisplayComponent.js'


import ToggleButton from './components/question2/ToogleOnOff.js';
import Counter from "./components/question2/counter.js";
import HoverBackground from "./components/question2/HoverBackgroundComponent.js"
import Form from "./components/question2/LogFormData.js"
import DropdownMenu from './components/question2/DropDown.js';

import LoginForm from './components/question3/LoginFormComponent.js';
import ControlledForm from "./components/question3/ControlledFormComponent.js.js";
import ValidatedForm from "./components/question3/Email_password_validator.js"
import MultiStepForm from "./components/question3/MultiStepFormComponent.js";
import CheckboxForm from "./components/question3/CheckboxFormComponent.js";

import About from './components/question4/About.js';
import Contact from './components/question4/Contact.js';
import Home from './components/question4/Home.js';
import ProductDetails from "./components/question4/ProductDetailsComponent.js"
import NotFound from './components/question4/NotFound';
import WelcomeBlog from './components/question4/WelcomeBlog';



import Parent from "./components/Question5/Parent"
import CounterMem from "./components/Question5/CounterMemo.js"
import HeavyCalculation from './components/Question5/HeavyCalculation.js';
import TodoList from "./components/Question5/TodoList.js";
import LiveTime from "./components/Question5/LiveTime.js"

// form registratin
import LecturerRegistrationForm from "./components/RegForms/RectureReg.js"
import StudentRegistrationForm from "./components/RegForms/StudentReg.js"
import DriverRegistrationFormfrom from "./components/RegForms/RegisterDriver"
import BookRegistrationForm from "./components/RegForms/RegBooks.js"
import ModuleRegistrationForm from "./components/RegForms/ModuleReg.js"

// ======= introducing===========
import ProjectIntro from './Intro';
const projectTitle = "Interactive web development Assignment";
const members = ["Wilson  rukundo: 223004931", "Elie", "Deborah"];




function App(){
    const [num, setNum] = useState(5);


    // question 5.4 to do list

    const [todos, setTodos] = useState([]);
    const [task, setTask] = useState('');

    const addTodo = () => {
        if (task.trim() === '') return;
        setTodos((prevTodos) => [...prevTodos, task]);
        setTask('');
    };

    // useCallback ensures that the reference to this function doesn't change unnecessarily
    const removeTodo = useCallback(
        (index) => {
            setTodos((prevTodos) => prevTodos.filter((_, i) => i !== index));
        },
        [setTodos]
    );
 
  const handleClick = () => {
    alert('Button clicked!');
  };
  const items = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
  return (
    <>
    {/* ---------not required ------- */}
    <div className="flex justify-center items-center">
      <ProjectIntro title={projectTitle} members={members} />
    </div>


     {/* -------required ---------- */}
     <div class="bg-gray-100 m-10 p-4">
         <h1 className="text-xl font-bold m-4">Question 1.1: a functional component that displays a welcome message and another
         component that displays the current date. </h1>
             <div class="flex items-center gap-4 p-4 m-4">
            <WelcomeMessage/>
            <DateDisplay/>
             </div>
     </div>
    <hr/>
    {/* ---------question 1.2 ----------- */}
    <HobbiesList/>

    <div class="bg-gray-100 p-6 m-10">
        <h1 className="text-xl font-bold mb-4"> Question 1.3:  reusable button component with customizable text and color props.</h1>
        <Button text="Click Me" color="green" btnMargin = "20px" onClick={handleClick} />
        <Button text="Submit" color="red" btnMargin ="20px" onClick={handleClick} />
        <Button text="Default" onClick={handleClick} />
    </div>


    <div className="p-6 bg-gray-100 m-10">
            {/* -------- profile card */}
            <div className="bg-gray-100 p-4">
            <h1 className="text-lg font-bold">Question1.4: Design a profile card component that accepts name, age, and email as props.</h1>
            <br/>
            <div class="flex gap-8">
                <ProfileCard
                    name="rukundo wilson"
                    age={21}
                    email="softcloud.saas@gmail.com" minHeight ="250px"
                    widthCard = "250px"
                />
                <ProfileCard
                    name="Ellie"
                    age={22}
                    email="ellie@gmail.com" minHeight ="250px"
                    widthCard = "250px"
                />
                <ProfileCard 
                name="Deborah" 
                age={22} 
                email="Deborah@gmail.com" minHeight ="250px"
                widthCard = "250px"
            />
            </div>
        </div>
        </div> 
        {/*===================== list of array items by map ================ */}
        <div className="m-10 bg-gray-100">
                <ItemsList items={items} />
        </div>

        <h1 className="mx-10 my-4 text-blue-500 text-4xl font-bold">Forms Handling</h1>
        <div className="m-10 bg-gray-100 p-6">
            <h1 className="text-xl font-bold">Questin 2.1: Create a button that toggles between "ON" and "OFF" states when clicked.</h1> <br/>
            <ToggleButton />
        </div>

        {/* =============counter ========= */}
        
        <div className=" m-10 bg-gray-100 p-4">
            <h1 className="text-xl font-bold">Question 2.2: Build a counter component with increment and decrement buttons.</h1>
            <br/>
            <Counter />
        </div>

        {/* =========== hoverable background ======== */}
        <div className="m-10 bg-gray-100 p-6">
          <h1 className="text-xl font-bold">Question 2.3: Create a component that changes the background color of a div when hovered
          over.</h1>
          <br/>
            <HoverBackground />
        </div>

        <div className="m-10 bg-gray-100 p-6">
            <h1 className="text-xl font-bold ">Questin 2.4: Build a form that logs the user's input to the console when the form is submitted.</h1>
            <br/>
            <Form />
        </div>

        <div className="m-10 bg-gray-100 p-4 flex">
            <h1 className="text-xl font-bold ">Questin 2.4:Create a dropdown menu component that shows and hides options when clicked..</h1>
            <br/>
            <DropdownMenu />
        </div>
        <h1 className="mx-10 my-4 text-blue-500 text-4xl font-bold">Forms Handling</h1>
        <div className="m-10 bg-gray-100 p-6">
          <h1 className="text-xl font-bold mb-4">Questin 3.1: a simple login form with fields for username and password</h1>
            <LoginForm />
        </div>

        <div className="m-10 bg-gray-100 p-6">
          <h1 className="text-xl font-bold mb-6">Question 3.2 Design a form with validation for email and password fields.</h1>
            <ValidatedForm />
        </div>

        <div className="m-10 bg-gray-100 p-6">
          <h1 className="mb-4 text-xl font-bold">Question 3.3: controlled form with a single input field and display the entered value
          below the form.</h1>
          
            <ControlledForm />
        </div>
        <div className="m-10 p-4 bg-gray-100">
        <h1 className="m-4 mb-4 text-xl font-bold">Question 3.4: multi-step form where users can fill in details step-by-step (e.g., name,
          address, and payment information).</h1>
            <MultiStepForm />
        </div>

        <div className="m-10 p-6 bg-gray-100">
            <h1 className="text-xl mb-4 font-bold">Question 3.5: a form with multiple checkbox inputs and display the selected options.</h1>
            <CheckboxForm />
        </div>
        <h1 className="mx-10 my-4 text-blue-500 text-4xl font-bold">Routing</h1>
        <Router>
          <h1 className="text-lg font-bold m-10">Question 4.1: a basic React Router with three pages: Home, About, and Contact.</h1>
            <div className="m-10 bg-gray-100 flex flex-col items-center">
                {/* Navigation Menu */}
                <nav className="bg-blue-500 w-full py-4 text-white">
                    <div className="max-w-4xl mx-auto flex justify-center gap-4">
                        <Link to="/" className="hover:underline">
                            Home
                        </Link>
                        <Link to="/about" className="hover:underline">
                            About
                        </Link>
                        <Link to="/contact" className="hover:underline">
                            Contact
                        </Link>
                    </div>
                </nav>

                {/* Routes */}
                <div className="max-w-4xl mx-auto p-6">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </div>
            </div>
        </Router>

        
        <Router>
            <h1 className="text-lg font-bold m-10">Question 4.2: a route for a product details page that accepts a product ID as a URL
            parameter.</h1>
            <div className="m-10 bg-gray-100">
                {/* Navigation */}
                <nav className="bg-blue-500 py-4 text-white text-center">
                    <div className="space-x-4">
                        <Link to="/product/1" className="hover:underline">
                            Product 1
                        </Link>
                        <Link to="/product/2" className="hover:underline">
                            Product 2
                        </Link>
                        <Link to="/product/3" className="hover:underline">
                            Product 3
                        </Link>
                    </div>
                </nav>

                {/* Main Content */}
                <div className="p-6 m-10">
                    <Routes>
                        <Route path="/product/:id" element={<ProductDetails />} />
                    </Routes>
                </div>
            </div>
        </Router>

        <Router>
            <div>
                
                <h1 className="text-lg font-bold m-10">Question 4.3: Build a navigation bar with links to different routes using React Router.</h1>
                <div class="m-10">
                    <NavigationBar />
                </div>
                <div className="p-6">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </div>
            </div>
        </Router>

        <Router>
          <h1 className="text-xl font-bold m-10">Question 4.4: a "Not Found" page that displays when a user navigates to an undefined
          route.</h1>
            <div className="m-10">
                <NavigationBar />
                <div className="p-6">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about-test-notfound" element={<About />} />
                        <Route path="/contact/test-not-found" element={<Contact />} />
                        <Route path="/contact" element={<Contact />} />
                        {/* Catch all undefined routes */}
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </div>
            </div>
        </Router>
        <div className="bg-gray-100 p-4 m-10" >
            <h1 className="text-xl font-bold">Question 4.5: nested routes for a blog with a main blog page and individual post pages.</h1>
            <Router>
            <div className="max-w-4xl p-6">
            <WelcomeBlog />
               
            </div>
        </Router>
        </div>

        <h1 className="mx-10 my-4 text-blue-500 text-4xl font-bold">React.memo</h1>
        <div className="bg-gray-100 p-4 m-10">
            <h1 className="text-xl font-bold m-4" >Question 5.1 a parent component that passes a prop to a child component. Use
            React.memo to prevent the child component from re-rendering unnecessarily.</h1>
            <div className="m-4"><Parent/></div>
            <h1 className="text-xl font-bold m-4" >Question 5.2 a component that displays a counter. Use React.memo to optimize a list of
            unrelated items from re-rendering.</h1>
            <CounterMem/>
        </div>

        <div className="p-6">
            <h1 className="text-xl font-bold m-4"> Question 5.3: a "heavy calculation" component that uses React.memo to optimize
            performance.</h1>
            
            <div className="mb-4 p-4 m-4 bg-blue-100">
                <label htmlFor="num" className="block text-lg font-medium">
                    Enter Number:
                </label>
                <input
                    type="number"
                    id="num"
                    value={num}
                    onChange={(e) => setNum(parseInt(e.target.value) || 0)}
                    className="border p-2 rounded w-20"
                />
                <HeavyCalculation num={num} />
            </div>
        </div>

        <div className="p-6">
        <h1 className="text-xl font-bold m-6"> Question 5.4: 
            a todo list app where the list component is memoized to prevent re-renders
            when the input changes.
        </h1>
            <div class="p-4 bg-gray-100 m-4">
                <h1 className="text-2xl font-bold mb-4">To-Do List</h1>
                <div className="mb-4">
                    <input
                        type="text"
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                        placeholder="Enter a task..."
                        className="border p-2 rounded w-full mb-2"
                    />
                    <button
                        onClick={addTodo}
                        className="bg-blue-500 text-white px-4 py-2 rounded w-full"
                    >
                        Add Task
                    </button>
                </div>
                <TodoList todos={todos} removeTodo={removeTodo} />
            </div>
        </div>

        <div className="m-10 bg-gray-100 p-4">
            <h1 className="text-xl font-bold m-4 color-green-100">
                Question5.5. Implement a component that shows live time updates but prevents unnecessary
                re-renders of static UI parts.
            </h1>
            <LiveTime/>

            </div>
        <div className="p-4 m-10">
            <h1 className="text-blue-500 text-4xl font-bold">Registration Forms</h1>
            <h1 className="my-5"> Q6.1: Add validation to ensure the email is in the correct format and phone number is
            numeric.</h1>
            <div className="bg-gray-100">
                <LecturerRegistrationForm/>
            </div>
            <div className="bg-gray-100 p-4 px-10">
                <h1 className="my-10">Question 6.2: Validate the Student ID to ensure it contains only alphanumeric characters.</h1>
                <StudentRegistrationForm/>
            </div>
        </div>
        <div className="bg-gray-100 p-10 m-10" >
            <h1 className="my-10" >Question 6.3: Add a dropdown to select the vehicle type (e.g., car, truck, motorcycle).</h1>
            <DriverRegistrationFormfrom/>
        </div>
        <div className="bg-gray-100 p-10 m-10" >
            <h1 className="my-10" >Question 6.4: Ensure the Credits field accepts only numeric values and is required.</h1>
            <BookRegistrationForm/>
        </div>
        <div className="bg-gray-100 p-10 m-10" >
            <h1 className="my-10" >Question 6.5: Ensure the Credits field accepts only numeric values and is required.</h1>
            <ModuleRegistrationForm/>

        </div>

      </>
   
  )
}
export default App;