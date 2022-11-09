export class TododataService{
    
    todoListContent: {todoText: string, todoCheck: boolean}[] = [];

    AddList(inputData: {text: string, check: boolean}){
        this.todoListContent.push({todoText: inputData.text, todoCheck: inputData.check});
      }
    Remove(id : number){
        this.todoListContent.splice(id, 1);
      }
    
    Check(id : number){
        this.todoListContent[id].todoCheck = !this.todoListContent[id].todoCheck;
      }

}