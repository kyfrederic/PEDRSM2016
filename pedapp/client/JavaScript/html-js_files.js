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



Template.majuscule.events({
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
    success: function(response) {//alert(response);
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
    success: function(response) {//alert(response);
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
    success: function(response) {//alert(response);
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



Template.ouvrirFichier.events({
    'click #linkA': function(event,template) {
        event.preventDefault();
        var h=event.target.getAttribute("data-id");
        alert(h);
  	$.ajax({
  	dataType: "json",
  	type: "GET",
    url:"http://localhost:3000/myfiles/"+h, 
    async: false,
    success:function(data) { alert(data);
      retourouvrir = data ;
      window.location = 'openfile';
    }
  });
  //return retourouvrir;

}
});




