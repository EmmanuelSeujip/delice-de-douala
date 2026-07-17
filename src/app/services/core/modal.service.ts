import { Injectable, ViewContainerRef, ComponentRef, Type, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ModalService {
  private hostRef!: ViewContainerRef;
  private currentComponentRef?: ComponentRef<unknown>;
  isOpen = signal(false);

  registerHost(vcr: ViewContainerRef) {
    this.hostRef = vcr;
  }

  open<T>(component: Type<T>, inputs?: Partial<T>): ComponentRef<T> {
    this.close(); // ferme une éventuelle modal déjà ouverte

    const componentRef = this.hostRef.createComponent(component);

    if (inputs) {
      Object.assign(componentRef.instance as object, inputs);
    }

    this.currentComponentRef = componentRef;
    this.isOpen.set(true);
    return componentRef;
  }

  close() {
    this.currentComponentRef?.destroy();
    this.currentComponentRef = undefined;
    this.isOpen.set(false);
  }
}