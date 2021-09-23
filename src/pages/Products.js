import React from 'react';
import {  Text, Heading, Box, Input, FormControl, FormLabel, Select, option ,ButtonGroup,Button} from "@chakra-ui/react"

function Products() {
    return (
        <div >
            <Box maxW="20rem">
            <Heading style={{ textAlign: "center" }} fontSize="xxl" mb={30}>Submit A Helpline Number</Heading>
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
            </Box >
        </div >
    )
}

export default Products;
