    jQuery(document).ready(function(){&#xD;&#xA;                   $('#sideNavBox li.static:contains("Documents")').remove();&#xD;&#xA;                   $('#sideNavBox li.static:contains("Site Contents")').remove();&#xD;&#xA;                   &#xD;&#xA;        $('#sideNavBox .menu-item-text:contains("Process Insight")').each(function() {&#xD;&#xA;                   $(this).replaceWith('<div class="header">Process Insight</div>');&#xD;&#xA;                   });&#xD;&#xA;                   &#xD;&#xA;                   &#xD;&#xA;                   $('#sideNavBox .menu-item-text:contains("Controls")').each(function() {&#xD;&#xA;                                  $(this).addClass("button");&#xD;&#xA;                                  $(this).addClass("processinsight");&#xD;&#xA;                                  $(this).addClass("controlframework");&#xD;&#xA;                   });&#xD;&#xA;                   &#xD;&#xA;                   $('#sideNavBox .menu-item-text:contains("PEvidences")').each(function() {&#xD;&#xA;                                  $(this).replaceWith('<span class="button processinsight evidence               ">Evidences</span>');&#xD;&#xA;                   });&#xD;&#xA;                   $('#sideNavBox .menu-item-text:contains("PIssueLog")').each(function() {&#xD;&#xA;                                  $(this).replaceWith('<span class="button processinsight issuelog">Issue Log</span>');&#xD;&#xA;                   });&#xD;&#xA;                   $('#sideNavBox .menu-item-text:contains("PDashboard")').each(function() {&#xD;&#xA;                                  $(this).replaceWith('<span class="button processinsight dashboard">Dashboard</span>');&#xD;&#xA;                   });&#xD;&#xA;                   &#xD;&#xA;                   &#xD;&#xA;      &#xD;&#xA;    })