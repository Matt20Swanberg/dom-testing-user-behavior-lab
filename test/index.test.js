/**
 * @jest-environment jsdom
 */

const {
    addElementToDOM,
    removeElementFromDOM,
    simulateClick,
    handleFormSubmit
} = require('../index.js')

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
    const container = document.getElementById('dynamic-content');
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
    const clickComment = 'Hello World'
    const container = document.getElementById('dynamic-content');
    expect(container).not.toBeNull();
    expect(container.innerHTML).toBe('');
    simulateClick('dynamic-content', clickComment);
    expect(container.innerHTML).toBe(clickComment);

})

test('handleFormSubmit updates the page when the form input contains valid text', () => {
    const formInput = 'Hello World'
    const container = document.getElementById('dynamic-content');
    const errorMessage = document.getElementById('error-message');
    expect(container).not.toBeNull();
    expect(errorMessage.innerHTML).toBe('');

    document.getElementById('user-input').value = formInput;
    handleFormSubmit('user-form', 'dynamic-content');
    expect(container.innerHTML).toBe(formInput)
    expect(errorMessage.classList).toContain('hidden')

})

test('handleFormSubmit displays the error message Input cannot be empty when the input is empty', () => {
    const container = document.getElementById('dynamic-content');
    const formInput = document.getElementById('user-input');
    formInput.value = ' ';
    const errorMessage = document.getElementById('error-message');

    expect(container).not.toBeNull();
    expect(formInput).not.toBeNull();
    expect(formInput.value).toBe(' ')
    expect(errorMessage.innerHTML).toBe('');
    expect(errorMessage.classList).toContain('hidden');

    handleFormSubmit('user-form', 'dynamic-content');
    expect(container.innerHTML).toBe('');
    expect(errorMessage.innerHTML).toContain('Input cannot be empty')
    expect(errorMessage.classList).not.toContain('hidden')
})
