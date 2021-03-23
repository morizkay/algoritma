import step1CountPerItemFrequency from './step1CountPerItemFrequency';
import step2EliminatedLessThanMinimumSupported from './step2EliminatedLessThanMinimumSupported';
import step3SortItemFrequencyDescending from './step3SortItemFrequencyDescending';

console.clear();
// Tabel 1. Pola Transaksi Penjualan Obat
// 1 Bisolvon,Sanaflu,Bodrex
// 2 Bodrex,Bisolvon,Magasida
// 3 Bisolvon,Antangin,Komix
// 4 Sanaflu,Bodrex,Bisolvon
// 5 Magasida,Komix,Bodrex
// 6 Dulcolax,Sanaflu,Bisolvon
// 7 Bodrex,Bisolvon,Molexflu
// 8 Molexflu,Bodrex,Antangin
// 9 Bodrex, Molexflu,Komix
// 10 Sanaflu,Bodrex,Komix
// 11 Bisolvon,Sanaflu,Antangin
// 12 Antangin,Bodrex
// 13 Molexflu,Antangin,Komix
// 14 Antangin,Bisolvon,Sanaflu
// 15 Molexflu,Antangin,Sanaflu
const transactionsData = [
  ['Bisolvon', 'Sanaflu', 'Bodrex'],
  ['Bodrex', 'Bisolvon', 'Magasida'],
  ['Bisolvon', 'Antangin', 'Komix'],
  ['Sanaflu', 'Bodrex', 'Bisolvon'],
  ['Magasida', 'Komix', 'Bodrex'],
  ['Dulcolax', 'Sanaflu', 'Bisolvon'],
  ['Bodrex', 'Bisolvon', 'Molexflu'],
  ['Molexflu', 'Bodrex', 'Antangin'],
  ['Bodrex', 'Molexflu'],
  ['Sanaflu', 'Bodrex', 'Komix'],
  ['Bisolvon', 'Sanaflu', 'Antangin'],
  ['Antangin', 'Bodrex'],
  ['Molexflu', 'Antangin', 'Komix'],
  ['Antangin', 'Bisolvon', 'Sanaflu'],
  ['Molexflu', 'Antangin', 'Sanaflu'],
];

// 1. Hitung frekuensi item dari semua transaksi
// Itemset Support
// Bisolvon 8
// Sanaflu 7
// Bodrex 9
// Magasida 2
// Antangin 7
// Komix 6
// Molexflu 5

const minimumSupport = 4;

type itemsFrequenciesType = {
  index?: any;
  _id: string;
  frequent: number;
};

let itemsFrequency: Array<any> = [];

itemsFrequency = step1CountPerItemFrequency(transactionsData);

itemsFrequency = step2EliminatedLessThanMinimumSupported(
  itemsFrequency,
  minimumSupport,
);

// 2. Hilangkan item yang nilanya dibawah min_sup.

itemsFrequency = step3SortItemFrequencyDescending(itemsFrequency);
console.log(itemsFrequency);

const itemsFrequencyWithMoreThanMinimumSupport = itemsFrequency.filter(
  (item) => item.frequent >= minimumSupport,
);

// list.sort((a, b) => (a.color > b.color ? 1 : -1));
// 3. Masukkan item ke dalam tabel global header.Disusun dari item frekuensi terbesar ke terkecil.
// 1 Bodrex 9
// 2 Bisolvon 8
// 3 Sanaflu 7
// 4 Antangin 7
// 5 Komix 6
// 6 Molexflu 5
// 7 Magasida 3
for (
  let indexOfItemsFrequencyWithMoreThanMinimumSupport = 0;
  indexOfItemsFrequencyWithMoreThanMinimumSupport <
  itemsFrequencyWithMoreThanMinimumSupport.length;
  indexOfItemsFrequencyWithMoreThanMinimumSupport++
) {
  itemsFrequencyWithMoreThanMinimumSupport[
    indexOfItemsFrequencyWithMoreThanMinimumSupport
  ].index = indexOfItemsFrequencyWithMoreThanMinimumSupport + 1;
}

// Tabel 4. Item Transaksi Diurutkan
// 1 1,2,3
// 2 1,2,7
// 3 2,4,5
// 4 1,2,3
// 5 1,5,7
// 6 2,3,5
// 7 1,2,6
// 8 1,4,6
// 9 1,5,6
// 10 1,3,5
// 11 2,3,4
// 12 1,4,7
// 13 4,5,6
// 14 2,3,4
// 15 3,4,6

const indexedTransactionsData = transactionsData;
for (
  let indexOfItemsFrequencyWithMoreThanMinimumSupport = 0;
  indexOfItemsFrequencyWithMoreThanMinimumSupport <
  itemsFrequencyWithMoreThanMinimumSupport.length;
  indexOfItemsFrequencyWithMoreThanMinimumSupport++
) {
  for (
    let indexOfFirstArrayOfIndexedTransactionsData = 0;
    indexOfFirstArrayOfIndexedTransactionsData < indexedTransactionsData.length;
    indexOfFirstArrayOfIndexedTransactionsData++
  ) {
    for (
      let indexOfSecondaryArrayOfIndexedTransactionsData = 0;
      indexOfSecondaryArrayOfIndexedTransactionsData <
      indexedTransactionsData[indexOfFirstArrayOfIndexedTransactionsData]
        .length;
      indexOfSecondaryArrayOfIndexedTransactionsData++
    ) {
      if (
        itemsFrequencyWithMoreThanMinimumSupport[
          indexOfItemsFrequencyWithMoreThanMinimumSupport
        ]._id ===
        indexedTransactionsData[indexOfFirstArrayOfIndexedTransactionsData][
          indexOfSecondaryArrayOfIndexedTransactionsData
        ]
      ) {
        indexedTransactionsData[indexOfFirstArrayOfIndexedTransactionsData][
          indexOfSecondaryArrayOfIndexedTransactionsData
        ] =
          itemsFrequencyWithMoreThanMinimumSupport[
            indexOfItemsFrequencyWithMoreThanMinimumSupport
          ].index;
      }
    }
  }
}
for (
  let firstIndexOfIndexedTransactionsData = 0;
  firstIndexOfIndexedTransactionsData < indexedTransactionsData.length;
  firstIndexOfIndexedTransactionsData++
) {
  for (
    let secondIndexOfIndexedTransactionsData = 0;
    secondIndexOfIndexedTransactionsData <
    indexedTransactionsData[firstIndexOfIndexedTransactionsData].length;
    secondIndexOfIndexedTransactionsData++
  ) {
    if (
      typeof indexedTransactionsData[firstIndexOfIndexedTransactionsData][
        secondIndexOfIndexedTransactionsData
      ] !== 'number'
    ) {
      indexedTransactionsData[firstIndexOfIndexedTransactionsData].splice(
        secondIndexOfIndexedTransactionsData,
        1,
      );
    }
  }
}

indexedTransactionsData.map((singleIndexedTransationsData) => {
  singleIndexedTransationsData.sort((itemOne, itemTwo) =>
    itemOne > itemTwo ? 1 : -1,
  );
});

const reversedIndexedTransationsData: Array<any> = [];

for (
  let indexOfIndexedTransactionsData = 0;
  indexOfIndexedTransactionsData < indexedTransactionsData.length;
  indexOfIndexedTransactionsData++
) {
  reversedIndexedTransationsData.push(
    indexedTransactionsData[
      indexOfIndexedTransactionsData
    ].sort((itemOne, itemTwo) => (itemOne < itemTwo ? -1 : 1)),
  );
}

// 5. Lakukan pencarian frequent itemset secara lokal dari indeks terakhir, yaitu indeks
// Index 7
// a. Magasida dan Molexflu = 0
// b. Magasida dan Komix = 1
// c. Magasida dan Antangin = 1
// d. Magasida dan Sanaflu = 0
// e. Magasida dan Bisolvon = 1
// f.Magasids dan Bodrex = 3
// Index 6
// a. Molexflu dan Komix =2
// b. Molexflu dan Antangin = 3
// c. Molexflu dan Sanaflu = 1
// d. Molexflu dan Bisolvon = 1
// e.Molexflu dan Bodrex = 3
// Index 5
// a. Komix dan Antangin = 2
// b. Komix dan Sanaflu = 2
// c. Komix dan Bisolvon = 2
// d. Komix dan Bodrex = 3
// Index 4
// a. Antangin dan Sanaflu = 3
// b. Antangin dan Bisolvon = 3
// c.Antangin dan Bodrex = 2
// Index 3
// a. Sanaflu dan Bisolvon = 5
// b. Sanaflu dan Bodrex = 3
// Index 2
// a.Bisolvon dan Bodrex = 4

for (
  let indexOfItemsFrequencyWithMoreThanMinimumSupport =
    itemsFrequencyWithMoreThanMinimumSupport.length - 1;
  indexOfItemsFrequencyWithMoreThanMinimumSupport >= 0;
  indexOfItemsFrequencyWithMoreThanMinimumSupport--
) {
  console.log('end');
}

// 6. Berikut hasil frequent patterns dari semua pencarian lokal:
// 1 Antangin dan Bisolvon 5
// 2 Bisolvon dan Bodrex 4
// Selanjutnya dilakukan pengujian untuk pola (patterns) yang ditemukan
// Nilai minimum confidence (min_conf) untuk penelitian ini berkisar dari 10% - 100%.
// Untuk contoh perhitungan ini, misal nilai minimum confidence adalah 40%.
// Berikut merupakan hasil perhitungan Berikut merupakan hasil perhitungan nilai confidence
// untuk beberapa patterns:
// 1. conf (Antangin=>Bisolvon)=∑ Antangin 𝑑𝑎𝑛 Bisolvon
// ∑ 𝐴𝑛𝑡𝑎𝑛𝑔𝑖𝑛
//= 5 / 8 = 0,63 * 100 = 63 % (Memenhui Confidence)
// 2. conf (Bisolvon=>Bodrex)=∑ Bisolvon 𝑑𝑎𝑛 Bodrex
// ∑ 𝐵𝑖𝑠𝑜𝑙𝑣𝑜𝑛
//= 4 / 8 = 0,5 * 100 = 50 % (Memenuhui Confidence)
