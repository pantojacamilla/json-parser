    models.Post.create({&#xD;&#xA;      title: 'test',&#xD;&#xA;      tags: [{&#xD;&#xA;        name: 'tag1'&#xD;&#xA;      }]&#xD;&#xA;    }, {&#xD;&#xA;      include: [{&#xD;&#xA;        model: models.Tag,&#xD;&#xA;        as: 'tags',&#xD;&#xA;        through: {&#xD;&#xA;          model: models.ItemTag,&#xD;&#xA;          scope: {&#xD;&#xA;            taggable: 'post'&#xD;&#xA;          }&#xD;&#xA;        }&#xD;&#xA;      }]&#xD;&#xA;    });