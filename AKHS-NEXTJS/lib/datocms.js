import { GraphQLClient } from "graphql-request";


export function request({ query, variables, preview }) {
  const endpoint = preview
    ? `https://graphql.datocms.com/preview`
    : `https://graphql.datocms.com/`;
  const client = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`
    }
  });
  return client.request(query, variables);
}



export async function getAll() {
  const HOMEPAGE_QUERY = `query HomePage {
    allStandardPages {
      standardPageTitle
    }
  }`;
  const data = await request({
    query: HOMEPAGE_QUERY
    
  });
  console.log(data) 
  return data;
}