describe('request service', () => {
  it('should issue a request', () => {
    let apiRequestService = require('./apiRequestService');
    apiRequestService.getAnewRequest = jest.fn();
    apiRequestService.getAnewRequest();
    expect(apiRequestService.getAnewRequest).toHaveBeenCalled();
  })
});