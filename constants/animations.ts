import { keyframes } from "@emotion/react"

const FADE_IN = keyframes`
from {
    opacity: 0;
}
to{ opacity: 1;}
`

const FADE_OUT = keyframes`
from {
    opacity: 1;
}
to{ opacity: 0;}`

const POP_IN = keyframes`
from {
    transform:scale(0.95);
    opacity: 0;
}
to{     transform:scale(1);
opacity: 1;}
`

const POP_OUT = keyframes`

from {
    transform:scale(1);
    opacity: 1;
}
to{     transform:scale(0.95);
opacity: 0;}

`

const Bounce = keyframes`
0% {
      top: 4rem;
      
    }
    50% {
      top: 15rem;
  	   
    }



    100% {
      top: 4rem;
       
    }
`

export { FADE_IN, FADE_OUT, POP_IN, POP_OUT, Bounce }
