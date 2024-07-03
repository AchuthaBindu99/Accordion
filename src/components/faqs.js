import React, {useState, useRef} from "react";
import "./faq.css"
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io"


const data = [
    {
        question : "What is Javascript ?",
        answer : "JavaScript is a scripting or programming language that allows you to implement complex features on web pages — every time a web page does more than just sit there and display static information for you to look at — displaying timely content updates, interactive maps, animated 2D/3D graphics, scrolling video jukeboxes."
    },
   
    {
        question : "What is React.js ?",
        answer :  "React is a JavaScript library for building user interfaces. It is used for building reusable UI components and managing the state of those components. React allows developers to build complex user interfaces by breaking them down into smaller, reusable components. It is not considered a framework because it does not provide a built-in structure for application development, unlike Angular or Vue.js. Instead, it focuses on the view layer of an application and can be easily integrated with other libraries or frameworks for complete application development."
    },
    {
        question : "Why do we use React ?",
        answer : "React has many advantages like it is Component based Architechture, React uses Virtual DOM, It is easy to learn and it also have large community and eco system and it is very popular in industry."
    },

]


function Accord (){

    const [selected,setSelected] = useState(false);
 
    const toggle = (i) => {
        if(selected === i){
            return setSelected(null)
        }

        setSelected(i)
    }



return (
    <div className="container">
        <div className="accordian_box">
            <div className="heading">
                    Accordion
                    </div>
                <div className="accordion_items">
                     {data.map((item,i) =>(
                       <div className="item">
                          <div onClick={() => toggle(i)}  className={selected === i ? 'question' : 'title '}>
                            <p>{item.question}</p>
                            <span>{selected === i ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
                          </div>
                            <div className={selected === i ? 'content show' : 'content'}>
                               {item.answer}
                            </div>
                      </div>
                    ))}
                </div>
            
       </div>
    </div>
)}



export default Accord