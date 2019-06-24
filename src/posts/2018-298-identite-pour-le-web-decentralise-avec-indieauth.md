---
date: '2018-10-25'
title: 'Identité pour le Web Décentralisé avec IndieAuth'
tags: [web, identité, indieauth, indieweb]
permalink: 'identite-web-avec-indieauth'
---

Ceci est une traduction de l'article "[Identity for the Decentralized Web with IndieAuth](https://hacks.mozilla.org/2018/10/dweb-identity-for-the-decentralized-web-with-indieauth/)" publié le 24 octobre 2018 par [Aaron Parecki](https://aaronparecki.com/) sur [Hacks.Mozilla.org (#Dweb)](https://hacks.mozilla.org/category/dweb/).

<blockquote><p>Dans la série Dweb, nous couvrons des projets qui explorent ce qui est possible lorsque le web devient décentralisé ou distribué. Ces projets ne sont pas affiliés à Mozilla et certains d’entre eux réécrivent les règles sur la manière dont nous concevons un navigateur Web. Ce qu’ils ont en commun : ces projets sont open source et ouverts à la participation. Ils partagent la mission de Mozilla, qui est de garder le web ouvert et accessible à tous.</p>
<p>Nous avons couvert jusqu’à présent un certain nombre de projets de cette série qui nécessitent des modifications au niveau de la fondation de l’architecture réseau du web. Mais parfois, le simple fait de changer notre façon d'utiliser le web que nous avons aujourd'hui peut avoir de grandes conséquences.
</p>

<p>Imaginez que vous n'ayez plus jamais besoin de vous souvenir d'un mot de passe pour vous connecter à un site web ou à une application. IndieAuth est un moyen simple mais puissant de gérer et de vérifier l'identité à l'aide de la décentralisation déjà intégrée au web. Nous sommes heureux de vous présenter Aaron Parecki, cofondateur du mouvement IndieWeb, qui vous montrera comment créer votre propre identité indépendante sur le web avec IndieAuth.</p>

<footer>— <a href="https://mastodon.social/@dietrich">Dietrich Ayala</a></footer>
</blockquote>

## Présentation de IndieAuth

IndieAuth est un protocole de connexion décentralisé qui permet aux utilisateurs de votre logiciel de se connecter à d'autres applications.

Du point de vue de l'utilisateur, il vous permet d'utiliser un compte existant pour vous connecter à différentes applications sans avoir à créer un nouveau mot de passe partout.

IndieAuth s'appuie sur les technologies web existantes, en utilisant des URL comme identificateurs. Cela le rend largement applicable au web aujourd'hui, et il peut être rapidement intégré aux sites web et plateformes web existants.

IndieAuth a été développé au cours de plusieurs années au sein de la [communauté IndieWeb](https://indieweb.org/), un groupe vaguement connecté de personnes travaillant pour permettre aux individus de devenir propriétaires de leur présence en ligne] et il a été publié sous une [Note W3C en 2018](https://www.w3.org/TR/indieauth/).


## Architecture IndieAuth

IndieAuth est une extension de [OAuth 2.0](https://oauth.net/2/) qui permet à tout site web de devenir son propre fournisseur d'identité. Il s'appuie sur OAuth 2.0 et tire parti de toutes les considérations de sécurité existantes et des meilleures pratiques en vigueur dans le secteur en matière d'autorisation et d'authentification.

IndieAuth commence par supposer que chaque identifiant est une URL. Les utilisateurs ainsi que les applications sont identifiés et représentés par une URL.

Lorsqu'un utilisateur se connecte à une application, il commence par entrer l'URL de sa page d'accueil personnelle. L'application récupère cette URL et trouve où envoyer l'utilisateur à s'authentifier, puis l'envoie là-bas et peut ensuite vérifier que l'authentification a abouti. L'organigramme ci-dessous parcourt chaque étape de l'échange :

[![Diagramme présentant le workflow IndieAuth, du navigateur au client, vers l’URL de l’utilisateur jusqu’au point de terminaison](https://2r4s9p1yi1fa2jd7j43zph8r-wpengine.netdna-ssl.com/files/2018/10/IndieAuth-diagram-.jpg)](https://2r4s9p1yi1fa2jd7j43zph8r-wpengine.netdna-ssl.com/files/2018/10/IndieAuth-diagram-.jpg)

## Démarrez avec IndieAuth

Le moyen le plus rapide d’utiliser votre site web existant en tant qu’identité IndieAuth consiste à laisser un service existant gérer les bits de protocole et indiquer aux applications où trouver le service que vous utilisez.

Si votre site utilise WordPress, vous pouvez commencer facilement en installant le [plugin IndieAuth](https://wordpress.org/plugins/indieauth/) !  Une fois que vous avez installé et activé le plug-in, votre site web sera un fournisseur IndieAuth complet et vous pourrez vous connecter immédiatement à des sites web tels que [https://indieweb.org](https://indieweb.org) !

Pour configurer manuellement votre site web, vous devez choisir un serveur IndieAuth tel que [https://indieauth.com](https://indieauth.com) et ajouter quelques liens vers votre page d'accueil. Ajoutez un lien vers le noeud final d'autorisation _indieauth.com_ dans une balise HTML `<link>` afin que les applications sachent où vous envoyer pour vous connecter.

    <link rel="authorization_endpoint" href="https://indieauth.com/auth">

Puis indiquez à _indieauth.com_ comment vous authentifier en vous connectant à un compte GitHub ou à une adresse e-mail.
    
    <a href="https://github.com/votrenomutilisateur" rel="me">GitHub</a>
    <a href="mailto:you@exemple.com" rel="me">E-mail</a>
  
Remarque : cette dernière étape est propre à _indieauth.com_ et ne fait pas partie de la spécification IndieAuth. C'est ainsi que _indieauth.com_ peut vous authentifier sans que vous y créiez de mot de passe. Il vous permet de désactiver le mécanisme que vous utilisez pour vous authentifier, par exemple si vous décidez de ne plus utiliser GitHub, sans modifier votre identité sur le site auquel vous vous connectez.

Si vous ne souhaitez pas du tout recourir à des services tiers, vous pouvez [héberger votre propre noeud final d'autorisation IndieAuth](https://indieweb.org/IndieAuth#Implementations) en utilisant une solution open source existante ou en créant le vôtre. Dans tous les cas, il est bon de commencer à utiliser un service pour cela aujourd’hui, car vous pourrez toujours l’échanger ultérieurement sans changer d’identité.

Maintenant vous êtes prêt ! Lorsque vous vous connectez à un site Web tel que [https://indieweb.org](https://indieweb.org), il vous sera demandé de saisir votre URL, puis de vous authentifier sur le serveur IndieAuth de votre choix !

## Pour en savoir plus

Si vous aimeriez en savoir plus, [OAuth for the Open Web](https://aaronparecki.com/2018/07/07/7/oauth-for-the-open-web) traite en profondeur des détails techniques et des motivations derrière la spécification. IndieAuth.

Vous pouvez apprendre comment construire votre propre serveur IndieAuth en suivant les liens suivants : 

  * [Creating an Authorization Endpoint](https://indieweb.org/authorization-endpoint)
  * [Creating a Token Endpoint](https://indieweb.org/token-endpoint)

Vous pouvez trouver la dernière spécification sur [indieauth.spec.indieweb.org](https://indieauth.spec.indieweb.org/). Si vous avez des questions, sentez-vous à l'aise pour les poser sur le canal #indieweb-dev dans le [chat IndieWeb](https://indieweb.org/discuss), et retrouvez Aaron sur [Twitter](https://twitter.com/aaronpk) ou sur [son site web](https://aaronparecki.com/aaronpk).

## Qui est [Aaron Parecki](https://aaronparecki.com/)

<span style = "float:right">![Aaron Parecki](https://2r4s9p1yi1fa2jd7j43zph8r-wpengine.netdna-ssl.com/files/2018/10/aaron@parecki.com_avatar_1539906454-64x64.jpg)</span>

[Aaron Parecki](https://aaronparecki.com) est le co-fondateur du mouvement IndieWeb, et il maintient oauth.net. Il est engagé dans les standards du web depuis 2010, et il est l’auteur de plusieurs recommandations W3C.




