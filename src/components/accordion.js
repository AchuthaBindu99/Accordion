import React, {useState} from "react";
import "./accordion.css"
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io"


const faq = [
    {
        question : "What is Javascript ?",
        answer : "JavaScript is a scripting or programming language that allows you to implement complex features on web pages — every time a web page does more than just sit there and display static information for you to look at — displaying timely content updates, interactive maps, animated 2D/3D graphics, scrolling video jukeboxes."
    },
   
    {
        question : "What is React.js ?",
        answer :  "React is a JavaScript library for building user interfaces. It is used for building reusable UI components and managing the state of those components. React allows developers to build complex user interfaces by breaking them down into smaller, reusable components. It is not considered a framework because it does not provide a built-in structure for application development, unlike Angular or Vue.js. Instead, it focuses on the view layer of an application and can be easily integrated with other libraries or frameworks for complete application development."
    },
    {
        question : "What is useState hook ?",
        answer : "The useState hook is a built-in hook in React that allows you to add state to functional components. It is an alternative to using the class component syntax and this.state to manage state in a React application. The useState hook takes an initial state as an argument and returns an array containing the current state and a setter function for updating the state."
    },
    {
        question : "What is SPA ?",
        answer : "A Single-Page Application (SPA) is a type of web application that loads a single HTML page and dynamically updates the content as the user interacts with the app. Instead of navigating to different pages, the SPA loads all the necessary code and resources at once and updates the content in place."
    },
    {
        question : "Explain about Async await ?",
        answer : "Async/Await is built on top of promises and allows you to write asynchronous code that looks and behaves like synchronous code. An async function is a function that is declared with the async keyword. Async functions automatically return a promise, and you can use the await keyword inside an async function to wait for a promise to be fulfilled."
    }

]


function Accord (){

    const [click,setClick] = useState(false);
 
    const toggle = (i) => {
        if(click === i){
            return setClick(null)
        }

        setClick(i)
    }



return (
    <div className="container">
        <div className="accordian_box">
            <div className="heading">
                    Accordion
            </div>
                <div className="accordion_items">
                     {faq.map((item,i) =>(
                       <div className="item">
                          <div onClick={() => toggle(i)}  className={click === i ? 'question' : 'title '}>
                            <p>{item.question}</p>
                            <span>{click === i ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
                          </div>
                            <div className={click === i ? 'show answer' : 'answer'}>
                               {item.answer}
                            </div>
                      </div>
                    ))}
                </div>
            
       </div>
    </div>
)}



export default Accord