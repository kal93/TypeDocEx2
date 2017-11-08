import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AppHeaderSettingsModel } from './app-header-settings.model';

/**
 * @description App header component
 * @example Usage
 * ```
 * <sq-app-header *ngIf="showHeader"
               [logo]="logo"
               [appName]="appName"
               [hostSystem]="hostSystem"
               [nameSpace]="nameSpace"
               [loggedInUser]="loggedInUser"
               [sqConfig]="appHeaderSettings"
               (menuItemClick)='menuClickHandler($event)'></sq-app-header>
 * ```
 */
@Component({
    moduleId: module.id,
    selector: 'sq-app-header',
    templateUrl: './app-header.component.html',
    styleUrls: ['./app-header.component.css', './app-header.component.desktop.css', './app-header.component.mobile.css']
})

/// <summary>
/// This class creates App Header
/// </summary>
export class AppHeaderComponent {
    // Header Component Settings
  /**
   *Logo or any image of organization.
   */
    @Input() logo?: string;
   /**
    * Name of project.
    */ 
    @Input() appName?: string;
    /**
     * Describes host system
     */
    @Input() hostSystem?: string;
    /**
     * Name space
     */
    @Input() nameSpace?: string;
    /**
     * Name of logged in user.
     */
    @Input() loggedInUser?: string;
    /**
     * Configuration object
     */
    @Input() sqConfig: AppHeaderSettingsModel;

    /**
     * @hidden
     */
    @Output() menuItemClick: EventEmitter<string> = new EventEmitter<string>();

    /**
     * Click handler for tabs
     */
    // Handler for menu item click
    onClickHandler(menuItem: string) {
        this.menuItemClick.emit(menuItem);
    }
}