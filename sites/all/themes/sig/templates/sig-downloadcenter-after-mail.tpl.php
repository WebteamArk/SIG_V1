<?php
/**
 * variables:
 *  - $surname
 *      Lastname from downloadcenter signup form
 */
global $base_url, $base_path;
$assets_path = $base_url . $base_path . drupal_get_path ( 'theme', 'sig' ) . '/mail_assets/downloadcenter1/';
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<!-- If you delete this tag, the sky will fall on your head -->
<meta name="viewport" content="width=device-width" />

<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>Downloadcenter</title>

<style type="text/css">
/* ------------------------------------- 
		GLOBAL 
------------------------------------- */
@import 'https://fonts.googleapis.com/css?family=Open+Sans';

* {
	margin: 0;
	padding: 0;
}

img {
	max-width: 100%;
}

.collapse {
	margin: 0;
	padding: 0;
}

body {
	-webkit-font-smoothing: antialiased;
	-webkit-text-size-adjust: none;
	width: 100% !important;
	height: 100%;
}

/* ------------------------------------- 
		ELEMENTS 
------------------------------------- */
a {
	color: #A70A2D;
	font-weight: bold;
	text-decoration: none;
}

span {
	display: inline-block;
	border-bottom: 1px solid #294754;
	padding-bottom: 10px;
}

.interimg {
	margin: 40px 0;
}

.largespacing {
	margin: 50px 0 0;
}

/* ------------------------------------- 
		BODY 
------------------------------------- */
table.body-wrap {
	width: 100%;
	margin: 0;
}

/* ------------------------------------- 
		FOOTER 
------------------------------------- */
table.footer-wrap {
	width: 100%;
	clear: both !important;
	font-family: 'Open Sans', sans-serif;
	background: rgba(41, 71, 84, 0.1);
	margin: 50px auto 0;
	text-align: center;
}

.footer {
	text-align: center;
	color: #294754;
	padding: 50px 0;
	font-size: 12px;
}

.footer a {
	color: #294754;
	font-weight: normal;
}

/* ------------------------------------- 
		TYPOGRAPHY 
------------------------------------- */
h1 {
	font-family: Arial;
	line-height: 1.1;
	margin-bottom: 15px;
	color: #294754;
	margin: 50px 0 30px;
	font-weight: 200;
	font-size: 18px;
	text-transform: uppercase;
	text-align: center;
}

.collapse {
	margin: 0 !important;
}

p {
	font-weight: normal;
	font-size: 12px;
	line-height: 1.6;
	color: #000000;
	font-family: Arial;
}

/* --------------------------------------------------- 
		RESPONSIVENESS
		Nuke it from orbit. It's the only way to be sure. 
------------------------------------------------------ */

/* Set a max-width, and make it display as block so it will automatically stretch to that width, but will also shrink down on a phone or something */
.container {
	display: block !important;
	max-width: 600px !important;
	margin: 0 auto !important; /* makes it centered */
	clear: both !important;
}

/* This should also be a block element, so that it will fill 100% of the .container */
.content {
	padding: 0;
	max-width: 600px;
	margin: 0 auto;
	display: block;
}

/* Let's make sure tables in the content area are 100% wide */
.content table {
	width: 100%;
	margin: 0;
}

/* Be sure to place a .clear element after each set of columns, just to be safe */
.clear {
	display: block;
	clear: both;
}

/* ------------------------------------------- 
		PHONE
		For clients that support media queries.
		Nothing fancy. 
-------------------------------------------- */
@media only screen and (max-width: 600px) {
	input {
		display: block !important;
		margin-bottom: 10px !important;
		background-image: none !important;
		margin-right: 0 !important;
	}
	div[class="column"] {
		width: auto !important;
		float: none !important;
	}
}
</style>

</head>

<body bgcolor="#FFFFFF">

	<!-- BODY -->
	<table class="body-wrap">
		<tr>
			<td></td>
			<td class="container" bgcolor="#FFFFFF">

				<div class="content">
					<table>
						<tr>
							<td>
								<p>
									<img src="/<?php print $assets_path; ?>downloadcenter.jpg" alt="ask us" />
								</p>
							</td>
						</tr>
						<tr>
							<td>
								<p class="largespacing">
									Dear Mr/Ms <?php print $surname; ?>
									<br />
									<br />You downloaded a brochure from our SIG Air Handling website a few days ago.
									<br />We hope that you were able to find the information you were looking for.
									<br />
									<br />However, if you still have any questions, please don’t hesitate to <a href="#" target="_blank">contact us</a>.
									<br />One of our employees will be happy to help you.
								</p>
							</td>
						</tr>
						<tr>
							<td>
								<p class="interimg">
									<a href="#" target="_blank"><img src="/<?php print $assets_path; ?>downloadcenter1.jpg" alt="view our cases" /></a>
								</p>
							</td>
						</tr>
						<tr>
							<td>
								<p>
									Kind regards,<br />SIG Air Handling
								</p>
							</td>
						</tr>
					</table>
				</div>

			</td>
			<td></td>
		</tr>
	</table>
	<!-- /BODY -->

	<!-- FOOTER -->
	<table class="footer-wrap">
		<tr>
			<td align="center">
				<p class="footer">
					&copy; 2016 SIG Air Handling. All rights reserved.
					<br />Our mailing address is: <a href="mailto:info@sigairhandling.com">info@sigairhandling.com</a>.
				</p>
			</td>
		</tr>
	</table>
	<!-- /FOOTER -->

</body>
</html>