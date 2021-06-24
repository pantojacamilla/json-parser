    @IBAction func FilterHSClassesByPeriod(sender: UISegmentedControl) {&#xD;&#xA;            let classSelected: String?&#xD;&#xA;            &#xD;&#xA;            if sender.selectedSegmentIndex == 0 {&#xD;&#xA;                classSelected = "Period 1"&#xD;&#xA;            }else {&#xD;&#xA;                classSelected = "My Schedule"&#xD;&#xA;            }        &#xD;&#xA;          &#xD;&#xA;            let filterPredicate = NSPredicate(format: "classSelected = %@", classSelected!)&#xD;&#xA;            var request: NSFetchRequest = self.fetchedResultsController.fetchRequest&#xD;&#xA;            &#xD;&#xA;            request.predicate = filterPredicate        &#xD;&#xA;          &#xD;&#xA;            var e: NSError? = nil&#xD;&#xA;            &#xD;&#xA;            self.fetchedResultsController.performFetch(&e)        &#xD;&#xA;           &#xD;&#xA;            self.tableView.reloadData()&#xD;&#xA;            &#xD;&#xA;        }