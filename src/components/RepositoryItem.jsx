import React from 'react';
import { View } from 'react-native';
import Text from './Text';

const RepositoryItem = props => (
    <View>
        <Text color={'primary'}>Full name: {props.title}</Text>
        <Text>Description: {props.description}</Text>
        <Text>Language: {props.language}</Text>
        <Text>Stars: {props.stargazersCount}</Text>
        <Text>Forks: {props.forksCount}</Text>
        <Text>Average Rating: {props.ratingAverage}</Text>
        <Text>Reviews: {props.reviewCount}</Text>
    </View>
);

export default RepositoryItem;