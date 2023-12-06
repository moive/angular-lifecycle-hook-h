import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'products-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.sass'],
})
export class PriceComponent implements OnInit, OnChanges, OnDestroy {
  @Input()
  price: number = 0;

  ngOnInit(): void {
    console.log('Component Price: ngOnInit');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Component Price: ngOnChanges');
    console.log({ changes });
  }
  ngOnDestroy(): void {
    console.log('Component Price: ngOnDestroy');
  }
}
