import React, {Component} from 'react';
import {Divider,Dropdown,Card,Icon,Container,Form,Message,Input,Button,Dimmer,Loader,Segment,Select} from 'semantic-ui-react';
import Patient from '../ethereum/patient/patient';
import web3 from '../ethereum/web3';
import ipfs from '../server/ipfs';

class SignUpForm extends Component {

  state = {
    surname : '',
    givenname : '',
    gender : '',
    medicalno : '',
    age : '',
    email : '',
    phone : '',
    language : '',
    nationality : '',
    loading : false,
    visible : 'false',
    testing : 1555502789,
    file : '',
    ipfsHash : '',
    profilePic : '',
    continue  : true
  };


  static async getInitialProps(props) {
    const accounts = web3.eth.getAccounts();
    const currentAddress = accounts[0];
    const patientInfo  = await Patient.methods.getPatient(accounts[0]).call();

    return {Pname : patientInfo.patientName,
          Pgender : patientInfo.patientGender,
          Page : patientInfo.patientAge,
          Pphone : patientInfo.patientPhone,
          Pid : patientInfo.patientIndex,
        };
}


  onFileChange = async event => {
    event.preventDefault();
    console.log('the file has been detected');
    const file  =  event.target.files[0];
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(file);

    reader.onloadend = () => {
      this.setState({file : Buffer(reader.result)});
    };
  }

  onSubmit = async event=> {

    event.preventDefault();

    const result = await new Promise((resolve, reject) => {
      ipfs.files.add(this.state.file, (err,result) => {
        if(err){
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
    this.setState({profilePic : result[0].hash});

    {/*
      await ipfs.files.add(this.state.file, (err,result) => {
        if(err){
          console.log(err);
          return
        }
      console.log('profile hash ' + result[0].hash);
      this.setState({profilePic : result[0].hash , continue : true});
      });
      */}

    this.setState({loading : true,visible : 'true'});

    console.log('gender value is ' + this.state.gender);
    const accounts = await web3.eth.getAccounts();
    console.log( 'the value of profilepic is ' + this.state.profilePic);

      if(this.state.profilePic == '')
      {
        console.log('waiting');
      }else{
        try{
          this.setState({continue : false});
          console.log('profile hash again ' + this.state.profilePic);
          await Patient.methods.insertPatient(
                accounts[0],
                this.state.surname,this.state.givenname,
                this.state.gender,this.state.age,
                this.state.email,this.state.language,
                this.state.nationality,this.state.phone,
                this.state.medicalno,this.state.profilePic)
                .send({
                  from : accounts[0],
                });
        }
       catch (e) {
        console.log(e);

      } finally {
        this.setState({loading : false,visible : 'false'});
      }
    }








  };

  render(){
    const GenderOptions = [
        { key: 'm', text: 'Male', value: 'male' },
        { key: 'f', text: 'Female', value: 'female' },
      ]
      const languageOptions = [
          { key: 'e', text: 'English', value: 'ENGLISH' },
          { key: 'c', text: 'Chinese / 华语', value: 'CHINESE' },
          { key: 'b', text: 'Bahasa Melayu', value: 'BAHASA MELAYU' },
        ]
        const countryOptions = [
            { key: 'm', text: 'Malaysia', value: 'Malaysia' },
            { key: 'c', text: 'China', value: 'China' },
            { key: 's', text: 'Singapore', value: 'Singapore' },
          ]

    return(
      <div>
      <Container>
          <Divider hidden/>
            <Divider hidden/>

          <Form onSubmit = {this.onSubmit} loading = {this.state.loading}>
            <Form.Group widths = 'equal'>

              <Form.Field>
              <label>Patient Surname</label>
              <Input

                value = {this.state.surname}
                onChange = {event => this.setState({surname : event.target.value})}
                />
              </Form.Field>

              <Form.Field>
              <label>Patient Given Name</label>
              <Input


                value = {this.state.givenname}
                onChange = {event => this.setState({givenname : event.target.value})}
                />
              </Form.Field>

              <Form.Field>
                <label>Gender</label>
                  <Dropdown
                    placeholder='Gender'
                    fluid
                    selection
                    options={GenderOptions}
                    onChange = {event => this.setState({gender : event.target.textContent})}
                  />

              </Form.Field>
            </Form.Group >

            <Form.Group widths = 'equal'>
            <Form.Field>
            <label>Patient Medical Number</label>
            <Input


              value = {this.state.medicalno}
              onChange = {event => this.setState({medicalno : event.target.value})}
              />
            </Form.Field>


            <Form.Field>
            <label>Patient Age</label>
            <Input

              value = {this.state.age}
              onChange = {event => this.setState({age : event.target.value})}
              />
            </Form.Field>

          </Form.Group>



            <Form.Group widths = 'equal'>

            <Form.Field>
            <label>Patient Email</label>
            <Input


              value = {this.state.email}
              onChange = {event => this.setState({email : event.target.value})}
              />
            </Form.Field>


              <Form.Field>
              <label>Patient Phone</label>
              <Input

                value = {this.state.phone}
                onChange = {event => this.setState({phone : event.target.value})}
                />
              </Form.Field>

            </Form.Group>


            <Form.Group widths = 'equal'>
              <Form.Field>
              <label>Patient Prefered Languages</label>
                <Dropdown
                  placeholder='Languages'
                  fluid
                  selection
                  options={languageOptions}
                  onChange = {event => this.setState({language : event.target.textContent})}
                />
              </Form.Field>
              <Form.Field>
              <label>Patient Nationality</label>
                <Dropdown
                  placeholder='Countries'
                  fluid
                  selection
                  options={countryOptions}
                  onChange = {event => this.setState({nationality : event.target.textContent})}
                />
              </Form.Field>
              <Form.Field >
                <label> Profile Picture</label>
                <Input
                  type = 'file'
                  label = '.jpeg'
                  labelPosition = 'right'
                  onChange = {this.onFileChange}
                  />

              </Form.Field>
            </Form.Group>







              <Button
                content = "Submit"
                primary
              />


          </Form>
          {
            this.state.visible == 'true'  ? <Message
              info
              floating
              header = "Dont worry"
              content = "this wont take long :)"
              /> : null

          }



          </Container>
      </div>
    );
  }
}


export default SignUpForm;
