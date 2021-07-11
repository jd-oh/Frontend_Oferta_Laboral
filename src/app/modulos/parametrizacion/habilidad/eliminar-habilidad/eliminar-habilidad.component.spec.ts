import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarHabilidadComponent } from './eliminar-habilidad.component';

describe('EliminarHabilidadComponent', () => {
  let component: EliminarHabilidadComponent;
  let fixture: ComponentFixture<EliminarHabilidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarHabilidadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarHabilidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
