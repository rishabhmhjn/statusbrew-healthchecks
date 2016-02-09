'use strict';

var rp = require('request-promise');

describe('statusbrew.com', function() {
  it('should be online at www.statusbrew.com', function(done) {
    rp('https://www.statusbrew.com')
      .then(function(body) {
        expect(body).toContain('statusbrew');
        expect(body).toContain('Unfollowers is now');
        expect(body).toContain('me.unfollowers.droid');
        done();
      });
  });

  it('should be online at statusbrew.com', function(done) {
    rp('https://statusbrew.com')
      .then(function(body) {
        expect(body).toContain('statusbrew');
        expect(body).toContain('Unfollowers is now');
        expect(body).toContain('me.unfollowers.droid');
        done();
      });
  });

  it('http should redirect to https', function(done) {
    rp({
        followRedirect: false,
        url: 'http://statusbrew.com',
        resolveWithFullResponse: true
      })
      .catch(err => {
        expect(err.response.headers.location).toContain('https://statusbrew.com');
        expect(err.response.statusCode).toBe(302);
        done();
      });
  }, 10000);
});

describe('app.statusbrew.com', function() {
  it('should be online at app.statusbrew.com', function(done) {
    rp('https://app.statusbrew.com')
      .then(function(body) {
        expect(body).toContain('Statusbrew');
        expect(body).toContain('Miracle Winter');
        expect(body).toContain('me.unfollowers.droid');
        done();
      });
  });
});
