Template.concatene.events({
    'submit form': function(e){
		e.preventDefault();
		
		var valeurCahine1 = $("input[name='chaine1']").val();
		var valeurChaine2 = $("input[name='chaine2']").val();
		var result = concatene(valeurCahine1,valeurChaine2);
		var obj = document.getElementById("res");
		obj.value = result
		}
	});


Template.longueur.events({
    'submit form': function(e){
		e.preventDefault();
		
		var valeurCahine = $("input[name='chaine']").val();
		var result = longueur(valeurCahine);
		var obj = document.getElementById("res");
		obj.value = result
		

		}
	});


Template.majuscule.events({
    'submit form': function(e){
		e.preventDefault();
		
		var valeurCahine = $("input[name='chaine']").val();
		var result = majuscule(valeurCahine);
		var obj = document.getElementById("res");
		obj.value = result
		

		}
	});



Template.minuscule.events({
    'submit form': function(e){
		e.preventDefault();
		
		var valeurCahine = $("input[name='chaine']").val();
		var result = minuscule(valeurCahine);
		var obj = document.getElementById("res");
		obj.value = result
		

		}
	});


Template.puissance.events({
    'submit form': function(e){
		e.preventDefault();
		
		var valeurCahine = $("input[name='nombre']").val();
		var valeurCahine2 = $("input[name='puissance']").val();
		var result = puissance(valeurCahine,valeurCahine2);
		var obj = document.getElementById("res");
		obj.value = result
		

		}
	});


Template.racine.events({
    'submit form': function(e){
		e.preventDefault();
		
		var valeurCahine1 = $("input[name='nombre']").val();
		var result = racine(valeurCahine1);
		var obj = document.getElementById("res");
		obj.value = result
		

		}
	});

Template.factorielle.events({
    'submit form': function(e){
		e.preventDefault();
		
		var valeurCahine1 = $("input[name='nombre']").val();
		var result = factorielle(valeurCahine1);
		var obj = document.getElementById("res");
		obj.value = result
		

		}
	});




Template.fichierEJS.events({
    'submit form': function(e){
		e.preventDefault();
		var valeurCahine1 = $("input[name='nom']").val();
		var valeurCahine2 = $('textarea#message').val();

$.ajax({
    url: 'http://localhost:3000/createfilesEJS',
    type: 'POST',
     data: 'nom='+valeurCahine1+'&contenu='+valeurCahine2,
    success: function(response) {//alert(response);
    window.location = 'message';
     }
}); 
}
});



Template.fichierJS.events({
    'submit form': function(e){
		e.preventDefault();
		var valeurCahine1 = $("input[name='nom']").val();
		var valeurCahine2 = $('textarea#message').val();

$.ajax({
    url: 'http://localhost:3000/createfilesJS',
    type: 'POST',
     data: 'nom='+valeurCahine1+'&contenu='+valeurCahine2,
    success: function(response) {
    window.location = 'message';
     }
}); 
}
});

Template.fichierCSS.events({
    'submit form': function(e){
		e.preventDefault();
		var valeurCahine1 = $("input[name='nom']").val();
		var valeurCahine2 = $('textarea#message').val();

$.ajax({
    url: 'http://localhost:3000/createfilesCSS',
    type: 'POST',
     data: 'nom='+valeurCahine1+'&contenu='+valeurCahine2,
    success: function(response) {
    window.location = 'message';
     }
}); 
}
});

Template.fichierCSS.events({
    'submit form': function(e){
		e.preventDefault();
		var valeurCahine1 = $("input[name='nom']").val();
		var valeurCahine2 = $('textarea#message').val();

$.ajax({
    url: 'http://localhost:3000/createfilesCSS',
    type: 'POST',
     data: 'nom='+valeurCahine1+'&contenu='+valeurCahine2,
    success: function(response) {
    window.location = 'message';
     }
}); 
}
});





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








