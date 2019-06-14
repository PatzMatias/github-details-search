import api from './api';


/**API TESTS */

describe(`GET /api.github.com/users/{username}`, () => {
  it('should return the user data', async () => {
    const res = await api('get', 'error', '', {});
    expect(res.status).toBe(200);
    expect(res.data).toHaveProperty('login');
  });

  it(`should return 404 if user doesn't exist`, async () => {
    const res = await api('get', 'normanmanan', '', {});
    expect(res.status).toBe(404);
  });
});

describe(`GET /api.github.com/users/{username}/repos`, () => {
  it(`should return the user's repositories list`, async () => {
    const res = await api('get', 'error', '/repos', {});
    expect(res.status).toBe(200);
    expect(res.data).not.toBeNull();
  });
  
  it(`should return 404 if it doesn't exist`, async () => {
    const res = await api('get', 'normanmanan', '/repos', {});
    expect(res.status).toBe(404);
  });
});

describe(`GET /api.github.com/users/{username}/orgs`, () => {
  it(`should return the user's organizations list`, async () => {
    const res = await api('get', 'error', '/orgs', {});
    expect(res.status).toBe(200);
    expect(res.data).not.toBeNull();
  });

  it(`should return 404 if it doesn't exist`, async () => {
    const res = await api('get', 'normanmanan', '/orgs', {});
    expect(res.status).toBe(404);
  });
});