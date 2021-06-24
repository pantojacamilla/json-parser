    jQuery(document).ready(function($) {&#xD;&#xA;      $(".search-display-block").each(function() {&#xD;&#xA;        var details = $(this).find(".portfolio-dropzone-details");&#xD;&#xA;        var portfolioPath = details.data("portfolio-path");&#xD;&#xA;        $(this).dropzone({&#xD;&#xA;          url: "/project/upload",&#xD;&#xA;          uploadMultiple: true,&#xD;&#xA;          parallelUploads: 20,&#xD;&#xA;          autoProcessQueue: true,&#xD;&#xA;          createImageThumbnails: false,&#xD;&#xA;          previewsContainer: "#template-preview",&#xD;&#xA;          maxFilesize: 4000,&#xD;&#xA;          timeout: 0,&#xD;&#xA;          webkitDirectory: true,&#xD;&#xA;          params: {&#xD;&#xA;            'projectPath': portfolioPath&#xD;&#xA;          },&#xD;&#xA;          success: function(file, response) {&#xD;&#xA;            console.dir(response);&#xD;&#xA;            if (response == null || response.statusCode != 200) {&#xD;&#xA;              //console.log("Error occurred uploading file");&#xD;&#xA;              var errorMessage = (response == undefined || response.message == undefined) ? "Error occurred uploading file " : response.message;&#xD;&#xA;              $("#dropzone-error-messsage-block").append("<span>" + errorMessage + "</span>");&#xD;&#xA;            } else {&#xD;&#xA;              console.log("Succesfully uploaded file ");&#xD;&#xA;              //console.dir(file);&#xD;&#xA;            }&#xD;&#xA;          },&#xD;&#xA;          uploadprogress: function(file, progress, bytesSent) {&#xD;&#xA;            var percent = round(progress, 2);&#xD;&#xA;            var progressParent = $(file.previewElement).find(".dz-progress");&#xD;&#xA;            var progressElement = $(file.previewElement).find(".dz-upload");&#xD;&#xA;            progressElement.html(percent + "%");&#xD;&#xA;            var size = progressParent.width() * (percent / 100);&#xD;&#xA;            progressElement.width(size + "px");&#xD;&#xA;          },&#xD;&#xA;          //Called just before each file is sent&#xD;&#xA;          sending: function(file, xhr, formData) {&#xD;&#xA;            //Execute on case of timeout only&#xD;&#xA;            xhr.ontimeout = function(e) {&#xD;&#xA;              var errorMessage = "The server timed out transfering file " + file.name + ". Please try again or contact your administrator.";&#xD;&#xA;              $("#dropzone-error-messsage-block").append("<span>" + errorMessage + "</span>");&#xD;&#xA;            };&#xD;&#xA;          }&#xD;&#xA;        });&#xD;&#xA;      });&#xD;&#xA;    });