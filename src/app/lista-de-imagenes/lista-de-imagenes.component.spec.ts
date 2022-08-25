import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDeImagenesComponent } from './lista-de-imagenes.component';

describe('ListaDeImagenesComponent', () => {
  let component: ListaDeImagenesComponent;
  let fixture: ComponentFixture<ListaDeImagenesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaDeImagenesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDeImagenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
