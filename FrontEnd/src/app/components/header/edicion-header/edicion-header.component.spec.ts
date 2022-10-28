import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicionHeaderComponent } from './edicion-header.component';

describe('EdicionHeaderComponent', () => {
  let component: EdicionHeaderComponent;
  let fixture: ComponentFixture<EdicionHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdicionHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdicionHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
