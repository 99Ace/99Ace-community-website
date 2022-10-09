import { useState, useEffect, React } from "react";
import { useParams } from "react-router-dom";
import { Keith, Jerry } from "./profiles/index";

const myComponentsList = {
    "Keith":Keith, 
    "Jerry":Jerry
};

export default function Profile() {
   
    const member = {
        id: "2",
        name: "Jerry",
        position: "React Developer",
        details: "lorem...",
        component : "Keith"
      }
    const {id} = useParams();
    var Type = myComponentsList[member.component]
    

    return <>
        <Type />
    </>
}