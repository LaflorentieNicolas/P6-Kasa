# Kasa - Plateforme de location d'appartements

## Scénario

Je suis développeur front-end en freelance pour Kasa, une entreprise de location d’appartements entre particuliers.
Le site de Kasa a été codé il y a maintenant plus de 10 ans en ASP.NET avec un code legacy important. Laura, la CTO, a donc lancé une refonte totale pour passer à une stack complète en JavaScript avec NodeJS côté back-end, et React côté front-end. Kasa en a également profité pour commander de nouvelles maquettes auprès de son designer habituel, qui est en freelance.

---

## Outils et technologies

- **React.js**  
- **React Router**  
- **Sass**  
- **JavaScript (ES6)**  

---

## Ressources
- **Fichier JSON des 20 dernières annonces de logements** : [JSON](https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json)  
- **Outils et contraintes techniques** : [Doc - Contraintes techniques](https://course.oc-static.com/projects/D%C3%A9veloppeur+Web/IW_P8+React+Kasa/Kasa+coding+guidelines+-+IW+-+DW.pdf) 
- **Figma** : [Maquettes](https://www.figma.com/design/2BZEoBhyxt5IwZgRn0wGsL/Kasa_FR?node-id=0-1&p=f)
- **Figma** : [Prototypes du site](https://www.figma.com/proto/2BZEoBhyxt5IwZgRn0wGsL/Kasa_FR?type=design&node-id=3-0&t=x8RBKuR4UiE3hhBW-0&scaling=scale-down&page-id=0%3A1&starting-point-node-id=3%3A0&show-proto-sidebar=1)

---

## Fonctionnalités

- Affichage dynamique des logements avec les détails correspondants.
- Gestion des routes pour naviguer entre les pages :
  - **Accueil**
  - **À propos**
  - **Détails des logements**
  - **Page 404**
- Composants réutilisables (Header, Footer, etc.).
- Gestion des états pour le fonctionnement des menus et modals.
- Ajout d'animations et transitions avec CSS/Sass.



---

## Étapes du projet

### 1. Mise en place de l'environnement

1. Initialisation du projet avec React et Sass.  
2. Configuration des routes avec **React Router**.  
3. Ajout des assets statiques (images, icônes).  



### 2. Implémentation des pages principales

1. **Page d'accueil :**  
   - Affichage des logements sous forme de carte.
   - Intégration des données dynamiques depuis un fichier JSON.

2. **Page "À propos" :**  
   - Présentation des valeurs de Kasa (Fiabilité, Respect, Service, Sécurité).  
   - Utilisation d'un composant accordéon pour afficher les sections.  

3. **Détails des logements :**  
   - Affichage des informations spécifiques à un logement (photos, titre, description, notes).  
   - Gestion de la navigation entre les photos via un carrousel.

4. **Page 404 :**  
   - Affichage d'un message d'erreur en cas de route inconnue.  
   - Lien pour retourner à la page d'accueil.  


### 3. Améliorations et finitions

1. Amélioration des performances :  
   - Optimisation des composants pour éviter les re-rendus inutiles.  
   - Chargement asynchrone des données.

2. Gestion des erreurs et validation des données :  
   - Ajout de messages d'erreur pour des cas spécifiques.  
   - Vérification des données avant affichage.  
