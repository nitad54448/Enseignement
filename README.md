# A Collection of Simulators

Welcome to a collection of interactive simulators designed to explore various concepts in physics, with a focus on **crystallography**, **materials science**, and **optics**. These tools were developed using HTML and JavaScript, with the Three.js library for 3D visualizations.

**Author:** NitaD, Université Paris-Saclay
**Version:** June 10, 2025

---

## Overview of Simulators

1.  [WaveXplorer - Wave Phenomena Explorer](#1-wavexplorer---wave-phenomena-explorer)
2.  [Miller Planes Viewer](#2-miller-planes-viewer)
3.  [Reciprocal Space Viewer](#3-reciprocal-space-viewer)
4.  [Atomic Energy Level Diagram](#4-atomic-energy-level-diagram)
5.  [XRD Emission Spectra Simulator](#5-xrd-emission-spectra-simulator)
6.  [XRD Absorption and Filters Simulator](#6-xrd-absorption-and-filters-simulator)
7.  [Ewald Sphere and XRD Viewer](#7-ewald-sphere-and-xrd-viewer)
8.  [Experimental Diffraction Methods](#8-experimental-diffraction-methods)
9.  [Kiessig Fringes Simulator](#9-kiessig-fringes-simulator)

---

## Simulator Descriptions

All simulators are directly accessible via GitHub Pages. Click the links below to launch them.

### 1. WaveXplorer - Wave Phenomena Explorer
[**Launch WaveXplorer**](https://nitad54448.github.io/Enseignement/WaveXplorer.html)

WaveXplorer is a versatile tool for visualizing and understanding various fundamental concepts of waves.

* **Concepts Covered**:
    * **Wavelength & Amplitude**: Visualize a sinusoidal wave with adjustable parameters.
    * **Phase (Phase Shift)**: Compare two waves with an adjustable phase difference.
    * **Polarization**: Illustrates linear (vertical, horizontal), circular (right, left), elliptical, and unpolarized light, with temporal and spatial viewing modes.
    * **Poynting Vector**: Schematic representation of an electromagnetic wave and the direction of the Poynting vector.
    * **Phase/Group Velocity**: Simulate a single wave (phase velocity) or a wave packet (phase and group velocities) with an adjustable dispersion factor.
    * **Wave Type (Comparison)**: Animate particles to illustrate transverse and longitudinal waves.
    * **Wavefront**: Visualize plane and spherical wavefronts.
* **Technologies**: HTML, JavaScript, Three.js.

---

### 2. Miller Planes Viewer
[**Launch Miller Planes Simulator**](https://nitad54448.github.io/Enseignement/Miller.html)

Visualize (hkl) crystallographic planes.

* **Features**:
    * Displays three successive planes.
    * Shows nodes with systematic extinctions.
    * Calculates interplanar distances.
* **Technologies**: HTML, JavaScript, Three.js.

---

### 3. Reciprocal Space Viewer
[**Launch Reciprocal Space Simulator**](https://nitad54448.github.io/Enseignement/RSpace.html)

This tool allows for the visualization of a reciprocal lattice for all crystal systems.

* **Features**:
    * Choose the crystal system and centering.
    * Shows systematic extinctions.
    * Explore hkl indices and distances between nodes.
* **Technologies**: HTML, JavaScript, Three.js.

---

### 4. Atomic Energy Level Diagram
[**Launch Atomic Levels Simulator**](https://nitad54448.github.io/Enseignement/niveaux_atomiques.html)

This viewer schematically displays atomic energy levels (K, L, M) for different elements and allows visualization of common electronic transitions (Kα, Kβ, Lα, etc.).

* **Features**:
    * Select an element (H, He, Mn, Fe, Co, Ni, Cu, Zn, Mo, Au).
    * Choose an energy transition (Kα1, Kα2, Kβ1, Lα1, Lβ1).
    * Display energy levels (in eV or keV) and the selected transition.
    * Calculate and display the energy and wavelength of the photon emitted during the transition.
    * Shows the selection rules for electric dipole transitions.
* **Technologies**: HTML, JavaScript, 2D Canvas API.

---

### 5. XRD Emission Spectra Simulator
[**Launch Emission Simulator**](https://nitad54448.github.io/Enseignement/Emission.html)

This simulator generates and displays X-ray emission spectra, including Bremsstrahlung radiation and characteristic lines.

* **Features**:
    * Choose the anode element (Sc to Zn).
    * Adjust the accelerating voltage and tube current.
    * Display the resulting emission spectrum (intensity vs. wavelength/energy).
    * Overlay multiple spectra for comparison.
    * Clear overlaid spectra.
    * Manually adjust the x-axis limits (wavelength).
    * Click near a characteristic line on the main spectrum to display a tooltip with a schematic diagram of the corresponding electron transition (K, L, M).
* **Technologies**: HTML, JavaScript, 2D Canvas API, SVG.

---

### 6. XRD Absorption and Filters Simulator
[**Launch Filters Simulator**](https://nitad54448.github.io/Enseignement/filtres.html)

This tool simulates the X-ray emission from an anode, the effect of a filter on the spectrum, and displays the filter's mass absorption coefficient.

* **Features**:
    * Choose the anode element (Sc to Zn).
    * Set the acceleration voltage and tube current.
    * Select the filter element and its thickness.
    * Display the initial emission spectrum (Bremsstrahlung and characteristic K and L lines).
    * Display the mass absorption coefficient (μ/ρ) of the filter versus wavelength/energy (linear or logarithmic scale).
    * Display the spectrum after filtering.
    * Manually adjust the x-axis limits (wavelength).
* **Technologies**: HTML, JavaScript, 2D Canvas API.

---

### 7. Ewald Sphere and XRD Viewer
[**Launch Ewald Sphere Simulator**](https://nitad54448.github.io/Enseignement/ewald.html)

This simulator visualizes the construction of the Ewald sphere in reciprocal space for an orthorhombic lattice.

* **Features**:
    * Define orthorhombic lattice parameters (a, b, c).
    * Select the X-ray wavelength (λ).
    * Choose the Bravais lattice type (Primitive, Body-Centered, Face-Centered, Base-Centered).
    * Set the (h, k, l) range to display for the reciprocal lattice.
    * Rotate the crystal (and thus the reciprocal lattice) around the X, Y, and Z axes.
    * Adjust a disorder level to simulate the broadening and attenuation of diffraction spots.
    * View reciprocal lattice points, the Ewald sphere, and the incident wave vector.
    * Identify points in diffraction condition (intersection with the sphere).
    * Click on a point in diffraction to calculate its 2θ angle.
* **Technologies**: HTML, JavaScript, Three.js.

---

### 8. Experimental Diffraction Methods
[**Launch Diffraction Methods Simulator**](https://nitad54448.github.io/Enseignement/DiffractionMethods.html)

This software visualizes the reciprocal lattice for three different experimental diffraction methods.

* **Features**:
    * Choose between single-crystal and powder diffraction methods.
    * Shows systematic extinctions.
    * Explore hkl indices and distances between nodes.
* **Technologies**: HTML, JavaScript, Three.js.

---

### 9. Kiessig Fringes Simulator
[**Launch Kiessig Fringes Simulator**](https://nitad54448.github.io/Enseignement/kiessig.html)

This simulator interactively demonstrates X-ray Reflectivity (XRR) for a single film with interface roughness. The footer of the program notes it uses the Parratt formalism with Névot-Croce roughness.

* **Features**:
    * Adjust the film's thickness.
    * Define electron density for the film and substrate.
    * Set the roughness for the top surface (σ₀₁) and the film/substrate interface (σ₁₂).
    * Calculates and displays the reflectivity curve.
    * Interactively visualize how parameters modify the XRR profile.
* **Technologies**: HTML, JavaScript, D3.js.

***

Feel free to contribute or report issues!
