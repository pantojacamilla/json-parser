         public async Task<List<Documents>> GetDocument(string ownerId, string dependentId)&#xD;&#xA;            {&#xD;&#xA;                var query = from employee in _employee.AsQueryable()&#xD;&#xA;                            where employee.ownerId == ownerId&#xD;&#xA;                            select new Employee()&#xD;&#xA;                            {&#xD;&#xA;                               DependentsDocuments  = employee.DependentsDocuments.Where(x => x.dependentId == dependentId)                            &#xD;&#xA;                            };               &#xD;&#xA;                return query.ToList();&#xD;&#xA;            }