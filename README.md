To run the project, go to the project directory and run command 'npm start'

React redux

In react, the state is maintained in individual components. But how can we reliably see keep track of these state changes? The state be mistakingly changed by some unrelated code?

There is a lot of logic which is present is distributed in components in the form of state. Redux solves this problem. Redux give each component the state it needs.

Redux store is the place which holds all of the applications state.

State in redux comes from reducers i.e reducers produce the state of the application.

Redux reducer is just a javascript function which takes 2 parameters:

- Current state
- Action

Reducers produce the state of the application, but how to change the state of the application.

State is changed by sending signal to the store. The signal is an action. Redux actions are simple javascript objects which look like below:
{
	type: 	‘ACTION_TYPE’,
	payload: 	{ id: 1,  data: ‘payload_data’}
}

type property defines how state change and payload describes what should change(optional).
