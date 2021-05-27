import {Component, Input} from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {NavbarComponent} from '../../shared/navbar/navbar.component';

@Component({
    selector: 'app-modal-content',
    template: `
    <div class="modal-header">
        <h5 class="modal-title text-center">What are you doing?</h5>
        <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
        </button>
    </div>
    <div class="modal-body" style="text-align: center;">The Meltmonger secrets that will appear here will change. Nothing will ever be the same. If you so choose, you may be informed of such changes.<br>This decision is irreversible.
    </div>
    <div class="modal-footer">
        <div class="left-side">
            <button type="button" class="btn btn-default btn-link" (click)="activeModal.close('Close click'); navBar.sidebarClose()">I musn't!</button>
        </div>
        <div class="divider"></div>
        <div class="right-side">
            <button type="button" class="btn btn-danger btn-link" (click)="activeModal.close('Close click'); navBar.sidebarClose()">I want this.</button>
        </div>
    </div>
    `
})
export class NgbdModalContent {
    @Input() name;

    constructor(public activeModal: NgbActiveModal, public navBar: NavbarComponent) {}
}

@Component({
    selector: 'app-modal-component',
    templateUrl: './modal.component.html'
})
export class NgbdModalComponent {
    constructor(private modalService: NgbModal) {}
    open() {
        const modalRef = this.modalService.open(NgbdModalContent);
        modalRef.componentInstance.name = 'World';
    }
}
