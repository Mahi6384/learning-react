1. Finish What you Begin
2. Do a little more than you think you can
3. Do a little better than you thinfk you can

# Notes

# Project 4 - Pics

It is a project in which we learn :-

1.  How to get feedback from the user ?
2.  How to fetch data form an outside API ?
3.  How do we show lists of records ?

## Application Overview

There are two version of the app one is v1 and another is v2.
In this project we are going to write a term and press enter
then we are going to show a list of images on the screen to the user.
In v1 the images will show in the straight line
and in v2 the list will show horizontally and also vertically

## App Challanges

1. Need to get a search term from the user.
2. Need to use that search term to make a request to an out side API and fetch data.
3. Need to take the fetch images and show them on the screen in a list.

## 1. Component Hierarchy

---

**App Component**

- SearchBar
- ImageList

---

- In searchbar we use class component because we need state.
- We use sementic.css for the styling.
- By giving some classname, we get a much nicer styled search bar .

---

Made an event handler
called oninputChange in the SearchBar and pass a prop down to the input.

- **We do not put a set of parantheses whenever we pass a callback function to an event handler. By leaving off the parantheses , we are passing a reference to a function, to the input element so that the input can call that function at some point of time in the future.**

- By _event.target.value_, we get the text of the input

---onChange={(e) => this.setState({ term: e.target.value }

Converted uncontrolled element to a controlled one using state

## Flow of Controlled Element

1. User types in input.
2. Callback gets invoked.
3. We call setState with the new value.
4. Component rerenders.
5. Input is told what its value is(coming from state).

**In Older Version(Before refactor to controlled)**
React component had'nt any idea whatsover what is the value of the input was, during all other periods of time source of data was inside on html document.

**After Refactor to controlled**

But in controlled element the value is inside of react component,we dont have to look at the DOM

- certain operators get reslly easy when we start using controlled elements.

---

## video 89 --

whenever we press enter the page used to refresh automatically (its the default behaviour of an form element). To disable the defaullt behaviour, we add a event handler under the prop name "onSubmit" in the form element and then reference a callback method inside of here called this.onFormSubmit withour parantheses("()").
after this we put an event handler and pass
**event.preventDefault();**
this line of code prevent the default behaviour of the form element.
When we console log(this.state.term)
we got the error called :-
**Cannot read property 'state' of undefined**

# video 90

undefined is value inside of javascript
If we ever try to access a property of undefined like undefined.state, we are going to get the same error msg
**Cannot read property 'state' of undefined**

**The root issue behind this problem is:-** that javascript for some reason thinks thet inside onFormSubmit function "this" is not equals to our instance of the searchbar class instead it thinks thet this is equals to the value undefined.\

- To understand the issue, we must first understand :

1. What is 'this' used for in a class ?
2. How is the value of 'this' determined in a function ?

nm,mhhgyutgyuhjnijmnjinjini nk

## Instance of SearchBar

---

state

---

render

---

onformSubmit

---

this

---

This is a reference back to the class itself,
if I say this.state then I can get get direct access to state.
Any time we want to figure out what the value of this is going to be inside of a function, we don't look at the function, we look at where the function is called, we look at the left of the dot when the function gets called.

## code start

---

    class Car{
      setDriveSound(sound){
        this.sound = sound;
      }
       drive(){
         return this.sound;
      }
       }

     const car = new Car();
     car.setDriveSound('vroom');

     const truck = {
     sound: 'putputput',
     drivemytruck:car.drive
     }
     truck.drivemytruck();

---

## code end

    class Car{
      setDriveSound(sound){
        this.sound = sound;
      }
       drive(){
         return this.sound;
      }
       }

     const car = new Car();
     car.setDriveSound('vroom');

    const drive = car.drive;
     drive();

**here when we call drive we get the same error **

## Video 91 :- Solving Context Issues

there are many methods to solve this problem but some of them are:-

### 1. Bind Method:- In this method we create an cunstructor function, dont need to call super .One way we can solve this is by binding the drive function :-

    class Car{
      constructur(){
        this.drive = this.drive.bind(this)
      }
      setDriveSound(sound){
        this.sound = sound;
      }
       drive(){
         return this.sound;
      }
       }

     const car = new Car();
     car.setDriveSound('vroom');

    const drive = car.drive;
     drive();

### The second way is that we can convert the function into an arrow function one good thing about arrow function is that it automatically bind the function :-

```
    onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit(this.state.term)
};
```

### Third way is thet we can pass a arrow function directly into the onchange prop:-

    onSubmit={(event) => this.onFormSubmit(event)}

just like so....

## Video 92

What is unsplash API ?

Unsplash API is an pawerful photo engine.

Its not the work of react to make request over to unsplash API. **All the code inside of react** is like showing html to our user or **showing content to our user**

- Axois is a standerd third party package that can be easily installed into a react project using npm
- Axois handles network request in a very predictable fashion.

- Fetch is a function built into modern browsers.With it we dont have to install any third party package which means that our final application size is smaller if we use of fetch
- But it is a far more basic and a lower level function to use to fetch data

## Getting Access to unsplash API

    axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization: "Client-ID NRS_NkDXTr4GIainGzxYzxFos10rMTn4Ny1tbmflPfU",
      },
    });

## Flow chart of what's gonna happen

1.  Component renders itself one time with no list of images
2.  onSearchSubmit method called
3.  request method to unsplash

4.  wait.....
5.  Request complete
6.  Set image data on state of App component
7.  App component rerenders and shows images

## There are two ways to get a list of images

1. .then funtion :-

```
class App extends React.Component {
  onSearchSumbit(term) {
    const response = axios
      .get("https://api.unsplash.com/search/photos", {
        params: { query: term },
        headers: {
          Authorization:
            "Client-ID NRS_NkDXTr4GIainGzxYzxFos10rMTn4Ny1tbmflPfU",
        },
      })
      .then((response) => {
        console.log(response.data.results);
      });
  }
```

2.  async await method:-

```
class App extends React.Component {
 async onSearchSumbit(term) {
    const response = await axios
      .get("https://api.unsplash.com/search/photos", {
        params: { query: term },
        headers: {
          Authorization:
            "Client-ID NRS_NkDXTr4GIainGzxYzxFos10rMTn4Ny1tbmflPfU",
        },
      });

        console.log(response.data.results);

  }
```

- Any time we want a state property to eventually contain an array ,we always initialize it with an empty array because it allows us to call certain functiuon on the state property.

\*map is a built in funtion in javascript array.

axios.create method creates an instance of axios client with a couple of defaulted properties.It allows us to create a customize copy of it.

## Mapping Syntax

```
const numbers = [0,1,2,3,4];
  numbers.map((num) => {
  return num*10;
});
OR
const numbers = [0,1,2,3,4];
  numbers.map(num => num*10)

```
** We only have to assign the key to the root element that we are returning inside of the map statement **
## React Refs
* Gives access to a single DOM element,that is rendered by a component.
To create a ref , we calls a function inside the constructor to create a reference and assign it as a instance variable in a class.
We can , in theory, assign references to the state of our component but it's not really required beacause they are not going to change over time and we are not going to call set state with the ref.
__We create refs in the constructos, assign them to instance variable, then pass to a perticular JSX element as props.__
How to create React Refs- We call React.createRef() and assign it into to some instance variable

