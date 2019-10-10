jQuery.prototype.html = function() {
    this.each(element => element.html())
    return this;
}