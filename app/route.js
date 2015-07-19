app.config(function($stateProvider, $urlRouterProvider) {
  
  $stateProvider
    .state('accueil', {
      url: "/accueil",
      templateUrl: "app/accueil/accueil-template.html"
    })
    .state('restaurateurs', {
      url: "/restaurateurs",
      templateUrl: "app/restaurateurs/liste-template.html",
      controller: "restauListeController"
    })

    .state('restaurateurs/creer', {
      url: "/restaurateurs/creer",
      templateUrl: "app/restaurateurs/creer-template.html",
      controller: "restauCreerController"
    })
    .state('restaurateurs/modifier', {
      url: "/restaurateurs/modifier/:id",
      templateUrl: "app/restaurateurs/modifier-template.html",
      controller: "restauModifierController"
    })
    .state('restaurateurs/gestion', {
      url: "/restaurateurs/gestion/:id",
      templateUrl: "app/restaurateurs/gestion-template.html",
      controller: "restauGestionController"
    })
    .state('utilisateur/liste', {
      url: "/utilisateur/liste/:id",
      templateUrl: "app/utilisateur/liste-template.html",
      controller: "utilisateurListeController",
    })
    .state('utilisateur/ajouter', {
      url: "/utilisateur/ajouter/:id",
      templateUrl: "app/utilisateur/ajouter-template.html",
      controller: "utilisateurAjouterController"
    })
    .state('restaurateur/utilisateur/gestion', {
      url: "/restaurateur/:restoId/utilisateur/gestion/:id",
      templateUrl: "app/utilisateur/gestion-template.html",
      controller: "utilisateurGestionController"
    })
    .state('categorie/liste', {
      url: "/restaurateur/:id/categorie/liste",
      templateUrl: "app/categorie/liste-template.html",
      controller: "categorieListeController"
    })
    .state('categorie/ajouter', {
      url: "/restaurateur/:id/categorie/ajouter",
      templateUrl: "app/categorie/ajouter-template.html",
      controller: "categorieAJouterController"
    })
    .state('categorie/modifier', {
      url: "/restaurateur/:restoId/categorie/modifier/:catId",
      templateUrl: "app/categorie/modifier-template.html",
      controller: "categorieModifierController"
    })
    .state('article/ajouter', {
      url: "/restaurateur/:restoId/categorie/:catId/article/ajouter",
      templateUrl: "app/article/ajouter-template.html",
      controller: "articleAJouterController"
    })
    .state('article/modifier', {
      url: "/restaurateur/:restoId/categorie/:catId/article/modifier/:artId",
      templateUrl: "app/article/modifier-template.html",
      controller: "articleModifierController"
    })

    ;

    $urlRouterProvider.otherwise("/restaurateurs");

});


