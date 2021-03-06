// Define ADD, addMessage(), messageReducer(), and store here:

const ADD = 'ADD';
const defaultState = {
messages: []
};

function addMessage(msg) {
return {
type: ADD,
message: msg
};
};

const messageReducer = (state = defaultState.messages, action) => {
switch (action.type) {
case ADD:
return [...state, action.message];
break;
default:
return state;
};

};
const store = Redux.createStore(messageReducer);