az login ## opens browser -- wait for port to be opened from the container before clicking on username
az account get-access-token --resource https://management.azure.com/

curl --location --request DELETE 'https://management.azure.com/subscriptions/512a3e0e-9bfa-457f-8578-29a1cf87a51b/providers/Microsoft.ApiManagement/locations/Central US/deletedservices/sls-cus-dev-5f9cee-apim?api-version=2021-08-01' \
--header 'Authorization: Bearer <ACCESS TOKEN FROM ABOVE>'

#### Azure Deployment

> Note: A bug causes an error when deploying an "armTemplate" along side a function app. Workaround is to comment run the deployment, let it deploy the DB and then fail deploying the function app -- then comment out the armTemplate and re-deploy. After it deploys fully, it can be uncommented and redeployments will work okay.
