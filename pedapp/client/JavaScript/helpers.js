Template.ouvrirFichierEJS.helpers({
    setfilesEjs: function(){
 var array = filesejs();
		return array;
	}
});

Template.ouvrirFichierJS.helpers({
    setfilesJs: function(){
 var arrayjs = filesjs();
		return arrayjs;
	}
});

Template.ouvrirFichierCSS.helpers({
    setfilesCss: function(){
 var arrayjs = filescss();
		return arrayjs;
	}
});

