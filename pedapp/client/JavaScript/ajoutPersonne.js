Template.create_personne.events({

    'submit form': function(e){

        e.preventDefault();

        

        var nom = $("input[name='nom']").val();

        var prenom = $("input[name='prenom']").val();

        var age = $("input[name='age']").val();

        

        var personne = {

                nom: nom,

                prenom: prenom,

                age: age

        }


Personnes.insert(personne, function(err, id){
    if(err){
        alert(err.reason)
    }
    else{
        $("form input, form textarea").val("");
    }
Router.go('message');
});

    }

});