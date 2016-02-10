'use strict';

var request = require('request');

describe('statusbrew.com', () => {
  it('should be online at www.statusbrew.com', done => {
    request('https://www.statusbrew.com', (err, res, body) => {
      expect(!err).toBe(true);
      expect(res.statusCode).toBe(200);
      expect(body).toContain('statusbrew');
      expect(body).toContain('Unfollowers is now');
      expect(body).toContain('me.unfollowers.droid');
      done();
    });
  });

  it('should be online at statusbrew.com', done => {
    request('https://statusbrew.com', (err, res, body) => {
      expect(!err).toBe(true);
      expect(res.statusCode).toBe(200);
      expect(body).toContain('statusbrew');
      expect(body).toContain('Unfollowers is now');
      expect(body).toContain('me.unfollowers.droid');
      done();
    });
  });

  it('http should redirect to https', done => {
    request({
      followRedirect: false,
      url: 'http://statusbrew.com'
    }, (err, res, body) => {
      expect(!err).toBe(true);
      expect(res.statusCode).toBe(302);
      expect(res.headers.location).toContain('https://statusbrew.com');
      done();
    });
  }, 10000);
});

describe('app.statusbrew.com', () => {
  it('should be online at app.statusbrew.com', done => {
    request('https://app.statusbrew.com', (err, res, body) => {
      expect(!err).toBe(true);
      expect(res.statusCode).toBe(200);
      expect(body).toContain('Statusbrew');
      expect(body).toContain('Miracle Winter');
      expect(body).toContain('me.unfollowers.droid');
      done();
    });
  });
});

describe('corp.statusbrew.com', () => {
  it('should be online at corp.statusbrew.com', done => {
    request('http://corp.statusbrew.com', (err, res, body) => {
      expect(!err).toBe(true);
      expect(res.statusCode).toBe(200);
      expect(body).toContain('About Statusbrew');
      expect(body).toContain('me.unfollowers.droid');
      done();
    });
  });

  it('should be online at https', done => {
    request('https://corp.statusbrew.com', (err, res, body) => {
      expect(!err).toBe(true);
      expect(res.statusCode).toBe(200);
      expect(body).toContain('About Statusbrew');
      expect(body).toContain('me.unfollowers.droid');
      done();
    });
  });
});

describe('guide.statusbrew.com', () => {
  it('should be online at guide.statusbrew.com', done => {
    request('http://guide.statusbrew.com', (err, res, body) => {
      expect(!err).toBe(true);
      expect(res.statusCode).toBe(200);
      expect(body).toContain('Userguide');
      expect(body).toContain('me.unfollowers.droid');
      expect(body).toContain('Statusbrew');
      expect(body).not.toContain('admin-');
      done();
    });
  });

  it('should be online at https', done => {
    request('https://guide.statusbrew.com', (err, res, body) => {
      expect(!err).toBe(true);
      expect(res.statusCode).toBe(200);
      expect(body).toContain('Userguide');
      expect(body).toContain('me.unfollowers.droid');
      expect(body).toContain('Statusbrew');
      expect(body).not.toContain('admin-');
      done();
    });
  });
});

describe('blog.statusbrew.com', () => {
  it('should be online at blog.statusbrew.com', done => {
    request('http://blog.statusbrew.com', (err, res, body) => {
      expect(!err).toBe(true);
      expect(res.statusCode).toBe(200);
      expect(body).toContain('Statusbrew Blog');
      expect(body).toContain('me.unfollowers.droid');
      expect(body).not.toContain('admin-');
      done();
    });
  });

  it('should be online at https', done => {
    request('https://blog.statusbrew.com', (err, res, body) => {
      expect(!err).toBe(true);
      expect(res.statusCode).toBe(200);
      expect(body).toContain('Statusbrew Blog');
      expect(body).toContain('me.unfollowers.droid');
      expect(body).not.toContain('admin-');
      done();
    });
  });
});
