---
title: Améliorations des webmentions sur Micro.blog
date : 2018-10-09
tags: [web, identité, indieauth, indieweb]
permalink: 'microblog-webmentions'
---
tags: [indieweb, webmentions, microblog]
---
Manton Reece a porté aujourd'hui quelques améliorations de webmentions sur [Micro.blog](https://micro.blog/) :

  * Réparé le permalien pour une réponse quand vous n'êtes pas connecté.e, ce qui empêchait les sites externes de vérifier le lien après avoir reçu une Webmention de la part de Micro.blog.
  * Ajouté une prise en charge limitée pour l'acceptation de réponses provenant de sites externes qui n'ont pas un compte  Micro.blog. Auparavant, Micro.blog supprimait les réponses qui ne pouvaient pas être associées à un utilisateur existant. Maintenant, ces réponses seront incluses dans un fil de discussion utilisant le nom de domaine de l'auteur. (Les réponses de Brid.gy provenant de Twitter ne sont pas encore prises en charge.)
  * Amélioré la réponse sur Micro.blog pour envoyer des Webmentions à n'importe quel site externe, pas seulement le post racine. Cela permet de manière plus cohérente de copier les réponses dans plusieurs blogs externes participant à la conversation.
  * Depuis quelques mois, Micro.blog enregistre tous les Webmentions entrantes, même si elles ne ciblent pas une réponse spécifique ou ne peuvent tout simplement pas être traitées. Cela devrait nous permettre à l'avenir d'ajouter plus de fonctionnalités liées aux réponses pour les blogs hébergés.

Il reste peut-être quelques bizarreries à résoudre avec ces changements, mais je suis heureux d’achever la plomberie autour des réponses sur Micro.blog. Se rapprocher de la vision d’IndieWeb [en ce qui concerne le fonctionnement des réponses intersites sur le Web](https://alistapart.com/article/webmentions-enabling-better-communication-on-the-internet).
