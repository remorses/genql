import { MapType, Observable } from 'genql-runtime'

export interface Query {
  /** Data under client context */
  viewer: Viewer | null
  __typename: 'Query'
}

export interface Viewer {
  category: Category | null
  categoryList: (Category | null)[] | null
  customer: Customer | null
  customerPagination: CustomerPagination | null
  customerConnection: CustomerConnection | null
  employee: Employee | null
  employeeList: (Employee | null)[] | null
  employeePagination: EmployeePagination | null
  order: Order | null
  orderPagination: OrderPagination | null
  orderConnection: OrderConnection | null
  product: Product | null
  productList: (Product | null)[] | null
  productPagination: ProductPagination | null
  productConnection: ProductConnection | null
  region: Region | null
  regionList: (Region | null)[] | null
  shipper: Shipper | null
  shipperList: (Shipper | null)[] | null
  supplier: Supplier | null
  supplierConnection: SupplierConnection | null
  __typename: 'Viewer'
}

/** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
export type Float = number

/** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
export type String = string

/** The `ID` scalar type represents a unique MongoDB identifier in collection. MongoDB by default use 12-byte ObjectId value (https://docs.mongodb.com/manual/reference/bson-types/#objectid). But MongoDB also may accepts string or integer as correct values for _id field. */
export type MongoID = string

/** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
export type Int = number

export enum SortFindOneCategoryInput {
  _ID_ASC = '_ID_ASC',
  _ID_DESC = '_ID_DESC',
  CATEGORYID_ASC = 'CATEGORYID_ASC',
  CATEGORYID_DESC = 'CATEGORYID_DESC',
  NAME_ASC = 'NAME_ASC',
  NAME_DESC = 'NAME_DESC',
}

export interface Category {
  /** Category unique ID */
  categoryID: Float | null
  name: String | null
  description: String | null
  _id: MongoID
  productConnection: ProductConnection | null
  productList: (Product | null)[] | null
  __typename: 'Category'
}

export enum SortConnectionProductEnum {
  _ID_DESC = '_ID_DESC',
  _ID_ASC = '_ID_ASC',
  PRODUCTID_DESC = 'PRODUCTID_DESC',
  PRODUCTID_ASC = 'PRODUCTID_ASC',
  NAME__SUPPLIERID_DESC = 'NAME__SUPPLIERID_DESC',
  NAME__SUPPLIERID_ASC = 'NAME__SUPPLIERID_ASC',
}

/** A connection to a list of items. */
export interface ProductConnection {
  /** Total object count. */
  count: Int
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** Information to aid in pagination. */
  edges: ProductEdge[]
  __typename: 'ProductConnection'
}

/** Information about pagination in a connection. */
export interface PageInfo {
  /** When paginating forwards, are there more items? */
  hasNextPage: Boolean
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Boolean
  /** When paginating backwards, the cursor to continue. */
  startCursor: String | null
  /** When paginating forwards, the cursor to continue. */
  endCursor: String | null
  __typename: 'PageInfo'
}

/** The `Boolean` scalar type represents `true` or `false`. */
export type Boolean = boolean

/** An edge in a connection. */
export interface ProductEdge {
  /** The item at the end of the edge */
  node: Product
  /** A cursor for use in pagination */
  cursor: String
  __typename: 'ProductEdge'
}

export interface Product {
  /** Unique product id */
  productID: Float | null
  name: String | null
  supplierID: Float | null
  categoryID: Float | null
  quantityPerUnit: String | null
  unitPrice: Float | null
  unitsInStock: Float | null
  unitsOnOrder: Float | null
  reorderLevel: Float | null
  discontinued: Boolean | null
  _id: MongoID
  orderConnection: OrderConnection | null
  orderList: (Order | null)[] | null
  supplier: Supplier | null
  category: Category | null
  __typename: 'Product'
}

export enum SortConnectionOrderEnum {
  _ID_DESC = '_ID_DESC',
  _ID_ASC = '_ID_ASC',
  ORDERID_DESC = 'ORDERID_DESC',
  ORDERID_ASC = 'ORDERID_ASC',
}

/** A connection to a list of items. */
export interface OrderConnection {
  /** Total object count. */
  count: Int
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** Information to aid in pagination. */
  edges: OrderEdge[]
  __typename: 'OrderConnection'
}

/** An edge in a connection. */
export interface OrderEdge {
  /** The item at the end of the edge */
  node: Order
  /** A cursor for use in pagination */
  cursor: String
  __typename: 'OrderEdge'
}

export interface Order {
  /** Order unique ID */
  orderID: Float | null
  customerID: String | null
  employeeID: Float | null
  orderDate: Date | null
  requiredDate: Date | null
  shippedDate: Date | null
  shipVia: Float | null
  freight: Float | null
  shipName: String | null
  shipAddress: CustomerAddress | null
  /** List of ordered products */
  details: (OrderDetails | null)[] | null
  _id: MongoID
  customer: Customer | null
  employee: Employee | null
  shipper: Shipper | null
  __typename: 'Order'
}

export type Date = any

export interface CustomerAddress {
  street: String | null
  city: String | null
  region: String | null
  postalCode: String | null
  country: String | null
  phone: String | null
  __typename: 'CustomerAddress'
}

export interface OrderDetails {
  productID: Float | null
  unitPrice: Float | null
  quantity: Float | null
  discount: Float | null
  product: Product | null
  __typename: 'OrderDetails'
}

export interface Customer {
  /** Customer unique ID */
  customerID: String | null
  companyName: String | null
  contactName: String | null
  contactTitle: String | null
  address: CustomerAddress | null
  _id: MongoID
  orderConnection: OrderConnection | null
  orderList: (Order | null)[] | null
  __typename: 'Customer'
}

export enum SortFindManyOrderInput {
  _ID_ASC = '_ID_ASC',
  _ID_DESC = '_ID_DESC',
  ORDERID_ASC = 'ORDERID_ASC',
  ORDERID_DESC = 'ORDERID_DESC',
  DETAILS_ASC = 'DETAILS_ASC',
  DETAILS_DESC = 'DETAILS_DESC',
}

export interface Employee {
  /** Category unique ID */
  employeeID: Float | null
  lastName: String | null
  firstName: String | null
  title: String | null
  titleOfCourtesy: String | null
  birthDate: Date | null
  hireDate: Date | null
  address: CustomerAddress | null
  notes: String | null
  /** ID of chief */
  reportsTo: Float | null
  /** Attached territory ID from region collection */
  territoryIDs: (Float | null)[] | null
  _id: MongoID
  chief: Employee | null
  subordinates: (Employee | null)[] | null
  orderConnection: OrderConnection | null
  __typename: 'Employee'
}

export enum SortFindManyEmployeeInput {
  _ID_ASC = '_ID_ASC',
  _ID_DESC = '_ID_DESC',
  EMPLOYEEID_ASC = 'EMPLOYEEID_ASC',
  EMPLOYEEID_DESC = 'EMPLOYEEID_DESC',
  TERRITORYIDS_ASC = 'TERRITORYIDS_ASC',
  TERRITORYIDS_DESC = 'TERRITORYIDS_DESC',
  LASTNAME_ASC = 'LASTNAME_ASC',
  LASTNAME_DESC = 'LASTNAME_DESC',
  LASTNAME__FIRSTNAME_ASC = 'LASTNAME__FIRSTNAME_ASC',
  LASTNAME__FIRSTNAME_DESC = 'LASTNAME__FIRSTNAME_DESC',
}

export interface Shipper {
  /** Shipper unique ID */
  shipperID: Float | null
  companyName: String | null
  phone: String | null
  _id: MongoID
  orderConnection: OrderConnection | null
  __typename: 'Shipper'
}

export interface Supplier {
  /** Supplier unique ID */
  supplierID: Float | null
  companyName: String | null
  contactName: String | null
  contactTitle: String | null
  address: CustomerAddress | null
  _id: MongoID
  productConnection: ProductConnection | null
  __typename: 'Supplier'
}

export enum SortFindManyProductInput {
  _ID_ASC = '_ID_ASC',
  _ID_DESC = '_ID_DESC',
  PRODUCTID_ASC = 'PRODUCTID_ASC',
  PRODUCTID_DESC = 'PRODUCTID_DESC',
  UNITPRICE_ASC = 'UNITPRICE_ASC',
  UNITPRICE_DESC = 'UNITPRICE_DESC',
  NAME_ASC = 'NAME_ASC',
  NAME_DESC = 'NAME_DESC',
  NAME__SUPPLIERID_ASC = 'NAME__SUPPLIERID_ASC',
  NAME__SUPPLIERID_DESC = 'NAME__SUPPLIERID_DESC',
}

export enum SortFindManyCategoryInput {
  _ID_ASC = '_ID_ASC',
  _ID_DESC = '_ID_DESC',
  CATEGORYID_ASC = 'CATEGORYID_ASC',
  CATEGORYID_DESC = 'CATEGORYID_DESC',
  NAME_ASC = 'NAME_ASC',
  NAME_DESC = 'NAME_DESC',
}

export enum SortFindOneCustomerInput {
  _ID_ASC = '_ID_ASC',
  _ID_DESC = '_ID_DESC',
  CUSTOMERID_ASC = 'CUSTOMERID_ASC',
  CUSTOMERID_DESC = 'CUSTOMERID_DESC',
  COMPANYNAME_ASC = 'COMPANYNAME_ASC',
  COMPANYNAME_DESC = 'COMPANYNAME_DESC',
}

export enum SortFindManyCustomerInput {
  _ID_ASC = '_ID_ASC',
  _ID_DESC = '_ID_DESC',
  CUSTOMERID_ASC = 'CUSTOMERID_ASC',
  CUSTOMERID_DESC = 'CUSTOMERID_DESC',
  COMPANYNAME_ASC = 'COMPANYNAME_ASC',
  COMPANYNAME_DESC = 'COMPANYNAME_DESC',
}

/** List of items with pagination. */
export interface CustomerPagination {
  /** Total object count. */
  count: Int | null
  /** Array of objects. */
  items: (Customer | null)[] | null
  /** Information to aid in pagination. */
  pageInfo: PaginationInfo
  __typename: 'CustomerPagination'
}

export interface PaginationInfo {
  currentPage: Int
  perPage: Int
  pageCount: Int | null
  itemCount: Int | null
  hasNextPage: Boolean | null
  hasPreviousPage: Boolean | null
  __typename: 'PaginationInfo'
}

export enum SortConnectionCustomerEnum {
  _ID_DESC = '_ID_DESC',
  _ID_ASC = '_ID_ASC',
  CUSTOMERID_DESC = 'CUSTOMERID_DESC',
  CUSTOMERID_ASC = 'CUSTOMERID_ASC',
  COMPANYNAME_DESC = 'COMPANYNAME_DESC',
  COMPANYNAME_ASC = 'COMPANYNAME_ASC',
}

/** A connection to a list of items. */
export interface CustomerConnection {
  /** Total object count. */
  count: Int
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** Information to aid in pagination. */
  edges: CustomerEdge[]
  __typename: 'CustomerConnection'
}

/** An edge in a connection. */
export interface CustomerEdge {
  /** The item at the end of the edge */
  node: Customer
  /** A cursor for use in pagination */
  cursor: String
  __typename: 'CustomerEdge'
}

export enum SortFindOneEmployeeInput {
  _ID_ASC = '_ID_ASC',
  _ID_DESC = '_ID_DESC',
  EMPLOYEEID_ASC = 'EMPLOYEEID_ASC',
  EMPLOYEEID_DESC = 'EMPLOYEEID_DESC',
  TERRITORYIDS_ASC = 'TERRITORYIDS_ASC',
  TERRITORYIDS_DESC = 'TERRITORYIDS_DESC',
  LASTNAME_ASC = 'LASTNAME_ASC',
  LASTNAME_DESC = 'LASTNAME_DESC',
  LASTNAME__FIRSTNAME_ASC = 'LASTNAME__FIRSTNAME_ASC',
  LASTNAME__FIRSTNAME_DESC = 'LASTNAME__FIRSTNAME_DESC',
}

/** List of items with pagination. */
export interface EmployeePagination {
  /** Total object count. */
  count: Int | null
  /** Array of objects. */
  items: (Employee | null)[] | null
  /** Information to aid in pagination. */
  pageInfo: PaginationInfo
  __typename: 'EmployeePagination'
}

export enum SortFindOneOrderInput {
  _ID_ASC = '_ID_ASC',
  _ID_DESC = '_ID_DESC',
  ORDERID_ASC = 'ORDERID_ASC',
  ORDERID_DESC = 'ORDERID_DESC',
  DETAILS_ASC = 'DETAILS_ASC',
  DETAILS_DESC = 'DETAILS_DESC',
}

/** List of items with pagination. */
export interface OrderPagination {
  /** Total object count. */
  count: Int | null
  /** Array of objects. */
  items: (Order | null)[] | null
  /** Information to aid in pagination. */
  pageInfo: PaginationInfo
  __typename: 'OrderPagination'
}

export enum SortFindOneProductInput {
  _ID_ASC = '_ID_ASC',
  _ID_DESC = '_ID_DESC',
  PRODUCTID_ASC = 'PRODUCTID_ASC',
  PRODUCTID_DESC = 'PRODUCTID_DESC',
  UNITPRICE_ASC = 'UNITPRICE_ASC',
  UNITPRICE_DESC = 'UNITPRICE_DESC',
  NAME_ASC = 'NAME_ASC',
  NAME_DESC = 'NAME_DESC',
  NAME__SUPPLIERID_ASC = 'NAME__SUPPLIERID_ASC',
  NAME__SUPPLIERID_DESC = 'NAME__SUPPLIERID_DESC',
}

/** List of items with pagination. */
export interface ProductPagination {
  /** Total object count. */
  count: Int | null
  /** Array of objects. */
  items: (Product | null)[] | null
  /** Information to aid in pagination. */
  pageInfo: PaginationInfo
  __typename: 'ProductPagination'
}

export enum SortFindOneRegionInput {
  _ID_ASC = '_ID_ASC',
  _ID_DESC = '_ID_DESC',
  REGIONID_ASC = 'REGIONID_ASC',
  REGIONID_DESC = 'REGIONID_DESC',
}

export interface Region {
  /** Region unique ID */
  regionID: Float | null
  name: String | null
  territories: (RegionTerritories | null)[] | null
  _id: MongoID
  employees: (Employee | null)[] | null
  __typename: 'Region'
}

export interface RegionTerritories {
  territoryID: Float | null
  name: String | null
  __typename: 'RegionTerritories'
}

export enum SortFindManyRegionInput {
  _ID_ASC = '_ID_ASC',
  _ID_DESC = '_ID_DESC',
  REGIONID_ASC = 'REGIONID_ASC',
  REGIONID_DESC = 'REGIONID_DESC',
}

export enum SortFindOneShipperInput {
  _ID_ASC = '_ID_ASC',
  _ID_DESC = '_ID_DESC',
  SHIPPERID_ASC = 'SHIPPERID_ASC',
  SHIPPERID_DESC = 'SHIPPERID_DESC',
}

export enum SortFindManyShipperInput {
  _ID_ASC = '_ID_ASC',
  _ID_DESC = '_ID_DESC',
  SHIPPERID_ASC = 'SHIPPERID_ASC',
  SHIPPERID_DESC = 'SHIPPERID_DESC',
}

export enum SortFindOneSupplierInput {
  _ID_ASC = '_ID_ASC',
  _ID_DESC = '_ID_DESC',
  SUPPLIERID_ASC = 'SUPPLIERID_ASC',
  SUPPLIERID_DESC = 'SUPPLIERID_DESC',
  COMPANYNAME_ASC = 'COMPANYNAME_ASC',
  COMPANYNAME_DESC = 'COMPANYNAME_DESC',
}

export enum SortConnectionSupplierEnum {
  _ID_DESC = '_ID_DESC',
  _ID_ASC = '_ID_ASC',
  SUPPLIERID_DESC = 'SUPPLIERID_DESC',
  SUPPLIERID_ASC = 'SUPPLIERID_ASC',
  COMPANYNAME_DESC = 'COMPANYNAME_DESC',
  COMPANYNAME_ASC = 'COMPANYNAME_ASC',
}

/** A connection to a list of items. */
export interface SupplierConnection {
  /** Total object count. */
  count: Int
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** Information to aid in pagination. */
  edges: SupplierEdge[]
  __typename: 'SupplierConnection'
}

/** An edge in a connection. */
export interface SupplierEdge {
  /** The item at the end of the edge */
  node: Supplier
  /** A cursor for use in pagination */
  cursor: String
  __typename: 'SupplierEdge'
}

export interface Mutation {
  /** Create one document with mongoose defaults, setters, hooks and validation */
  createProduct: CreateOneProductPayload | null
  /** Update one document: 1) Retrieve one document by findById. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  updateProduct: UpdateByIdProductPayload | null
  /** Remove one document: 1) Remove with hooks via findOneAndRemove. 2) Return removed document. */
  removeProduct: RemoveOneProductPayload | null
  /** Create one document with mongoose defaults, setters, hooks and validation */
  createOrder: CreateOneOrderPayload | null
  /** Update one document: 1) Retrieve one document by findById. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  updateOrder: UpdateByIdOrderPayload | null
  /** Remove one document: 1) Remove with hooks via findOneAndRemove. 2) Return removed document. */
  removeOrder: RemoveOneOrderPayload | null
  /** Update one document: 1) Retrieve one document by findById. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  updateEmployee: UpdateByIdEmployeePayload | null
  /** Remove all data and seed DB from scratch. Anyway data automatically reloaded every 30 minutes. */
  resetData: String | null
  __typename: 'Mutation'
}

export interface CreateOneProductPayload {
  /** Created document ID */
  recordId: MongoID | null
  /** Created document */
  record: Product | null
  query: Query | null
  __typename: 'CreateOneProductPayload'
}

export interface UpdateByIdProductPayload {
  /** Updated document ID */
  recordId: MongoID | null
  /** Updated document */
  record: Product | null
  query: Query | null
  __typename: 'UpdateByIdProductPayload'
}

export enum SortRemoveOneProductInput {
  _ID_ASC = '_ID_ASC',
  _ID_DESC = '_ID_DESC',
  PRODUCTID_ASC = 'PRODUCTID_ASC',
  PRODUCTID_DESC = 'PRODUCTID_DESC',
  UNITPRICE_ASC = 'UNITPRICE_ASC',
  UNITPRICE_DESC = 'UNITPRICE_DESC',
  NAME_ASC = 'NAME_ASC',
  NAME_DESC = 'NAME_DESC',
  NAME__SUPPLIERID_ASC = 'NAME__SUPPLIERID_ASC',
  NAME__SUPPLIERID_DESC = 'NAME__SUPPLIERID_DESC',
}

export interface RemoveOneProductPayload {
  /** Removed document ID */
  recordId: MongoID | null
  /** Removed document */
  record: Product | null
  query: Query | null
  __typename: 'RemoveOneProductPayload'
}

export interface CreateOneOrderPayload {
  /** Created document ID */
  recordId: MongoID | null
  /** Created document */
  record: Order | null
  query: Query | null
  __typename: 'CreateOneOrderPayload'
}

export interface UpdateByIdOrderPayload {
  /** Updated document ID */
  recordId: MongoID | null
  /** Updated document */
  record: Order | null
  query: Query | null
  __typename: 'UpdateByIdOrderPayload'
}

export enum SortRemoveOneOrderInput {
  _ID_ASC = '_ID_ASC',
  _ID_DESC = '_ID_DESC',
  ORDERID_ASC = 'ORDERID_ASC',
  ORDERID_DESC = 'ORDERID_DESC',
  DETAILS_ASC = 'DETAILS_ASC',
  DETAILS_DESC = 'DETAILS_DESC',
}

export interface RemoveOneOrderPayload {
  /** Removed document ID */
  recordId: MongoID | null
  /** Removed document */
  record: Order | null
  query: Query | null
  __typename: 'RemoveOneOrderPayload'
}

export interface UpdateByIdEmployeePayload {
  /** Updated document ID */
  recordId: MongoID | null
  /** Updated document */
  record: Employee | null
  query: Query | null
  __typename: 'UpdateByIdEmployeePayload'
}

export interface Subscription {
  orderCreated: Order | null
  orderUpdated: Order | null
  orderRemoved: MongoID | null
  __typename: 'Subscription'
}

export interface QueryRequest {
  /** Data under client context */
  viewer?: ViewerRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface ViewerRequest {
  category?:
    | [
        {
          /** Filter by fields */
          filter?: FilterFindOneCategoryInput | null
          skip?: Int | null
          sort?: SortFindOneCategoryInput | null
        },
        CategoryRequest,
      ]
    | CategoryRequest
  categoryList?:
    | [
        {
          /** Filter by fields */
          filter?: FilterFindManyCategoryInput | null
          skip?: Int | null
          limit?: Int | null
          sort?: SortFindManyCategoryInput | null
        },
        CategoryRequest,
      ]
    | CategoryRequest
  customer?:
    | [
        {
          /** Filter by fields */
          filter?: FilterFindOneCustomerInput | null
          skip?: Int | null
          sort?: SortFindOneCustomerInput | null
        },
        CustomerRequest,
      ]
    | CustomerRequest
  customerPagination?:
    | [
        {
          /** Page number for displaying */
          page?: Int | null
          perPage?: Int | null
          /** Filter by fields */
          filter?: FilterFindManyCustomerInput | null
          sort?: SortFindManyCustomerInput | null
        },
        CustomerPaginationRequest,
      ]
    | CustomerPaginationRequest
  customerConnection?:
    | [
        {
          /** Forward pagination argument for returning at most first edges */
          first?: Int | null
          /** Forward pagination argument for returning at most first edges */
          after?: String | null
          /** Backward pagination argument for returning at most last edges */
          last?: Int | null
          /** Backward pagination argument for returning at most last edges */
          before?: String | null
          /** Filter by fields */
          filter?: FilterFindManyCustomerInput | null
          /** Sort argument for data ordering */
          sort?: SortConnectionCustomerEnum | null
        },
        CustomerConnectionRequest,
      ]
    | CustomerConnectionRequest
  employee?:
    | [
        {
          /** Filter by fields */
          filter?: FilterFindOneEmployeeInput | null
          skip?: Int | null
          sort?: SortFindOneEmployeeInput | null
        },
        EmployeeRequest,
      ]
    | EmployeeRequest
  employeeList?:
    | [
        {
          /** Filter by fields */
          filter?: FilterFindManyEmployeeInput | null
          skip?: Int | null
          limit?: Int | null
          sort?: SortFindManyEmployeeInput | null
        },
        EmployeeRequest,
      ]
    | EmployeeRequest
  employeePagination?:
    | [
        {
          /** Page number for displaying */
          page?: Int | null
          perPage?: Int | null
          /** Filter by fields */
          filter?: FilterFindManyEmployeeInput | null
          sort?: SortFindManyEmployeeInput | null
        },
        EmployeePaginationRequest,
      ]
    | EmployeePaginationRequest
  order?:
    | [
        {
          /** Filter by fields */
          filter?: FilterFindOneOrderInput | null
          skip?: Int | null
          sort?: SortFindOneOrderInput | null
        },
        OrderRequest,
      ]
    | OrderRequest
  orderPagination?:
    | [
        {
          /** Page number for displaying */
          page?: Int | null
          perPage?: Int | null
          /** Filter by fields */
          filter?: FilterFindManyOrderInput | null
          sort?: SortFindManyOrderInput | null
        },
        OrderPaginationRequest,
      ]
    | OrderPaginationRequest
  orderConnection?:
    | [
        {
          /** Forward pagination argument for returning at most first edges */
          first?: Int | null
          /** Forward pagination argument for returning at most first edges */
          after?: String | null
          /** Backward pagination argument for returning at most last edges */
          last?: Int | null
          /** Backward pagination argument for returning at most last edges */
          before?: String | null
          /** Filter by fields */
          filter?: FilterFindManyOrderInput | null
          /** Sort argument for data ordering */
          sort?: SortConnectionOrderEnum | null
        },
        OrderConnectionRequest,
      ]
    | OrderConnectionRequest
  product?:
    | [
        {
          /** Filter by fields */
          filter?: FilterFindOneProductInput | null
          skip?: Int | null
          sort?: SortFindOneProductInput | null
        },
        ProductRequest,
      ]
    | ProductRequest
  productList?:
    | [
        {
          /** Filter by fields */
          filter?: FilterFindManyProductInput | null
          skip?: Int | null
          limit?: Int | null
          sort?: SortFindManyProductInput | null
        },
        ProductRequest,
      ]
    | ProductRequest
  productPagination?:
    | [
        {
          /** Page number for displaying */
          page?: Int | null
          perPage?: Int | null
          /** Filter by fields */
          filter?: FilterFindManyProductInput | null
          sort?: SortFindManyProductInput | null
        },
        ProductPaginationRequest,
      ]
    | ProductPaginationRequest
  productConnection?:
    | [
        {
          /** Forward pagination argument for returning at most first edges */
          first?: Int | null
          /** Forward pagination argument for returning at most first edges */
          after?: String | null
          /** Backward pagination argument for returning at most last edges */
          last?: Int | null
          /** Backward pagination argument for returning at most last edges */
          before?: String | null
          /** Filter by fields */
          filter?: FilterFindManyProductInput | null
          /** Sort argument for data ordering */
          sort?: SortConnectionProductEnum | null
        },
        ProductConnectionRequest,
      ]
    | ProductConnectionRequest
  region?:
    | [
        {
          /** Filter by fields */
          filter?: FilterFindOneRegionInput | null
          skip?: Int | null
          sort?: SortFindOneRegionInput | null
        },
        RegionRequest,
      ]
    | RegionRequest
  regionList?:
    | [
        {
          /** Filter by fields */
          filter?: FilterFindManyRegionInput | null
          skip?: Int | null
          limit?: Int | null
          sort?: SortFindManyRegionInput | null
        },
        RegionRequest,
      ]
    | RegionRequest
  shipper?:
    | [
        {
          /** Filter by fields */
          filter?: FilterFindOneShipperInput | null
          skip?: Int | null
          sort?: SortFindOneShipperInput | null
        },
        ShipperRequest,
      ]
    | ShipperRequest
  shipperList?:
    | [
        {
          /** Filter by fields */
          filter?: FilterFindManyShipperInput | null
          skip?: Int | null
          limit?: Int | null
          sort?: SortFindManyShipperInput | null
        },
        ShipperRequest,
      ]
    | ShipperRequest
  supplier?:
    | [
        {
          /** Filter by fields */
          filter?: FilterFindOneSupplierInput | null
          skip?: Int | null
          sort?: SortFindOneSupplierInput | null
        },
        SupplierRequest,
      ]
    | SupplierRequest
  supplierConnection?:
    | [
        {
          /** Forward pagination argument for returning at most first edges */
          first?: Int | null
          /** Forward pagination argument for returning at most first edges */
          after?: String | null
          /** Backward pagination argument for returning at most last edges */
          last?: Int | null
          /** Backward pagination argument for returning at most last edges */
          before?: String | null
          /** Filter by fields */
          filter?: FilterFindManySupplierInput | null
          /** Sort argument for data ordering */
          sort?: SortConnectionSupplierEnum | null
        },
        SupplierConnectionRequest,
      ]
    | SupplierConnectionRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface FilterFindOneCategoryInput {
  /** Category unique ID */
  categoryID?: Float | null
  name?: String | null
  description?: String | null
  _id?: MongoID | null
  _ids?: (MongoID | null)[] | null
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: OperatorsFilterFindOneCategoryInput | null
  OR?: FilterFindOneCategoryInput[] | null
  AND?: FilterFindOneCategoryInput[] | null
}

/** For performance reason this type contains only *indexed* fields. */
export interface OperatorsFilterFindOneCategoryInput {
  categoryID?: CategoryIDOperatorsFilterFindOneCategoryInput | null
  name?: NameOperatorsFilterFindOneCategoryInput | null
  _id?: _idOperatorsFilterFindOneCategoryInput | null
}

export interface CategoryIDOperatorsFilterFindOneCategoryInput {
  /** Category unique ID */
  gt?: Float | null
  /** Category unique ID */
  gte?: Float | null
  /** Category unique ID */
  lt?: Float | null
  /** Category unique ID */
  lte?: Float | null
  /** Category unique ID */
  ne?: Float | null
  /** Category unique ID */
  in?: (Float | null)[] | null
  /** Category unique ID */
  nin?: (Float | null)[] | null
}

export interface NameOperatorsFilterFindOneCategoryInput {
  gt?: String | null
  gte?: String | null
  lt?: String | null
  lte?: String | null
  ne?: String | null
  in?: (String | null)[] | null
  nin?: (String | null)[] | null
}

export interface _idOperatorsFilterFindOneCategoryInput {
  gt?: MongoID | null
  gte?: MongoID | null
  lt?: MongoID | null
  lte?: MongoID | null
  ne?: MongoID | null
  in?: (MongoID | null)[] | null
  nin?: (MongoID | null)[] | null
}

export interface CategoryRequest {
  /** Category unique ID */
  categoryID?: boolean | number
  name?: boolean | number
  description?: boolean | number
  _id?: boolean | number
  productConnection?:
    | [
        {
          /** Forward pagination argument for returning at most first edges */
          first?: Int | null
          /** Forward pagination argument for returning at most first edges */
          after?: String | null
          /** Backward pagination argument for returning at most last edges */
          last?: Int | null
          /** Backward pagination argument for returning at most last edges */
          before?: String | null
          /** Sort argument for data ordering */
          sort?: SortConnectionProductEnum | null
        },
        ProductConnectionRequest,
      ]
    | ProductConnectionRequest
  productList?:
    | [{ skip?: Int | null; limit?: Int | null; sort?: SortFindManyProductInput | null }, ProductRequest]
    | ProductRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** A connection to a list of items. */
export interface ProductConnectionRequest {
  /** Total object count. */
  count?: boolean | number
  /** Information to aid in pagination. */
  pageInfo?: PageInfoRequest
  /** Information to aid in pagination. */
  edges?: ProductEdgeRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** Information about pagination in a connection. */
export interface PageInfoRequest {
  /** When paginating forwards, are there more items? */
  hasNextPage?: boolean | number
  /** When paginating backwards, are there more items? */
  hasPreviousPage?: boolean | number
  /** When paginating backwards, the cursor to continue. */
  startCursor?: boolean | number
  /** When paginating forwards, the cursor to continue. */
  endCursor?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** An edge in a connection. */
export interface ProductEdgeRequest {
  /** The item at the end of the edge */
  node?: ProductRequest
  /** A cursor for use in pagination */
  cursor?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface ProductRequest {
  /** Unique product id */
  productID?: boolean | number
  name?: boolean | number
  supplierID?: boolean | number
  categoryID?: boolean | number
  quantityPerUnit?: boolean | number
  unitPrice?: boolean | number
  unitsInStock?: boolean | number
  unitsOnOrder?: boolean | number
  reorderLevel?: boolean | number
  discontinued?: boolean | number
  _id?: boolean | number
  orderConnection?:
    | [
        {
          /** Forward pagination argument for returning at most first edges */
          first?: Int | null
          /** Forward pagination argument for returning at most first edges */
          after?: String | null
          /** Backward pagination argument for returning at most last edges */
          last?: Int | null
          /** Backward pagination argument for returning at most last edges */
          before?: String | null
          /** Sort argument for data ordering */
          sort?: SortConnectionOrderEnum | null
        },
        OrderConnectionRequest,
      ]
    | OrderConnectionRequest
  orderList?: [{ skip?: Int | null; limit?: Int | null; sort?: SortFindManyOrderInput | null }, OrderRequest] | OrderRequest
  supplier?: SupplierRequest
  category?: CategoryRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** A connection to a list of items. */
export interface OrderConnectionRequest {
  /** Total object count. */
  count?: boolean | number
  /** Information to aid in pagination. */
  pageInfo?: PageInfoRequest
  /** Information to aid in pagination. */
  edges?: OrderEdgeRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** An edge in a connection. */
export interface OrderEdgeRequest {
  /** The item at the end of the edge */
  node?: OrderRequest
  /** A cursor for use in pagination */
  cursor?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface OrderRequest {
  /** Order unique ID */
  orderID?: boolean | number
  customerID?: boolean | number
  employeeID?: boolean | number
  orderDate?: boolean | number
  requiredDate?: boolean | number
  shippedDate?: boolean | number
  shipVia?: boolean | number
  freight?: boolean | number
  shipName?: boolean | number
  shipAddress?: CustomerAddressRequest
  /** List of ordered products */
  details?: OrderDetailsRequest
  _id?: boolean | number
  customer?: CustomerRequest
  employee?: EmployeeRequest
  shipper?: ShipperRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface CustomerAddressRequest {
  street?: boolean | number
  city?: boolean | number
  region?: boolean | number
  postalCode?: boolean | number
  country?: boolean | number
  phone?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface OrderDetailsRequest {
  productID?: boolean | number
  unitPrice?: boolean | number
  quantity?: boolean | number
  discount?: boolean | number
  product?: ProductRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface CustomerRequest {
  /** Customer unique ID */
  customerID?: boolean | number
  companyName?: boolean | number
  contactName?: boolean | number
  contactTitle?: boolean | number
  address?: CustomerAddressRequest
  _id?: boolean | number
  orderConnection?:
    | [
        {
          /** Forward pagination argument for returning at most first edges */
          first?: Int | null
          /** Forward pagination argument for returning at most first edges */
          after?: String | null
          /** Backward pagination argument for returning at most last edges */
          last?: Int | null
          /** Backward pagination argument for returning at most last edges */
          before?: String | null
          /** Sort argument for data ordering */
          sort?: SortConnectionOrderEnum | null
        },
        OrderConnectionRequest,
      ]
    | OrderConnectionRequest
  orderList?: [{ skip?: Int | null; limit?: Int | null; sort?: SortFindManyOrderInput | null }, OrderRequest] | OrderRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface EmployeeRequest {
  /** Category unique ID */
  employeeID?: boolean | number
  lastName?: boolean | number
  firstName?: boolean | number
  title?: boolean | number
  titleOfCourtesy?: boolean | number
  birthDate?: boolean | number
  hireDate?: boolean | number
  address?: CustomerAddressRequest
  notes?: boolean | number
  /** ID of chief */
  reportsTo?: boolean | number
  /** Attached territory ID from region collection */
  territoryIDs?: boolean | number
  _id?: boolean | number
  chief?: EmployeeRequest
  subordinates?:
    | [{ skip?: Int | null; limit?: Int | null; sort?: SortFindManyEmployeeInput | null }, EmployeeRequest]
    | EmployeeRequest
  orderConnection?:
    | [
        {
          /** Forward pagination argument for returning at most first edges */
          first?: Int | null
          /** Forward pagination argument for returning at most first edges */
          after?: String | null
          /** Backward pagination argument for returning at most last edges */
          last?: Int | null
          /** Backward pagination argument for returning at most last edges */
          before?: String | null
          /** Sort argument for data ordering */
          sort?: SortConnectionOrderEnum | null
        },
        OrderConnectionRequest,
      ]
    | OrderConnectionRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface ShipperRequest {
  /** Shipper unique ID */
  shipperID?: boolean | number
  companyName?: boolean | number
  phone?: boolean | number
  _id?: boolean | number
  orderConnection?:
    | [
        {
          /** Forward pagination argument for returning at most first edges */
          first?: Int | null
          /** Forward pagination argument for returning at most first edges */
          after?: String | null
          /** Backward pagination argument for returning at most last edges */
          last?: Int | null
          /** Backward pagination argument for returning at most last edges */
          before?: String | null
          /** Sort argument for data ordering */
          sort?: SortConnectionOrderEnum | null
        },
        OrderConnectionRequest,
      ]
    | OrderConnectionRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface SupplierRequest {
  /** Supplier unique ID */
  supplierID?: boolean | number
  companyName?: boolean | number
  contactName?: boolean | number
  contactTitle?: boolean | number
  address?: CustomerAddressRequest
  _id?: boolean | number
  productConnection?:
    | [
        {
          /** Forward pagination argument for returning at most first edges */
          first?: Int | null
          /** Forward pagination argument for returning at most first edges */
          after?: String | null
          /** Backward pagination argument for returning at most last edges */
          last?: Int | null
          /** Backward pagination argument for returning at most last edges */
          before?: String | null
          /** Sort argument for data ordering */
          sort?: SortConnectionProductEnum | null
        },
        ProductConnectionRequest,
      ]
    | ProductConnectionRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface FilterFindManyCategoryInput {
  /** Category unique ID */
  categoryID?: Float | null
  name?: String | null
  description?: String | null
  _id?: MongoID | null
  _ids?: (MongoID | null)[] | null
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: OperatorsFilterFindManyCategoryInput | null
  OR?: FilterFindManyCategoryInput[] | null
  AND?: FilterFindManyCategoryInput[] | null
}

/** For performance reason this type contains only *indexed* fields. */
export interface OperatorsFilterFindManyCategoryInput {
  categoryID?: CategoryIDOperatorsFilterFindManyCategoryInput | null
  name?: NameOperatorsFilterFindManyCategoryInput | null
  _id?: _idOperatorsFilterFindManyCategoryInput | null
}

export interface CategoryIDOperatorsFilterFindManyCategoryInput {
  /** Category unique ID */
  gt?: Float | null
  /** Category unique ID */
  gte?: Float | null
  /** Category unique ID */
  lt?: Float | null
  /** Category unique ID */
  lte?: Float | null
  /** Category unique ID */
  ne?: Float | null
  /** Category unique ID */
  in?: (Float | null)[] | null
  /** Category unique ID */
  nin?: (Float | null)[] | null
}

export interface NameOperatorsFilterFindManyCategoryInput {
  gt?: String | null
  gte?: String | null
  lt?: String | null
  lte?: String | null
  ne?: String | null
  in?: (String | null)[] | null
  nin?: (String | null)[] | null
}

export interface _idOperatorsFilterFindManyCategoryInput {
  gt?: MongoID | null
  gte?: MongoID | null
  lt?: MongoID | null
  lte?: MongoID | null
  ne?: MongoID | null
  in?: (MongoID | null)[] | null
  nin?: (MongoID | null)[] | null
}

export interface FilterFindOneCustomerInput {
  /** Customer unique ID */
  customerID?: String | null
  companyName?: String | null
  contactName?: String | null
  contactTitle?: String | null
  address?: CustomerAddressInput | null
  _id?: MongoID | null
  _ids?: (MongoID | null)[] | null
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: OperatorsFilterFindOneCustomerInput | null
  OR?: FilterFindOneCustomerInput[] | null
  AND?: FilterFindOneCustomerInput[] | null
}

export interface CustomerAddressInput {
  street?: String | null
  city?: String | null
  region?: String | null
  postalCode?: String | null
  country?: String | null
  phone?: String | null
}

/** For performance reason this type contains only *indexed* fields. */
export interface OperatorsFilterFindOneCustomerInput {
  customerID?: CustomerIDOperatorsFilterFindOneCustomerInput | null
  companyName?: CompanyNameOperatorsFilterFindOneCustomerInput | null
  _id?: _idOperatorsFilterFindOneCustomerInput | null
}

export interface CustomerIDOperatorsFilterFindOneCustomerInput {
  /** Customer unique ID */
  gt?: String | null
  /** Customer unique ID */
  gte?: String | null
  /** Customer unique ID */
  lt?: String | null
  /** Customer unique ID */
  lte?: String | null
  /** Customer unique ID */
  ne?: String | null
  /** Customer unique ID */
  in?: (String | null)[] | null
  /** Customer unique ID */
  nin?: (String | null)[] | null
}

export interface CompanyNameOperatorsFilterFindOneCustomerInput {
  gt?: String | null
  gte?: String | null
  lt?: String | null
  lte?: String | null
  ne?: String | null
  in?: (String | null)[] | null
  nin?: (String | null)[] | null
}

export interface _idOperatorsFilterFindOneCustomerInput {
  gt?: MongoID | null
  gte?: MongoID | null
  lt?: MongoID | null
  lte?: MongoID | null
  ne?: MongoID | null
  in?: (MongoID | null)[] | null
  nin?: (MongoID | null)[] | null
}

export interface FilterFindManyCustomerInput {
  /** Customer unique ID */
  customerID?: String | null
  companyName?: String | null
  contactName?: String | null
  contactTitle?: String | null
  address?: CustomerAddressInput | null
  _id?: MongoID | null
  _ids?: (MongoID | null)[] | null
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: OperatorsFilterFindManyCustomerInput | null
  OR?: FilterFindManyCustomerInput[] | null
  AND?: FilterFindManyCustomerInput[] | null
}

/** For performance reason this type contains only *indexed* fields. */
export interface OperatorsFilterFindManyCustomerInput {
  customerID?: CustomerIDOperatorsFilterFindManyCustomerInput | null
  companyName?: CompanyNameOperatorsFilterFindManyCustomerInput | null
  _id?: _idOperatorsFilterFindManyCustomerInput | null
}

export interface CustomerIDOperatorsFilterFindManyCustomerInput {
  /** Customer unique ID */
  gt?: String | null
  /** Customer unique ID */
  gte?: String | null
  /** Customer unique ID */
  lt?: String | null
  /** Customer unique ID */
  lte?: String | null
  /** Customer unique ID */
  ne?: String | null
  /** Customer unique ID */
  in?: (String | null)[] | null
  /** Customer unique ID */
  nin?: (String | null)[] | null
}

export interface CompanyNameOperatorsFilterFindManyCustomerInput {
  gt?: String | null
  gte?: String | null
  lt?: String | null
  lte?: String | null
  ne?: String | null
  in?: (String | null)[] | null
  nin?: (String | null)[] | null
}

export interface _idOperatorsFilterFindManyCustomerInput {
  gt?: MongoID | null
  gte?: MongoID | null
  lt?: MongoID | null
  lte?: MongoID | null
  ne?: MongoID | null
  in?: (MongoID | null)[] | null
  nin?: (MongoID | null)[] | null
}

/** List of items with pagination. */
export interface CustomerPaginationRequest {
  /** Total object count. */
  count?: boolean | number
  /** Array of objects. */
  items?: CustomerRequest
  /** Information to aid in pagination. */
  pageInfo?: PaginationInfoRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface PaginationInfoRequest {
  currentPage?: boolean | number
  perPage?: boolean | number
  pageCount?: boolean | number
  itemCount?: boolean | number
  hasNextPage?: boolean | number
  hasPreviousPage?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** A connection to a list of items. */
export interface CustomerConnectionRequest {
  /** Total object count. */
  count?: boolean | number
  /** Information to aid in pagination. */
  pageInfo?: PageInfoRequest
  /** Information to aid in pagination. */
  edges?: CustomerEdgeRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** An edge in a connection. */
export interface CustomerEdgeRequest {
  /** The item at the end of the edge */
  node?: CustomerRequest
  /** A cursor for use in pagination */
  cursor?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface FilterFindOneEmployeeInput {
  /** Category unique ID */
  employeeID?: Float | null
  lastName?: String | null
  firstName?: String | null
  title?: String | null
  titleOfCourtesy?: String | null
  birthDate?: Date | null
  hireDate?: Date | null
  address?: CustomerAddressInput | null
  notes?: String | null
  /** ID of chief */
  reportsTo?: Float | null
  /** Attached territory ID from region collection */
  territoryIDs?: (Float | null)[] | null
  _id?: MongoID | null
  _ids?: (MongoID | null)[] | null
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: OperatorsFilterFindOneEmployeeInput | null
  OR?: FilterFindOneEmployeeInput[] | null
  AND?: FilterFindOneEmployeeInput[] | null
}

/** For performance reason this type contains only *indexed* fields. */
export interface OperatorsFilterFindOneEmployeeInput {
  employeeID?: EmployeeIDOperatorsFilterFindOneEmployeeInput | null
  lastName?: LastNameOperatorsFilterFindOneEmployeeInput | null
  territoryIDs?: TerritoryIDsOperatorsFilterFindOneEmployeeInput | null
  _id?: _idOperatorsFilterFindOneEmployeeInput | null
}

export interface EmployeeIDOperatorsFilterFindOneEmployeeInput {
  /** Category unique ID */
  gt?: Float | null
  /** Category unique ID */
  gte?: Float | null
  /** Category unique ID */
  lt?: Float | null
  /** Category unique ID */
  lte?: Float | null
  /** Category unique ID */
  ne?: Float | null
  /** Category unique ID */
  in?: (Float | null)[] | null
  /** Category unique ID */
  nin?: (Float | null)[] | null
}

export interface LastNameOperatorsFilterFindOneEmployeeInput {
  gt?: String | null
  gte?: String | null
  lt?: String | null
  lte?: String | null
  ne?: String | null
  in?: (String | null)[] | null
  nin?: (String | null)[] | null
}

export interface TerritoryIDsOperatorsFilterFindOneEmployeeInput {
  /** Attached territory ID from region collection */
  gt?: Float | null
  /** Attached territory ID from region collection */
  gte?: Float | null
  /** Attached territory ID from region collection */
  lt?: Float | null
  /** Attached territory ID from region collection */
  lte?: Float | null
  /** Attached territory ID from region collection */
  ne?: Float | null
  /** Attached territory ID from region collection */
  in?: (Float | null)[] | null
  /** Attached territory ID from region collection */
  nin?: (Float | null)[] | null
}

export interface _idOperatorsFilterFindOneEmployeeInput {
  gt?: MongoID | null
  gte?: MongoID | null
  lt?: MongoID | null
  lte?: MongoID | null
  ne?: MongoID | null
  in?: (MongoID | null)[] | null
  nin?: (MongoID | null)[] | null
}

export interface FilterFindManyEmployeeInput {
  /** Category unique ID */
  employeeID?: Float | null
  lastName?: String | null
  firstName?: String | null
  title?: String | null
  titleOfCourtesy?: String | null
  birthDate?: Date | null
  hireDate?: Date | null
  address?: CustomerAddressInput | null
  notes?: String | null
  /** ID of chief */
  reportsTo?: Float | null
  /** Attached territory ID from region collection */
  territoryIDs?: (Float | null)[] | null
  _id?: MongoID | null
  _ids?: (MongoID | null)[] | null
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: OperatorsFilterFindManyEmployeeInput | null
  OR?: FilterFindManyEmployeeInput[] | null
  AND?: FilterFindManyEmployeeInput[] | null
  /** Fulltext search with mongodb stemming and weights */
  fullTextSearch?: String | null
}

/** For performance reason this type contains only *indexed* fields. */
export interface OperatorsFilterFindManyEmployeeInput {
  employeeID?: EmployeeIDOperatorsFilterFindManyEmployeeInput | null
  lastName?: LastNameOperatorsFilterFindManyEmployeeInput | null
  territoryIDs?: TerritoryIDsOperatorsFilterFindManyEmployeeInput | null
  _id?: _idOperatorsFilterFindManyEmployeeInput | null
}

export interface EmployeeIDOperatorsFilterFindManyEmployeeInput {
  /** Category unique ID */
  gt?: Float | null
  /** Category unique ID */
  gte?: Float | null
  /** Category unique ID */
  lt?: Float | null
  /** Category unique ID */
  lte?: Float | null
  /** Category unique ID */
  ne?: Float | null
  /** Category unique ID */
  in?: (Float | null)[] | null
  /** Category unique ID */
  nin?: (Float | null)[] | null
}

export interface LastNameOperatorsFilterFindManyEmployeeInput {
  gt?: String | null
  gte?: String | null
  lt?: String | null
  lte?: String | null
  ne?: String | null
  in?: (String | null)[] | null
  nin?: (String | null)[] | null
}

export interface TerritoryIDsOperatorsFilterFindManyEmployeeInput {
  /** Attached territory ID from region collection */
  gt?: Float | null
  /** Attached territory ID from region collection */
  gte?: Float | null
  /** Attached territory ID from region collection */
  lt?: Float | null
  /** Attached territory ID from region collection */
  lte?: Float | null
  /** Attached territory ID from region collection */
  ne?: Float | null
  /** Attached territory ID from region collection */
  in?: (Float | null)[] | null
  /** Attached territory ID from region collection */
  nin?: (Float | null)[] | null
}

export interface _idOperatorsFilterFindManyEmployeeInput {
  gt?: MongoID | null
  gte?: MongoID | null
  lt?: MongoID | null
  lte?: MongoID | null
  ne?: MongoID | null
  in?: (MongoID | null)[] | null
  nin?: (MongoID | null)[] | null
}

/** List of items with pagination. */
export interface EmployeePaginationRequest {
  /** Total object count. */
  count?: boolean | number
  /** Array of objects. */
  items?: EmployeeRequest
  /** Information to aid in pagination. */
  pageInfo?: PaginationInfoRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface FilterFindOneOrderInput {
  /** Order unique ID */
  orderID?: Float | null
  customerID?: String | null
  employeeID?: Float | null
  orderDate?: Date | null
  requiredDate?: Date | null
  shippedDate?: Date | null
  shipVia?: Float | null
  freight?: Float | null
  shipName?: String | null
  shipAddress?: CustomerAddressInput | null
  /** List of ordered products */
  details?: (OrderDetailsInput | null)[] | null
  _id?: MongoID | null
  _ids?: (MongoID | null)[] | null
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: OperatorsFilterFindOneOrderInput | null
  OR?: FilterFindOneOrderInput[] | null
  AND?: FilterFindOneOrderInput[] | null
}

export interface OrderDetailsInput {
  productID?: Float | null
  unitPrice?: Float | null
  quantity?: Float | null
  discount?: Float | null
}

/** For performance reason this type contains only *indexed* fields. */
export interface OperatorsFilterFindOneOrderInput {
  orderID?: OrderIDOperatorsFilterFindOneOrderInput | null
  details?: DetailsOperatorsFilterFindOneOrderInput | null
  _id?: _idOperatorsFilterFindOneOrderInput | null
}

export interface OrderIDOperatorsFilterFindOneOrderInput {
  /** Order unique ID */
  gt?: Float | null
  /** Order unique ID */
  gte?: Float | null
  /** Order unique ID */
  lt?: Float | null
  /** Order unique ID */
  lte?: Float | null
  /** Order unique ID */
  ne?: Float | null
  /** Order unique ID */
  in?: (Float | null)[] | null
  /** Order unique ID */
  nin?: (Float | null)[] | null
}

export interface DetailsOperatorsFilterFindOneOrderInput {
  /** List of ordered products */
  gt?: OrderDetailsInput | null
  /** List of ordered products */
  gte?: OrderDetailsInput | null
  /** List of ordered products */
  lt?: OrderDetailsInput | null
  /** List of ordered products */
  lte?: OrderDetailsInput | null
  /** List of ordered products */
  ne?: OrderDetailsInput | null
  /** List of ordered products */
  in?: (OrderDetailsInput | null)[] | null
  /** List of ordered products */
  nin?: (OrderDetailsInput | null)[] | null
}

export interface _idOperatorsFilterFindOneOrderInput {
  gt?: MongoID | null
  gte?: MongoID | null
  lt?: MongoID | null
  lte?: MongoID | null
  ne?: MongoID | null
  in?: (MongoID | null)[] | null
  nin?: (MongoID | null)[] | null
}

export interface FilterFindManyOrderInput {
  /** Order unique ID */
  orderID?: Float | null
  customerID?: String | null
  employeeID?: Float | null
  orderDate?: Date | null
  requiredDate?: Date | null
  shippedDate?: Date | null
  shipVia?: Float | null
  freight?: Float | null
  shipName?: String | null
  shipAddress?: CustomerAddressInput | null
  /** List of ordered products */
  details?: (OrderDetailsInput | null)[] | null
  _id?: MongoID | null
  _ids?: (MongoID | null)[] | null
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: OperatorsFilterFindManyOrderInput | null
  OR?: FilterFindManyOrderInput[] | null
  AND?: FilterFindManyOrderInput[] | null
}

/** For performance reason this type contains only *indexed* fields. */
export interface OperatorsFilterFindManyOrderInput {
  orderID?: OrderIDOperatorsFilterFindManyOrderInput | null
  details?: DetailsOperatorsFilterFindManyOrderInput | null
  _id?: _idOperatorsFilterFindManyOrderInput | null
}

export interface OrderIDOperatorsFilterFindManyOrderInput {
  /** Order unique ID */
  gt?: Float | null
  /** Order unique ID */
  gte?: Float | null
  /** Order unique ID */
  lt?: Float | null
  /** Order unique ID */
  lte?: Float | null
  /** Order unique ID */
  ne?: Float | null
  /** Order unique ID */
  in?: (Float | null)[] | null
  /** Order unique ID */
  nin?: (Float | null)[] | null
}

export interface DetailsOperatorsFilterFindManyOrderInput {
  /** List of ordered products */
  gt?: OrderDetailsInput | null
  /** List of ordered products */
  gte?: OrderDetailsInput | null
  /** List of ordered products */
  lt?: OrderDetailsInput | null
  /** List of ordered products */
  lte?: OrderDetailsInput | null
  /** List of ordered products */
  ne?: OrderDetailsInput | null
  /** List of ordered products */
  in?: (OrderDetailsInput | null)[] | null
  /** List of ordered products */
  nin?: (OrderDetailsInput | null)[] | null
}

export interface _idOperatorsFilterFindManyOrderInput {
  gt?: MongoID | null
  gte?: MongoID | null
  lt?: MongoID | null
  lte?: MongoID | null
  ne?: MongoID | null
  in?: (MongoID | null)[] | null
  nin?: (MongoID | null)[] | null
}

/** List of items with pagination. */
export interface OrderPaginationRequest {
  /** Total object count. */
  count?: boolean | number
  /** Array of objects. */
  items?: OrderRequest
  /** Information to aid in pagination. */
  pageInfo?: PaginationInfoRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface FilterFindOneProductInput {
  /** Unique product id */
  productID?: Float | null
  name?: String | null
  supplierID?: Float | null
  categoryID?: Float | null
  quantityPerUnit?: String | null
  unitPrice?: Float | null
  unitsInStock?: Float | null
  unitsOnOrder?: Float | null
  reorderLevel?: Float | null
  discontinued?: Boolean | null
  _id?: MongoID | null
  _ids?: (MongoID | null)[] | null
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: OperatorsFilterFindOneProductInput | null
  OR?: FilterFindOneProductInput[] | null
  AND?: FilterFindOneProductInput[] | null
}

/** For performance reason this type contains only *indexed* fields. */
export interface OperatorsFilterFindOneProductInput {
  productID?: ProductIDOperatorsFilterFindOneProductInput | null
  name?: NameOperatorsFilterFindOneProductInput | null
  unitPrice?: UnitPriceOperatorsFilterFindOneProductInput | null
  _id?: _idOperatorsFilterFindOneProductInput | null
}

export interface ProductIDOperatorsFilterFindOneProductInput {
  /** Unique product id */
  gt?: Float | null
  /** Unique product id */
  gte?: Float | null
  /** Unique product id */
  lt?: Float | null
  /** Unique product id */
  lte?: Float | null
  /** Unique product id */
  ne?: Float | null
  /** Unique product id */
  in?: (Float | null)[] | null
  /** Unique product id */
  nin?: (Float | null)[] | null
}

export interface NameOperatorsFilterFindOneProductInput {
  gt?: String | null
  gte?: String | null
  lt?: String | null
  lte?: String | null
  ne?: String | null
  in?: (String | null)[] | null
  nin?: (String | null)[] | null
}

export interface UnitPriceOperatorsFilterFindOneProductInput {
  gt?: Float | null
  gte?: Float | null
  lt?: Float | null
  lte?: Float | null
  ne?: Float | null
  in?: (Float | null)[] | null
  nin?: (Float | null)[] | null
}

export interface _idOperatorsFilterFindOneProductInput {
  gt?: MongoID | null
  gte?: MongoID | null
  lt?: MongoID | null
  lte?: MongoID | null
  ne?: MongoID | null
  in?: (MongoID | null)[] | null
  nin?: (MongoID | null)[] | null
}

export interface FilterFindManyProductInput {
  /** Unique product id */
  productID?: Float | null
  name?: String | null
  supplierID?: Float | null
  categoryID?: Float | null
  quantityPerUnit?: String | null
  unitPrice?: Float | null
  unitsInStock?: Float | null
  unitsOnOrder?: Float | null
  reorderLevel?: Float | null
  discontinued?: Boolean | null
  _id?: MongoID | null
  _ids?: (MongoID | null)[] | null
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: OperatorsFilterFindManyProductInput | null
  OR?: FilterFindManyProductInput[] | null
  AND?: FilterFindManyProductInput[] | null
  /** Search by regExp */
  nameRegexp?: String | null
}

/** For performance reason this type contains only *indexed* fields. */
export interface OperatorsFilterFindManyProductInput {
  productID?: ProductIDOperatorsFilterFindManyProductInput | null
  name?: NameOperatorsFilterFindManyProductInput | null
  unitPrice?: UnitPriceOperatorsFilterFindManyProductInput | null
  _id?: _idOperatorsFilterFindManyProductInput | null
}

export interface ProductIDOperatorsFilterFindManyProductInput {
  /** Unique product id */
  gt?: Float | null
  /** Unique product id */
  gte?: Float | null
  /** Unique product id */
  lt?: Float | null
  /** Unique product id */
  lte?: Float | null
  /** Unique product id */
  ne?: Float | null
  /** Unique product id */
  in?: (Float | null)[] | null
  /** Unique product id */
  nin?: (Float | null)[] | null
}

export interface NameOperatorsFilterFindManyProductInput {
  gt?: String | null
  gte?: String | null
  lt?: String | null
  lte?: String | null
  ne?: String | null
  in?: (String | null)[] | null
  nin?: (String | null)[] | null
}

export interface UnitPriceOperatorsFilterFindManyProductInput {
  gt?: Float | null
  gte?: Float | null
  lt?: Float | null
  lte?: Float | null
  ne?: Float | null
  in?: (Float | null)[] | null
  nin?: (Float | null)[] | null
}

export interface _idOperatorsFilterFindManyProductInput {
  gt?: MongoID | null
  gte?: MongoID | null
  lt?: MongoID | null
  lte?: MongoID | null
  ne?: MongoID | null
  in?: (MongoID | null)[] | null
  nin?: (MongoID | null)[] | null
}

/** List of items with pagination. */
export interface ProductPaginationRequest {
  /** Total object count. */
  count?: boolean | number
  /** Array of objects. */
  items?: ProductRequest
  /** Information to aid in pagination. */
  pageInfo?: PaginationInfoRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface FilterFindOneRegionInput {
  /** Region unique ID */
  regionID?: Float | null
  name?: String | null
  territories?: (RegionTerritoriesInput | null)[] | null
  _id?: MongoID | null
  _ids?: (MongoID | null)[] | null
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: OperatorsFilterFindOneRegionInput | null
  OR?: FilterFindOneRegionInput[] | null
  AND?: FilterFindOneRegionInput[] | null
}

export interface RegionTerritoriesInput {
  territoryID?: Float | null
  name?: String | null
}

/** For performance reason this type contains only *indexed* fields. */
export interface OperatorsFilterFindOneRegionInput {
  regionID?: RegionIDOperatorsFilterFindOneRegionInput | null
  _id?: _idOperatorsFilterFindOneRegionInput | null
}

export interface RegionIDOperatorsFilterFindOneRegionInput {
  /** Region unique ID */
  gt?: Float | null
  /** Region unique ID */
  gte?: Float | null
  /** Region unique ID */
  lt?: Float | null
  /** Region unique ID */
  lte?: Float | null
  /** Region unique ID */
  ne?: Float | null
  /** Region unique ID */
  in?: (Float | null)[] | null
  /** Region unique ID */
  nin?: (Float | null)[] | null
}

export interface _idOperatorsFilterFindOneRegionInput {
  gt?: MongoID | null
  gte?: MongoID | null
  lt?: MongoID | null
  lte?: MongoID | null
  ne?: MongoID | null
  in?: (MongoID | null)[] | null
  nin?: (MongoID | null)[] | null
}

export interface RegionRequest {
  /** Region unique ID */
  regionID?: boolean | number
  name?: boolean | number
  territories?: RegionTerritoriesRequest
  _id?: boolean | number
  employees?:
    | [{ skip?: Int | null; limit?: Int | null; sort?: SortFindManyEmployeeInput | null }, EmployeeRequest]
    | EmployeeRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface RegionTerritoriesRequest {
  territoryID?: boolean | number
  name?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface FilterFindManyRegionInput {
  /** Region unique ID */
  regionID?: Float | null
  name?: String | null
  territories?: (RegionTerritoriesInput | null)[] | null
  _id?: MongoID | null
  _ids?: (MongoID | null)[] | null
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: OperatorsFilterFindManyRegionInput | null
  OR?: FilterFindManyRegionInput[] | null
  AND?: FilterFindManyRegionInput[] | null
}

/** For performance reason this type contains only *indexed* fields. */
export interface OperatorsFilterFindManyRegionInput {
  regionID?: RegionIDOperatorsFilterFindManyRegionInput | null
  _id?: _idOperatorsFilterFindManyRegionInput | null
}

export interface RegionIDOperatorsFilterFindManyRegionInput {
  /** Region unique ID */
  gt?: Float | null
  /** Region unique ID */
  gte?: Float | null
  /** Region unique ID */
  lt?: Float | null
  /** Region unique ID */
  lte?: Float | null
  /** Region unique ID */
  ne?: Float | null
  /** Region unique ID */
  in?: (Float | null)[] | null
  /** Region unique ID */
  nin?: (Float | null)[] | null
}

export interface _idOperatorsFilterFindManyRegionInput {
  gt?: MongoID | null
  gte?: MongoID | null
  lt?: MongoID | null
  lte?: MongoID | null
  ne?: MongoID | null
  in?: (MongoID | null)[] | null
  nin?: (MongoID | null)[] | null
}

export interface FilterFindOneShipperInput {
  /** Shipper unique ID */
  shipperID?: Float | null
  companyName?: String | null
  phone?: String | null
  _id?: MongoID | null
  _ids?: (MongoID | null)[] | null
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: OperatorsFilterFindOneShipperInput | null
  OR?: FilterFindOneShipperInput[] | null
  AND?: FilterFindOneShipperInput[] | null
}

/** For performance reason this type contains only *indexed* fields. */
export interface OperatorsFilterFindOneShipperInput {
  shipperID?: ShipperIDOperatorsFilterFindOneShipperInput | null
  _id?: _idOperatorsFilterFindOneShipperInput | null
}

export interface ShipperIDOperatorsFilterFindOneShipperInput {
  /** Shipper unique ID */
  gt?: Float | null
  /** Shipper unique ID */
  gte?: Float | null
  /** Shipper unique ID */
  lt?: Float | null
  /** Shipper unique ID */
  lte?: Float | null
  /** Shipper unique ID */
  ne?: Float | null
  /** Shipper unique ID */
  in?: (Float | null)[] | null
  /** Shipper unique ID */
  nin?: (Float | null)[] | null
}

export interface _idOperatorsFilterFindOneShipperInput {
  gt?: MongoID | null
  gte?: MongoID | null
  lt?: MongoID | null
  lte?: MongoID | null
  ne?: MongoID | null
  in?: (MongoID | null)[] | null
  nin?: (MongoID | null)[] | null
}

export interface FilterFindManyShipperInput {
  /** Shipper unique ID */
  shipperID?: Float | null
  companyName?: String | null
  phone?: String | null
  _id?: MongoID | null
  _ids?: (MongoID | null)[] | null
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: OperatorsFilterFindManyShipperInput | null
  OR?: FilterFindManyShipperInput[] | null
  AND?: FilterFindManyShipperInput[] | null
}

/** For performance reason this type contains only *indexed* fields. */
export interface OperatorsFilterFindManyShipperInput {
  shipperID?: ShipperIDOperatorsFilterFindManyShipperInput | null
  _id?: _idOperatorsFilterFindManyShipperInput | null
}

export interface ShipperIDOperatorsFilterFindManyShipperInput {
  /** Shipper unique ID */
  gt?: Float | null
  /** Shipper unique ID */
  gte?: Float | null
  /** Shipper unique ID */
  lt?: Float | null
  /** Shipper unique ID */
  lte?: Float | null
  /** Shipper unique ID */
  ne?: Float | null
  /** Shipper unique ID */
  in?: (Float | null)[] | null
  /** Shipper unique ID */
  nin?: (Float | null)[] | null
}

export interface _idOperatorsFilterFindManyShipperInput {
  gt?: MongoID | null
  gte?: MongoID | null
  lt?: MongoID | null
  lte?: MongoID | null
  ne?: MongoID | null
  in?: (MongoID | null)[] | null
  nin?: (MongoID | null)[] | null
}

export interface FilterFindOneSupplierInput {
  /** Supplier unique ID */
  supplierID?: Float | null
  companyName?: String | null
  contactName?: String | null
  contactTitle?: String | null
  address?: CustomerAddressInput | null
  _id?: MongoID | null
  _ids?: (MongoID | null)[] | null
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: OperatorsFilterFindOneSupplierInput | null
  OR?: FilterFindOneSupplierInput[] | null
  AND?: FilterFindOneSupplierInput[] | null
}

/** For performance reason this type contains only *indexed* fields. */
export interface OperatorsFilterFindOneSupplierInput {
  supplierID?: SupplierIDOperatorsFilterFindOneSupplierInput | null
  companyName?: CompanyNameOperatorsFilterFindOneSupplierInput | null
  _id?: _idOperatorsFilterFindOneSupplierInput | null
}

export interface SupplierIDOperatorsFilterFindOneSupplierInput {
  /** Supplier unique ID */
  gt?: Float | null
  /** Supplier unique ID */
  gte?: Float | null
  /** Supplier unique ID */
  lt?: Float | null
  /** Supplier unique ID */
  lte?: Float | null
  /** Supplier unique ID */
  ne?: Float | null
  /** Supplier unique ID */
  in?: (Float | null)[] | null
  /** Supplier unique ID */
  nin?: (Float | null)[] | null
}

export interface CompanyNameOperatorsFilterFindOneSupplierInput {
  gt?: String | null
  gte?: String | null
  lt?: String | null
  lte?: String | null
  ne?: String | null
  in?: (String | null)[] | null
  nin?: (String | null)[] | null
}

export interface _idOperatorsFilterFindOneSupplierInput {
  gt?: MongoID | null
  gte?: MongoID | null
  lt?: MongoID | null
  lte?: MongoID | null
  ne?: MongoID | null
  in?: (MongoID | null)[] | null
  nin?: (MongoID | null)[] | null
}

export interface FilterFindManySupplierInput {
  /** Supplier unique ID */
  supplierID?: Float | null
  companyName?: String | null
  contactName?: String | null
  contactTitle?: String | null
  address?: CustomerAddressInput | null
  _id?: MongoID | null
  _ids?: (MongoID | null)[] | null
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: OperatorsFilterFindManySupplierInput | null
  OR?: FilterFindManySupplierInput[] | null
  AND?: FilterFindManySupplierInput[] | null
}

/** For performance reason this type contains only *indexed* fields. */
export interface OperatorsFilterFindManySupplierInput {
  supplierID?: SupplierIDOperatorsFilterFindManySupplierInput | null
  companyName?: CompanyNameOperatorsFilterFindManySupplierInput | null
  _id?: _idOperatorsFilterFindManySupplierInput | null
}

export interface SupplierIDOperatorsFilterFindManySupplierInput {
  /** Supplier unique ID */
  gt?: Float | null
  /** Supplier unique ID */
  gte?: Float | null
  /** Supplier unique ID */
  lt?: Float | null
  /** Supplier unique ID */
  lte?: Float | null
  /** Supplier unique ID */
  ne?: Float | null
  /** Supplier unique ID */
  in?: (Float | null)[] | null
  /** Supplier unique ID */
  nin?: (Float | null)[] | null
}

export interface CompanyNameOperatorsFilterFindManySupplierInput {
  gt?: String | null
  gte?: String | null
  lt?: String | null
  lte?: String | null
  ne?: String | null
  in?: (String | null)[] | null
  nin?: (String | null)[] | null
}

export interface _idOperatorsFilterFindManySupplierInput {
  gt?: MongoID | null
  gte?: MongoID | null
  lt?: MongoID | null
  lte?: MongoID | null
  ne?: MongoID | null
  in?: (MongoID | null)[] | null
  nin?: (MongoID | null)[] | null
}

/** A connection to a list of items. */
export interface SupplierConnectionRequest {
  /** Total object count. */
  count?: boolean | number
  /** Information to aid in pagination. */
  pageInfo?: PageInfoRequest
  /** Information to aid in pagination. */
  edges?: SupplierEdgeRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

/** An edge in a connection. */
export interface SupplierEdgeRequest {
  /** The item at the end of the edge */
  node?: SupplierRequest
  /** A cursor for use in pagination */
  cursor?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface MutationRequest {
  /** Create one document with mongoose defaults, setters, hooks and validation */
  createProduct?: [{ record: CreateOneProductInput }, CreateOneProductPayloadRequest]
  /** Update one document: 1) Retrieve one document by findById. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  updateProduct?: [{ record: UpdateByIdProductInput }, UpdateByIdProductPayloadRequest]
  /** Remove one document: 1) Remove with hooks via findOneAndRemove. 2) Return removed document. */
  removeProduct?:
    | [
        {
          /** Filter by fields */
          filter?: FilterRemoveOneProductInput | null
          sort?: SortRemoveOneProductInput | null
        },
        RemoveOneProductPayloadRequest,
      ]
    | RemoveOneProductPayloadRequest
  /** Create one document with mongoose defaults, setters, hooks and validation */
  createOrder?: [{ record: CreateOneOrderInput }, CreateOneOrderPayloadRequest]
  /** Update one document: 1) Retrieve one document by findById. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  updateOrder?: [{ record: UpdateByIdOrderInput }, UpdateByIdOrderPayloadRequest]
  /** Remove one document: 1) Remove with hooks via findOneAndRemove. 2) Return removed document. */
  removeOrder?:
    | [
        {
          /** Filter by fields */
          filter?: FilterRemoveOneOrderInput | null
          sort?: SortRemoveOneOrderInput | null
        },
        RemoveOneOrderPayloadRequest,
      ]
    | RemoveOneOrderPayloadRequest
  /** Update one document: 1) Retrieve one document by findById. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  updateEmployee?: [{ record: UpdateByIdEmployeeInput }, UpdateByIdEmployeePayloadRequest]
  /** Remove all data and seed DB from scratch. Anyway data automatically reloaded every 30 minutes. */
  resetData?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface CreateOneProductInput {
  /** Unique product id */
  productID?: Float | null
  name?: String | null
  supplierID?: Float | null
  categoryID?: Float | null
  quantityPerUnit?: String | null
  unitPrice?: Float | null
  unitsInStock?: Float | null
  unitsOnOrder?: Float | null
  reorderLevel?: Float | null
  discontinued?: Boolean | null
}

export interface CreateOneProductPayloadRequest {
  /** Created document ID */
  recordId?: boolean | number
  /** Created document */
  record?: ProductRequest
  query?: QueryRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface UpdateByIdProductInput {
  /** Unique product id */
  productID?: Float | null
  name?: String | null
  supplierID?: Float | null
  categoryID?: Float | null
  quantityPerUnit?: String | null
  unitPrice?: Float | null
  unitsInStock?: Float | null
  unitsOnOrder?: Float | null
  reorderLevel?: Float | null
  discontinued?: Boolean | null
  _id: MongoID
}

export interface UpdateByIdProductPayloadRequest {
  /** Updated document ID */
  recordId?: boolean | number
  /** Updated document */
  record?: ProductRequest
  query?: QueryRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface FilterRemoveOneProductInput {
  /** Unique product id */
  productID?: Float | null
  name?: String | null
  supplierID?: Float | null
  categoryID?: Float | null
  quantityPerUnit?: String | null
  unitPrice?: Float | null
  unitsInStock?: Float | null
  unitsOnOrder?: Float | null
  reorderLevel?: Float | null
  discontinued?: Boolean | null
  _id?: MongoID | null
  _ids?: (MongoID | null)[] | null
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: OperatorsFilterRemoveOneProductInput | null
  OR?: FilterRemoveOneProductInput[] | null
  AND?: FilterRemoveOneProductInput[] | null
}

/** For performance reason this type contains only *indexed* fields. */
export interface OperatorsFilterRemoveOneProductInput {
  productID?: ProductIDOperatorsFilterRemoveOneProductInput | null
  name?: NameOperatorsFilterRemoveOneProductInput | null
  unitPrice?: UnitPriceOperatorsFilterRemoveOneProductInput | null
  _id?: _idOperatorsFilterRemoveOneProductInput | null
}

export interface ProductIDOperatorsFilterRemoveOneProductInput {
  /** Unique product id */
  gt?: Float | null
  /** Unique product id */
  gte?: Float | null
  /** Unique product id */
  lt?: Float | null
  /** Unique product id */
  lte?: Float | null
  /** Unique product id */
  ne?: Float | null
  /** Unique product id */
  in?: (Float | null)[] | null
  /** Unique product id */
  nin?: (Float | null)[] | null
}

export interface NameOperatorsFilterRemoveOneProductInput {
  gt?: String | null
  gte?: String | null
  lt?: String | null
  lte?: String | null
  ne?: String | null
  in?: (String | null)[] | null
  nin?: (String | null)[] | null
}

export interface UnitPriceOperatorsFilterRemoveOneProductInput {
  gt?: Float | null
  gte?: Float | null
  lt?: Float | null
  lte?: Float | null
  ne?: Float | null
  in?: (Float | null)[] | null
  nin?: (Float | null)[] | null
}

export interface _idOperatorsFilterRemoveOneProductInput {
  gt?: MongoID | null
  gte?: MongoID | null
  lt?: MongoID | null
  lte?: MongoID | null
  ne?: MongoID | null
  in?: (MongoID | null)[] | null
  nin?: (MongoID | null)[] | null
}

export interface RemoveOneProductPayloadRequest {
  /** Removed document ID */
  recordId?: boolean | number
  /** Removed document */
  record?: ProductRequest
  query?: QueryRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface CreateOneOrderInput {
  /** Order unique ID */
  orderID?: Float | null
  customerID?: String | null
  employeeID?: Float | null
  orderDate?: Date | null
  requiredDate?: Date | null
  shippedDate?: Date | null
  shipVia?: Float | null
  freight?: Float | null
  shipName?: String | null
  shipAddress?: CustomerAddressInput | null
  /** List of ordered products */
  details?: (OrderDetailsInput | null)[] | null
}

export interface CreateOneOrderPayloadRequest {
  /** Created document ID */
  recordId?: boolean | number
  /** Created document */
  record?: OrderRequest
  query?: QueryRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface UpdateByIdOrderInput {
  /** Order unique ID */
  orderID?: Float | null
  customerID?: String | null
  employeeID?: Float | null
  orderDate?: Date | null
  requiredDate?: Date | null
  shippedDate?: Date | null
  shipVia?: Float | null
  freight?: Float | null
  shipName?: String | null
  shipAddress?: CustomerAddressInput | null
  /** List of ordered products */
  details?: (OrderDetailsInput | null)[] | null
  _id: MongoID
}

export interface UpdateByIdOrderPayloadRequest {
  /** Updated document ID */
  recordId?: boolean | number
  /** Updated document */
  record?: OrderRequest
  query?: QueryRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface FilterRemoveOneOrderInput {
  /** Order unique ID */
  orderID?: Float | null
  customerID?: String | null
  employeeID?: Float | null
  orderDate?: Date | null
  requiredDate?: Date | null
  shippedDate?: Date | null
  shipVia?: Float | null
  freight?: Float | null
  shipName?: String | null
  shipAddress?: CustomerAddressInput | null
  /** List of ordered products */
  details?: (OrderDetailsInput | null)[] | null
  _id?: MongoID | null
  _ids?: (MongoID | null)[] | null
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: OperatorsFilterRemoveOneOrderInput | null
  OR?: FilterRemoveOneOrderInput[] | null
  AND?: FilterRemoveOneOrderInput[] | null
}

/** For performance reason this type contains only *indexed* fields. */
export interface OperatorsFilterRemoveOneOrderInput {
  orderID?: OrderIDOperatorsFilterRemoveOneOrderInput | null
  details?: DetailsOperatorsFilterRemoveOneOrderInput | null
  _id?: _idOperatorsFilterRemoveOneOrderInput | null
}

export interface OrderIDOperatorsFilterRemoveOneOrderInput {
  /** Order unique ID */
  gt?: Float | null
  /** Order unique ID */
  gte?: Float | null
  /** Order unique ID */
  lt?: Float | null
  /** Order unique ID */
  lte?: Float | null
  /** Order unique ID */
  ne?: Float | null
  /** Order unique ID */
  in?: (Float | null)[] | null
  /** Order unique ID */
  nin?: (Float | null)[] | null
}

export interface DetailsOperatorsFilterRemoveOneOrderInput {
  /** List of ordered products */
  gt?: OrderDetailsInput | null
  /** List of ordered products */
  gte?: OrderDetailsInput | null
  /** List of ordered products */
  lt?: OrderDetailsInput | null
  /** List of ordered products */
  lte?: OrderDetailsInput | null
  /** List of ordered products */
  ne?: OrderDetailsInput | null
  /** List of ordered products */
  in?: (OrderDetailsInput | null)[] | null
  /** List of ordered products */
  nin?: (OrderDetailsInput | null)[] | null
}

export interface _idOperatorsFilterRemoveOneOrderInput {
  gt?: MongoID | null
  gte?: MongoID | null
  lt?: MongoID | null
  lte?: MongoID | null
  ne?: MongoID | null
  in?: (MongoID | null)[] | null
  nin?: (MongoID | null)[] | null
}

export interface RemoveOneOrderPayloadRequest {
  /** Removed document ID */
  recordId?: boolean | number
  /** Removed document */
  record?: OrderRequest
  query?: QueryRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface UpdateByIdEmployeeInput {
  /** Category unique ID */
  employeeID?: Float | null
  lastName?: String | null
  firstName?: String | null
  title?: String | null
  titleOfCourtesy?: String | null
  birthDate?: Date | null
  hireDate?: Date | null
  address?: CustomerAddressInput | null
  notes?: String | null
  /** ID of chief */
  reportsTo?: Float | null
  /** Attached territory ID from region collection */
  territoryIDs?: (Float | null)[] | null
  _id: MongoID
}

export interface UpdateByIdEmployeePayloadRequest {
  /** Updated document ID */
  recordId?: boolean | number
  /** Updated document */
  record?: EmployeeRequest
  query?: QueryRequest
  __typename?: boolean | number
  __scalar?: boolean | number
}

export interface SubscriptionRequest {
  orderCreated?: OrderRequest
  orderUpdated?: OrderRequest
  orderRemoved?: boolean | number
  __typename?: boolean | number
  __scalar?: boolean | number
}

const Query_possibleTypes = ['Query']
export const isQuery = (obj: { __typename: String }): obj is Query => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return Query_possibleTypes.includes(obj.__typename)
}

const Viewer_possibleTypes = ['Viewer']
export const isViewer = (obj: { __typename: String }): obj is Viewer => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return Viewer_possibleTypes.includes(obj.__typename)
}

const Category_possibleTypes = ['Category']
export const isCategory = (obj: { __typename: String }): obj is Category => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return Category_possibleTypes.includes(obj.__typename)
}

const ProductConnection_possibleTypes = ['ProductConnection']
export const isProductConnection = (obj: { __typename: String }): obj is ProductConnection => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return ProductConnection_possibleTypes.includes(obj.__typename)
}

const PageInfo_possibleTypes = ['PageInfo']
export const isPageInfo = (obj: { __typename: String }): obj is PageInfo => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return PageInfo_possibleTypes.includes(obj.__typename)
}

const ProductEdge_possibleTypes = ['ProductEdge']
export const isProductEdge = (obj: { __typename: String }): obj is ProductEdge => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return ProductEdge_possibleTypes.includes(obj.__typename)
}

const Product_possibleTypes = ['Product']
export const isProduct = (obj: { __typename: String }): obj is Product => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return Product_possibleTypes.includes(obj.__typename)
}

const OrderConnection_possibleTypes = ['OrderConnection']
export const isOrderConnection = (obj: { __typename: String }): obj is OrderConnection => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return OrderConnection_possibleTypes.includes(obj.__typename)
}

const OrderEdge_possibleTypes = ['OrderEdge']
export const isOrderEdge = (obj: { __typename: String }): obj is OrderEdge => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return OrderEdge_possibleTypes.includes(obj.__typename)
}

const Order_possibleTypes = ['Order']
export const isOrder = (obj: { __typename: String }): obj is Order => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return Order_possibleTypes.includes(obj.__typename)
}

const CustomerAddress_possibleTypes = ['CustomerAddress']
export const isCustomerAddress = (obj: { __typename: String }): obj is CustomerAddress => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return CustomerAddress_possibleTypes.includes(obj.__typename)
}

const OrderDetails_possibleTypes = ['OrderDetails']
export const isOrderDetails = (obj: { __typename: String }): obj is OrderDetails => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return OrderDetails_possibleTypes.includes(obj.__typename)
}

const Customer_possibleTypes = ['Customer']
export const isCustomer = (obj: { __typename: String }): obj is Customer => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return Customer_possibleTypes.includes(obj.__typename)
}

const Employee_possibleTypes = ['Employee']
export const isEmployee = (obj: { __typename: String }): obj is Employee => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return Employee_possibleTypes.includes(obj.__typename)
}

const Shipper_possibleTypes = ['Shipper']
export const isShipper = (obj: { __typename: String }): obj is Shipper => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return Shipper_possibleTypes.includes(obj.__typename)
}

const Supplier_possibleTypes = ['Supplier']
export const isSupplier = (obj: { __typename: String }): obj is Supplier => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return Supplier_possibleTypes.includes(obj.__typename)
}

const CustomerPagination_possibleTypes = ['CustomerPagination']
export const isCustomerPagination = (obj: { __typename: String }): obj is CustomerPagination => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return CustomerPagination_possibleTypes.includes(obj.__typename)
}

const PaginationInfo_possibleTypes = ['PaginationInfo']
export const isPaginationInfo = (obj: { __typename: String }): obj is PaginationInfo => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return PaginationInfo_possibleTypes.includes(obj.__typename)
}

const CustomerConnection_possibleTypes = ['CustomerConnection']
export const isCustomerConnection = (obj: { __typename: String }): obj is CustomerConnection => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return CustomerConnection_possibleTypes.includes(obj.__typename)
}

const CustomerEdge_possibleTypes = ['CustomerEdge']
export const isCustomerEdge = (obj: { __typename: String }): obj is CustomerEdge => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return CustomerEdge_possibleTypes.includes(obj.__typename)
}

const EmployeePagination_possibleTypes = ['EmployeePagination']
export const isEmployeePagination = (obj: { __typename: String }): obj is EmployeePagination => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return EmployeePagination_possibleTypes.includes(obj.__typename)
}

const OrderPagination_possibleTypes = ['OrderPagination']
export const isOrderPagination = (obj: { __typename: String }): obj is OrderPagination => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return OrderPagination_possibleTypes.includes(obj.__typename)
}

const ProductPagination_possibleTypes = ['ProductPagination']
export const isProductPagination = (obj: { __typename: String }): obj is ProductPagination => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return ProductPagination_possibleTypes.includes(obj.__typename)
}

const Region_possibleTypes = ['Region']
export const isRegion = (obj: { __typename: String }): obj is Region => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return Region_possibleTypes.includes(obj.__typename)
}

const RegionTerritories_possibleTypes = ['RegionTerritories']
export const isRegionTerritories = (obj: { __typename: String }): obj is RegionTerritories => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return RegionTerritories_possibleTypes.includes(obj.__typename)
}

const SupplierConnection_possibleTypes = ['SupplierConnection']
export const isSupplierConnection = (obj: { __typename: String }): obj is SupplierConnection => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return SupplierConnection_possibleTypes.includes(obj.__typename)
}

const SupplierEdge_possibleTypes = ['SupplierEdge']
export const isSupplierEdge = (obj: { __typename: String }): obj is SupplierEdge => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return SupplierEdge_possibleTypes.includes(obj.__typename)
}

const Mutation_possibleTypes = ['Mutation']
export const isMutation = (obj: { __typename: String }): obj is Mutation => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return Mutation_possibleTypes.includes(obj.__typename)
}

const CreateOneProductPayload_possibleTypes = ['CreateOneProductPayload']
export const isCreateOneProductPayload = (obj: { __typename: String }): obj is CreateOneProductPayload => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return CreateOneProductPayload_possibleTypes.includes(obj.__typename)
}

const UpdateByIdProductPayload_possibleTypes = ['UpdateByIdProductPayload']
export const isUpdateByIdProductPayload = (obj: { __typename: String }): obj is UpdateByIdProductPayload => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return UpdateByIdProductPayload_possibleTypes.includes(obj.__typename)
}

const RemoveOneProductPayload_possibleTypes = ['RemoveOneProductPayload']
export const isRemoveOneProductPayload = (obj: { __typename: String }): obj is RemoveOneProductPayload => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return RemoveOneProductPayload_possibleTypes.includes(obj.__typename)
}

const CreateOneOrderPayload_possibleTypes = ['CreateOneOrderPayload']
export const isCreateOneOrderPayload = (obj: { __typename: String }): obj is CreateOneOrderPayload => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return CreateOneOrderPayload_possibleTypes.includes(obj.__typename)
}

const UpdateByIdOrderPayload_possibleTypes = ['UpdateByIdOrderPayload']
export const isUpdateByIdOrderPayload = (obj: { __typename: String }): obj is UpdateByIdOrderPayload => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return UpdateByIdOrderPayload_possibleTypes.includes(obj.__typename)
}

const RemoveOneOrderPayload_possibleTypes = ['RemoveOneOrderPayload']
export const isRemoveOneOrderPayload = (obj: { __typename: String }): obj is RemoveOneOrderPayload => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return RemoveOneOrderPayload_possibleTypes.includes(obj.__typename)
}

const UpdateByIdEmployeePayload_possibleTypes = ['UpdateByIdEmployeePayload']
export const isUpdateByIdEmployeePayload = (obj: { __typename: String }): obj is UpdateByIdEmployeePayload => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return UpdateByIdEmployeePayload_possibleTypes.includes(obj.__typename)
}

const Subscription_possibleTypes = ['Subscription']
export const isSubscription = (obj: { __typename: String }): obj is Subscription => {
  if (!obj.__typename) throw new Error('__typename is missing')
  return Subscription_possibleTypes.includes(obj.__typename)
}

export interface QueryPromiseChain {
  /** Data under client context */
  viewer: ViewerPromiseChain & {
    get: <R extends ViewerRequest>(
      request: R,
      defaultValue?: MapType<Viewer, R> | null,
    ) => Promise<MapType<Viewer, R> | null>
  }
}

export interface QueryObservableChain {
  /** Data under client context */
  viewer: ViewerObservableChain & {
    get: <R extends ViewerRequest>(
      request: R,
      defaultValue?: MapType<Viewer, R> | null,
    ) => Observable<MapType<Viewer, R> | null>
  }
}

export interface ViewerPromiseChain {
  category: ((args?: {
    /** Filter by fields */
    filter?: FilterFindOneCategoryInput | null
    skip?: Int | null
    sort?: SortFindOneCategoryInput | null
  }) => CategoryPromiseChain & {
    get: <R extends CategoryRequest>(
      request: R,
      defaultValue?: MapType<Category, R> | null,
    ) => Promise<MapType<Category, R> | null>
  }) &
    (CategoryPromiseChain & {
      get: <R extends CategoryRequest>(
        request: R,
        defaultValue?: MapType<Category, R> | null,
      ) => Promise<MapType<Category, R> | null>
    })
  categoryList: ((args?: {
    /** Filter by fields */
    filter?: FilterFindManyCategoryInput | null
    skip?: Int | null
    limit?: Int | null
    sort?: SortFindManyCategoryInput | null
  }) => {
    get: <R extends CategoryRequest>(
      request: R,
      defaultValue?: MapType<Category | null, R>[] | null,
    ) => Promise<MapType<Category | null, R>[] | null>
  }) & {
    get: <R extends CategoryRequest>(
      request: R,
      defaultValue?: MapType<Category | null, R>[] | null,
    ) => Promise<MapType<Category | null, R>[] | null>
  }
  customer: ((args?: {
    /** Filter by fields */
    filter?: FilterFindOneCustomerInput | null
    skip?: Int | null
    sort?: SortFindOneCustomerInput | null
  }) => CustomerPromiseChain & {
    get: <R extends CustomerRequest>(
      request: R,
      defaultValue?: MapType<Customer, R> | null,
    ) => Promise<MapType<Customer, R> | null>
  }) &
    (CustomerPromiseChain & {
      get: <R extends CustomerRequest>(
        request: R,
        defaultValue?: MapType<Customer, R> | null,
      ) => Promise<MapType<Customer, R> | null>
    })
  customerPagination: ((args?: {
    /** Page number for displaying */
    page?: Int | null
    perPage?: Int | null
    /** Filter by fields */
    filter?: FilterFindManyCustomerInput | null
    sort?: SortFindManyCustomerInput | null
  }) => CustomerPaginationPromiseChain & {
    get: <R extends CustomerPaginationRequest>(
      request: R,
      defaultValue?: MapType<CustomerPagination, R> | null,
    ) => Promise<MapType<CustomerPagination, R> | null>
  }) &
    (CustomerPaginationPromiseChain & {
      get: <R extends CustomerPaginationRequest>(
        request: R,
        defaultValue?: MapType<CustomerPagination, R> | null,
      ) => Promise<MapType<CustomerPagination, R> | null>
    })
  customerConnection: ((args?: {
    /** Forward pagination argument for returning at most first edges */
    first?: Int | null
    /** Forward pagination argument for returning at most first edges */
    after?: String | null
    /** Backward pagination argument for returning at most last edges */
    last?: Int | null
    /** Backward pagination argument for returning at most last edges */
    before?: String | null
    /** Filter by fields */
    filter?: FilterFindManyCustomerInput | null
    /** Sort argument for data ordering */
    sort?: SortConnectionCustomerEnum | null
  }) => CustomerConnectionPromiseChain & {
    get: <R extends CustomerConnectionRequest>(
      request: R,
      defaultValue?: MapType<CustomerConnection, R> | null,
    ) => Promise<MapType<CustomerConnection, R> | null>
  }) &
    (CustomerConnectionPromiseChain & {
      get: <R extends CustomerConnectionRequest>(
        request: R,
        defaultValue?: MapType<CustomerConnection, R> | null,
      ) => Promise<MapType<CustomerConnection, R> | null>
    })
  employee: ((args?: {
    /** Filter by fields */
    filter?: FilterFindOneEmployeeInput | null
    skip?: Int | null
    sort?: SortFindOneEmployeeInput | null
  }) => EmployeePromiseChain & {
    get: <R extends EmployeeRequest>(
      request: R,
      defaultValue?: MapType<Employee, R> | null,
    ) => Promise<MapType<Employee, R> | null>
  }) &
    (EmployeePromiseChain & {
      get: <R extends EmployeeRequest>(
        request: R,
        defaultValue?: MapType<Employee, R> | null,
      ) => Promise<MapType<Employee, R> | null>
    })
  employeeList: ((args?: {
    /** Filter by fields */
    filter?: FilterFindManyEmployeeInput | null
    skip?: Int | null
    limit?: Int | null
    sort?: SortFindManyEmployeeInput | null
  }) => {
    get: <R extends EmployeeRequest>(
      request: R,
      defaultValue?: MapType<Employee | null, R>[] | null,
    ) => Promise<MapType<Employee | null, R>[] | null>
  }) & {
    get: <R extends EmployeeRequest>(
      request: R,
      defaultValue?: MapType<Employee | null, R>[] | null,
    ) => Promise<MapType<Employee | null, R>[] | null>
  }
  employeePagination: ((args?: {
    /** Page number for displaying */
    page?: Int | null
    perPage?: Int | null
    /** Filter by fields */
    filter?: FilterFindManyEmployeeInput | null
    sort?: SortFindManyEmployeeInput | null
  }) => EmployeePaginationPromiseChain & {
    get: <R extends EmployeePaginationRequest>(
      request: R,
      defaultValue?: MapType<EmployeePagination, R> | null,
    ) => Promise<MapType<EmployeePagination, R> | null>
  }) &
    (EmployeePaginationPromiseChain & {
      get: <R extends EmployeePaginationRequest>(
        request: R,
        defaultValue?: MapType<EmployeePagination, R> | null,
      ) => Promise<MapType<EmployeePagination, R> | null>
    })
  order: ((args?: {
    /** Filter by fields */
    filter?: FilterFindOneOrderInput | null
    skip?: Int | null
    sort?: SortFindOneOrderInput | null
  }) => OrderPromiseChain & {
    get: <R extends OrderRequest>(request: R, defaultValue?: MapType<Order, R> | null) => Promise<MapType<Order, R> | null>
  }) &
    (OrderPromiseChain & {
      get: <R extends OrderRequest>(request: R, defaultValue?: MapType<Order, R> | null) => Promise<MapType<Order, R> | null>
    })
  orderPagination: ((args?: {
    /** Page number for displaying */
    page?: Int | null
    perPage?: Int | null
    /** Filter by fields */
    filter?: FilterFindManyOrderInput | null
    sort?: SortFindManyOrderInput | null
  }) => OrderPaginationPromiseChain & {
    get: <R extends OrderPaginationRequest>(
      request: R,
      defaultValue?: MapType<OrderPagination, R> | null,
    ) => Promise<MapType<OrderPagination, R> | null>
  }) &
    (OrderPaginationPromiseChain & {
      get: <R extends OrderPaginationRequest>(
        request: R,
        defaultValue?: MapType<OrderPagination, R> | null,
      ) => Promise<MapType<OrderPagination, R> | null>
    })
  orderConnection: ((args?: {
    /** Forward pagination argument for returning at most first edges */
    first?: Int | null
    /** Forward pagination argument for returning at most first edges */
    after?: String | null
    /** Backward pagination argument for returning at most last edges */
    last?: Int | null
    /** Backward pagination argument for returning at most last edges */
    before?: String | null
    /** Filter by fields */
    filter?: FilterFindManyOrderInput | null
    /** Sort argument for data ordering */
    sort?: SortConnectionOrderEnum | null
  }) => OrderConnectionPromiseChain & {
    get: <R extends OrderConnectionRequest>(
      request: R,
      defaultValue?: MapType<OrderConnection, R> | null,
    ) => Promise<MapType<OrderConnection, R> | null>
  }) &
    (OrderConnectionPromiseChain & {
      get: <R extends OrderConnectionRequest>(
        request: R,
        defaultValue?: MapType<OrderConnection, R> | null,
      ) => Promise<MapType<OrderConnection, R> | null>
    })
  product: ((args?: {
    /** Filter by fields */
    filter?: FilterFindOneProductInput | null
    skip?: Int | null
    sort?: SortFindOneProductInput | null
  }) => ProductPromiseChain & {
    get: <R extends ProductRequest>(
      request: R,
      defaultValue?: MapType<Product, R> | null,
    ) => Promise<MapType<Product, R> | null>
  }) &
    (ProductPromiseChain & {
      get: <R extends ProductRequest>(
        request: R,
        defaultValue?: MapType<Product, R> | null,
      ) => Promise<MapType<Product, R> | null>
    })
  productList: ((args?: {
    /** Filter by fields */
    filter?: FilterFindManyProductInput | null
    skip?: Int | null
    limit?: Int | null
    sort?: SortFindManyProductInput | null
  }) => {
    get: <R extends ProductRequest>(
      request: R,
      defaultValue?: MapType<Product | null, R>[] | null,
    ) => Promise<MapType<Product | null, R>[] | null>
  }) & {
    get: <R extends ProductRequest>(
      request: R,
      defaultValue?: MapType<Product | null, R>[] | null,
    ) => Promise<MapType<Product | null, R>[] | null>
  }
  productPagination: ((args?: {
    /** Page number for displaying */
    page?: Int | null
    perPage?: Int | null
    /** Filter by fields */
    filter?: FilterFindManyProductInput | null
    sort?: SortFindManyProductInput | null
  }) => ProductPaginationPromiseChain & {
    get: <R extends ProductPaginationRequest>(
      request: R,
      defaultValue?: MapType<ProductPagination, R> | null,
    ) => Promise<MapType<ProductPagination, R> | null>
  }) &
    (ProductPaginationPromiseChain & {
      get: <R extends ProductPaginationRequest>(
        request: R,
        defaultValue?: MapType<ProductPagination, R> | null,
      ) => Promise<MapType<ProductPagination, R> | null>
    })
  productConnection: ((args?: {
    /** Forward pagination argument for returning at most first edges */
    first?: Int | null
    /** Forward pagination argument for returning at most first edges */
    after?: String | null
    /** Backward pagination argument for returning at most last edges */
    last?: Int | null
    /** Backward pagination argument for returning at most last edges */
    before?: String | null
    /** Filter by fields */
    filter?: FilterFindManyProductInput | null
    /** Sort argument for data ordering */
    sort?: SortConnectionProductEnum | null
  }) => ProductConnectionPromiseChain & {
    get: <R extends ProductConnectionRequest>(
      request: R,
      defaultValue?: MapType<ProductConnection, R> | null,
    ) => Promise<MapType<ProductConnection, R> | null>
  }) &
    (ProductConnectionPromiseChain & {
      get: <R extends ProductConnectionRequest>(
        request: R,
        defaultValue?: MapType<ProductConnection, R> | null,
      ) => Promise<MapType<ProductConnection, R> | null>
    })
  region: ((args?: {
    /** Filter by fields */
    filter?: FilterFindOneRegionInput | null
    skip?: Int | null
    sort?: SortFindOneRegionInput | null
  }) => RegionPromiseChain & {
    get: <R extends RegionRequest>(
      request: R,
      defaultValue?: MapType<Region, R> | null,
    ) => Promise<MapType<Region, R> | null>
  }) &
    (RegionPromiseChain & {
      get: <R extends RegionRequest>(
        request: R,
        defaultValue?: MapType<Region, R> | null,
      ) => Promise<MapType<Region, R> | null>
    })
  regionList: ((args?: {
    /** Filter by fields */
    filter?: FilterFindManyRegionInput | null
    skip?: Int | null
    limit?: Int | null
    sort?: SortFindManyRegionInput | null
  }) => {
    get: <R extends RegionRequest>(
      request: R,
      defaultValue?: MapType<Region | null, R>[] | null,
    ) => Promise<MapType<Region | null, R>[] | null>
  }) & {
    get: <R extends RegionRequest>(
      request: R,
      defaultValue?: MapType<Region | null, R>[] | null,
    ) => Promise<MapType<Region | null, R>[] | null>
  }
  shipper: ((args?: {
    /** Filter by fields */
    filter?: FilterFindOneShipperInput | null
    skip?: Int | null
    sort?: SortFindOneShipperInput | null
  }) => ShipperPromiseChain & {
    get: <R extends ShipperRequest>(
      request: R,
      defaultValue?: MapType<Shipper, R> | null,
    ) => Promise<MapType<Shipper, R> | null>
  }) &
    (ShipperPromiseChain & {
      get: <R extends ShipperRequest>(
        request: R,
        defaultValue?: MapType<Shipper, R> | null,
      ) => Promise<MapType<Shipper, R> | null>
    })
  shipperList: ((args?: {
    /** Filter by fields */
    filter?: FilterFindManyShipperInput | null
    skip?: Int | null
    limit?: Int | null
    sort?: SortFindManyShipperInput | null
  }) => {
    get: <R extends ShipperRequest>(
      request: R,
      defaultValue?: MapType<Shipper | null, R>[] | null,
    ) => Promise<MapType<Shipper | null, R>[] | null>
  }) & {
    get: <R extends ShipperRequest>(
      request: R,
      defaultValue?: MapType<Shipper | null, R>[] | null,
    ) => Promise<MapType<Shipper | null, R>[] | null>
  }
  supplier: ((args?: {
    /** Filter by fields */
    filter?: FilterFindOneSupplierInput | null
    skip?: Int | null
    sort?: SortFindOneSupplierInput | null
  }) => SupplierPromiseChain & {
    get: <R extends SupplierRequest>(
      request: R,
      defaultValue?: MapType<Supplier, R> | null,
    ) => Promise<MapType<Supplier, R> | null>
  }) &
    (SupplierPromiseChain & {
      get: <R extends SupplierRequest>(
        request: R,
        defaultValue?: MapType<Supplier, R> | null,
      ) => Promise<MapType<Supplier, R> | null>
    })
  supplierConnection: ((args?: {
    /** Forward pagination argument for returning at most first edges */
    first?: Int | null
    /** Forward pagination argument for returning at most first edges */
    after?: String | null
    /** Backward pagination argument for returning at most last edges */
    last?: Int | null
    /** Backward pagination argument for returning at most last edges */
    before?: String | null
    /** Filter by fields */
    filter?: FilterFindManySupplierInput | null
    /** Sort argument for data ordering */
    sort?: SortConnectionSupplierEnum | null
  }) => SupplierConnectionPromiseChain & {
    get: <R extends SupplierConnectionRequest>(
      request: R,
      defaultValue?: MapType<SupplierConnection, R> | null,
    ) => Promise<MapType<SupplierConnection, R> | null>
  }) &
    (SupplierConnectionPromiseChain & {
      get: <R extends SupplierConnectionRequest>(
        request: R,
        defaultValue?: MapType<SupplierConnection, R> | null,
      ) => Promise<MapType<SupplierConnection, R> | null>
    })
}

export interface ViewerObservableChain {
  category: ((args?: {
    /** Filter by fields */
    filter?: FilterFindOneCategoryInput | null
    skip?: Int | null
    sort?: SortFindOneCategoryInput | null
  }) => CategoryObservableChain & {
    get: <R extends CategoryRequest>(
      request: R,
      defaultValue?: MapType<Category, R> | null,
    ) => Observable<MapType<Category, R> | null>
  }) &
    (CategoryObservableChain & {
      get: <R extends CategoryRequest>(
        request: R,
        defaultValue?: MapType<Category, R> | null,
      ) => Observable<MapType<Category, R> | null>
    })
  categoryList: ((args?: {
    /** Filter by fields */
    filter?: FilterFindManyCategoryInput | null
    skip?: Int | null
    limit?: Int | null
    sort?: SortFindManyCategoryInput | null
  }) => {
    get: <R extends CategoryRequest>(
      request: R,
      defaultValue?: MapType<Category | null, R>[] | null,
    ) => Observable<MapType<Category | null, R>[] | null>
  }) & {
    get: <R extends CategoryRequest>(
      request: R,
      defaultValue?: MapType<Category | null, R>[] | null,
    ) => Observable<MapType<Category | null, R>[] | null>
  }
  customer: ((args?: {
    /** Filter by fields */
    filter?: FilterFindOneCustomerInput | null
    skip?: Int | null
    sort?: SortFindOneCustomerInput | null
  }) => CustomerObservableChain & {
    get: <R extends CustomerRequest>(
      request: R,
      defaultValue?: MapType<Customer, R> | null,
    ) => Observable<MapType<Customer, R> | null>
  }) &
    (CustomerObservableChain & {
      get: <R extends CustomerRequest>(
        request: R,
        defaultValue?: MapType<Customer, R> | null,
      ) => Observable<MapType<Customer, R> | null>
    })
  customerPagination: ((args?: {
    /** Page number for displaying */
    page?: Int | null
    perPage?: Int | null
    /** Filter by fields */
    filter?: FilterFindManyCustomerInput | null
    sort?: SortFindManyCustomerInput | null
  }) => CustomerPaginationObservableChain & {
    get: <R extends CustomerPaginationRequest>(
      request: R,
      defaultValue?: MapType<CustomerPagination, R> | null,
    ) => Observable<MapType<CustomerPagination, R> | null>
  }) &
    (CustomerPaginationObservableChain & {
      get: <R extends CustomerPaginationRequest>(
        request: R,
        defaultValue?: MapType<CustomerPagination, R> | null,
      ) => Observable<MapType<CustomerPagination, R> | null>
    })
  customerConnection: ((args?: {
    /** Forward pagination argument for returning at most first edges */
    first?: Int | null
    /** Forward pagination argument for returning at most first edges */
    after?: String | null
    /** Backward pagination argument for returning at most last edges */
    last?: Int | null
    /** Backward pagination argument for returning at most last edges */
    before?: String | null
    /** Filter by fields */
    filter?: FilterFindManyCustomerInput | null
    /** Sort argument for data ordering */
    sort?: SortConnectionCustomerEnum | null
  }) => CustomerConnectionObservableChain & {
    get: <R extends CustomerConnectionRequest>(
      request: R,
      defaultValue?: MapType<CustomerConnection, R> | null,
    ) => Observable<MapType<CustomerConnection, R> | null>
  }) &
    (CustomerConnectionObservableChain & {
      get: <R extends CustomerConnectionRequest>(
        request: R,
        defaultValue?: MapType<CustomerConnection, R> | null,
      ) => Observable<MapType<CustomerConnection, R> | null>
    })
  employee: ((args?: {
    /** Filter by fields */
    filter?: FilterFindOneEmployeeInput | null
    skip?: Int | null
    sort?: SortFindOneEmployeeInput | null
  }) => EmployeeObservableChain & {
    get: <R extends EmployeeRequest>(
      request: R,
      defaultValue?: MapType<Employee, R> | null,
    ) => Observable<MapType<Employee, R> | null>
  }) &
    (EmployeeObservableChain & {
      get: <R extends EmployeeRequest>(
        request: R,
        defaultValue?: MapType<Employee, R> | null,
      ) => Observable<MapType<Employee, R> | null>
    })
  employeeList: ((args?: {
    /** Filter by fields */
    filter?: FilterFindManyEmployeeInput | null
    skip?: Int | null
    limit?: Int | null
    sort?: SortFindManyEmployeeInput | null
  }) => {
    get: <R extends EmployeeRequest>(
      request: R,
      defaultValue?: MapType<Employee | null, R>[] | null,
    ) => Observable<MapType<Employee | null, R>[] | null>
  }) & {
    get: <R extends EmployeeRequest>(
      request: R,
      defaultValue?: MapType<Employee | null, R>[] | null,
    ) => Observable<MapType<Employee | null, R>[] | null>
  }
  employeePagination: ((args?: {
    /** Page number for displaying */
    page?: Int | null
    perPage?: Int | null
    /** Filter by fields */
    filter?: FilterFindManyEmployeeInput | null
    sort?: SortFindManyEmployeeInput | null
  }) => EmployeePaginationObservableChain & {
    get: <R extends EmployeePaginationRequest>(
      request: R,
      defaultValue?: MapType<EmployeePagination, R> | null,
    ) => Observable<MapType<EmployeePagination, R> | null>
  }) &
    (EmployeePaginationObservableChain & {
      get: <R extends EmployeePaginationRequest>(
        request: R,
        defaultValue?: MapType<EmployeePagination, R> | null,
      ) => Observable<MapType<EmployeePagination, R> | null>
    })
  order: ((args?: {
    /** Filter by fields */
    filter?: FilterFindOneOrderInput | null
    skip?: Int | null
    sort?: SortFindOneOrderInput | null
  }) => OrderObservableChain & {
    get: <R extends OrderRequest>(
      request: R,
      defaultValue?: MapType<Order, R> | null,
    ) => Observable<MapType<Order, R> | null>
  }) &
    (OrderObservableChain & {
      get: <R extends OrderRequest>(
        request: R,
        defaultValue?: MapType<Order, R> | null,
      ) => Observable<MapType<Order, R> | null>
    })
  orderPagination: ((args?: {
    /** Page number for displaying */
    page?: Int | null
    perPage?: Int | null
    /** Filter by fields */
    filter?: FilterFindManyOrderInput | null
    sort?: SortFindManyOrderInput | null
  }) => OrderPaginationObservableChain & {
    get: <R extends OrderPaginationRequest>(
      request: R,
      defaultValue?: MapType<OrderPagination, R> | null,
    ) => Observable<MapType<OrderPagination, R> | null>
  }) &
    (OrderPaginationObservableChain & {
      get: <R extends OrderPaginationRequest>(
        request: R,
        defaultValue?: MapType<OrderPagination, R> | null,
      ) => Observable<MapType<OrderPagination, R> | null>
    })
  orderConnection: ((args?: {
    /** Forward pagination argument for returning at most first edges */
    first?: Int | null
    /** Forward pagination argument for returning at most first edges */
    after?: String | null
    /** Backward pagination argument for returning at most last edges */
    last?: Int | null
    /** Backward pagination argument for returning at most last edges */
    before?: String | null
    /** Filter by fields */
    filter?: FilterFindManyOrderInput | null
    /** Sort argument for data ordering */
    sort?: SortConnectionOrderEnum | null
  }) => OrderConnectionObservableChain & {
    get: <R extends OrderConnectionRequest>(
      request: R,
      defaultValue?: MapType<OrderConnection, R> | null,
    ) => Observable<MapType<OrderConnection, R> | null>
  }) &
    (OrderConnectionObservableChain & {
      get: <R extends OrderConnectionRequest>(
        request: R,
        defaultValue?: MapType<OrderConnection, R> | null,
      ) => Observable<MapType<OrderConnection, R> | null>
    })
  product: ((args?: {
    /** Filter by fields */
    filter?: FilterFindOneProductInput | null
    skip?: Int | null
    sort?: SortFindOneProductInput | null
  }) => ProductObservableChain & {
    get: <R extends ProductRequest>(
      request: R,
      defaultValue?: MapType<Product, R> | null,
    ) => Observable<MapType<Product, R> | null>
  }) &
    (ProductObservableChain & {
      get: <R extends ProductRequest>(
        request: R,
        defaultValue?: MapType<Product, R> | null,
      ) => Observable<MapType<Product, R> | null>
    })
  productList: ((args?: {
    /** Filter by fields */
    filter?: FilterFindManyProductInput | null
    skip?: Int | null
    limit?: Int | null
    sort?: SortFindManyProductInput | null
  }) => {
    get: <R extends ProductRequest>(
      request: R,
      defaultValue?: MapType<Product | null, R>[] | null,
    ) => Observable<MapType<Product | null, R>[] | null>
  }) & {
    get: <R extends ProductRequest>(
      request: R,
      defaultValue?: MapType<Product | null, R>[] | null,
    ) => Observable<MapType<Product | null, R>[] | null>
  }
  productPagination: ((args?: {
    /** Page number for displaying */
    page?: Int | null
    perPage?: Int | null
    /** Filter by fields */
    filter?: FilterFindManyProductInput | null
    sort?: SortFindManyProductInput | null
  }) => ProductPaginationObservableChain & {
    get: <R extends ProductPaginationRequest>(
      request: R,
      defaultValue?: MapType<ProductPagination, R> | null,
    ) => Observable<MapType<ProductPagination, R> | null>
  }) &
    (ProductPaginationObservableChain & {
      get: <R extends ProductPaginationRequest>(
        request: R,
        defaultValue?: MapType<ProductPagination, R> | null,
      ) => Observable<MapType<ProductPagination, R> | null>
    })
  productConnection: ((args?: {
    /** Forward pagination argument for returning at most first edges */
    first?: Int | null
    /** Forward pagination argument for returning at most first edges */
    after?: String | null
    /** Backward pagination argument for returning at most last edges */
    last?: Int | null
    /** Backward pagination argument for returning at most last edges */
    before?: String | null
    /** Filter by fields */
    filter?: FilterFindManyProductInput | null
    /** Sort argument for data ordering */
    sort?: SortConnectionProductEnum | null
  }) => ProductConnectionObservableChain & {
    get: <R extends ProductConnectionRequest>(
      request: R,
      defaultValue?: MapType<ProductConnection, R> | null,
    ) => Observable<MapType<ProductConnection, R> | null>
  }) &
    (ProductConnectionObservableChain & {
      get: <R extends ProductConnectionRequest>(
        request: R,
        defaultValue?: MapType<ProductConnection, R> | null,
      ) => Observable<MapType<ProductConnection, R> | null>
    })
  region: ((args?: {
    /** Filter by fields */
    filter?: FilterFindOneRegionInput | null
    skip?: Int | null
    sort?: SortFindOneRegionInput | null
  }) => RegionObservableChain & {
    get: <R extends RegionRequest>(
      request: R,
      defaultValue?: MapType<Region, R> | null,
    ) => Observable<MapType<Region, R> | null>
  }) &
    (RegionObservableChain & {
      get: <R extends RegionRequest>(
        request: R,
        defaultValue?: MapType<Region, R> | null,
      ) => Observable<MapType<Region, R> | null>
    })
  regionList: ((args?: {
    /** Filter by fields */
    filter?: FilterFindManyRegionInput | null
    skip?: Int | null
    limit?: Int | null
    sort?: SortFindManyRegionInput | null
  }) => {
    get: <R extends RegionRequest>(
      request: R,
      defaultValue?: MapType<Region | null, R>[] | null,
    ) => Observable<MapType<Region | null, R>[] | null>
  }) & {
    get: <R extends RegionRequest>(
      request: R,
      defaultValue?: MapType<Region | null, R>[] | null,
    ) => Observable<MapType<Region | null, R>[] | null>
  }
  shipper: ((args?: {
    /** Filter by fields */
    filter?: FilterFindOneShipperInput | null
    skip?: Int | null
    sort?: SortFindOneShipperInput | null
  }) => ShipperObservableChain & {
    get: <R extends ShipperRequest>(
      request: R,
      defaultValue?: MapType<Shipper, R> | null,
    ) => Observable<MapType<Shipper, R> | null>
  }) &
    (ShipperObservableChain & {
      get: <R extends ShipperRequest>(
        request: R,
        defaultValue?: MapType<Shipper, R> | null,
      ) => Observable<MapType<Shipper, R> | null>
    })
  shipperList: ((args?: {
    /** Filter by fields */
    filter?: FilterFindManyShipperInput | null
    skip?: Int | null
    limit?: Int | null
    sort?: SortFindManyShipperInput | null
  }) => {
    get: <R extends ShipperRequest>(
      request: R,
      defaultValue?: MapType<Shipper | null, R>[] | null,
    ) => Observable<MapType<Shipper | null, R>[] | null>
  }) & {
    get: <R extends ShipperRequest>(
      request: R,
      defaultValue?: MapType<Shipper | null, R>[] | null,
    ) => Observable<MapType<Shipper | null, R>[] | null>
  }
  supplier: ((args?: {
    /** Filter by fields */
    filter?: FilterFindOneSupplierInput | null
    skip?: Int | null
    sort?: SortFindOneSupplierInput | null
  }) => SupplierObservableChain & {
    get: <R extends SupplierRequest>(
      request: R,
      defaultValue?: MapType<Supplier, R> | null,
    ) => Observable<MapType<Supplier, R> | null>
  }) &
    (SupplierObservableChain & {
      get: <R extends SupplierRequest>(
        request: R,
        defaultValue?: MapType<Supplier, R> | null,
      ) => Observable<MapType<Supplier, R> | null>
    })
  supplierConnection: ((args?: {
    /** Forward pagination argument for returning at most first edges */
    first?: Int | null
    /** Forward pagination argument for returning at most first edges */
    after?: String | null
    /** Backward pagination argument for returning at most last edges */
    last?: Int | null
    /** Backward pagination argument for returning at most last edges */
    before?: String | null
    /** Filter by fields */
    filter?: FilterFindManySupplierInput | null
    /** Sort argument for data ordering */
    sort?: SortConnectionSupplierEnum | null
  }) => SupplierConnectionObservableChain & {
    get: <R extends SupplierConnectionRequest>(
      request: R,
      defaultValue?: MapType<SupplierConnection, R> | null,
    ) => Observable<MapType<SupplierConnection, R> | null>
  }) &
    (SupplierConnectionObservableChain & {
      get: <R extends SupplierConnectionRequest>(
        request: R,
        defaultValue?: MapType<SupplierConnection, R> | null,
      ) => Observable<MapType<SupplierConnection, R> | null>
    })
}

export interface CategoryPromiseChain {
  /** Category unique ID */
  categoryID: { get: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
  name: { get: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  description: { get: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  _id: { get: (request?: boolean | number, defaultValue?: MongoID) => Promise<MongoID> }
  productConnection: ((args?: {
    /** Forward pagination argument for returning at most first edges */
    first?: Int | null
    /** Forward pagination argument for returning at most first edges */
    after?: String | null
    /** Backward pagination argument for returning at most last edges */
    last?: Int | null
    /** Backward pagination argument for returning at most last edges */
    before?: String | null
    /** Sort argument for data ordering */
    sort?: SortConnectionProductEnum | null
  }) => ProductConnectionPromiseChain & {
    get: <R extends ProductConnectionRequest>(
      request: R,
      defaultValue?: MapType<ProductConnection, R> | null,
    ) => Promise<MapType<ProductConnection, R> | null>
  }) &
    (ProductConnectionPromiseChain & {
      get: <R extends ProductConnectionRequest>(
        request: R,
        defaultValue?: MapType<ProductConnection, R> | null,
      ) => Promise<MapType<ProductConnection, R> | null>
    })
  productList: ((args?: {
    skip?: Int | null
    limit?: Int | null
    sort?: SortFindManyProductInput | null
  }) => {
    get: <R extends ProductRequest>(
      request: R,
      defaultValue?: MapType<Product | null, R>[] | null,
    ) => Promise<MapType<Product | null, R>[] | null>
  }) & {
    get: <R extends ProductRequest>(
      request: R,
      defaultValue?: MapType<Product | null, R>[] | null,
    ) => Promise<MapType<Product | null, R>[] | null>
  }
}

export interface CategoryObservableChain {
  /** Category unique ID */
  categoryID: { get: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
  name: { get: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  description: { get: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  _id: { get: (request?: boolean | number, defaultValue?: MongoID) => Observable<MongoID> }
  productConnection: ((args?: {
    /** Forward pagination argument for returning at most first edges */
    first?: Int | null
    /** Forward pagination argument for returning at most first edges */
    after?: String | null
    /** Backward pagination argument for returning at most last edges */
    last?: Int | null
    /** Backward pagination argument for returning at most last edges */
    before?: String | null
    /** Sort argument for data ordering */
    sort?: SortConnectionProductEnum | null
  }) => ProductConnectionObservableChain & {
    get: <R extends ProductConnectionRequest>(
      request: R,
      defaultValue?: MapType<ProductConnection, R> | null,
    ) => Observable<MapType<ProductConnection, R> | null>
  }) &
    (ProductConnectionObservableChain & {
      get: <R extends ProductConnectionRequest>(
        request: R,
        defaultValue?: MapType<ProductConnection, R> | null,
      ) => Observable<MapType<ProductConnection, R> | null>
    })
  productList: ((args?: {
    skip?: Int | null
    limit?: Int | null
    sort?: SortFindManyProductInput | null
  }) => {
    get: <R extends ProductRequest>(
      request: R,
      defaultValue?: MapType<Product | null, R>[] | null,
    ) => Observable<MapType<Product | null, R>[] | null>
  }) & {
    get: <R extends ProductRequest>(
      request: R,
      defaultValue?: MapType<Product | null, R>[] | null,
    ) => Observable<MapType<Product | null, R>[] | null>
  }
}

/** A connection to a list of items. */
export interface ProductConnectionPromiseChain {
  /** Total object count. */
  count: { get: (request?: boolean | number, defaultValue?: Int) => Promise<Int> }
  /** Information to aid in pagination. */
  pageInfo: PageInfoPromiseChain & {
    get: <R extends PageInfoRequest>(request: R, defaultValue?: PageInfo) => Promise<PageInfo>
  }
  /** Information to aid in pagination. */
  edges: { get: <R extends ProductEdgeRequest>(request: R, defaultValue?: ProductEdge[]) => Promise<ProductEdge[]> }
}

/** A connection to a list of items. */
export interface ProductConnectionObservableChain {
  /** Total object count. */
  count: { get: (request?: boolean | number, defaultValue?: Int) => Observable<Int> }
  /** Information to aid in pagination. */
  pageInfo: PageInfoObservableChain & {
    get: <R extends PageInfoRequest>(request: R, defaultValue?: PageInfo) => Observable<PageInfo>
  }
  /** Information to aid in pagination. */
  edges: { get: <R extends ProductEdgeRequest>(request: R, defaultValue?: ProductEdge[]) => Observable<ProductEdge[]> }
}

/** Information about pagination in a connection. */
export interface PageInfoPromiseChain {
  /** When paginating forwards, are there more items? */
  hasNextPage: { get: (request?: boolean | number, defaultValue?: Boolean) => Promise<Boolean> }
  /** When paginating backwards, are there more items? */
  hasPreviousPage: { get: (request?: boolean | number, defaultValue?: Boolean) => Promise<Boolean> }
  /** When paginating backwards, the cursor to continue. */
  startCursor: { get: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  /** When paginating forwards, the cursor to continue. */
  endCursor: { get: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
}

/** Information about pagination in a connection. */
export interface PageInfoObservableChain {
  /** When paginating forwards, are there more items? */
  hasNextPage: { get: (request?: boolean | number, defaultValue?: Boolean) => Observable<Boolean> }
  /** When paginating backwards, are there more items? */
  hasPreviousPage: { get: (request?: boolean | number, defaultValue?: Boolean) => Observable<Boolean> }
  /** When paginating backwards, the cursor to continue. */
  startCursor: { get: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  /** When paginating forwards, the cursor to continue. */
  endCursor: { get: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
}

/** An edge in a connection. */
export interface ProductEdgePromiseChain {
  /** The item at the end of the edge */
  node: ProductPromiseChain & { get: <R extends ProductRequest>(request: R, defaultValue?: Product) => Promise<Product> }
  /** A cursor for use in pagination */
  cursor: { get: (request?: boolean | number, defaultValue?: String) => Promise<String> }
}

/** An edge in a connection. */
export interface ProductEdgeObservableChain {
  /** The item at the end of the edge */
  node: ProductObservableChain & {
    get: <R extends ProductRequest>(request: R, defaultValue?: Product) => Observable<Product>
  }
  /** A cursor for use in pagination */
  cursor: { get: (request?: boolean | number, defaultValue?: String) => Observable<String> }
}

export interface ProductPromiseChain {
  /** Unique product id */
  productID: { get: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
  name: { get: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  supplierID: { get: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
  categoryID: { get: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
  quantityPerUnit: { get: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  unitPrice: { get: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
  unitsInStock: { get: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
  unitsOnOrder: { get: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
  reorderLevel: { get: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
  discontinued: { get: (request?: boolean | number, defaultValue?: Boolean | null) => Promise<Boolean | null> }
  _id: { get: (request?: boolean | number, defaultValue?: MongoID) => Promise<MongoID> }
  orderConnection: ((args?: {
    /** Forward pagination argument for returning at most first edges */
    first?: Int | null
    /** Forward pagination argument for returning at most first edges */
    after?: String | null
    /** Backward pagination argument for returning at most last edges */
    last?: Int | null
    /** Backward pagination argument for returning at most last edges */
    before?: String | null
    /** Sort argument for data ordering */
    sort?: SortConnectionOrderEnum | null
  }) => OrderConnectionPromiseChain & {
    get: <R extends OrderConnectionRequest>(
      request: R,
      defaultValue?: MapType<OrderConnection, R> | null,
    ) => Promise<MapType<OrderConnection, R> | null>
  }) &
    (OrderConnectionPromiseChain & {
      get: <R extends OrderConnectionRequest>(
        request: R,
        defaultValue?: MapType<OrderConnection, R> | null,
      ) => Promise<MapType<OrderConnection, R> | null>
    })
  orderList: ((args?: {
    skip?: Int | null
    limit?: Int | null
    sort?: SortFindManyOrderInput | null
  }) => {
    get: <R extends OrderRequest>(
      request: R,
      defaultValue?: MapType<Order | null, R>[] | null,
    ) => Promise<MapType<Order | null, R>[] | null>
  }) & {
    get: <R extends OrderRequest>(
      request: R,
      defaultValue?: MapType<Order | null, R>[] | null,
    ) => Promise<MapType<Order | null, R>[] | null>
  }
  supplier: SupplierPromiseChain & {
    get: <R extends SupplierRequest>(
      request: R,
      defaultValue?: MapType<Supplier, R> | null,
    ) => Promise<MapType<Supplier, R> | null>
  }
  category: CategoryPromiseChain & {
    get: <R extends CategoryRequest>(
      request: R,
      defaultValue?: MapType<Category, R> | null,
    ) => Promise<MapType<Category, R> | null>
  }
}

export interface ProductObservableChain {
  /** Unique product id */
  productID: { get: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
  name: { get: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  supplierID: { get: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
  categoryID: { get: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
  quantityPerUnit: { get: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  unitPrice: { get: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
  unitsInStock: { get: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
  unitsOnOrder: { get: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
  reorderLevel: { get: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
  discontinued: { get: (request?: boolean | number, defaultValue?: Boolean | null) => Observable<Boolean | null> }
  _id: { get: (request?: boolean | number, defaultValue?: MongoID) => Observable<MongoID> }
  orderConnection: ((args?: {
    /** Forward pagination argument for returning at most first edges */
    first?: Int | null
    /** Forward pagination argument for returning at most first edges */
    after?: String | null
    /** Backward pagination argument for returning at most last edges */
    last?: Int | null
    /** Backward pagination argument for returning at most last edges */
    before?: String | null
    /** Sort argument for data ordering */
    sort?: SortConnectionOrderEnum | null
  }) => OrderConnectionObservableChain & {
    get: <R extends OrderConnectionRequest>(
      request: R,
      defaultValue?: MapType<OrderConnection, R> | null,
    ) => Observable<MapType<OrderConnection, R> | null>
  }) &
    (OrderConnectionObservableChain & {
      get: <R extends OrderConnectionRequest>(
        request: R,
        defaultValue?: MapType<OrderConnection, R> | null,
      ) => Observable<MapType<OrderConnection, R> | null>
    })
  orderList: ((args?: {
    skip?: Int | null
    limit?: Int | null
    sort?: SortFindManyOrderInput | null
  }) => {
    get: <R extends OrderRequest>(
      request: R,
      defaultValue?: MapType<Order | null, R>[] | null,
    ) => Observable<MapType<Order | null, R>[] | null>
  }) & {
    get: <R extends OrderRequest>(
      request: R,
      defaultValue?: MapType<Order | null, R>[] | null,
    ) => Observable<MapType<Order | null, R>[] | null>
  }
  supplier: SupplierObservableChain & {
    get: <R extends SupplierRequest>(
      request: R,
      defaultValue?: MapType<Supplier, R> | null,
    ) => Observable<MapType<Supplier, R> | null>
  }
  category: CategoryObservableChain & {
    get: <R extends CategoryRequest>(
      request: R,
      defaultValue?: MapType<Category, R> | null,
    ) => Observable<MapType<Category, R> | null>
  }
}

/** A connection to a list of items. */
export interface OrderConnectionPromiseChain {
  /** Total object count. */
  count: { get: (request?: boolean | number, defaultValue?: Int) => Promise<Int> }
  /** Information to aid in pagination. */
  pageInfo: PageInfoPromiseChain & {
    get: <R extends PageInfoRequest>(request: R, defaultValue?: PageInfo) => Promise<PageInfo>
  }
  /** Information to aid in pagination. */
  edges: { get: <R extends OrderEdgeRequest>(request: R, defaultValue?: OrderEdge[]) => Promise<OrderEdge[]> }
}

/** A connection to a list of items. */
export interface OrderConnectionObservableChain {
  /** Total object count. */
  count: { get: (request?: boolean | number, defaultValue?: Int) => Observable<Int> }
  /** Information to aid in pagination. */
  pageInfo: PageInfoObservableChain & {
    get: <R extends PageInfoRequest>(request: R, defaultValue?: PageInfo) => Observable<PageInfo>
  }
  /** Information to aid in pagination. */
  edges: { get: <R extends OrderEdgeRequest>(request: R, defaultValue?: OrderEdge[]) => Observable<OrderEdge[]> }
}

/** An edge in a connection. */
export interface OrderEdgePromiseChain {
  /** The item at the end of the edge */
  node: OrderPromiseChain & { get: <R extends OrderRequest>(request: R, defaultValue?: Order) => Promise<Order> }
  /** A cursor for use in pagination */
  cursor: { get: (request?: boolean | number, defaultValue?: String) => Promise<String> }
}

/** An edge in a connection. */
export interface OrderEdgeObservableChain {
  /** The item at the end of the edge */
  node: OrderObservableChain & { get: <R extends OrderRequest>(request: R, defaultValue?: Order) => Observable<Order> }
  /** A cursor for use in pagination */
  cursor: { get: (request?: boolean | number, defaultValue?: String) => Observable<String> }
}

export interface OrderPromiseChain {
  /** Order unique ID */
  orderID: { get: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
  customerID: { get: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  employeeID: { get: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
  orderDate: { get: (request?: boolean | number, defaultValue?: Date | null) => Promise<Date | null> }
  requiredDate: { get: (request?: boolean | number, defaultValue?: Date | null) => Promise<Date | null> }
  shippedDate: { get: (request?: boolean | number, defaultValue?: Date | null) => Promise<Date | null> }
  shipVia: { get: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
  freight: { get: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
  shipName: { get: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  shipAddress: CustomerAddressPromiseChain & {
    get: <R extends CustomerAddressRequest>(
      request: R,
      defaultValue?: MapType<CustomerAddress, R> | null,
    ) => Promise<MapType<CustomerAddress, R> | null>
  }
  /** List of ordered products */
  details: {
    get: <R extends OrderDetailsRequest>(
      request: R,
      defaultValue?: MapType<OrderDetails | null, R>[] | null,
    ) => Promise<MapType<OrderDetails | null, R>[] | null>
  }
  _id: { get: (request?: boolean | number, defaultValue?: MongoID) => Promise<MongoID> }
  customer: CustomerPromiseChain & {
    get: <R extends CustomerRequest>(
      request: R,
      defaultValue?: MapType<Customer, R> | null,
    ) => Promise<MapType<Customer, R> | null>
  }
  employee: EmployeePromiseChain & {
    get: <R extends EmployeeRequest>(
      request: R,
      defaultValue?: MapType<Employee, R> | null,
    ) => Promise<MapType<Employee, R> | null>
  }
  shipper: ShipperPromiseChain & {
    get: <R extends ShipperRequest>(
      request: R,
      defaultValue?: MapType<Shipper, R> | null,
    ) => Promise<MapType<Shipper, R> | null>
  }
}

export interface OrderObservableChain {
  /** Order unique ID */
  orderID: { get: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
  customerID: { get: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  employeeID: { get: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
  orderDate: { get: (request?: boolean | number, defaultValue?: Date | null) => Observable<Date | null> }
  requiredDate: { get: (request?: boolean | number, defaultValue?: Date | null) => Observable<Date | null> }
  shippedDate: { get: (request?: boolean | number, defaultValue?: Date | null) => Observable<Date | null> }
  shipVia: { get: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
  freight: { get: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
  shipName: { get: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  shipAddress: CustomerAddressObservableChain & {
    get: <R extends CustomerAddressRequest>(
      request: R,
      defaultValue?: MapType<CustomerAddress, R> | null,
    ) => Observable<MapType<CustomerAddress, R> | null>
  }
  /** List of ordered products */
  details: {
    get: <R extends OrderDetailsRequest>(
      request: R,
      defaultValue?: MapType<OrderDetails | null, R>[] | null,
    ) => Observable<MapType<OrderDetails | null, R>[] | null>
  }
  _id: { get: (request?: boolean | number, defaultValue?: MongoID) => Observable<MongoID> }
  customer: CustomerObservableChain & {
    get: <R extends CustomerRequest>(
      request: R,
      defaultValue?: MapType<Customer, R> | null,
    ) => Observable<MapType<Customer, R> | null>
  }
  employee: EmployeeObservableChain & {
    get: <R extends EmployeeRequest>(
      request: R,
      defaultValue?: MapType<Employee, R> | null,
    ) => Observable<MapType<Employee, R> | null>
  }
  shipper: ShipperObservableChain & {
    get: <R extends ShipperRequest>(
      request: R,
      defaultValue?: MapType<Shipper, R> | null,
    ) => Observable<MapType<Shipper, R> | null>
  }
}

export interface CustomerAddressPromiseChain {
  street: { get: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  city: { get: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  region: { get: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  postalCode: { get: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  country: { get: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  phone: { get: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
}

export interface CustomerAddressObservableChain {
  street: { get: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  city: { get: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  region: { get: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  postalCode: { get: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  country: { get: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  phone: { get: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
}

export interface OrderDetailsPromiseChain {
  productID: { get: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
  unitPrice: { get: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
  quantity: { get: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
  discount: { get: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
  product: ProductPromiseChain & {
    get: <R extends ProductRequest>(
      request: R,
      defaultValue?: MapType<Product, R> | null,
    ) => Promise<MapType<Product, R> | null>
  }
}

export interface OrderDetailsObservableChain {
  productID: { get: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
  unitPrice: { get: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
  quantity: { get: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
  discount: { get: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
  product: ProductObservableChain & {
    get: <R extends ProductRequest>(
      request: R,
      defaultValue?: MapType<Product, R> | null,
    ) => Observable<MapType<Product, R> | null>
  }
}

export interface CustomerPromiseChain {
  /** Customer unique ID */
  customerID: { get: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  companyName: { get: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  contactName: { get: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  contactTitle: { get: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  address: CustomerAddressPromiseChain & {
    get: <R extends CustomerAddressRequest>(
      request: R,
      defaultValue?: MapType<CustomerAddress, R> | null,
    ) => Promise<MapType<CustomerAddress, R> | null>
  }
  _id: { get: (request?: boolean | number, defaultValue?: MongoID) => Promise<MongoID> }
  orderConnection: ((args?: {
    /** Forward pagination argument for returning at most first edges */
    first?: Int | null
    /** Forward pagination argument for returning at most first edges */
    after?: String | null
    /** Backward pagination argument for returning at most last edges */
    last?: Int | null
    /** Backward pagination argument for returning at most last edges */
    before?: String | null
    /** Sort argument for data ordering */
    sort?: SortConnectionOrderEnum | null
  }) => OrderConnectionPromiseChain & {
    get: <R extends OrderConnectionRequest>(
      request: R,
      defaultValue?: MapType<OrderConnection, R> | null,
    ) => Promise<MapType<OrderConnection, R> | null>
  }) &
    (OrderConnectionPromiseChain & {
      get: <R extends OrderConnectionRequest>(
        request: R,
        defaultValue?: MapType<OrderConnection, R> | null,
      ) => Promise<MapType<OrderConnection, R> | null>
    })
  orderList: ((args?: {
    skip?: Int | null
    limit?: Int | null
    sort?: SortFindManyOrderInput | null
  }) => {
    get: <R extends OrderRequest>(
      request: R,
      defaultValue?: MapType<Order | null, R>[] | null,
    ) => Promise<MapType<Order | null, R>[] | null>
  }) & {
    get: <R extends OrderRequest>(
      request: R,
      defaultValue?: MapType<Order | null, R>[] | null,
    ) => Promise<MapType<Order | null, R>[] | null>
  }
}

export interface CustomerObservableChain {
  /** Customer unique ID */
  customerID: { get: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  companyName: { get: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  contactName: { get: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  contactTitle: { get: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  address: CustomerAddressObservableChain & {
    get: <R extends CustomerAddressRequest>(
      request: R,
      defaultValue?: MapType<CustomerAddress, R> | null,
    ) => Observable<MapType<CustomerAddress, R> | null>
  }
  _id: { get: (request?: boolean | number, defaultValue?: MongoID) => Observable<MongoID> }
  orderConnection: ((args?: {
    /** Forward pagination argument for returning at most first edges */
    first?: Int | null
    /** Forward pagination argument for returning at most first edges */
    after?: String | null
    /** Backward pagination argument for returning at most last edges */
    last?: Int | null
    /** Backward pagination argument for returning at most last edges */
    before?: String | null
    /** Sort argument for data ordering */
    sort?: SortConnectionOrderEnum | null
  }) => OrderConnectionObservableChain & {
    get: <R extends OrderConnectionRequest>(
      request: R,
      defaultValue?: MapType<OrderConnection, R> | null,
    ) => Observable<MapType<OrderConnection, R> | null>
  }) &
    (OrderConnectionObservableChain & {
      get: <R extends OrderConnectionRequest>(
        request: R,
        defaultValue?: MapType<OrderConnection, R> | null,
      ) => Observable<MapType<OrderConnection, R> | null>
    })
  orderList: ((args?: {
    skip?: Int | null
    limit?: Int | null
    sort?: SortFindManyOrderInput | null
  }) => {
    get: <R extends OrderRequest>(
      request: R,
      defaultValue?: MapType<Order | null, R>[] | null,
    ) => Observable<MapType<Order | null, R>[] | null>
  }) & {
    get: <R extends OrderRequest>(
      request: R,
      defaultValue?: MapType<Order | null, R>[] | null,
    ) => Observable<MapType<Order | null, R>[] | null>
  }
}

export interface EmployeePromiseChain {
  /** Category unique ID */
  employeeID: { get: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
  lastName: { get: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  firstName: { get: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  title: { get: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  titleOfCourtesy: { get: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  birthDate: { get: (request?: boolean | number, defaultValue?: Date | null) => Promise<Date | null> }
  hireDate: { get: (request?: boolean | number, defaultValue?: Date | null) => Promise<Date | null> }
  address: CustomerAddressPromiseChain & {
    get: <R extends CustomerAddressRequest>(
      request: R,
      defaultValue?: MapType<CustomerAddress, R> | null,
    ) => Promise<MapType<CustomerAddress, R> | null>
  }
  notes: { get: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  /** ID of chief */
  reportsTo: { get: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
  /** Attached territory ID from region collection */
  territoryIDs: {
    get: (request?: boolean | number, defaultValue?: (Float | null)[] | null) => Promise<(Float | null)[] | null>
  }
  _id: { get: (request?: boolean | number, defaultValue?: MongoID) => Promise<MongoID> }
  chief: EmployeePromiseChain & {
    get: <R extends EmployeeRequest>(
      request: R,
      defaultValue?: MapType<Employee, R> | null,
    ) => Promise<MapType<Employee, R> | null>
  }
  subordinates: ((args?: {
    skip?: Int | null
    limit?: Int | null
    sort?: SortFindManyEmployeeInput | null
  }) => {
    get: <R extends EmployeeRequest>(
      request: R,
      defaultValue?: MapType<Employee | null, R>[] | null,
    ) => Promise<MapType<Employee | null, R>[] | null>
  }) & {
    get: <R extends EmployeeRequest>(
      request: R,
      defaultValue?: MapType<Employee | null, R>[] | null,
    ) => Promise<MapType<Employee | null, R>[] | null>
  }
  orderConnection: ((args?: {
    /** Forward pagination argument for returning at most first edges */
    first?: Int | null
    /** Forward pagination argument for returning at most first edges */
    after?: String | null
    /** Backward pagination argument for returning at most last edges */
    last?: Int | null
    /** Backward pagination argument for returning at most last edges */
    before?: String | null
    /** Sort argument for data ordering */
    sort?: SortConnectionOrderEnum | null
  }) => OrderConnectionPromiseChain & {
    get: <R extends OrderConnectionRequest>(
      request: R,
      defaultValue?: MapType<OrderConnection, R> | null,
    ) => Promise<MapType<OrderConnection, R> | null>
  }) &
    (OrderConnectionPromiseChain & {
      get: <R extends OrderConnectionRequest>(
        request: R,
        defaultValue?: MapType<OrderConnection, R> | null,
      ) => Promise<MapType<OrderConnection, R> | null>
    })
}

export interface EmployeeObservableChain {
  /** Category unique ID */
  employeeID: { get: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
  lastName: { get: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  firstName: { get: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  title: { get: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  titleOfCourtesy: { get: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  birthDate: { get: (request?: boolean | number, defaultValue?: Date | null) => Observable<Date | null> }
  hireDate: { get: (request?: boolean | number, defaultValue?: Date | null) => Observable<Date | null> }
  address: CustomerAddressObservableChain & {
    get: <R extends CustomerAddressRequest>(
      request: R,
      defaultValue?: MapType<CustomerAddress, R> | null,
    ) => Observable<MapType<CustomerAddress, R> | null>
  }
  notes: { get: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  /** ID of chief */
  reportsTo: { get: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
  /** Attached territory ID from region collection */
  territoryIDs: {
    get: (request?: boolean | number, defaultValue?: (Float | null)[] | null) => Observable<(Float | null)[] | null>
  }
  _id: { get: (request?: boolean | number, defaultValue?: MongoID) => Observable<MongoID> }
  chief: EmployeeObservableChain & {
    get: <R extends EmployeeRequest>(
      request: R,
      defaultValue?: MapType<Employee, R> | null,
    ) => Observable<MapType<Employee, R> | null>
  }
  subordinates: ((args?: {
    skip?: Int | null
    limit?: Int | null
    sort?: SortFindManyEmployeeInput | null
  }) => {
    get: <R extends EmployeeRequest>(
      request: R,
      defaultValue?: MapType<Employee | null, R>[] | null,
    ) => Observable<MapType<Employee | null, R>[] | null>
  }) & {
    get: <R extends EmployeeRequest>(
      request: R,
      defaultValue?: MapType<Employee | null, R>[] | null,
    ) => Observable<MapType<Employee | null, R>[] | null>
  }
  orderConnection: ((args?: {
    /** Forward pagination argument for returning at most first edges */
    first?: Int | null
    /** Forward pagination argument for returning at most first edges */
    after?: String | null
    /** Backward pagination argument for returning at most last edges */
    last?: Int | null
    /** Backward pagination argument for returning at most last edges */
    before?: String | null
    /** Sort argument for data ordering */
    sort?: SortConnectionOrderEnum | null
  }) => OrderConnectionObservableChain & {
    get: <R extends OrderConnectionRequest>(
      request: R,
      defaultValue?: MapType<OrderConnection, R> | null,
    ) => Observable<MapType<OrderConnection, R> | null>
  }) &
    (OrderConnectionObservableChain & {
      get: <R extends OrderConnectionRequest>(
        request: R,
        defaultValue?: MapType<OrderConnection, R> | null,
      ) => Observable<MapType<OrderConnection, R> | null>
    })
}

export interface ShipperPromiseChain {
  /** Shipper unique ID */
  shipperID: { get: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
  companyName: { get: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  phone: { get: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  _id: { get: (request?: boolean | number, defaultValue?: MongoID) => Promise<MongoID> }
  orderConnection: ((args?: {
    /** Forward pagination argument for returning at most first edges */
    first?: Int | null
    /** Forward pagination argument for returning at most first edges */
    after?: String | null
    /** Backward pagination argument for returning at most last edges */
    last?: Int | null
    /** Backward pagination argument for returning at most last edges */
    before?: String | null
    /** Sort argument for data ordering */
    sort?: SortConnectionOrderEnum | null
  }) => OrderConnectionPromiseChain & {
    get: <R extends OrderConnectionRequest>(
      request: R,
      defaultValue?: MapType<OrderConnection, R> | null,
    ) => Promise<MapType<OrderConnection, R> | null>
  }) &
    (OrderConnectionPromiseChain & {
      get: <R extends OrderConnectionRequest>(
        request: R,
        defaultValue?: MapType<OrderConnection, R> | null,
      ) => Promise<MapType<OrderConnection, R> | null>
    })
}

export interface ShipperObservableChain {
  /** Shipper unique ID */
  shipperID: { get: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
  companyName: { get: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  phone: { get: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  _id: { get: (request?: boolean | number, defaultValue?: MongoID) => Observable<MongoID> }
  orderConnection: ((args?: {
    /** Forward pagination argument for returning at most first edges */
    first?: Int | null
    /** Forward pagination argument for returning at most first edges */
    after?: String | null
    /** Backward pagination argument for returning at most last edges */
    last?: Int | null
    /** Backward pagination argument for returning at most last edges */
    before?: String | null
    /** Sort argument for data ordering */
    sort?: SortConnectionOrderEnum | null
  }) => OrderConnectionObservableChain & {
    get: <R extends OrderConnectionRequest>(
      request: R,
      defaultValue?: MapType<OrderConnection, R> | null,
    ) => Observable<MapType<OrderConnection, R> | null>
  }) &
    (OrderConnectionObservableChain & {
      get: <R extends OrderConnectionRequest>(
        request: R,
        defaultValue?: MapType<OrderConnection, R> | null,
      ) => Observable<MapType<OrderConnection, R> | null>
    })
}

export interface SupplierPromiseChain {
  /** Supplier unique ID */
  supplierID: { get: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
  companyName: { get: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  contactName: { get: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  contactTitle: { get: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  address: CustomerAddressPromiseChain & {
    get: <R extends CustomerAddressRequest>(
      request: R,
      defaultValue?: MapType<CustomerAddress, R> | null,
    ) => Promise<MapType<CustomerAddress, R> | null>
  }
  _id: { get: (request?: boolean | number, defaultValue?: MongoID) => Promise<MongoID> }
  productConnection: ((args?: {
    /** Forward pagination argument for returning at most first edges */
    first?: Int | null
    /** Forward pagination argument for returning at most first edges */
    after?: String | null
    /** Backward pagination argument for returning at most last edges */
    last?: Int | null
    /** Backward pagination argument for returning at most last edges */
    before?: String | null
    /** Sort argument for data ordering */
    sort?: SortConnectionProductEnum | null
  }) => ProductConnectionPromiseChain & {
    get: <R extends ProductConnectionRequest>(
      request: R,
      defaultValue?: MapType<ProductConnection, R> | null,
    ) => Promise<MapType<ProductConnection, R> | null>
  }) &
    (ProductConnectionPromiseChain & {
      get: <R extends ProductConnectionRequest>(
        request: R,
        defaultValue?: MapType<ProductConnection, R> | null,
      ) => Promise<MapType<ProductConnection, R> | null>
    })
}

export interface SupplierObservableChain {
  /** Supplier unique ID */
  supplierID: { get: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
  companyName: { get: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  contactName: { get: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  contactTitle: { get: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  address: CustomerAddressObservableChain & {
    get: <R extends CustomerAddressRequest>(
      request: R,
      defaultValue?: MapType<CustomerAddress, R> | null,
    ) => Observable<MapType<CustomerAddress, R> | null>
  }
  _id: { get: (request?: boolean | number, defaultValue?: MongoID) => Observable<MongoID> }
  productConnection: ((args?: {
    /** Forward pagination argument for returning at most first edges */
    first?: Int | null
    /** Forward pagination argument for returning at most first edges */
    after?: String | null
    /** Backward pagination argument for returning at most last edges */
    last?: Int | null
    /** Backward pagination argument for returning at most last edges */
    before?: String | null
    /** Sort argument for data ordering */
    sort?: SortConnectionProductEnum | null
  }) => ProductConnectionObservableChain & {
    get: <R extends ProductConnectionRequest>(
      request: R,
      defaultValue?: MapType<ProductConnection, R> | null,
    ) => Observable<MapType<ProductConnection, R> | null>
  }) &
    (ProductConnectionObservableChain & {
      get: <R extends ProductConnectionRequest>(
        request: R,
        defaultValue?: MapType<ProductConnection, R> | null,
      ) => Observable<MapType<ProductConnection, R> | null>
    })
}

/** List of items with pagination. */
export interface CustomerPaginationPromiseChain {
  /** Total object count. */
  count: { get: (request?: boolean | number, defaultValue?: Int | null) => Promise<Int | null> }
  /** Array of objects. */
  items: {
    get: <R extends CustomerRequest>(
      request: R,
      defaultValue?: MapType<Customer | null, R>[] | null,
    ) => Promise<MapType<Customer | null, R>[] | null>
  }
  /** Information to aid in pagination. */
  pageInfo: PaginationInfoPromiseChain & {
    get: <R extends PaginationInfoRequest>(request: R, defaultValue?: PaginationInfo) => Promise<PaginationInfo>
  }
}

/** List of items with pagination. */
export interface CustomerPaginationObservableChain {
  /** Total object count. */
  count: { get: (request?: boolean | number, defaultValue?: Int | null) => Observable<Int | null> }
  /** Array of objects. */
  items: {
    get: <R extends CustomerRequest>(
      request: R,
      defaultValue?: MapType<Customer | null, R>[] | null,
    ) => Observable<MapType<Customer | null, R>[] | null>
  }
  /** Information to aid in pagination. */
  pageInfo: PaginationInfoObservableChain & {
    get: <R extends PaginationInfoRequest>(request: R, defaultValue?: PaginationInfo) => Observable<PaginationInfo>
  }
}

export interface PaginationInfoPromiseChain {
  currentPage: { get: (request?: boolean | number, defaultValue?: Int) => Promise<Int> }
  perPage: { get: (request?: boolean | number, defaultValue?: Int) => Promise<Int> }
  pageCount: { get: (request?: boolean | number, defaultValue?: Int | null) => Promise<Int | null> }
  itemCount: { get: (request?: boolean | number, defaultValue?: Int | null) => Promise<Int | null> }
  hasNextPage: { get: (request?: boolean | number, defaultValue?: Boolean | null) => Promise<Boolean | null> }
  hasPreviousPage: { get: (request?: boolean | number, defaultValue?: Boolean | null) => Promise<Boolean | null> }
}

export interface PaginationInfoObservableChain {
  currentPage: { get: (request?: boolean | number, defaultValue?: Int) => Observable<Int> }
  perPage: { get: (request?: boolean | number, defaultValue?: Int) => Observable<Int> }
  pageCount: { get: (request?: boolean | number, defaultValue?: Int | null) => Observable<Int | null> }
  itemCount: { get: (request?: boolean | number, defaultValue?: Int | null) => Observable<Int | null> }
  hasNextPage: { get: (request?: boolean | number, defaultValue?: Boolean | null) => Observable<Boolean | null> }
  hasPreviousPage: { get: (request?: boolean | number, defaultValue?: Boolean | null) => Observable<Boolean | null> }
}

/** A connection to a list of items. */
export interface CustomerConnectionPromiseChain {
  /** Total object count. */
  count: { get: (request?: boolean | number, defaultValue?: Int) => Promise<Int> }
  /** Information to aid in pagination. */
  pageInfo: PageInfoPromiseChain & {
    get: <R extends PageInfoRequest>(request: R, defaultValue?: PageInfo) => Promise<PageInfo>
  }
  /** Information to aid in pagination. */
  edges: { get: <R extends CustomerEdgeRequest>(request: R, defaultValue?: CustomerEdge[]) => Promise<CustomerEdge[]> }
}

/** A connection to a list of items. */
export interface CustomerConnectionObservableChain {
  /** Total object count. */
  count: { get: (request?: boolean | number, defaultValue?: Int) => Observable<Int> }
  /** Information to aid in pagination. */
  pageInfo: PageInfoObservableChain & {
    get: <R extends PageInfoRequest>(request: R, defaultValue?: PageInfo) => Observable<PageInfo>
  }
  /** Information to aid in pagination. */
  edges: { get: <R extends CustomerEdgeRequest>(request: R, defaultValue?: CustomerEdge[]) => Observable<CustomerEdge[]> }
}

/** An edge in a connection. */
export interface CustomerEdgePromiseChain {
  /** The item at the end of the edge */
  node: CustomerPromiseChain & { get: <R extends CustomerRequest>(request: R, defaultValue?: Customer) => Promise<Customer> }
  /** A cursor for use in pagination */
  cursor: { get: (request?: boolean | number, defaultValue?: String) => Promise<String> }
}

/** An edge in a connection. */
export interface CustomerEdgeObservableChain {
  /** The item at the end of the edge */
  node: CustomerObservableChain & {
    get: <R extends CustomerRequest>(request: R, defaultValue?: Customer) => Observable<Customer>
  }
  /** A cursor for use in pagination */
  cursor: { get: (request?: boolean | number, defaultValue?: String) => Observable<String> }
}

/** List of items with pagination. */
export interface EmployeePaginationPromiseChain {
  /** Total object count. */
  count: { get: (request?: boolean | number, defaultValue?: Int | null) => Promise<Int | null> }
  /** Array of objects. */
  items: {
    get: <R extends EmployeeRequest>(
      request: R,
      defaultValue?: MapType<Employee | null, R>[] | null,
    ) => Promise<MapType<Employee | null, R>[] | null>
  }
  /** Information to aid in pagination. */
  pageInfo: PaginationInfoPromiseChain & {
    get: <R extends PaginationInfoRequest>(request: R, defaultValue?: PaginationInfo) => Promise<PaginationInfo>
  }
}

/** List of items with pagination. */
export interface EmployeePaginationObservableChain {
  /** Total object count. */
  count: { get: (request?: boolean | number, defaultValue?: Int | null) => Observable<Int | null> }
  /** Array of objects. */
  items: {
    get: <R extends EmployeeRequest>(
      request: R,
      defaultValue?: MapType<Employee | null, R>[] | null,
    ) => Observable<MapType<Employee | null, R>[] | null>
  }
  /** Information to aid in pagination. */
  pageInfo: PaginationInfoObservableChain & {
    get: <R extends PaginationInfoRequest>(request: R, defaultValue?: PaginationInfo) => Observable<PaginationInfo>
  }
}

/** List of items with pagination. */
export interface OrderPaginationPromiseChain {
  /** Total object count. */
  count: { get: (request?: boolean | number, defaultValue?: Int | null) => Promise<Int | null> }
  /** Array of objects. */
  items: {
    get: <R extends OrderRequest>(
      request: R,
      defaultValue?: MapType<Order | null, R>[] | null,
    ) => Promise<MapType<Order | null, R>[] | null>
  }
  /** Information to aid in pagination. */
  pageInfo: PaginationInfoPromiseChain & {
    get: <R extends PaginationInfoRequest>(request: R, defaultValue?: PaginationInfo) => Promise<PaginationInfo>
  }
}

/** List of items with pagination. */
export interface OrderPaginationObservableChain {
  /** Total object count. */
  count: { get: (request?: boolean | number, defaultValue?: Int | null) => Observable<Int | null> }
  /** Array of objects. */
  items: {
    get: <R extends OrderRequest>(
      request: R,
      defaultValue?: MapType<Order | null, R>[] | null,
    ) => Observable<MapType<Order | null, R>[] | null>
  }
  /** Information to aid in pagination. */
  pageInfo: PaginationInfoObservableChain & {
    get: <R extends PaginationInfoRequest>(request: R, defaultValue?: PaginationInfo) => Observable<PaginationInfo>
  }
}

/** List of items with pagination. */
export interface ProductPaginationPromiseChain {
  /** Total object count. */
  count: { get: (request?: boolean | number, defaultValue?: Int | null) => Promise<Int | null> }
  /** Array of objects. */
  items: {
    get: <R extends ProductRequest>(
      request: R,
      defaultValue?: MapType<Product | null, R>[] | null,
    ) => Promise<MapType<Product | null, R>[] | null>
  }
  /** Information to aid in pagination. */
  pageInfo: PaginationInfoPromiseChain & {
    get: <R extends PaginationInfoRequest>(request: R, defaultValue?: PaginationInfo) => Promise<PaginationInfo>
  }
}

/** List of items with pagination. */
export interface ProductPaginationObservableChain {
  /** Total object count. */
  count: { get: (request?: boolean | number, defaultValue?: Int | null) => Observable<Int | null> }
  /** Array of objects. */
  items: {
    get: <R extends ProductRequest>(
      request: R,
      defaultValue?: MapType<Product | null, R>[] | null,
    ) => Observable<MapType<Product | null, R>[] | null>
  }
  /** Information to aid in pagination. */
  pageInfo: PaginationInfoObservableChain & {
    get: <R extends PaginationInfoRequest>(request: R, defaultValue?: PaginationInfo) => Observable<PaginationInfo>
  }
}

export interface RegionPromiseChain {
  /** Region unique ID */
  regionID: { get: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
  name: { get: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
  territories: {
    get: <R extends RegionTerritoriesRequest>(
      request: R,
      defaultValue?: MapType<RegionTerritories | null, R>[] | null,
    ) => Promise<MapType<RegionTerritories | null, R>[] | null>
  }
  _id: { get: (request?: boolean | number, defaultValue?: MongoID) => Promise<MongoID> }
  employees: ((args?: {
    skip?: Int | null
    limit?: Int | null
    sort?: SortFindManyEmployeeInput | null
  }) => {
    get: <R extends EmployeeRequest>(
      request: R,
      defaultValue?: MapType<Employee | null, R>[] | null,
    ) => Promise<MapType<Employee | null, R>[] | null>
  }) & {
    get: <R extends EmployeeRequest>(
      request: R,
      defaultValue?: MapType<Employee | null, R>[] | null,
    ) => Promise<MapType<Employee | null, R>[] | null>
  }
}

export interface RegionObservableChain {
  /** Region unique ID */
  regionID: { get: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
  name: { get: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
  territories: {
    get: <R extends RegionTerritoriesRequest>(
      request: R,
      defaultValue?: MapType<RegionTerritories | null, R>[] | null,
    ) => Observable<MapType<RegionTerritories | null, R>[] | null>
  }
  _id: { get: (request?: boolean | number, defaultValue?: MongoID) => Observable<MongoID> }
  employees: ((args?: {
    skip?: Int | null
    limit?: Int | null
    sort?: SortFindManyEmployeeInput | null
  }) => {
    get: <R extends EmployeeRequest>(
      request: R,
      defaultValue?: MapType<Employee | null, R>[] | null,
    ) => Observable<MapType<Employee | null, R>[] | null>
  }) & {
    get: <R extends EmployeeRequest>(
      request: R,
      defaultValue?: MapType<Employee | null, R>[] | null,
    ) => Observable<MapType<Employee | null, R>[] | null>
  }
}

export interface RegionTerritoriesPromiseChain {
  territoryID: { get: (request?: boolean | number, defaultValue?: Float | null) => Promise<Float | null> }
  name: { get: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
}

export interface RegionTerritoriesObservableChain {
  territoryID: { get: (request?: boolean | number, defaultValue?: Float | null) => Observable<Float | null> }
  name: { get: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
}

/** A connection to a list of items. */
export interface SupplierConnectionPromiseChain {
  /** Total object count. */
  count: { get: (request?: boolean | number, defaultValue?: Int) => Promise<Int> }
  /** Information to aid in pagination. */
  pageInfo: PageInfoPromiseChain & {
    get: <R extends PageInfoRequest>(request: R, defaultValue?: PageInfo) => Promise<PageInfo>
  }
  /** Information to aid in pagination. */
  edges: { get: <R extends SupplierEdgeRequest>(request: R, defaultValue?: SupplierEdge[]) => Promise<SupplierEdge[]> }
}

/** A connection to a list of items. */
export interface SupplierConnectionObservableChain {
  /** Total object count. */
  count: { get: (request?: boolean | number, defaultValue?: Int) => Observable<Int> }
  /** Information to aid in pagination. */
  pageInfo: PageInfoObservableChain & {
    get: <R extends PageInfoRequest>(request: R, defaultValue?: PageInfo) => Observable<PageInfo>
  }
  /** Information to aid in pagination. */
  edges: { get: <R extends SupplierEdgeRequest>(request: R, defaultValue?: SupplierEdge[]) => Observable<SupplierEdge[]> }
}

/** An edge in a connection. */
export interface SupplierEdgePromiseChain {
  /** The item at the end of the edge */
  node: SupplierPromiseChain & { get: <R extends SupplierRequest>(request: R, defaultValue?: Supplier) => Promise<Supplier> }
  /** A cursor for use in pagination */
  cursor: { get: (request?: boolean | number, defaultValue?: String) => Promise<String> }
}

/** An edge in a connection. */
export interface SupplierEdgeObservableChain {
  /** The item at the end of the edge */
  node: SupplierObservableChain & {
    get: <R extends SupplierRequest>(request: R, defaultValue?: Supplier) => Observable<Supplier>
  }
  /** A cursor for use in pagination */
  cursor: { get: (request?: boolean | number, defaultValue?: String) => Observable<String> }
}

export interface MutationPromiseChain {
  /** Create one document with mongoose defaults, setters, hooks and validation */
  createProduct: (args: {
    record: CreateOneProductInput
  }) => CreateOneProductPayloadPromiseChain & {
    get: <R extends CreateOneProductPayloadRequest>(
      request: R,
      defaultValue?: MapType<CreateOneProductPayload, R> | null,
    ) => Promise<MapType<CreateOneProductPayload, R> | null>
  }
  /** Update one document: 1) Retrieve one document by findById. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  updateProduct: (args: {
    record: UpdateByIdProductInput
  }) => UpdateByIdProductPayloadPromiseChain & {
    get: <R extends UpdateByIdProductPayloadRequest>(
      request: R,
      defaultValue?: MapType<UpdateByIdProductPayload, R> | null,
    ) => Promise<MapType<UpdateByIdProductPayload, R> | null>
  }
  /** Remove one document: 1) Remove with hooks via findOneAndRemove. 2) Return removed document. */
  removeProduct: ((args?: {
    /** Filter by fields */
    filter?: FilterRemoveOneProductInput | null
    sort?: SortRemoveOneProductInput | null
  }) => RemoveOneProductPayloadPromiseChain & {
    get: <R extends RemoveOneProductPayloadRequest>(
      request: R,
      defaultValue?: MapType<RemoveOneProductPayload, R> | null,
    ) => Promise<MapType<RemoveOneProductPayload, R> | null>
  }) &
    (RemoveOneProductPayloadPromiseChain & {
      get: <R extends RemoveOneProductPayloadRequest>(
        request: R,
        defaultValue?: MapType<RemoveOneProductPayload, R> | null,
      ) => Promise<MapType<RemoveOneProductPayload, R> | null>
    })
  /** Create one document with mongoose defaults, setters, hooks and validation */
  createOrder: (args: {
    record: CreateOneOrderInput
  }) => CreateOneOrderPayloadPromiseChain & {
    get: <R extends CreateOneOrderPayloadRequest>(
      request: R,
      defaultValue?: MapType<CreateOneOrderPayload, R> | null,
    ) => Promise<MapType<CreateOneOrderPayload, R> | null>
  }
  /** Update one document: 1) Retrieve one document by findById. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  updateOrder: (args: {
    record: UpdateByIdOrderInput
  }) => UpdateByIdOrderPayloadPromiseChain & {
    get: <R extends UpdateByIdOrderPayloadRequest>(
      request: R,
      defaultValue?: MapType<UpdateByIdOrderPayload, R> | null,
    ) => Promise<MapType<UpdateByIdOrderPayload, R> | null>
  }
  /** Remove one document: 1) Remove with hooks via findOneAndRemove. 2) Return removed document. */
  removeOrder: ((args?: {
    /** Filter by fields */
    filter?: FilterRemoveOneOrderInput | null
    sort?: SortRemoveOneOrderInput | null
  }) => RemoveOneOrderPayloadPromiseChain & {
    get: <R extends RemoveOneOrderPayloadRequest>(
      request: R,
      defaultValue?: MapType<RemoveOneOrderPayload, R> | null,
    ) => Promise<MapType<RemoveOneOrderPayload, R> | null>
  }) &
    (RemoveOneOrderPayloadPromiseChain & {
      get: <R extends RemoveOneOrderPayloadRequest>(
        request: R,
        defaultValue?: MapType<RemoveOneOrderPayload, R> | null,
      ) => Promise<MapType<RemoveOneOrderPayload, R> | null>
    })
  /** Update one document: 1) Retrieve one document by findById. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  updateEmployee: (args: {
    record: UpdateByIdEmployeeInput
  }) => UpdateByIdEmployeePayloadPromiseChain & {
    get: <R extends UpdateByIdEmployeePayloadRequest>(
      request: R,
      defaultValue?: MapType<UpdateByIdEmployeePayload, R> | null,
    ) => Promise<MapType<UpdateByIdEmployeePayload, R> | null>
  }
  /** Remove all data and seed DB from scratch. Anyway data automatically reloaded every 30 minutes. */
  resetData: { get: (request?: boolean | number, defaultValue?: String | null) => Promise<String | null> }
}

export interface MutationObservableChain {
  /** Create one document with mongoose defaults, setters, hooks and validation */
  createProduct: (args: {
    record: CreateOneProductInput
  }) => CreateOneProductPayloadObservableChain & {
    get: <R extends CreateOneProductPayloadRequest>(
      request: R,
      defaultValue?: MapType<CreateOneProductPayload, R> | null,
    ) => Observable<MapType<CreateOneProductPayload, R> | null>
  }
  /** Update one document: 1) Retrieve one document by findById. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  updateProduct: (args: {
    record: UpdateByIdProductInput
  }) => UpdateByIdProductPayloadObservableChain & {
    get: <R extends UpdateByIdProductPayloadRequest>(
      request: R,
      defaultValue?: MapType<UpdateByIdProductPayload, R> | null,
    ) => Observable<MapType<UpdateByIdProductPayload, R> | null>
  }
  /** Remove one document: 1) Remove with hooks via findOneAndRemove. 2) Return removed document. */
  removeProduct: ((args?: {
    /** Filter by fields */
    filter?: FilterRemoveOneProductInput | null
    sort?: SortRemoveOneProductInput | null
  }) => RemoveOneProductPayloadObservableChain & {
    get: <R extends RemoveOneProductPayloadRequest>(
      request: R,
      defaultValue?: MapType<RemoveOneProductPayload, R> | null,
    ) => Observable<MapType<RemoveOneProductPayload, R> | null>
  }) &
    (RemoveOneProductPayloadObservableChain & {
      get: <R extends RemoveOneProductPayloadRequest>(
        request: R,
        defaultValue?: MapType<RemoveOneProductPayload, R> | null,
      ) => Observable<MapType<RemoveOneProductPayload, R> | null>
    })
  /** Create one document with mongoose defaults, setters, hooks and validation */
  createOrder: (args: {
    record: CreateOneOrderInput
  }) => CreateOneOrderPayloadObservableChain & {
    get: <R extends CreateOneOrderPayloadRequest>(
      request: R,
      defaultValue?: MapType<CreateOneOrderPayload, R> | null,
    ) => Observable<MapType<CreateOneOrderPayload, R> | null>
  }
  /** Update one document: 1) Retrieve one document by findById. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  updateOrder: (args: {
    record: UpdateByIdOrderInput
  }) => UpdateByIdOrderPayloadObservableChain & {
    get: <R extends UpdateByIdOrderPayloadRequest>(
      request: R,
      defaultValue?: MapType<UpdateByIdOrderPayload, R> | null,
    ) => Observable<MapType<UpdateByIdOrderPayload, R> | null>
  }
  /** Remove one document: 1) Remove with hooks via findOneAndRemove. 2) Return removed document. */
  removeOrder: ((args?: {
    /** Filter by fields */
    filter?: FilterRemoveOneOrderInput | null
    sort?: SortRemoveOneOrderInput | null
  }) => RemoveOneOrderPayloadObservableChain & {
    get: <R extends RemoveOneOrderPayloadRequest>(
      request: R,
      defaultValue?: MapType<RemoveOneOrderPayload, R> | null,
    ) => Observable<MapType<RemoveOneOrderPayload, R> | null>
  }) &
    (RemoveOneOrderPayloadObservableChain & {
      get: <R extends RemoveOneOrderPayloadRequest>(
        request: R,
        defaultValue?: MapType<RemoveOneOrderPayload, R> | null,
      ) => Observable<MapType<RemoveOneOrderPayload, R> | null>
    })
  /** Update one document: 1) Retrieve one document by findById. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  updateEmployee: (args: {
    record: UpdateByIdEmployeeInput
  }) => UpdateByIdEmployeePayloadObservableChain & {
    get: <R extends UpdateByIdEmployeePayloadRequest>(
      request: R,
      defaultValue?: MapType<UpdateByIdEmployeePayload, R> | null,
    ) => Observable<MapType<UpdateByIdEmployeePayload, R> | null>
  }
  /** Remove all data and seed DB from scratch. Anyway data automatically reloaded every 30 minutes. */
  resetData: { get: (request?: boolean | number, defaultValue?: String | null) => Observable<String | null> }
}

export interface CreateOneProductPayloadPromiseChain {
  /** Created document ID */
  recordId: { get: (request?: boolean | number, defaultValue?: MongoID | null) => Promise<MongoID | null> }
  /** Created document */
  record: ProductPromiseChain & {
    get: <R extends ProductRequest>(
      request: R,
      defaultValue?: MapType<Product, R> | null,
    ) => Promise<MapType<Product, R> | null>
  }
  query: QueryPromiseChain & {
    get: <R extends QueryRequest>(request: R, defaultValue?: MapType<Query, R> | null) => Promise<MapType<Query, R> | null>
  }
}

export interface CreateOneProductPayloadObservableChain {
  /** Created document ID */
  recordId: { get: (request?: boolean | number, defaultValue?: MongoID | null) => Observable<MongoID | null> }
  /** Created document */
  record: ProductObservableChain & {
    get: <R extends ProductRequest>(
      request: R,
      defaultValue?: MapType<Product, R> | null,
    ) => Observable<MapType<Product, R> | null>
  }
  query: QueryObservableChain & {
    get: <R extends QueryRequest>(
      request: R,
      defaultValue?: MapType<Query, R> | null,
    ) => Observable<MapType<Query, R> | null>
  }
}

export interface UpdateByIdProductPayloadPromiseChain {
  /** Updated document ID */
  recordId: { get: (request?: boolean | number, defaultValue?: MongoID | null) => Promise<MongoID | null> }
  /** Updated document */
  record: ProductPromiseChain & {
    get: <R extends ProductRequest>(
      request: R,
      defaultValue?: MapType<Product, R> | null,
    ) => Promise<MapType<Product, R> | null>
  }
  query: QueryPromiseChain & {
    get: <R extends QueryRequest>(request: R, defaultValue?: MapType<Query, R> | null) => Promise<MapType<Query, R> | null>
  }
}

export interface UpdateByIdProductPayloadObservableChain {
  /** Updated document ID */
  recordId: { get: (request?: boolean | number, defaultValue?: MongoID | null) => Observable<MongoID | null> }
  /** Updated document */
  record: ProductObservableChain & {
    get: <R extends ProductRequest>(
      request: R,
      defaultValue?: MapType<Product, R> | null,
    ) => Observable<MapType<Product, R> | null>
  }
  query: QueryObservableChain & {
    get: <R extends QueryRequest>(
      request: R,
      defaultValue?: MapType<Query, R> | null,
    ) => Observable<MapType<Query, R> | null>
  }
}

export interface RemoveOneProductPayloadPromiseChain {
  /** Removed document ID */
  recordId: { get: (request?: boolean | number, defaultValue?: MongoID | null) => Promise<MongoID | null> }
  /** Removed document */
  record: ProductPromiseChain & {
    get: <R extends ProductRequest>(
      request: R,
      defaultValue?: MapType<Product, R> | null,
    ) => Promise<MapType<Product, R> | null>
  }
  query: QueryPromiseChain & {
    get: <R extends QueryRequest>(request: R, defaultValue?: MapType<Query, R> | null) => Promise<MapType<Query, R> | null>
  }
}

export interface RemoveOneProductPayloadObservableChain {
  /** Removed document ID */
  recordId: { get: (request?: boolean | number, defaultValue?: MongoID | null) => Observable<MongoID | null> }
  /** Removed document */
  record: ProductObservableChain & {
    get: <R extends ProductRequest>(
      request: R,
      defaultValue?: MapType<Product, R> | null,
    ) => Observable<MapType<Product, R> | null>
  }
  query: QueryObservableChain & {
    get: <R extends QueryRequest>(
      request: R,
      defaultValue?: MapType<Query, R> | null,
    ) => Observable<MapType<Query, R> | null>
  }
}

export interface CreateOneOrderPayloadPromiseChain {
  /** Created document ID */
  recordId: { get: (request?: boolean | number, defaultValue?: MongoID | null) => Promise<MongoID | null> }
  /** Created document */
  record: OrderPromiseChain & {
    get: <R extends OrderRequest>(request: R, defaultValue?: MapType<Order, R> | null) => Promise<MapType<Order, R> | null>
  }
  query: QueryPromiseChain & {
    get: <R extends QueryRequest>(request: R, defaultValue?: MapType<Query, R> | null) => Promise<MapType<Query, R> | null>
  }
}

export interface CreateOneOrderPayloadObservableChain {
  /** Created document ID */
  recordId: { get: (request?: boolean | number, defaultValue?: MongoID | null) => Observable<MongoID | null> }
  /** Created document */
  record: OrderObservableChain & {
    get: <R extends OrderRequest>(
      request: R,
      defaultValue?: MapType<Order, R> | null,
    ) => Observable<MapType<Order, R> | null>
  }
  query: QueryObservableChain & {
    get: <R extends QueryRequest>(
      request: R,
      defaultValue?: MapType<Query, R> | null,
    ) => Observable<MapType<Query, R> | null>
  }
}

export interface UpdateByIdOrderPayloadPromiseChain {
  /** Updated document ID */
  recordId: { get: (request?: boolean | number, defaultValue?: MongoID | null) => Promise<MongoID | null> }
  /** Updated document */
  record: OrderPromiseChain & {
    get: <R extends OrderRequest>(request: R, defaultValue?: MapType<Order, R> | null) => Promise<MapType<Order, R> | null>
  }
  query: QueryPromiseChain & {
    get: <R extends QueryRequest>(request: R, defaultValue?: MapType<Query, R> | null) => Promise<MapType<Query, R> | null>
  }
}

export interface UpdateByIdOrderPayloadObservableChain {
  /** Updated document ID */
  recordId: { get: (request?: boolean | number, defaultValue?: MongoID | null) => Observable<MongoID | null> }
  /** Updated document */
  record: OrderObservableChain & {
    get: <R extends OrderRequest>(
      request: R,
      defaultValue?: MapType<Order, R> | null,
    ) => Observable<MapType<Order, R> | null>
  }
  query: QueryObservableChain & {
    get: <R extends QueryRequest>(
      request: R,
      defaultValue?: MapType<Query, R> | null,
    ) => Observable<MapType<Query, R> | null>
  }
}

export interface RemoveOneOrderPayloadPromiseChain {
  /** Removed document ID */
  recordId: { get: (request?: boolean | number, defaultValue?: MongoID | null) => Promise<MongoID | null> }
  /** Removed document */
  record: OrderPromiseChain & {
    get: <R extends OrderRequest>(request: R, defaultValue?: MapType<Order, R> | null) => Promise<MapType<Order, R> | null>
  }
  query: QueryPromiseChain & {
    get: <R extends QueryRequest>(request: R, defaultValue?: MapType<Query, R> | null) => Promise<MapType<Query, R> | null>
  }
}

export interface RemoveOneOrderPayloadObservableChain {
  /** Removed document ID */
  recordId: { get: (request?: boolean | number, defaultValue?: MongoID | null) => Observable<MongoID | null> }
  /** Removed document */
  record: OrderObservableChain & {
    get: <R extends OrderRequest>(
      request: R,
      defaultValue?: MapType<Order, R> | null,
    ) => Observable<MapType<Order, R> | null>
  }
  query: QueryObservableChain & {
    get: <R extends QueryRequest>(
      request: R,
      defaultValue?: MapType<Query, R> | null,
    ) => Observable<MapType<Query, R> | null>
  }
}

export interface UpdateByIdEmployeePayloadPromiseChain {
  /** Updated document ID */
  recordId: { get: (request?: boolean | number, defaultValue?: MongoID | null) => Promise<MongoID | null> }
  /** Updated document */
  record: EmployeePromiseChain & {
    get: <R extends EmployeeRequest>(
      request: R,
      defaultValue?: MapType<Employee, R> | null,
    ) => Promise<MapType<Employee, R> | null>
  }
  query: QueryPromiseChain & {
    get: <R extends QueryRequest>(request: R, defaultValue?: MapType<Query, R> | null) => Promise<MapType<Query, R> | null>
  }
}

export interface UpdateByIdEmployeePayloadObservableChain {
  /** Updated document ID */
  recordId: { get: (request?: boolean | number, defaultValue?: MongoID | null) => Observable<MongoID | null> }
  /** Updated document */
  record: EmployeeObservableChain & {
    get: <R extends EmployeeRequest>(
      request: R,
      defaultValue?: MapType<Employee, R> | null,
    ) => Observable<MapType<Employee, R> | null>
  }
  query: QueryObservableChain & {
    get: <R extends QueryRequest>(
      request: R,
      defaultValue?: MapType<Query, R> | null,
    ) => Observable<MapType<Query, R> | null>
  }
}

export interface SubscriptionPromiseChain {
  orderCreated: OrderPromiseChain & {
    get: <R extends OrderRequest>(request: R, defaultValue?: MapType<Order, R> | null) => Promise<MapType<Order, R> | null>
  }
  orderUpdated: OrderPromiseChain & {
    get: <R extends OrderRequest>(request: R, defaultValue?: MapType<Order, R> | null) => Promise<MapType<Order, R> | null>
  }
  orderRemoved: { get: (request?: boolean | number, defaultValue?: MongoID | null) => Promise<MongoID | null> }
}

export interface SubscriptionObservableChain {
  orderCreated: OrderObservableChain & {
    get: <R extends OrderRequest>(
      request: R,
      defaultValue?: MapType<Order, R> | null,
    ) => Observable<MapType<Order, R> | null>
  }
  orderUpdated: OrderObservableChain & {
    get: <R extends OrderRequest>(
      request: R,
      defaultValue?: MapType<Order, R> | null,
    ) => Observable<MapType<Order, R> | null>
  }
  orderRemoved: { get: (request?: boolean | number, defaultValue?: MongoID | null) => Observable<MongoID | null> }
}
