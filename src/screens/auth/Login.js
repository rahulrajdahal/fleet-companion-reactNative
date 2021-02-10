import React, { useEffect } from "react";
import { View, Text, TextInput, SafeAreaView } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";
import { Logo } from "../../constants/icons";
import { useForm } from "react-hook-form";
import { Input, LargeButton } from "../../components";

const Login = ({ navigation }) => {
  function renderTitle() {
    return (
      <Text
        style={{
          marginTop: 12,
          color: COLORS.primary,
          ...FONTS.h5,
          fontWeight: "bold",
        }}
      >
        Log In
      </Text>
    );
  }

  function renderForm() {
    return (
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          marginTop: 80,
        }}
      >
        <Input text="Username" placeholder="Mr.Driver" />
        <Input
          text="Password"
          placeholder="***************"
          style={{ marginTop: 48 }}
        />
      </View>
    );
  }

  function renderButton() {
    return (
      <>
        <LargeButton
          onPress={() => navigation.navigate("Dashboard")}
          text="LogIn"
          color={COLORS.success}
          textColor={COLORS.white}
          style={{ marginTop: 48 }}
        />

        <LargeButton
          onPress={() => navigation.navigate("ForgotPassword")}
          text="Forgot Password"
          textColor={COLORS.success}
          color={COLORS.white}
          style={{
            marginTop: 32,
            marginBottom: 135,
          }}
        />
      </>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 24,
        backgroundColor: COLORS.white,
      }}
    >
      <Logo style={{ marginTop: 167 }} />

      {renderTitle()}

      {renderForm()}

      {renderButton()}
    </View>
  );
};

export default Login;
