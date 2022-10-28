import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicionAcercaDeComponent } from './edicion-acerca-de.component';

describe('EdicionAcercaDeComponent', () => {
  let component: EdicionAcercaDeComponent;
  let fixture: ComponentFixture<EdicionAcercaDeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdicionAcercaDeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdicionAcercaDeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
