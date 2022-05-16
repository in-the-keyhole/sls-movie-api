# sls-movie-api

This repository contains a VSCode Remote Container Setup for developing an Apollo GraphQL serverless function using the Serverless Framework in NodeJS/TypeScript. It contains configuration for running and deploying in both AWS and Azure, including deployment of a Postgres DB in both environments.

## Visual Studio Code - Remote Container Usage

> [Official Documentation](https://code.visualstudio.com/docs/remote/containers)

> _Note: Once you meet the prerequisites, you can run **ANY** Visual Studio Code Remote Container, which provides a Docker based development environment ensuring a consistent and reliable set of tooling needed to interact and execute a repository codebase_

### Prerequisites:

1. macOS, Windows, Linux -- [System Requirements](https://code.visualstudio.com/docs/remote/containers#_system-requirements)
2. Docker - [Documentation](https://code.visualstudio.com/docs/remote/containers#_installation)
3. Visual Studio Code - [Official Site](https://code.visualstudio.com/)
4. Remote - Containers _Visual Studio Code extension_ - [Marketplace](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)

#### Environment Variables

The remote container honors the following environment variables set in the .devcontainer/.env

> _Note: You can copy the .devcontainer/.env.template file to .devcontainer/.env and supply the following variables_

##### AWS

- AWS_ACCESS_KEY_ID
- AWS_SECRET_ACCESS_KEY
- AWS_REGION - (optional - defaults to us-east-1)
- AWS_POSTGRESQL_HOST
- DOMAIN_NAME - Used for AWS Custom Domain Name
- CERTIFICATE_NAME - AWS Certificate Name
- LOG_RETENTION_DAYS (optional - defaults to 1)

##### Azure

- AZURE_SUBSCRIPTION_ID
- AZURE_TENANT_ID
- AZURE_CLIENT_ID
- AZURE_CLIENT_SECRET
- AZURE_POSTGRESQL_HOST
- AZURE_LOCATION - (optional - defaults to Central US)

##### Database variables

- DATABASE_NAME - (defaults and needs to be `postgresql` - init scripts don't create a different databsase currently)
- DATABASE_USERNAME
- DATABASE_PASSWORD
- POSTGRESQL_PORT (defaults to 5432)

> _Note: Changes to variables in .env after the container is running will require the Remote Container to be restarted_

#### Developer Configuration

To initialize the environment, once the repository is opened in the Remote Container, open a Terminal and type:

`yarn`

### Usage & Things you can do

#### package.json Scripts

There are some predefined scripts in package.json that can be used to simplify common tasks.

- `yarn start:aws` - runs the functions locally using the AWS configuration
- `yarn deploy:aws` - deploys the functions to AWS
- `yarn undeploy:aws` - undeploys the functions from AWS

- `yarn start:azure` - runs the functions locally using the Azure configuration
- `yarn deploy:azure` - deploys the functions to Azure - see
- `yarn undeploy:azure` - undeploys the functions from Azure

#### Debugging - Local

All of the package.json scripts defined above can be run in a 'JavaScript Debug Terminal' which automatically attaches the debugger.

#### Azure Deployment

> Note: A bug causes an error when deploying an "armTemplate" along side a function app. Workaround is to comment run the deployment, let it deploy the DB and then fail deploying the function app -- then comment out the armTemplate and re-deploy. After it deploys fully, it can be uncommented and redeployments will work okay.

#### Azure Cleanup

When _undeploying_ from Azure, the APIM configuration is [_soft-deleted_](https://docs.microsoft.com/en-us/azure/api-management/soft-delete) and will need to be completely removed prior to a re-deploy.

1. `az login` - this will opens browser prompting for login
   > Note: You will need to wait for the port to be opened from the container before clicking on username
2. `az account get-access-token --resource https://management.azure.com/`
   > Note: This will print an _accessToken_ needed in the next command to stdout
3. `curl --location --request DELETE 'https://management.azure.com/subscriptions/<YOUR AZURE_SUBSCRIPTION_ID>/providers/Microsoft.ApiManagement/locations/<AZURE_LOCATION>/deletedservices/<SOFT DELETED API SERVICE ID>?api-version=2021-08-01' \ --header 'Authorization: Bearer <ACCESS TOKEN FROM ABOVE>'`
