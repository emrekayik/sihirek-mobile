import React from 'react';
import { Vibration } from 'react-native';
import {
  NativeBaseProvider,
  //useColorMode,
  extendTheme,
  cancelRef,
  AlertDialog,
  CheckIcon,
  StatusBar,
  VStack,
  HStack,
  Center,
  Button,
  Select,
  Icon,
  Text,
  Box,
} from 'native-base';
import { Ionicons } from '@expo/vector-icons';

const config = {
  useSystemColorMode: false,
  initialColorMode: 'light',
};

export const theme = extendTheme({
  config,
  colors: {
    // Add new color
    colors: {
      100: '#2C3333',
      200: '#395B64',
      300: '#A5C9CA',
      400: '#E7F6F2',
      500: '#F0EBE3',
    },
  },
});

export default function App() {
  // Select'lerden seçilen sayıların state'leri :
  let [num3, setNum3] = React.useState();
  let [num5, setNum5] = React.useState();
  let [num7, setNum7] = React.useState();

  // Sonuç state'i :
  let [val, setVal] = React.useState();

  // Sonucu hesaplama fonksiyonu :
  function hesap(uc, bes, yedi) {
    // üçe bölümünden kalanı 70 ile ;
    // Beşe bölümünden kalanı 21 ile ;
    // Yediye bölümünden kalanı 15 ile çarpıyoruz :
    var sayi = 70 * uc + 21 * bes + 15 * yedi;
    //  105 üzerinden modunu alıyoruz :
    sayi %= 105;

    // Değerimizi state'e yansıtıyoruz :
    setVal(sayi);
  }

  // Butona tıklandığında gerçekleşen select kontrolleri :
  function checkSelect() {
    // Eğer select değerleri girilmemişse yapılacaklar :
    if ((num3 == undefined) | (num5 == undefined) | (num7 == undefined)) {
      // Konsola hata metni yazdırıyoruz :
      console.log('hata');

      // Ufaktan bir titreşim veriyoruz :
      Vibration.vibrate([0, 0, 0, 60]);

      // Eğer Butona tıklandığında
      // Select değerlerinden biri bile boşsa
      // Alert dialoğumuzu ekrana yansıtıyoruz.
      setIsOpen(!isOpen);

      // Eğer select değerleri doluysa yapılacaklar :
    } else {
      // Konsola başarı metnini yazdırıyoruz :
      console.log('başarılı');

      // Hesaplama fonksiyonumuzu çağırıyoruz :
      hesap(num3, num5, num7);
    }
  }

  // Alert modalı açık/kapalı kontrol state'i :
  const [isOpen, setIsOpen] = React.useState(false);
  // Kapanırsa state'i değiştiriyoruz :
  const onClose = () => setIsOpen(false);

  return (
    <NativeBaseProvider theme={theme}>
      <AppBar title="SihirEK" />
      <Center
        // _dark={{ bg: 'primary.200' }}_light={{ bg: 'colors.500' }}
        bg="colors.500"
        color="colors.100"
        px={4}
        flex={1}>
        <Box bg="colors.100" p="3" rounded="lg" alignSelf="center" maxW="80">
          <Center>
            <Text fontSize="6xl" color="colors.500">
              {val ? val : "    "}
            </Text>
          </Center>
        </Box>
        <VStack space={2.5}>
          <HStack>
            <Select
              selectedValue={num3}
              minWidth="240"
              accessibilityLabel="Sayının 3 ile bölümünden kalan"
              placeholder="Sayının 3 ile bölümünden kalan"
              _selectedItem={{
                bg: 'teal.600',
                endIcon: <CheckIcon size="5" />,
              }}
              mt={1}
              onValueChange={(itemValue) => setNum3(itemValue)}>
              <Select.Item label="0" value="0" />
              <Select.Item label="1" value="1" />
              <Select.Item label="2" value="2" />
            </Select>
          </HStack>
          <HStack>
            <Select
              selectedValue={num5}
              minWidth="240"
              accessibilityLabel="Sayının 5 ile bölümünden kalan"
              placeholder="Sayının 5 ile bölümünden kalan"
              _selectedItem={{
                bg: 'teal.600',
                endIcon: <CheckIcon size="5" />,
              }}
              mt={1}
              onValueChange={(itemValue) => setNum5(itemValue)}>
              <Select.Item label="0" value="0" />
              <Select.Item label="1" value="1" />
              <Select.Item label="2" value="2" />
              <Select.Item label="3" value="3" />
              <Select.Item label="4" value="4" />
            </Select>
          </HStack>
          <HStack>
            <Select
              selectedValue={num7}
              minWidth="240"
              accessibilityLabel="Sayının 7 ile bölümünden kalan"
              placeholder="Sayının 7 ile bölümünden kalan"
              _selectedItem={{
                bg: 'teal.600',
                endIcon: <CheckIcon size="5" />,
              }}
              mt={1}
              onValueChange={(itemValue) => setNum7(itemValue)}>
              <Select.Item label="0" value="0" />
              <Select.Item label="1" value="1" />
              <Select.Item label="2" value="2" />
              <Select.Item label="3" value="3" />
              <Select.Item label="4" value="4" />
              <Select.Item label="5" value="5" />
              <Select.Item label="6" value="6" />
            </Select>
          </HStack>
          <Button
            onPress={() => checkSelect()}
            //isDisabled={(num3 == undefined) | (num5 == undefined) | (num7 == undefined)}

            bg="colors.100"
            color="color.500"
          >
            Sayıyı Bul
          </Button>
        </VStack>
      </Center>
      <AlertDialog
        leastDestructiveRef={cancelRef}
        isOpen={isOpen}
        onClose={onClose}>
        <AlertDialog.Content>
          <AlertDialog.CloseButton />
          <AlertDialog.Header>Uyarı</AlertDialog.Header>
          <AlertDialog.Body>
            Lütfen Tüm kutuları doldurduğunuza emin olun
          </AlertDialog.Body>
        </AlertDialog.Content>
      </AlertDialog>
      <Footer />
    </NativeBaseProvider>
  );
}
function AppBar(props) {
  // Alert modalı açık/kapalı kontrol state'i :
  const [isOpen, setIsOpen] = React.useState(false);
  // Kapanırsa state'i değiştiriyoruz :
  const onClose = () => setIsOpen(false);
  return (
    <>
      <StatusBar bg="colors.100" barStyle="light-content" />
      <Box safeAreaTop bg="colors.100" />
      <AlertDialog
        leastDestructiveRef={cancelRef}
        isOpen={isOpen}
        onClose={onClose}>
        <AlertDialog.Content>
          <AlertDialog.CloseButton />
          <AlertDialog.Header>Bilgisel</AlertDialog.Header>
          <AlertDialog.Body>
            Aklınızdan 100'den küçük bir sayı tutun ve seçenekleri tuttuğunuz
            sayıya uygun doldurun!
          </AlertDialog.Body>
        </AlertDialog.Content>
      </AlertDialog>
      <HStack
        bg="colors.100"
        px="1"
        py="2"
        justifyContent="space-between"
        alignItems="center"
        w="100%">
        <HStack alignItems="center">
          <Box px="2" />
          <Text color="colors.500" fontSize="20" fontWeight="bold">
            {props.title ? props.title : 'StudioEK'}
          </Text>
        </HStack>
        <HStack>
          <Button variant="ghost" onPress={() => setIsOpen(!isOpen)}>
            <Icon
              name="alert-circle-outline"
              color="colors.500"
              as={Ionicons}
              size="7"
            />
          </Button>

          <Box px="1" />
        </HStack>
        {/*
          // Koyu tema toggle'ı
          <HStack>
            <ToggleDarkMode />
          </HStack>
        */}
      </HStack>
    </>
  );
}
function Footer() {
  return (
    <>
      <HStack
        bg="colors.100"
        alignItems="center"
        safeAreaBottom
        _text={{
          textAlign: 'center',
        }}>
        <Box px="2" />
        <Text color="colors.500">Emre Kayık  © 2022 - v1.0</Text>
      </HStack>
    </>
  );
}

// Karanlık tema butonu
//Şuanlık bu özelliği şutluyorum
/*
function ToggleDarkMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack space={2} alignItems="center">
      <Switch
        isChecked={colorMode === 'light'}
        onToggle={toggleColorMode}
        aria-label={
          colorMode === 'light' ? 'switch to dark mode' : 'switch to light mode'
        }
        onTrackColor="colors.400"
        onThumbColor="colors.100"
        offTrackColor="colors.100"
        offThumbColor="colors.400"
      />
    </HStack>
  );
}
*/
