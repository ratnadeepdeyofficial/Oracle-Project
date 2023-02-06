import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Cart from '../Components/Cart';
import Gallery from '../Components/Gallery';
import ProductDetail from '../Components/ProductDetail';
import Shop from '../Components/Shop';
import Home from '../Components/Home';
const RouterDOM = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/"><Home/></Route>
				<Route exact path="/cart"><Cart /></Route>
				<Route exact path="/gallery"><Gallery /></Route>
				<Route exact path="/productdetail"><ProductDetail /></Route>
				<Route exact path="/shop"><Shop /></Route>
				<Route exact path="/home"><Home /></Route>
				{/* <Route exact path="/typography"><Typography /></Route> */}
				{/* <Route exact path="/systemcolor"><SystemColor /></Route> */}
				{/* <Route exact path="/component"><Component /></Route> */}
			</Switch>
		</Router>
	);
}
export default RouterDOM;