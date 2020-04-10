import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionOneIndexComponent } from './section-one-index.component';

describe('SectionOneIndexComponent', () => {
  let component: SectionOneIndexComponent;
  let fixture: ComponentFixture<SectionOneIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionOneIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionOneIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
