import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class OrganizationService {
  private http = inject(HttpClient);
  organizations = signal<OrganizationResponse[]>([]);

  loadOrganizations() {
    this.http.get<OrganizationResponse[]>('http://localhost:8080/organizations')
      .subscribe((res) => this.organizations.set(res));
  }
}