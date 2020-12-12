import { Image, OVERLAY_IMG } from '../overlay/overlay';
import { Injectable, Inject, InjectionToken, Injector } from '@angular/core';
import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal, PortalInjector } from '@angular/cdk/portal';
import { OverlayComponent, OverlayDialogRef } from '../overlay/overlay.component';

interface OverlayDialogConfig {
  panelClass?: string;
  hasBackdrop?: boolean;
  backdropClass?: string;
  image?: Image;
}

const DEFAULT_CONFIG: OverlayDialogConfig = {
  hasBackdrop: true,
  backdropClass: 'dark-backdrop',
  panelClass: 'tm-file-preview-dialog-panel'
}


@Injectable()
export class OverlayService {

  constructor(private injector: Injector,
    private overlay: Overlay) { }

  open(config: OverlayDialogConfig = {}) {
    // Override default configuration
    const dialogConfig = { ...DEFAULT_CONFIG, ...config };

    // Returns an OverlayRef which is a PortalHost
    const overlayRef = this.createOverlay(dialogConfig);

    // Instantiate remote control
    const dialogRef = new OverlayDialogRef(overlayRef);

    const injector = this.createInjector(config, dialogRef);

    // Create ComponentPortal that can be attached to a PortalHost
    const containerPortal = new ComponentPortal(OverlayComponent, null, injector);

    // Attach ComponentPortal to PortalHost
    overlayRef.attach(containerPortal);

    return dialogRef;
  }

  private createOverlay(config: OverlayDialogConfig) {
    const overlayConfig = this.getOverlayConfig(config);
    return this.overlay.create(overlayConfig);
  }

  private getOverlayConfig(config: OverlayDialogConfig): OverlayConfig {
    const positionStrategy = this.overlay.position()
      .global()
      .centerHorizontally()
      .centerVertically();

    const overlayConfig = new OverlayConfig({
      hasBackdrop: config.hasBackdrop,
      backdropClass: config.backdropClass,
      panelClass: config.panelClass,
      scrollStrategy: this.overlay.scrollStrategies.block(),
      positionStrategy
    });

    return overlayConfig;
  }

  private createInjector(config: OverlayDialogConfig, dialogRef: OverlayDialogRef): PortalInjector {
    const injectionTokens = new WeakMap();

    injectionTokens.set(OverlayDialogRef, dialogRef);
    injectionTokens.set(OVERLAY_IMG, config.image);

    return new PortalInjector(this.injector, injectionTokens);
  }
}
