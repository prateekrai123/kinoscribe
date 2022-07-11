import React from 'react'
import './Services.css';
const Services = () => {
  return (
    <section class="services">

	<div class="s-heading">
	<h1>Ser<font color="#FFDD59">vic</font>es</h1>
	<p>We Provide The Best In Class Servies For Our Customers</p>
	</div>

	<div class="s-box-container">

	<div class="s-box">

	<div class="bar"></div>

	<img alt="1" src="images/1.png" />

	<h1>Spend Money</h1>

		<p>Track on your all daily expense and make your day to life easier.</p>

	<a class="s-btn" href="#">More</a>
	</div>
		
	<div class="s-box">

	<div class="bar"></div>

	<img alt="2" src="images/2.png" />

	<h1>Set Budget</h1>

		<p>Make a Budget That Fit Right With You And Can Do Most With It</p>

	<a class="s-btn" href="#">More</a>
	</div>

	<div class="s-box">

	<div class="bar"></div>

    <img alt="2" src="images/2.png" />
	<h1>Security</h1>

		<p>We Store All Card Info And Money Safe To Make You Relax And Crazy</p>
	<a class="s-btn" href="#">More</a>
	</div>
	</div>
	</section>
  )
}

export default Services