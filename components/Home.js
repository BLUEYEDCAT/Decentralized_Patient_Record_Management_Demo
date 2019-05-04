import React from 'react';
import {Container,Grid,Image,Divider,Header,Icon} from 'semantic-ui-react';



export default () => {


  const banner  = '';
  return (
    <Container >

    <Divider hidden />
    <Divider hidden />
    <Grid inverted>
      <Grid.Column width={6}>

      </Grid.Column>
      <Grid.Column width={10}>
        <Image src = {banner} wrap/>
      </Grid.Column>

    </Grid>

    <Grid>


    </Grid>

    </Container>

  )
}
