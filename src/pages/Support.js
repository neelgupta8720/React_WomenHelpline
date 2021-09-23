import React, { useState } from 'react'
import MultiSelect from  'react-multiple-select-dropdown-lite'
import  'react-multiple-select-dropdown-lite/dist/index.css';
import { Button, Text, Heading, Box, Input, FormControl, FormLabel, Select, ButtonGroup } from "@chakra-ui/react"

function Support() {
    const [value, setvalue] = useState('')

  const  handleOnchange  =  val  => {
    setvalue(val)
  }

  const  options  = [
    { label:  'Option 1', value:  'option_1'  },
    { label:  'Option 2', value:  'option_2'  },
    { label:  'Option 3', value:  'option_3'  },
    { label:  'Option 4', value:  'option_4'  },
  ]
    return (
        <><div className="app">
            <div className="preview-values">
                <h4>Issues</h4>
                {value}
            </div>

            <MultiSelect
                onChange={handleOnchange}
                options={options} />
        </div><div className="submit">
                <Box maxW="55rem">
                    <Heading style={{ textAlign: "center" }} fontSize="xl">You seem to be lost! Need Some help?</Heading>


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
                    <div className="app">
            <div className="preview-values">
                <h4>Values</h4>
                {value}
            </div>

            <MultiSelect
                onChange={handleOnchange}
                options={options} />
        </div>
                  
                    <Button style={{ marginLeft: "140px",paddingTop : "30 px",paddingBottom : "30 px" }} size="lg" colorScheme="teal" mt="24px">
                        Submit
                    </Button>
                </Box>

            </div></>
    )
}

export default Support;
