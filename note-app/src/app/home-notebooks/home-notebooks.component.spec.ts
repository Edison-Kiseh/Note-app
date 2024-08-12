import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeNotebooksComponent } from './home-notebooks.component';

describe('HomeNotebooksComponent', () => {
  let component: HomeNotebooksComponent;
  let fixture: ComponentFixture<HomeNotebooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeNotebooksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeNotebooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
