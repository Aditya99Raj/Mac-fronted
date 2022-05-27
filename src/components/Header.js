import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logOut } from "../Redux/Actions/userLoginAction";

const Header = () => {
	const cart = useSelector((state) => state.cart);
	const { cartItems } = cart;
	const userLogin = useSelector((state) => state.userLogin);
	const { error, loading, userInfo } = userLogin;
	const dispatch = useDispatch();

	const logoutHandler = () => {
		dispatch(logOut());

	};
	return (
		<div>
			<div className="header">
				<div className="container">
					{/* MOBILE HEADER */}
					<div className="mobile-header">
						<div className="container ">
							<div className="row ">
								<div className="col-6 d-flex align-items-center">
									<Link className="navbar-brand" to="/">
										<img
											alt="Home"
											src="https://img.freepik.com/free-photo/red-paint-wall-background-texture_53876-14184.jpg?size=626&ext=jpg&ga=GA1.2.1323437519.1653636990"
										/>
									</Link>
								</div>
								<div className="col-6 d-flex align-items-center justify-content-end Login-Register">
									{userInfo ? (
										<div className="btn-group">
											<button
												type="button"
												className="name-button dropdown-toggle"
												data-toggle="dropdown"
												aria-haspopup="true"
												aria-expanded="false"
											>
												<i class="fas fa-user"></i>
											</button>
											<div className="dropdown-menu">
												<Link
													className="dropdown-item"
													to="/profile"
												>
													Profile
												</Link>

												<Link
													className="dropdown-item"
													to="#"
													onClick={logoutHandler}
												>
													sign out
												</Link>
											</div>
										</div>
									) : (
										<div className="btn-group">
											<button
												type="button"
												className="name-button dropdown-toggle"
												data-toggle="dropdown"
												aria-haspopup="true"
												aria-expanded="false"
											>
												Hi
											</button>
											<div className="dropdown-menu">
												<Link
													className="dropdown-item"
													to="/login"
												>
													sign in
												</Link>

												<Link
													className="dropdown-item"
													to="/register"
												>
													sign up
												</Link>
											</div>
										</div>
									)}

									<Link
										to="/cart/:id?"
										className="cart-mobile-icon"
									>
										<i className="fas fa-shopping-bag"></i>
										<span className="badge">
											{cartItems.length}
										</span>
									</Link>
								</div>
								<div className="col-12 d-flex align-items-center">
									<form className="input-group">
										<input
											type="search"
											className="form-control rounded search"
											placeholder="Search"
										/>
										<button
											type="submit"
											className="search-button"
										>
											search
										</button>
									</form>
								</div>
							</div>
						</div>
					</div>

					{/* PC HEADER */}
					<div className="pc-header">
						<div className="row">
							<div className="col-md-3 col-4 d-flex align-items-center">
								<Link className="navbar-brand" to="/">
									<img
										alt="Home"
										src="https://media.istockphoto.com/photos/shopping-cart-full-of-food-isolated-on-white-grocery-and-food-store-picture-id1320617333?b=1&k=20&m=1320617333&s=170667a&w=0&h=z8wElxWwpMucQ7fFqTaslRoIzxidiXPpyxYgclF_ZZM="
									/>
								</Link>
							</div>
							<div className="col-md-6 col-8 d-flex align-items-center">
								<form className="input-group">
									<input
										type="search"
										className="form-control rounded search"
										placeholder="Search"
									/>
									<button
										type="submit"
										className="search-button"
									>
										search
									</button>
								</form>
							</div>
							<div className="col-md-3 d-flex align-items-center justify-content-end Login-Register">
								{userInfo ? (
									<div className="btn-group">
										<button
											type="button"
											className="name-button dropdown-toggle"
											data-toggle="dropdown"
											aria-haspopup="true"
											aria-expanded="false"
										>
											Hi , {userInfo.data.fullName}
										</button>
										<div className="dropdown-menu">
											<Link
												className="dropdown-item"
												to="/profile"
											>
												profile
											</Link>
											<Link
												className="dropdown-item"
												to="#"
												onClick={logoutHandler}
											>
												Logout
											</Link>
										</div>
									</div>
								) : (
									<>
										<Link to="/register">Register</Link>
										<Link to="/login">Login</Link>
									</>
								)}

								<Link to="/cart">
									<i className="fas fa-shopping-bag"></i>
									<span className="badge">
										{cartItems.length}
									</span>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
