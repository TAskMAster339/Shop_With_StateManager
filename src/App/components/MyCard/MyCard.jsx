import React from "react";
import { Card, CardBody, Stack, Heading, Text, Image, Divider, CardFooter, Button, ButtonGroup} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { addNewBought, buyItemWithoutCart } from "../../Reducers";

const MyCard = (props) => {
  const BuyButtonID = "BuyBtn_" + props.id;
  const AddToCartButtonID = "AddToCartBtn_" + props.id;
  
  const dispatch = useDispatch();
  const myMoney = useSelector(state => state.shop.money);
  const fullPrice = useSelector(state => state.shop.full_price);

  function disableButtons(){
    const AddToCartButton = document.getElementById(AddToCartButtonID);
    const BuyButton = document.getElementById(BuyButtonID);

    AddToCartButton.setAttribute('disabled', ' ');
    BuyButton.setAttribute('disabled', ' ');
  }
  function AddToCart(){
    if ((myMoney - props.cost) >= 0 && (myMoney - fullPrice) >= props.cost){
    dispatch(addNewBought({id: props.id, name: props.title, price: props.cost}));
    const AddToCartButton = document.getElementById(AddToCartButtonID);
    disableButtons();
    }
    else{
      console.log('You haven`t got enough money');
    }
  }
  function Buy(){
    if (myMoney - props.cost >= 0 && (myMoney - fullPrice) >= props.cost){
    dispatch(buyItemWithoutCart(props.cost));
    const BuyButton = document.getElementById(BuyButtonID);
    disableButtons();
    }else{
      console.log('You haven`t got enough money');
    }
  }
    return (
        <div>
            <Card maxW='xs' m='10px' minH='600px'>
            <CardBody>
              <Image
                src={props.icon}
                alt='picture'
                borderRadius='lg'
              />
              <Stack mt='6' spacing='3'>
                <Heading size='md'>{props.title}</Heading>
                <Text>
                  {props.body}
                </Text>
                <Text color='blue.600' fontSize='2x1'>
                  {props.cost}$
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing='20'>
                <Button variant='solid' colorScheme='blue' id={BuyButtonID}
                  onClick={Buy}>
                  buy
                </Button>
                <Button variant='ghost' colorScheme='blue' id={AddToCartButtonID}
                  onClick={AddToCart}>
                  Add to cart
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        </div>
    );
};

export default MyCard;
