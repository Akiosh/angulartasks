import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutComponent, PathNotFoundComponent } from './components';

@NgModule({
    imports: [CommonModule],
    declarations: [AboutComponent, PathNotFoundComponent ],
    exports: []
})
export class LayoutModule {}
