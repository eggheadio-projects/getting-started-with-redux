/*
 * Open the console
 * to see that the tests pass.
 */

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
    default:
      return state;
  }
};

const testAddTodo = () => {
  const stateBefore = [];
  const action = {
    type: 'ADD_TODO',
    id: 0,
    text: 'Learn Redux'
  };
  const stateAfter = [
    {
      id: 0,
      text: 'Learn Redux',
      completed: false
    }
  ];
  
  deepFreeze(stateBefore);
  deepFreeze(action);
  
  expect(
    todos(stateBefore, action)
  ).toEqual(stateAfter);
};

testAddTodo();
console.log('All tests passed.') || displayInPreview('All tests passed.');




// display in plunker preview
function displayInPreview(string) {
  var newDiv = document.createElement("div"); 
  var newContent = document.createTextNode(string); 
  newDiv.appendChild(newContent);
  document.body.appendChild(newDiv)
}

// Function exported from deep-freeze lib
function deepFreeze (o) {
  if (o===Object(o)) {
    Object.isFrozen(o) || Object.freeze(o)
    Object.getOwnPropertyNames(o).forEach(function (prop) {
      prop==='constructor'||deepFreeze(o[prop])
    })
  }
  return o
}