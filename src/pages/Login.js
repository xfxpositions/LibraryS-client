import {
  Container,
  FormControl,
  Input,
  Button,
  Box,
  Heading,
  Toast,
  Text,
  Checkbox,
  useToast,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import "../css/clearBox.css";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosUtil from "../utils/axiosUtil";
import { userSet } from "../slice/userSlice";
export default function Login() {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();
  const handleLogin = (e) => {
    const requestBody = {
      username: username,
      password: password,
    };
    (async () => {
      let apiRes = null;
      try {
        apiRes = await axiosUtil.post("/login", requestBody);
      } catch (err) {
        toast({
          title: "Hata",
          description: "Kullanıcı Bulunamadı! + Hata mesajı :" + err.code,
          status: "error",
          duration: 4000,
          isClosable: true,
        });
        console.error("Error response:");
        console.error(err.code); // ***
      } finally {
        dispatch(userSet(apiRes.data.token));
        toast({
          title: "Başarılı",
          description: "Yönlendiriliyorsunuz...",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
        setTimeout(() => {
          navigate("/");
        }, 2500);
        console.log(apiRes);
      }
    })();
  };
  return (
    <Container size="container.sm">
      <Box p="6" className="clearBox" shadow="lg" mt="10" rounded="md">
        <Heading size={"2xl"}>Giriş Yap</Heading>
        <FormControl p="2">
          <Input
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            type="text"
            placeholder="Kullanıcı adı..."
          ></Input>
        </FormControl>
        <FormControl p="2">
          <Input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            placeholder="Şifre..."
          ></Input>
        </FormControl>
        <Checkbox
          value={rememberMe}
          onChange={(e) => {
            setRememberMe(e.target.value);
          }}
        >
          Beni Hatırla
        </Checkbox>
        <hr />

        <Button
          rightIcon={<ArrowForwardIcon />}
          colorScheme="green"
          variant="solid"
          py="6"
          mt="2"
          onClick={handleLogin}
        >
          Giriş Yap
        </Button>
      </Box>
    </Container>
  );
}
