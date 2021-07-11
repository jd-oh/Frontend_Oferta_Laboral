import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarProfesionComponent } from './editar-profesion.component';

describe('EditarProfesionComponent', () => {
  let component: EditarProfesionComponent;
  let fixture: ComponentFixture<EditarProfesionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarProfesionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarProfesionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
