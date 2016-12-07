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


<style type="text/css">

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
									<br />However, if you still have any questions, please don’t hesitate to contact us at info@sigairhandling.com.
									<br />One of our employees will be happy to help you.
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
					&copy; 2016 SIG Air Handling. All rights reserved.
					<br />Our mailing address is: info@sigairhandling.com.
				</p>
			</td>
		</tr>
	</table>
	<!-- /FOOTER -->

</body>
</html>