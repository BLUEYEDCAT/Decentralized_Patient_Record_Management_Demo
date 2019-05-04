import React from 'react';
import {Divider,Grid,Menu,Button,Container,Sidebar,Icon,Segment,List,Image} from 'semantic-ui-react';
import {Link} from '../server/routes';

export default () => {

  return (



    <Container>

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
      <Divider hidden/>

      <Divider section/>
      <Grid >
        <Grid.Row columns={5} >
          <Grid.Column>
            <Menu vertical text>
              <Menu.Item className='header'>
                <a>
                  Home
                </a>
              </Menu.Item>
              <Menu.Item className='header'>
                  <a>
                    My Profile
                  </a>
              </Menu.Item>
              <Menu.Item className='header'><a>Doctors</a></Menu.Item>
              <Menu.Item className='header'><a>Make Appointment</a></Menu.Item>

            </Menu>
          </Grid.Column>
          <Grid.Column >
            <Menu  vertical text>
              <Menu.Item className='header'>About</Menu.Item>
              <Menu.Item className='header'>Contact</Menu.Item>
              <Menu.Item className='header'>FAQ's</Menu.Item>
              <Menu.Item className='header'>User Guide</Menu.Item>

            </Menu>
          </Grid.Column>
          <Grid.Column>

          </Grid.Column>

          <Grid.Column>

          </Grid.Column>
          <Grid.Column>
          <Menu  vertical text>

            <Menu.Item className='header'><Icon disabled name='instagram' /><a href = ''>wechat</a></Menu.Item>
            <Menu.Item className='header'><a>twitter</a></Menu.Item>
            <Menu.Item className='header'><a>Instagram</a></Menu.Item>


          </Menu>
          </Grid.Column>
        </Grid.Row>



        <Grid.Row textAlign='center'>
          <Grid.Column>
            <p>
              Copyright reserved to WU YICHEN @ APU
            </p>
            <p>
            more details @ <a>Product Privacy</a>
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>

    </Container>


  )
}
