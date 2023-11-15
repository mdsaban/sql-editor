export const state = () => ({
  savedQueries: [ // This needs to be fetched from backend, hardcoded for this project
    {
      id: 1,
      value: `SELECT * FROM Orders
INNER JOIN Customers ON Orders.CustomerID = Customers.CustomerID
INNER JOIN Employees ON Orders.EmployeeID = Employees.EmployeeID
WHERE Orders.OrderDate BETWEEN '2023-01-01' AND '2023-12-31'
ORDER BY Orders.OrderDate DESC;`,
      name: "Fetch all orders (All time)",
    },
    {
      id: 2,
      value: `SELECT Customers.CustomerID, Customers.CustomerName, Customers.ContactName, Customers.ContactTitle,
WHERE Customers.Country IN ('USA', 'Canada', 'UK', 'Germany', 'France')
GROUP BY Customers.CustomerID
HAVING COUNT(Orders.OrderID) >= 5`,
      name: "Get total signup customers",
    },
    {
      id: 3,
      value: `SELECT * FROM Products
INNER JOIN Suppliers ON Products.SupplierID = Suppliers.SupplierID
WHERE Products.Discontinued = 0
ORDER BY Products.CategoryID, Products.UnitPrice ASC;`,
      name: "All Products list",
    },
  ],
  editorTabs: [
    {
      id: 1,
      value: `SELECT * FROM Orders
INNER JOIN Customers ON Orders.CustomerID = Customers.CustomerID
INNER JOIN Employees ON Orders.EmployeeID = Employees.EmployeeID
WHERE Orders.OrderDate BETWEEN '2023-01-01' AND '2023-12-31'
ORDER BY Orders.OrderDate DESC;`,
      name: "Fetch all orders (All time)",
    },
    {
      id: null,
      value: `SELECT * FROM Accounts`,
      name: 'Untitled'
    }
  ],
  activeTabIndex: 0,
})

export const actions = {
  addNewQuery({ state, commit }, newQuery) {
    if(state.savedQueries.some(item => item.id == newQuery.id)) return
    commit('updateUnsavedQuery', newQuery)
    commit('setModel', {
      model: 'savedQueries',
      data: [...state.savedQueries, newQuery]
    })
  },
  deleteSavedQuery({state, commit}, queryId) {
    if(state.savedQueries.length == 1) return
    let filteredQueries = state.savedQueries.filter(item => item.id != queryId)
    commit('setModel', { model: 'savedQueries', data: filteredQueries })
  },
  updateQueryValue({ state, commit }, newCode) {
    commit('updateQueryValue', newCode)
  },
  openSavedQuery({state, commit}, query) {
    let index = state.editorTabs.findIndex(item => item.id == query.id)
    if(index != -1) return commit('setModel', { model: 'activeTabIndex', data: index })
    commit('setModel', { model: 'editorTabs', data: [ ...state.editorTabs, query ] })
    commit('setModel', { model: 'activeTabIndex', data: state.editorTabs.length - 1 })
  },
  addNewTab({state, commit}) {
    let newTab = { id: null, name: "Untitled", value: "/* Write your query here */"  }
    commit('setModel', { model: 'editorTabs', data: [ ...state.editorTabs, newTab ] })
    commit('setModel', { model: 'activeTabIndex', data: state.editorTabs.length - 1  })
  },
  changeActiveTab({state, commit}, activeTabIndex) {
    commit('setModel', { model: 'activeTabIndex', data: activeTabIndex })
  },
  closeTab({state, commit}, tabIndex){
    commit('closeTab', tabIndex)
  }
}

export const mutations = {
  setModel(state, { model, data }){
    state[model] = data
  },
  closeTab(state, tabIndex) {
    if(state.editorTabs.length == 1) return
    state.editorTabs.splice(tabIndex, 1)
  },
  updateQueryValue(state, code) {
    state.editorTabs[state.activeTabIndex].value = code
  },
  updateUnsavedQuery(state, query) {
    state.editorTabs[state.activeTabIndex] = query
  }
}

export const getters = {
  selectedQuery (state) {
    let activeTab = state.editorTabs[state.activeTabIndex]
    return activeTab
  },

}
