import React from 'react';

// render(){
//    return dom;
//}

const App = () => {
  return (
    <div>
      <Cat />
      <Cat />
      <Cat />
    </div>
  )
}

const Cat = () => {
  return <div>Meow</div>
}

export default App;
