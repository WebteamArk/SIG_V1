<?php

/**
 * @file sig_messages.variable.inc
 * @author Jacek Szmit
 */

/**
 * Implements hook_variable_info().
 */
function sig_messages_variable_info($options) {
  $variable['sig_messages_mail_[mail_part]'] = array(
    'title' => t('SIG Download confirmation mail'),
    'type' => 'mail_text',
    'group' => 'sig',
    'localize' => TRUE,
    'description' => t('Thank you message after email input in form.', array(), $options),
  );

  return $variable;
}

/**
 * Implements hook_variable_group_info().
 */
function sig_messages_variable_group_info() {
  $groups['sig'] = array(
    'title' => t('SIG'),
    'description' => t('Configure sig modules.'),
    'access' => 'administer sig messages',
    'path' => array('admin/config/sigmessages'),
  );

  return $groups;
}
