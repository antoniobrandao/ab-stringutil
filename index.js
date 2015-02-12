'use strict';

module.exports = {

    isEmail: function(string)
    {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    	return re.test(string);
    },

    removeFileExtension: function(string)
    {
        var re = /(.*)\.[^.]+$/;
    	return re.test(string);
    }
}
