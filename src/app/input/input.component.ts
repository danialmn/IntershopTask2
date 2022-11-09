import { Component} from '@angular/core';
import { TododataService } from '../tododata.service'

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  inputText: string = '';
  inputCheck: boolean = false;

  constructor( private tododataService: TododataService) { }

  onAddText(){
    this.tododataService.AddList({text: this.inputText, check: this.inputCheck });
    this.inputText = ''; 
  }
}
