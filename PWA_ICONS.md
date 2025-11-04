# PWA Icons Generation

Pour générer les icônes PWA, utilisez un service en ligne ou créez-les manuellement :

## Option 1 : Service en ligne (Rapide)
1. Allez sur https://realfavicongenerator.net/
2. Uploadez un logo carré (minimum 512x512px)
3. Téléchargez le package
4. Placez les fichiers dans `/public`:
   - `icon-192.png` (192x192)
   - `icon-512.png` (512x512)
   - `apple-touch-icon.png` (180x180)

## Option 2 : Avec ImageMagick (si installé)
```bash
# Depuis le SVG
convert icon.svg -resize 192x192 icon-192.png
convert icon.svg -resize 512x512 icon-512.png
convert icon.svg -resize 180x180 apple-touch-icon.png
```

## Option 3 : Temporaire (pour tester)
Le fichier `icon.svg` existe déjà. Next.js peut l'utiliser temporairement.
Les navigateurs modernes acceptent le SVG comme icône.

## Pour l'instant
Les icônes PNG manquent mais le manifest et les meta tags sont en place.
L'app est déjà installable sur Safari iOS avec l'icône SVG.
