import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaDeAlumnosPage } from './lista-de-alumnos.page';

describe('ListaDeAlumnosPage', () => {
  let component: ListaDeAlumnosPage;
  let fixture: ComponentFixture<ListaDeAlumnosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListaDeAlumnosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
