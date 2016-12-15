<?php
/**
 * variables:
 *  - $surname
 *      Lastname from ask us form
 */
global $base_url, $base_path;
$assets_path = $base_url . $base_path . drupal_get_path ( 'theme', 'sig' ) . '/mail_assets/askus/';
?>
<html>
<head>
<!-- If you delete this tag, the sky will fall on your head -->
<meta name="viewport" content="width=device-width" />

<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />


<style type="text/css">


</style>

</head>

<body bgcolor="#FFFFFF" width="100%">

	<!-- BODY -->
	<table class="body-wrap" style="max-width: 100%;">
		<tr>
			<td></td>
			<td class="container" bgcolor="#FFFFFF">

				<div class="content">
					<table>
						<tr>
							<td>
								<p>
									
								</p>
							</td>
						</tr>
						<tr>
							<td>
								<p>
									Sehr geehrte (r) Frau / Frau<?php print $surname; ?><br />
									Wir haben Ihre Frage erhalten. Vielen Dank.<br />
                                   					Sie werden bald von einem unserer Mitarbeiter von SIG Air Handling kontaktiert.<br />							
								</p>
							</td>
						</tr>
						<tr>
							<td>
								
							</td>
						</tr>
						<tr>
							<td>
								<p>
									Mit freundlichen Grüßen ,<br />SIG Air Handling
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
					&copy; 2016 SIG Air Handling. Alle Rechte vorbehalten.<br />Unsere Postanschrift lautet: info@sigairhandling.com
				</p>
			</td>
		</tr>
	</table>
	<!-- /FOOTER -->
</body>
</html>