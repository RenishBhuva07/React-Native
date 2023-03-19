import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native';

interface IDashboardProps { }
interface IDashboardState { }

class Dashboard extends Component<IDashboardProps, IDashboardState> {
    constructor(props: IDashboardProps) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            <View style={styles.dashboardContainer}>
                <Text style={styles.dashboardText}>Dashboard</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    dashboardContainer: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    dashboardText: {
        fontSize: 30
    }
})

export default Dashboard;