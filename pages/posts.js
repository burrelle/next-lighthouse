import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Post from '../components/Post';

const ALL_POSTS_QUERY = gql`
  query ALL_ITEMS_QUERY {
    posts {
      id
      title
      content
    }
  }
`;

export default class Posts extends Component {
  render() {
    return (
      <Query query={ALL_POSTS_QUERY}>
        {({ data, error, loading }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error: {error.message}</p>;
          return (
            <div>
              {data.posts.map(({title, content, id}) => (
                <Post title={title} content={content} key={id} />
              ))}
            </div>
          );
        }}
      </Query>
    );
  }
}
