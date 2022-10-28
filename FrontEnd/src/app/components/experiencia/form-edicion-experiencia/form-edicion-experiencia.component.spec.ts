import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEdicionExperienciaComponent } from './form-edicion-experiencia.component';

describe('FormEdicionExperienciaComponent', () => {
  let component: FormEdicionExperienciaComponent;
  let fixture: ComponentFixture<FormEdicionExperienciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormEdicionExperienciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormEdicionExperienciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
