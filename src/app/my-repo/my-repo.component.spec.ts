import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyRepoComponent } from './my-repo.component';

describe('MyRepoComponent', () => {
  let component: MyRepoComponent;
  let fixture: ComponentFixture<MyRepoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyRepoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyRepoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
