# Build a Weather App!

<img src="https://media.giphy.com/media/za5xikuRr0OzK/giphy.gif" />

### Open Weather API

1. We'll use the OpenWeatherMap API to look up weather data. Get your API key here: https://home.openweathermap.org/users/sign_up.
1. Use this sort of URL to query weather data: https://api.openweathermap.org/data/2.5/weather?zip=THE_USERS_ZIP_CODE_HERE,us&units=imperial&appid=YOUR_API_KEY_HERE
- Note you'll have to supply your API key as well as the zip code the user has input.

## Requirements:

### Step 1:

- Create a `components` directory with `Input.jsx` and `WeatherCard.jsx`.
- Create a `services` directory, and inside create a `weather.js` file. So far we've been making API calls directly into our components and this approach is fine for small applications, however as our projects grow in size and complexity, we need to add structure to our files. In addition this structure helps to maintain, track bugs and make the code run well.

**The main change here is that our Axios call has been extracted from the rest of our React files and placed in a services directory.**

React doesn't have opinions on how directories and files should be organized, however there are a few common conventions for structuring our application. It is common practice to group files either by similarity or by features. In this particular case we will group similar files together. Our file structure should look like this: 

```
src 
  components
    Input.jsx
    WeatherCard.jsx
  services
    weather.js
```


### Step 2:

- In `weather.js`: 
   1. Import axios on the top and don't forget to define an `apiKey` variable.
   2. Create a method (using arrow function declaration) `fetchData()` that takes `inputValue` as a parameter. This method will make an Axios call (interpolating the `inputValue`) to the Open Weather Api and **return** the response. Remember that the actual data we need will be nested inside the response object.
   3. In order to be able use this method in `App.js` we will have to export it. Simply add the word `export` in front of the `const` keyword.
   
      - EXAMPLE:
      
      ```weather.js
	   export const fetchData = async (inputValue) => {
	      // your axios call 
	      // your return 
	   }
      ```

### Step 3: 
`Input.jsx` is a functional component that returns a `<form>` and within that form **include** `<h1>` tag with a short title, `<input>` tag with the following attributes: type as `text` and another `<input>` tag with attribute type as `submit`. Feel free to set your placeholder attribute to whatever string you feel like.
	```
	<input type="text" placeholder="Your Zipcode..."/>
        <input type="submit" />
	```


### Step 4: 
1. Head back over to your `App.js` component and convert it into a class component.  Define its inital state: 

```
constructor(props) {
    super(props)
    this.state = {
      weatherData: {},
      value: ''
    }
  }
 ```
 
 `weatherData` is where we're going to store the response data from our api call and `value` is where we will keep track of what is being inserted into our input field. This is going to seem super weird at first, so try not to worry about it.
 
 2. Import `fetchData()` method we defined in `weather.js`. 
 ` import { fetchData }  from './services/weather'`.
 
 3. We need to keep track of what's in the input field so that its value can be interpolated into the api call. Because we can't easily send that information back up from a child component we are going to write a function to set it in state. 
 
 (SOMEONE RAISE A HAND AND ASK A LOT OF QUESTIONS ABOUT THIS PLEASE).
 
 Define a function `handleChange()` that takes an `event` as a parameter. This function will `setState()` of our state `value` variable. Here is what it looks like:
 
 
 ```
 handleChange = (event) => {
    this.setState({
      value: event.target.value
    });
  }
  ```

4. Define an async arrow `handleSubmit()` function that takes an `event` as a parameter. Inside this function:
  - call `preventDefault()` on the `event` passed in
  - call `fetchData()` and pass it the whatever is currently set to our state `value` variable.
  - `setState()` the `weatherData` state variable to the response.

### Step 5
Props time!

Your `WeatherCard.jsx` component should accept props that are passed down from `weatherData` in state. Render the appropriate data accordingly.

We are going to pass the `Input.jsx` component our two functions, both handleSubmit and handleChange, in the form of props as well.


### Step 5
`Input.jsx` now has access to the two functions we created in `App.js`! But how to use them?
    - add `onChange`, a special attribute that acts like the event listerners we used in Unit 1, to the text input and assign it the `handleChange` function we passed as props. Remember to access it like you would any other prop.
    
`onChange` passes the event to our function automatically, so we don't need to insert it as an argument. In fact, we don't even need parentheses at all! How strange!



**Bonus**
- Add a five day forecast with their [5 day forecast endpoint](https://openweathermap.org/forecast5)
- Include the sunrise and sunset times (hint: maybe [Moment.js](https://momentjs.com/) will be helpful!) and some information about humidity, atmospheric pressure, etc.
- Use CSS Animation, images, etc. (think weather app)
- Leverage flexbox/grid and use media queries to build a mobile version
