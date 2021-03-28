import React, { useState } from "react";
import { StyleSheet, View, Image } from "react-native";
import Signature from "react-native-signature-canvas";
import { DashboardHeader } from "../../components";
import { COLORS } from "../../constants";

const SignatureScreen = ({ navigation }) => {
  const [signature, setSign] = useState(null);

  const handleSignature = (signature) => {
    console.log(signature);
    setSign(signature);
    navigation.navigate("WorkDetails");
  };

  const handleEmpty = () => {
    console.log("Empty");
  };

  const style = `.m-signature-pad--footer
    .button {
      background-color: red;
      color: #FFF;
    }`;
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      <DashboardHeader title="Add a Signature" />
      <View style={styles.preview}>
        {signature ? (
          <Image
            resizeMode={"contain"}
            style={{ width: 335, height: 114 }}
            source={{ uri: signature }}
          />
        ) : null}
      </View>
      <Signature
        onOK={handleSignature}
        onEmpty={handleEmpty}
        descriptionText="Sign"
        clearText="Clear"
        confirmText="Save"
        webStyle={style}
      />
    </View>
  );
};

export default SignatureScreen;

const styles = StyleSheet.create({
  preview: {
    width: 335,
    height: 114,
    backgroundColor: "#F8F8F8",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
    marginBottom: 85,
    alignSelf: "center",
  },
  previewText: {
    color: "#FFF",
    fontSize: 14,
    height: 40,
    lineHeight: 40,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: "#69B2FF",
    width: 120,
    textAlign: "center",
    marginTop: 10,
  },
});
