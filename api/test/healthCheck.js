import request from 'supertest'
import app from 'index'

describe('http status test', () => {
  it('api', async () => {
    await request(app)
      .get('/api/healthCheck')
      .expect(200)
  })
  it('res.body test', async () => {
    const res = await request(app).get('/api/healthCheck')
    expect(res.body).toEqual('OK')
  })
})
