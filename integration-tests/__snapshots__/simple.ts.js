exports['generate queries query 1'] = `
query($v1: String!, $v2: String) {
  repository(name: $v1, owner: $v2) {
    createdAt
    forks {
      edges {
        cursor
        node {
          ...f1
        }
      }
    }
  }
}
fragment f1 on Fork {
  name
  number
  __typename
}

`

exports['generate queries recursive type 1'] = `
query {
  recursiveType {
    value
    recurse {
      recurse {
        value
        recurse {
          recurse {
            ...f3
          }
          ...f2
        }
      }
      ...f1
    }
  }
}
fragment f1 on RecursiveType {
  value
  __typename
}
fragment f2 on RecursiveType {
  value
  __typename
}
fragment f3 on RecursiveType {
  value
  __typename
}

`

exports['generate queries recursive type with args 1'] = `
query($v1: [String!]) {
  recursiveType(requiredVal: $v1) {
    value
    recurse {
      recurse {
        value
        recurse {
          recurse {
            ...f3
          }
          ...f2
        }
      }
      ...f1
    }
  }
}
fragment f1 on RecursiveType {
  value
  __typename
}
fragment f2 on RecursiveType {
  value
  __typename
}
fragment f3 on RecursiveType {
  value
  __typename
}

`

exports['generate queries use __name operation name 1'] = `
subscription SomeName {
  user {
    ...f1
  }
}
fragment f1 on User {
  name
  common
  __typename
}

`

exports['generate queries subscriptions 1'] = `
subscription {
  user {
    ...f1
  }
}
fragment f1 on User {
  name
  common
  __typename
}

`

exports['generate queries many 1'] = `
query($v1: String!, $v2: String) {
  repository(name: $v1, owner: $v2) {
    createdAt
    forks {
      edges {
        cursor
        node {
          ...f1
        }
      }
    }
  }
  user {
    ...f2
  }
}
fragment f1 on Fork {
  name
  number
  __typename
}
fragment f2 on User {
  name
  common
  __typename
}

`

exports['generate queries do not fetch falsy fields 1'] = `
subscription {
  user {
    name
  }
}

`

exports['generate queries do not fetch falsy fields with __scalar 1'] = `
subscription {
  user {
    ...f1
  }
}
fragment f1 on User {
  name
  __typename
}

`
