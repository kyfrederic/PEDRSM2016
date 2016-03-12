Router.configure({
    layoutTemplate: 'mainLayout'
});


Router.route('/', {
    name: "home",
    template: "home"
});

Router.route('/concatene', {
    name: "concatene",
    template: "concatene",
});

Router.route('/longueur', {
    name: "longueur",
    template: "longueur"
});
Router.route('/majuscule', {
    name: "majuscule",
    template: "majuscule"
});
Router.route('/minuscule', {
    name: "minuscule",
    template: "minuscule"
});
Router.route('/racine', {
    name: "racine",
    template: "racine"
});
Router.route('/puissance', {
    name: "puissance",
    template: "puissance"
});
Router.route('/factorielle', {
    name: "factorielle",
    template: "factorielle"
});


Router.route('/ouvrirFichier', {
    name: "ouvrirFichier",
    template: "ouvrirFichier"
});

Router.route('/openfile/:id', {
    name: "openfile",
    template: "openfile",
    data: function(){
    var nom = this.params.id;
        
        return {
        setfile: mon
            
        }
    }

});



Router.route('/multi/:id', {
    name: "multi",
    template: "openfile",
    data: function(){
        var num1 = this.params.id;
        var retourouvrir;

        $.ajax({
    dataType: "json",
    type: "GET",
    url:"http://localhost:3000/myfiles/"+num1, 
    async: false,
    success:function(data) { alert(data);
      retourouvrir = data ;
    }
  });
          
        return {
            res: retourouvrir, 
            setfile : num1
        };
    }
});

Router.route('/fichierEJS', {
    name: "fichierEJS",
    template: "fichierEJS"
});
Router.route('/fichierJS', {
    name: "fichierJS",
    template: "fichierJS"
});
Router.route('/fichierCSS', {
    name: "fichierCSS",
    template: "fichierCSS"
});

Router.route('/listeJS', {
    name: "listeJS",
    template: "listeJS"
});
Router.route('/listeCSS', {
    name: "listeCSS",
    template: "listeCSS"
});
Router.route('/create_personne', {
    name: "create_personne",
    template: "create_personne"
});
Router.route('/personnes', {
    name: "personnes",
    template: "personnes"
});

Router.route('/test', {
    name: "test",
    template: "test"
});

Router.route('/message', {
    name: "message",
    template: "message"
});



Router.route('/createfilesEJS', {where: 'server'})
  .post(function () {
    console.log(this.request.body);
    var fname = this.request.body.nom
    var contenu = this.request.body.contenu
    creerFichierEJS(fname, contenu );
    this.response.end();
    
    

  });



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

  Router.route('/listes', {where: 'server'})

  .get( function() {
    var files = listeFichiersEJS();
     var myJsonString = JSON.stringify(files);
       this.response.end(myJsonString);

    
  });


  Router.route('/myfiles/:id', {where: 'server'})
  .get(function () {
    var nom = this.params.id;
    var contenu = ouvrirFichier(nom);
     console.log(nom+" "+contenu); 
    var  myJsonString=  JSON.stringify(contenu);
  this.response.end(myJsonString);
  });


  Router.route('/openfilesCSS', {where: 'server'})
  .get(function () {
    

  });

