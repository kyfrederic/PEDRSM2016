Template.ouvrirFichierEJS.helpers({
    setAuthor: function(){
 var array = thin();
		return array;
	}
});

Template.ouvrirFichierJS.helpers({
    setAuthorjs: function(){
 var arrayjs = filesjs();
		return arrayjs;
	}
});

Template.ouvrirFichierCSS.helpers({
    setAuthorjs: function(){
 var arrayjs = filescss();
		return arrayjs;
	}
});



// Template.openfile.helpers({
//  setfile: function(){

//  var array = retourouvrir;
//  alert(array)
// 		return array;
		
// 	}
	
// });



// Template.openfiles.helpers({
//     setfile: function(){

//     	$.ajax({
//   	dataType: "json",
//   	type: "GET",
//     url:"http://localhost:3000/myfiles/dodo.ejs", 
//     async: false,
//     success:function(data) { 
//       retour = data ;
//     }
//   });
//   return retour;



//  var array = monfilenom;
//  alert(array)
// 		return array;
		
// 	}
	
// });
