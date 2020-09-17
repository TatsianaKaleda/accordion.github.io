(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+FnW":
/*!**************************************************!*\
  !*** ./src/app/listItems/listItems.component.ts ***!
  \**************************************************/
/*! exports provided: ListItemsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListItemsComponent", function() { return ListItemsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function ListItemsComponent_div_10_div_7_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "p", 18);
} if (rf & 2) {
    const description_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", description_r4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function ListItemsComponent_div_10_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ListItemsComponent_div_10_div_7_p_1_Template, 1, 1, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@enterAnimation", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r1.description);
} }
function ListItemsComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListItemsComponent_div_10_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const item_r1 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.openDetails(item_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "svg", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ListItemsComponent_div_10_div_7_Template, 2, 2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", item_r1.active);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1.active);
} }
class ListItemsComponent {
    constructor() {
        this.items = [
            {
                title: 'Как оформить заказ',
                description: [
                    'При заказе до 17:00 доставка осуществляется <a href=\"/\"> в день заказа </a>. Среднее время доставки 2 часа. Доставка осуществляется до 20:00 ежедневно. Мы работаем без выходных и праздников, чтобы Вы всегда могли кушать вкусную и здоровую еду!',
                    'Доставка осуществляется <a href=\"/\">бесплатно</a>  при заказе от 1500 руб. по г.Москва в пределах МКАД'
                ],
                active: false,
            },
            {
                title: 'Как работает служба доставки',
                description: [
                    'При заказе до 17:00 доставка осуществляется <a href=\"/\"> в день заказа </a>. Среднее время доставки 2 часа. Доставка осуществляется до 20:00 ежедневно. Мы работаем без выходных и праздников, чтобы Вы всегда могли кушать вкусную и здоровую еду!',
                    'Доставка осуществляется <a href=\"/\">бесплатно</a>  при заказе от 1500 руб. по г.Москва в пределах МКАД'
                ],
                active: false,
            },
            {
                title: 'Условия доставки за пределами МКАД',
                description: [
                    'При заказе до 17:00 доставка осуществляется <a href=\"/\"> в день заказа </a>. Среднее время доставки 2 часа. Доставка осуществляется до 20:00 ежедневно. Мы работаем без выходных и праздников, чтобы Вы всегда могли кушать вкусную и здоровую еду!',
                    'Доставка осуществляется <a href=\"/\">бесплатно</a>  при заказе от 1500 руб. по г.Москва в пределах МКАД'
                ],
                active: false,
            },
            {
                title: 'Какие способы оплаты у вас есть?',
                description: [
                    'При заказе до 17:00 доставка осуществляется <a href=\"/\"> в день заказа </a>. Среднее время доставки 2 часа. Доставка осуществляется до 20:00 ежедневно. Мы работаем без выходных и праздников, чтобы Вы всегда могли кушать вкусную и здоровую еду!',
                    'Доставка осуществляется <a href=\"/\">бесплатно</a>  при заказе от 1500 руб. по г.Москва в пределах МКАД'
                ],
                active: false,
            },
            {
                title: 'У меня есть промокод, но я не понимаю как им пользоваться',
                description: [
                    'При заказе до 17:00 доставка осуществляется <a href=\"/\"> в день заказа </a>. Среднее время доставки 2 часа. Доставка осуществляется до 20:00 ежедневно. Мы работаем без выходных и праздников, чтобы Вы всегда могли кушать вкусную и здоровую еду!',
                    'Доставка осуществляется <a href=\"/\">бесплатно</a>  при заказе от 1500 руб. по г.Москва в пределах МКАД'
                ],
                active: false,
            }
        ];
    }
    openDetails(item) {
        item.active = !item.active;
    }
}
ListItemsComponent.ɵfac = function ListItemsComponent_Factory(t) { return new (t || ListItemsComponent)(); };
ListItemsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListItemsComponent, selectors: [["list-items"]], hostVars: 2, hostBindings: function ListItemsComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("list-items", true);
    } }, decls: 11, vars: 1, consts: [[1, "faq-page"], [1, "faq-page__bg"], ["src", "assets/broccoli.png", "alt", "broccoli"], [1, "faq-page__main"], [1, "faq-page__main_head"], [1, "faq-page__main_head-title"], [1, "faq-page__main_head-subtitle"], [1, "faq-page__main_questions"], ["class", "faq-page__main_questions-item", 4, "ngFor", "ngForOf"], [1, "faq-page__main_questions-item"], [1, "faq-page__main_questions-item_btn", 3, "click"], ["width", "26", "height", "26", "viewBox", "0 0 26 26", "fill", "none"], ["d", "M11.7429 25.5023L11.7518 14.2505L0.499935 14.2593L0.499937 11.7491L11.7518 11.7579L11.7429 0.506091H14.2532L14.2443 11.7579L25.4873 11.7579L25.4873 14.2505L14.2443 14.2505L14.2443 25.4935L11.7429 25.5023Z", "fill", "#E41579"], [1, "faq-page__main_questions-item_more"], [1, "faq-page__main_questions-item_more-title"], ["class", "faq-page__main_questions-item_more-description", 4, "ngIf"], [1, "faq-page__main_questions-item_more-description"], ["class", "faq-page__main_questions-item_more-description-item", 3, "innerHTML", 4, "ngFor", "ngForOf"], [1, "faq-page__main_questions-item_more-description-item", 3, "innerHTML"]], template: function ListItemsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " \u0412\u043E\u043F\u0440\u043E\u0441\u044B ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " \u0432\u0441\u0435 \u0447\u0442\u043E \u0432\u044B \u0445\u043E\u0442\u0438\u0442\u0435 \u0437\u043D\u0430\u0442\u044C ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ListItemsComponent_div_10_Template, 8, 4, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["@font-face {\n  font-family: 'ralewayRegular';\n  src: url('raleway.regular.eot');\n  src: url('raleway.regular.eot?#iefix') format('embedded-opentype'), url('raleway.regular.woff') format('woff'), url('raleway.regular.ttf') format('truetype'), url('raleway.regular.svg#CreativeBlockBBBold') format('svg');\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: 'ralewayBold';\n  src: url('raleway.bold.eot');\n  src: url('raleway.bold.eot?#iefix') format('embedded-opentype'), url('raleway.bold.woff') format('woff'), url('raleway.bold.ttf') format('truetype'), url('raleway.bold.svg#CreativeBlockBBBold') format('svg');\n  font-weight: bold;\n  font-style: normal;\n}\n@font-face {\n  font-family: 'ralewayExtraBold';\n  src: url('raleway.extrabold.eot');\n  src: url('raleway.extrabold.eot?#iefix') format('embedded-opentype'), url('raleway.extrabold.woff') format('woff'), url('raleway.extrabold.ttf') format('truetype'), url('raleway.extrabold.svg#CreativeBlockBBBold') format('svg');\n  font-weight: 800;\n  font-style: normal;\n}\n.faq-page[_ngcontent-%COMP%] {\n  padding: 150px 241px;\n  display: flex;\n  justify-content: center;\n  max-width: 1437px;\n  overflow-x: hidden;\n  position: relative;\n}\n@media (max-width: 1439px) {\n  .faq-page[_ngcontent-%COMP%] {\n    padding: 170px 10px;\n    justify-content: left;\n  }\n}\n@media (max-width: 767px) {\n  .faq-page[_ngcontent-%COMP%] {\n    padding-top: 200px;\n  }\n}\n.faq-page__bg[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 375px;\n  left: 62%;\n}\n@media (max-width: 1439px) {\n  .faq-page__bg[_ngcontent-%COMP%] {\n    top: -80px;\n    left: 45%;\n  }\n}\n@media (max-width: 767px) {\n  .faq-page__bg[_ngcontent-%COMP%] {\n    top: -150px;\n    left: 15%;\n  }\n}\n@media (max-width: 500px) {\n  .faq-page__bg[_ngcontent-%COMP%] {\n    left: -8%;\n  }\n}\n@media (max-width: 400px) {\n  .faq-page__bg[_ngcontent-%COMP%] {\n    left: -33%;\n  }\n}\n.faq-page__bg[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 673px;\n  height: 549px;\n}\n@media (max-width: 1439px) {\n  .faq-page__bg[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    transform: scale(0.5);\n  }\n}\n@media (max-width: 767px) {\n  .faq-page__bg[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    transform: rotate(73deg) scale(0.4);\n  }\n}\n.faq-page__main[_ngcontent-%COMP%] {\n  z-index: 1;\n}\n@media (max-width: 1439px) {\n  .faq-page__main[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.faq-page__main_head[_ngcontent-%COMP%] {\n  margin-bottom: 63px;\n}\n@media (max-width: 1439px) {\n  .faq-page__main_head[_ngcontent-%COMP%] {\n    margin-bottom: 27px;\n  }\n}\n.faq-page__main_head-title[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  color: #F6F6F6;\n  font-size: 130px;\n  text-align: center;\n  text-transform: uppercase;\n  font-family: ralewayExtraBold, \"helvetica neue\", Arial, sans-serif;\n  font-weight: 800;\n}\n@media (max-width: 1439px) {\n  .faq-page__main_head-title[_ngcontent-%COMP%] {\n    font-size: 80px;\n  }\n}\n@media (max-width: 767px) {\n  .faq-page__main_head-title[_ngcontent-%COMP%] {\n    font-size: 30px;\n  }\n}\n.faq-page__main_head-subtitle[_ngcontent-%COMP%] {\n  margin: 2px auto 0;\n  color: #000000;\n  font-size: 30px;\n  text-align: center;\n  text-transform: uppercase;\n  font-family: ralewayBold, \"helvetica neue\", Arial, sans-serif;\n  font-weight: bold;\n}\n@media (max-width: 1439px) {\n  .faq-page__main_head-subtitle[_ngcontent-%COMP%] {\n    font-size: 20px;\n    margin-top: 10px;\n  }\n}\n.faq-page__main_questions-item[_ngcontent-%COMP%] {\n  max-width: 670px;\n  display: flex;\n}\n@media (max-width: 1439px) {\n  .faq-page__main_questions-item[_ngcontent-%COMP%] {\n    max-width: 570px;\n  }\n}\n.faq-page__main_questions-item_btn[_ngcontent-%COMP%], .faq-page__main_questions-item_btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  transition: 0.3s;\n}\n.faq-page__main_questions-item_btn[_ngcontent-%COMP%] {\n  margin: 0 30px 45px 0;\n  display: flex;\n  justify-content: center;\n  flex: 0 0 70px;\n  background: #FFFFFF;\n  box-sizing: border-box;\n  border: 1px solid #E41579;\n  border-radius: 50%;\n  width: 70px;\n  height: 70px;\n  align-items: center;\n  cursor: pointer;\n}\n.faq-page__main_questions-item_btn.active[_ngcontent-%COMP%] {\n  background: linear-gradient(180deg, #FF3F84 0%, #E41579 100%);\n  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.6);\n}\n.faq-page__main_questions-item_btn.active[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);\n}\n.faq-page__main_questions-item_btn.active[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  fill: #E5E5E5;\n}\n.faq-page__main_questions-item_btn[_ngcontent-%COMP%]:hover {\n  filter: drop-shadow(0px 0px 5px rgba(228, 21, 121, 0.6));\n}\n.faq-page__main_questions-item_btn[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%] {\n  filter: drop-shadow(2px 2px 10px #000000);\n}\n.faq-page__main_questions-item_more-title[_ngcontent-%COMP%], .faq-page__main_questions-item_more-description[_ngcontent-%COMP%] {\n  color: #000000;\n  font-size: 16px;\n}\n.faq-page__main_questions-item_more-title[_ngcontent-%COMP%] {\n  margin-top: 25px;\n  font-family: ralewayBold, \"helvetica neue\", Arial, sans-serif;\n  font-weight: bold;\n}\n.faq-page__main_questions-item_more-description-item[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #000000;\n  font-family: ralewayRegular, \"helvetica neue\", Arial, sans-serif;\n  font-weight: normal;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlzdEl0ZW1zL0Q6L0Zyb250LWVuZC9UYXRzaWFuYV8yMDIwL0FjY29yZGVvbi9BY2NvcmRlb24vbXktYXBwL3NyYy9hc3NldHMvZm9udHMubGVzcyIsInNyYy9hcHAvbGlzdEl0ZW1zL2xpc3RJdGVtcy5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvbGlzdEl0ZW1zL0Q6L0Zyb250LWVuZC9UYXRzaWFuYV8yMDIwL0FjY29yZGVvbi9BY2NvcmRlb24vbXktYXBwL3NyYy9hcHAvbGlzdEl0ZW1zL2xpc3RJdGVtcy5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDZCQUFBO0VBQ0EsK0JBQUE7RUFDQSwyTkFBQTtFQUlBLG1CQUFBO0VBQ0Esa0JBQUE7QUNGRjtBREtBO0VBQ0UsMEJBQUE7RUFDQSw0QkFBQTtFQUNBLCtNQUFBO0VBSUEsaUJBQUE7RUFDQSxrQkFBQTtBQ05GO0FEU0E7RUFDRSwrQkFBQTtFQUNBLGlDQUFBO0VBQ0EsbU9BQUE7RUFJQSxnQkFBQTtFQUNBLGtCQUFBO0FDVkY7QUNsQkE7RUFDRSxvQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBRG9CRjtBQ2xCRTtFQUFBO0lBQ0UsbUJBQUE7SUFDQSxxQkFBQTtFRHFCRjtBQUNGO0FDbkJFO0VBQUE7SUFDRSxrQkFBQTtFRHNCRjtBQUNGO0FDcEJFO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBRHNCSjtBQ3BCSTtFQUFBO0lBQ0UsVUFBQTtJQUNBLFNBQUE7RUR1Qko7QUFDRjtBQ3JCSTtFQUFBO0lBQ0UsV0FBQTtJQUNBLFNBQUE7RUR3Qko7QUFDRjtBQ3RCSTtFQUFBO0lBQ0UsU0FBQTtFRHlCSjtBQUNGO0FDdkJJO0VBQUE7SUFDRSxVQUFBO0VEMEJKO0FBQ0Y7QUN4Qkk7RUFDRSxZQUFBO0VBQ0EsYUFBQTtBRDBCTjtBQ3hCTTtFQUFBO0lBQ0UscUJBQUE7RUQyQk47QUFDRjtBQ3pCTTtFQUFBO0lBQ0UsbUNBQUE7RUQ0Qk47QUFDRjtBQ3hCRTtFQUNFLFVBQUE7QUQwQko7QUN4Qkk7RUFBQTtJQUNFLFdBQUE7RUQyQko7QUFDRjtBQ3pCSTtFQUNFLG1CQUFBO0FEMkJOO0FDekJNO0VBQUE7SUFDRSxtQkFBQTtFRDRCTjtBQUNGO0FDMUJNO0VBQ0UsY0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUYvQk4sa0VBQUE7RUFDQSxnQkFBQTtBQzRERjtBQzNCUTtFQUFBO0lBQ0UsZUFBQTtFRDhCUjtBQUNGO0FDNUJRO0VBQUE7SUFDRSxlQUFBO0VEK0JSO0FBQ0Y7QUM1Qk07RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFRnJETiw2REFBQTtFQUNBLGlCQUFBO0FDb0ZGO0FDN0JRO0VBQUE7SUFDRSxlQUFBO0lBQ0EsZ0JBQUE7RURnQ1I7QUFDRjtBQzVCSTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtBRDhCTjtBQzVCTTtFQUFBO0lBQ0UsZ0JBQUE7RUQrQk47QUFDRjtBQzdCTTs7RUFFRSxnQkFBQTtBRCtCUjtBQzVCTTtFQUNFLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUQ4QlI7QUM1QlE7RUFDRSw2REFBQTtFQUNBLDJDQUFBO0FEOEJWO0FDNUJVO0VBQ0UsZ0RBQUE7QUQ4Qlo7QUM1Qlk7RUFDRSxhQUFBO0FEOEJkO0FDekJRO0VBQ0Usd0RBQUE7QUQyQlY7QUN6QlU7RUFDRSx5Q0FBQTtBRDJCWjtBQ3JCUTs7RUFFRSxjQUFBO0VBQ0EsZUFBQTtBRHVCVjtBQ3BCUTtFQUNFLGdCQUFBO0VGeEhSLDZEQUFBO0VBQ0EsaUJBQUE7QUMrSUY7QUNwQlE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFRm5JUixnRUFBQTtFQUNBLG1CQUFBO0FDMEpGIiwiZmlsZSI6InNyYy9hcHAvbGlzdEl0ZW1zL2xpc3RJdGVtcy5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ3JhbGV3YXlSZWd1bGFyJztcbiAgc3JjOiB1cmwoJ2ZvbnRzL3JhbGV3YXkucmVndWxhci5lb3QnKTtcbiAgc3JjOiB1cmwoJ2ZvbnRzL3JhbGV3YXkucmVndWxhci5lb3Q/I2llZml4JykgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLFxuICB1cmwoJ2ZvbnRzL3JhbGV3YXkucmVndWxhci53b2ZmJykgZm9ybWF0KCd3b2ZmJyksXG4gIHVybCgnZm9udHMvcmFsZXdheS5yZWd1bGFyLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKSxcbiAgdXJsKCdmb250cy9yYWxld2F5LnJlZ3VsYXIuc3ZnI0NyZWF0aXZlQmxvY2tCQkJvbGQnKSBmb3JtYXQoJ3N2ZycpO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ3JhbGV3YXlCb2xkJztcbiAgc3JjOiB1cmwoJ2ZvbnRzL3JhbGV3YXkuYm9sZC5lb3QnKTtcbiAgc3JjOiB1cmwoJ2ZvbnRzL3JhbGV3YXkuYm9sZC5lb3Q/I2llZml4JykgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLFxuICB1cmwoJ2ZvbnRzL3JhbGV3YXkuYm9sZC53b2ZmJykgZm9ybWF0KCd3b2ZmJyksXG4gIHVybCgnZm9udHMvcmFsZXdheS5ib2xkLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKSxcbiAgdXJsKCdmb250cy9yYWxld2F5LmJvbGQuc3ZnI0NyZWF0aXZlQmxvY2tCQkJvbGQnKSBmb3JtYXQoJ3N2ZycpO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdyYWxld2F5RXh0cmFCb2xkJztcbiAgc3JjOiB1cmwoJ2ZvbnRzL3JhbGV3YXkuZXh0cmFib2xkLmVvdCcpO1xuICBzcmM6IHVybCgnZm9udHMvcmFsZXdheS5leHRyYWJvbGQuZW90PyNpZWZpeCcpIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSxcbiAgdXJsKCdmb250cy9yYWxld2F5LmV4dHJhYm9sZC53b2ZmJykgZm9ybWF0KCd3b2ZmJyksXG4gIHVybCgnZm9udHMvcmFsZXdheS5leHRyYWJvbGQudHRmJykgZm9ybWF0KCd0cnVldHlwZScpLFxuICB1cmwoJ2ZvbnRzL3JhbGV3YXkuZXh0cmFib2xkLnN2ZyNDcmVhdGl2ZUJsb2NrQkJCb2xkJykgZm9ybWF0KCdzdmcnKTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG4ucmFsZXdheVJlZ3VsYXJGb250KCkge1xuICBmb250LWZhbWlseTogcmFsZXdheVJlZ3VsYXIsIFwiaGVsdmV0aWNhIG5ldWVcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cbi5yYWxld2F5Qm9sZEZvbnQoKSB7XG4gIGZvbnQtZmFtaWx5OiByYWxld2F5Qm9sZCwgXCJoZWx2ZXRpY2EgbmV1ZVwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5yYWxld2F5RXh0cmFCb2xkRm9udCgpIHtcbiAgZm9udC1mYW1pbHk6IHJhbGV3YXlFeHRyYUJvbGQsIFwiaGVsdmV0aWNhIG5ldWVcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG4iLCJAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdyYWxld2F5UmVndWxhcic7XG4gIHNyYzogdXJsKCcuLi8uLi9hc3NldHMvZm9udHMvcmFsZXdheS5yZWd1bGFyLmVvdCcpO1xuICBzcmM6IHVybCgnLi4vLi4vYXNzZXRzL2ZvbnRzL3JhbGV3YXkucmVndWxhci5lb3Q/I2llZml4JykgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLCB1cmwoJy4uLy4uL2Fzc2V0cy9mb250cy9yYWxld2F5LnJlZ3VsYXIud29mZicpIGZvcm1hdCgnd29mZicpLCB1cmwoJy4uLy4uL2Fzc2V0cy9mb250cy9yYWxld2F5LnJlZ3VsYXIudHRmJykgZm9ybWF0KCd0cnVldHlwZScpLCB1cmwoJy4uLy4uL2Fzc2V0cy9mb250cy9yYWxld2F5LnJlZ3VsYXIuc3ZnI0NyZWF0aXZlQmxvY2tCQkJvbGQnKSBmb3JtYXQoJ3N2ZycpO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdyYWxld2F5Qm9sZCc7XG4gIHNyYzogdXJsKCcuLi8uLi9hc3NldHMvZm9udHMvcmFsZXdheS5ib2xkLmVvdCcpO1xuICBzcmM6IHVybCgnLi4vLi4vYXNzZXRzL2ZvbnRzL3JhbGV3YXkuYm9sZC5lb3Q/I2llZml4JykgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLCB1cmwoJy4uLy4uL2Fzc2V0cy9mb250cy9yYWxld2F5LmJvbGQud29mZicpIGZvcm1hdCgnd29mZicpLCB1cmwoJy4uLy4uL2Fzc2V0cy9mb250cy9yYWxld2F5LmJvbGQudHRmJykgZm9ybWF0KCd0cnVldHlwZScpLCB1cmwoJy4uLy4uL2Fzc2V0cy9mb250cy9yYWxld2F5LmJvbGQuc3ZnI0NyZWF0aXZlQmxvY2tCQkJvbGQnKSBmb3JtYXQoJ3N2ZycpO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAncmFsZXdheUV4dHJhQm9sZCc7XG4gIHNyYzogdXJsKCcuLi8uLi9hc3NldHMvZm9udHMvcmFsZXdheS5leHRyYWJvbGQuZW90Jyk7XG4gIHNyYzogdXJsKCcuLi8uLi9hc3NldHMvZm9udHMvcmFsZXdheS5leHRyYWJvbGQuZW90PyNpZWZpeCcpIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSwgdXJsKCcuLi8uLi9hc3NldHMvZm9udHMvcmFsZXdheS5leHRyYWJvbGQud29mZicpIGZvcm1hdCgnd29mZicpLCB1cmwoJy4uLy4uL2Fzc2V0cy9mb250cy9yYWxld2F5LmV4dHJhYm9sZC50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyksIHVybCgnLi4vLi4vYXNzZXRzL2ZvbnRzL3JhbGV3YXkuZXh0cmFib2xkLnN2ZyNDcmVhdGl2ZUJsb2NrQkJCb2xkJykgZm9ybWF0KCdzdmcnKTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuLmZhcS1wYWdlIHtcbiAgcGFkZGluZzogMTUwcHggMjQxcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXgtd2lkdGg6IDE0MzdweDtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTQzOXB4KSB7XG4gIC5mYXEtcGFnZSB7XG4gICAgcGFkZGluZzogMTcwcHggMTBweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuZmFxLXBhZ2Uge1xuICAgIHBhZGRpbmctdG9wOiAyMDBweDtcbiAgfVxufVxuLmZhcS1wYWdlX19iZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzNzVweDtcbiAgbGVmdDogNjIlO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDE0MzlweCkge1xuICAuZmFxLXBhZ2VfX2JnIHtcbiAgICB0b3A6IC04MHB4O1xuICAgIGxlZnQ6IDQ1JTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5mYXEtcGFnZV9fYmcge1xuICAgIHRvcDogLTE1MHB4O1xuICAgIGxlZnQ6IDE1JTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gIC5mYXEtcGFnZV9fYmcge1xuICAgIGxlZnQ6IC04JTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQwMHB4KSB7XG4gIC5mYXEtcGFnZV9fYmcge1xuICAgIGxlZnQ6IC0zMyU7XG4gIH1cbn1cbi5mYXEtcGFnZV9fYmcgaW1nIHtcbiAgd2lkdGg6IDY3M3B4O1xuICBoZWlnaHQ6IDU0OXB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDE0MzlweCkge1xuICAuZmFxLXBhZ2VfX2JnIGltZyB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmZhcS1wYWdlX19iZyBpbWcge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDczZGVnKSBzY2FsZSgwLjQpO1xuICB9XG59XG4uZmFxLXBhZ2VfX21haW4ge1xuICB6LWluZGV4OiAxO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDE0MzlweCkge1xuICAuZmFxLXBhZ2VfX21haW4ge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG4uZmFxLXBhZ2VfX21haW5faGVhZCB7XG4gIG1hcmdpbi1ib3R0b206IDYzcHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTQzOXB4KSB7XG4gIC5mYXEtcGFnZV9fbWFpbl9oZWFkIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyN3B4O1xuICB9XG59XG4uZmFxLXBhZ2VfX21haW5faGVhZC10aXRsZSB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBjb2xvcjogI0Y2RjZGNjtcbiAgZm9udC1zaXplOiAxMzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LWZhbWlseTogcmFsZXdheUV4dHJhQm9sZCwgXCJoZWx2ZXRpY2EgbmV1ZVwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxNDM5cHgpIHtcbiAgLmZhcS1wYWdlX19tYWluX2hlYWQtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogODBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5mYXEtcGFnZV9fbWFpbl9oZWFkLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gIH1cbn1cbi5mYXEtcGFnZV9fbWFpbl9oZWFkLXN1YnRpdGxlIHtcbiAgbWFyZ2luOiAycHggYXV0byAwO1xuICBjb2xvcjogIzAwMDAwMDtcbiAgZm9udC1zaXplOiAzMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtZmFtaWx5OiByYWxld2F5Qm9sZCwgXCJoZWx2ZXRpY2EgbmV1ZVwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTQzOXB4KSB7XG4gIC5mYXEtcGFnZV9fbWFpbl9oZWFkLXN1YnRpdGxlIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgfVxufVxuLmZhcS1wYWdlX19tYWluX3F1ZXN0aW9ucy1pdGVtIHtcbiAgbWF4LXdpZHRoOiA2NzBweDtcbiAgZGlzcGxheTogZmxleDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxNDM5cHgpIHtcbiAgLmZhcS1wYWdlX19tYWluX3F1ZXN0aW9ucy1pdGVtIHtcbiAgICBtYXgtd2lkdGg6IDU3MHB4O1xuICB9XG59XG4uZmFxLXBhZ2VfX21haW5fcXVlc3Rpb25zLWl0ZW1fYnRuLFxuLmZhcS1wYWdlX19tYWluX3F1ZXN0aW9ucy1pdGVtX2J0biBzdmcge1xuICB0cmFuc2l0aW9uOiAwLjNzO1xufVxuLmZhcS1wYWdlX19tYWluX3F1ZXN0aW9ucy1pdGVtX2J0biB7XG4gIG1hcmdpbjogMCAzMHB4IDQ1cHggMDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXg6IDAgMCA3MHB4O1xuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXI6IDFweCBzb2xpZCAjRTQxNTc5O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiA3MHB4O1xuICBoZWlnaHQ6IDcwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5mYXEtcGFnZV9fbWFpbl9xdWVzdGlvbnMtaXRlbV9idG4uYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgI0ZGM0Y4NCAwJSwgI0U0MTU3OSAxMDAlKTtcbiAgYm94LXNoYWRvdzogMnB4IDJweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC42KTtcbn1cbi5mYXEtcGFnZV9fbWFpbl9xdWVzdGlvbnMtaXRlbV9idG4uYWN0aXZlIHN2ZyB7XG4gIHRyYW5zZm9ybTogbWF0cml4KDAuNzEsIDAuNzEsIC0wLjcxLCAwLjcxLCAwLCAwKTtcbn1cbi5mYXEtcGFnZV9fbWFpbl9xdWVzdGlvbnMtaXRlbV9idG4uYWN0aXZlIHN2ZyBwYXRoIHtcbiAgZmlsbDogI0U1RTVFNTtcbn1cbi5mYXEtcGFnZV9fbWFpbl9xdWVzdGlvbnMtaXRlbV9idG46aG92ZXIge1xuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCAwcHggNXB4IHJnYmEoMjI4LCAyMSwgMTIxLCAwLjYpKTtcbn1cbi5mYXEtcGFnZV9fbWFpbl9xdWVzdGlvbnMtaXRlbV9idG46aG92ZXIgc3ZnIHtcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygycHggMnB4IDEwcHggIzAwMDAwMCk7XG59XG4uZmFxLXBhZ2VfX21haW5fcXVlc3Rpb25zLWl0ZW1fbW9yZS10aXRsZSxcbi5mYXEtcGFnZV9fbWFpbl9xdWVzdGlvbnMtaXRlbV9tb3JlLWRlc2NyaXB0aW9uIHtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5mYXEtcGFnZV9fbWFpbl9xdWVzdGlvbnMtaXRlbV9tb3JlLXRpdGxlIHtcbiAgbWFyZ2luLXRvcDogMjVweDtcbiAgZm9udC1mYW1pbHk6IHJhbGV3YXlCb2xkLCBcImhlbHZldGljYSBuZXVlXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5mYXEtcGFnZV9fbWFpbl9xdWVzdGlvbnMtaXRlbV9tb3JlLWRlc2NyaXB0aW9uLWl0ZW0ge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBmb250LWZhbWlseTogcmFsZXdheVJlZ3VsYXIsIFwiaGVsdmV0aWNhIG5ldWVcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG4iLCJAaW1wb3J0IHVybChcIi4uLy4uL2Fzc2V0cy9mb250cy5sZXNzXCIpO1xuXG4uZmFxLXBhZ2Uge1xuICBwYWRkaW5nOiAxNTBweCAyNDFweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1heC13aWR0aDogMTQzN3B4O1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICBAbWVkaWEgKG1heC13aWR0aDogMTQzOXB4KSB7XG4gICAgcGFkZGluZzogMTcwcHggMTBweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XG4gIH1cblxuICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICBwYWRkaW5nLXRvcDogMjAwcHg7XG4gIH1cblxuICAmX19iZyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMzc1cHg7XG4gICAgbGVmdDogNjIlO1xuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDE0MzlweCkge1xuICAgICAgdG9wOiAtODBweDtcbiAgICAgIGxlZnQ6IDQ1JTtcbiAgICB9XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICAgIHRvcDogLTE1MHB4O1xuICAgICAgbGVmdDogMTUlO1xuICAgIH1cblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xuICAgICAgbGVmdDogLTglO1xuICAgIH1cblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0MDBweCkge1xuICAgICAgbGVmdDogLTMzJTtcbiAgICB9XG5cbiAgICAmIGltZyB7XG4gICAgICB3aWR0aDogNjczcHg7XG4gICAgICBoZWlnaHQ6IDU0OXB4O1xuXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogMTQzOXB4KSB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC41KTtcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDczZGVnKSBzY2FsZSgwLjQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICZfX21haW4ge1xuICAgIHotaW5kZXg6IDE7XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogMTQzOXB4KSB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICAmX2hlYWQge1xuICAgICAgbWFyZ2luLWJvdHRvbTogNjNweDtcblxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDE0MzlweCkge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyN3B4O1xuICAgICAgfVxuXG4gICAgICAmLXRpdGxlIHtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIGNvbG9yOiAjRjZGNkY2O1xuICAgICAgICBmb250LXNpemU6IDEzMHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIC5yYWxld2F5RXh0cmFCb2xkRm9udCgpO1xuXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxNDM5cHgpIHtcbiAgICAgICAgICBmb250LXNpemU6IDgwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJi1zdWJ0aXRsZSB7XG4gICAgICAgIG1hcmdpbjogMnB4IGF1dG8gMDtcbiAgICAgICAgY29sb3I6ICMwMDAwMDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAucmFsZXdheUJvbGRGb250KCk7XG5cbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDE0MzlweCkge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgJl9xdWVzdGlvbnMtaXRlbSB7XG4gICAgICBtYXgtd2lkdGg6IDY3MHB4O1xuICAgICAgZGlzcGxheTogZmxleDtcblxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDE0MzlweCkge1xuICAgICAgICBtYXgtd2lkdGg6IDU3MHB4O1xuICAgICAgfVxuXG4gICAgICAmX2J0bixcbiAgICAgICZfYnRuIHN2ZyB7XG4gICAgICAgIHRyYW5zaXRpb246IDAuM3M7XG4gICAgICB9XG5cbiAgICAgICZfYnRuIHtcbiAgICAgICAgbWFyZ2luOiAwIDMwcHggNDVweCAwO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgZmxleDogMCAwIDcwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNFNDE1Nzk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgd2lkdGg6IDcwcHg7XG4gICAgICAgIGhlaWdodDogNzBweDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjRkYzRjg0IDAlLCAjRTQxNTc5IDEwMCUpO1xuICAgICAgICAgIGJveC1zaGFkb3c6IDJweCAycHggMTBweCByZ2JhKDAsIDAsIDAsIDAuNik7XG5cbiAgICAgICAgICAmIHN2ZyB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IG1hdHJpeCgwLjcxLCAwLjcxLCAtMC43MSwgMC43MSwgMCwgMCk7XG5cbiAgICAgICAgICAgICYgcGF0aCB7XG4gICAgICAgICAgICAgIGZpbGw6ICNFNUU1RTU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggMHB4IDVweCByZ2JhKDIyOCwgMjEsIDEyMSwgMC42KSk7XG5cbiAgICAgICAgICAmIHN2ZyB7XG4gICAgICAgICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDJweCAycHggMTBweCByZ2JhKDAsIDAsIDAsIDEpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJl9tb3JlIHtcbiAgICAgICAgJi10aXRsZSxcbiAgICAgICAgJi1kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgY29sb3I6ICMwMDAwMDA7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgJi10aXRsZSB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMjVweDtcbiAgICAgICAgICAucmFsZXdheUJvbGRGb250KCk7XG4gICAgICAgIH1cblxuICAgICAgICAmLWRlc2NyaXB0aW9uLWl0ZW0ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICAgICAgICAucmFsZXdheVJlZ3VsYXJGb250KCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('enterAnimation', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(-50%)', opacity: 0.4 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('300ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(0)', opacity: 1 }))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(0)', opacity: 1 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('300ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(-50%)', opacity: 0.4 }))
                ])
            ])
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListItemsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'list-items',
                templateUrl: './listItems.component.html',
                styleUrls: ['./listItems.component.less'],
                host: { '[class.list-items]': 'true' },
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('enterAnimation', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(-50%)', opacity: 0.4 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('300ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(0)', opacity: 1 }))
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(0)', opacity: 1 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('300ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(-50%)', opacity: 0.4 }))
                        ])
                    ])
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Front-end\Tatsiana_2020\Accordeon\Accordeon\my-app\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _listItems_listItems_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listItems/listItems.component */ "+FnW");



class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "list-items");
    } }, directives: [_listItems_listItems_component__WEBPACK_IMPORTED_MODULE_1__["ListItemsComponent"]], styles: [".list-items[_ngcontent-%COMP%] {\n  position: relative;\n  display: block;\n  background: #FFFFFF;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDovRnJvbnQtZW5kL1RhdHNpYW5hXzIwMjAvQWNjb3JkZW9uL0FjY29yZGVvbi9teS1hcHAvc3JjL2FwcC9hcHAuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGlzdC1pdGVtcyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XG59XG4iLCIubGlzdC1pdGVtcyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.less']
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _listItems_listItems_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./listItems/listItems.component */ "+FnW");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");






class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _listItems_listItems_component__WEBPACK_IMPORTED_MODULE_3__["ListItemsComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _listItems_listItems_component__WEBPACK_IMPORTED_MODULE_3__["ListItemsComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map