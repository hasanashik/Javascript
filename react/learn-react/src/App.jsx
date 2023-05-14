import React from "react";

function App(){
  // let counter = 0;
  let [counter,setCounter] = React.useState(1000);
  const handleClick = () => {
    // counter +=1 ;
    setCounter(counter+1);
    console.log('Counter : ',counter);
  }; 
  return (
    <div>
      <p>{ counter }</p>
      <button onClick={handleClick}>Add One</button>
    </div>
  );
}

export default App;
