
  Router.route('/createfilesJS', {where: 'server'})
  .post(function () {
    console.log(this.request.body);
    var fname = this.request.body.nom
    var contenu = this.request.body.contenu
    this.response.end();
    creerFichierJS(fname, contenu )
    this.response.end();

  });

  Router.route('/createfilesCSS', {where: 'server'})
  .post(function () {
    console.log(this.request.body);
    var fname = this.request.body.nom
    var contenu = this.request.body.contenu
    creerFichierCSS(fname, contenu )
    this.response.end();
  });


  Router.route('/createfilesEJS', {where: 'server'})
  .post(function () {
    console.log(this.request.body);
    var fname = this.request.body.nom
    var contenu = this.request.body.contenu
    creerFichierEJS(fname, contenu );
    this.response.end();

  });


  Router.route('/listes', {where: 'server'})

  .get( function() {
    var files = listeFichiersEJS();
     var myJsonString = JSON.stringify(files);
       this.response.end(myJsonString);

    
  });


  Router.route('/listesjs', {where: 'server'})

  .get( function() {
     var filesjs = listeFichiersJS();
     var myjs = JSON.stringify(filesjs);
       this.response.end(myjs);

    
  });

   Router.route('/listescss', {where: 'server'})

  .get( function() {
     var filesjs = listeFichiersCSS();
     var myjs = JSON.stringify(filesjs);
       this.response.end(myjs);

    
  });


  Router.route('/myfiles/:id', {where: 'server'})
  .get(function () {
    var nom = this.params.id;
    var contenu = ouvrirFichier(nom);
     console.log(nom+" "+contenu); 
    var  myJsonString=  JSON.stringify(contenu);
  this.response.end(myJsonString);
  });



  Router.route('/myfilesjs/:id', {where: 'server'})
  .get(function () {
    var nom = this.params.id;
    var contenu = ouvrirFichier(nom); 
    var  myJsonString=  JSON.stringify(contenu);
  this.response.end(myJsonString);
  });

  Router.route('/myfilescss/:id', {where: 'server'})
  .get(function () {
    var nom = this.params.id;
    var contenu = ouvrirFichier(nom);
     console.log(nom+" "+contenu); 
    var  myJsonString=  JSON.stringify(contenu);
  this.response.end(myJsonString);
  });