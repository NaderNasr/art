import React from 'react';
import { Typography, Button, Card, CardActions, CardContent, CardMedia } from '@material-ui/core';

import { makeStyles } from './styles';

const CartItem = () => {
  const classes = makeStyles();

  return (
    <Card>
      <CardMedia image={item.media.source} />
    </Card>
  )
}