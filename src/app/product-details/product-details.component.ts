import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-details',
  standalone: true,
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {

  @Input() id!: number;
  @Input() title!: string;
  @Input() description!: string;
  @Input() price!: number;
  @Input() likes!: number;
  @Input() imageurl!: string;
}
