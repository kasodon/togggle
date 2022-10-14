import React from 'react'
const Landing = React.lazy(
    () => import('../components/Landing/landing'),
)
const Company = React.lazy(
    () => import('../components/Company/company'),
)

var mainRoutes = [
    { path: '/', name: 'Landing Page', component: <Landing /> },
    { path: '/company', name: 'Our Company', component: <Company /> },
]

export default mainRoutes