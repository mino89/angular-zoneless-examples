import { Routes } from "@angular/router";
import { ChangeDetectorRefComponent } from "./examples/change-detector-ref/change-detector-ref.component";
import { ApplicationRefComponent } from "./examples/application-ref/application-ref.component";
import { SignalsComponent } from "./examples/signals/signals.component";
import { AsyncPipeComponent } from "./examples/async-pipe/async-pipe.component";

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'change-detector-ref',
        pathMatch: 'full'
    }, 
    {
        path: 'change-detector-ref',
        component: ChangeDetectorRefComponent,
    },
    {
        path: 'application-ref',
        component: ApplicationRefComponent,
    },
    {
        path: 'signals',
        component: SignalsComponent,
    },
    {
        path: 'async-pipe',
        component: AsyncPipeComponent
    }    
]