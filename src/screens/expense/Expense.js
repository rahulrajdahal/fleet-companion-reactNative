import React from "react";
import { Image, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Navbar } from "../../components";
import { COLORS, FONTS, images } from "../../constants";
import { ArrowRight } from "../../constants/icons";

const Expense = ({ navigation }) => {
  function renderTitle() {
    return (
      <View>
        <Text
          style={{
            color: COLORS.text800,
            ...FONTS.h6,
            fontWeight: "bold",
            marginTop: 43,
          }}
        >
          Expenses
        </Text>
      </View>
    );
  }

  function renderFuelExpense() {
    return (
      <View
        style={{
          marginTop: 24,
          width: 327,
          height: 124,
          backgroundColor: COLORS.success100,
          borderRadius: 15,
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Image source={images.gasStation} />
          <Text
            style={{
              marginLeft: 16,
              color: COLORS.success,
              width: 101,
              ...FONTS.body2,
              lineHeight: 20,
            }}
          >
            Record Fuel Expense
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("FuelExpense")}
          style={{
            width: 40,
            height: 40,
            backgroundColor: COLORS.success,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 15,
            marginLeft: 46,
          }}
        >
          <ArrowRight />
        </TouchableOpacity>
      </View>
    );
  }

  function renderRecentExpenses() {
    const expenses = [
      { _id: 1, vehicle: "V-0125B", qty: "2.3l", amount: "10.00" },
      { _id: 2, vehicle: "TimmyTruck", qty: "10.5l", amount: "105.00" },
      { _id: 3, vehicle: "A1HG", qty: "3.6l", amount: "36.00" },
      { _id: 4, vehicle: "Trucker12", qty: "15l", amount: "150.00" },
      { _id: 5, vehicle: "Ford Pickup ‘85", qty: "13l", amount: "56.00" },
      { _id: 6, vehicle: "V-0125B", qty: "600ml", amount: "2.00" },
      { _id: 7, vehicle: "A1HG", qty: "3.6l", amount: "36.00" },
      { _id: 8, vehicle: "Trucker12", qty: "15l", amount: "150.00" },
      { _id: 9, vehicle: "Ford Pickup ‘85", qty: "13l", amount: "56.00" },
      { _id: 10, vehicle: "V-0125B", qty: "600ml", amount: "2.00" },
    ];

    return (
      <>
        <Text
          style={{
            color: COLORS.text800,
            ...FONTS.body2,
            fontFamily: "Manrope",
            fontWeight: "bold",
            marginTop: 40,
          }}
        >
          Recent Expenses
        </Text>

        <View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: 20,
              marginBottom: 16,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: 212,
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: COLORS.text500,
                  ...FONTS.caption,
                  fontFamily: "Manrope",
                  fontWeight: "600",
                }}
              >
                VEHICLE
              </Text>

              <Text
                style={{
                  color: COLORS.text500,
                  ...FONTS.caption,
                  fontFamily: "Manrope",
                  fontWeight: "600",
                }}
              >
                QTY
              </Text>
            </View>
            <Text
              style={{
                color: COLORS.text500,
                ...FONTS.caption,
                fontFamily: "Manrope",
                fontWeight: "600",
              }}
            >
              AMOUNT
            </Text>
          </View>

          {expenses.map((expense) => (
            <View
              key={expense._id}
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",

                marginBottom: 12,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: 212,
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    color: COLORS.text800,
                    ...FONTS.body3,
                  }}
                >
                  {expense.vehicle}
                </Text>
                <Text
                  style={{
                    color: COLORS.text800,
                    ...FONTS.body3,
                  }}
                >
                  {expense.qty}
                </Text>
              </View>
              <Text
                style={{
                  color: COLORS.text800,
                  ...FONTS.body3,
                }}
              >
                {expense.amount}
              </Text>
            </View>
          ))}
        </View>
      </>
    );
  }

  return (
    <View
      style={{ flex: 1, backgroundColor: COLORS.white, paddingHorizontal: 24 }}
    >
      <Navbar />

      {/* Title */}
      {renderTitle()}

      {/* Record Fuel Expense Container */}
      {renderFuelExpense()}

      {/* Recent Expenses */}
      {renderRecentExpenses()}
    </View>
  );
};

export default Expense;
