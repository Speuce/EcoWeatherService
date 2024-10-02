const { WeatherService, WeatherForecast } = require('./weatherservice');

describe('WeatherService Tests', () => {
  
  test('TestGetSummary', () => {
    expect(WeatherService.getSummary(45)).toBe('Scorching');
    expect(WeatherService.getSummary(35)).toBe('Hot');
    expect(WeatherService.getSummary(25)).toBe('Warm');
    expect(WeatherService.getSummary(15)).toBe('Mild');
    expect(WeatherService.getSummary(5)).toBe('Cool');
    expect(WeatherService.getSummary(-5)).toBe('Chilly');
    expect(WeatherService.getSummary(-15)).toBe('Bracing');
    expect(WeatherService.getSummary(-25)).toBe('Freezing');
  });

  test('TestGetForecastReturnsFiveForecasts', () => {
    const forecasts = WeatherService.getForecast();
    expect(forecasts).toHaveLength(5);
  });

  test('TestGetForecastSummaries', () => {
    const forecasts = WeatherService.getForecast();
    forecasts.forEach(forecast => {
      const expectedSummary = WeatherService.getSummary(forecast.temperatureC);
      expect(forecast.summary).toBe(expectedSummary);
    });
  });

  test('TestTemperatureFConversion', () => {
    const forecastZeroC = new WeatherForecast(new Date(), 0, null);
    expect(forecastZeroC.temperatureF).toBe(32);

    const forecastNegative40C = new WeatherForecast(new Date(), -40, null);
    expect(forecastNegative40C.temperatureF).toBe(-40);
  });
});
