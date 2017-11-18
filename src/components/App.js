import React from 'react';
import Main from './Main';
import Header from './Header'

class App extends React.Component {

	render() {
		return (
			<div className="schennum-blog">
				<Header />
				<Main />
				<footer className="page-footer">
					<div className="footer-copyright">
						<div className="container">
							© 2017 Michael Schennum
							<a className="grey-text text-lighten-4 right" href="#!"><i className="material-icons">email</i></a>
						</div>
					</div>
        		</footer>
			</div>
		)
	}
}

export default App;