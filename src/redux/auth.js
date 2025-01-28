// //Redux
// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { useDispatch } from "react-redux";

// import { navigate, reset } from "../navigations/navigationRef";

// //API
// import Api from "../api/API";

// import { Alert } from "react-native";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { Keyboard } from "react-native";

// //Action
// import { runLoader, stopLoader } from "./process";

// //EndPoints
// import getEndPoint from "../api/getEndPoint";
// import {
//   STUDENT_SIGNUP,
//   STUDENT_LOGIN,
//   INSTITUTE_PERSONNEL_SIGNUP,
//   INSTITUTE_PERSONNEL_LOGIN,
//   LOGOUT,
//   FORGOT_PASSWORD,
//   CHANGE_PASSWORD,
// } from "../constant/endpoint";

// //Notification
// import { APP_ID, APP_TOKEN } from "../constant/notification";
// import { registerIndieID, unregisterIndieDevice } from "native-notify";

// //Helper
// import { saveToken, checkSignUp, isEmail, isPassword } from "../helper/auth";
// import { convertToShortDateFormatReverse } from "../helper/dateTimeFormats";
// import { getUserId } from "../helper/getUserId";

// //Local login when there is a token in the async storage
// export const localLogin = createAsyncThunk("localLogin", async () => {
//   const accessToken = await AsyncStorage.getItem("AccessToken");
//   const usertype = await AsyncStorage.getItem("UserType");
//   if (accessToken) {
//     switch (usertype) {
//       case "maintenance":
//         reset("MaintenanceDrawer");
//         break;
//       case "management":
//         reset("ManagerDrawer");
//         break;
//       case "student":
//         reset("StudentDrawer");
//         break;
//       default:
//         reset("Login");
//     }
//   } else {
//     const introShown = await AsyncStorage.getItem("IntroShown");
//     if (introShown) reset("Login");
//     else reset("Swiper");
//   }
// });

// export const logout = createAsyncThunk("logout", async () => {
//   Alert.alert("Alert!", "Are you sure you want to log out?", [
//     {
//       text: "Yes",
//       onPress: async () => {
//         const refresh = await AsyncStorage.getItem("RefreshToken");
//         try {
//           const response = await Api.post(getEndPoint(LOGOUT), {
//             refresh,
//           });
//           const userId = await getUserId();
//           const usertype = await AsyncStorage.getItem("UserType");
//           usertype === "management" &&
//             unregisterIndieDevice(userId, APP_ID, APP_TOKEN);
//           console.log(response.data);
//           await AsyncStorage.removeItem("AccessToken");
//           await AsyncStorage.removeItem("RefreshToken");
//           await AsyncStorage.removeItem("UserType");
//           reset("Login");
//         } catch (error) {
//           console.log(err.response.data);
//           if (!err.response)
//             Alert.alert("Alert!", "No Internet Connection", [
//               {
//                 text: "Ok",
//               },
//             ]);
//         }
//       },
//     },
//     {
//       text: "No",
//     },
//   ]);
// });

// export const login = createAsyncThunk(
//   "login",
//   async ({ ...values }, { dispatch, rejectWithValue }) => {
//     const { type, email, password } = values;
//     delete values.type;
//     if (!email) return rejectWithValue("Email can't be blank");
//     if (!password) return rejectWithValue("Password can't be blank");
//     try {
//       let response;
//       dispatch(runLoader());
//       Keyboard.dismiss();
//       switch (type) {
//         case "Students":
//           response = await Api.post(getEndPoint(STUDENT_LOGIN), values);
//           await saveToken(response.data);
//           reset("StudentDrawer");
//           break;
//         case "Institute Personnel":
//           response = await Api.post(
//             getEndPoint(INSTITUTE_PERSONNEL_LOGIN),
//             values
//           );
//           const { usertype } = response.data;
//           await saveToken(response.data);
//           const userId = await getUserId();
//           console.log(userId);
//           if (usertype === "maintenance") reset("MaintenanceDrawer");
//           else {
//             registerIndieID(userId, APP_ID, APP_TOKEN);
//             reset("ManagerDrawer");
//           }
//           break;
//       }
//     } catch (err) {
//       console.log(err.response);
//       if (!err.response)
//         Alert.alert("Alert!", "No Internet Connection", [
//           {
//             text: "Ok",
//           },
//         ]);
//       else console.log(err.response.data);
//       return rejectWithValue(err.response?.data?.password);
//     } finally {
//       dispatch(stopLoader());
//     }
//   }
// );

// export const forgotPassword = createAsyncThunk(
//   "forgotPassword",
//   async ({ email }, { dispatch, rejectWithValue }) => {
//     try {
//       dispatch(runLoader());
//       Keyboard.dismiss();
//       if (!isEmail(email)) return rejectWithValue("Invalid Email");
//       const response = await Api.post(getEndPoint(FORGOT_PASSWORD), {
//         email,
//       });
//       navigate("OTP", { email });
//     } catch (err) {
//       console.log(err.response.data);
//       if (!err.response)
//         Alert.alert("Alert!", "No Internet Connection", [
//           {
//             text: "Ok",
//           },
//         ]);
//       else return rejectWithValue(err.response?.data?.email);
//     } finally {
//       dispatch(stopLoader());
//     }
//   }
// );

// export const verifyOTP = createAsyncThunk(
//   "verifyOTP",
//   async ({ otp, email }, { dispatch, rejectWithValue }) => {
//     otp = otp.join("");
//     if (otp.length !== 4) return rejectWithValue("OTP must be 4 digits.");
//     Keyboard.dismiss();
//     navigate("ResetPassword", { otp, email });
//   }
// );

// export const changePassword = createAsyncThunk(
//   "changePassword",
//   async (
//     { email, otp, password, confirmPassword },
//     { dispatch, rejectWithValue }
//   ) => {
//     if (!isPassword(password)) return rejectWithValue("Invalid Password");
//     else if (password !== confirmPassword)
//       return rejectWithValue("Password does not match.");
//     try {
//       dispatch(runLoader());
//       Keyboard.dismiss();
//       response = await Api.put(getEndPoint(CHANGE_PASSWORD), {
//         email,
//         otp,
//         password,
//         confirmPassword,
//       });
//       reset("Login");
//       Alert.alert("", "Password Changed Successfully. Please Login.", [
//         { text: "OK" },
//       ]);
//     } catch (err) {
//       console.log(err.response.data);
//       if (!err.response)
//         Alert.alert("Alert!", "No Internet Connection", [
//           {
//             text: "Ok",
//           },
//         ]);
//       else {
//         const { otp } = err.response.data;
//         if (otp) return rejectWithValue(otp[0]);
//         else return rejectWithValue("Something went wrong.");
//       }
//     } finally {
//       dispatch(stopLoader());
//     }
//   }
// );

// export const signup = createAsyncThunk(
//   "signup",
//   async ({ ...values }, { dispatch, rejectWithValue }) => {
//     const { type, dateOfBirth } = values;
//     delete values.type;
//     const validation = checkSignUp(values, type);
//     if (!validation?.isVerified) return rejectWithValue(validation?.message);

//     try {
//       dispatch(runLoader());
//       Keyboard.dismiss();
//       let response;
//       switch (type) {
//         case "Students":
//           response = await Api.post(getEndPoint(STUDENT_SIGNUP), {
//             ...values,
//             dateOfBirth: convertToShortDateFormatReverse(dateOfBirth),
//           });
//           await saveToken(response.data);
//           reset("StudentDrawer");
//           break;
//         case "Institute Personnel":
//           response = await Api.post(getEndPoint(INSTITUTE_PERSONNEL_SIGNUP), {
//             ...values,
//             dateOfBirth: convertToShortDateFormatReverse(dateOfBirth),
//             userType: "maintenance",
//           });
//           await saveToken({...response.data, usertype: "maintenance"});
//           reset("MaintenanceDrawer");
//           break;
//       }
//     } catch (err) {
//       if (!err.response)
//         Alert.alert("Alert!", "No Internet Connection", [
//           {
//             text: "Ok",
//           },
//         ]);
//       else {
//         console.log(err.response.data);
//         const { email, mobileNo } = err.response.data || {};
//         if (email) return rejectWithValue(email[0]);
//         else if (mobileNo) return rejectWithValue(mobileNo[0]);
//         else return rejectWithValue("Something went wrong.");
//       }
//     } finally {
//       dispatch(stopLoader());
//     }
//   }
// );

// const authSlice = createSlice({
//   name: "authActions",
//   initialState: { error: null },
//   reducers: {
//     clearError: (state) => {
//       state.error = null;
//     },
//   },
//   extraReducers(builder) {
//     builder
//       //Login
//       .addCase(login.fulfilled, (state, action) => {
//         state.error = null;
//       })
//       .addCase(login.rejected, (state, action) => {
//         state.error = action.payload;
//       })
//       //Forgot Password
//       .addCase(forgotPassword.fulfilled, (state, action) => {
//         state.error = null;
//       })
//       .addCase(forgotPassword.rejected, (state, action) => {
//         state.error = action.payload;
//       })
//       //OTP Verification
//       .addCase(verifyOTP.fulfilled, (state, action) => {
//         state.error = null;
//       })
//       .addCase(verifyOTP.rejected, (state, action) => {
//         state.error = action.payload;
//       })
//       //ChangePassword
//       .addCase(changePassword.fulfilled, (state, action) => {
//         state.error = null;
//       })
//       .addCase(changePassword.rejected, (state, action) => {
//         state.error = action.payload;
//       })
//       //Signup
//       .addCase(signup.fulfilled, (state, action) => {
//         state.error = null;
//       })
//       .addCase(signup.rejected, (state, action) => {
//         state.error = action.payload;
//       });
//   },
// });

// export const { clearError } = authSlice.actions;
// export default authSlice.reducer;
