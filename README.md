## Étude : migrer un blog personnel GoHugo vers Eleventy 

Afin de mettre mon blog personnel à jour, j'ai choisi ici le boilerplate d'Hylia proposé par Andy Bell pour mieux appréhender la motorisation [Eleventy](https://11ty.io). Séduit à cette heure par le [CMS Netlify](https://www.netlifycms.org/) préconfiguré pour mettre à jour un site personnel statique, simple et moins exigeant en consommation de ligne de commande que GoHugo. 
Je serai en outre attentif pour m'essayer à poser premières briques fondamentales indieweb.

## UX, UI et usages  

L'UI de publication retenue à cette heure est le CMS de Netlify. Une UI qui me semble suffisamment simple pour des non développeurs et dispose d'un premier workflow de publication. La mise à jour des articles et notes **hors-connexion** sera étudiée au fil de mes futures navigations océaniques. (Synchronisations dès ouverture d'accès wifi ou accès à étudier via IridiumGo).

## Point de départ : le kit de démarrage Hylia pour Eleventy

Hylia est un kit de démarrage léger Eleventy avec le CMS Netlify pré-configuré, afin que vous puissiez installer en un clic, un blog accessible et progressif. Il vous donne un point de départ bien organisé pour le développer vous-même.
Démarrez dès maintenant en déployant Hylia sur Netlify.

## Fonctionnalités

Hylia version 0.2.1 :

- ✍️ Un [CMS Netlify](https://www.netlifycms.org/) pré-configuré
- 🎨 des design tokens personnalisables
- 🌍 Données globales et navigation personnalisable
- 📂 Tags et archives de tag
- ✅ Amélioration progressive, sémantique et accessible 
- 🎈 Front-end _super_ léger
- 🚰 Système CSS motorisé par Sass avec utilitaire de générateur de classes
- ⚙️ Service worker qui met en cache les pages afin que les utilisateurs puissent lire les articles hors-ligne
- 🚀 Un fil RSS pour les articles

## Plan de Route 

- 💬 Commentaires motorisés par les [Netlify Forms](https://www.netlify.com/docs/form-handling/)
- 💡 Bascule pour les quarts de nuit en mode Sombre
- 🗣 Webmentions  
- 📖 Pagination  
- 🐦 Intégration API de partage Web
- 🗒 Mode hors-ligne avec liens vers les pages mises en cache
- 📄 Site de Documentation 
- 💅 Documentation propre au Sass
- ✍️ Documentation propre au CMS
- 🖼 Une facilité pour pouvoir ajouter facilement un logo ou une marque

***

## Démarrage 

### Méthode 1 : déploiement en un-clic vers Netlify

Vous pouvez aussi [déployer Hylia vers Netlify en un clic][deploy-to-netlify] et vous aurez votre site fonctionnel en quelques minutes.

[![Déployer vers Netlify](https://www.netlify.com/img/deploy/button.svg)][deploy-to-netlify]

Andy Bell a enregistré une rapide vidéo de son déploiement d'Hylia ver Netlify pour paramétrer le Gestionnaire de Contenu. [Regardez-la ici](https://youtu.be/0hM_0BH-Y_A).


### Méthode deux : Cloner / Forker (ligne de commande)

1. Clonez ou forkez le repo source : `git clone https://github.com/andybelldesign/hylia`
2. `cd` à l'intérieur du répertoire du projet et lancez `npm install`
3. Une fois toutes les dépendances installées, lancez `npm start`
4. Ouvrez votre navigateur sur `http://localhost:8080` et partez naviguer !

## Commandes de Terminal

### Servir le site localement

```bash
npm start
```

### Construire une version de production du site

```bash
npm run production
```

### Compiler Sass

```bash
npm run sass:process
```

### Re-générer les design tokens pour Sass

```bash
npm run sass:tokens
```

## Démarrer avec le CMS

Avant de pouvoir utiliser le CMS, vous devrez faire un peu de config dans Netlify. Heureusement, ils fournissent un [guide très pratique pour démarrer](https://www.netlify.com/docs/identity/).

En résumé,

- Une fois que vous avez installé le site sur Netlify, allez sur “Settings” > “Identity” et activez Identity
- Descendez vers l'aire “Git Gateway”, cliquez sur “Enable Git Gateway” et suivez les étapes
- Cliquez sur l'onglet “Identity” tout en haut
- Une fois que vous avez activez Identity, cliquez sur “Invite Users”
- Regardez le lien invite dans votre boîte de réception et cliquez le lien dans l'e-mail qui vous a été envoyé
- Réglez un mot de passe dans la boîte popup
- Allez sur /admin de votre site et connectez-vous
- Vous êtes prêt pour éditer votre contenu !

## Design Tokens et Guide de Style

### Design Tokens

Bien qu'Hylia ait un joli design vraiment simple, vous pouvez configurer les tokens de design du noyau afin de contrôler les couleurs, le ratio de taille et les fontes.

***

**Note** : Le crédit doit être donné au dur travail de [Jina Anne](https://aycl.uie.com/virtual_seminars/design_tokens_scaling_design_with_a_single_source_of_truth) pour avoir fait exister le concept des design tokens. Vous devriez regarder [cette vidéo](https://www.youtube.com/watch?v=wDBEc3dJJV8), et [lire ensuite cet article](https://the-pastry-box-project.net/jina-bolton/2015-march-28) et pour finir vous enregistrer à [son cours](https://twitter.com/jina) pour améliorer votre connaissance.

---

Pour modifier les tokens de design dans le CMS, trouvez le “Globals” dans la barre latérale puis dans les options présentées et sélectionnez “Theme Settings”.

Pour changer directement les tokens de design, éditez [_src/data/tokens.json](https://github.com/andybelldesign/hylia/blob/master/src/_data/tokens.json) .

Les tokens sont convertis en cartes que le Sass utilise pour compiler le front-end CSS, aussi assurez vous de maintenir la structure correcte de `tokens.json`. 

### Guide de Style

Votre version d’Hyla est livré avec un guide de style par défaut. Vous pouvez regarder une démo du Styleguide sur  <https://hylia.website/styleguide/>.

Vous pouvez éditer le Styleguide en ouvrant [src/styleguide.njk](https://github.com/andybelldesign/hylia/blob/master/src/styleguide.njk). Si vous ne voulez pas du  Styleguide, effacez ce fichier et la page disparaîtra.

## Sass

Hylia est basé sur la version [WIP v2 de Stalfos](https://github.com/andybelldesign/stalfos/tree/feature/v2), qui n’a pas de documentation à cette heure (je sais, c’est mal). Voici une documentation très basique pour les éléments du nouveau framework que vous rencontrerez sur ce projet.

### Configuration

Le système global Sass est motorisé par le fichier de configuration centrale, déposé ici : [_src/scss/_config.scss](https://github.com/ChristopheDucamp/hylia/blob/master/src/scss/_config.scss).

Avant que Sass ne soit compilé, un fichier `_tokens.scss` est généré à partir de la [config de design des tokens](https://github.com/ChristopheDucamp/hylia/blob/master/src/_data/tokens.json) qui est requise.

Éléments-clés 

- `$stalfos-size-scale` : Un jeton pour piloter l'échelle de taille qui, par défaut, est une échelle “Major Third”
- `$stalfos-colors` : Un jeton pour piloter une carte de couleurs
- `$stalfos-util-prefix` : Tous préconstruits, les utilitaires de framework auront ce préfixe. Exemple : l'utilitaire wrapper est '.sf-wrapper' parce que préfixe par défaut est 'sf-'
- `$metrics` : Différentes métriques à utiliser sur l'ensemble du site
- `$stalfos-config` : Ceci motorise tout de la génération d'utilitaire de classe jusqu'aux breakpoints pour activer/désactiver les composants/utilitaires pré-construits.

### Comment créer une nouvelle classe utilitaire avec le générateur

Le génrateur de classes utilitaires 
Le générateur de classes d’utilitaires vous permet de générer ce que vous voulez, sans donner d’avis sur le nom ou les propriétés de la classe.

Pour ajouter une nouvelle classe, ajoutez un autre élément à la carte existante `$ stalfos-config`. Cet exemple ajoute un utilitaire pour les éléments flottants.

```scss
'float': (
  'items': (
    'left': 'left',
    'right': 'right'
  ),
  'output': 'responsive',
  'property': 'float'
)
```

L'`output` est défini sur `responsive`, ce qui signifie que chaque point d'arrêt générera une classe préfixée pour elle-même. Si vous voulez seulement que les éléments flottent à gauche dans le point d’arrêt `md`, vous devriez maintenant ajouter une classe de `md: float-left` à vos éléments HTML.

Si vous souhaitez uniquement générer des classes d'utilitaires standard, réglez `output` sur `standard`.

### Fonctions

#### `get-color($key)`

Function tries to match the passed `$key` with the `$stalfos-colors` map. Returns null if it can’t find a match.

#### `get-config-value($key, $group)`

Returns back a 1 dimensional (key value pair) config value if available.

#### `get-size($ratio-key)`

Function tries to match the passed `$ratio-key` with the `$stalfos-size-scale`. Returns null if it can’t find a match.

### Mixins

#### `apply-utility($key, $value-key)`

Grabs the property and value of one of the `$stalfos-config utilities` that the generator will generate a class for.

#### `media-query($key)`

Pass in the key of one of your breakpoints set in `$stalfos-config['breakpoints']` and this mixin will generate the `@media` query with your configured value.

## CMS

Hylia dispose du [CMS Netlify](https://www.netlifycms.org/) pre-configuré en standard. Vous pouvez le personnaliser en modifiant [`src/admin/config.yml`](https://github.com/andybelldesign/hylia/blob/master/src/admin/config.yml).

### Contenu que vous pouvez modifier

Le réglage basique du CMS vous permet de modifier ce qui suit :

- **Page d'Accueil** : Éditez le contenu de votre page d'accueil
- **Posts** : Créez et éditez les posts de blog
- **Pages Génériques** : Créez des pages génériques qui utilisent un layout similaire aux posts
- **Global site data** : Différents fragments de données de site globables telles que votre url, le titre, le nombre de posts par page et les détails de l'auteur.
- **Navigation**: Editez vos éléments primaires de navigation
- **Theme**: Modifiez les tokens de design tokens qui motorisent le thème du site

## Venez m'aider 

Ce projet est _super_ neuf et votre feedback sera le bienvenu. Afin que les choses puissent tourner en douceur, regardez SVP le [guide de contribution et le code de conduite](https://github.com/andybelldesign/hylia/blob/master/contributing.md).

Les trucs où j'attends de l'aide sont : 

- Documentation en français 
- [Webmentions](https://www.w3.org/TR/webmention/)
- Performance
- Micropub 

[deploy-to-netlify]: https://app.netlify.com/start/deploy?repository=https://github.com/andybelldesign/hylia&stack=cms
