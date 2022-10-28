import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicionLogoApComponent } from './edicion-logo-ap.component';

describe('EdicionLogoApComponent', () => {
  let component: EdicionLogoApComponent;
  let fixture: ComponentFixture<EdicionLogoApComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdicionLogoApComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdicionLogoApComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
