import React from 'react'

export default function LocationHeader() {
    return (
    <header className="bg-green">
      <div className="container mx-auto px-4 md:px-12 md:pt-6">
            <div className='flex justify-between items-center pb-3 font-manrope text-white font-bold'>
                <span className='flex justify-center items-center'>
                    <svg width="32" height="32" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.03696 21.1502C5.68756 22.046 4.22992 23.2942 4.22992 24.6749C4.22992 27.4006 9.91149 29.6103 16.9201 29.6103C23.9286 29.6103 29.6102 27.4006 29.6102 24.6749C29.6102 23.2942 28.1526 22.046 25.8032 21.1502M16.9201 12.6901H16.9342M25.3802 12.6901C25.3802 18.42 19.0351 21.1502 16.9201 25.3803C14.805 21.1502 8.45997 18.42 8.45997 12.6901C8.45997 8.01775 12.2477 4.23004 16.9201 4.23004C21.5924 4.23004 25.3802 8.01775 25.3802 12.6901ZM18.3301 12.6901C18.3301 13.4689 17.6988 14.1002 16.9201 14.1002C16.1413 14.1002 15.51 13.4689 15.51 12.6901C15.51 11.9114 16.1413 11.2801 16.9201 11.2801C17.6988 11.2801 18.3301 11.9114 18.3301 12.6901Z" stroke="white" stroke-width="2.11502" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    {localStorage.getItem('zipcode')}
                </span>

                <span className='flex justify-center items-center'>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.89495 27.2647H2.92121C2.92121 27.8024 3.35717 28.2384 3.89495 28.2384V27.2647ZM27.2647 27.2647V28.2384C27.8024 28.2384 28.2384 27.8024 28.2384 27.2647H27.2647ZM7.7899 8.11449C7.25212 8.11449 6.81616 8.55044 6.81616 9.08823C6.81616 9.62601 7.25212 10.062 7.7899 10.062V8.11449ZM9.08822 10.062C9.626 10.062 10.062 9.62601 10.062 9.08823C10.062 8.55044 9.626 8.11449 9.08822 8.11449V10.062ZM14.2815 8.11449C13.7437 8.11449 13.3077 8.55044 13.3077 9.08823C13.3077 9.62601 13.7437 10.062 14.2815 10.062V8.11449ZM15.5798 10.062C16.1176 10.062 16.5535 9.62601 16.5535 9.08823C16.5535 8.55044 16.1176 8.11449 15.5798 8.11449V10.062ZM7.7899 12.0094C7.25212 12.0094 6.81616 12.4454 6.81616 12.9832C6.81616 13.521 7.25212 13.9569 7.7899 13.9569V12.0094ZM9.08822 13.9569C9.626 13.9569 10.062 13.521 10.062 12.9832C10.062 12.4454 9.626 12.0094 9.08822 12.0094V13.9569ZM14.2815 12.0094C13.7437 12.0094 13.3077 12.4454 13.3077 12.9832C13.3077 13.521 13.7437 13.9569 14.2815 13.9569V12.0094ZM15.5798 13.9569C16.1176 13.9569 16.5535 13.521 16.5535 12.9832C16.5535 12.4454 16.1176 12.0094 15.5798 12.0094V13.9569ZM7.7899 15.9044C7.25212 15.9044 6.81616 16.3403 6.81616 16.8781C6.81616 17.4159 7.25212 17.8519 7.7899 17.8519V15.9044ZM9.08822 17.8519C9.626 17.8519 10.062 17.4159 10.062 16.8781C10.062 16.3403 9.626 15.9044 9.08822 15.9044V17.8519ZM14.2815 15.9044C13.7437 15.9044 13.3077 16.3403 13.3077 16.8781C13.3077 17.4159 13.7437 17.8519 14.2815 17.8519V15.9044ZM15.5798 17.8519C16.1176 17.8519 16.5535 17.4159 16.5535 16.8781C16.5535 16.3403 16.1176 15.9044 15.5798 15.9044V17.8519ZM14.2815 27.2647V28.2384H15.2552V27.2647H14.2815ZM9.08822 27.2647H8.11448V28.2384H9.08822V27.2647ZM23.3697 13.3078C22.8319 13.3078 22.396 13.7437 22.396 14.2815C22.396 14.8193 22.8319 15.2552 23.3697 15.2552V13.3078ZM23.3827 15.2552C23.9205 15.2552 24.3564 14.8193 24.3564 14.2815C24.3564 13.7437 23.9205 13.3078 23.3827 13.3078V15.2552ZM23.3697 17.2027C22.8319 17.2027 22.396 17.6387 22.396 18.1764C22.396 18.7142 22.8319 19.1502 23.3697 19.1502V17.2027ZM23.3827 19.1502C23.9205 19.1502 24.3564 18.7142 24.3564 18.1764C24.3564 17.6387 23.9205 17.2027 23.3827 17.2027V19.1502ZM23.3697 21.0977C22.8319 21.0977 22.396 21.5336 22.396 22.0714C22.396 22.6092 22.8319 23.0451 23.3697 23.0451V21.0977ZM23.3827 23.0451C23.9205 23.0451 24.3564 22.6092 24.3564 22.0714C24.3564 21.5336 23.9205 21.0977 23.3827 21.0977V23.0451ZM27.1231 9.79712L26.2555 10.2392L27.1231 9.79712ZM26.5558 9.22973L26.1137 10.0973L26.5558 9.22973ZM18.7659 4.03647L18.3238 4.90407L18.7659 4.03647ZM19.3332 4.60385L18.4656 5.04592L19.3332 4.60385ZM4.03646 4.60385L4.90407 5.04592L4.03646 4.60385ZM4.60384 4.03647L5.04591 4.90407L4.60384 4.03647ZM2.92121 5.97227V27.2647H4.86869V5.97227H2.92121ZM5.97226 4.8687H17.3974V2.92122H5.97226V4.8687ZM18.501 5.97227V9.08823H20.4485V5.97227H18.501ZM18.501 9.08823V27.2647H20.4485V9.08823H18.501ZM3.89495 28.2384H19.4748V26.2909H3.89495V28.2384ZM19.4748 28.2384H27.2647V26.2909H19.4748V28.2384ZM26.2909 11.1655V27.2647H28.2384V11.1655H26.2909ZM19.4748 10.062H25.1873V8.11449H19.4748V10.062ZM7.7899 10.062H9.08822V8.11449H7.7899V10.062ZM14.2815 10.062H15.5798V8.11449H14.2815V10.062ZM7.7899 13.9569H9.08822V12.0094H7.7899V13.9569ZM14.2815 13.9569H15.5798V12.0094H14.2815V13.9569ZM7.7899 17.8519H9.08822V15.9044H7.7899V17.8519ZM14.2815 17.8519H15.5798V15.9044H14.2815V17.8519ZM13.3077 23.3697V27.2647H15.2552V23.3697H13.3077ZM14.2815 26.2909H9.08822V28.2384H14.2815V26.2909ZM10.062 27.2647V23.3697H8.11448V27.2647H10.062ZM11.6849 21.7468C12.5812 21.7468 13.3077 22.4734 13.3077 23.3697H15.2552C15.2552 21.3978 13.6567 19.7993 11.6849 19.7993V21.7468ZM11.6849 19.7993C9.71299 19.7993 8.11448 21.3978 8.11448 23.3697H10.062C10.062 22.4734 10.7886 21.7468 11.6849 21.7468V19.7993ZM23.3697 15.2552H23.3827V13.3078H23.3697V15.2552ZM23.3697 19.1502H23.3827V17.2027H23.3697V19.1502ZM23.3697 23.0451H23.3827V21.0977H23.3697V23.0451ZM28.2384 11.1655C28.2384 10.818 28.2391 10.4989 28.2175 10.2335C28.1949 9.95679 28.1431 9.65406 27.9908 9.35505L26.2555 10.2392C26.2447 10.2179 26.2637 10.2358 26.2765 10.3921C26.2902 10.5597 26.2909 10.7859 26.2909 11.1655H28.2384ZM25.1873 10.062C25.567 10.062 25.7931 10.0627 25.9608 10.0764C26.1171 10.0892 26.135 10.1082 26.1137 10.0973L26.9978 8.36213C26.6988 8.20977 26.3961 8.15802 26.1194 8.13541C25.854 8.11373 25.5348 8.11449 25.1873 8.11449V10.062ZM27.9908 9.35505C27.7729 8.92754 27.4253 8.57996 26.9978 8.36213L26.1137 10.0973C26.1748 10.1285 26.2244 10.1781 26.2555 10.2392L27.9908 9.35505ZM17.3974 4.8687C17.7771 4.8687 18.0032 4.86945 18.1709 4.88315C18.3272 4.89592 18.3451 4.91492 18.3238 4.90407L19.2079 3.16886C18.9089 3.01651 18.6062 2.96475 18.3295 2.94214C18.0641 2.92046 17.7449 2.92122 17.3974 2.92122V4.8687ZM20.4485 5.97227C20.4485 5.62477 20.4492 5.30559 20.4276 5.04024C20.405 4.76353 20.3532 4.4608 20.2008 4.16178L18.4656 5.04592C18.4548 5.02463 18.4738 5.04255 18.4866 5.19883C18.5003 5.36647 18.501 5.59264 18.501 5.97227H20.4485ZM18.3238 4.90407C18.3849 4.93519 18.4345 4.98484 18.4656 5.04592L20.2008 4.16178C19.983 3.73427 19.6354 3.38669 19.2079 3.16886L18.3238 4.90407ZM4.86869 5.97227C4.86869 5.59263 4.86945 5.36647 4.88314 5.19883C4.89591 5.04255 4.91491 5.02463 4.90407 5.04592L3.16885 4.16178C3.0165 4.4608 2.96474 4.76353 2.94214 5.04024C2.92046 5.30559 2.92121 5.62477 2.92121 5.97227H4.86869ZM5.97226 2.92122C5.62476 2.92122 5.30558 2.92046 5.04023 2.94214C4.76352 2.96475 4.46079 3.01651 4.16178 3.16886L5.04591 4.90407C5.02463 4.91492 5.04254 4.89592 5.19882 4.88315C5.36647 4.86945 5.59263 4.8687 5.97226 4.8687V2.92122ZM4.90407 5.04592C4.93518 4.98485 4.98484 4.93519 5.04591 4.90407L4.16178 3.16886C3.73426 3.38669 3.38668 3.73427 3.16885 4.16178L4.90407 5.04592Z" fill="white"/>
                    </svg>
                    location
                </span>

                <button>Change Location</button>
            </div>
        </div>
      </header>
    )
  }