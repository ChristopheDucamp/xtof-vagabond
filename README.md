# Un projet de site web collaboratif pour partir naviguer en 2010 aux îles Marquises

J'ai choisi le paquet de code Hylia associé à une motorisation [Eleventy](https://11ty.io) pour pouvoir disposer d'un [CMS Netlify](https://www.netlifycms.org/) préconfiguré, afin de disposer d'un petit blog ouvert aux amis et à la famille. Le package proposé par Andy Bell me semble bien organisé pour envisager un premier point de départ personnel pour quelques réglages indieweb avant d'inviter des amis voyageurs à contribuer dans une interface de publication accessible aux non développeurs.

## Fonctionnalités

Hylia version 0.2.0 :

✍️ A pre-configured [Netlify CMS](https://www.netlifycms.org/) setup  
🎨 Customisable design tokens to make it your own  
🌍 Customisable global data and navigation  
📂 Tags and tag archives  
✅ Progressively enhanced, semantic and accessible  
🎈 _Super_ lightweight front-end  
🚰 Sass powered CSS system with utility class generator  
⚙️  Service worker that caches pages so people can read your articles offline  
🚀 An RSS feed for your posts

## Plan de Route 

💬 [Netlify Forms](https://www.netlify.com/docs/form-handling/) powered comments  
💡 Dark/Light mode toggle  
🗣 Webmentions  
📖 Pagination  
🐦 Web sharing API integration  
🗒 Offline mode with links to cached pages  
📄 Documentation site  
💅 Proper Sass documentation  
✍️ Proper CMS documentation  
🖼 A facility for you to be able to add your logo / branding

***

## Démarrage 

### Chosi la Méthode d'un déploiement en un-clic vis Netlify 

Vous pouvez aussi [déployer Hylia vers Netlify en un clic][deploy-to-netlify] et vous aurez votre site fonctionnel en quelques minutes.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)][deploy-to-netlify]

Andy Bell a enregistré une vidéo rapide de son déploiement d'Hylia ver Netlify pour paramétrer le Gestionnaire de Contenu. [Regardez ici](https://youtu.be/0hM_0BH-Y_A).


### Méthode deux : Cloner / Forker

1. Clone or fork this repo: `git clone https://github.com/andybelldesign/hylia`
2. `cd` into the project directory and run `npm install`
3. Once all the dependencies are installed run `npm start`
4. Open your browser at `http://localhost:8080` and away you go!

## Commandes de Terminal à tester 

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

Before you can use the CMS, you need to do some config in Netlify. Luckily they provide a [very handy guide to get started](https://www.netlify.com/docs/identity/).

In short, though:

- Once you’ve set up the site on Netlify, go to “Settings” > “Identity” and enable Identity
- Scroll down to the “Git Gateway” area, click “Enable Git Gateway” and follow the steps
- Click the “Identity” tab at the top
- Once you’ve enabled identity, click “Invite Users”
- Check the invite link in your inbox and click the link in the email that’s sent to you
- Set a password in the popup box
- Go to `/admin` on your site and login
- You’re in and ready to edit your content!

## Design Tokens et Guide de Style

### Design Tokens

Although Hylia has a pretty simple design, you can configure the core design tokens that control the colours, size ratio and fonts.

***

**Note**: *Credit must be given to the hard work [Jina Anne](https://aycl.uie.com/virtual_seminars/design_tokens_scaling_design_with_a_single_source_of_truth) did in order for the concept of design tokens to even exist. You should watch [this video](https://www.youtube.com/watch?v=wDBEc3dJJV8), then [read this article](https://the-pastry-box-project.net/jina-bolton/2015-march-28) and then sign up for [this course](https://twitter.com/jina) to expand your knowledge.*

***

To change the design tokens in the CMS, find the “Globals” in the sidebar then in the presented options, select “Theme Settings”.

To change the design tokens directly, edit [`_src/data/tokens.json`](https://github.com/andybelldesign/hylia/blob/master/src/_data/tokens.json).

The tokens are converted into maps that the Sass uses to compile the front-end CSS, so make sure that you maintain the correct structure of `tokens.json`.

### Styleguide

Your version of Hylia ships with a Styleguide by default. You can see a demo of the Styleguide at <https://hylia.website/styleguide/>.

You can edit the Styleguide by opening [`src/styleguide.njk`](https://github.com/andybelldesign/hylia/blob/master/src/styleguide.njk). If you don’t want the Styleguide, delete that file and the page will vanish.

## Sass

Hylia is based on the [WIP v2 version of Stalfos](https://github.com/andybelldesign/stalfos/tree/feature/v2), which currently has no documentation (I know, I’m bad). Here is some very basic documentation for elements of the new framework that you will encounter on this project.

### Configuration

The whole Sass system is powered by central config file, which lives here: [`_src/scss/_config.scss`](https://github.com/andybelldesign/hylia/blob/master/src/scss/_config.scss).

Before Sass is compiled, a `_tokens.scss` file is generated from the [design tokens config](https://github.com/andybelldesign/hylia/blob/master/src/_data/tokens.json) which is required.

Key elements:

- `$stalfos-size-scale`: A token driven size scale which by default, is a “Major Third” scale
- `$stalfos-colors`: A token driven map of colours
- `$stalfos-util-prefix`: All pre-built, framework utilities will have this prefix. Example: the wrapper utility is '.sf-wrapper' because the default prefix is 'sf-'
- `$metrics`: Various misc metrics to use around the site
- `$stalfos-config`: This powers everything from utility class generation to breakpoints to enabling/disabling pre-built components/utilities

### How to create a new utility class with the generator

The utility class generator lets you generate whatever you want, with no opinions on class name or properties affected.

To add a new class, add another item to the exists `$stalfos-config` map. This example adds a utility for floating elements.

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

The `output` is set to `responsive` which means every breakpoint will generate a prefixed class for itself. If you only wanted elements to float left in the `md` breakpoint, you’d now be able to add a class of `md:float-left` to your HTML elements.

If you only want standard utility classes generating, set the `output` to `standard`.

### Functions

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
- **Navigation**: Edit your primary navigation items
- **Theme**: Edit the design tokens that power the site’s theme

## Venez m'aider 

Ce projet est _super_ neuf et votre feedback sera le bienvenu. Afin que les choses puissent tourner en douceur, regardez SVP le  [guide de contribution et le code de conduite](https://github.com/andybelldesign/hylia/blob/master/contributing.md).

Les trucs où j'attends de l'aide sont : 

- Documentation en français 
- [Webmentions](https://www.w3.org/TR/webmention/)
- Performance
- Micropub 

[deploy-to-netlify]: https://app.netlify.com/start/deploy?repository=https://github.com/andybelldesign/hylia&stack=cms
