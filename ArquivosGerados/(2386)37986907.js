        this.userData.getSocialLinks(this.navParams.get('image_owner_id')).then(socialLinks => {&#xD;&#xA;          var i = 0;&#xD;&#xA;          for (i=0; i < socialLinks.count; i++) {&#xD;&#xA;            if (socialLinks.results[i].social_type == 'TW') {&#xD;&#xA;              this.profile.twitter = socialLinks.results[i].social_address;&#xD;&#xA;              this.isExistingTW = true;&#xD;&#xA;              this.twEntryID = socialLinks.results[i].id;&#xD;&#xA;            }&#xD;&#xA;            else if (socialLinks.results[i].social_type == 'IN') {&#xD;&#xA;              this.profile.instagram = socialLinks.results[i].social_address;&#xD;&#xA;              this.isExistingIN = true;&#xD;&#xA;              this.inEntryID = socialLinks.results[i].id;&#xD;&#xA;            }&#xD;&#xA;          }&#xD;&#xA;        });