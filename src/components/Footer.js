import React from 'react'
import { Link } from 'react-router-dom';
export default function Footer() {
  return (
		<>
			<div id="footer">
				<div class="footer-newsletter">
					<div class="container">
						<div class="row justify-content-center">
							<div class="col-lg-6">
								<h4>Nouveau sur Portnet KPI ?</h4>
								<p>
									Inscrivez-vous à notre newsletter pour recevoir nos actualités
								</p>
							</div>
							<div class="col-lg-6">
								<form action="" method="post">
									<input
										type="email"
										name="email"
										placeholder="Entrer votre adresse émail"
									/>
									<input type="submit" value="Subscribe" />
								</form>
							</div>
						</div>
					</div>
				</div>

				<div class="footer-top">
					<div class="container">
						<div class="row justify-content-center align-items-lg-start">
							<div class="col-lg-3 col-md-6 footer-contact">
								<Link to="/" class="logo me-auto">
									<img src="img/logo.png" alt="" class="img-fluid" />
								</Link>
							</div>

							<div class="col-lg-3 col-md-6 footer-links">
								<ul>
									<li>
										<i class="bx bx-chevron-right"></i>
										<Link to="/">Home</Link>
									</li>
									<li>
										<i class="bx bx-chevron-right"></i>
										<Link to="/propos">propos</Link>
									</li>
									<li>
										<i class="bx bx-chevron-right"></i>
										<Link to="/demo">Demo</Link>
									</li>

									<li>
										<i class="bx bx-chevron-right"></i>
										<Link to="contact.html">Contact</Link>
									</li>
								</ul>
							</div>

							<div class="col-lg-3 col-md-6 footer-links">
								<h4>Informations de Contact</h4>
								<ul>
									<li>
										<p>
											Enceinte Portuaire, Bâtiment de la Capitainerie, 2ème
											étage Port de Casablanca, 20000 Casablanca, Maroc
										</p>
									</li>
								</ul>
							</div>

							<div class="col-lg-3 col-md-6 footer-links">
								<h4>
									<a href="mailto:sales@portnet.ma">sales@portnet.ma</a>
								</h4>
								<p>Tel : 022 457 890</p>
								<div class="footer-image">
									<img src="img/playstore.png" alt="" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="footer-end">
				<div class="container">
					<div class="row">
						<div class="col-md-2">
							<Link href="">©2021portnet.ma </Link>
						</div>
						<div class="col-md-2">
							<Link href="">Politique de cookies</Link>
						</div>
						<div class="col-md-2">
							<Link href="">Conditions générales </Link>
						</div>
						<div class="col-md-2">
							<Link href="">Politique de confidentialité </Link>
						</div>
						<div class="offset-md-2 col-md-2">
							<Link href="">Voir Portail Fédérateur </Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
