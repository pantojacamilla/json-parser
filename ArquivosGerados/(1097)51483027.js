    const theServices = &#xD;&#xA;          ["Accounting", "Big Data", "Business", "Category", "Concept", "Consultant", "Consumer", "Corporate", "Cost", "Customer", "Development", "Digital", "Distribution", "Due Diligence", "Financial", "Global Sourcing", "Go-to-market", "Growth", "Improvement", "Information", "Technology", "Innovation", "Lean", "Management", "Manufacturing", "Marketing", "Merchandising", "Mergers & Acquisitions", "Operations", "Organization / Organizational", "Performance", "Portfolio", "Post-merger", "Pricing", "Procurement", "Product", "Profitability", "Purchasing", "Restructuring", "Retail", "Revenue", "Sales", "Strategy", "Supply Chain", "Sustainable", "Technology", "Transformation", "Turnaround", "Zero-based", "Budgeting"];&#xD;&#xA;    theServices.forEach(function(element) {&#xD;&#xA;        let formName = element;&#xD;&#xA;        formName = formName.replace(/[^A-Za-z0-9]/g, '_').toLowerCase();&#xD;&#xA;    console.log( `&#xD;&#xA;    <div><input type="checkbox" id="${formName}" name="cpg_services" value="${formName}" />&#xD;&#xA;    <label for="${formName}">${element}&#xD;&#xA;    </label>&#xD;&#xA;    </div>&#xD;&#xA;    `)&#xD;&#xA;    });