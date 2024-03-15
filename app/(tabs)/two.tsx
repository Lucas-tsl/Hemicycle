import React, { useState, useEffect } from 'react';
import { Modal, View, Text, StyleSheet, Button } from 'react-native';
import { Camera } from 'expo-camera'; // Import de la caméra Expo
import axios from 'axios'; // Import de la bibliothèque Axios pour les requêtes HTTP

const QRCodeScannerScreen = () => {
  // State hooks pour gérer les permissions, l'état du scanner, les données du QR code et les informations du député
  const [hasPermission, setHasPermission] = useState(null);
  const [isScannerVisible, setIsScannerVisible] = useState(false);
  const [scanned, setScanned] = useState(false);
  const [qrData, setQRData] = useState(null);
  const [deputyInfo, setDeputyInfo] = useState(null);

  // Effet pour demander les permissions d'accès à la caméra une fois que le composant est monté
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  // Fonction pour gérer les données du QR code scanné
  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setIsScannerVisible(false); // Fermer le scanner une fois le QR code scanné
    setQRData(data);
    fetchDeputyInfo(data); // Appeler la fonction pour récupérer les informations du député
  };

  // Fonction pour récupérer les informations du député à partir de l'ID
  const fetchDeputyInfo = async (id) => {
    try {
      const response = await axios.get(`https://api.example.com/deputies/${id}`);
      setDeputyInfo(response.data);
    } catch (error) {
      console.error('Error fetching deputy info:', error);
    }
  };

  // Rendu conditionnel en fonction de l'état des permissions
  if (hasPermission === null) {
    return <Text>Demande de permission pour accéder à la caméra...</Text>;
  }
  if (hasPermission === false) {
    return <Text>Accès à la caméra refusé</Text>;
  }

  return (
    <View style={styles.container}>
      {/* Bouton pour ouvrir le scanner QR Code */}
      <Button title="Ouvrir le scanner QR Code" onPress={() => setIsScannerVisible(true)} />
      {/* Modal pour afficher le scanner */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isScannerVisible}
        onRequestClose={() => setIsScannerVisible(false)}>
        <View style={styles.modalView}>
          {/* Caméra pour scanner le QR code */}
          <Camera
            style={styles.camera}
            type={Camera.Constants.Type.back}
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}>
            <View style={styles.cameraContent}>
              {/* Bouton pour scanner à nouveau */}
              {scanned && <Button title="Scanner à nouveau" onPress={() => setScanned(false)} />}
            </View>
          </Camera>
          {/* Bouton pour fermer le scanner */}
          <Button title="Fermer le scanner" onPress={() => setIsScannerVisible(false)} />
        </View>
      </Modal>
      {/* Affichage des données du QR Code */}
      {qrData && (
        <View style={styles.dataContainer}>
          <Text style={styles.text}>Données du QR Code: {qrData}</Text>
          {/* Afficher les informations du député ici */}
        </View>
      )}
    </View>
  );
};

// Styles CSS pour le composant
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  camera: {
    width: 300, // Ajustez selon vos besoins
    height: 300, // Ajustez selon vos besoins
  },
  cameraContent: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  dataContainer: {
    marginTop: 20,
  },
  text: {
    textAlign: 'center',
  },
});

export default QRCodeScannerScreen;
