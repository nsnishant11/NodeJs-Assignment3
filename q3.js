const fs = require('fs');
const request = require('request');

// URL of the image
const url = 'https://www.google.com/';
const path = './googlehome1.html'; 
const imageUrl='https://c.ndtvimg.com/2021-09/4otshpt8_google-doodle_625x300_27_September_21.jpg'
const imgPath=__dirname+'/doodle1.png'



const filePath=fs.createWriteStream(path)
request(imageUrl).pipe(fs.createWriteStream(imgPath))
request(url).pipe(filePath);
filePath.on('finish',() => {
            filePath.close();
            console.log('Download Completed'); 
        })





