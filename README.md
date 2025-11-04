# 🚀 WebStudio Pro - Template Site Vitrine Professionnel

Site vitrine moderne et performant construit avec **Next.js 14**, **TypeScript**, et **Tailwind CSS**.

> 💡 **Projet créé pour démontrer les capacités de développement web moderne.**  
> Utilisable comme template pour freelances, consultants, PME, coachs, startups...

---

## 📋 Table des matières

- [Aperçu](#aperçu)
- [Technologies](#technologies)
- [Installation](#installation)
- [Développement local](#développement-local)
- [Déploiement sur Vercel](#déploiement-sur-vercel)
- [Structure du projet](#structure-du-projet)
- [Personnalisation](#personnalisation)

---

## 🎨 Aperçu

### Design System
- **Palette** : Fond sombre (noir/gris anthracite) + accents cyan/turquoise/violet
- **Style** : Glassmorphism, dégradés subtils, animations douces
- **Responsive** : Mobile-first, optimisé tous écrans
- **Performance** : Code optimisé, chargement ultra-rapide

### Sections
1. **Hero** - Accroche principale avec CTA
2. **Value Proposition** - 3 piliers de valeur
3. **Process** - 4 étapes de collaboration
4. **Use Cases** - Pour qui est-ce fait ?
5. **Tech Stack** - Technologies utilisées
6. **Contact** - CTA final avec email

---

## 🛠️ Technologies

| Technologie | Version | Usage |
|-------------|---------|-------|
| **Next.js** | 14.2.18 | Framework React avec SSR/SSG |
| **React** | 18.3.1 | Bibliothèque UI |
| **TypeScript** | 5.6.3 | Typage statique |
| **Tailwind CSS** | 3.4.15 | Framework CSS utilitaire |
| **Framer Motion** | 11.11.17 | Animations (optionnel) |

---

## 📦 Installation

### Prérequis
- **Node.js** >= 18.0.0
- **npm** ou **yarn** ou **pnpm**

### Étapes

1. **Cloner ou télécharger le projet**
```bash
cd c:\Users\otman\Documents\web
```

2. **Installer les dépendances**
```bash
npm install
# ou
yarn install
# ou
pnpm install
```

---

## 💻 Développement local

### Lancer le serveur de développement

```bash
npm run dev
```

Le site sera accessible sur **http://localhost:3000**

### Commandes disponibles

```bash
npm run dev      # Serveur de développement
npm run build    # Build de production
npm run start    # Serveur de production
npm run lint     # Vérification ESLint
```

---

## 🚀 Déploiement sur Vercel

### Méthode 1 : Via l'interface Vercel (recommandé)

1. **Créer un compte Vercel** (si pas encore fait)
   - Aller sur [vercel.com](https://vercel.com)
   - Se connecter avec GitHub

2. **Importer le projet**
   - Cliquer sur "Add New Project"
   - Sélectionner votre repository GitHub
   - Ou importer directement depuis votre machine

3. **Configuration automatique**
   - Vercel détecte automatiquement Next.js
   - Aucune configuration supplémentaire nécessaire

4. **Déployer**
   - Cliquer sur "Deploy"
   - Votre site sera en ligne en ~2 minutes

### Méthode 2 : Via la CLI Vercel

```bash
# Installer la CLI Vercel
npm i -g vercel

# Se connecter
vercel login

# Déployer
vercel

# Déployer en production
vercel --prod
```

### Configuration du domaine personnalisé

1. Aller dans **Settings** > **Domains**
2. Ajouter votre domaine (ex: `webstudio.zineinsight.com`)
3. Configurer les DNS selon les instructions Vercel

---

## 📁 Structure du projet

```
c:\Users\otman\Documents\web\
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Layout principal
│   │   ├── page.tsx            # Page d'accueil
│   │   ├── globals.css         # Styles globaux
│   │   └── webstudio.css       # Design system custom
│   └── components/
│       ├── Hero.tsx            # Section hero
│       ├── ValueProposition.tsx # Proposition de valeur
│       ├── Process.tsx         # Process 4 étapes
│       ├── UseCases.tsx        # Cas d'usage
│       ├── TechStack.tsx       # Technologies
│       └── Contact.tsx         # Contact/CTA
├── public/
│   └── images/                 # Images et assets
├── package.json
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

---

## 🎨 Personnalisation

### Modifier les couleurs

Éditer `src/app/webstudio.css` :

```css
:root {
  --ws-accent-cyan: #06b6d4;      /* Votre couleur principale */
  --ws-accent-turquoise: #14b8a6;
  --ws-accent-purple: #8b5cf6;
}
```

### Modifier le contenu

Chaque composant dans `src/components/` est indépendant et facilement modifiable :

- **Hero.tsx** → Titre, sous-titre, CTA
- **ValueProposition.tsx** → Les 3 piliers de valeur
- **Process.tsx** → Les 4 étapes de votre process
- **UseCases.tsx** → Vos cibles client
- **TechStack.tsx** → Vos technologies
- **Contact.tsx** → Email de contact

### Modifier l'email de contact

Dans `src/components/Contact.tsx`, ligne 55 :

```tsx
href="mailto:VOTRE_EMAIL@domain.com?subject=Demande de devis - Site web"
```

### Modifier le branding

Dans `src/app/page.tsx` :

```tsx
<a href="/" className="ws-brand">
  Votre Nom / Marque
</a>
```

---

## 🔧 Configuration avancée

### Ajouter des polices Google Fonts

Dans `src/app/layout.tsx` :

```tsx
import { Inter, Poppins } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({ weight: ['400', '600', '700'], subsets: ['latin'] })
```

### Ajouter des animations Framer Motion

```tsx
import { motion } from 'framer-motion'

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Votre contenu
</motion.div>
```

---

## 📊 Performance

Ce template est optimisé pour :

- ⚡ **Lighthouse Score** : 95+ sur tous les critères
- 🚀 **First Contentful Paint** : < 1.5s
- 📱 **Mobile-first** : 100% responsive
- 🔍 **SEO-ready** : Meta tags, semantic HTML
- ♿ **Accessibilité** : ARIA labels, contraste optimisé

---

## 🤝 Support

### Questions techniques ?

- **Email** : otmane@zineinsight.com
- **Site** : [zineinsight.com](https://zineinsight.com)

### Besoin d'aide pour déployer ?

Je propose un accompagnement personnalisé pour :
- Configuration Vercel
- Optimisation performance
- Personnalisation design
- Ajout de fonctionnalités

---

## 📝 Licence

Ce projet est un template open-source créé par **Otmane Boulahia**.

Libre d'utilisation pour vos projets personnels ou commerciaux.

---

## 🎯 Crédits

**Créé par** : Otmane Boulahia  
**Portfolio** : [zineinsight.com](https://zineinsight.com)  
**FinSight** : [finsight.zineinsight.com](https://finsight.zineinsight.com)

**Stack utilisé** : Next.js 14 • React 18 • TypeScript • Tailwind CSS  
**Déployé sur** : Vercel

---

*Template créé en novembre 2025*
