import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleOneFatherComponent } from './example-one-father.component';

describe('ExampleOneFatherComponent', () => {
  let component: ExampleOneFatherComponent;
  let fixture: ComponentFixture<ExampleOneFatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleOneFatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleOneFatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
