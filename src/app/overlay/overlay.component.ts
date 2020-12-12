import { Component, OnInit, Inject } from '@angular/core';
import { OverlayRef } from '@angular/cdk/overlay';
import { OVERLAY_IMG } from './overlay';


@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.css']
})
export class OverlayComponent implements OnInit {

  constructor(public dialogRef: OverlayDialogRef,
    @Inject(OVERLAY_IMG) public image: any) { }

  ngOnInit() {
  }

}

export class OverlayDialogRef {

  constructor(private overlayRef: OverlayRef) { }

  close(): void {
    this.overlayRef.dispose();
  }
}
