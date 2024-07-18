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