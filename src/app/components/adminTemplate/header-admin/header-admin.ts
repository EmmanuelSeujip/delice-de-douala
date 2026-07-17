import { Component, inject } from '@angular/core';
import { LayoutService } from '../../../services/core/layout.service/layout.service';

@Component({
  selector: 'app-header-admin',
  imports: [],
  templateUrl: './header-admin.html',
  styleUrl: './header-admin.css',
})
export class HeaderAdmin {
  layout = inject(LayoutService);
}
