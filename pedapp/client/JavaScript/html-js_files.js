//myfiles;



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


// var MaFonction = function(){
	
// $.ajax({
//        url : 'http://localhost:3000/listes',
//        type : 'GET',
//        //dataType : 'html', // On désire recevoir du HTML
//        	dataType : "json",
//        success : function(res){ //alert(res);// code_html contient le HTML renvoyé
//         	myfiles = res ;
//        // 	affiche(jsonfile);
   

//        },
//     });
//  return jsonfile;
// //alert(res);

// };
var retour;
MaFonction = function traduireVariable(){
    // var retour;
    $.ajax({
        type: "GET",
        dataType: "json",
        //data: "variable="+nomVariable,
        async: false,
        url: 'http://localhost:3000/listes',
        success: function(data) {alert (data+" c'est moi !!");
        return data;
        }
    });
    //return retour;
}



thin = function testAjax(handleData) {
	var retour;
  $.ajax({
  	dataType: "json",
  	type: "GET",
    url:"http://localhost:3000/listes", 
    async: false,
    success:function(data) {
      //handleData(data); 
      retour = data ;
    }
  });
  return retour;
}


// test = testAjax(function(output){
//   // here you use the output

//   alert(output+" kikikikikiki");
//   //return output;
// });


// affiche = function (){
// 	var myfiles = "tata";
// return myfiles;

// }



// Template.liste.events({
//   //   'submit form': function(e){
// 		// e.preventDefault();
// 		// var vala = $("input[name='nom']").val();
// 		// var valb = $('textarea#message').val();
//  $.ajax({
//        url : 'http://localhost:3000/liste', // La ressource ciblée
//        type : 'GET' ,// Le type de la requête HTTP.
//        data : 'utilisateur=' + nom_user,
//     success: function(response) {alert(response);
//     //window.location = 'message';
//      }
// }); 
// }
// });
