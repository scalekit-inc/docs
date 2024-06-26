# Error Handling

If there are any configuration or application issues while the user tries to login with Single Sign-on via Scalekit, your application's redirect uri will receive the details of the error via the request parameters: error_code, error_description.

| Error Code | Error Description | Possible Resolution Strategy |
|---|---| --- |
| <SimpleCode>invalid_redirect_uri</SimpleCode> | Redirect URI is not part of the pre-approved list of Redirect URIs. If this is a valid URL, you need to add it in the Scalekit Dashboard before using it. | |
| <SimpleCode>invalid_organization_id</SimpleCode> | Organization ID is not valid | |
| <SimpleCode>invalid_connection_selector</SimpleCode> | Atleast one of organization_id, connection_id, domain need to be present in the Authorization URL request to process the Single Sign-on request | |
| <SimpleCode>no_active_connections</SimpleCode> | There are no active SSO Connections configured to process the Single Sign-on request | |
| <SimpleCode>connection_not_active</SimpleCode> | Connection ID requested is not yet enabled to process login for users. | This connection needs to be enabled before it can process login for real users.|
| <SimpleCode>no_configured_connections</SimpleCode> | There are no active SSO Connections configured to process the Single Sign-on request | |
| <SimpleCode>invalid_organization_id</SimpleCode> | Invalid Organization ID requested to process the Single Sign-on request | |
| <SimpleCode>invalid_connection_id</SimpleCode> | Invalid Connection ID requested to process the Single Sign-on request | |
| <SimpleCode>domain_not_found</SimpleCode> | There are no active SSO Connections configured for this domain to process the Single Sign-on request | |
| <SimpleCode>invalid_user_domain</SimpleCode> | User doesn't belong to the allowed domains list for this SSO Connection. | |
| <SimpleCode>mandatory_attribute_missing</SimpleCode> | Mandatory attributes are missing | |
