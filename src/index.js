import React, { Component } from "react";
import ReactDOM from "react-dom";
import App from "./App";
// import NotFound from './NotFound'
// import {
// 	BrowserRouter,
// 	HashRouter,
// 	Routes,
// 	Route
// } from 'react-router-dom'

// ReactDOM.render(
// 	<HashRouter basename={process.env.PUBLIC_URL}>
// 		<Routes>
// 			<Route path="/" element={<App />}></Route>
// 			<Route path="*" element={<NotFound />}></Route>
// 		</Routes>
// 	</HashRouter>

// 	, document.getElementById('root')
// )

ReactDOM.render(<App />, document.getElementById("root"));
