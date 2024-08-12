export class Note{
    id: string;
    notebookId: string;
    title: string;
    text: string;
    time: Date;
    img: string;

    constructor(){
        this.id = ''
        this.notebookId = ''
        this.title = 'New note', 
        this.text = '',
        this.time = new Date
        this.img = 'src/assets/images/allnotes.png'
    }
}