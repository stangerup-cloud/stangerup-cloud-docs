---
sidebar_position: 1
---

# Cloud console

Otherwise known as the main control panel, the [Cloud console](https://console.stangerup.cloud) is where you manage everything regarding your web hosting with Stangerup Cloud.

## Home

Home shows you a brief overview of your website estates. This includes statistics on visitors, your package subscriptions, and an activity log showing actions such as website creations, deletions, and backup notifications.

:::tip

You can change between light and dark mode in the top right corner of the Cloud console for improved visibility.

:::

[Open Home](https://console.stangerup.cloud)

## Websites

Websites lists all your website estates, including optional secondary domains such as subdomains, addon domains, and domain aliases. You also have the option of sorting based on various parameters incase you have many website estates hosted with us.

You will also find the [Website importer](https://console.stangerup.cloud/website-imports) in the sidebar, which can be used to import existing websites and subsequent MySQL databases from cPanel or Plesk.

[Open Websites](https://console.stangerup.cloud/websites)

## Emails

Emails lists all your email accounts associated with your website estates. This includes any secondary domains and both mailboxes and forwarder-only addresses.

In addition, you can view the following information about each email:

- Mailbox usage depending on your package subscriptions.
- Whether DKIM is enabled or not.
- Whether an out of office reply is enabled or not.

[Open Emails](https://console.stangerup.cloud/emails)

## Logs

Logs primary purpose is to give you insights into important system events. If something fails, it is nice to know. We recommend checking this section regularly to make sure that everything is running smoothly.

[Open Logs](https://console.stangerup.cloud/logs)

## Packages

Packages displays all your package subscriptions and their subsequent limitations. If you have purchased more than one subscription with us, you will have to choose between these when creating new website estates.

[Open Packages](https://console.stangerup.cloud/packages)

## Users

Users allows you to manage any additional users with access to your resources. Perhaps you are working as a team and require multiple people to have access to a single or all of your website estates.

No problem, simply invite them and assign them proper previliges.

### User roles

- `Super admin` has unrestricted access to all your website estates.
- `Collaborator` has access only to selected websites estates.

[Open Users](https://console.stangerup.cloud/users)

## Integrations

Currently, there are two integrations available, but more may come in the future.

### Cloudflare

The Cloudflare integration allows for automatic synchronization of DNS records between Stangerup Cloud and Cloudflare. This provides a seamless experience if you prefer to take advantage of Cloudflare's edge network while managing the DNS records themselves directly from your website estates with us.

You will need to generate an API token using Cloudflare's default DNS template for access.

:::danger

Upon activation, any records configured directly on Cloudflare will be lost. The zones on Stangerup Cloud will take precedence.

:::

### Slack

The Slack integration acts as a relay for website and user notifications on Stangerup Cloud. If the integration is activated, you will be able to receive these notifications directly in Slack as plain messages.

[Open Integrations](https://console.stangerup.cloud/integrations)
