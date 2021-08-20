import React from 'react';
import { useQuery } from '@apollo/client';
import { ALL_REPOSITORIES } from '../graphql/queries';
import Text from './Text';
import { FlatList, View, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  const { data, error, loading } = useQuery(ALL_REPOSITORIES, {
    fetchPolicy: 'cache-and-network'  
  });
  if (loading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  const repositoryNodes = data
    ? data.repositories.edges.map(edge => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => (
          <RepositoryItem key={item.id} title={item.fullName} description={item.description} language={item.language} forksCount={item.forksCount} stargazersCount={item.stargazersCount} ratingAverage={item.ratingAverage} reviewCount={item.reviewCount} ownerAvatarUrl={item.ownerAvatarUrl}/>
      )}
      keyExtractor={item => item.id}
    />
  );
};

export default RepositoryList;