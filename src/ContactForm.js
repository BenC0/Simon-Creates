import React from 'react';

function ContactForm(props) {
	return [
		<div className="ContactForm">
			<link href="//cdn-images.mailchimp.com/embedcode/classic-10_7.css" rel="stylesheet" type="text/css" />
			<div id="mc_embed_signup">
				<form action="https://gmail.us2.list-manage.com/subscribe/post?u=615d5c374d3c7a5787b06d5ae&amp;id=739858e674" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" novalidate>
					<div id="mc_embed_signup_scroll">
						<h2>Subscribe</h2>
						<div className="indicates-required"><span className="asterisk">*</span> indicates required</div>
						<div className="mc-field-group">
							<label for="mce-NAME">Name  <span className="asterisk">*</span>
							</label>
							<input type="text" value="" name="NAME" className="required" id="mce-NAME" />
						</div>
						<div className="mc-field-group">
							<label for="mce-EMAIL">Email  <span className="asterisk">*</span>
							</label>
							<input type="email" value="" name="EMAIL" className="required email" id="mce-EMAIL" />
						</div>
						<div className="mc-field-group">
							<label for="mce-QUERY">What can I help you with? </label>
							<input type="text" value="" name="QUERY" className="" id="mce-QUERY" />
						</div>
						<div id="mce-responses" className="clear">
							<div className="response" id="mce-error-response"></div>
							<div className="response" id="mce-success-response"></div>
						</div>

						<div aria-hidden="true">
							<input type="text" name="b_615d5c374d3c7a5787b06d5ae_739858e674" tabindex="-1" value="" />
						</div>
						<div className="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" /></div>
					</div>
				</form>
			</div>
		</div>
	]
}

export default ContactForm;
