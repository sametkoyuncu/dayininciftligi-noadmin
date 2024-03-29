$(document).ready(function(){
    
    (function($) {
        "use strict";

    
    jQuery.validator.addMethod('answercheck', function (value, element) {
        return this.optional(element) || /^\bcat\b$/.test(value)
    }, "type the correct answer -_-");

    // validate contactForm form
    $(function() {
        $('#contactForm').validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                subject: {
                    required: true,
                    minlength: 4
                },
                number: {
                    required: true,
                    minlength: 5
                },
                email: {
                    required: true,
                    email: true
                },
                message: {
                    required: true,
                    minlength: 20
                }
            },
            messages: {
                name: {
                    required: "Lütfen isminizi yazınız..",
                    minlength: "Adınız en az 2 karakterden oluşmalı.."
                },
                subject: {
                    required: "Lütfen mesajınızın konusunu yazınız..",
                    minlength: "Konunuz en az 4 karakterden oluşmalı.."
                },
                number: {
                    required: "come on, you have a number, don't you?",
                    minlength: "your Number must consist of at least 5 characters"
                },
                email: {
                    required: "Lütfen e-posta adresinizi yazınız.."
                },
                message: {
                    required: "Lütfen mesajınızı yazınız..",
                    minlength: "Mesajınız gönderilmek için çok kısa.."
                }
            }
        })
    })
        
 })(jQuery)
})