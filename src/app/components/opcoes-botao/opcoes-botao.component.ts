import { Component, Input } from '@angular/core';
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-opcoes-botao',
  templateUrl: './opcoes-botao.component.html',
  styleUrls: ['./opcoes-botao.component.scss'],
})
export class OpcoesBotaoComponent{
  @Input() id!: number;

  constructor(private dataService: DataService) {
  }

  testeId(){
    console.log(this.id);
  }

  onBtnClick(){
    this.dataService.triggerLoadData()
  }
}
