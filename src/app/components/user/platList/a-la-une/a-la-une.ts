import { Component, input } from '@angular/core';
import Plat from '../../../../models/plat';

@Component({
  selector: 'app-a-la-une',
  imports: [],
  templateUrl: './a-la-une.html',
  styleUrl: './a-la-une.css',
})
export class ALaUne {
  plat=input.required<Plat>()
}
