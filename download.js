const https = require('https');
const fs = require('fs');

const urlJsx = 'https://raw.githubusercontent.com/DavidHDev/react-bits/main/src/js-css/Components/TiltedCard/TiltedCard.jsx';
const urlCss = 'https://raw.githubusercontent.com/DavidHDev/react-bits/main/src/js-css/Components/TiltedCard/TiltedCard.css';

https.get(urlJsx, (res) => {
  res.pipe(fs.createWriteStream('src/components/TiltedCard.jsx'));
});

https.get(urlCss, (res) => {
  res.pipe(fs.createWriteStream('src/components/TiltedCard.css'));
});
