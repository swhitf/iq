/** Question **/

interface DragCallback
{
    (x:number, y:number):void;
}

class DragHandler
{
    private dragging:boolean;
    private lastX:number;
    private lastY:number;
    private callback:DragCallback;

    constructor(e:MouseEvent, callback:DragCallback)
    {
        this.dragging = true;
        this.callback = callback;
        this.lastX = e.clientX;
        this.lastY = e.clientY;

        window.addEventListener('mousemove', this.onDrag);
        window.addEventListener('mouseup', this.onDragStop);
    }
    
    public onDrag(e:MouseEvent):void
    {
        if (this.dragging)
        {
            this.callback(e.clientX - this.lastX, e.clientY - this.lastY);
            this.lastX = e.clientX;
            this.lastY = e.clientY;
        }
    }
    
    public onDragStop(e:MouseEvent):void
    {
        this.dragging = false;
    }
}

/** Test **/

let target = document.getElementById('target') as HTMLElement;
if (target)
{
    target.addEventListener('mousedown', e => 
    {
        new DragHandler(e, (x, y) => 
        {
            target.style.left = (parseInt(target.style.left) + x) + 'px';
            target.style.top = (parseInt(target.style.top) + y) + 'px';
        })
    });
}

/** Result 

Nothing happens! 

**/