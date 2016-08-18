<?php

/**
 * @file sig_messages.variable.inc
 * @author Jacek Szmit
 */

/**
 * Implements hook_variable_info().
 */
function sig_messages_variable_info($options) {
  $variable['sig_messages_case_mail_subject'] = array(
    'title' => t('Case download mail subject'),
    'type' => 'string',
    'group' => 'sig',
    'localize' => TRUE,
    'description' => t('Case Thank you mail subject.', array(), $options),
  );
  $variable['sig_messages_download_mail_subject'] = array(
    'title' => t('Downloadcenter mail subject'),
    'type' => 'string',
    'group' => 'sig',
    'localize' => TRUE,
    'description' => t('Downloadcenter Thank you mail subject.', array(), $options),
  );
  $variable['sig_messages_download_after_mail_subject'] = array(
    'title' => t('Downloadcenter after 7 days mail subject'),
    'type' => 'string',
    'group' => 'sig',
    'localize' => TRUE,
    'description' => t('Downloadcenter after 7 days mail subject.', array(), $options),
  );
  $variable['sig_messages_ask_us_mail_subject'] = array(
    'title' => t('Downloadcenter ask us mail subject'),
    'type' => 'string',
    'group' => 'sig',
    'localize' => TRUE,
    'description' => t('Downloadcenter ask us mail subject.', array(), $options),
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
