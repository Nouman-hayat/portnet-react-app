import React from "react";

export default function Propos() {
	return (
		<div>
			<section id="hero" className="d-flex align-items-center">
				<div className="container">
					<div className="row">
						<div
							className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1"
							data-aos="fade-up"
							data-aos-delay="200"
						>
							<h1>Lorem ipsum dolor </h1>
							<h2>
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla
								ipsa omnis eos similique nesciunt quod natus a reiciendis velit
								commodi cupiditate reprehenderit hic dignissimos iure, ad nisi
								culpa aperiam maxime?
							</h2>
						</div>
						<div
							className="col-lg-6 order-1 order-lg-2 hero-img"
							data-aos="zoom-in"
							data-aos-delay="200"
						>
							<img
								src="img/pana.png"
								className="img-fluid animated"
								alt=""
							></img>
						</div>
					</div>
				</div>
			</section>

			<section id="hero" className="d-flex align-items-center my-3">
				<div className="container">
					<div className="row">
						<div
							className="col-lg-8 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1"
							data-aos="fade-up"
							data-aos-delay="200"
						>
							<h1>Lorem ipsum dolor </h1>
							<h2>
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla
								ipsa omnis eos similique nesciunt quod natus a reiciendis velit
								commodi cupiditate reprehenderit m ipsum, dolor sit nesciunt
								quod natus a reiciendis velit commodi cupiditate reprehenderit
								hic dignissimos iure, ad nisi culsa omnis eos similique nesciunt
								quod natus a reiciendis ve amet consectetur adipisicing elit.
								Nulla ipsa omnis eos similique nesciunt quod natus a reiciendis
								velit commodi cupiditate reprehenderit hic dignissimos iure, ad
								nisi culsa omnis eos similique nesciunt quod natus a reiciendis
								velit commodi cupiditate reprehenderit hic dignissimos iure, ad
								nisi cul aperiam maxime?
							</h2>
						</div>
					</div>
				</div>
			</section>

			

			<section className="contact-info-wrapper">
				<div className="container">
					<div className="row">
						<div className="col-md-6">
							<div className="card mb-3">
								<div className="row g-0">
									<div className="col-md-4">
										<i className="bi bi-headset"></i>
									</div>
									<div className="col-md-8">
										<div className="card-body">
											<h5 className="card-title">Assitance</h5>
											<p className="card-text">
												Lorem ipsum dolor sit amet consectetur, adipisicing
												elit. Nihil, a eius quae cum sequi voluptates?
											</p>
											<button className="btn"> Contactez-nous</button>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-6">
							<div className="card mb-3">
								<div className="row g-0">
									<div className="col-md-4">
										<i className="bi bi-envelope"></i>
									</div>
									<div className="col-md-8">
										<div className="card-body">
											<h5 className="card-title">Newsletter</h5>
											<p className="card-text">
												Lorem ipsum dolor sit amet consectetur, adipisicing
												elit. Nihil, a eius quae cum sequi voluptates?
											</p>
											<button className="btn"> Inscrivez-vous</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
