---
title: Échantillon de code
subtitle: Utiliser Hugo pour la mise en surbrillance
date: 2017-07-27
tags: ["exemple", "code"]
---

Un échantillon de code utilisant la mise en surbrillance de syntaxe intégrée dans Hugo..

<!--more-->

Ce qui suit est un exemple de code à l'aide de  triple backticks (```) glissés dans Hugo. Il s'agit de la mise en surbrillance du côté client et cela ne nécessite **aucune installation spéciale**. 


```javascript
    var num1, num2, sum
    num1 = prompt("Enter first number")
    num2 = prompt("Enter second number")
    sum = parseInt(num1) + parseInt(num2) // "+" means "add"
    alert("Sum = " + sum)  // "+" means combine into a string
```

<!--

Voici un exemple de code en utilisant le code abrégé "en surbrillance" fourni dans Hugo. Il s'agit de la mise en surbrillance du côté serveur et cela nécessite que Python et Pygments soient installés.

{{< highlight javascript >}}
    var num1, num2, sum
    num1 = prompt("Enter first number")
    num2 = prompt("Enter second number")
    sum = parseInt(num1) + parseInt(num2) // "+" means "add"
    alert("Sum = " + sum)  // "+" means combine into a string
{{</ highlight >}}


Et voici le même code avec les numéros de ligne :

{{< highlight javascript "linenos=inline">}}
    var num1, num2, sum
    num1 = prompt("Enter first number")
    num2 = prompt("Enter second number")
    sum = parseInt(num1) + parseInt(num2) // "+" means "add"
    alert("Sum = " + sum)  // "+" means combine into a string
{{</ highlight >}}

-->
