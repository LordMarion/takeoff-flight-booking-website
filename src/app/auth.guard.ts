import { inject } from "@angular/core";
import { Router } from "@angular/router";
import { SharedService } from "./services/shared.service";
import { tap } from "rxjs";

export const authGuard = () => {
    const sharedService = inject(SharedService);
    const router = inject(Router);

    return sharedService.isLoggedIn$.pipe(
        tap((isLoggedIn: boolean) => {
          if (!isLoggedIn) {
            router.navigate(['/']);
          }
        })
      );
};
