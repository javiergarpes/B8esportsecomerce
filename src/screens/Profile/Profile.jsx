import { View, Text, Image, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import styles from "./Profile.styles";
import { useDispatch, useSelector } from "react-redux";
import { setCameraImage } from "../../features/auth/authSlice";

const Profile = () => {
  const image = useSelector(state => state.auth.imageCamera);
  const dispatch = useDispatch();

  useEffect(() => {
    //console.log(image)
  }, [image]);

  const verifyCameraPermissions = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) {
      return false;
    }
    return true;
  };
  const pickImage = async () => {
    const isCameraoK = await verifyCameraPermissions();
    if (isCameraoK) {
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [9, 16],
        base64: true,
        quality: 0.4,
      });
      if (!result.canceled) {
        setImage("data:" + result.type + ";base64," + result.base64);
        setImage(`data:image/jpeg;base64,${(result.assets[0], base64)}`);
      }
    }
  };
  const confirmImage = () => {
    dispatch(setCameraImage(image));
  };

  return (
    <View style={styles.container}>
      {image ? null : (
        <Image
          source={{
            uri: "https://cdn.autobild.es/sites/navi.axelspringer.es/public/media/image/2016/09/569465-whatsapp-que-tus-contactos-ponen-rana-perfil.jpg?tf=3840x",
          }}
          style={styles.image}
          resizeMode="cover"
        />
      )}
      <Pressable style={styles.cameraButton} onPress={pickImage}>
        <Text>Tomar Foto de Perfil</Text>
      </Pressable>
    </View>
  );
};

export default Profile;
