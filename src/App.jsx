import "./App.css";
import {useState} from 'react';
export default function App() {
  const [title,setTitle]=useState("");
  const [descp,setDescp]=useState("");
  const [mainTask,setMainTask]=useState([]);
  
  function submitHandler(e){
    e.preventDefault();
    setMainTask([...mainTask,{title,descp}]);
    setTitle("");
    setDescp("");
    console.log(mainTask);
    
  }
  function deleteHandler(i){
    let copyTask=[...mainTask];
    copyTask.splice(i,1);
    setMainTask(copyTask);
  }
  let renderTask=<h2>No task available</h2>;
  if(mainTask.length>0){
     renderTask=mainTask.map((t,i)=>{
       return (
         <li key={i}>
         <div className="flex  justify-between">
          <h5>{t.title}</h5>
          <h6>{t.descp}</h6>
          <button className="bg-black-400" onClick={()=>{deleteHandler(i)}}>Delete</button>
          </div>
       </li> 
      ) 
     })
  }
  
  return (
    <main>
      <div className="bg-black text-white" >My Todo List</div>
      <form onSubmit={submitHandler}>
        <input className="border-black border-8"
          type="text" 
          placeholder="Enter your Task"
          value={title}
          onChange={(e)=>{
            setTitle(e.target.value)
          }}></input>
         <input className="border-black border-8"type="text" placeholder="Enter your description"
           value={descp}
           onChange={(e)=>{
             setDescp(e.target.value);
           }}></input>
           
        <button className="border-zinc-800">Add Task</button>
      </form>
      <hr></hr>
      <div>
        <ul className="bg-blue text-white" >
          <h2>{renderTask}</h2>
        </ul>
      </div>
     
      
    </main>
  );
}
