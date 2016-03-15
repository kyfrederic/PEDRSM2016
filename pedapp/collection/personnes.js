Personnes = new Mongo.Collection("personnes");

Personnes.allow({

    insert: function(){return true;},

    update: function(){return true;},

    remove: function(){return true;}

});