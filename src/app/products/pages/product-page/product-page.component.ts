import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'products-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.sass'],
})
export class ProductPageComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  public isProductVisible: boolean = false;

  currentPrice: number = 10;

  constructor() {
    console.log('constructor...');
  }

  ngOnInit(): void {
    console.log('gOnInit 😀');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log({ changes });
    console.log('gOnChanges 😀');
  }
  ngDoCheck(): void {
    console.log('gDoCheck 😀');
  }
  ngAfterContentInit(): void {
    console.log('gAfterContentInit 😀');
  }
  ngAfterContentChecked(): void {
    console.log('gAfterContentChecked 😀');
  }
  ngAfterViewInit(): void {
    console.log('gAfterViewInit 😀');
  }
  ngAfterViewChecked(): void {
    console.log('gAfterViewChecked 😀');
  }
  ngOnDestroy(): void {
    console.log('gOnDestroy 😀');
  }

  increasePrice() {
    this.currentPrice++;
  }
}
