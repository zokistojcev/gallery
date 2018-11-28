export class Upload{
    url: string;
    file: File;
    progres: number;
    createdOn: Date= new Date();

 
    constructor(file: File) {
        this.file = file
        
    }
}