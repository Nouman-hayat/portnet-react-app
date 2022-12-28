import React from "react";

export default function Contact() {
	return (
		<>
			<section id="hero" className="d-flex align-items-center">
				<div className="container">
					<div className="row">
						<div
							className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1"
							data-aos="fade-up"
							data-aos-delay="200"
						>
							<h1>Contactez-nous</h1>
							<h2>
								Notre centre de relation client est à votre disposition tout au
								long de vos démarches
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

			<div className="contact-detail-wrappper">
				<div className="container">
					<div className="row">
						<div className="col-md-4">
							<div className="contact-details-inner">
								<h5>PORTNET S.A.</h5>
								<p>
									Enceinte Portuaire, Bâtiment de la Capitainerie, 2ème étage
									Port de Casablanca, 20000 Casablanca, Maroc
								</p>
							</div>
						</div>
						<div className="col-md-4">
							<div className="contact-details-inner">
								<h5>PORTNET S.A. Offres et services:</h5>
								<p>
									Email:
									<a href="mailto:sales@portnet.ma">sales@portnet.ma</a>
								</p>
								<p>
									Tél: <a href="tel:+212 520 473 102">+212 520 473 102</a>
								</p>
							</div>
						</div>
						<div className="col-md-4">
							<div className="contact-details-inner numbers">
								<p>
									Tél :<a href="tel:+212 520 473 102">+212 520 473 102</a>
								</p>
								<p>
									Fax :<a href="tel:+212 520 473 101">+212 520 473 101</a>
								</p>
								<p>
									Email :
									<a href="mailto:contact@portnet.ma">contact@portnet.ma</a>
								</p>
								<p>
									Site web :
									<a href="http://www.portnet.ma">http://www.portnet.ma</a>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
