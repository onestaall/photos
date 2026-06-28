# Jardin de Bulbes

Petit jeu idle / clicker jouable directement dans le navigateur, inspiré de Cookie Clicker, où vous plantez des bulbes, faites évoluer vos plantes et débloquez de nouvelles espèces.

## Fonctionnalités

- **Clic principal** : cliquez sur le grand bulbe au centre pour gagner de l'**essence florale**.
- **Plantes passives** : dépensez votre essence pour acheter et améliorer différentes plantes qui produisent de l'essence automatiquement.
- **Améliorations** : débloquez des bonus qui renforcent vos clics et votre production passive.
- **Sauvegarde automatique** : la partie est régulièrement sauvegardée dans le navigateur (localStorage).
- **UI moderne** : interface sombre, effets lumineux et animations légères pour un rendu agréable sans sacrifier les performances.

## Lancer le jeu

Aucune installation n'est nécessaire :

1. Assurez-vous que les fichiers suivants sont dans le même dossier :
   - `index.html`
   - `style.css`
   - `main.js`
2. Ouvrez simplement `index.html` dans un navigateur moderne (Chrome, Edge, Firefox, etc.).

> Astuce : sur certains navigateurs, il est plus fiable d'ouvrir le jeu via un petit serveur local (ex. avec l'extension "Live Server" de VS Code), mais pour ce projet tout fonctionne aussi en ouvrant directement le fichier.

## Contrôles

- **Clic gauche** sur le bulbe principal : gagne une quantité d'essence florale (affichée en haut à gauche).
- **Panneau de droite – Serre & évolutions** :
  - Onglet **Plantes** : liste des plantes que vous pouvez acheter (coût, production, multiplicateurs).
  - Onglet **Améliorations** : bonus permanents pour les clics et/ou la production passive.
- **Bouton "Nouvelle partie"** en haut à droite : réinitialise la progression (après confirmation).

## Structure du projet

- `index.html` : structure de la page et conteneurs pour l'interface du jeu.
- `style.css` : thème visuel (fond, panneaux, jardin, bulbe principal, cartes des plantes, animations).
- `main.js` : logique de jeu (ressources, plantes, upgrades, boucle de mise à jour, sauvegarde/chargement).

## Performances

- Une seule boucle de jeu via `requestAnimationFrame` qui gère la production passive.
- Calculs de production basés sur un delta de temps (pour rester fluide même si l'onglet se met en sommeil).
- Accès DOM groupés (mise à jour des cartes de plantes et des upgrades en une seule passe).

## Personnalisation

Vous pouvez facilement :

- Ajouter de nouvelles plantes dans le tableau `PLANTS` de `main.js`.
- Ajouter de nouvelles améliorations dans le tableau `UPGRADES`.
- Ajuster les coûts, la production et les multiplicateurs pour changer l'équilibrage.

