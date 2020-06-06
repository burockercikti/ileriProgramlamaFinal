function digitFifthPowers() {
	var basamakSayisi = 2;
	var minToplam = function(basamakSayisi) {	//en küçük sayiyi basamakSayisi ile hesapladım
		return Math.pow(10, basamakSayisi - 1);	}
// basamakSayisi basamak sayısının beşinci kuvvetini toplayarak elde edilebilecek en büyük değeri hesaplar.
	var maxToplam = function(basamakSayisi) {
        return Math.pow(9,5) * basamakSayisi;    }
	while (maxToplam(basamakSayisi) > minToplam(basamakSayisi)) {
		basamakSayisi++; } // 999,999'dan daha yüksek bir değer olmayacak.
//5 in kuvvetleri için geçerli olan değerleri toplama
	var besinKuvvetleri = [];
	var toplam;
	for (var n=10; n < Math.pow(10, basamakSayisi - 1); n++) {// kaba kuvvet, maksimum sayıya kadar her 10 sayısını kontrol edin
		sayi = ("" + n).split(""); // rakamlara böldüm
		toplam = 0;
		for (var j=0; j<sayi.length; j++) { // tüm basamakların beşinci gücünü topla
			toplam += Math.pow(+sayi[j], 5);
		}
		if (toplam === n)  // toplam n sayısna eşit ise
			besinKuvvetleri.push(toplam); // push() yöntemi ile toplamı besinKuvvetleri listesine ittim.
	}// geçerli beşinci güç toplamlarının getirisi
	return besinKuvvetleri.reduce(function(acc, besinKuvveti){
		return besinKuvveti + acc;
	});
}
console.log(digitFifthPowers()); // 443839