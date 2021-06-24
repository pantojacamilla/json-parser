            jQuery(document).ready(function () {&#xD;&#xA;                var options = {&#xD;&#xA;                    onLoad: function () {&#xD;&#xA;                        $('#messages').text('Start typing password');&#xD;&#xA;                    },&#xD;&#xA;                    onKeyUp: function (evt) {&#xD;&#xA;                        $(evt.target).pwstrength("outputErrorList");&#xD;&#xA;                    }&#xD;&#xA;                };&#xD;&#xA;                $('#new_password').pwstrength(options);&#xD;&#xA;            });&#xD;&#xA;    (function ($) {&#xD;&#xA;        "use strict";&#xD;&#xA;        var options = {&#xD;&#xA;                errors: [],&#xD;&#xA;                // Options&#xD;&#xA;                minChar: 8,&#xD;&#xA;                errorMessages: {&#xD;&#xA;                    password_to_short: "The Password is too short",&#xD;&#xA;                    same_as_username: "Your password cannot be the same as your username"&#xD;&#xA;                },&#xD;&#xA;                scores: [17, 26, 40, 50],&#xD;&#xA;                verdicts: ["Weak", "Normal", "Medium", "Strong", "Very Strong"],&#xD;&#xA;                showVerdicts: true,&#xD;&#xA;                raisePower: 1.4,&#xD;&#xA;                usernameField: "#username",&#xD;&#xA;                onLoad: undefined,&#xD;&#xA;                onKeyUp: undefined,&#xD;&#xA;                viewports: {&#xD;&#xA;                    progress: undefined,&#xD;&#xA;                    verdict: undefined,&#xD;&#xA;                    errors: undefined&#xD;&#xA;                },&#xD;&#xA;                // Rules stuff&#xD;&#xA;                ruleScores: {&#xD;&#xA;                    wordNotEmail: -100,&#xD;&#xA;                    wordLength: -100,&#xD;&#xA;                    wordSimilarToUsername: -100,&#xD;&#xA;                    wordLowercase: 1,&#xD;&#xA;                    wordUppercase: 3,&#xD;&#xA;                    wordOneNumber: 3,&#xD;&#xA;                    wordThreeNumbers: 5,&#xD;&#xA;                    wordOneSpecialChar: 3,&#xD;&#xA;                    wordTwoSpecialChar: 5,&#xD;&#xA;                    wordUpperLowerCombo: 2,&#xD;&#xA;                    wordLetterNumberCombo: 2,&#xD;&#xA;                    wordLetterNumberCharCombo: 2&#xD;&#xA;                },&#xD;&#xA;                rules: {&#xD;&#xA;                    wordNotEmail: true,&#xD;&#xA;                    wordLength: true,&#xD;&#xA;                    wordSimilarToUsername: true,&#xD;&#xA;                    wordLowercase: true,&#xD;&#xA;                    wordUppercase: true,&#xD;&#xA;                    wordOneNumber: true,&#xD;&#xA;                    wordThreeNumbers: true,&#xD;&#xA;                    wordOneSpecialChar: true,&#xD;&#xA;                    wordTwoSpecialChar: true,&#xD;&#xA;                    wordUpperLowerCombo: true,&#xD;&#xA;                    wordLetterNumberCombo: true,&#xD;&#xA;                    wordLetterNumberCharCombo: true&#xD;&#xA;                },&#xD;&#xA;                validationRules: {&#xD;&#xA;                    wordNotEmail: function (options, word, score) {&#xD;&#xA;                        return word.match(/^([\w\!\#$\%\&\'\*\+\-\/\=\?\^\`{\|\}\~]+\.)*[\w\!\#$\%\&\'\*\+\-\/\=\?\^\`{\|\}\~]+@((((([a-z0-9]{1}[a-z0-9\-]{0,62}[a-z0-9]{1})|[a-z])\.)+[a-z]{2,6})|(\d{1,3}\.){3}\d{1,3}(\:\d{1,5})?)$/i) && score;&#xD;&#xA;                    },&#xD;&#xA;                    wordLength: function (options, word, score) {&#xD;&#xA;                        var wordlen = word.length,&#xD;&#xA;                            lenScore = Math.pow(wordlen, options.raisePower);&#xD;&#xA;                        if (wordlen < options.minChar) {&#xD;&#xA;                            lenScore = (lenScore + score);&#xD;&#xA;                            options.errors.push(options.errorMessages.password_to_short);&#xD;&#xA;                        }&#xD;&#xA;                        return lenScore;&#xD;&#xA;                    },&#xD;&#xA;                    wordSimilarToUsername: function (options, word, score) {&#xD;&#xA;                        var username = $(options.usernameField).val();&#xD;&#xA;                        if (username && word.toLowerCase().match(username.toLowerCase())) {&#xD;&#xA;                            options.errors.push(options.errorMessages.same_as_username);&#xD;&#xA;                            return score;&#xD;&#xA;                        }&#xD;&#xA;                        return true;&#xD;&#xA;                    },&#xD;&#xA;                    wordLowercase: function (options, word, score) {&#xD;&#xA;                        return word.match(/[a-z]/) && score;&#xD;&#xA;                    },&#xD;&#xA;                    wordUppercase: function (options, word, score) {&#xD;&#xA;                        return word.match(/[A-Z]/) && score;&#xD;&#xA;                    },&#xD;&#xA;                    wordOneNumber : function (options, word, score) {&#xD;&#xA;                        return word.match(/\d+/) && score;&#xD;&#xA;                    },&#xD;&#xA;                    wordThreeNumbers : function (options, word, score) {&#xD;&#xA;                        return word.match(/(.*[0-9].*[0-9].*[0-9])/) && score;&#xD;&#xA;                    },&#xD;&#xA;                    wordOneSpecialChar : function (options, word, score) {&#xD;&#xA;                        return word.match(/.[!,@,#,$,%,\^,&,*,?,_,~]/) && score;&#xD;&#xA;                    },&#xD;&#xA;                    wordTwoSpecialChar : function (options, word, score) {&#xD;&#xA;                        return word.match(/(.*[!,@,#,$,%,\^,&,*,?,_,~].*[!,@,#,$,%,\^,&,*,?,_,~])/) && score;&#xD;&#xA;                    },&#xD;&#xA;                    wordUpperLowerCombo : function (options, word, score) {&#xD;&#xA;                        return word.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/) && score;&#xD;&#xA;                    },&#xD;&#xA;                    wordLetterNumberCombo : function (options, word, score) {&#xD;&#xA;                        return word.match(/([a-zA-Z])/) && word.match(/([0-9])/) && score;&#xD;&#xA;                    },&#xD;&#xA;                    wordLetterNumberCharCombo : function (options, word, score) {&#xD;&#xA;                        return word.match(/([a-zA-Z0-9].*[!,@,#,$,%,\^,&,*,?,_,~])|([!,@,#,$,%,\^,&,*,?,_,~].*[a-zA-Z0-9])/) && score;&#xD;&#xA;                    }&#xD;&#xA;                }&#xD;&#xA;            },&#xD;&#xA;            setProgressBar = function ($el, score) {&#xD;&#xA;                var options = $el.data("pwstrength"),&#xD;&#xA;                    progressbar = options.progressbar,&#xD;&#xA;                    $verdict;&#xD;&#xA;                if (options.showVerdicts) {&#xD;&#xA;                    if (options.viewports.verdict) {&#xD;&#xA;                        $verdict = $(options.viewports.verdict).find(".password-verdict");&#xD;&#xA;                    } else {&#xD;&#xA;                        $verdict = $el.parent().find(".password-verdict");&#xD;&#xA;                        if ($verdict.length === 0) {&#xD;&#xA;                            $verdict = $('<span class="password-verdict"></span>');&#xD;&#xA;                            $verdict.insertAfter($el);&#xD;&#xA;                        }&#xD;&#xA;                    }&#xD;&#xA;                }&#xD;&#xA;                if (score < options.scores[0]) {&#xD;&#xA;                    progressbar.addClass("progress-danger").removeClass("progress-warning").removeClass("progress-success");&#xD;&#xA;                    progressbar.find(".bar").css("width", "5%");&#xD;&#xA;                    if (options.showVerdicts) {&#xD;&#xA;                        $verdict.text(options.verdicts[0]);&#xD;&#xA;                    }&#xD;&#xA;                } else if (score >= options.scores[0] && score < options.scores[1]) {&#xD;&#xA;                    progressbar.addClass("progress-danger").removeClass("progress-warning").removeClass("progress-success");&#xD;&#xA;                    progressbar.find(".bar").css("width", "25%");&#xD;&#xA;                    if (options.showVerdicts) {&#xD;&#xA;                        $verdict.text(options.verdicts[1]);&#xD;&#xA;                    }&#xD;&#xA;                } else if (score >= options.scores[1] && score < options.scores[2]) {&#xD;&#xA;                    progressbar.addClass("progress-warning").removeClass("progress-danger").removeClass("progress-success");&#xD;&#xA;                    progressbar.find(".bar").css("width", "50%");&#xD;&#xA;                    if (options.showVerdicts) {&#xD;&#xA;                        $verdict.text(options.verdicts[2]);&#xD;&#xA;                    }&#xD;&#xA;                } else if (score >= options.scores[2] && score < options.scores[3]) {&#xD;&#xA;                    progressbar.addClass("progress-warning").removeClass("progress-danger").removeClass("progress-success");&#xD;&#xA;                    progressbar.find(".bar").css("width", "75%");&#xD;&#xA;                    if (options.showVerdicts) {&#xD;&#xA;                        $verdict.text(options.verdicts[3]);&#xD;&#xA;                    }&#xD;&#xA;                } else if (score >= options.scores[3]) {&#xD;&#xA;                    progressbar.addClass("progress-success").removeClass("progress-warning").removeClass("progress-danger");&#xD;&#xA;                    progressbar.find(".bar").css("width", "100%");&#xD;&#xA;                    if (options.showVerdicts) {&#xD;&#xA;                        $verdict.text(options.verdicts[4]);&#xD;&#xA;                    }&#xD;&#xA;                }&#xD;&#xA;            },&#xD;&#xA;            calculateScore = function ($el) {&#xD;&#xA;                var self = this,&#xD;&#xA;                    word = $el.val(),&#xD;&#xA;                    totalScore = 0,&#xD;&#xA;                    options = $el.data("pwstrength");&#xD;&#xA;                $.each(options.rules, function (rule, active) {&#xD;&#xA;                    if (active === true) {&#xD;&#xA;                        var score = options.ruleScores[rule],&#xD;&#xA;                            result = options.validationRules[rule](options, word, score);&#xD;&#xA;                        if (result) {&#xD;&#xA;                            totalScore += result;&#xD;&#xA;                        }&#xD;&#xA;                    }&#xD;&#xA;                });&#xD;&#xA;                setProgressBar($el, totalScore);&#xD;&#xA;                return totalScore;&#xD;&#xA;            },&#xD;&#xA;            progressWidget = function () {&#xD;&#xA;                return '<div class="progress"><div class="bar"></div></div>';&#xD;&#xA;            },&#xD;&#xA;            methods = {&#xD;&#xA;                init: function (settings) {&#xD;&#xA;                    var self = this,&#xD;&#xA;                        allOptions = $.extend(options, settings);&#xD;&#xA;                    return this.each(function (idx, el) {&#xD;&#xA;                        var $el = $(el),&#xD;&#xA;                            progressbar,&#xD;&#xA;                            verdict;&#xD;&#xA;                        $el.data("pwstrength", allOptions);&#xD;&#xA;                        $el.on("keyup", function (event) {&#xD;&#xA;                            var options = $el.data("pwstrength");&#xD;&#xA;                            options.errors = [];&#xD;&#xA;                            calculateScore.call(self, $el);&#xD;&#xA;                            if ($.isFunction(options.onKeyUp)) {&#xD;&#xA;                                options.onKeyUp(event);&#xD;&#xA;                            }&#xD;&#xA;                        });&#xD;&#xA;                        progressbar = $(progressWidget());&#xD;&#xA;                        if (allOptions.viewports.progress) {&#xD;&#xA;                            $(allOptions.viewports.progress).append(progressbar);&#xD;&#xA;                        } else {&#xD;&#xA;                            progressbar.insertAfter($el);&#xD;&#xA;                        }&#xD;&#xA;                        progressbar.find(".bar").css("width", "0%");&#xD;&#xA;                        $el.data("pwstrength").progressbar = progressbar;&#xD;&#xA;                        if (allOptions.showVerdicts) {&#xD;&#xA;                            verdict = $('<span class="password-verdict">' + allOptions.verdicts[0] + '</span>');&#xD;&#xA;                            if (allOptions.viewports.verdict) {&#xD;&#xA;                                $(allOptions.viewports.verdict).append(verdict);&#xD;&#xA;                            } else {&#xD;&#xA;                                verdict.insertAfter($el);&#xD;&#xA;                            }&#xD;&#xA;                        }&#xD;&#xA;                        if ($.isFunction(allOptions.onLoad)) {&#xD;&#xA;                            allOptions.onLoad();&#xD;&#xA;                        }&#xD;&#xA;                    });&#xD;&#xA;                },&#xD;&#xA;                destroy: function () {&#xD;&#xA;                    this.each(function (idx, el) {&#xD;&#xA;                        var $el = $(el);&#xD;&#xA;                        $el.parent().find("span.password-verdict").remove();&#xD;&#xA;                        $el.parent().find("div.progress").remove();&#xD;&#xA;                        $el.parent().find("ul.error-list").remove();&#xD;&#xA;                        $el.removeData("pwstrength");&#xD;&#xA;                    });&#xD;&#xA;                },&#xD;&#xA;                forceUpdate: function () {&#xD;&#xA;                    var self = this;&#xD;&#xA;                    this.each(function (idx, el) {&#xD;&#xA;                        var $el = $(el),&#xD;&#xA;                            options = $el.data("pwstrength");&#xD;&#xA;                        options.errors = [];&#xD;&#xA;                        calculateScore.call(self, $el);&#xD;&#xA;                    });&#xD;&#xA;                },&#xD;&#xA;                outputErrorList: function () {&#xD;&#xA;                    this.each(function (idx, el) {&#xD;&#xA;                        var output = '<ul class="error-list">',&#xD;&#xA;                            $el = $(el),&#xD;&#xA;                            errors = $el.data("pwstrength").errors,&#xD;&#xA;                            viewports = $el.data("pwstrength").viewports,&#xD;&#xA;                            verdict;&#xD;&#xA;                        $el.parent().find("ul.error-list").remove();&#xD;&#xA;                        if (errors.length > 0) {&#xD;&#xA;                            $.each(errors, function (i, item) {&#xD;&#xA;                                output += '<li>' + item + '</li>';&#xD;&#xA;                            });&#xD;&#xA;                            output += '</ul>';&#xD;&#xA;                            if (viewports.errors) {&#xD;&#xA;                                $(viewports.errors).html(output);&#xD;&#xA;                            } else {&#xD;&#xA;                                output = $(output);&#xD;&#xA;                                verdict = $el.parent().find("span.password-verdict");&#xD;&#xA;                                if (verdict.length > 0) {&#xD;&#xA;                                    el = verdict;&#xD;&#xA;                                }&#xD;&#xA;                                output.insertAfter(el);&#xD;&#xA;                            }&#xD;&#xA;                        }&#xD;&#xA;                    });&#xD;&#xA;                },&#xD;&#xA;                addRule: function (name, method, score, active) {&#xD;&#xA;                    this.each(function (idx, el) {&#xD;&#xA;                        var options = $(el).data("pwstrength");&#xD;&#xA;                        options.rules[name] = active;&#xD;&#xA;                        options.ruleScores[name] = score;&#xD;&#xA;                        options.validationRules[name] = method;&#xD;&#xA;                    });&#xD;&#xA;                },&#xD;&#xA;                changeScore: function (rule, score) {&#xD;&#xA;                    this.each(function (idx, el) {&#xD;&#xA;                        $(el).data("pwstrength").ruleScores[rule] = score;&#xD;&#xA;                    });&#xD;&#xA;                },&#xD;&#xA;                ruleActive: function (rule, active) {&#xD;&#xA;                    this.each(function (idx, el) {&#xD;&#xA;                        $(el).data("pwstrength").rules[rule] = active;&#xD;&#xA;                    });&#xD;&#xA;                }&#xD;&#xA;            };&#xD;&#xA;        $.fn.pwstrength = function (method) {&#xD;&#xA;            var result;&#xD;&#xA;            if (methods[method]) {&#xD;&#xA;                result = methods[method].apply(this, Array.prototype.slice.call(arguments, 1));&#xD;&#xA;            } else if (typeof method === "object" || !method) {&#xD;&#xA;                result = methods.init.apply(this, arguments);&#xD;&#xA;            } else {&#xD;&#xA;                $.error("Method " +  method + " does not exist on jQuery.pwstrength");&#xD;&#xA;            }&#xD;&#xA;            return result;&#xD;&#xA;        };&#xD;&#xA;    }(jQuery));