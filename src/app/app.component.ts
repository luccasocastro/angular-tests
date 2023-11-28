import {Component, OnDestroy, OnInit} from '@angular/core';
import {NotebookService} from './services/notebook.service';
import {Notebook} from './Notebook';
import {DialogService, DynamicDialogRef} from 'primeng/dynamicdialog';
import {OpcoesBotaoComponent} from './components/opcoes-botao/opcoes-botao.component';
import {DataService} from "./services/data.service";

interface Column {
  field: string;
  header: string;
  filter: boolean;
}

interface RamOptions {
  label: string;
  value: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [DialogService],
})
export class AppComponent implements OnInit {
  notebooks!: Notebook[];
  cols!: Column[];
  ramOptions!: RamOptions[];
  selectedRam: any;

  visible: boolean = false;
  selectedId!: number;

  ref: DynamicDialogRef | undefined;

  constructor(
    private notebookService: NotebookService,
    private dialogService: DialogService,
    private dataService: DataService
  ) {
  }

  ngOnInit(): void {
    //this.loadData();
    this.cols = [
      {field: 'id', header: 'ID', filter: false},
      {field: 'brand', header: 'Marca', filter: true},
      {field: 'model', header: 'Modelo', filter: true},
      {field: 'price', header: 'Preço', filter: true},
      {field: 'ram', header: 'RAM', filter: true},
      {field: 'inStock', header: ' ', filter: false}
    ];
    this.ramOptions = [
      {label: '8GB', value: '8GB'},
      {label: '16gb', value: '16gb'},
      {label: '32GB', value: '32GB'},
    ];
    this.dataService.trigger$.subscribe(() => this.loadData());
  }

  loadData() {
    this.notebookService.getAll().subscribe(
      (data) => {
        this.notebooks = data;
      },
      (error) => {
        console.log('Erro ao carregar dados', error);
      }
    );
  }

  getValue(event: any) {
    console.log(event.target.value);
    return event.target.value;
  }

  show() {
    this.ref = this.dialogService.open(OpcoesBotaoComponent, {
      width: '60%',
      height: '40%',
      contentStyle: {overflow: 'auto'},
      baseZIndex: 10000,
      maximizable: false,
    });
  }

  showDialog(id: number) {
    this.visible = true;
    this.selectedId = id;
  }
}
