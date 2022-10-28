import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEdicionPerfilComponent } from './form-edicion-perfil.component';

describe('FormEdicionPerfilComponent', () => {
  let component: FormEdicionPerfilComponent;
  let fixture: ComponentFixture<FormEdicionPerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormEdicionPerfilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormEdicionPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
