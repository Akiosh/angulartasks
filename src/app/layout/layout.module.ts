import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutComponent, HomeComponent, PathNotFoundComponent } from './components';

@NgModule({
    imports: [CommonModule],
    declarations: [AboutComponent, HomeComponent, PathNotFoundComponent ],
    exports: []
})
export class LayoutModule {}
