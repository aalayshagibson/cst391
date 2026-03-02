import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListArtistsComponent } from './list-artists';

describe('ListArtistsComponent', () => {
  let component: ListArtistsComponent;
  let fixture: ComponentFixture<ListArtistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListArtistsComponent], 
    }).compileComponents();

    fixture = TestBed.createComponent(ListArtistsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});