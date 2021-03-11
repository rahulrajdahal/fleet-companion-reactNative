import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Expense, FuelExpense } from "../screens";

const ExpenseStack = createStackNavigator();

const ExpenseStackScreen = () => {
  return (
    <ExpenseStack.Navigator>
      <ExpenseStack.Screen
        name="Expense"
        component={Expense}
        options={{ headerShown: false }}
      />
      <ExpenseStack.Screen
        name="FuelExpense"
        component={FuelExpense}
        options={{ headerShown: false }}
      />
    </ExpenseStack.Navigator>
  );
};

export default ExpenseStackScreen;
