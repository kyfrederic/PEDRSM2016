setfilesEjs = function testAjax(handleData) {
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
