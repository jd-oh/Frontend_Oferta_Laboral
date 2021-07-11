import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarProfesionComponent } from './eliminar-profesion.component';

describe('EliminarProfesionComponent', () => {
  let component: EliminarProfesionComponent;
  let fixture: ComponentFixture<EliminarProfesionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarProfesionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarProfesionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
