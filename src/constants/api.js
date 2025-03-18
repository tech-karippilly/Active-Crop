
const SWAGGER ='/api-docs'

const BASEURL = '/'
const ADMIN = '/admin'

const ROLE_BASE = `${ADMIN}/role`
const CREATE_ROLE = `/create`

const ADMIN_AUTH = `${ADMIN}/auth`
const SIGNUP_PAGE = '/signup-page'
const SIGNUP ='/signup'
const SIGNIN_PAGE = '/signin-page'
const SIGNIN ='/signin'
const LOGOUT ='/logout'

const ADMIN_DASHBOARD =`${ADMIN}/`

const CATEGOERY_BASE =`${ADMIN}/category`
const CATEGOERY_LIST_PAGE = '/category-list-page'
const CATAGOERY_LIST ='/category-list'
const CATEGOERY_CREATE_PAGE = '/create-category-page'
const CATAGOERY_CREATE = '/create-category'
const CATEGOERY_EDIT_PAGE = '/update-category-page/:id'
const CATAGOERY_EDIT ='/update-category'
const CATAGOERY_DELETE ='/category-delete/:id'
const CATAGOERY_STATUS ='/category-status'


export {
    BASEURL,
    SWAGGER,
    ROLE_BASE,
    CREATE_ROLE,
    ADMIN_AUTH,
    SIGNUP_PAGE,
    SIGNUP,
    SIGNIN_PAGE,
    SIGNIN,
    LOGOUT,
    ADMIN_DASHBOARD,
    CATEGOERY_BASE,
    CATEGOERY_LIST_PAGE,
    CATEGOERY_CREATE_PAGE,
    CATEGOERY_EDIT_PAGE
}