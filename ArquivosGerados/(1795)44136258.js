    {&#xD;&#xA;      "data": {&#xD;&#xA;        "id": "31",&#xD;&#xA;        "type": "countries",&#xD;&#xA;        "attributes": {&#xD;&#xA;          "description": null&#xD;&#xA;        },&#xD;&#xA;        "relationships": {&#xD;&#xA;          "country-categories": {&#xD;&#xA;            "links": {&#xD;&#xA;              "self": "http://api.localhost.local:3000/api/v1/countries/31/relationships/country-categories",&#xD;&#xA;              "related": "http://api.localhost.local:3000/api/v1/countries/31/country-categories"&#xD;&#xA;            },&#xD;&#xA;            "data": [&#xD;&#xA;              {&#xD;&#xA;                "type": "country-categories",&#xD;&#xA;                "id": "129"&#xD;&#xA;              },&#xD;&#xA;              {&#xD;&#xA;                "type": "country-categories",&#xD;&#xA;                "id": "130"&#xD;&#xA;              }&#xD;&#xA;            ]&#xD;&#xA;          },&#xD;&#xA;        }&#xD;&#xA;      },&#xD;&#xA;      "included": [&#xD;&#xA;        {&#xD;&#xA;          "id": "129",&#xD;&#xA;          "type": "country-categories",&#xD;&#xA;          "attributes": {&#xD;&#xA;            "stuff": "aaa"&#xD;&#xA;          },&#xD;&#xA;          "relationships": {&#xD;&#xA;            "country-subcategories": {&#xD;&#xA;              "links": {&#xD;&#xA;                "self": "http://api.localhost.local:3000/api/v1/country-categories/129/relationships/country-subcategories",&#xD;&#xA;                "related": "http://api.localhost.local:3000/api/v1/country-categories/129/country-subcategories"&#xD;&#xA;              }&#xD;&#xA;            },&#xD;&#xA;            "category": {&#xD;&#xA;              "links": {&#xD;&#xA;                "self": "http://api.localhost.local:3000/api/v1/country-categories/129/relationships/category",&#xD;&#xA;                "related": "http://api.localhost.local:3000/api/v1/country-categories/129/category"&#xD;&#xA;              },&#xD;&#xA;              "data": {&#xD;&#xA;                "type": "categories",&#xD;&#xA;                "id": "1"&#xD;&#xA;              }&#xD;&#xA;            }&#xD;&#xA;          }&#xD;&#xA;        },&#xD;&#xA;        {&#xD;&#xA;          "id": "130",&#xD;&#xA;          "type": "country-categories",&#xD;&#xA;          "attributes": {&#xD;&#xA;            "stuff": "sfasf"&#xD;&#xA;          },&#xD;&#xA;          "relationships": {&#xD;&#xA;            "country-subcategories": {&#xD;&#xA;              "links": {&#xD;&#xA;                "self": "http://api.localhost.local:3000/api/v1/country-categories/130/relationships/country-subcategories",&#xD;&#xA;                "related": "http://api.localhost.local:3000/api/v1/country-categories/130/country-subcategories"&#xD;&#xA;              }&#xD;&#xA;            },&#xD;&#xA;            "category": {&#xD;&#xA;              "links": {&#xD;&#xA;                "self": "http://api.localhost.local:3000/api/v1/country-categories/130/relationships/category",&#xD;&#xA;                "related": "http://api.localhost.local:3000/api/v1/country-categories/130/category"&#xD;&#xA;              },&#xD;&#xA;              "data": {&#xD;&#xA;                "type": "categories",&#xD;&#xA;                "id": "3"&#xD;&#xA;              }&#xD;&#xA;            }&#xD;&#xA;          }&#xD;&#xA;        },&#xD;&#xA;        {&#xD;&#xA;          "id": "1",&#xD;&#xA;          "type": "categories",&#xD;&#xA;          "links": {&#xD;&#xA;            "self": "http://api.localhost.local:3000/api/v1/categories/1"&#xD;&#xA;          },&#xD;&#xA;          "attributes": {&#xD;&#xA;            "name": "Value extraction"&#xD;&#xA;          },&#xD;&#xA;          "relationships": {&#xD;&#xA;            "subcategories": {&#xD;&#xA;              "links": {&#xD;&#xA;                "self": "http://api.localhost.local:3000/api/v1/categories/1/relationships/subcategories",&#xD;&#xA;                "related": "http://api.localhost.local:3000/api/v1/categories/1/subcategories"&#xD;&#xA;              }&#xD;&#xA;            }&#xD;&#xA;          }&#xD;&#xA;        },&#xD;&#xA;        {&#xD;&#xA;          "id": "3",&#xD;&#xA;          "type": "categories",&#xD;&#xA;          "links": {&#xD;&#xA;            "self": "http://api.localhost.local:3000/api/v1/categories/3"&#xD;&#xA;          },&#xD;&#xA;          "attributes": {&#xD;&#xA;            "name": "Enabling environment"&#xD;&#xA;          },&#xD;&#xA;          "relationships": {&#xD;&#xA;            "subcategories": {&#xD;&#xA;              "links": {&#xD;&#xA;                "self": "http://api.localhost.local:3000/api/v1/categories/3/relationships/subcategories",&#xD;&#xA;                "related": "http://api.localhost.local:3000/api/v1/categories/3/subcategories"&#xD;&#xA;              }&#xD;&#xA;            }&#xD;&#xA;          }&#xD;&#xA;        }&#xD;&#xA;      ]&#xD;&#xA;    }