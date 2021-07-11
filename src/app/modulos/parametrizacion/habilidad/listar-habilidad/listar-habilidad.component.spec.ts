import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarHabilidadComponent } from './listar-habilidad.component';

describe('ListarHabilidadComponent', () => {
  let component: ListarHabilidadComponent;
  let fixture: ComponentFixture<ListarHabilidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarHabilidadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarHabilidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
