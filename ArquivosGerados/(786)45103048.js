    <form role="form" data-toggle="validator">&#xD;&#xA;                      <table class="table" id="product" style="margin-top: 10px" id="new-row" width="100%">&#xD;&#xA;                          <tr>&#xD;&#xA;                              <td>&#xD;&#xA;                                <div class="form-group" style="margin-top:30px">&#xD;&#xA;                                <input  class="i-checks"  style="position: absolute; opacity: 0;" type="checkbox">&#xD;&#xA;                              </div>&#xD;&#xA;                            </td>&#xD;&#xA;                              <td width="600px">&#xD;&#xA;                                <div class="form-group">&#xD;&#xA;                                  <label for="name">Product name</label>&#xD;&#xA;                                  <select class="select-product form-control"  style="width: 100%">&#xD;&#xA;                                    <option value="AK">Alaska</option>&#xD;&#xA;                                    <option value="HI">Hawaii</option>&#xD;&#xA;                                  </select>&#xD;&#xA;                                  <p class="help-block with-errors"></p>&#xD;&#xA;                                </div>&#xD;&#xA;                              </td>&#xD;&#xA;                              <td width="200px">&#xD;&#xA;                                <div class="form-group">&#xD;&#xA;                                  <label for="name">Quantity</label>&#xD;&#xA;                                  <input  class="form-control" type="text"  name="quantity" pattern="^[0-9].{1,}$" maxlength="10" data-error="Numbers only" required>&#xD;&#xA;                                  <p class="help-block with-errors"></p>&#xD;&#xA;                                </div>&#xD;&#xA;                              </td>&#xD;&#xA;                              <td text-align="center">&#xD;&#xA;                                <div class="form-group" style="margin-left:100px">&#xD;&#xA;                                  <label>New</label><br>&#xD;&#xA;                                  <button class="btn btn-primary btn-circle form-control" onclick="addRow_P('product')"><i class="fa fa-plus"></i>Add</button>&#xD;&#xA;                                </div>&#xD;&#xA;                              </td>&#xD;&#xA;                             <!-- <td width="25%"> <input type="text" id="inputSuccess" name="serviceCharge[]"  placeholder="Enter service charge"> </td>-->&#xD;&#xA;                          </tr>&#xD;&#xA;                      </table>&#xD;&#xA;        &#xD;&#xA;        &#xD;&#xA;                      <div class="col-lg-12">&#xD;&#xA;                        <button class="btn btn-sm btn-primary m-t-n-xs" type="submit"><strong>Submit</strong></button>&#xD;&#xA;                      </div>&#xD;&#xA;                    </form>