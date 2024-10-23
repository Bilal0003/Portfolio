const fs = require('fs');
const https = require('https');

const apiUrl = 'https://zenquotes.io/api/quotes';

function fetchQuotes(){
    return new Promise((resolve, reject)=>{
        https.get(apiUrl, (resp)=> {
            let data = '';

            resp.on('data', (chunk) => {
                data += chunk;
            })

            resp.on('end', ()=>{
                resolve(JSON.parse(data));
            });

        }).on('error', (err) =>{
            reject('Error fetching quotes: ${err.message}');
        });
    });

}

async function saveQuotesToFile(){
    try{
        const quotes = await fetchQuotes();
        const quotesToSave = JSON.stringify(quotes, null, 2);

        fs.writeFileSync('src/assets/quotes.json', quotesToSave, 'utf8');
        console.log('Quotes saved locally');
    } catch (error){
        console.error(error);
    }
}

saveQuotesToFile();