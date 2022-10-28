import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEdicionEducacionComponent } from './form-edicion-educacion.component';

describe('FormEdicionEducacionComponent', () => {
  let component: FormEdicionEducacionComponent;
  let fixture: ComponentFixture<FormEdicionEducacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormEdicionEducacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormEdicionEducacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
