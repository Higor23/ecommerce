<?php

/**
 * Shipping methods admin settings.
 *
 * @package Datadev_Jadlog/Admin/Settings
 */
if (!defined('ABSPATH')) {
    exit;
}

$suffix = defined('SCRIPT_DEBUG') && SCRIPT_DEBUG ? '' : '.min';
wp_enqueue_script('datadev-jadlog-for-woocommerce', plugins_url('assets/js/admin/shipping-methods' . $suffix . '.js', Datadev_Jadlog::get_main_file()), array('jquery'), DATADEV_JADLOG_VERSION, true);


$description = $this->get_method_description();

if (!empty($this->more_link)) {
    /* translators: %s: method title */
    $description .= ' <a href="' . esc_url($this->more_link) . '">' . esc_html(sprintf(__('More about %s.', 'datadev-jadlog-for-woocommerce'), $this->method_title)) . '</a>';
}

echo wp_kses_post(wpautop($description));

include dirname(__FILE__) . '/html-admin-help-message.php';

echo $this->get_admin_options_html(); // // WPCS: XSS ok.
