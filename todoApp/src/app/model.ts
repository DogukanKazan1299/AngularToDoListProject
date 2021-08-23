export class Model{
    user;
    items=[new TodoItem("",false)];

    constructor(){
        this.user="Doğukan";
        this.items=[
            new TodoItem("Spor",true),  
            new TodoItem("Kahvaltı",false), 
            new TodoItem("Sinema",false), 
            new TodoItem("Ders",false)

        ];
    }
}

export class TodoItem{
    description: String;
    action: Boolean;

    constructor(description: string,action: boolean){
        this.description=description;
        this.action=action;
    }
}