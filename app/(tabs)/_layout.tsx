import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Link, Tabs } from 'expo-router';
import { Pressable } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons'; // 1. Importer MaterialIcons

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';

// Composant personnalisé TabBarIcon utilisant les icônes FontAwesome
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

// Composant personnalisé TabBarIcon utilisant les icônes MaterialIcons
function TabBarIconMaterial(props: {
  name: React.ComponentProps<typeof MaterialIcons>['name'];
  color: string;
}) {
  return <MaterialIcons size={24} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    // Navigateur d'onglets utilisant Tabs de expo-router
    <Tabs
      screenOptions={{
        // Définition de la couleur active de la barre d'onglets en fonction du schéma de couleurs
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        // Désactiver le rendu statique de l'en-tête sur le web
        // pour éviter une erreur d'hydratation dans React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
      }}>
      {/* Premier écran d'onglet */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'Accueil', // Titre de l'onglet
          // Utilisation de TabBarIcon personnalisé avec l'icône FontAwesome pour cet onglet
          tabBarIcon: ({ color }) => <FontAwesome name="home" size={24} color={color} />,
        }}
      />
      {/* Deuxième écran d'onglet */}
      <Tabs.Screen
        name="two"
        options={{
          title: 'Scan du QR code', // Titre de l'onglet
          // Utilisation de TabBarIconMaterial personnalisé avec l'icône MaterialIcons pour cet onglet
          tabBarIcon: ({ color }) => <TabBarIconMaterial name="qr-code-scanner" color={color} />,
        }}
      />
      {/* Troisième écran d'onglet */}
      <Tabs.Screen
        name="three"
        options={{
          title: 'Paramètres', // Titre de l'onglet
          // Utilisation de TabBarIcon personnalisé avec l'icône FontAwesome pour cet onglet
          tabBarIcon: ({ color }) => <FontAwesome name="cog" size={24} color={color} />,
        }}
      />
    </Tabs>
  );
}
