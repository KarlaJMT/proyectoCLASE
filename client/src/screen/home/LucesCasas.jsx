import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Switch, Card, Icon } from 'react-native-paper';
import { useTheme, MD3Colors } from 'react-native-paper';

export default function LucesCasas() {
  const [recamaraSwitch, setRecamaraSwitch] = React.useState(false);
  const [salaSwitch, setSalaSwitch] = React.useState(false);
  const [banoSwitch, setBanoSwitch] = React.useState(false);
  const [principalSwitch, setPrincipalSwitch] = React.useState(false);
  const [bano2Switch, setBano2Switch] = React.useState(false);

  const theme = useTheme();

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <View style={styles.cardContent}>
          <Icon source="lightbulb-on-outline" color={MD3Colors.primary70} size={30} />
          <Text style={styles.title}>Luces de la Casa</Text>
        </View>

        {/* Recámara */}
        <View style={styles.switchContainer}>
          <Text style={styles.label}>Recámara Invitados</Text>
          <Switch 
            value={recamaraSwitch} 
            onValueChange={() => setRecamaraSwitch(!recamaraSwitch)}
            color={MD3Colors.primary70}
          />
        </View>

        {/* Sala */}
        <View style={styles.switchContainer}>
          <Text style={styles.label}>Sala</Text>
          <Switch 
            value={salaSwitch} 
            onValueChange={() => setSalaSwitch(!salaSwitch)}
            color={MD3Colors.primary70}
          />
        </View>

        {/* Baño Principal */}
        <View style={styles.switchContainer}>
          <Text style={styles.label}>Baño Principal</Text>
          <Switch 
            value={banoSwitch} 
            onValueChange={() => setBanoSwitch(!banoSwitch)}
            color={MD3Colors.primary70}
          />
        </View>

        {/* Principal */}
        <View style={styles.switchContainer}>
          <Text style={styles.label}>Recámara Principal</Text>
          <Switch 
            value={principalSwitch} 
            onValueChange={() => setPrincipalSwitch(!principalSwitch)}
            color={MD3Colors.primary70}
          />
        </View>

        {/* Segundo Baño */}
        <View style={styles.switchContainer}>
          <Text style={styles.label}>Baño Invitados</Text>
          <Switch 
            value={bano2Switch} 
            onValueChange={() => setBano2Switch(!bano2Switch)}
            color={MD3Colors.primary70}
          />
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  card: {
    padding: 16,
    borderRadius: 12,
    backgroundColor: 'white',
    elevation: 3,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
    color: '#333',
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  label: {
    fontSize: 16,
    color: '#555',
  },
});