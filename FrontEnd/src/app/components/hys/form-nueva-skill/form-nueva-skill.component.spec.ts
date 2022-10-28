import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNuevaSkillComponent } from './form-nueva-skill.component';

describe('FormNuevaSkillComponent', () => {
  let component: FormNuevaSkillComponent;
  let fixture: ComponentFixture<FormNuevaSkillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormNuevaSkillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormNuevaSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
