# Ma petite collection de simulateurs

Bienvenue dans cette collection de simulateurs interactifs conçus pour explorer divers concepts de physique, notamment en cristallographie, science des matériaux et optique. Ces outils ont été développés en HTML et JavaScript, avec une utilisation de la bibliothèque Three.js pour les visualisations 3D.

**Auteur:** NitaD, Université Paris-Saclay
**Version:** 04 Juin 2025

## Accès aux Simulateurs

Tous les simulateurs sont accessibles directement via GitHub Pages. Cliquez sur les liens ci-dessous pour les lancer :

1.  **[Visualiseur de Sphère d'Ewald et Diffraction RX (`ewald.html`)](#1-visualiseur-de-sphère-dewald-et-diffraction-rx)**
2.  **[Simulateur d'Absorption et Filtres RX (`filtres.html`)](#2-simulateur-dabsorption-et-filtres-rx)**
3.  **[Diagramme des Niveaux d'Énergie Atomique (`niveaux_atomiques.html`)](#3-diagramme-des-niveaux-dénergie-atomique)**
4.  **[WaveXplorer - Explorateur de Phénomènes Ondulatoires (`WaveXplorer.html`)](#4-wavexplorer---explorateur-de-phénomènes-ondulatoires)**
5.  **[Simulateur de Spectres d'Émission RX (`Emission.html`)](#5-simulateur-de-spectres-démission-rx)**

---

## Description des Simulateurs

### 1. Visualiseur de Sphère d'Ewald et Diffraction RX
Lien direct : [**Lancer `ewald.html`**](https://nitad54448.github.io/enseignement/ewald.html)

Ce simulateur permet de visualiser la construction de la sphère d'Ewald dans l'espace réciproque pour une maille orthorhombique.
* **Fonctionnalités :**
    * Définition des paramètres de maille (a, b, c) orthorhombiques.
    * Choix de la longueur d'onde (λ) du rayonnement X.
    * Sélection du type de réseau de Bravais orthorhombique (Primitif, Centré, Faces Centrées, Base Centrée).
    * Définition du domaine (h, k, l) à afficher pour le réseau réciproque.
    * Rotation du cristal (et donc du réseau réciproque) autour des axes X, Y, Z.
    * Ajustement d'un niveau de désordre pour simuler l'élargissement et l'atténuation des taches de diffraction.
    * Visualisation des points du réseau réciproque, de la sphère d'Ewald, et du vecteur d'onde incident.
    * Identification des points en condition de diffraction (intersection avec la sphère).
    * Calcul de l'angle 2θ pour les points en diffraction en cliquant dessus.
* **Technologies :** HTML, JavaScript, Three.js.

*(Suggestion : Ajoutez ici une capture d'écran de `ewald.html`)*
`![Aperçu Ewald](./images/ewald.png)`

### 2. Simulateur d'Absorption et Filtres RX
Lien direct : [**Lancer `filtres.html`**](https://VOTRE_NOM_UTILISATEUR.github.io/VOTRE_NOM_DEPOT/filtres.html)

Cet outil simule l'émission de rayons X par une anode, l'effet d'un filtre sur ce spectre, et affiche le coefficient d'absorption massique du filtre.
* **Fonctionnalités :**
    * Choix de l'élément de l'anode (Sc, Ti, V, Cr, Mn, Fe, Co, Ni, Cu, Zn).
    * Réglage de la tension d'accélération et du courant du tube.
    * Choix de l'élément du filtre et de son épaisseur.
    * Affichage du spectre d'émission initial (Bremsstrahlung et raies caractéristiques K et L).
    * Affichage du coefficient d'absorption massique (μ/ρ) du filtre en fonction de la longueur d'onde/énergie (échelle linéaire ou logarithmique).
    * Affichage du spectre après filtrage.
    * Ajustement manuel des limites de l'axe des abscisses (longueur d'onde).
* **Technologies :** HTML, JavaScript, API Canvas 2D.

*(Suggestion : Ajoutez ici une capture d'écran de `filtres.html`)*
`![Aperçu Filtres RX](./images/filtres_preview.png)`

### 3. Diagramme des Niveaux d'Énergie Atomique
Lien direct : [**Lancer `niveaux_atomiques.html`**](https://VOTRE_NOM_UTILISATEUR.github.io/VOTRE_NOM_DEPOT/niveaux_atomiques.html)

Ce visualiseur affiche schématiquement les niveaux d'énergie atomiques (K, L, M) pour différents éléments et permet de visualiser les transitions électroniques courantes (Kα, Kβ, Lα, etc.).
* **Fonctionnalités :**
    * Sélection de l'élément (H, He, Mn, Fe, Co, Ni, Cu, Zn, Mo, Au).
    * Choix d'une transition énergétique (Kα1, Kα2, Kβ1, Lα1, Lβ1).
    * Affichage des niveaux d'énergie (en eV ou keV) et de la transition sélectionnée.
    * Calcul et affichage de l'énergie et de la longueur d'onde du photon émis lors de la transition.
    * Rappel des règles de sélection pour les transitions dipolaires électriques.
* **Technologies :** HTML, JavaScript, API Canvas 2D.

*(Suggestion : Ajoutez ici une capture d'écran de `niveaux_atomiques.html`)*
`![Aperçu Niveaux Atomiques](./images/niveaux_atomiques_preview.png)`

### 4. WaveXplorer - Explorateur de Phénomènes Ondulatoires
Lien direct : [**Lancer `WaveXplorer.html`**](https://VOTRE_NOM_UTILISATEUR.github.io/VOTRE_NOM_DEPOT/WaveXplorer.html)

WaveXplorer est un outil polyvalent pour visualiser et comprendre divers concepts fondamentaux des ondes.
* **Fonctionnalités (Concepts) :**
    * **Longueur d'onde & Amplitude :** Visualisation d'une onde sinusoïdale avec paramètres ajustables.
    * **Phase (Déphasage) :** Comparaison de deux ondes avec un déphasage réglable.
    * **Polarisation :** Illustration de la polarisation linéaire (verticale, horizontale), circulaire (droite, gauche), elliptique et non polarisée, avec modes de visualisation temporel (vecteur tournant à x=0) et spatial (instantané le long de l'axe x).
    * **Vecteur de Poynting :** Représentation schématique d'une onde électromagnétique et de la direction du vecteur de Poynting.
    * **Vitesses de Phase/Groupe :** Simulation d'une onde simple (vitesse de phase) ou d'un paquet d'ondes (vitesses de phase et de groupe) avec un facteur de dispersion ajustable.
    * **Type d'Onde (Comparaison) :** Animation de particules pour illustrer les ondes transversales et longitudinales.
    * **Front d'Onde :** Visualisation de fronts d'onde plans et sphériques.
* **Technologies :** HTML, JavaScript, Three.js.

*(Suggestion : Ajoutez ici une capture d'écran de `WaveXplorer.html`)*
`![Aperçu WaveXplorer](./images/wavexplorer_preview.png)`

### 5. Simulateur de Spectres d'Émission RX
Lien direct : [**Lancer `Emission.html`**](https://VOTRE_NOM_UTILISATEUR.github.io/VOTRE_NOM_DEPOT/Emission.html)

Ce simulateur permet de générer et de visualiser des spectres d'émission de rayons X, incluant le rayonnement de Bremsstrahlung et les raies caractéristiques.
* **Fonctionnalités :**
    * Choix de l'élément de l'anode (Sc à Zn).
    * Réglage du potentiel d'accélération et du courant du tube.
    * Affichage du spectre d'émission résultant (intensité en fonction de la longueur d'onde/énergie).
    * Possibilité de superposer plusieurs spectres pour comparaison.
    * Effacement des spectres superposés.
    * Ajustement manuel des limites de l'axe des abscisses (longueur d'onde).
    * En cliquant près d'une raie caractéristique sur le spectre principal, une petite fenêtre (tooltip) s'affiche avec un diagramme schématique de la transition électronique correspondante (K, L, M).
* **Technologies :** HTML, JavaScript, API Canvas 2D, SVG (pour le diagramme de transition).

*(Suggestion : Ajoutez ici une capture d'écran de `Emission.html`)*
`![Aperçu Emission RX](./images/emission_preview.png)`

---

## Comment utiliser ce dépôt sur GitHub Pages

1.  **Forkez ou clonez ce dépôt** sur votre propre compte GitHub. Si vous le clonez, créez un nouveau dépôt public sur GitHub et poussez-y les fichiers.
2.  Assurez-vous que tous les fichiers HTML (`ewald.html`, `filtres.html`, etc.) sont à la **racine** de votre dépôt.
3.  Allez dans les **Settings (Paramètres)** de votre dépôt GitHub.
4.  Naviguez vers la section **Pages** dans le menu de gauche.
5.  Sous "Build and deployment", pour "Source", sélectionnez **"Deploy from a branch"**.
6.  Sous "Branch", choisissez la branche `main` (ou `master`) et le dossier `/ (root)`.
7.  Cliquez sur **Save**.
8.  Après quelques instants, votre site devrait être déployé. L'URL sera généralement de la forme `https://VOTRE_NOM_UTILISATEUR.github.io/VOTRE_NOM_DEPOT/`.
9.  **Important :** Mettez à jour les liens dans ce fichier `README.md` pour qu'ils pointent vers votre URL GitHub Pages (remplacez `VOTRE_NOM_UTILISATEUR` et `VOTRE_NOM_DEPOT`).

## Suggestions d'amélioration

* Créez un dossier `images` à la racine de votre dépôt.
* Prenez des captures d'écran pour chaque simulateur et sauvegardez-les dans le dossier `images` (par exemple, `ewald_preview.png`, `filtres_preview.png`, etc.).
* Décommentez ou modifiez les lignes `![Aperçu...]` dans ce README pour afficher les images.
* Vous pouvez également créer un fichier `index.html` principal qui sert de portail vers les autres simulateurs, plutôt que d'utiliser `README.md` comme page d'accueil par défaut de GitHub Pages (bien que `README.md` fonctionne bien s'il est le seul fichier `index` ou `readme` à la racine).

---

N'hésitez pas à contribuer ou à signaler des problèmes !
