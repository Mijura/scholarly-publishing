import { Routes, RouterModule } from '@angular/router';
import { addPaperPageRoute } from './add-paper/add-paper.routes';

const appRoutes: Routes = [
  ... addPaperPageRoute
];

appRoutes.forEach(route => {
  route.canActivate = route.canActivate || [];
});

export const RoutingModule = RouterModule.forRoot(appRoutes);
