import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "./../components/Header";

const NotFound = () => {
 const navigate = useNavigate()
	const GotoHere= () => {
		navigate("/")
	}
	return (
		<>
			<Header />
			<div className="container my-5">
				<div className="row justify-content-center align-items-center">
					{/* <h4 className="text-center mb-2 mb-sm-5"></h4> */}
					<img
						style={{
							width: "100%",
							height: "100%",
							objectFit: "fit",
						}}
						src="https://media2.giphy.com/media/XIahGhbK5A685fyr8D/200w.webp?cid=ecf05e47c23y09jna5v64qp7inqs7xha7lbs5s2iaf0dtg9j&rid=200w.webp&ct=g"
						alt="Not-found"
					/>
					<button onClick={GotoHere} className="col-md-3 col-sm-6 col-12 btn btn-success mt-5">

							Home page

					</button>
				</div>
			</div>
		</>
	);
};

export default NotFound;
