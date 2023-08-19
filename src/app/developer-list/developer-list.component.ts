import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { DeveloperService } from "../services/developer-service";
import { IDeveloper } from "../interfaces/developer";


@Component({
  templateUrl: './developer-list.component.html',
  styleUrls: ['./developer-list.component.css']
})
export class DeveloperListComponent implements OnInit, OnDestroy {
  pageTitle = 'Developer List'
  subscription!: Subscription;

  developers: IDeveloper[] = [];

  constructor(private developerService: DeveloperService) {}

  ngOnInit(): void {
    this.subscription = this.developerService.getDevelopers().subscribe({
      next: developers => {
        this.developers = developers;
      }
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
}
}
