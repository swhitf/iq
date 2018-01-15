/** Declarations **/

export class Item
{
    public id:string;
    public label:string;

    constructor(id:string, label:string)
    {
        this.id = id;
        this.label = label;
    }
}


/** Question **/

export function findItemsInBothLists(listA:Item[], listB:Item[]):Item[]
{
    let results:Item[] = [];

    for (let a of listA)
    {
        let isValid = false;

        for (let b of listB)
        {
            if (a.id == b.id)
            {
                isValid = true;
                break;
            }
        }

        if (!isValid) 
        {
            results.push(a);
        }
    }

    return results;
}

/** Test **/

let listA:Item[] = [];
let listB:Item[] = [];

for (let i = 0; i < 10000; i++)
{
    listA.push(new Item('item' + i, 'Item #' + (i + 1)));
}

for (let i = 1000; i < 10100; i++)
{
    listB.push(new Item('item' + i, 'Item #' + (i + 1)));
}

console.time('Runtime');
console.log(findItemsInBothLists(listA, listB).length + ' common objects');
console.timeEnd('Runtime')

/** Result 

C:\Home\iq>node three.js
1000 common objects
Runtime: 717.182ms


**/