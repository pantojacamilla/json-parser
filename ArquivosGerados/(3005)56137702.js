    fetch("{{{LINK TO API}}}", {&#xD;&#xA;        headers: {&#xD;&#xA;            "Accept": "application/json",&#xD;&#xA;            "Content-Type": "application/json"&#xD;&#xA;        }&#xD;&#xA;    })&#xD;&#xA;        .then(resp => resp.json())&#xD;&#xA;        .then(function(json) {&#xD;&#xA;            // SET VARIABLES&#xD;&#xA;            var seller = json.sellers[Math.floor(Math.random() * Math.floor(json.sellers.length))];&#xD;&#xA;            &#xD;&#xA;            // INSERT COMPANY LOGO&#xD;&#xA;            companyLogo.src = json.logo_url;&#xD;&#xA;            // INSERT SELLER PROFILES&#xD;&#xA;            document.querySelectorAll("[data-seller-profile]").forEach(wrapper => {&#xD;&#xA;                var innerHTML = "";&#xD;&#xA;                innerHTML += "<img class='hbba-profile-img' src='" + seller.profile_image + "'>";&#xD;&#xA;                innerHTML += "<div class='hbba-desc-wrapper'>";&#xD;&#xA;                innerHTML += "<span class='hbba-desc-name'>" + seller.name + "</span>";&#xD;&#xA;                innerHTML += "<span class='hbba-desc-title'>" + seller.job_title + "</span>";&#xD;&#xA;                innerHTML += "</div>";&#xD;&#xA;                innerHTML += "<div class='hbba-is-active'></div>";&#xD;&#xA;                wrapper.innerHTML = innerHTML;&#xD;&#xA;            });&#xD;&#xA;        });