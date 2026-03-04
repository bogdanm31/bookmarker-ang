import { InjectionToken } from "@angular/core";

export const API_URL = new InjectionToken('api.url', {
  providedIn: 'root',
  factory: () => ({
    apiURL: 'http://localhost:3000'
  })
});