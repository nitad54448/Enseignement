# A Collection of Simulators

> A collection of interactive simulators designed to explore various concepts in physics, with a focus on **crystallography**, **materials science**, and **optics**. These tools were developed using HTML and JavaScript, with the Three.js library for 3D visualizations.

* **Author:** NitaD, Université Paris-Saclay
* **Versions:** 2007-2025
* **Last Updated:** July 14, 2025

---

## Simulators Overview

| Simulator | Description |
| :--- | :--- |
| 🌊 [**WaveXplorer**](https://nitad54448.github.io/Enseignement/WaveXplorer.html) | A versatile tool for visualizing and understanding various fundamental concepts of waves. |
| 🎯 [**Wave Scattering**](https://nitad54448.github.io/Enseignement/WaveScattering.html) | An interactive simulation of a wave scattering off a charged particle (Thomson scattering). |
| 💎 [**Miller Planes Viewer**](https://nitad54448.github.io/Enseignement/Miller.html) | Visualize (hkl) crystallographic planes. |
| ↔️ [**Direction Visualizer**](https://nitad54448.github.io/Enseignement/Directions.html) | Visualize [uvw] crystallographic directions within a unit cell for all crystal systems. |
| 📄 [**Pair Distribution Function Explorer**](pdf.html) | An interactive simulation to explore the Pair Distribution Function (PDF), g(d), for various 2D particle arrangements. |
| 🌐 [**Reciprocal Space Viewer**](https://nitad54448.github.io/Enseignement/RSpace.html) | This tool allows for the visualization of a reciprocal lattice for all crystal systems. |
| ⚛️ [**Atomic Energy Levels**](https://nitad54448.github.io/Enseignement/niveaux_atomiques.html) | This viewer schematically displays atomic energy levels (K, L, M) for different elements. |
| 📈 [**XRD Emission Spectra**](https://nitad54448.github.io/Enseignement/Emission.html) | This simulator generates and displays X-ray emission spectra. |
| 📊 [**XRD Absorption & Filters**](https://nitad54448.github.io/Enseignement/filtres.html) | This tool simulates the X-ray emission from an anode and the effect of a filter. |
| 🌍 [**Ewald Sphere Viewer**](https://nitad54448.github.io/Enseignement/ewald.html) | This simulator visualizes the construction of the Ewald sphere in reciprocal space. |
| 🔬 [**Diffraction Methods**](https://nitad54448.github.io/Enseignement/DiffractionMethods.html) | This software visualizes the reciprocal lattice for three different experimental diffraction methods. |
| 🖥️ [**Single Crystal Diffraction**](4-circles.html) | An advanced simulator for visualizing single-crystal X-ray diffraction patterns. |
| 🎞️ [**Kiessig Fringes**](https://nitad54448.github.io/Enseignement/kiessig.html) | This simulator interactively demonstrates X-ray Reflectivity (XRR) for a single film. |
| ✨ [**2D Fourier Transform**](https://nitad54448.github.io/Enseignement/FT.html) | This explorer visualizes the 2D Fourier Transform of various sources. |
| 🔄 [**2D Radon Transform**](https://nitad54448.github.io/Enseignement/Radon.html) | This tool computes and displays the 2D Radon Transform (Sinogram) of an image. |
| 🎨 [**Color Radon Transform**](https://nitad54448.github.io/Enseignement/ColorRadon.html) | An explorer for the 2D Radon Transform on color images, demonstrating filtered back-projection. |
| 🧊 [**3D Radon Transform**](3D_Radon_-_DS.html) | A 3D explorer for computed tomography, showing the reconstruction of a 3D object from its 2D slices. |
| ✍️ [**2D Hough Explorer**](Hough.html) | An interactive explorer for the Hough Transform, used for line detection in images. |

---

## Simulator Details

### 🌊 1. WaveXplorer - Wave Phenomena Explorer
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

### 🎯 2. Wave Scattering Simulator
[**Launch Wave Scattering Simulator**](https://nitad54448.github.io/Enseignement/WaveScattering.html)

An interactive simulation of a wave scattering off a charged particle, demonstrating the principles of Thomson scattering and dipole radiation.

* **Concepts Covered**:
    * Simulates an incoming plane wave causing a charged particle to oscillate.
    * Visualizes the secondary wave radiated by the accelerating particle.
    * Demonstrates the dipole radiation pattern (torus shape) for linear polarization.
    * Illustrates the phase relationship between the driving field, particle acceleration, and position.
* **Interactive Controls**:
    * Incoming wave polarization (linear, circular).
    * Particle charge (positive, negative, neutral).
    * Particle mass, selectable on a logarithmic scale from an electron to a proton.
* **Technologies**: HTML, JavaScript, Three.js.

---

### 💎 3. Miller Planes Viewer
[**Launch Miller Planes Simulator**](https://nitad54448.github.io/Enseignement/Miller.html)

Visualize (hkl) crystallographic planes.

* **Features**:
    * Displays three successive planes.
    * Shows nodes with systematic extinctions.
    * Calculates interplanar distances.
* **Technologies**: HTML, JavaScript, Three.js.

---

### ↔️ 4. Crystallographic Direction Visualizer
[**Launch Direction Visualizer**](https://nitad54448.github.io/Enseignement/Directions.html)

Visualize [uvw] crystallographic directions within a unit cell for all crystal systems.

* **Features**:
    * Choose from the 7 crystal systems (Cubic to Triclinic).
    * Select the appropriate lattice centering (P, I, F, C, R).
    * Interactively set the [uvw] direction indices.
    * Displays the unit cell, lattice nodes, and the direction vector.
* **Technologies**: HTML, JavaScript, Three.js.

---

### 📄 5. Pair Distribution Function Explorer
[**Launch PDF Explorer**](https://nitad54448.github.io/Enseignement/pdf.html)

An interactive simulation to explore the Pair Distribution Function (PDF), g(d), for various 2D particle arrangements. The footer of the program notes it was created by NitaD, Univ Paris-Saclay, in 2025.

* **Concepts Covered**:
    * **Particle Distribution**: Generate and visualize different 2D arrangements of particles, including crystalline, liquid-like, gaseous, and liquid crystal states.
    * **Pair Distribution Function g(d)**: Calculates and plots the g(d) function, which describes the probability of finding a particle at a certain distance from a reference particle.
    * **Short-Range vs. Long-Range Order**: Observe the distinct features of the g(d) for different states of matter, from the sharp peaks of a crystal to the broad humps of a liquid and the flat line of a gas.
* **Interactive Controls**:
    * **Presets**: Choose from different structural models: Crystal, Compact Crystal, Liquid-like, Gas, and Smectic Liquid Crystal.
    * **Particle Count**: Adjust the number of particles in the simulation box.
    * **Disorder**: Introduce thermal-like random displacements to the particle positions.
    * **Click to Add**: Manually add particles to the distribution.
    * **Distance Highlighting**: A slider interactively highlights a specific distance on both the particle distribution and the g(d) plot.
* **Technologies**: HTML, JavaScript, TailwindCSS, 2D Canvas API.

---

### 🌐 6. Reciprocal Space Viewer
[**Launch Reciprocal Space Simulator**](https://nitad54448.github.io/Enseignement/RSpace.html)

This tool allows for the visualization of a reciprocal lattice for all crystal systems.

* **Features**:
    * Choose the crystal system and centering.
    * Shows systematic extinctions.
    * Explore hkl indices and distances between nodes.
* **Technologies**: HTML, JavaScript, Three.js.

---

### ⚛️ 7. Atomic Energy Level Diagram
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

### 📈 8. XRD Emission Spectra Simulator
[**Launch Emission Simulator**](https://nitad54448.github.io/Enseignement/Emission.html)

This simulator generates and displays X-ray emission spectra, including Bremsstrahlung radiation and characteristic lines.

* **Features**:
    * Choose the anode element (Sc to Zn).
    * Adjust the accelerating voltage and tube current.
    * Display the resulting emission spectrum (intensity vs. wavelength/energy).
    * Overlay multiple spectra for comparison.
    * Click near a characteristic line on the main spectrum to display a tooltip with a schematic diagram of the corresponding electron transition (K, L, M).
* **Technologies**: HTML, JavaScript, 2D Canvas API, SVG.

---

### 📊 9. XRD Absorption and Filters Simulator
[**Launch Filters Simulator**](https://nitad54448.github.io/Enseignement/filtres.html)

This tool simulates the X-ray emission from an anode, the effect of a filter on the spectrum, and displays the filter's mass absorption coefficient.

* **Features**:
    * Choose the anode element (Sc to Zn).
    * Set the acceleration voltage and tube current.
    * Select the filter element and its thickness.
    * Display the initial emission spectrum (Bremsstrahlung and characteristic K and L lines).
    * Display the mass absorption coefficient (μ/ρ) of the filter versus wavelength/energy (linear or logarithmic scale).
    * Display the spectrum after filtering.
* **Technologies**: HTML, JavaScript, 2D Canvas API.

---

### 🌍 10. Ewald Sphere and XRD Viewer
[**Launch Ewald Sphere Simulator**](https://nitad54448.github.io/Enseignement/ewald.html)

This simulator visualizes the construction of the Ewald sphere in reciprocal space for an orthorhombic lattice.

* **Features**:
    * Define orthorhombic lattice parameters (a, b, c).
    * Select the X-ray wavelength (λ).
    * Choose the Bravais lattice type (Primitive, Body-Centered, Face-Centered, Base-Centered).
    * Rotate the crystal (and thus the reciprocal lattice) around the X, Y, and Z axes.
    * Adjust a disorder level to simulate the broadening and attenuation of diffraction spots.
    * Identify points in diffraction condition (intersection with the sphere).
    * Click on a point in diffraction to calculate its 2θ angle.
* **Technologies**: HTML, JavaScript, Three.js.

---

### 🔬 11. Experimental Diffraction Methods
[**Launch Diffraction Methods Simulator**](https://nitad54448.github.io/Enseignement/DiffractionMethods.html)

This software visualizes the reciprocal lattice for three different experimental diffraction methods.

* **Features**:
    * Choose between single-crystal and powder diffraction methods.
    * Shows systematic extinctions.
    * Explore hkl indices and distances between nodes.
* **Technologies**: HTML, JavaScript, Three.js.

---

### 🖥️ 12. Single Crystal Diffraction Simulator
[**Launch Single Crystal Simulator**](4-circles.html)

An advanced simulator for visualizing single-crystal X-ray diffraction. It combines a 3D view of the reciprocal lattice and Ewald sphere with a 2D detector view of the resulting diffraction pattern.

* **Features**:
    * Supports all 7 crystal systems and their corresponding Bravais lattices.
    * Interactive controls for lattice parameters, crystal orientation, and X-ray wavelength.
    * 3D visualization of the reciprocal lattice, Ewald sphere, and diffraction vectors.
    * 2D detector panel showing the projected diffraction pattern.
    * Interactive detector with zoom (mouse wheel/pinch) and pan (left-click drag/two-finger drag) controls.
    * Click on spots in the detector view to identify (h,k,l) indices and highlight the corresponding point in the 3D view.
    * Option to show all reciprocal lattice points or only those in a diffraction condition.
* **Technologies**: HTML, JavaScript, Three.js.

---

### 🎞️ 13. Kiessig Fringes Simulator
[**Launch Kiessig Fringes Simulator**](https://nitad54448.github.io/Enseignement/kiessig.html)

This simulator interactively demonstrates X-ray Reflectivity (XRR) for a single film with interface roughness. The footer of the program notes it uses the Parratt formalism with Névot-Croce roughness.

* **Features**:
    * Adjust the film's thickness.
    * Define electron density for the film and substrate.
    * Set the roughness for the top surface (σ₀₁) and the film/substrate interface (σ₁₂).
    * Calculates and displays the reflectivity curve.
* **Technologies**: HTML, JavaScript, D3.js.

---

### ✨ 14. 2D Fourier Transform Explorer
[**Launch FT Explorer**](https://nitad54448.github.io/Enseignement/FT.html)

This explorer visualizes the 2D Fourier Transform of various sources.

* **Features**:
    * Input can be from an uploaded image, a live webcam feed, or a user-defined function.
    * The transform is calculated using a Radix-2 Fast Fourier Transform (FFT) algorithm.
    * The resulting magnitude is displayed using a logarithmic scale.
* **Technologies**: HTML, JavaScript.

---

### 🔄 15. 2D Radon Transform Explorer
[**Launch Radon Explorer**](https://nitad54448.github.io/Enseignement/Radon.html)

This tool computes and displays the 2D Radon Transform (Sinogram) of an image.

* **Features**:
    * Input can be from an uploaded image, a live webcam feed, or a preset phantom image.
    * Includes a variety of presets such as the Shepp-Logan phantom, circles, squares, and points.
* **Technologies**: HTML, JavaScript.

---

### 🎨 16. Color Radon Transform Explorer
[**Launch Color Radon Explorer**](https://nitad54448.github.io/Enseignement/ColorRadon.html)

An interactive explorer for the 2D Radon Transform on color images, demonstrating filtered back-projection for tomographic reconstruction.

* **Features**:
    * Input from uploaded images, webcam, or presets with transparent backgrounds.
    * Performs truly independent transforms on the R, G, and B color channels.
    * Calculates and displays the sinogram for each channel.
    * Implements the inverse Radon Transform to reconstruct the image.
    * Includes an interactive "Filtered Back-Projection" option to demonstrate its importance in creating a clear reconstruction.
    * Features a color Venn diagram preset to test channel independence and color mixing.
* **Technologies**: HTML, JavaScript.

---

### 🧊 17. 3D Radon Transform Explorer
[**Launch 3D Radon Explorer**](3D_Radon_-_DS.html)

An interactive explorer for visualizing the principles of computed tomography (CT) in three dimensions. It demonstrates how a 3D object can be reconstructed from a series of 2D projections (slices).

* **Features**:
    * **3D Visualization**: Displays the original 3D phantom and the reconstructed 3D object side-by-side for comparison.
    * **Interactive Slicing**: Users can select the number of 2D slices to generate from the 3D object.
    * **Slice and Sinogram View**: Shows the currently selected 2D slice and its corresponding Radon transform (sinogram).
    * **Preset Objects**: Includes several built-in 3D phantoms like a sphere, cube, and torus.
    * **Parallel Processing**: Utilizes Web Workers to perform the Radon transforms on multiple slices in parallel, improving performance.
    * **Filtered Back-Projection**: Implements the filtered back-projection algorithm to reconstruct the 3D object from the sinograms.
* **Technologies**: HTML, JavaScript, Three.js.

---

### ✍️ 18. 2D Hough Explorer
[**Launch Hough Explorer**](Hough.html)

An interactive explorer for visualizing the principles of the Hough Transform for line detection in 2D images.

* **Features**:
    * **Input Source**: Choose from a variety of preset patterns (e.g., simple lines, square, circle, Sudoku grid) or upload your own image.
    * **Hough Space Visualization**: Displays the accumulator array (Hough space) in the (ρ, θ) parameter space.
    * **Interactive Detection**: An adjustable threshold slider to control the sensitivity of line detection.
    * **Linked Visualizations**: Interactively sweep through projection angles (θ) to see the corresponding projection axis on the source image and the profile in Hough space.
    * **Edge Detection**: Automatically applies a Sobel filter to the source image to detect edges before applying the transform.
    * **Results**: Shows the final detected lines overlaid on a black background.
* **Technologies**: HTML, JavaScript.

---

Feel free to contribute or report issues!