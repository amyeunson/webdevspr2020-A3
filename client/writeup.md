How did you decide which APIs should be GET, POST, PUT and DELETE?  Use examples from your code
We thought of our bookLists to be the resource that our API verbs would be acting on. So our GET verb would be serving our lists. The POST verb would be adding a new book resource to the bookLists. PUT would be updating information of a current bookList item (ie. moving a book from 1 list to another) and DELETE would be removing a book item from the bookLists. In order to adhear to RESTful requirements, once the bookLists were updated, the GET API would need to be called in our thunk action to serve the updated bookLists to the frontend to render the most current information.

How is coding in Node.js different (easier, harder, different) than coding in React/Redux?
We found that it wasn't necessarily easier or harder to code in Node.js than React/Redux, but that it was just different. There was a bit more set up to get the front and back end to be able to communicate, whereas in React/Redux create-react-app did most of that work for us. It was helpful for us to brush up on callbacks since we were working with a 3rd party API and thunk middleware and more async calls were required.

Describe your data model
We have a lists object that holds 2 lists, toRead and heaveRead books. When the front end requests for the lists, this object is returned and saved in the Redux store. When any other API verb is called, this object is manipulated and saved to the backend, then our Redux store is updated with the booklist for our frontend to render for the user. Our searchedlist is fetched from the 3rd party Google Books API and saved in our redux store for the frontend to render.

Given more time, what additional features, functionality or design changes would you make
It would've been nice to have a login page and the ability to save books from session to session. It would've required a DB and a lot more work though. 

What assumptions, if any, did you make on this assignment?
We assumed that between the 2 lists, a book should only be present once.
