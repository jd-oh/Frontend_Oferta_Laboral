import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearHabilidadComponent } from './crear-habilidad.component';

describe('CrearHabilidadComponent', () => {
  let component: CrearHabilidadComponent;
  let fixture: ComponentFixture<CrearHabilidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearHabilidadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearHabilidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
