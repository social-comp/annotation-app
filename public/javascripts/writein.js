jQuery_1_5_2.fn.serializeObject = function()
{
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};

jQuery_1_5_2(function() {
    $('form').submit(function() {
       return $('#result').text(JSON.stringify($('form').serializeObject()));
    return false;
    });
});