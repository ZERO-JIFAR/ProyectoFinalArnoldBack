import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEdicionSkillsComponent } from './form-edicion-skills.component';

describe('FormEdicionSkillsComponent', () => {
  let component: FormEdicionSkillsComponent;
  let fixture: ComponentFixture<FormEdicionSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormEdicionSkillsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormEdicionSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
