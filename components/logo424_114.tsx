import React from 'react'

const FlexLogoBig = (
  { color = 'white' }:
  { color?: string}
) => {
  return (
    <div className='flex w-[423.79834px] justify-between'>
              <svg xmlns="http://www.w3.org/2000/svg" width="74" height="115" viewBox="0 0 74 115" fill="none">
                <path d="M25.8481 23.6859V47.0451H70.5099V70.731H25.8481V114.346H0V0H73.4544V23.6859H25.8481Z" fill={color} />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="74" height="115" viewBox="0 0 74 115" fill="none">
                <path d="M73.9035 90.6597V114.346H0.449135V0H26.4606V90.6597H73.9035Z" fill={color} />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="76" height="115" viewBox="0 0 76 115" fill="none">
                <path d="M26.4731 23.6859V43.6146H72.7715V66.484H26.4731V90.6597H75.716V114.346H0.952713V0H75.716V23.6859H26.4731Z" fill={color} />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="156" height="115" viewBox="0 0 156 115" fill="none">
                <path d="M155.798 0V33.4582L113.27 51.7399L99.7576 56.9139L113.491 62.2601L155.798 80.8873V114.346L78.0502 74.5057L0.74588 113.138V80.3696L38.6229 63.8122L55.2355 57.2583L39.509 51.05L0.745896 33.8037V1.03436L77.8291 39.6676L155.798 0Z" fill={color} />
              </svg>
            </div>
  )
}

export default FlexLogoBig