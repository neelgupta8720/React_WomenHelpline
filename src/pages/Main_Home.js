import React, { useState } from 'react'
import MultiSelect from  'react-multiple-select-dropdown-lite'
import  'react-multiple-select-dropdown-lite/dist/index.css';
import { Button, Text,Heading, Box, Input,FormControl,FormLabel,InputLeftAddon,InputGroup } from "@chakra-ui/react"
import Recaptcha from "react-recaptcha";

function Home() {
    const [value, setvalue] = useState('')

   
  
    const  options  = [
      { label:  'Dowry', value:'1' },
      { label:  'Sexual Harrasment', value:'2'  },
      { label:  'Stalking', value:'3'   },
      { label:  'Child Marriage', value:'4'  },
      { label:  'Divorce', value:  '5'  },
      { label:  'Rape', value:  '6'  },
      { label:  'Domestic Violence', value:  '7'  },
      { label:  'Cyber Bulling', value:'8'  },
    ]
    return (
        <div className="home">
            <Box maxW="80rem" p="50px 0px 50px 100px">
            <Heading style={{textAlign :"center"}} fontSize="xxl" mb={30}>Submit A Helpline No.</Heading>
            
            
            <div style={{marginTop:"30px", marginLeft:"50px"}} class="Sput">
           
        
            
            <FormControl style={{paddingBottom:"20px"}} id="first-name" isRequired>
            <FormLabel>Organization Name</FormLabel>
            <Input  placeholder="Organization Name" />
            </FormControl>
            <FormControl style={{paddingBottom:"20px"}} id="first-name" isRequired>
            <FormLabel>Address of the organization</FormLabel>
            <Input  placeholder="Organization Name" />
            </FormControl>
            <FormControl style={{paddingBottom:"20px"}} id="first-name" isRequired>
            <FormLabel>Your Phone Number</FormLabel>
            <InputGroup>
            <InputLeftAddon children="+91/+022" />
            <Input type="tel" placeholder="phone number" />
            </InputGroup>
            </FormControl>
            <FormControl style={{paddingBottom:"20px"}} id="first-name" isRequired>
            <FormLabel>Location</FormLabel>
            <Input placeholder="Location" />
            </FormControl>
            
          
                <FormLabel style={{fontSize:"30px"}} size="xl">Issues</FormLabel>
                {value}
           

            <MultiSelect className= "ph" hidePlaceholder={true} placeholder = "search" 
                
                options={options} />
        </div>
            <Button style={{marginLeft:"50px"}}size="lg" colorScheme="teal" mt="34px">
                    Submit
            </Button>
            <Recaptcha
              sitekey="6LfCqn8cAAAAAMtY5AFClOkoiqVal5pSBtuZT9ar"
              render="explicit"
            //   onloadCallback={this.recaptchaLoaded}
            //   verifyCallback={this.verifyCallback}
            //   onClick={this.handleSubscribe}
            />
            </Box>
        </div>
        
    )
}

export default Home;