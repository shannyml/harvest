'use strict';

// 1. printIndices
function printIndices(items) {
    for (let i = 0; i < items.length; i += 1) {
      console.log(`${items[i]} ${i}`);
  }
}


// 2. everyOtherItem
function everyOtherItem(items) {
    let results = []
    for (let i = 0; i < items.length; i += 1) {
      if (i % 2 === 0) {
        results.push(items[i]);
      }
    }
    console.log(results);
}

// 3. smallestNItems
function smallestNItems(items, n) {
  // let sortedItems = items.sort();
  // console.log(sortedItems);
  // let sortedNItems = sortedItems.slice(0, n);

  // console.log(sortedNItems)
  let sortedItems = items.sort((a, b) => a - b);
  let slicedSortedItems = sortedItems.slice(0, n);
  console.log(slicedSortedItems)
}
