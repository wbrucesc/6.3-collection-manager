const Item = require('../models/list');

const ListController = {                       //lists documents in items collection
  list: function(req, res){
    Item.find().then(function(items, genre, seasons){
      res.render('list/list', {items: items, genre: genre, seasons: seasons});
    });
  },
  add: function(req, res){                      //adds new item to items collection
    const title = req.body.title;
    const genre = req.body.genre;
    const seasons = req.body.seasons;
    const newItem = new Item({title: title, genre: genre, seasons: seasons});
    newItem.save(function(){
      res.redirect('/list');
    });
  },
  delete: function(req, res){         //deletes document from collection in db when delete button clicked
    const itemId = req.params.id;       //targets item to delete by its id
    Item.deleteOne('_id').then(function(){
      res.redirect('/list');
    });
  },
  edit: function(req, res){
    const itemId = req.params.id;
    const title = req.body.title;
    const genre = req.body.genre;
    const seasons = req.body.seasons;
    res.render('edit/edit', {title: title, genre: genre, seasons: seasons});
    // Item.findByIdAndUpdate(itemId, {$set: {title: req.body.title, genre: req.body.genre, seasons: req.body.seasons}}).then(function(){
    //     res.redirect('/list');
    // });
  }
};

module.exports = ListController;
