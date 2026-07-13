import { Component, input } from '@angular/core';
import Plat from '../../../../models/plat';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-a-la-une',
  imports: [CurrencyPipe],
  templateUrl: './a-la-une.html',
  styleUrl: './a-la-une.css',
})
export class ALaUne {
  plat=input.required<Plat>()

}
