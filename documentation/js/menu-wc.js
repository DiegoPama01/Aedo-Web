'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">aedo-web documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AedoModule.html" data-type="entity-link" >AedoModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AedoModule-71de0d86be464411ae75bfa66f2827dcaf7bf6a1a079a33d57a09ccfd414e796543796ed8633ca457922af706aad49a3b4b61c1187aef750e9790b861e350880"' : 'data-bs-target="#xs-components-links-module-AedoModule-71de0d86be464411ae75bfa66f2827dcaf7bf6a1a079a33d57a09ccfd414e796543796ed8633ca457922af706aad49a3b4b61c1187aef750e9790b861e350880"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AedoModule-71de0d86be464411ae75bfa66f2827dcaf7bf6a1a079a33d57a09ccfd414e796543796ed8633ca457922af706aad49a3b4b61c1187aef750e9790b861e350880"' :
                                            'id="xs-components-links-module-AedoModule-71de0d86be464411ae75bfa66f2827dcaf7bf6a1a079a33d57a09ccfd414e796543796ed8633ca457922af706aad49a3b4b61c1187aef750e9790b861e350880"' }>
                                            <li class="link">
                                                <a href="components/AdministratorPageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdministratorPageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CategoriesCardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CategoriesCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CategoryItemComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CategoryItemComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CommentListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CommentListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomePageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomePageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LanguageItemComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LanguageItemComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ListAdminComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ListAdminComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ListCategoriesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ListCategoriesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ListLanguagesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ListLanguagesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ListUserComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ListUserComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MainViewPageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MainViewPageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MapComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MapComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OdiseaDetailsMapCardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OdiseaDetailsMapCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OdiseaFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OdiseaFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OdiseaItemCardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OdiseaItemCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OdiseaProfileDetailsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OdiseaProfileDetailsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OdiseaProfileOdiseoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OdiseaProfileOdiseoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OdiseaProfilePageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OdiseaProfilePageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OdiseaRegisterPageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OdiseaRegisterPageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProfileCardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProfileCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProfileViewPageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProfileViewPageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RegisterDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RegisterDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ResetEmailDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ResetEmailDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ResetPasswordDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ResetPasswordDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserStatusComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserStatusComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AedoRoutingModule.html" data-type="entity-link" >AedoRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppModule-07a2684875f27658fa5c9f1a048376556df2014b2e2735e4da32cf645740870526cf8aa918e720adbf787e7caffbbf7a085ca45516cd5ac2f047985ee4d16ce1"' : 'data-bs-target="#xs-components-links-module-AppModule-07a2684875f27658fa5c9f1a048376556df2014b2e2735e4da32cf645740870526cf8aa918e720adbf787e7caffbbf7a085ca45516cd5ac2f047985ee4d16ce1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-07a2684875f27658fa5c9f1a048376556df2014b2e2735e4da32cf645740870526cf8aa918e720adbf787e7caffbbf7a085ca45516cd5ac2f047985ee4d16ce1"' :
                                            'id="xs-components-links-module-AppModule-07a2684875f27658fa5c9f1a048376556df2014b2e2735e4da32cf645740870526cf8aa918e720adbf787e7caffbbf7a085ca45516cd5ac2f047985ee4d16ce1"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ErrorPageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ErrorPageComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MaterialModule.html" data-type="entity-link" >MaterialModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Category.html" data-type="entity-link" >Category</a>
                            </li>
                            <li class="link">
                                <a href="classes/CategoryDto.html" data-type="entity-link" >CategoryDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Comment.html" data-type="entity-link" >Comment</a>
                            </li>
                            <li class="link">
                                <a href="classes/CommentDto.html" data-type="entity-link" >CommentDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Language.html" data-type="entity-link" >Language</a>
                            </li>
                            <li class="link">
                                <a href="classes/LanguageDto.html" data-type="entity-link" >LanguageDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Odisea.html" data-type="entity-link" >Odisea</a>
                            </li>
                            <li class="link">
                                <a href="classes/OdiseaCalendar.html" data-type="entity-link" >OdiseaCalendar</a>
                            </li>
                            <li class="link">
                                <a href="classes/OdiseaCalendarDto.html" data-type="entity-link" >OdiseaCalendarDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/OdiseaDates.html" data-type="entity-link" >OdiseaDates</a>
                            </li>
                            <li class="link">
                                <a href="classes/OdiseaDatesDto.html" data-type="entity-link" >OdiseaDatesDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/OdiseaDto.html" data-type="entity-link" >OdiseaDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Odiseo.html" data-type="entity-link" >Odiseo</a>
                            </li>
                            <li class="link">
                                <a href="classes/OdiseoDto.html" data-type="entity-link" >OdiseoDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Record.html" data-type="entity-link" >Record</a>
                            </li>
                            <li class="link">
                                <a href="classes/RecordDto.html" data-type="entity-link" >RecordDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Reservation.html" data-type="entity-link" >Reservation</a>
                            </li>
                            <li class="link">
                                <a href="classes/ReservationDto.html" data-type="entity-link" >ReservationDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link" >User</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthenticationService.html" data-type="entity-link" >AuthenticationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CategoryService.html" data-type="entity-link" >CategoryService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CommentService.html" data-type="entity-link" >CommentService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FirestoreService.html" data-type="entity-link" >FirestoreService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ImagesService.html" data-type="entity-link" >ImagesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LanguageService.html" data-type="entity-link" >LanguageService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/OdiseaCalendarService.html" data-type="entity-link" >OdiseaCalendarService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/OdiseaDatesService.html" data-type="entity-link" >OdiseaDatesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/OdiseaService.html" data-type="entity-link" >OdiseaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/OdiseoService.html" data-type="entity-link" >OdiseoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RecordService.html" data-type="entity-link" >RecordService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ReservationService.html" data-type="entity-link" >ReservationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/StorageService.html" data-type="entity-link" >StorageService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/ICategory.html" data-type="entity-link" >ICategory</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IComment.html" data-type="entity-link" >IComment</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ILanguage.html" data-type="entity-link" >ILanguage</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ILocation.html" data-type="entity-link" >ILocation</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IOdisea.html" data-type="entity-link" >IOdisea</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IOdiseaCalendar.html" data-type="entity-link" >IOdiseaCalendar</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IOdiseaDates.html" data-type="entity-link" >IOdiseaDates</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IOdiseo.html" data-type="entity-link" >IOdiseo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IRecord.html" data-type="entity-link" >IRecord</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IReservation.html" data-type="entity-link" >IReservation</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IUser.html" data-type="entity-link" >IUser</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/LanguageInfo.html" data-type="entity-link" >LanguageInfo</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});