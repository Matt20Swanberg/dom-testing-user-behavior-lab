const {
    addElementToDOM,
    removeElementFromDOM,
    simulateClick,
    handleFormSubmit
} = require('./index')

// Initializes testing state for a clean start 
beforeEach(() => {
    document.body.innerHTML = `
    <form id="user-form">
      <input type="text" id="user-input" />
    </form>
    <div id="dynamic-content"></div>
    <div id="error-message" class="hidden"></div>
  `
})

test('addElementToDOM adds content to the correct DOM element', () => {
    addElementToDOM('dynamic-content', 'Hello world')
    expect(container).not.toBeNull();
    
    expect(container.innerHTML).toBe('Hello world')
    expect(document.getElementById('error-message').innerHTML).toBe('')
})

test('removeElementFromDOM removes an existing element from the DOM', () => {
    expect(document.getElementById('dynamic-content')).not.toBeNull();
    removeElementFromDOM('dynamic-content')
    expect(document.getElementById('dynamic-content')).toBeNull();
})

test('simulateClick updates the DOM with the expected content', () => {
    simulate 
    const container = document.getElementById();
    expect(container).not.toBeNull()

    const error = document.getElementById('error-message')
    
})

test('handleFormSubmit updates the page when the form input contains valid text', () => {

})

test('handleFormSubmit displays the error message Input cannot be empty when the input is empty', () => {

})
