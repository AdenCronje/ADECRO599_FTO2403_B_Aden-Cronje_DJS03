#### Tasks

1. **Code Analysis**: Start by understanding the current implementation of the "Book Connect" application, including its HTML structure and JavaScript functionality.
2. **Plan Refactoring**: Identify sections of the code that can be made more abstract and modular. Look for patterns and repetitive code that can be simplified.
3. **Implement Abstraction**:
   - **Objects**: Define objects to represent key elements of the application, such as books, authors, and genres. Utilise the provided data (e.g., `authors`, `genres`, `books`) to populate these objects.
   - **Functions**: Create functions that handle repetitive tasks, such as rendering the book list, handling user interactions, and applying filters.
4. **Enhance Functionality**: Ensure that the application remains fully functional after refactoring. Test all features to confirm that users can still search, filter, and view books as intended.
5. **Documentation and Comments**: Throughout the refactoring process, document your code. Provide comments that explain the purpose and functionality of objects and functions.
6. **Adherence to Styleguides**: Ensure your code follows JavaScript and HTML coding standards and best practices for readability and maintainability.

### Notes on repeating code and where possible changes can be made:
*Lines 36 to 40: is the first instance of "for" loop to log books genre and authour, but is reapeated again in lines 51 to 55.
*Lines 60 to 67
*lines 79 to 98  
*Lines 101 to 115: possible function could be implemented
*Create a function to create new elements
<!-- function createElement(type){
   retrn document.createElement(type)
} -->
*Make an object for all querySelectors
<!-- const getElementObject ={
genreElement = document.createElement("option)
} -->
*Functions for each document.createFragment
*Can change day and night styling 

What I learnt:
-Learned how it's important to keep your codebase as neat and readable as possible, to prevent bugs and just make it easier to see what going on.
-I've also learnt how it's also maybe a good idea to put certain functions in there own files to further abstaract.

Challenges:
-Learning how to create a web component
- Using classes


// // Creates html element to display a book and all it's relevant data
// class CreateCustomButton extends HTMLElement {
//   constructor() {
//     super();
//     this.attachShadow({ mode: "open" });
//   }

//   connectedCallback() {
//     const id = this.getAttribute("data-preview");
//     const author = this.getAttribute("data-author");
//     const image = this.getAttribute("data-image");
//     const title = this.getAttribute("data-title");

//     const element = createNewElements("button");
//     element.setAttribute("data-preview", id);

//     element.innerHTML = `
//     <img class="preview__image" src="${image}"/>

// <div class="preview__info">
// <h3 class="preview__title">${title}</h3>
// <div class="preview__author">${author}</div>
// </div>
//     `;
//   }
// }
// customElements.define("custom-button", CreateCustomButton);