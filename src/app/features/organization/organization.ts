import { Component, inject, signal } from '@angular/core';
import { TableModule } from 'primeng/table';
import { OrganizationService } from '../../core/service/OrganizationService';

@Component({
  selector: 'app-organization',
  standalone: true,
  imports: [TableModule],
  templateUrl: './organization.html',
  styleUrl: './organization.scss',
})
export class Organization {
  orgService = inject(OrganizationService);
  organizations = this.orgService.organizations;

   ngOnInit() {
    this.orgService.loadOrganizations();
  }
}
