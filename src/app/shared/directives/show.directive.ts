import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appShow]'
})
export class ShowDirective {
  @Input() set appShow(condition: boolean) {
    if (condition && !this.hasView) {
      this.viewContainer.createEmbeddedView(this.templateRef)
      this.hasView = true
    } else {
      this.viewContainer.clear()
      this.hasView = false
    }
  }

  private hasView = false

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) { }

}
