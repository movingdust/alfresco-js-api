/**
 * Alfresco Content Services REST API
 * **Search API**  Provides access to the search features of Alfresco Content Services. 
 *
 * OpenAPI spec version: 1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoContentServicesRestApi) {
      root.AlfrescoContentServicesRestApi = {};
    }
    root.AlfrescoContentServicesRestApi.RequestTemplatesInner = factory(root.AlfrescoContentServicesRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The RequestTemplatesInner model module.
   * @module model/RequestTemplatesInner
   * @version 1
   */

  /**
   * Constructs a new <code>RequestTemplatesInner</code>.
   * @alias module:model/RequestTemplatesInner
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>RequestTemplatesInner</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RequestTemplatesInner} obj Optional instance to populate.
   * @return {module:model/RequestTemplatesInner} The populated <code>RequestTemplatesInner</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('template')) {
        obj['template'] = ApiClient.convertToType(data['template'], 'String');
      }
    }
    return obj;
  }

  /**
   * The template name
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * The template
   * @member {String} template
   */
  exports.prototype['template'] = undefined;



  return exports;
}));


