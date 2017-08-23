const express = require('express');

//Controllers here
const HomeController = require('./controllers/home');
const ListController = require('./controllers/list');

module.exports = function(app){
//Routers here
const homeRouter = express.Router();
const listRouter = express.Router();

homeRouter.get('/', HomeController.home);

listRouter.get('/', ListController.list);       //gives list of items
listRouter.post('/', ListController.add);       //adds new item to list
listRouter.get('/:id/delete', ListController.delete);   //deletes item from collection in db 

app.use('/', homeRouter);
app.use('/list', listRouter);
};
