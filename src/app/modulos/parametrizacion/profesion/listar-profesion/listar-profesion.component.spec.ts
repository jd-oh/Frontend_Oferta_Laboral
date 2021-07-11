import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarProfesionComponent } from './listar-profesion.component';

describe('ListarProfesionComponent', () => {
  let component: ListarProfesionComponent;
  let fixture: ComponentFixture<ListarProfesionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarProfesionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarProfesionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
