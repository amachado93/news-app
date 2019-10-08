# Build a Weather App!

<img src="https://media.giphy.com/media/za5xikuRr0OzK/giphy.gif" />

### Open Weather API

1. We'll use the OpenWeatherMap API to look up weather data. You already have API key(revisit open-weather-api repo and the homework you've completed) or check your email.
1. Use this sort of URL to query weather data: https://api.openweathermap.org/data/2.5/weather?zip=THE_USERS_ZIP_CODE_HERE,us&units=imperial&appid=YOUR_API_KEY_HERE
- Note you'll have to supply your API key as well as the zip code the user has input.

## Requirements:

### Step 1:

- Create a component that will get user input through a form.
- Import your component into `App.jsx`.
- Have your form component render on the page.

### Step 2:

- In `App.jsx`, create a method that makes an axios call to the api using the user's input and sets the return data in state.
	- Remember that the actual data we need will be nested inside the response object.
- Pass the method down to your form component through props.

	- EXAMPLE:

	```js
	class App extends Component {
		...
		fetchData = () => {
			/*fetching data stuff */
		}

		render() {
			...
			<NewFunComponent fetchData={this.fetchData} />
			...
		}
	}
	```

- Have the method run when the form submits.
	- Once your form submits, check the state with the react dev tools to make sure that you have the correct data there. You can always through a debugger inside the method that makes your api call.

	- EXAMPLE

	```js
	class NewFunComponent extends Component {
		return (
			<form onSubmit={this.props.fetchData}/>
				...
			</form>
		)
	}
	```

### Step 3:

- Create a new component that will show the data from props.
- Import your component into `App.jsx`.
- Call your new component under the form component and pass it the weather data from state.

**Bonus**
- Add a five day forecast with their [5 day forecast endpoint](https://openweathermap.org/forecast5)
- Include the sunrise and sunset times (hint: maybe [Moment.js](https://momentjs.com/) will be helpful!) and some information about humidity, atmospheric pressure, etc.
- Use CSS Animation, images, etc. (think weather app)
- Leverage flexbox/grid and use media queries to build a mobile version
