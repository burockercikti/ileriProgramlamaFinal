var sayiKonumu = 0;
var sayi = 1;
var sayiStr = sayi + '';

var basamaklar = [1,10,100,1000,10000,100000,1000000];
// basamak değerlerini diziye aktardım.

var item = 1;
for(var i=0, pozisyon; pozisyon = basamaklar[i]; i++){
    while((sayiStr.length + sayiKonumu) < pozisyon){
        sayiKonumu += sayiStr.length;
        sayi += 1;
        sayiStr = sayi + '';
    }
    
    var hane = parseInt(sayiStr[pozisyon - sayiKonumu - 1]);
    console.log('Pozisyon: ' + pozisyon + '  sayı konumu: ' + sayiKonumu + '  sayı: ' + sayiStr + '  hane: ' + hane);
    item *= hane;
}
console.log('Sonuç : : ');
console.log(item);
