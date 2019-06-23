---
title: Un article avec un échantillon de code
date: '2019-06-23'
tags:
  - contenu-demo
  - code
  - blog
---
La meilleure façon de produire une démo d'un article de code, c'est afficher un article dans la vraie vie, aussi regardez celui provenant d'[andy-bell.design](https://andy-bell.design/wrote/creating-a-full-bleed-css-utility/) concernant un utilitaire de CSS full-bleed.

- - -

Il peut vous arriver de vouloir sortir vos composants des contraintes dans lesquels ils se trouvent embarqués. Une situation commune où cela arrive, est quand vous n'avez pas beaucoup de contrôle du conteneur dans lequel il existe, par exemple une aire du contenu principal d'un CMS.

C'est même encore plus le cas avec des outils d'édition comme l'[éditeur WordPress Gutenberg](https://wordpress.org/gutenberg/), où en théorie, vous pourriez extraire un composant d'un système de design et l'utiliser dans le contenu principal de votre page web. Dans ces situations, il peut être très utile d’avoir un petit utilitaire qui fera que l'élément prend 100% de la largeur de la fenêtre de visualisation _et_ conserve son flow dans son conteneur parent.

C'est à ce moment-là que je sors de mon chapeau la classe utilitaire `.full-bleed`.

## L'utilitaire `.full-bleed`

Il est petit, mais vraiment puissant : 

```css
.full-bleed {
  width: 100vw;
  margin-left: 50%;
  transform: translateX(-50%);
}
```

Ici, il se trouve dans un contexte où il crée un `<aside>` fantaisiste et un élément `<figure>` vidés de leur conteneur parent.

<iframe height="300" style="width: 100%;" scrolling="no" title="Piccalilli CSS Utility — Issue  #2 — Full bleed utility" src="//codepen.io/andybelldesign/embed/Nmxrwv/?height=300&theme-id=dark&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  Voir le Pen <a href='https://codepen.io/andybelldesign/pen/Nmxrwv/'>Piccalilli CSS Utility — Issue  #2 — Full bleed utility</a> d'Andy Bell
  (<a href='https://codepen.io/andybelldesign'>@andybelldesign</a>) sur <a href='https://codepen.io'>CodePen</a>.
</iframe>

L'utilitaire `.full-bleed` donne une proéminence à ces éléments et point important, il conserve leur place sémantique dans la page. Tout comme j'aime.

- - -

🔥 **Pro truc** : Au moment de travailler avec un utilitaire comme `.full-bleed`, c'est une bonne idée d'ajouter un conteneur interne qui ait un `max-width` et une marge horizontale auto comme suit : 

```css
.wrapper {
  max-width: 50rem;
  margin-left: auto;
  margin-right: auto;
}
```

Disposer d'un container comme `.wrapper` aide à créer un contenu cohérent et centré.

- - -

### Comment fonctionne l'utilitaire `.full-bleed`

Nous réglons le contenu pour qu'il soit à `width: 100vw`, ce qui équivaut à la totalité de la largeur du viewport. Nous ne pourrions pas le régler à `width: 100%` car cela ne remplirait que l'espace de son élément parent. La largeur des éléments parents est néanmoins utile, parce qu'en réglant `margin-left: 50%`, nous disons au composant d'aligner son **côté gauche** au centre son élément parent, parce `50%` c'est la moitié de **largeur de l'élément du parent**.

Pour finir, nous utilisons le transformateur CSS   `translateX(-50%)`. Parce que le transform fonctionne en dehors des dimensions de l'élément et pas aux dimenstions du parent, il renverra l'élément à `50vw`, parce qu'il fait `100vw` de large, faisant par conséquent qu'il s'aligne parfaitement avec les bords de la fenêtre viewport

## Emballé

Espérons que cette astuce courte et douce vous aidera dans vos projets. Si c'est le cas, envoyez-moi un [tweet](https://twitter.com/andybelldesign), car j'aimerais beaucoup le voir !
