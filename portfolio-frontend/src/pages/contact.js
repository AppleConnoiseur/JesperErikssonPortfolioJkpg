import React from "react"
import Layout from "../components/Layout"

const contact = () => {
	return (
		<Layout>
			<section className="contact-page">
				<article className="contact-form">
					<h3>kontakta mig</h3>
					<form action="https://formspree.io/xnqgokpo" method="POST">
						<div className="form-group">
							<input
								type="text"
								placeholder="namn"
								name="name"
								className="form-control"
							/>
							<input
								type="email"
								placeholder="epost"
								name="email"
								className="form-control"
							/>
							<textarea
								name="message"
								rows="5"
								placeholder="meddelande"
								className="form-control"
							></textarea>
						</div>
						<button type="submit" className="submit-btn btn">
							Kontakta mig
			  			</button>
					</form>
				</article>
			</section>
		</Layout>
	)
}

export default contact
