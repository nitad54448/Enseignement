import numpy as np
import matplotlib.pyplot as plt

# Énergie en keV (échelle log)
E = np.logspace(0, 2, 2000)

# Fond continu (Bremsstrahlung) paramétré sous 45 kV
V_ht = 45.0
brems = np.maximum(0, (V_ht - E) / E) * np.exp(-((np.log10(E) - 0.9)**2) / 0.4)

# Profil des raies Cu (K-alpha et K-beta)
def peak(E, E0, fwhm, amplitude):
    return amplitude * np.exp(-4 * np.log(2) * ((E - E0) / fwhm)**2)

# Cu Ka (8.04 keV) et Cu Kb (8.91 keV)
raies_cu = peak(E, 8.04, 0.12, 1.0) + peak(E, 8.91, 0.12, 0.17)

# Brillance (photons / s / mm² / mrad² / 0.1% BW)
# 1. Tube scellé Cu (45 kV, ~1.5-2 kW)
brill_scelle = 1e8 * brems + 2e13 * raies_cu

# 2. Anode tournante Cu (~5-18 kW, microfoyer ou standard)
brill_rot = 5e9 * brems + 1e15 * raies_cu

# 3. Synchrotron (onduleur / bending magnet typique 3e génération)
brill_synch = 1e20 * np.exp(-((np.log10(E) - 1.2)**2) / 0.7)

plt.figure(figsize=(9, 6), dpi=300)
plt.plot(E, brill_scelle, 'crimson', lw=2, label='Tube scellé (anode Cu)')
plt.plot(E, brill_rot, 'navy', lw=2, label='Anode tournante (Cu)')
plt.plot(E, brill_synch, 'darkgreen', lw=2, label='Synchrotron (onduleur)')

plt.xscale('log')
plt.yscale('log')
plt.xlim(1, 50)
plt.ylim(1e8, 1e21)

plt.xlabel('Énergie (keV)', fontsize=12)
plt.ylabel('Brillance ($photons / s / mm^2 / mrad^2 / 0.1\% BW$)', fontsize=12)
plt.title('Brillance typique des sources de rayons X', fontsize=13, fontweight='bold')
plt.grid(True, which='both', ls=':', alpha=0.5)
plt.legend(frameon=True, fontsize=11)
plt.tight_layout()
plt.show()