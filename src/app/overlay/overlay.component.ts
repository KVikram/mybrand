import { Component, OnInit } from '@angular/core';
import { OverlayRef } from '@angular/cdk/overlay';


@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.css']
})
export class OverlayComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

export class OverlayDialogRef {

  constructor(private overlayRef: OverlayRef) { }

  close(): void {
    this.overlayRef.dispose();
  }
}
