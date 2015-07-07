'use strict';

String.prototype.capitalize = function(normalise) {
    return (normalise ? this.toLowerCase() : this).replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
};

String.prototype.contains = function(string) {
    return this.indexOf(string) > -1;
};

String.prototype.isEmail = function()
{
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(this);
},

String.prototype.removeFileExtension = function()
{
    var re = /(.*)\.[^.]+$/;
    return re.test(this);
}

String.prototype.capitalizeEachWord = function()
{
    return this.replace(/\w\S*/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}