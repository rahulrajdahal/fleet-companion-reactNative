import React, { useEffect } from "react";
import { View, Text, TextInput, SafeAreaView } from "react-native";
import { COLORS, FONTS, SIZES } from "../constants";
import { Logo } from "../constants/icons";
import { useForm } from "react-hook-form";
import { Input } from "../components";

const Login = () => {
  const { handleSubmit, register, errors, setValue } = useForm();
  const onSubmit = (values) => console.log(values);

  useEffect(() => {
    register("Mr.Driver");
  }, [register]);

  function renderTitle() {
    return (
      <View>
        <Text style={{ marginTop: 12, color: COLORS.primary, ...FONTS.h5 }}>
          Log In
        </Text>
      </View>
    );
  }

  function renderForm() {
    return (
      <View
        style={{
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

        {renderForm()}

        {renderButton()}
      </View>
    </SafeAreaView>
  );
};

export default Login;
