    let insightAverageThroughput = [{&#xD;&#xA;        "insight": "wahahahah",&#xD;&#xA;        "reportMonth": "June 2018",&#xD;&#xA;        "project": "Cambridge Core Dashboard"&#xD;&#xA;      },&#xD;&#xA;      {&#xD;&#xA;        "insight": "aaaaaaa",&#xD;&#xA;        "reportMonth": "February 2018",&#xD;&#xA;        "project": "coreadmin"&#xD;&#xA;      }&#xD;&#xA;    ];&#xD;&#xA;    function filterInsights(data, month, project) {&#xD;&#xA;      let grouped = _.groupBy(data, z => z.project == project)&#xD;&#xA;      console.log(month)&#xD;&#xA;      console.log(project)&#xD;&#xA;      console.log(grouped)&#xD;&#xA;      let filtered = _.filter(grouped[project], x => x.reportMonth == month)&#xD;&#xA;      console.log(filter)&#xD;&#xA;      return filtered.length > 0 && filtered[0].insight;&#xD;&#xA;    }