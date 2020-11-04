import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleOneChildComponent } from './example-one-child.component';

describe('ExampleOneChildComponent', () => {
  let component: ExampleOneChildComponent;
  let fixture: ComponentFixture<ExampleOneChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleOneChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleOneChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
