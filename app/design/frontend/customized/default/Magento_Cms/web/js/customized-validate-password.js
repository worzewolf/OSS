define(
    [
        'jquery',
        'jquery/ui',
        'jquery/validate',
        'mage/translate'
    ],
    function ($) {
        "use strict";

        return function () {
            $.validator.addMethod(
                'customized-validate-password',
                function (value, elm) {
                    var passwordMinLength = $(elm).data('password-min-length'),
                        pass = $.trim(value),
                        result = pass.length >= passwordMinLength;

                    return $.mage.isEmptyNoTrim(value) || result;
                },
                $.mage.__('Your password is too weak')
            );
        }
    });
