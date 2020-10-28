import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoGithubComponent } from './info-github.component';

describe('InfoGithubComponent', () => {
  let component: InfoGithubComponent;
  let fixture: ComponentFixture<InfoGithubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoGithubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoGithubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
