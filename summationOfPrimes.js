function asalToplam(x) {
    var dizi = [];
    var toplam=0;
    for (var i=2; i<x; i++) { 
        if(typeof dizi[i] === 'undefined') {
            //dizinin tipi
            //diziyi tanımlanmayan bi değişkene atadım
            dizi[i]=true;
            for(var k = i+i; k<x; k+=i) {
                dizi[k]=false;
            }
            if (dizi[i]) {
                toplam+=i;
            }
        }
    }
    return toplam;
  }
  
  console.log(asalToplam(2000000));
