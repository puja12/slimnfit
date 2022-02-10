import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutslimnfitComponent } from './aboutslimnfit.component';

describe('AboutslimnfitComponent', () => {
  let component: AboutslimnfitComponent;
  let fixture: ComponentFixture<AboutslimnfitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutslimnfitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutslimnfitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
