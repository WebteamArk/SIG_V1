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
									Dear Mr/Ms <?php print $surname; ?><br />
									We have received your question. Thank you.<br />
                                    You will be contacted by one of our SIG Air Handling employees soon.<br />							
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
					&copy; 2016 SIG Air Handling. All rights reserved.<br />Our mailing address is: info@sigairhandling.com
				</p>
			</td>
		</tr>
	</table>
	<!-- /FOOTER -->
</body>
</html>