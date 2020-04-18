import { h, Component, createContext } from 'preact';
import { Router } from 'preact-router';
import { Link } from 'preact-router/match';

import './assets/styles/global.css';

// Routes
import Home from './routes/home.js';
import Form from './routes/form.js';
import FormSuccess from './routes/formSuccess';
import ChiSiamo from './routes/chiSiamo';

// Components
import { Dialog } from './components/dialog.js';
import { PWAPrompt } from './components/pwaPrompt';

export const Action = createContext({})

export default class App extends Component {

	state = {
		results: {},
		isHomepage: true,
    isChiSiamo: false,
		isPopupOpen: false,
		popupNumbers: [],
	}

	handleRoute = e => {
		this.currentUrl = e.url;
		this.setState({ isHomepage: e.url.replace(/\?.*/g, "") === "/" });
	};

	setPopupNumbers = (e, numberArray) => {
		e.preventDefault();

		this.setState({
			popupNumbers: numberArray,
			isPopupOpen: true
		})
	}

	closePopup = (e) => {
		if (e.currentTarget === e.target) {
			this.setState({ isPopupOpen: false })
		}
	}

	componentDidMount() {
		fetch(`${process.env.PREACT_APP_DATA_SOURCE}`)
			.then(r => r.json())
			.then(json => {
				this.setState({
					results: json,
					resultBkp: json
				});
			});
	}

	componentDidUpdate() {
		const { isPopupOpen } = this.state;

		const root = document.documentElement;
		root.style.setProperty('--popup-visible', isPopupOpen ? 'hidden': 'initial')
	}

	render(props, { isHomepage, isChiSiamo, results, popupNumbers, isPopupOpen }) {
		return (
			<Action.Provider value={{setPopupNumbers: this.setPopupNumbers}}>
				<div id="app" class="px-5 max-w-screen-md mx-auto">
					<nav class="flex justify-center md:justify-end items-center">
						{
							isHomepage
								? ''
								: <Link class="m-5 bg-blue-500 inline-block hover:bg-blue-700 text-white font-bold px-2 py-1 rounded" href="/">Ritorna alla ricerca</Link>
            }
					</nav>
					<h1 class="font-sans text-4xl md:text-5xl pt-10 text-gray-800 text-center capitalize">
						<span class="block sm:inline-block" role="img" aria-label="biker">
							🚴
						</span>
						{`${process.env.PREACT_APP_CITY} a Domicilio`}
					</h1>
					<Router onChange={this.handleRoute}>
						<Home path="/" results={results} />
						<Form path="/form" />
            <FormSuccess path="/form/success" />
            <ChiSiamo path="/chisiamo" />
					</Router>
				</div>
				<Dialog isOpen={isPopupOpen} closePopup={this.closePopup} telNumbers={popupNumbers} />
				<PWAPrompt />
			</Action.Provider>
		);
	}
}
