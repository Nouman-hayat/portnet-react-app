
import React, { useState} from "react";
import { Link } from "react-router-dom";



export default function Header() {

	
	const toggleSearchform = () => {
		document.getElementsByClassName("logo")[0].classList.add("hide");
		document.getElementById("navbar").classList.add("hide");
		document.getElementsByClassName("search-form")[0].classList.add("show");
		document.getElementById("search-input").focus();
	
	};
	const closebtn = () => {
		document.getElementsByClassName("logo")[0].classList.remove("hide");
		document.getElementById("navbar").classList.remove("hide");
		document.getElementsByClassName("search-form")[0].classList.remove("show");
		
	};

	const [navbarbartoggle, setnavbarbartoggle] = useState("navbar");
	const [toogleicon, settoogleicon] = useState("bi bi-list mobile-nav-toggle");
	const tooglemenu = (e) => {
		
		e.target.classList.contains("bi-list")
			? setnavbarbartoggle("navbar-mobile") ||
			  settoogleicon("bi bi-x mobile-nav-toggle")
			: setnavbarbartoggle("navbar") ||
			  settoogleicon("bi bi-list mobile-nav-toggle");
		
		
	}
  return (
		<div>
			<header id="header">
				<div className="container d-flex align-items-center">
					<Link to="/" className="logo me-auto">
						<img
							src="img/logo.png"
							alt=""
							className="img-fluid "
							id="header-logo"
						/>
					</Link>

					<nav id="navbar"  className={navbarbartoggle}>
						<ul>
							<li>
								<Link className="nav-link scrollto active" to="/">
									Home
								</Link>
							</li>
							<li>
								<Link className="nav-link scrollto" to="/propos">
									Propos
								</Link>
							</li>
							<li>
								<Link className="nav-link scrollto" to="/demo">
									Demo
								</Link>
							</li>

							<li>
								<Link className="nav-link scrollto" to="contact">
									Contact
								</Link>
							</li>
							<li>
								<i
									className="bi bi-search nav-link scrollto"
									id="only-search"
									onClick={toggleSearchform}
								></i>
							</li>
						</ul>

						<i className={toogleicon} onClick={tooglemenu} ></i>
					</nav>

					<form
						className="search-form row row-cols-lg-auto g-3 align-items-center mt-1"
						
					>
						<div className="col-12">
							<div className="input-group">
								<input type="text" className="form-control" id="search-input" />
								<button type="submit" className="btn">
									<i className="bi bi-search"></i>
								</button>
								<i className="bi bi-x-lg m-2" onClick={closebtn}></i>
							</div>
						</div>
					</form>
				</div>
			</header>
		</div>
	);
}
