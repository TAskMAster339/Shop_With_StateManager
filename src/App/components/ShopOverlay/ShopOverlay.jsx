import React, { useRef } from "react";
import { 
    useDisclosure, 
    Button,
    Input,
    Drawer, 
    DrawerOverlay, 
    DrawerContent, 
    DrawerCloseButton, 
    DrawerHeader, 
    DrawerBody, 
    DrawerFooter } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { buyItemsInCart } from "../../Reducers";

const ShopOverlay = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef();
    const dispatch = useDispatch();
    const boughtID = useSelector(state => state.shop.bought_id);
    const boughtName = useSelector(state => state.shop.bought_name);
    const boughtPrice = useSelector(state => state.shop.bought_price);
    const fullPrice = useSelector(state => state.shop.full_price);

    return (
        <div>
            <Button ref={btnRef} colorScheme='blue'  onClick={onOpen} w='75px' h='75px'>
             Cart
            </Button>
        <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Your shopping cart
            <div className="fullPrice">
                    The full cost is: {fullPrice}$
            </div>
          </DrawerHeader>

          <DrawerBody>
            <div>
            {boughtID.map((id, index) =>
                <div key={id} className="shopList">{index+1}: {boughtPrice[index]}$ {boughtName[index]}.</div>
            )}
            </div>
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={150} onClick={onClose}>
              Close
            </Button>
            <Button colorScheme='blue' 
            onClick={() => {dispatch(buyItemsInCart())}}>Buy</Button>
          </DrawerFooter>
        </DrawerContent>
            </Drawer>
        </div>
    );
};

export default ShopOverlay;
