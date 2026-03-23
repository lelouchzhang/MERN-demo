import {
  Box,
  Button,
  Container,
  Heading,
  Input,
  useColorModeValue,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { useProductStore } from "../store/product.js";

const CreatePage = () => {
  const [newP, setNewP] = useState({
    name: "",
    price: "",
    image: "",
  });
  const { createProduct } = useProductStore();
  const toast = useToast();
  const handleAddP = async () => {
    const { success, message } = await createProduct(newP);
    if (!success) {
      toast({
        title: "Fail to create product",
        description: message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Product created successfully",
        description: message,
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    }
    setNewP({ name: "", price: "", image: "" });
  };
  return (
    <Container maxW={"container.sm"}>
      <VStack spacing={8}>
        <Heading as={"h1"} size={"2xl"} textAlign={"center"} my={8}>
          Create New Project
        </Heading>
        <Box
          w={"full"}
          bg={useColorModeValue("white", "gray.800")}
          p={6}
          rounded={"lg"}
          shadow="md"
        >
          <VStack spacing={4}>
            <Input
              placeholder="Product Name"
              name="name"
              alt="input your product name here"
              value={newP.name}
              onChange={(e) => setNewP({ ...newP, name: e.target.value })}
            />
            <Input
              placeholder="Product Price"
              name="price"
              alt="input your product price here"
              value={newP.price}
              onChange={(e) => setNewP({ ...newP, price: e.target.value })}
            />
            <Input
              placeholder="Product Image URL"
              name="image"
              value={newP.image}
              onChange={(e) => setNewP({ ...newP, image: e.target.value })}
            />
            <Button colorScheme="green" onClick={handleAddP} w={"full"}>
              Add Product
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default CreatePage;
