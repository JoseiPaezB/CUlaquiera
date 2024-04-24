import React from 'react';
import Saludo from '@/components/Saludo';
import Card from '@/components/Card';
import Button from '@/components/Button';
function index() {
  return (
    <div>
        <Saludo nombre="Juan" />
        <Card>
            <h1>Titulo</h1>
            <p>Este es un card</p>
        </Card>
        <Button color="red">Warning</Button>
        <Button color="green">Warning</Button>
        <Button color="blue">Warning</Button>
        

    </div>
  )
}

export default index