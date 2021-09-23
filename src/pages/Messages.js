import React from 'react';
import { Button, Text,Heading, Box, Input,FormControl,FormLabel,Select,ButtonGroup } from "@chakra-ui/react"

function Messages() {
    return (
        <div className="home">
            <Box maxW="55rem">
            <Heading style={{textAlign :"center"}} fontSize="xl" >You seem to be lost! Need Some help?</Heading>
            
            
           <div>
                <FormControl id="Name_org" isRequired>
                    <FormLabel>Name of the organization</FormLabel>
                    <Input placeholder="Name of the organization" />
                </FormControl>

    
            </div>
            <div>
                <FormControl id="Add" isRequired>
                    <FormLabel>Address of the organization</FormLabel>
                    <Input placeholder="Address of the organization" />
                </FormControl>
            </div>
    
    
            <FormControl id="country">
                <FormLabel>Country</FormLabel>
                <Select placeholder="Select country">
                    <option>United Arab Emirates</option>
                    <option>Nigeria</option>
                </Select>
            </FormControl>
    
            <div>
                <FormControl id="Add" isRequired>
                    <FormLabel>Address of the organization</FormLabel>
                    <Input placeholder="Address of the organization" />
                </FormControl>
            </div>
            <div>
                <ButtonGroup variant="outline" spacing="6">
                    <Button colorScheme="blue">Save</Button>
                    <Button>Cancel</Button>
                </ButtonGroup> </div>
            <Button style={{marginLeft:"0px"}}size="lg" colorScheme="teal" mt="24px">
                    Submit
            </Button>
            </Box>
        </div>
    )
}

export default Messages;
