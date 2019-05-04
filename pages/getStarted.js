import React from 'react';
import {Menu, Button,Grid,
        Container,Image,Form,
        Divider,Segment,Header,
        Icon,Card} from 'semantic-ui-react';
import Layout from '../components/Layout';

export default () => {

  return (

    <Layout>
    <Container>
    <Divider hidden />

    <div>
    <Header as='h3' icon textAlign='center'>
        <Icon name='chain' circular />
        <Header.Content>DoChain<br/>Secure Your Medical Records With Blockchain</Header.Content>
    </Header>
    </div>
    <Divider hidden />

    <Grid celled = "internally" centered >
        <Grid.Row >
          <Grid.Column width={6} >
          <Form>
            <Form.Group widths='equal' >
            <Segment basic textAlign = 'center'>
            <Button animated color = 'blue' href ='/patient/signup'>
              <Button.Content visible>
                <Icon name = 'medkit' />
                Register As A Patient
              </Button.Content>
              <Button.Content hidden>
                <Icon name='arrow right' />
              </Button.Content>
            </Button>

              <Divider horizontal>-Or-</Divider>

              <Button animated color = 'violet' href = '/doctor/signup'>
                <Button.Content visible>
                  <Icon name = 'doctor' />

                  Register As A Doctor
                </Button.Content>
                <Button.Content hidden>
                  <Icon name='arrow right' />
                </Button.Content>

              </Button>
              <Divider hidden/>
              <Divider hidden/>
              <Divider hidden/>
              <Divider hidden/>
              <Divider hidden/>
              <Divider hidden/>
              <Divider hidden/>
              <Divider hidden/>
              <Divider hidden/>
              <Divider hidden/>
              <Divider hidden/>

              <Divider horizontal>Feeling Confused?
              </Divider>
              <strong>Check out the <a>User Guide</a> </strong>
            </Segment>

            </Form.Group>
          </Form>
          </Grid.Column>
          <Grid.Column width={10} >

            <Image src = 'https://elements-cover-images-0.imgix.net/df28a093-9996-486e-9ffd-9f4e6507b289?auto=compress%2Cformat&fit=max&w=2038&s=0c74e6d82bf334bdafca060dd5b93c4d'/>
            {/*<Image src = 'https://elements-cover-images-0.imgix.net/2aaab9c4-5d86-4ddc-9a86-895b418f3610?auto=compress%2Cformat&fit=max&w=1170&s=4853d2737474bffb5eebbae4dfebe451'/>*/}
            {/*<Image src = 'https://elements-cover-images-0.imgix.net/05eb465d-90c6-4571-80c0-3f4a152ea861?auto=compress%2Cformat&fit=max&w=1170&s=14074df665fde38d11d71d79b22faa74' />*/}
            {/* <Image src = 'https://picsum.photos/1000/600/?random'   /> */}
            {/*<Image src = 'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn-images-1.medium.com%2Fmax%2F1600%2F1*CvjclMDwgh9AqED_h5UVCA.jpeg&f=1'  />*/}
          </Grid.Column>
        </Grid.Row>


    </Grid>

    </Container>
    </Layout>
  )
}
