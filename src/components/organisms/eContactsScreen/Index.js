import React from "react";
import { Alert, FlatList, TouchableOpacity } from "react-native";
import * as Clipboard from "expo-clipboard";
import {
  CategoryContainer,
  CategoryTitle,
  ContactContainer,
  ContactNumber,
  Container,
  OrganizationText,
} from "./Styles";

const contacts = [
  {
    id: "1",
    category: "Suicide and Crisis Lines",
    contacts: [
      { organization: "ROSHNI", number: "+91 4066202000" },
      { organization: "COOJ Foundation", number: "+91 8322252525" },
      { organization: "Sneha Foundation", number: "+91 4424640050" },
      { organization: "Vandrevala Foundation", number: "+1 8602662345" },
      { organization: "Voice That Cares", number: "8448844845" },
    ],
  },
  {
    id: "2",
    category: "Teen Helpline",
    contacts: [
      { organization: "Aware Mental Health", number: "+91 8660388394" },
      { organization: "FRHS India", number: "7590870908" },
    ],
  },
  {
    id: "3",
    category: "Alcohol and Substance Abuse Helpline",
    contacts: [
      { organization: "Aatman Health & Wellness", number: "+91 9818122848" },
      { organization: "Bhumika Foundation Trust", number: "9911330555" },
    ],
  },
  {
    id: "4",
    category: "Domestic and Sexual Violence Helpline",
    contacts: [
      { organization: "Navjyoti India Foundation", number: "+91 8800528880" },
      { organization: "SAMPARC Counseling", number: "+91 2114282055" },
    ],
  },
  {
    id: "5",
    category: "Eating Disorders Helpline",
    contacts: [{ organization: "Freedom with Food", number: "0800456450" }],
  },
  {
    id: "6",
    category: "Sexual Health/ AIDS Helpline",
    contacts: [
      { organization: "ASHA Foundation", number: "23543333" },
      { organization: "HIV Testing and Counseling", number: "011-46037868" },
      { organization: "National AIDS Control", number: "011-43509999" },
    ],
  },
];

const EmergencyContactsScreen = () => {
  const copyToClipboard = (number) => {
    Clipboard.setStringAsync(number);
    Alert.alert(
      "Copied!",
      `The number ${number} has been copied to your clipboard.`
    );
  };

  const renderContact = ({ item }) => (
    <ContactContainer>
      <OrganizationText>{item.organization}</OrganizationText>
      <TouchableOpacity onPress={() => copyToClipboard(item.number)}>
        <ContactNumber>{item.number}</ContactNumber>
      </TouchableOpacity>
    </ContactContainer>
  );

  const renderCategory = ({ item }) => (
    <CategoryContainer>
      <CategoryTitle>{item.category}</CategoryTitle>
      <FlatList
        data={item.contacts}
        renderItem={renderContact}
        keyExtractor={(contact, index) => `${item.id}-${index}`}
      />
    </CategoryContainer>
  );

  return (
    <Container>
      <FlatList
        data={contacts}
        renderItem={renderCategory}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
};

export default EmergencyContactsScreen;
