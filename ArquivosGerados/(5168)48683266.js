    // parent structure&#xD;&#xA;    <div v-for="(item, key, index) in nluData">&#xD;&#xA;      // displaying nluData content through item.mydata // child structure&#xD;&#xA;      <div v-for="ent in entityList(item)">&#xD;&#xA;        // displaying entities data through computed prop. // item.entities is the array&#xD;&#xA;      </div>&#xD;&#xA;    </div>&#xD;&#xA;    {&#xD;&#xA;    			"id": "J4a9dGEBFtvEmO3Beq31",&#xD;&#xA;    			"text": "This is Intent 1",&#xD;&#xA;    			"intent": "shelf_life",&#xD;&#xA;    			"entities": [&#xD;&#xA;    				{&#xD;&#xA;    					"start": "33",&#xD;&#xA;    					"end": "44",&#xD;&#xA;    					"value": "fridge",&#xD;&#xA;    					"entity": "ingredient_placement"&#xD;&#xA;    				},&#xD;&#xA;    				{&#xD;&#xA;    					"start": "10",&#xD;&#xA;    					"end": "20",&#xD;&#xA;    					"value": "duration",&#xD;&#xA;    					"entity": "shelf_life"&#xD;&#xA;    				},&#xD;&#xA;    				{&#xD;&#xA;    					"start": "25",&#xD;&#xA;    					"end": "30",&#xD;&#xA;    					"value": "spareribs",&#xD;&#xA;    					"entity": "ingredient"&#xD;&#xA;    				}&#xD;&#xA;    			]&#xD;&#xA;    		},