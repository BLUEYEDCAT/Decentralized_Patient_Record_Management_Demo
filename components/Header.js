import React from 'react';
import {Menu,Button,Container,Sidebar,Icon,Segment} from 'semantic-ui-react';

export default () => {

  return (
    <Container>

      <Menu style = {{ marginTop: '6px'}}  >

        <Menu.Item>
        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b7/ETHEREUM-YOUTUBE-PROFILE-PIC.png" />
        </Menu.Item>

        <Menu.Item>
          <a href = '/index'>Home</a>

        </Menu.Item>

          <Menu.Menu position = "right">

            <Menu.Item>

              <a href = '/user'>
                <Icon name = "user">
                </Icon>
                  <a>My Profile</a>
              </a>

            </Menu.Item>

          </Menu.Menu>
        </Menu>


    </Container>

  )
}
