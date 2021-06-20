import React from 'react'
import {Card, CardContent, Typography, Grid, StylesProvider} from "@material-ui/core";
import CountUp from "react-countup";
import cx from "classnames";

import styles from "./Cards.module.css";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate} }) => {
  if(!confirmed) {
    return "Loading.....";
  }


  return (
    <div className={StylesProvider.container}>
      <Grid container spacing={3} justify="center">
        <Grid item component={Card} xs={12}  md={3} className={cx(styles.card, styles.infected)} >
         <CardContent style={{backgroundColor: "rgba(0, 0 , 255, 0.2)"}}>   {/* adding background color to card */}
          <Typography variant="body2">
                TOTAL NUMBER OF CASES
            </Typography>

            <Typography variant="h5">
              {/* REAL DATA */}
              <CountUp start={0} end={confirmed.value} duration={2} separator="," />
            </Typography>

            <Typography color="textSecondary">
               {/* Real Date */}
               { new Date(lastUpdate).toDateString() }
            </Typography>

            
          </CardContent>
        </Grid>


        <Grid item component={Card} xs={12}  md={3} className={cx(styles.card, styles.recovered)} >
          <CardContent style={{backgroundColor: "rgba(0, 255 , 0, 0.2)"}}>
          <Typography variant="body2">
               TOTAL NUMBER OF RECOVERIES
            </Typography>

            <Typography variant="h5">
              {/* REAL DATA */}
              <CountUp start={0} end={recovered.value} duration={2} separator="," />
            </Typography>


            <Typography color="textSecondary">
               {/* Real Date */}
               { new Date(lastUpdate).toDateString() }
            </Typography>

          
          </CardContent>
        </Grid>


        <Grid item component={Card} xs={12}  md={3} className={cx(styles.card, styles.deaths)} >
          <CardContent style={{backgroundColor: "rgba(255, 0 , 0, 0.2)"}}>
          <Typography variant="body2">
                TOTAL NUMBER OF DEATHS
            </Typography>

            <Typography variant="h5">
              {/* REAL DATA */}
              <CountUp start={0} end={deaths.value} duration={2} separator="," />
            </Typography>


            <Typography color="textSecondary">
               {/* Real Date */}
               { new Date(lastUpdate).toDateString() }
            </Typography>

            
          </CardContent>
        </Grid>
      </Grid>
    </div>
  )
}

export default Cards
