import React, { useState } from "react";

export default function Demo() {
	const [form, setform] = useState(false);

	return (
		<div>
			<div className="demo-section-wrapper">
				<div className="container">
					<h1>A propos de Demo</h1>
					<h5>En savoir plus sur les KPI’s</h5>
					<p>
						Simplifier et accélérer les procédures et formalités pour l'entrée
						ou la sortie des marchandises ; la fluidité des marchandises est
						améliorée, le dédouanement accéléré et la transparence dans les
						relations Entreprises-Administrations accrue.Simplifier et accélérer
						les procédures et formalités pour l'entrée ou la sortie des
						marchandises ;
					</p>

					<div className="d-flex justify-content-center mt-5">
						<button className="btn" onClick={() => setform(!form)}>
							Demander une demo
						</button>
					</div>
					{form ? 
						<div id="demo-form-wrapper">
							<div className="custom-container">
								<div className="demo-form-inner-wrapper my-5">
									<div className="mb-3">
										<input
											type="text"
											className="form-control"
											placeholder="Nom"
										></input>
									</div>
									<div className="mb-3">
										<input
											type="text"
											className="form-control"
											placeholder="Prenom"
										></input>
									</div>

									<div className="mb-3">
										<input
											type="email"
											className="form-control"
											placeholder="Adresse mail"
										></input>
									</div>
									<div className="mb-3">
										<input
											type="text"
											className="form-control"
											placeholder="Profil"
										></input>
									</div>
									<div className="mb-3">
										<input
											type="text"
											className="form-control"
											placeholder="Entreprise"
										></input>
									</div>
									<div className="mb-3">
										<input
											type="text"
											className="form-control"
											placeholder="Taille de l’entreprise"
										></input>
									</div>
									<div className="mb-3">
										<input
											type="text"
											className="form-control"
											placeholder="Fonction"
										></input>
									</div>
									<div className="mb-3">
										<div className="d-grid gap-2">
											<button className="btn btn-primary" type="button">
												Envoyer
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					 : null}
				</div>
			</div>
		</div>
	);
}
