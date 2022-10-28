import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEdicionProyectoComponent } from './form-edicion-proyecto.component';

describe('FormEdicionProyectoComponent', () => {
  let component: FormEdicionProyectoComponent;
  let fixture: ComponentFixture<FormEdicionProyectoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormEdicionProyectoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormEdicionProyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
