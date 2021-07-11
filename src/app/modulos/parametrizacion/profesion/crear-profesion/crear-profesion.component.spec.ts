import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearProfesionComponent } from './crear-profesion.component';

describe('CrearProfesionComponent', () => {
  let component: CrearProfesionComponent;
  let fixture: ComponentFixture<CrearProfesionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearProfesionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearProfesionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
