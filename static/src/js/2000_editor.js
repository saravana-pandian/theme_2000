odoo.define('theme_2000.s_testimonial_options', function (require) {
    var options = require('web_editor.snippets.options');
    options.registry.s_testimonial_options = options.Class.extend({
        onFocus: function () {
            alert("On focus!")
        },
    });
});