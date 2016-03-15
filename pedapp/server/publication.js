Meteor.publish("allPersonneHeaders", function(){

    return Personnes.find({});

});