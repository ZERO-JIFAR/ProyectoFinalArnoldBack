import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicionSkillsComponent } from './edicion-skills.component';

describe('EdicionSkillsComponent', () => {
  let component: EdicionSkillsComponent;
  let fixture: ComponentFixture<EdicionSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdicionSkillsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdicionSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
