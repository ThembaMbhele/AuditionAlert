var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Cordova, IonicNativePlugin, Plugin } from '@ionic-native/core';
;
/**
 * @name iOS File Picker
 * @description
 *
 * Opens the file picker on iOS for the user to select a file, returns a file URI.
 *
 * @usage
 * ```typescript
 * import { IOSFilePicker } from '@ionic-native/file-picker';
 *
 * constructor(private filePicker: IOSFilePicker) { }
 *
 * ...
 *
 * this.filePicker.pickFile()
 *   .then(uri => console.log(uri))
 *   .catch(err => console.log('Error', err));
 *
 * ```
 * @interfaces
 * IOSFilePickerPosition
 */
var IOSFilePicker = (function (_super) {
    __extends(IOSFilePicker, _super);
    function IOSFilePicker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Open a file
     * @params {string | string[]} [utis]
     * @params {IOSFilePickerPosition} [position] Set the position of the rectangle where the file picker should show up.
     * @returns {Promise<string>}
     */
    IOSFilePicker.prototype.pickFile = function (utis, position) {
        return;
    };
    IOSFilePicker.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    IOSFilePicker.ctorParameters = function () { return []; };
    __decorate([
        Cordova({
            callbackOrder: 'reverse'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", Promise)
    ], IOSFilePicker.prototype, "pickFile", null);
    IOSFilePicker = __decorate([
        Plugin({
            pluginName: 'iOS File Picker',
            plugin: 'cordova-plugin-filepicker',
            pluginRef: 'FilePicker',
            repo: 'https://github.com/jcesarmobile/FilePicker-Phonegap-iOS-Plugin',
            platforms: ['iOS']
        })
    ], IOSFilePicker);
    return IOSFilePicker;
}(IonicNativePlugin));
export { IOSFilePicker };
//# sourceMappingURL=index.js.map