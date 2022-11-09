import { Component, OnInit } from '@angular/core';
import { TododataService } from '../../tododata.service'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  todoTexts: {todoText: string, todoCheck: boolean}[];
  
  constructor(private tododataService: TododataService) { }

  ngOnInit(): void {
    this.todoTexts = this.tododataService.todoListContent;
  }

  onRemove(id : number){
    this.tododataService.Remove(id);
  }

  onCheck(id : number){
    this.tododataService.Check(id);
  }

}
