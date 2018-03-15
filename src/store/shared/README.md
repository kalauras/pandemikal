# eBasilicata

Una piattaforma dal Reale al Virtuale e Viceversa.

## Pre Setup

``` bash
# aggiungere i file al commit 
git add *

# committare le modifiche
git commit

# pubblicare le modifiche su github
git push

# accertarsi che non ci siano conflitti
git reset --hard origin/master 

# fare un backup del file di configurazione
src/store/shared/index.js

# recuperare le modifiche da github
git pull

# modificare il file di configurazione
src/store/shared/index.js

# istallare le dipendenze
npm install

# correggere errore vue-gallery
node_modules/blueimp-gallery/css/postcss.config.js 
 module.exports = { plugins: [ require('autoprefixer')({ /* ...options */ }) ] }

# avviare ambiente test
npm run dev

# avviare ambiente produzione
npm run build

# inizializzare firebase
firebase init (./dist y n)

# deployare su firebase
firebase deploy

```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
