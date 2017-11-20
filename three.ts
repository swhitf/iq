/** Declarations **/

export class Task
{
    public id:number;
    public label:string;

    constructor(id:number, label:string)
    {
        this.id = id;
        this.label = label;
    }
}

export class Resource
{
    public id:number;
    public label:string;
    
    constructor(id:number, label:string)
    {
        this.id = id;
        this.label = label;
    }
}

export class TimeAllocation
{
    public taskId:number;
    public resourceId:number;
    public date:Date;
    public hours:number;
    
    constructor(taskId:number, resourceId:number, date:Date, hours:number)
    {
        this.taskId = taskId;
        this.resourceId = resourceId;
        this.date = date;
        this.hours = hours;
    }
}

/** Question **/

export function getInvalidAllocations(globalResources:Resource[], allocations:TimeAllocation[]):TimeAllocation[]
{
    let results:TimeAllocation[] = [];

    for (let al of allocations)
    {
        let isValid = false;

        for (let rs of globalResources)
        {
            if (al.resourceId == rs.id)
            {
                isValid = true;
                break;
            }
        }

        if (!isValid) 
        {
            results.push(al);
        }
    }

    return results;
}

/** Test **/

let ts:Task[] = [];
let rs:Resource[] = [];
let as:TimeAllocation[] = [];

for (let i = 0; i < 100000; i++)
{
    ts.push(new Task(i + 1, `Task ${i + 1}`));
    rs.push(new Resource(i + 1, `Resource ${i + 1}`));
}

for (let i = 0; i < 1000; i++)
{
    as.push(new TimeAllocation(i + 1, i + 1, new Date(), Math.random()));
}

for (let i = 0; i < 500; i++)
{
    as.push(new TimeAllocation(i + 1, i + 100000, new Date(), Math.random()));
}

console.time('Runtime');
console.log(getInvalidAllocations(rs, as).length + ' invalid objects');
console.timeEnd('Runtime')

/** Result 

PS C:\Home\iq> tsc | node .\three.js
499 invalid objects

**/