sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel"
], 

	function(Controller,MessageToast,JSONModel) {
	"use strict";

	return Controller.extend("Proyecto3.controller.View1", {
		
		onInit: function(){
			
				var oData = {
				recipient: {
					name : "World"
				}
			};
		
			var oModel = new JSONModel(oData);
			this.getView().setModel(oModel); //Obtener instancia de la vista
			
			// set i18n on the view
			
			// var i18nModel = new ResourceModel({ bundleName: "Proyecto3.i18n.i18n"});
			// 	this.getView().setModel(i18nModel); //Obtener instancia de la vista
		},
		
		onShowHello: function(){
				MessageToast.show("Prueba");
	}
	});
});