import React from "react";
import { View, Text, Image, SafeAreaView } from "react-native";
import { COLORS, FONTS } from "../constants";
import { Logo } from "../constants/icons";

const Login = () => {
  function renderTitle() {
    return (
      <View>
        <Text style={{ marginTop: 12, color: COLORS.primary, ...FONTS.h5 }}>
          Log In
        </Text>
      </View>
    );
  }

  return (
    <SafeAreaView>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-around",
          marginHorizontal: 24,
        }}
      >
        <Logo style={{ marginTop: 167 }} />

        {renderTitle()}
      </View>
    </SafeAreaView>
  );
};

export default Login;
