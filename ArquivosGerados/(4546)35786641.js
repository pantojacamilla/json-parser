    var data = {&#xD;&#xA;            bird: {&#xD;&#xA;                foot: 'claw',&#xD;&#xA;                mouth: 'beak',&#xD;&#xA;                skin: 'feathers'&#xD;&#xA;            },&#xD;&#xA;            dog: {&#xD;&#xA;                foot: 'paw',&#xD;&#xA;                mouth:'muzzle',&#xD;&#xA;                skin: 'fir'&#xD;&#xA;            }&#xD;&#xA;        },&#xD;&#xA;        html = 'A bird\'s mouth is called a {{bird.mouth}}. A dog has {{dog.skin}} where-as a bird has {{bird.skin}}.',&#xD;&#xA;        regex = /({{)(.)*(}})/igm,&#xD;&#xA;        results = html.match(regex);&#xD;&#xA;    console.log(results);