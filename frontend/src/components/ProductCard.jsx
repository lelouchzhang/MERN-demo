import {
  Box,
  Button,
  Heading,
  HStack,
  IconButton,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useColorModeValue,
  useDisclosure,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { LiaEdit } from "react-icons/lia";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useProductStore } from "../store/product.js";
import { useState } from "react";

const ProductCard = ({ product }) => {
  const [updatedP, setUpdatedP] = useState(product);

  const toast = useToast();
  const textColor = useColorModeValue("gray.600", "gray.200");
  const bgColor = useColorModeValue("white", "gray.800");
  const { deleteProduct, updateProduct } = useProductStore();
  const handleDeleteP = async (id) => {
    const { success, message } = await deleteProduct(id);
    if (!success) {
      toast({
        title: "Fail to delete product",
        description: message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Product delete successfully",
        description: message,
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  // uodate
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleUpdateP = async (id, updateP) => {
    const { success, message } = await updateProduct(id, updateP);
    if (!success) {
      onClose();
      toast({
        title: "Fail to update product",
        description: message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Product update successfully",
        description: message,
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box
      shadow="lg"
      rounded="lg"
      overflow="hidden"
      transition="all 0.3s"
      _hover={{ shadow: "xl", transform: "translateY(-5px)" }}
      bg={bgColor}
    >
      <Image
        src={product.image}
        alt={product.name}
        h={48}
        w={"full"}
        objectFit={"cover"}
      />
      <Box p={4}>
        <Heading as="h3" size="md" mb={2}>
          {product.name}
        </Heading>
        <Text fontWeight="bold" fontSize="xl" color={textColor} mb={4}>
          ${product.price.toFixed(2)}
        </Text>
        <HStack spacing={2}>
          <IconButton icon={<LiaEdit />} colorScheme="blue" onClick={onOpen} />
          <IconButton
            icon={<RiDeleteBin6Line />}
            colorScheme="red"
            onClick={() => handleDeleteP(product._id)}
          />
        </HStack>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update product info</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={4}>
              <Input
                placeholder="Product Name"
                name="name"
                alt="input your product name here"
                value={updatedP.name}
                onChange={(e) =>
                  setUpdatedP({ ...updatedP, name: e.target.value })
                }
              />
              <Input
                placeholder="Product Price"
                name="price"
                alt="input your product price here"
                value={updatedP.price}
                onChange={(e) =>
                  setUpdatedP({ ...updatedP, price: e.target.value })
                }
              />
              <Input
                placeholder="Product Image URL"
                name="image"
                value={updatedP.image}
                onChange={(e) =>
                  setUpdatedP({ ...updatedP, image: e.target.value })
                }
              />
            </VStack>
          </ModalBody>

          <ModalFooter>
            <HStack spacing={4} w={"full"}>
              <Button
                colorScheme="green"
                w={"full"}
                onClick={() => handleUpdateP(product._id, updatedP)}
              >
                Update Product
              </Button>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
            </HStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default ProductCard;
