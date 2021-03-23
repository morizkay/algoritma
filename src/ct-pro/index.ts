import step1CountingPerItemFrequency from './step1CountingPerItemFrequency';
import step2EliminatingWithFrequencyLessThanMinimumSupported from './step2EliminatingWithFrequencyLessThanMinimumSupported';
import step3SortItemFrequencyDescending from './step3SortItemFrequencyDescending';
import step4RegisterIndexNumberOnItem from './step4RegisterIndexNumberOnItem';
import step5IndexingTransactionsData from './step5IndexingTransactionsData';
import step6EliminatingUnsupportedData from './step6EliminatingUnsupportedData';
import step7SortingIndexedTransactionsData from './step7SortingIndexedTransactionsData';
import step8ReversingIndexedTransactionsData from './step8ReversingIndexedTransactionsData';
import step9SetLocalItemAsociationBasedOnLastIndex from './step9SetLocalItemAsociationBasedOnLastIndex';

console.clear();
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
let indexedTransactionsData = [];
let localItemAsociationBasedOnLastIndex = [];

const minimumSupport = 4;

let itemsData: Array<any> = [];

itemsData = step1CountingPerItemFrequency(transactionsData);
itemsData = step2EliminatingWithFrequencyLessThanMinimumSupported(
  itemsData,
  minimumSupport,
);
itemsData = step3SortItemFrequencyDescending(itemsData);
itemsData = step4RegisterIndexNumberOnItem(itemsData);
indexedTransactionsData = step5IndexingTransactionsData(
  itemsData,
  transactionsData,
);
indexedTransactionsData = step6EliminatingUnsupportedData(
  indexedTransactionsData,
);
indexedTransactionsData = step7SortingIndexedTransactionsData(
  indexedTransactionsData,
);
indexedTransactionsData = step8ReversingIndexedTransactionsData(
  indexedTransactionsData,
);
localItemAsociationBasedOnLastIndex = step9SetLocalItemAsociationBasedOnLastIndex(
  indexedTransactionsData,
  itemsData.length,
);

console.log(localItemAsociationBasedOnLastIndex);
console.log(indexedTransactionsData);

/// / 5. Lakukan pencarian frequency itemset secara lokal dari indeks terakhir, yaitu indeks
/// / Index 7
/// / a. Magasida dan Molexflu = 0
/// / b. Magasida dan Komix = 1
/// / c. Magasida dan Antangin = 1
/// / d. Magasida dan Sanaflu = 0
/// / e. Magasida dan Bisolvon = 1
/// / f.Magasids dan Bodrex = 3
/// / Index 6
/// / a. Molexflu dan Komix =2
/// / b. Molexflu dan Antangin = 3
/// / c. Molexflu dan Sanaflu = 1
/// / d. Molexflu dan Bisolvon = 1
/// / e.Molexflu dan Bodrex = 3
/// / Index 5
/// / a. Komix dan Antangin = 2
/// / b. Komix dan Sanaflu = 2
/// / c. Komix dan Bisolvon = 2
/// / d. Komix dan Bodrex = 3
/// / Index 4
/// / a. Antangin dan Sanaflu = 3
/// / b. Antangin dan Bisolvon = 3
/// / c.Antangin dan Bodrex = 2
/// / Index 3
/// / a. Sanaflu dan Bisolvon = 5
/// / b. Sanaflu dan Bodrex = 3
/// / Index 2
/// / a.Bisolvon dan Bodrex = 4

/// / for (
/// /  let indexOfItemsFrequencyWithMoreThanMinimumSupport =
/// /    itemsFrequencyWithMoreThanMinimumSupport.length - 1;
/// /  indexOfItemsFrequencyWithMoreThanMinimumSupport >= 0;
/// /  indexOfItemsFrequencyWithMoreThanMinimumSupport--
/// / ) {
/// /  console.log('end');
/// / }

/// / 6. Berikut hasil frequency patterns dari semua pencarian lokal:
/// / 1 Antangin dan Bisolvon 5
/// / 2 Bisolvon dan Bodrex 4
/// / Selanjutnya dilakukan pengujian untuk pola (patterns) yang ditemukan
/// / Nilai minimum confidence (min_conf) untuk penelitian ini berkisar dari 10% - 100%.
/// / Untuk contoh perhitungan ini, misal nilai minimum confidence adalah 40%.
/// / Berikut merupakan hasil perhitungan Berikut merupakan hasil perhitungan nilai confidence
/// / untuk beberapa patterns:
/// / 1. conf (Antangin=>Bisolvon)=∑ Antangin 𝑑𝑎𝑛 Bisolvon
/// / ∑ 𝐴𝑛𝑡𝑎𝑛𝑔𝑖𝑛
/// /= 5 / 8 = 0,63 * 100 = 63 % (Memenhui Confidence)
/// / 2. conf (Bisolvon=>Bodrex)=∑ Bisolvon 𝑑𝑎𝑛 Bodrex
/// / ∑ 𝐵𝑖𝑠𝑜𝑙𝑣𝑜𝑛
/// /= 4 / 8 = 0,5 * 100 = 50 % (Memenuhui Confidence)
