---
sidebar_position: 2
---

# PHP Directives

By default, the following PHP directives are enabled on your website estate.

```php
display_errors (Inherited) = DISABLED
error_reporting (Inherited) = E_ALL | ~E_DEPRECATED
max_execution_time (Inherited) = 300
max_input_time (Inherited) = 60
max_input_vars (Inherited) = 5000
memory_limit (Inherited) = 256M
opcache.enable = 1
post_max_size (Inherited) = 100M
upload_max_filesize (Inherited) = 100M
```

Please note that these settings are optimized towards fast and efficient WordPress and WooCommerce performance. While you're free to modify them at your own discretion, remember that they count towards the total resource usage for your hosting package.

For example, a `memory_limit` set too low could result in issues, but so could too high a value as the site would be pulling resources inefficiently and possibly make your other websites stall unneccesarily.

:::tip

Require more resources? Upgrade your package or reach out at [support@stangerup.cloud](mailto:support@stangerup.cloud)

:::
