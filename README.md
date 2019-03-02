# MISC-API
Installations required:

Sequelize CLI:
npm install -g sequelize-cli

Sequelize.js:
npm install --save sequelize

PostgreSQL module:
npm install --save pg pg-hstore

To start program, use npm start or node ./bin/www (definition file of server)
Database definition: config/config.json

API:

Local default server: localhost:3000/

In order to create a new model/table for use in the db:

sequelize model:create --name TableName --attributes attributeName:datatype
This will generate a model and migration file. The migration file will be used to generate the table inside the database.
To add/migrate the model to the database, use the command  sequelize db:migrate.
Now you can create a controller for the model inside the controllers folder.
After the controller has been added, it has to be added inside controllers/index.js in order to be reached and used from the other folders.
Now you can use the controller methods inside routes/index.js and it will be made available to the server.

To populate a database with models, use the following command:

npm run generatedb

Common REST calls:

Create user:

(POST) http://localhost:3000/api/add

Login & generate JWT:

(POST) http://localhost:3000/api/login

Example of a secure REST call:

(POST) http://localhost:3000/api/vessel

Example of a unsecure REST call:

(GET) http://localhost:3000/api/vessel
