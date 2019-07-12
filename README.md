This project is about training a neural network with answers obtained from a quiz on open-mindedness. The neural network is trained to predict the likelihood of the user selecting each option for a brand new question. 
(bootstrapped with [Create React App](https://github.com/facebook/create-react-app).)

## How it works
### WHat is a neural network?
- it's a method of machine learning that learns the pattern and relationship between the user inputs and answers. Using sufficient training data (the choices that an user made on the quiz), the neural network will learn to guess what option the user might select next. 
### The layers
- The neural network has three layers: input, hidden and output, with each containing a number of neurons/nodes. The number of neurons in each layer must match the number of input and output values wanted.
The hidden layer aims to transform the inputs into something the output layer can use. It manipulates the input values to give the outputs that are likely being selected.


## Available Scripts
### `npm start`
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
### `npm test`
Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
### `npm run build`
Builds the app for production to the `build` folder.<br>
### `npm run eject`
**Note: this is a one-way operation. Once you `eject`, you can’t go back!**
If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.



### Resources
- https://skymind.ai/wiki/neural-network
- Fundamentals of Deep Learning (book)
- https://github.com/BrainJS/brain.js
- https://brain.js.org/
- https://scrimba.com/g/gneuralnetworks
- "AI, Machine Learning, & Deep Learning Explained in 5 Minutes"- Dhruv Shah
