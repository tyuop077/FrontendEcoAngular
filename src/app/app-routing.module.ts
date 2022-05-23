import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '@pages/home/home.component';
import { NotFoundComponent } from '@pages/not-found/not-found.component';
import { RecyclingPointsComponent } from '@pages/recycling-points/recycling-points.component';

const routes: Routes = [
	{
		path: "",
		component: HomeComponent
	},
	{
		path: "points",
		component: RecyclingPointsComponent
	},
	{
		path: "**",
		component: NotFoundComponent
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
