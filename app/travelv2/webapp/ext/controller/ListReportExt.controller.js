sap.ui.define([
], function () {
    //	"use strict";
    sap.ui.controller("be.wl.travelv2.ext.controller.ListReportExt", {

        onListNavigationExtension: function (oEvent) {
            let extensionAPI = this.extensionAPI;
            let navigationController = extensionAPI.getNavigationController();
            let bindingContext = oEvent.getSource().getBindingContext();
            let model = bindingContext.getModel();
            let object = bindingContext.getObject();
            let navigationProperty;
            switch (object.TravelID) {
                case 4131:
                    navigationProperty = "to_Demo(BookingUUID='36997221A8E4645C17002DF03754AB66',IsActiveEntity=true)";
                    break;
            }
            if (navigationProperty) {
                let fnNavigate = function () {
                    return new Promise(function (fnResolve, fnReject) {
                        model.createBindingContext(navigationProperty, bindingContext, {}, function (target) {
                            navigationController.navigateInternal(target);
                            fnResolve();
                        });
                    });
                };
                extensionAPI.securedExecution(fnNavigate, {
                    busy: {
                        check: false
                    },
                    dataloss: {
                        popup: false
                    }
                });

                return true;
            }
            return false;
        }

	});

});