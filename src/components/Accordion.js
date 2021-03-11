import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { COLORS, FONTS, SIZES } from "../constants";
import { Plus, AddCircle, AddCircleActive } from "../constants/icons";

const Accordion = ({ title, body }) => {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        alignItems: "flex-start",
        marginBottom: expanded ? 24 : 0,
        backgroundColor: expanded ? "rgba(18, 130, 57, 0.05)" : COLORS.white,
        borderRadius: SIZES.borderRadius,
        paddingVertical: 16,
        paddingHorizontal: 17,
        width: 368,
      }}
      onPress={() => setExpanded((expanded) => !expanded)}
    >
      {expanded ? (
        <AddCircleActive />
      ) : (
        <AddCircle style={{ color: COLORS.text600 }} />
      )}

      <View style={{ marginLeft: 6 }}>
        <Text
          style={{
            color: COLORS.text600,
            ...FONTS.body2,
            fontWeight: "600",
            fontFamily: "Manrope",
          }}
        >
          {title}
        </Text>
        {expanded ? (
          <Text
            style={{
              color: COLORS.text600,
              ...FONTS.body3,
              lineHeight: 20,
              marginTop: 8,
              width: 286,
            }}
          >
            {body}
          </Text>
        ) : null}
      </View>
    </TouchableOpacity>
  );
};

export default Accordion;
