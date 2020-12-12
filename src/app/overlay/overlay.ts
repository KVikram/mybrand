import { InjectionToken } from "@angular/core";

export const OVERLAY_IMG = new InjectionToken<Image>('OVERLAY_IMG');
export interface Image {
    name: string;
    url: string;
}