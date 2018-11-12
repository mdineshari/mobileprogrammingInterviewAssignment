Created the react app using create-react-app npm module.
Added the initial DOM structure in the App.js file with two child components such as InputTextArea & ResultArea.
Added both the component into the App.js passing required props into the appropriate child components.
In the InputTextArea component creating the Input text field and adding the onchange event for the text field and submit event for the form by calling the parent handlers from the props.
In the ResultArea component rendering the data from parent state using props and calling the parent's removeHandler from props.