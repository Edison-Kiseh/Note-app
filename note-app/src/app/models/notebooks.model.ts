export class Notebook {
    id: string;
    name: string;
    img: string;
    time: Date;
    notecount: number;
  
    constructor() {
      this.id = "";
      this.name = "New notebook";
      this.img = '../../assets/images/notebook.jpg';
      this.time = new Date;
      this.notecount = 0;
    }
  }