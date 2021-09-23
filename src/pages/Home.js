import React from 'react';
import { Button, Text,Heading, Box, Input,FormControl,FormLabel } from "@chakra-ui/react"

function Home() {
    return (
        <div className="home">
            <Box maxW="80rem">
            <Heading style={{textAlign :"center"}} fontSize="xxl" mb={30}>You seem to be lost! Need Some help?</Heading>
            <Text fontSize="xl">
                You can let us know what you are looking for by just selecting what you came here looking for from the options given below!!!
            </Text>
            <div class="Sopts" >
                <Button  size="lg" colorScheme="teal" mt="24px">
                    Dowry
                </Button>
                <Button size="lg" colorScheme="teal" mt="24px">
                    Sexual Harrasment
                </Button>
                <Button size="lg" colorScheme="teal" mt="24px">
                    Stalking
                </Button>
                <Button size="lg" colorScheme="teal" mt="24px">
                    Child Marriage
                </Button>
                <Button size="lg" colorScheme="teal" mt="24px">
                    Divorce
                </Button>
                <Button size="lg" colorScheme="teal" mt="24px">
                    Rape
                </Button>
            </div>
            <div class="Sopts1" >
                <Button style={{marginLeft:"110px"}}size="lg" colorScheme="teal" mt="24px">
                    Domestic Violence
                </Button>
                <Button size="lg" colorScheme="teal" mt="24px">
                    Cyber Bullying
                </Button>
                <Button size="lg" colorScheme="teal" mt="24px">
                    Sexual Abuse
                </Button>
                <Button size="lg" colorScheme="teal" mt="24px">
                    Stalking
                </Button>
                <Button size="lg" colorScheme="teal" mt="24px">
                    Rape
                </Button>
            </div>
            <div class="Sopts2" >
                <Button style={{marginLeft:"210px"}}size="lg" colorScheme="teal" mt="24px">
                    Domestic Violence
                </Button>
                <Button size="lg" colorScheme="teal" mt="24px">
                    Cyber Bullying
                </Button>
                <Button size="lg" colorScheme="teal" mt="24px">
                    Sexual Abuse
                </Button>
                
            </div>
            <div style={{marginTop:"30px"}} class="Sput">
            <Text style={{marginLeft:"120px"}} fontSize="xl">
                If what you were looking for is not included in the above options, You can let us know by typing it!
            </Text>
            <Input style={{color:"black"}} variant="flushed" placeholder="Enter The Problem You Are Facing Here" />
            </div>
            <Heading style={{ textAlign :"center", marginTop:"100px"}} fontSize="xxl" mb={30}>Tell us a little about Yourself!</Heading>
            <FormControl style={{paddingBottom:"20px"}} id="first-name" isRequired>
            <FormLabel>Full Name</FormLabel>
            <Input  placeholder="Full Name" />
            </FormControl>
            <FormControl style={{paddingBottom:"20px"}} id="first-name" isRequired>
            <FormLabel>Your Phone Number</FormLabel>
            <Input type="tel" placeholder="+91 ..." />
            </FormControl>
            <FormControl style={{paddingBottom:"20px"}} id="first-name" isRequired>
            <FormLabel>Email Id</FormLabel>
            <Input placeholder="Email" />
            </FormControl>
            <FormControl style={{paddingBottom:"20px"}} id="first-name">
            <FormLabel size="xl">Anything Else You Want To Tell Us?</FormLabel>
            <Input style={{height:"100px"}} placeholder="Your Message" />
            </FormControl>
            <Button style={{marginLeft:"0px"}}size="lg" colorScheme="teal" mt="24px">
                    Submit
            </Button>
            </Box>
        </div>
        
    )
}

export default Home;
