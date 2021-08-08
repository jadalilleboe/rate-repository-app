import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Text from './Text';

const styles = StyleSheet.create({
    itemContainer: {
        display: 'flex',
        backgroundColor: 'white',
    },
    repoDesc: {
        display: 'flex',
        flexDirection: 'row',
    },
    repoDescText: {
        marginVertical: 10,
        display: 'flex',
        justifyContent: 'space-between',
        width: 250
    },
    repoStats: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap'
    },
    tinyLogo: {
        width: 75,
        height: 75,
        borderRadius: 10,
        margin: 10
    },
    language: {
        padding: 5,
        width: 100,
        textAlign: 'center'
    }
});

const RepositoryStats = ({ label, num }) => {
    let displayNum = '';
    if (num >= 10000) {
        const numString = num.toString();
        displayNum = `${numString.slice(0,2)}.${numString[3]}k`;
    } else if (num >= 1000) {
        const numString = num.toString();
        displayNum = `${numString[0]}.${numString[1]}k`;
    } else {
        displayNum = num;
    }
    return (
        <View style={styles.itemContainer}>
            <Text fontWeight='bold' style={{paddingHorizontal: 7}}>{label}</Text>
            <Text style={{textAlign: 'center', padding: 7}}>{displayNum}</Text>
        </View>
    );
};

const RepositoryItem = props => {
    return (
        <View style={styles.itemContainer}>
            <View style={styles.repoDesc}>
                <Image style={styles.tinyLogo} source={{
                    uri: props.ownerAvatarUrl,
                }}/>
                <View style={styles.repoDescText}>
                    <Text fontWeight='bold'>{props.title}</Text>
                    <View style={{flexDirection: 'row'}}>
                    <Text style={{flex: 1, flexWrap: 'wrap', paddingVertical: 10}}>{props.description}</Text></View>
                    <Text padding='paddingAround' backgroundColor='primary' color='appBar' style={styles.language}>{props.language}</Text>
                </View>
            </View>
            <View style={styles.repoStats}>
                <RepositoryStats label='Stars' num={props.stargazersCount} />
                <RepositoryStats label='Forks' num={props.forksCount} />
                <RepositoryStats label='Avg. Rating' num={props.ratingAverage} />
                <RepositoryStats label='Reviews' num={props.reviewCount} />
            </View>
        </View>
    );
};

export default RepositoryItem;