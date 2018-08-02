import { NgModule } from '@angular/core';

import { LxrEmailReportsSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [LxrEmailReportsSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [LxrEmailReportsSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class LxrEmailReportsSharedCommonModule {}
