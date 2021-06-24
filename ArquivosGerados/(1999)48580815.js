    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>&#xD;&#xA;    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet"/>&#xD;&#xA;    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>&#xD;&#xA;    <ul class="nav nav-pills nav_content">&#xD;&#xA;                  <li class="active"><a data-toggle="pill" href="#admission">Admission Details</a></li>&#xD;&#xA;                  <li><a data-toggle="pill" href="#personal">Personal Details</a></li>&#xD;&#xA;                  <li><a data-toggle="pill" href="#family">Family Details</a></li>&#xD;&#xA;                </ul>&#xD;&#xA;                &#xD;&#xA;                 <form id="form1" action="<?php echo site_url('student/create') ?>"  id="employeeform" name="employeeform" method="post" accept-charset="utf-8" enctype="multipart/form-data">&#xD;&#xA;        <div class="tab-content">&#xD;&#xA;          <div id="admission" class="tab-pane fade in active">&#xD;&#xA;            <div class="row">&#xD;&#xA;              <div class="col-md-3">&#xD;&#xA;                <div class="form-group">&#xD;&#xA;                  <label for="exampleInputEmail1">Admission Number *</label>&#xD;&#xA;                  <input id="admission_no" name="admission_no" placeholder="" type="text" class="form-control"  value="admission_no" />&#xD;&#xA;                </div>&#xD;&#xA;              </div>&#xD;&#xA;              <div class="col-md-3">&#xD;&#xA;                <div class="form-group">&#xD;&#xA;                  <label for="exampleInputEmail1">Application Number  *</label>&#xD;&#xA;                  <input id="application_no" name="application_no" placeholder="" type="text" class="form-control"  value="application_no" />&#xD;&#xA;                </div>&#xD;&#xA;              </div>&#xD;&#xA;              <div class="col-md-3">&#xD;&#xA;                <div class="form-group">&#xD;&#xA;                  <label for="exampleInputEmail1">Academic Year  *</label>&#xD;&#xA;                  <input id="academic_year" name="academic_year" placeholder="" type="text" class="form-control"  value="academic_year" />&#xD;&#xA;                </div>&#xD;&#xA;              </div>&#xD;&#xA;            </div>&#xD;&#xA;            <a class="btn btn-primary btnNext pull-right" id="validateFirst">Next</a>&#xD;&#xA;          </div>&#xD;&#xA;          <div id="personal" class="tab-pane fade">&#xD;&#xA;            <div class="row">&#xD;&#xA;              <div class="col-md-3">&#xD;&#xA;                <div class="form-group">&#xD;&#xA;                  <label for="exampleInputEmail1">First Name *</label>&#xD;&#xA;                  <input id="firstname" name="firstname" placeholder="" type="text" class="form-control"  value="firstname" />&#xD;&#xA;                </div>&#xD;&#xA;              </div>&#xD;&#xA;              <div class="col-md-3">&#xD;&#xA;                <div class="form-group">&#xD;&#xA;                  <label for="exampleInputEmail1">DOB *</label>&#xD;&#xA;                  <input id="dob" name="dob" placeholder="" type="text" class="form-control"  value="DOB" readonly="readonly"/>&#xD;&#xA;                </div>&#xD;&#xA;              </div>&#xD;&#xA;              <div class="col-md-3">&#xD;&#xA;                <div class="form-group">&#xD;&#xA;                  <label for="exampleInputFile">Address  *</label>&#xD;&#xA;                  <textarea id="student_address" name="student_address" placeholder="" class="form-control" rows="2"></textarea>&#xD;&#xA;                </div>&#xD;&#xA;              </div>&#xD;&#xA;            </div>&#xD;&#xA;            <a class="btn btn-primary btnPrevious pull-left">Previous</a>&#xD;&#xA;            <a class="btn btn-primary btnNext pull-right">Next</a>&#xD;&#xA;          </div>&#xD;&#xA;          <div id="family" class="tab-pane fade">&#xD;&#xA;            <div class="row">&#xD;&#xA;              <div class="col-md-3">&#xD;&#xA;                <div class="form-group">&#xD;&#xA;                  <label for="exampleInputEmail1">Father Name *</label>&#xD;&#xA;                  <input id="father_name" name="father_name" placeholder="" type="text" class="form-control"  value="father_name" />&#xD;&#xA;                </div>&#xD;&#xA;              </div>&#xD;&#xA;              <div class="col-md-3">&#xD;&#xA;                <div class="form-group">&#xD;&#xA;                  <label for="exampleInputEmail1">Father Occupation *</label>&#xD;&#xA;                  <input id="father_occupation" name="father_occupation" placeholder="" type="text" class="form-control"  value="father_occupation" />&#xD;&#xA;                </div>&#xD;&#xA;              </div>&#xD;&#xA;              <div class="col-md-3">&#xD;&#xA;                <div class="form-group">&#xD;&#xA;                  <label for="exampleInputEmail1">Mother Name *</label>&#xD;&#xA;                  <input id="mother_name" name="mother_name" placeholder="" type="text" class="form-control"  value="mother_name" />&#xD;&#xA;                </div>&#xD;&#xA;              </div>&#xD;&#xA;            </div>&#xD;&#xA;            <a class="btn btn-primary btnPrevious pull-left">Previous</a>&#xD;&#xA;            <button type="submit" class="btn btn-info pull-right">Save</button>&#xD;&#xA;          </div>&#xD;&#xA;        </div>&#xD;&#xA;      </form>