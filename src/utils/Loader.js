import React from 'react'

export default function Loader() {
  return (
    <>
    <style jsx>
        {`
          .spinner {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 25px;
            height: 25px;
            border-radius: 50%;
            box-shadow: 48px 0 0 0 rgba(200, 0, 0, 0.3),
              36px 36px 0 0 rgba(200, 0, 0, 0.3),
              0px 48px 0 0 rgba(200, 0, 0, 0.3),
              -36px 36px 0 0 rgba(200, 0, 0, 0.3),
              -48px 0 0 0 rgba(200, 0, 0, 0.3),
              -36px -36px 0 0 rgba(200, 0, 0, 0.3),
              0px -48px 0 0 rgba(200, 0, 0, 0.3),
              36px -36px 0 0 rgba(200, 0, 0, 0.3);
            animation: animate 1.5s infinite linear;
          }

          @keyframes animate {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
      
      <div class="spinner"> </div>
    </>
  )
}
