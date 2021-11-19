import React from 'react'
import moment from 'moment-timezone'
import Image from 'next/image'

export default function HourlyWeather({hourlyWeather, timeZone}) {
  return (
    <div className="hourly">
      <div className="hourly__inner">
        {hourlyWeather.length > 0 &&
          hourlyWeather.map((weather, index) => (
            <div className="hourly__box-wrapper" key={index}>
              <div className="hourly__box">
                <span
                  className={`hourly__time ${
                    index === 0 ? 'hourly__time--now' : ''
                  }`}
                >
                  {index === 0
                    ? 'Now'
                    : moment.unix(weather.dt).tz(timeZone).format('LT')}
                </span>
                <Image
                  src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                  alt="Weather Icon"
                  width="100"
                  height="100"
                />
                <span>{weather.temp.toFixed(0)}&deg;C</span>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}