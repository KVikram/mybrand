import { Injectable, Inject } from '@angular/core';
import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { OverlayComponent, OverlayDialogRef } from '../overlay/overlay.component';

interface OverlayDialogConfig {
  panelClass?: string;
  hasBackdrop?: boolean;
  backdropClass?: string;
}

const DEFAULT_CONFIG: OverlayDialogConfig = {
  hasBackdrop: true,
  backdropClass: 'dark-backdrop',
  panelClass: 'tm-file-preview-dialog-panel'
}


@Injectable()
export class OverlayService {

  constructor(
    private overlay: Overlay) { }

  open(config: OverlayDialogConfig = {}) {
    // Override default configuration
    const dialogConfig = { ...DEFAULT_CONFIG, ...config };

    // Returns an OverlayRef which is a PortalHost
    const overlayRef = this.createOverlay(dialogConfig);

    // Instantiate remote control
    const dialogRef = new OverlayDialogRef(overlayRef);

    // Create ComponentPortal that can be attached to a PortalHost
    const filePreviewPortal = new ComponentPortal(OverlayComponent);

    // Attach ComponentPortal to PortalHost
    overlayRef.attach(filePreviewPortal);

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
}
