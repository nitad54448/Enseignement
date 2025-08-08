# A Collection of Simulators

> A collection of interactive simulators designed to explore various concepts in physics, with a focus on **crystallography**, **materials science**, and **optics**. These tools were developed using HTML and JavaScript, with the Three.js library for 3D visualizations.

* **Author:** NitaD, Université Paris-Saclay
* **Versions:** 2007-2025
* **Last Updated:** August 8, 2025

---

## Simulators Overview

| Simulator | Description |
| :--- | :--- |
| 🌊 [**WaveXplorer**](https://nitad54448.github.io/Enseignement/WaveXplorer.html) | Visualizing simple concepts of waves. |
| 💎 [**Directions and Miller Planes Viewer**](https://nitad54448.github.io/Enseignement/Miller.html) | Visualize directions or crystallographic planes. |
| 📄 [**Pair Distribution Function Explorer**](https://nitad54448.github.io/Enseignement/pdf.html) | An interactive simulation to explore the Pair Distribution Function (PDF), g(d), for various 2D particle arrangements. |
| 🌐 [**2D Space groups**](https://nitad54448.github.io/Enseignement/2D_space_groups.html) | Symmetry and positions in the 2D space groups. |
| ↔️ [**Reciprocal Space Viewer**](https://nitad54448.github.io/Enseignement/RSpace.html) | Visualization of a reciprocal lattice for all crystal systems. |
| ⚛️ [**Atomic Energy Levels**](https://nitad54448.github.io/Enseignement/niveaux_atomiques.html) | Schematically displays atomic energy levels (K, L, M). |
| 📈 [**XRD Emission Spectra**](https://nitad54448.github.io/Enseignement/Emission.html) | Generates and displays X-ray emission spectra. |
| 📊 [**XRD Absorption & Filters**](https://nitad54448.github.io/Enseignement/filtres.html) | Simulates the effect of a filter on an X-ray spectrum. |
| ✨ [**XRD Monochromators**](https://nitad54448.github.io/Enseignement/monochromateur.html) | Simulates the effect of a single crystal monochromator on an X-ray spectrum. |
| 🌍 [**Ewald Sphere Viewer**](https://nitad54448.github.io/Enseignement/ewald.html) | Visualizes the Ewald sphere construction in reciprocal space. |
| 🔬 [**Diffraction Methods**](https://nitad54448.github.io/Enseignement/DiffractionMethods.html) | Visualizes different experimental diffraction methods. |
| 🖥️ [**Single Crystal Diffraction**](https://nitad54448.github.io/Enseignement/4-circles.html) | Advanced simulator for single-crystal X-ray diffraction. |
| ✨ [**2D diffraction**](https://nitad54448.github.io/Enseignement/2D_diffraction.html) | Diffraction patterns of 2D structures. |
| 🔄 [**Patterson function**](https://nitad54448.github.io/Enseignement/Patterson.html) | Demonstrates the relationship between a crystal structure, its diffraction pattern, and the Patterson function. |
| 🎞️ [**Kiessig Fringes**](https://nitad54448.github.io/Enseignement/kiessig.html) | Demonstrates X-ray Reflectivity (XRR) for a single film. |
| ✨ [**2D Fourier Transform**](https://nitad54448.github.io/Enseignement/FT.html) | Visualizes the 2D Fourier Transform of various sources. |
| 🔄 [**2D Radon Transform**](https://nitad54448.github.io/Enseignement/Radon.html) | Computes and displays the 2D Radon Transform (Sinogram). |
| 🎨 [**Color Radon Transform**](https://nitad54448.github.io/Enseignement/ColorRadon.html) | Explorer for the 2D Radon Transform on color images. |
| 🧊 [**3D Radon Transform**](https://nitad54448.github.io/Enseignement/3D_Radon.html) | A 3D explorer for computed tomography. |
| ✍️ [**2D Hough Transform**](https://nitad54448.github.io/Enseignement/Hough.html) | An interactive explorer for line detection in images. |

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
* **Language**: HTML, JavaScript, Three.js.

---

### 💎 2. Directions and Miller Planes Viewer
[**Launch Directions and Miller Planes Viewer**](https://nitad54448.github.io/Enseignement/Miller.html)

Visualize (hkl) crystallographic planes and [uvw] crystallographic directions within a unit cell.

* **Features (Miller Planes)**:
    * Displays three successive planes.
    * Shows nodes with systematic extinctions.
    * Calculates interplanar distances.
* **Features (Directions)**:
    * Choose from the 7 crystal systems (Cubic to Triclinic).
    * Select the appropriate lattice centering (P, I, F, C, R).
    * Interactively set the [uvw] direction indices.
    * Displays the unit cell, lattice nodes, and the direction vector.
* **Language**: HTML, JavaScript, Three.js.

---

### 📄 3. Pair Distribution Function Explorer
[**Launch PDF Explorer**](https://nitad54448.github.io/Enseignement/pdf.html)

An interactive simulation to explore the Pair Distribution Function (PDF), g(d), for various 2D particle arrangements. 

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
* **Language**: HTML, JavaScript, TailwindCSS, 2D Canvas API.

---

### 🌐 4. 2D Space groups
[**Launch 2D Space groups Simulator**](https://nitad54448.github.io/Enseignement/2D_space_groups.html)

A tool for visualizing symmetry and positions in the 2D space groups. Another version is listed in the Others section, named 2D Pattern generator.

* **Language**: HTML, JavaScript.

---

### ↔️ 5. Reciprocal Space Viewer
[**Launch Reciprocal Space Simulator**](https://nitad54448.github.io/Enseignement/RSpace.html)

This tool allows for the visualization of a reciprocal lattice for all crystal systems.

* **Features**:
    * Choose the crystal system and centering.
    * Shows systematic extinctions.
    * Explore hkl indices and distances between nodes.
* **Language**: HTML, JavaScript, Three.js.

---

### ⚛️ 6. Atomic Energy Level Diagram
[**Launch Atomic Levels Simulator**](https://nitad54448.github.io/Enseignement/niveaux_atomiques.html)

This viewer schematically displays atomic energy levels (K, L, M) for different elements and allows visualization of common electronic transitions (Kα, Kβ, Lα, etc.).

* **Features**:
    * Select an element (H, He, Mn, Fe, Co, Ni, Cu, Zn, Mo, Au).
    * Choose an energy transition (Kα1, Kα2, Kβ1, Lα1, Lβ1).
    * Display energy levels (in eV or keV) and the selected transition.
    * Calculate and display the energy and wavelength of the photon emitted during the transition.
    * Shows the selection rules for electric dipole transitions.
* **Language**: HTML, JavaScript, 2D Canvas API.

---

### 📈 7. XRD Emission Spectra Simulator
[**Launch Emission Simulator**](https://nitad54448.github.io/Enseignement/Emission.html)

This simulator generates and displays X-ray emission spectra, including Bremsstrahlung radiation and characteristic lines.

* **Features**:
    * Choose the anode element (Sc to Zn).
    * Adjust the accelerating voltage and tube current.
    * Display the resulting emission spectrum (intensity vs. wavelength/energy).
    * Overlay multiple spectra for comparison.
    * Click near a characteristic line on the main spectrum to display a tooltip with a schematic diagram of the corresponding electron transition (K, L, M).
* **Language**: HTML, JavaScript, 2D Canvas API, SVG.

---

### 📊 8. XRD Absorption and Filters Simulator
[**Launch Filters Simulator**](https://nitad54448.github.io/Enseignement/filtres.html)

This tool simulates the X-ray emission from an anode, the effect of a filter on the spectrum, and displays the filter's mass absorption coefficient.

* **Features**:
    * Choose the anode element (Sc to Zn).
    * Set the acceleration voltage and tube current.
    * Select the filter element and its thickness.
    * Display the initial emission spectrum (Bremsstrahlung and characteristic K and L lines).
    * Display the mass absorption coefficient (μ/ρ) of the filter versus wavelength/energy (linear or logarithmic scale).
    * Display the spectrum after filtering.
* **Language**: HTML, JavaScript, 2D Canvas API.

---

### ✨ 9. XRD Monochromators
[**Launch XRD Monochromators Simulator**](https://nitad54448.github.io/Enseignement/monochromateur.html)

This tool simulates the effect of a single crystal monochromator on an X-ray spectrum.

* **Language**: HTML, JavaScript.

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
* **Language**: HTML, JavaScript, Three.js.

---

### 🔬 11. Experimental Diffraction Methods
[**Launch Diffraction Methods Simulator**](https://nitad54448.github.io/Enseignement/DiffractionMethods.html)

This software visualizes the reciprocal lattice for three different experimental diffraction methods.

* **Features**:
    * Choose between single-crystal and powder diffraction methods.
    * Shows systematic extinctions.
    * Explore hkl indices and distances between nodes.
* **Language**: HTML, JavaScript, Three.js.

---

### 🖥️ 12. Single Crystal Diffraction Simulator
[**Launch Single Crystal Simulator**](https://nitad54448.github.io/Enseignement/4-circles.html)

An advanced simulator for visualizing single-crystal X-ray diffraction. It combines a 3D view of the reciprocal lattice and Ewald sphere with a 2D detector view of the resulting diffraction pattern.

* **Features**:
    * Supports all 7 crystal systems and their corresponding Bravais lattices.
    * Interactive controls for lattice parameters, crystal orientation, and X-ray wavelength.
    * 3D visualization of the reciprocal lattice, Ewald sphere, and diffraction vectors.
    * 2D detector panel showing the projected diffraction pattern.
    * Interactive detector with zoom (mouse wheel/pinch) and pan (left-click drag/two-finger drag) controls.
    * Click on spots in the detector view to identify (h,k,l) indices and highlight the corresponding point in the 3D view.
    * Option to show all reciprocal lattice points or only those in a diffraction condition.
* **Language**: HTML, JavaScript, Three.js.

---

### ✨ 13. 2D diffraction
[**Launch 2D diffraction Simulator**](https://nitad54448.github.io/Enseignement/2D_diffraction.html)

A visualization tool for displaying diffraction patterns of 2D structures.

* **Language**: HTML, JavaScript.

---

### 🔄 14. Patterson function
[**Launch Patterson function Simulator**](https://nitad54448.github.io/Enseignement/Patterson.html)

This tool demonstrates the relationship between a crystal structure, its diffraction pattern, and the Patterson function.

* **Language**: HTML, JavaScript.

---

### 🎞️ 15. Kiessig Fringes Simulator
[**Launch Kiessig Fringes Simulator**](https://nitad54448.github.io/Enseignement/kiessig.html)

This simulator interactively demonstrates X-ray Reflectivity (XRR) for a single film with interface roughness. The footer of the program notes it uses the Parratt formalism with Névot-Croce roughness.

* **Features**:
    * Adjust the film's thickness.
    * Define electron density for the film and substrate.
    * Set the roughness for the top surface (σ₀₁) and the film/substrate interface (σ₁₂).
    * Calculates and displays the reflectivity curve.
* **Language**: HTML, JavaScript, D3.js.

---

### ✨ 16. 2D Fourier Transform Explorer
[**Launch FT Explorer**](https://nitad54448.github.io/Enseignement/FT.html)

This explorer visualizes the 2D Fourier Transform of various sources.

* **Features**:
    * Input can be from an uploaded image, a live webcam feed, or a user-defined function.
    * The transform is calculated using a Radix-2 Fast Fourier Transform (FFT) algorithm.
    * The resulting magnitude is displayed using a logarithmic scale.
* **Language**: HTML, JavaScript.

---

### 🔄 17. 2D Radon Transform Explorer
[**Launch Radon Explorer**](https://nitad54448.github.io/Enseignement/Radon.html)

This tool computes and displays the 2D Radon Transform (Sinogram) of an image.

* **Features**:
    * Input can be from an uploaded image, a live webcam feed, or a preset phantom image.
    * Includes a variety of presets such as the Shepp-Logan phantom, circles, squares, and points.
* **Language**: HTML, JavaScript.

---

### 🎨 18. Color Radon Transform Explorer
[**Launch Color Radon Explorer**](https://nitad54448.github.io/Enseignement/ColorRadon.html)

An interactive explorer for the 2D Radon Transform on color images, demonstrating filtered back-projection for tomographic reconstruction.

* **Features**:
    * Input from uploaded images, webcam, or presets with transparent backgrounds.
    * Performs truly independent transforms on the R, G, and B color channels.
    * Calculates and displays the sinogram for each channel.
    * Implements the inverse Radon Transform to reconstruct the image.
    * Includes an interactive "Filtered Back-Projection" option to demonstrate its importance in creating a clear reconstruction.
    * Features a color Venn diagram preset to test channel independence and color mixing.
* **Language**: HTML, JavaScript.

---

### 🧊 19. 3D Radon Transform Explorer
[**Launch 3D Radon Explorer**](https://nitad54448.github.io/Enseignement/3D_Radon.html)

An interactive explorer for visualizing the principles of computed tomography (CT) in three dimensions. It demonstrates how a 3D object can be reconstructed from a series of 2D projections (slices).

* **Features**:
    * **3D Visualization**: Displays the original 3D phantom and the reconstructed 3D object side-by-side for comparison.
    * **Interactive Slicing**: Users can select the number of 2D slices to generate from the 3D object.
    * **Slice and Sinogram View**: Shows the currently selected 2D slice and its corresponding Radon transform (sinogram).
    * **Preset Objects**: Includes several built-in 3D phantoms like a sphere, cube, and torus.
    * **Parallel Processing**: Utilizes Web Workers to perform the Radon transforms on multiple slices in parallel, improving performance.
    * **Filtered Back-Projection**: Implements the filtered back-projection algorithm to reconstruct the 3D object from the sinograms.
* **Language**: HTML, JavaScript, Three.js.

---

### ✍️ 20. 2D Hough Explorer
[**Launch Hough Explorer**](https://nitad54448.github.io/Enseignement/Hough.html)

An interactive explorer for visualizing the principles of the Hough Transform for line detection in 2D images.

* **Features**:
    * **Input Source**: Choose from a variety of preset patterns (e.g., simple lines, square, circle, Sudoku grid) or upload your own image.
    * **Hough Space Visualization**: Displays the accumulator array (Hough space) in the (ρ, θ) parameter space.
    * **Interactive Detection**: An adjustable threshold slider to control the sensitivity of line detection.
    * **Linked Visualizations**: Interactively sweep through projection angles (θ) to see the corresponding projection axis on the source image and the profile in Hough space.
    * **Edge Detection**: Automatically applies a Sobel filter to the source image to detect edges before applying the transform.
    * **Results**: Shows the final detected lines overlaid on a black background.
* **Language**: HTML, JavaScript.

---

Feel free to contribute or report issues!