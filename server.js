//server side application
const https = require('node:https');
const fs = require('fs');

//sunucununn tüm seçeneklere sahip olması için ilk etapta boş bırakılır.
//güvenli tls protokolünde bir sunucu çalıştırmak için sunucuyu çalıştırmak için gerekli, temel olarak open so kullanılarak oluşturulacak bir anahtara ihtiyacımız olacak.
//o zaman bu aşamada bir sertifikaya ihtiyacımız var sunucumuz tls üzerinde çalışıyor olacak

const options = {
    port: 3000,
    key: fs.readFileSync('./server.key'),
    cert: fs.readFileSync('./server.crt'),
    ca:[
        fs.readFileSync('./client.crt'),
    ],
    //this is for enable mtls so request set ture
    requestCert:true,
    passphrase:'1722'

};

//seçenekleri alacak bir sunucu oluşturulur. Şuan da boş ama key ve certificate gibi seçenekler eklenecek.
//oluşturduğumuz sunucuya yanıt göndermesi için fonksiyon oluştururuz.ilk etapta boş nesne gönderebiliriz.
//sonra yanıt olaral hello world yazısını göndereceğiz.

https.createServer(options, (req, res) => {
    res.writeHead(200, {});
    res.end('Hello world');
}).listen(options.port,() => {
    console.log(`Listening on port ${options.port}`);
});