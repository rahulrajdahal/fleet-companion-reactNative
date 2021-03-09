import React, { useEffect } from "react";
import { View, Text, TextInput } from "react-native";
import { COLORS, FONTS, SIZES } from "../constants";
import { useForm } from "react-hook-form";

const Input = ({ text, placeholder, style, inputStyle }) => {
  const { handleSubmit, register, errors, setValue } = useForm();
  const onSubmit = (values) => console.log(values);

  useEffect(() => {
    register({ placeholder });
  }, [register]);

  return (
    <View
      style={{
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-between",
        ...style,
      }}
    >
      <Text
        style={{
          fontFamily: "Manrope",
          color: "#0E3150",
          fontSize: 14,
          fontWeight: "600",
          lineHeight: 14,
        }}
      >
        {text}
      </Text>
      <View
        style={{
          width: 327,
          height: 48,
          borderColor: COLORS.success300,
          borderWidth: 0.5,
          borderStyle: "solid",
          borderRadius: SIZES.borderRadius,
          marginTop: 6,
          backgroundColor: "rgba(18, 130, 57, 0.05)",
          alignItems: "center",
          paddingVertical: 16,
          paddingLeft: 16,
          ...inputStyle,
        }}
      >
        <TextInput
          placeholder={placeholder}
          onChangeText={(text) => {
            setValue(placeholder, text);
          }}
          style={{ width: "100%", alignSelf: "center" }}
        />
      </View>
    </View>
  );
};

export default Input;
