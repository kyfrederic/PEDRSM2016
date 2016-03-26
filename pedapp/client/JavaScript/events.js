Template.concatene.events({
    'submit form': function(e){
		e.preventDefault();
		
		var vala = $("input[name='chaine1']").val();
		var valb = $("input[name='chaine2']").val();
		var result = concatene(vala,valb);
		var obj = document.getElementById("res");
		obj.value = result
		

		}
	});


Template.longueur.events({
    'submit form': function(e){
		e.preventDefault();
		
		var vala = $("input[name='chaine']").val();
		var result = longueur(vala);
		var obj = document.getElementById("res");
		obj.value = result
		

		}
	});


Template.majuscule.events({
    'submit form': function(e){
		e.preventDefault();
		
		var vala = $("input[name='chaine']").val();
		var result = majuscule(vala);
		var obj = document.getElementById("res");
		obj.value = result
		

		}
	});



Template.minuscule.events({
    'submit form': function(e){
		e.preventDefault();
		
		var vala = $("input[name='chaine']").val();
		var result = minuscule(vala);
		var obj = document.getElementById("res");
		obj.value = result
		

		}
	});


Template.puissance.events({
    'submit form': function(e){
		e.preventDefault();
		
		var vala = $("input[name='nombre']").val();
		var valb = $("input[name='puissance']").val();
		var result = puissance(vala,valb);
		var obj = document.getElementById("res");
		obj.value = result
		

		}
	});


Template.racine.events({
    'submit form': function(e){
		e.preventDefault();
		
		var vala = $("input[name='nombre']").val();
		var result = racine(vala);
		var obj = document.getElementById("res");
		obj.value = result
		

		}
	});

Template.factorielle.events({
    'submit form': function(e){
		e.preventDefault();
		
		var vala = $("input[name='nombre']").val();
		var result = factorielle(vala);
		var obj = document.getElementById("res");
		obj.value = result
		

		}
	});




Template.fichierEJS.events({
    'submit form': function(e){
		e.preventDefault();
		var vala = $("input[name='nom']").val();
		var valb = $('textarea#message').val();

$.ajax({
    url: 'http://localhost:3000/createfilesEJS',
    type: 'POST',
     data: 'nom='+vala+'&contenu='+valb,
    success: function(response) {//alert(response);
    window.location = 'message';
     }
}); 
}
});



Template.fichierJS.events({
    'submit form': function(e){
		e.preventDefault();
		var vala = $("input[name='nom']").val();
		var valb = $('textarea#message').val();

$.ajax({
    url: 'http://localhost:3000/createfilesJS',
    type: 'POST',
     data: 'nom='+vala+'&contenu='+valb,
    success: function(response) {
    window.location = 'message';
     }
}); 
}
});

Template.fichierCSS.events({
    'submit form': function(e){
		e.preventDefault();
		var vala = $("input[name='nom']").val();
		var valb = $('textarea#message').val();

$.ajax({
    url: 'http://localhost:3000/createfilesCSS',
    type: 'POST',
     data: 'nom='+vala+'&contenu='+valb,
    success: function(response) {
    window.location = 'message';
     }
}); 
}
});

Template.fichierCSS.events({
    'submit form': function(e){
		e.preventDefault();
		var vala = $("input[name='nom']").val();
		var valb = $('textarea#message').val();

$.ajax({
    url: 'http://localhost:3000/createfilesCSS',
    type: 'POST',
     data: 'nom='+vala+'&contenu='+valb,
    success: function(response) {
    window.location = 'message';
     }
}); 
}
});


thin = function testAjax(handleData) {
	var retour;
  $.ajax({
  	dataType: "json",
  	type: "GET",
    url:"http://localhost:3000/listes", 
    async: false,
    success:function(data) {
      retour = data ;
    }
  });
  return retour;
}


filesjs = function filesjsfunc(handleData) {
	var retourjs;
  $.ajax({
  	dataType: "json",
  	type: "GET",
    url:"http://localhost:3000/listesjs", 
    async: false,
    success:function(data) { 
      retourjs = data ;
    }
  });
  return retourjs;
}


filescss = function filesjsfunc(handleData) {
	var retourjs;
  $.ajax({
  	dataType: "json",
  	type: "GET",
    url:"http://localhost:3000/listescss", 
    async: false,
    success:function(data) { 
      retourjs = data ;
    }
  });
  return retourjs;
}



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




