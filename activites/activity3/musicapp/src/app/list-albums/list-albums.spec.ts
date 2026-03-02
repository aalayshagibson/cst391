import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListAlbumsComponent } from './list-albums';

describe('ListAlbumsComponent', () => {
  let component: ListAlbumsComponent;
  let fixture: ComponentFixture<ListAlbumsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListAlbumsComponent], 
    }).compileComponents();

    fixture = TestBed.createComponent(ListAlbumsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});