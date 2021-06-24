 db.Projects.aggregate([   {$match:{"_id":{"$in":arrayOfIds}}},&#xD;&#xA;    {$unwind:"$installer_id"},&#xD;&#xA;    {"$lookup":{from:'Users',localField:'installer_id.installer_id',foreignField:'_id',as:'installer_id'}},&#xD;&#xA;{$unwind:"$installer_id"},&#xD;&#xA;{$group:{_id:"$_id","organization_Id":{$first:"$organization_Id"},"project_name":{$first:"$project_name"},"project_description":{$first:"project_description"},"time_stamp":{$first:"$time_stamp"},"project_logo":{$first:"$project_logo"},"projectIsActive":{$first:"$projectIsActive"},installer_id:{"$push":"$installer_id"}}},&#xD;&#xA;                                     {$project:{"_id":1,"organization_Id":1,"project_name":1,"project_description":1,"time_stamp":1,"project_logo":1,"projectIsActive":1,"installer_id._id":1,"installer_id.installer_first_name":1,"installer_id.installer_last_name":1,"installer_id.emailId":1}},                                  &#xD;&#xA; {$unwind:"$installer_id"},&#xD;&#xA; {"$lookup":{from:'Assignments',localField:'installer_id._id',foreignField:'installer_id',as:'installer_id.assignments1'}},&#xD;&#xA; {$unwind:"$installer_id.assignments1"},&#xD;&#xA;{$group:{_id:"$_id","organization_Id":{$first:"$organization_Id"},"project_name":{$first:"$project_name"},"project_description":{$first:"project_description"},"time_stamp":{$first:"$time_stamp"},"project_logo":{$first:"$project_logo"},"projectIsActive":{$first:"$projectIsActive"},installer_id:{"$push":"$installer_id"}}}]).pretty()&#xD;&#xA;                                    