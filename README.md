az login ## opens browser -- wait for port to be opened from the container before clicking on username
az account get-access-token --resource https://management.azure.com/

curl --location --request DELETE 'https://management.azure.com/subscriptions/512a3e0e-9bfa-457f-8578-29a1cf87a51b/providers/Microsoft.ApiManagement/locations/Central US/deletedservices/sls-cus-dev-5f9cee-apim?api-version=2021-08-01' \
--header 'Authorization: Bearer <ACCESS TOKEN FROM ABOVE>'
