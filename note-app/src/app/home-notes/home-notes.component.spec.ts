import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeNotesComponent } from './home-notes.component';

describe('HomeNotesComponent', () => {
  let component: HomeNotesComponent;
  let fixture: ComponentFixture<HomeNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeNotesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
