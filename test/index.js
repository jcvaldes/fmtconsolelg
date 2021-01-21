const log = require('./../index')
const chai = require('chai'),
      expect = chai.expect,
      sinonChai = require('sinon-chai'),
      sinon = require('sinon')
      
chai.use(sinonChai)
const MESSAGE = 'Hola Mundo';
describe('Test de funciones de color para console.log', () => {
  beforeEach(() => {
    sinon.spy(console, 'log');
  });
  afterEach(() => {
    console.log.restore();
  })
  it('funcion success', () => {
    log.success(MESSAGE)
     expect(console.log).to.be.called;
  })
  it('funcion info', () => {
    log.info(MESSAGE)
    expect(console.log).to.be.called;
  })
  it('funcion error', () => {
    log.error(MESSAGE)
    expect(console.log).to.be.called;
  })
  it('funcion warn', () => {
    log.warn(MESSAGE)
    expect(console.log).to.be.called;
  })
  it('funcion warn', () => {
    log.warn(MESSAGE)
    expect(console.log).to.be.called;
  })
  // it('No llama al console log', () => {
  //   log.dummy()
  //   expect(console.log).not.to.be.called;
  // })
})
