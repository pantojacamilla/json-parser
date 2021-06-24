    var assert = require("chai").assert;&#xD;&#xA;    var http = require("http");&#xD;&#xA;    describe('server Test', function() {&#xD;&#xA;      before(function() {&#xD;&#xA;        server.listen(3000);&#xD;&#xA;      });&#xD;&#xA;      after(function(done) {&#xD;&#xA;        server.close();&#xD;&#xA;      });&#xD;&#xA;    });&#xD;&#xA;    var Code = require("../f");&#xD;&#xA;    describe("itemsAvailable", function() {&#xD;&#xA;      it("information count", function() {&#xD;&#xA;        assert.equal(Code.itemsAvailable[2].count, 0);&#xD;&#xA;      })&#xD;&#xA;    });&#xD;&#xA;    describe("information count", function() {&#xD;&#xA;      it("reset", function() {&#xD;&#xA;        if (Code.reset.hour == 16 && Code.reset.min == 52) {&#xD;&#xA;          assert.equal(Code.reset.itemsAvailable[2].count, 0);&#xD;&#xA;        }&#xD;&#xA;      });&#xD;&#xA;    })&#xD;&#xA;    describe('/', function() {&#xD;&#xA;      before(function(done) {&#xD;&#xA;        Code.server.listen(3000, done);&#xD;&#xA;      });&#xD;&#xA;      after(function(done) {&#xD;&#xA;        Code.server.close();&#xD;&#xA;      });&#xD;&#xA;      describe("http request", function() {&#xD;&#xA;        it('buy the item', function(done) {&#xD;&#xA;          http.get("http://localhost:3000", function(res) {&#xD;&#xA;            //assert.equal(Code.server.res,'hello');&#xD;&#xA;            try {&#xD;&#xA;              if (Code.itemsAvailable[2].count == 0) {&#xD;&#xA;                if (Code.parsedUrl.query.model == 'nokia' && Code.itemsAvailable[0].available != 0) {&#xD;&#xA;                  it("item can be bought", function(done) {&#xD;&#xA;                    assert.equal(Code.server.res, 'item chosen is nokia');&#xD;&#xA;                    assert.equal(Code.server.res, 'item can be bought');&#xD;&#xA;                    done();&#xD;&#xA;                  })&#xD;&#xA;                }&#xD;&#xA;              };&#xD;&#xA;            } catch (error) {&#xD;&#xA;              it("item can not be bought", function(done) {&#xD;&#xA;                assert.equal(Code.server.res, 'u cannot buy the item today come back tomorrow');&#xD;&#xA;                done();&#xD;&#xA;              })&#xD;&#xA;            }&#xD;&#xA;          })&#xD;&#xA;          done();&#xD;&#xA;        })&#xD;&#xA;      });&#xD;&#xA;    })