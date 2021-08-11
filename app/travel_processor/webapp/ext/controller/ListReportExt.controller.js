sap.ui.define([
], function () {
    //	"use strict";
    sap.ui.controller("sap.fe.cap.travel.ext.controller.ListReportExt", {

        onListNavigationExtension: function (oEvent) {
            var oBindingContext = oEvent.getSource().getBindingContext();
            var oObject = oBindingContext.getObject();
            var sNavigationProperty;
            switch (oObject.Column3) {
                case "100":
                    sNavigationProperty = "to_Booking";
                    break;
            }
            if (sNavigationProperty) {
                var oExtensionAPI = this.extensionAPI;
                var fnNavigate = function () {
                    return new Promise(function (fnResolve, fnReject) {
                        var oModel = oBindingContext.getModel();
                        var oTarget;
                        oModel.createBindingContext(sNavigationProperty, oBindingContext, {}, function (oTarget) {
                            var oNavigationController = oExtensionAPI.getNavigationController();
                            oNavigationController.navigateInternal(oTarget);
                            fnResolve();
                        });
                    });
                };
                oExtensionAPI.securedExecution(fnNavigate, {
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
    }

	});

});