import './App.css';
import {useState, createContext, useContext } from "react"; 
import ReactDOM from "react-dom/client";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import Slider from './Slider.js';



//CHECKBOX
function App(){
const checkList = ["Apple", "Banana", "Tea", "Coffee"];

const [checked, setChecked] = useState([]);

const handleCheck = (event) => {
  //ovdepopunis listu svaki put kad se pozove metoda sa stanjem koje je checked
  var updatedList = [...checked];
  if(event.target.checked){
    //znaci i ovde se puni prethodnim checked? valjda,i onda sta je kliknuto
    updatedList = [...checked, event.target.value];

  }else {
    updatedList.splice(checked.indexOf(event.target.value), 1);
  }

setChecked(updatedList);
//checked daje prethodnog jer se nije renderisao
//setState(newState);
//During subsequent re-renders, the first value returned by useState will always
// be the most recent state after applying updates
console.log(checked);
console.log(event.target.value);
console.log(updatedList);
}


//The reducer walks through the array element-by-element, at each step adding 
//the current array value to the result from the previous step (this result is 
//the running sum of all the previous steps) — until there are no more elements to add.
const checkedItems = checked.length ? 
  checked.reduce((result, item) => 
   {return result + ", " + item}
   )
   : "";

// ovo je bitno za chechbox, isto kao i text input, taj tag :
// <input value={item}  type="checkbox">
return(
  <>
 <div className="title">Your CheckList:</div>
   <div className="list-container">
      {checkList.map((item, index) => (
      
         <div key={index}>
         <input value={item}  type="checkbox" onChange={handleCheck}  />
           <span>{item}</span>
         </div>
      ))}
      </div>
      <p>{`You selected: ${checkedItems}`}</p>
 </>
)
}

export default App;

/*

//CONTEXT, SA PARENTOM I CHILDREN
const UserContext = createContext();

function App(){
 const [user, setUser] = useState("Josh Peters");
  return(
    <UserContext.Provider value = {user}>
    <h1>{`Hello ${user}`}</h1>
    <Component2 /> 
    </UserContext.Provider>
    );
}

function Component2() { 
 return (   
  <>    
    <h1>Component 2</h1>  
         <Component5 /> 
          </> 
           ); 
         }

function Component5() {
const user = useContext(UserContext);

return(
     <>     
      <h1>Component 5</h1>
      <h2>{`Hello ${user} again!`}</h2>  
        </> 
)
}




//TOGGLE ELEMENT
function App(){
  const [state, setState] = useState(true);

  const handleToggle = () => setState(!state);
  return(
    <>
   <button onClick = {handleToggle}>Toggle text</button>
    {state && 
       <div>
      <p>Ovo je text</p>
       </div>
     }
    </>
    )
}



//SHOW ARRAY or LIST ON PAGE
function App(){

  const list2 = [
    {name:"Banana", color: "yellow", id: 1},
    {name:"Apple", color: "red", id: 2},
    {name:"Orange", color: "orange", id: 3},
    {name:"Mango", color: "yellow", id: 4}
  ];

  const list = [
    "Banana",
    "Apple",
    "Orange",
    "Mango",
    "Pineapple",
    "Watermelon"
  ];

  //const showList = list.map((item) => <div>{item}</div>);
  const showList2 = list2.map((item) => <>
   <h2>Name: {item.name}</h2>
            <p>Color: {item.color}</p>
            </>
    );

  return(
    <>
    <div>{showList2}</div>
    </>
    )
}



//COUNTER
//ako stavimo u button samo setState bez ()=> ovako 
//<button onClick={setCounter(state+1)} > onda ce davati exception Too many 
//re-renders jer konstantno poziva setState, ako stavimo ovo onda se poziva
//pri pritisku na dugme. To je vrv zato sto su same hooks te koje se pozivaju stalno,
//pogotovo useState

function App(){
  const[state, setState] = useState(0);

  return(
    <>
    <button onClick = {() => setState(state+1)}>Increase</button>

    <p>{state}</p>

    <button onClick = {() => setState(state-1)}>Decrease</button>


    </>
    )

}



//SEARCH BAR ON A LIST
function App(){

  const [state, setState] = useState("");

  const list = [
    "Banana",
    "Apple",
    "Orange",
    "Mango",
    "Pineapple",
    "Watermelon"
  ];

  const result = list.filter(searchResult);

function searchResult(item) {
  item= item.toLowerCase();
  //state = state.toLowerCase();
  if(item.includes(state))
  return item;
}

  return (
    <>
 <form>    
   <label>Search for:      
     <input       
       type="text"   
       value={state}    
      onChange={(e) => setState(e.target.value)}    
        />    
          </label>   
       </form> 

       <div>
       {list.map((item) => <p>{item}</p>)}
       </div>
       <div>{result && result.map((item) => <p>{item}</p>)}</div>
</>
    )

}

*/



