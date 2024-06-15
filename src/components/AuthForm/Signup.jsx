import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Alert,  AlertIcon,  Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { useState } from "react";
import useSignUpEmailAndPassword from "../hooks/useSignUpEmailAndPassword";

const Signup = () =>  {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
  }); 

  const [showPasword, setShowPasword] = useState(false);
  const {loading, error, signup} = useSignUpEmailAndPassword();

  return (
    <>
      <Input
        value={inputs.email}
        onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
        placeholder="Email"
        fontSize={14}
        type="email"
        size={"sm"}
      />
      <Input
        value={inputs.username}
        onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
        placeholder="Username"
        fontSize={14}
        type="text"
        size={"sm"}
      />
      <Input
        value={inputs.fullName}
        onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
        placeholder="Full Name"
        fontSize={14}
        type="text"
        size={"sm"}
      />
      <InputGroup>
        <Input
          value={inputs.password}
          onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
          placeholder="Password"
          size={"sm"}
          type={showPasword ? "text" : "password"}
          fontSize={14}
        />
        <InputRightElement h="full">
          <Button
            variant={"ghost"}
            size={"sm"}
            onClick={() => setShowPasword(!showPasword)}
          >
            {showPasword ? <ViewIcon /> : <ViewOffIcon />}
          </Button>
        </InputRightElement>
      </InputGroup>

      {error && error.message && (
        <Alert status='error' fontSize={13} p={2} borderRadius={4}>
          <AlertIcon fontSize={12} />
          {error.message}
        </Alert>
      )} 

      <Button 
      w={"full"} 
      colorScheme="blue" 
      size={"sm"} 
      fontSize={14} 
      onClick={() => 
      signup(inputs)}
      isLoading={loading}
      >
        Sign Up
      </Button>
    </>
  );
}
export default Signup;

