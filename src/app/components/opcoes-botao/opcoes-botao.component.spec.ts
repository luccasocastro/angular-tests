import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpcoesBotaoComponent } from './opcoes-botao.component';

describe('OpcoesBotaoComponent', () => {
  let component: OpcoesBotaoComponent;
  let fixture: ComponentFixture<OpcoesBotaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OpcoesBotaoComponent]
    });
    fixture = TestBed.createComponent(OpcoesBotaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
