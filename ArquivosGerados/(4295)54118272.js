    $(document).ready(function() {&#xD;&#xA;        $('#registrationForm')&#xD;&#xA;            .bootstrapValidator({&#xD;&#xA;                feedbackIcons: {&#xD;&#xA;                    valid: 'glyphicon glyphicon-ok',&#xD;&#xA;                    invalid: 'glyphicon glyphicon-remove',&#xD;&#xA;                    validating: 'glyphicon glyphicon-refresh'&#xD;&#xA;                },&#xD;&#xA;                fields: {&#xD;&#xA;                    username: {&#xD;&#xA;                        validators: {&#xD;&#xA;                            notEmpty: {&#xD;&#xA;                                message: 'The username is required and cannot be empty'&#xD;&#xA;                            },&#xD;&#xA;                            stringLength: {&#xD;&#xA;                                min: 6,&#xD;&#xA;                                max: 30,&#xD;&#xA;                                message: 'The username must be more than 6 and less than 30 characters long'&#xD;&#xA;                            },&#xD;&#xA;                            regexp: {&#xD;&#xA;                                regexp: /^[a-zA-Z0-9]+$/,&#xD;&#xA;                                message: 'The username can only consist of alphabetical and digits'&#xD;&#xA;                            }&#xD;&#xA;                        }&#xD;&#xA;                    }&#xD;&#xA;                }&#xD;&#xA;            })&#xD;&#xA;            .on('error.validator.bv', function(e, data) {&#xD;&#xA;                data.element&#xD;&#xA;                    .data('bv.messages')&#xD;&#xA;                    .find('.help-block[data-bv-for="' + data.field + '"]').hide()&#xD;&#xA;                    .filter('[data-bv-validator="' + data.validator + '"]').show();&#xD;&#xA;            });&#xD;&#xA;    });