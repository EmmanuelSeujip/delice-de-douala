import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ModalService } from './services/core/modal.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  @ViewChild('modalHost', { read: ViewContainerRef }) modalHost!: ViewContainerRef;

  constructor(protected modalService: ModalService) {}

  ngAfterViewInit() {
    this.modalService.registerHost(this.modalHost);
  }
}
