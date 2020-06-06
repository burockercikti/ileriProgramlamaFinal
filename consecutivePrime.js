var limit = 1000000 // limitimiz 1.000.000 olacak
var asalOlmayan = new Uint8Array(limit);
var asallar = [];// Asallar dizisi oluşturdum
asalOlmayan[0] = asalOlmayan[1] = 1; 
// dizilerin birinci ve ikinci elemanlarını bire eşitledim.
for (var i = 2; i < limit; i++) {
  if (asalOlmayan[i] === 0) {
    asallar.push(i);
    //asalları dizinin sonuna ekliyorum
    for (var j = i * i; j < limit; j+= i) {
        asalOlmayan[j] = 1; }
  }
}
var maxToplam = 0;
var maxNokta = -1;
for (var i = 0; i < asallar.length; i++) {

 var toplam = 0;
  for (var j = i; j < asallar.length; j++) {
    toplam+= asallar[j];
    if (toplam > limit)
      break;
    if (!asalOlmayan[toplam] && toplam > maxToplam && j - i > maxNokta) {
        maxNokta = j - i;
      maxToplam = toplam;
    }
  }
}
console.log(maxToplam);