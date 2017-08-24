const express = require('express');

//Controllers here
const HomeController = require('./controllers/home');
const ListController = require('./controllers/list');

module.exports = function(app){
//Routers here
const homeRouter = express.Router();
const listRouter = express.Router();

//Welcome page router
homeRouter.get('/', HomeController.home);

//list routers
listRouter.get('/', ListController.list);       //gives list of items
listRouter.post('/', ListController.add);       //goes to form if no id when add button clicked
listRouter.get('/add', ListController.form);

listRouter.post('/:id', ListController.edit);
listRouter.get('/:id/edit', ListController.form);   //if id already then takes to edit form
listRouter.get('/:id/delete', ListController.delete);   //deletes item from collection in db
       //adds new item to list

app.use('/', homeRouter);
app.use('/list', listRouter);
};
