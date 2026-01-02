# Étape 1 : choisir une image Node officielle
FROM node:24.11.1-alpine

# Étape 2 : définir le répertoire de travail
WORKDIR /app

# Étape 3 : copier les fichiers de configuration
COPY package*.json ./

# Étape 4 : installer les dépendances
RUN npm install --legacy-peer-deps

# Étape 5 : copier le reste du projet
COPY . .

# Étape 6 : exposer le port
EXPOSE 3000

# Étape 7 : lancer l’application
CMD ["npm", "run", "dev"]
