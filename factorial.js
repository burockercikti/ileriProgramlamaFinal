var hane = [1];
// depolama dizisi , islem ve tasiyici değişkenleri
var islem = 0;
var tasiyici = 0;
// Her faktöriyel işlemi sütun çarpımı kullanarak sırayla elde edilir.
for(i = 1; i <= 100; i++){
// sütun çarpımı kullanacağım için iç içe for döngüsünü kullanıyorum.
// Dizideki her basamağı bir sonraki sayıyla çarp
    for(j = 0; j < hane.length; j++){
        islem = hane[j]*i;
// Eğer varsa mevcut tasiyici işlemine ekleme yap
        islem += tasiyici;
        if(islem < 10){
/* Daha önceki taşıma işlemini korumamak için diziye yeni bir 
rakam atadım ve taşıma değerini 0 olarak ayarladım.*/
            hane[j] = islem;
            tasiyici = 0;           
        } else{
// Son basamağı dizide sakla ve geri kalanı taşı
            hane[j] = islem % 10;
            tasiyici = Math.floor( islem / 10 );
// Basamak değerlerini bulmak için dizenin modunu aldım
        }    
// Taşımadaki her basamağı dizide sakladım
    } for(k = tasiyici.toString().length - 1; k >= 0; k--){
        tasima = tasiyici.toString();
        hane.push(parseInt(tasima[k],10));
    }
// Sonraki faktöriyel tekrarlama için taşıma değerini 0'a sıfırladım
    tasiyici = 0;
    }
var sonuc = 0;
// Rakamların çıktı toplamı
    for(i = 0; i < hane.length; i++){    
    sonuc += hane[i];
    }
console.log(sonuc)