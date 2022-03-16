import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailymealplanComponent } from './dailymealplan.component';

describe('DailymealplanComponent', () => {
  let component: DailymealplanComponent;
  let fixture: ComponentFixture<DailymealplanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailymealplanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DailymealplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
