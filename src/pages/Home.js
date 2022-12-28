import React from "react";

export default function Home() {
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
							<h1>Portnet KPI</h1>
							<h2>
								Simplifier et accélérer les procédures et formalités pour
								l'entrée ou la sortie des marchandises ; la fluidité des
								marchandises est améliorée, le dédouanement accéléré et la
								transparence dans les relations Entreprises-Administrations
								accrue.Simplifier et accélérer les procédures et formalités pour
								l'entrée ou la sortie des marchandises ;
							</h2>
						</div>
						<div
							className="col-lg-6 order-1 order-lg-2 hero-img"
							data-aos="zoom-in"
							data-aos-delay="200"
						>
							<img
								src="img/Frame.png"
								className="img-fluid animated"
								alt=""
							/>
						</div>
					</div>
				</div>
			</section>

			<section id="services" className="services section-bg my-4">
				<div className="container" data-aos="fade-up">
					<div className="section-title">
						<h2>Les Plus</h2>
					</div>

					<div className="row mt-3">
						<div
							className="col-xl-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0 my-3"
							data-aos="zoom-in"
							data-aos-delay="200"
						>
							<div className="icon-box">
								<div className="icon">
									<div className="icon-image">
										<img src="./assets/images/Group 189.png" alt="" />
									</div>
								</div>

								<p>Une solution intuitive et ergonomique</p>
							</div>
						</div>
						<div
							className="col-xl-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0 my-3"
							data-aos="zoom-in"
							data-aos-delay="200"
						>
							<div className="icon-box">
								<div className="icon">
									<div className="icon-image">
										<img src="./assets/images/Group 63 (1).png" alt="" />
									</div>
								</div>

								<p>Collecte de donnees multi-source en temps reel</p>
							</div>
						</div>
						<div
							className="col-xl-4 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0 my-3"
							data-aos="zoom-in"
							data-aos-delay="300"
						>
							<div className="icon-box">
								<div className="icon">
									<div className="icon-image">
										<img src="./assets/images/Group 63 (1).png" alt="" />
									</div>
								</div>

								<p>Des tableaux de bord personnalises suivant votre besoin</p>
							</div>
						</div>

						<div
							className="col-xl-4 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0 my-3"
							data-aos="zoom-in"
							data-aos-delay="400"
						>
							<div className="icon-box">
								<div className="icon">
									<div className="icon-image">
										<img src="./assets/images/Vector.png" alt="" />
									</div>
								</div>

								<p>Suivi et pilotage de votre activite en temps reel</p>
							</div>
						</div>
						<div
							className="col-xl-4 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0 my-3"
							data-aos="zoom-in"
							data-aos-delay="400"
						>
							<div className="icon-box">
								<div className="icon">
									<div className="icon-image">
										<img src="./assets/images/Group (1).png" alt="" />
									</div>
								</div>

								<p>Gains d’efficacite et de performance</p>
							</div>
						</div>
						<div
							className="col-xl-4 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0 my-3"
							data-aos="zoom-in"
							data-aos-delay="400"
						>
							<div className="icon-box">
								<div className="icon">
									<div className="icon-image">
										<img src="./assets/images/Group 194.png" alt="" />
									</div>
								</div>

								<p>Une vue 360 pour des prises de decision fluides</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
