// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { Alert } from "react-native";
// import Api from "../api/API";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// //EndPoints
// import getEndPoint from "../api/getEndPoint";
// import {
//   STUDENT_FORM_LIST,
//   STUDENT_CREATE_FORM,
//   STUDENT_DELETE_FORM,
//   MANAGER_FORM_LIST,
//   MAINTENANCE_FORM_LIST,
//   MAINTENANCE_STAGE,
// } from "../constant/endpoint";

// //Action
// import { runLoader, stopLoader } from "./process";

// export const fetchFormList = createAsyncThunk(
//   "fetchFormList",
//   async ({ page }, { dispatch }) => {
//     try {
//       dispatch(runLoader());
//       const usertype = await AsyncStorage.getItem("UserType");
//       let response;
//       switch (usertype) {
//         case "student":
//           response = await Api.get(getEndPoint(STUDENT_FORM_LIST, page));
//           break;
//         case "maintenance":
//           response = await Api.get(getEndPoint(STUDENT_FORM_LIST, page));
//           break;
//         case "management":
//           response = await Api.get(getEndPoint(MANAGER_FORM_LIST, page));
//           break;
//       }
//       return response.data;
//     } catch (error) {
//       console.log(error.response.data);
//       if (!err.response)
//         Alert.alert("Alert!", "No Internet Connection", [
//           {
//             text: "Ok",
//           },
//         ]);
//     } finally {
//       dispatch(stopLoader());
//     }
//   }
// );

// export const createForm = createAsyncThunk(
//   "createForm",
//   async ({ title, description, setModalVisible }, { rejectWithValue, dispatch }) => {
//     if (!description) return rejectWithValue("*Description is required");
//     try {
//       setModalVisible(false);
//       dispatch(runLoader());
//       const response = await Api.post(getEndPoint(STUDENT_CREATE_FORM), {
//         title,
//         description,
//       });
//       Alert.alert("", response.data, [
//         {
//           text: "Ok",
//         },
//       ]);
//       dispatch(fetchFormList({ page: 1 }));
//     } catch (error) {
//       console.log(error.response.data);
//       if (!err.response)
//         Alert.alert("Alert!", "No Internet Connection", [
//           {
//             text: "Ok",
//           },
//         ]);
//     } finally {
//       dispatch(stopLoader());
//     }
//   }
// );

// export const deleteForm = createAsyncThunk(
//   "deleteForm",
//   async ({ uuid }, { rejectWithValue, dispatch }) => {
//     try {
//       dispatch(runLoader());
//       const response = await Api.delete(getEndPoint(STUDENT_DELETE_FORM, uuid));
//       dispatch(fetchFormList({ page: 1 }));
//     } catch (error) {
//       console.log(error.response.data);
//       if (!err.response)
//         Alert.alert("Alert!", "No Internet Connection", [
//           {
//             text: "Ok",
//           },
//         ]);
//     } finally {
//       dispatch(stopLoader());
//     }
//   }
// );

// export const updateStage = createAsyncThunk(
//   "updateForm",
//   async ({ stageUuid, stage }, { rejectWithValue, dispatch }) => {
//     try {
//       dispatch(runLoader());
//       const response = await Api.put(
//         getEndPoint(MAINTENANCE_STAGE, stageUuid),
//         {
//           stageNumber: stage,
//         }
//       );
//       dispatch(fetchFormList({ page: 1 }));
//     } catch (error) {
//       console.log(error.response.data);
//       if (!err.response)
//         Alert.alert("Alert!", "No Internet Connection", [
//           {
//             text: "Ok",
//           },
//         ]);
//     } finally {
//       dispatch(stopLoader());
//     }
//   }
// );

// const formSlice = createSlice({
//   name: "processActions",
//   initialState: {
//     formList: null,
//     next: null,
//     error: null,
//   },
//   reducers: {
//     clearError: (state) => {
//       state.error = null;
//     },
//   },
//   extraReducers(builder) {
//     builder
//       //Create Form
//       .addCase(createForm.fulfilled, (state, action) => {
//         state.error = null;
//       })
//       .addCase(createForm.rejected, (state, action) => {
//         state.error = action?.payload;
//       })
//       //Form List
//       .addCase(fetchFormList.fulfilled, (state, action) => {
//         state.formList = action?.payload?.results;
//         state.next = action?.payload?.next;
//       });
//   },
// });

// export const { clearError } = formSlice.actions;
// export default formSlice.reducer;
