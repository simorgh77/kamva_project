import React from "react";
const HomePage=React.lazy(()=>import("./pages/HomePage/HomePage"))
const Pricing=React.lazy(()=>import("./pages/Pricing/Pricing"))
const Knowledgebase=React.lazy(()=>import("./pages/Knowledgebase/Knowledgebase"))
const Features=React.lazy(()=>import("./pages/Features/Features"))
const Tutorial=React.lazy(()=>import("./pages/Tutorial/Tutorial"))
const Support=React.lazy(()=>import("./pages/Support/Support"))
export const routes=[
{
    path:'/',
    exact:true,
    page:HomePage
},
{
    path:'/support',
    exact:true,
    page:Support
},
{
    path:'/pricing',
    exact:true,
    page:Pricing
},
{
    path:'/knowledgebase',
    exact:true,
    page:Knowledgebase
},
{
    path:'/features',
    exact:true,
    page:Features
},
{
    path:'/tutorial',
    exact:true,
    page:Tutorial
},
]