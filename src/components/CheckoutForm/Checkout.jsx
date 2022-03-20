import React, { useState } from 'react'
import { Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button} from '@material-ui/core'

const steps = ['Shipping address', 'Payment details']

const Checkout = () => {

  const [activeStep, setActiveStep] = useState(0)

  return (
    <>
      <div/>
      <main>
        <Paper className={classes.paper}>
          <Typography variant='h4' align='center'>Checkout</Typography>
          <Stepper activeStep={0} className="classes.stepper">
            {steps.map((step) => (
              <Step key={step}>
                <StepLabel>{step}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Paper>
      </main>
    </>
  )
}

export default Checkout