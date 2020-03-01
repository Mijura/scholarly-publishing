import { Routes, RouterModule } from '@angular/router';
import { addPaperPageRoute } from './add-paper/add-paper.routes';
import { loginPageRoute } from './login/login.routes';

const appRoutes: Routes = [
  ... addPaperPageRoute,
  ... loginPageRoute
];

appRoutes.forEach(route => {
  route.canActivate = route.canActivate || [];
});

export const RoutingModule = RouterModule.forRoot(appRoutes);
